"""宠物 BU 口径门禁。

设计要求（技术文档 §6.6）：
- Σ_{p,d} 月格[档] = 概览 monthly[档]（容差 0.02 万）
- Σ 格 H1 = h1_dw_total
- Σ baseShare = Σ lineWeight = Σ c1ProvShare = 1
- test_compute_snapshot 逐项比对 compute() 输出快照——重构内部结构时保证数字不变；
  口径故意要改时需同步更新快照常量。

测试库为独立临时 SQLite，由 生成模拟用量.py 灌入确定性数据（seed 固定）。
"""

import os
import sys
import tempfile
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE))
sys.path.insert(0, str(BASE / "scripts"))

_tmpdir = tempfile.mkdtemp(prefix="pet_test_")
os.environ["PET_DB_URL"] = f"sqlite:///{_tmpdir}/pet_test.db"

import pytest  # noqa: E402

from app.compute_pet import (  # noqa: E402
    TIERS,
    _dim_weights,
    compute,
    compute_pet_matrix,
    compute_pet_sku,
)
from app.db import SessionLocal  # noqa: E402

import importlib  # noqa: E402

gen = importlib.import_module("生成模拟用量")

TOL = 0.02  # 万元，逐格 round 舍入累积容差


@pytest.fixture(scope="session", autouse=True)
def dataset():
    gen.main()
    yield


@pytest.fixture()
def db():
    s = SessionLocal()
    yield s
    s.close()


def test_compute_snapshot(db):
    r = compute(db)
    assert r["tiers"] == {"red": 2227.66, "yellow": 3194.96, "green": 3563.6}
    assert r["tiers_fy"] == {"red": 3836.6, "yellow": 4803.9, "green": 5172.54}
    assert r["components"]["yellow"] == {
        "基准": 2268.43,
        "僵尸机激活": 34.73,
        "新投放": 97.19,
        "经销商压货": 756.14,
        "新上市线C1": 96.82,
        "返利": -58.35,
    }
    assert r["h1_actual"]["total"] == 1608.94
    assert r["h1_actual"]["confidence"] == "confirmed"
    assert r["facts"]["devices"] == 7965
    assert r["facts"]["per_dev"] == 474.7
    assert r["facts"]["c1_existing"] == 98
    assert r["facts"]["c1_new_h2"] == 775
    assert [r["monthly"]["yellow"][m] for m in range(7, 13)] == [
        368.57, 297.62, 411.23, 424.26, 854.24, 839.04,
    ]


def test_monthly_sums_to_tiers(db):
    r = compute(db)
    for t in TIERS:
        assert sum(r["monthly"][t].values()) == pytest.approx(r["tiers"][t], abs=TOL)


def test_weights_sum_to_one(db):
    w = _dim_weights(db)
    assert sum(w["base_share"].values()) == pytest.approx(1.0, abs=1e-9)
    assert sum(w["line_weight"].values()) == pytest.approx(1.0, abs=1e-9)
    assert sum(w["c1_prov_share"].values()) == pytest.approx(1.0, abs=1e-9)


def test_matrix_matches_overview(db):
    r = compute(db)
    mx = compute_pet_matrix(db)
    for t in TIERS:
        for i, m in enumerate(range(7, 13)):
            cell_sum = sum(
                c["h2_m"][t][i] for row in mx["rows"] for c in row["cells"].values()
            )
            assert cell_sum == pytest.approx(r["monthly"][t][m], abs=TOL), f"{t} {m}月"


def test_matrix_h1_matches_dw(db):
    r = compute(db)
    mx = compute_pet_matrix(db)
    h1_sum = sum(c["actual_h1"] for row in mx["rows"] for c in row["cells"].values())
    assert h1_sum == pytest.approx(r["h1_actual"]["total"], abs=TOL)
    assert mx["dw_total"] == r["h1_actual"]["total"]


def test_sku_matches_overview(db):
    r = compute(db)
    sk = compute_pet_sku(db)
    for t in TIERS:
        total = sum(row["tiers_h2"][t] for row in sk["rows"])
        assert total == pytest.approx(r["tiers"][t], abs=TOL), t
    h1_sum = sum(row["actual_h1"] for row in sk["rows"])
    assert h1_sum == pytest.approx(r["h1_actual"]["total"], abs=TOL)


def test_sku_merges_code_versions(db):
    """换版编码按项目名合并：TO1 的 05.03.114.002（1–3 月）+ .003（4 月起）并成一行，
    且 H1 有、近 3 月无的老码检测量不被 H1 摊派漏掉。"""
    sk = compute_pet_sku(db)
    to1 = [row for row in sk["rows"] if row["project"] == "TO1"]
    assert len(to1) == 1
    assert set(to1[0]["codes"]) == {"05.03.114.002", "05.03.114.003"}
    assert sum(to1[0]["actual_h1_m"][:3]) > 0  # 老码月份的 H1 摊派没丢


def test_sku_filters(db):
    sk = compute_pet_sku(db, province="广东")
    assert all("C1服务费" != r["project"] or r["tiers_h2"]["yellow"] > 0 for r in sk["rows"])
    sk_c1 = compute_pet_sku(db, device_type="C1")
    assert [r["project"] for r in sk_c1["rows"]] == ["C1服务费"]
    sk_f1 = compute_pet_sku(db, device_type="F1")
    assert all("C1" not in r["device_types"] for r in sk_f1["rows"])


def test_params_api():
    from fastapi.testclient import TestClient

    from app.main import app

    client = TestClient(app)
    params = client.get("/api/pet/params").json()
    keys = {p["key"] for p in params}
    assert {"price_source", "base_mode", "zombie_n", "stock_months", "rebate_h2", "c1_service_fee"} <= keys

    assert client.put("/api/pet/params/不存在的key", json={"value": "1"}).status_code == 404

    # 改参数即时重算：僵尸机基数翻倍 → 黄档僵尸机因子翻倍
    base = client.get("/api/pet/summary").json()
    old = next(p["value"] for p in params if p["key"] == "zombie_n")
    try:
        client.put("/api/pet/params/zombie_n", json={"value": str(float(old) * 2)})
        changed = client.get("/api/pet/summary").json()
        assert changed["components"]["yellow"]["僵尸机激活"] == pytest.approx(
            base["components"]["yellow"]["僵尸机激活"] * 2, abs=0.02
        )
    finally:
        client.put("/api/pet/params/zombie_n", json={"value": old})
