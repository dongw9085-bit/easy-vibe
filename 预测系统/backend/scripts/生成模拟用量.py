"""生成模拟 pet_usage 数据（⚠ 模拟数据，非真实经营数字）。

真实环境里 pet_usage 由 CRM 抓取管道灌入（crm抓取_设备用量.py +
load_用量_按月替换.py）。本脚本用于本地开发/演示：按技术文档 §5.1 的
逐月「单台月产 × 在营台数」实测表校准生成合成明细，使概览三档、
拆维度恒等式与页面交互都能在无内网数据的环境下端到端跑通。

校准目标（活动价口径）：
    2026-01  ¥441 × 7,557 台      2026-04  ¥450 × 7,778 台
    2026-02  ¥346 × 7,265 台      2026-05  ¥502 × 7,941 台
    2026-03  ¥448 × 7,714 台      2026-06  ¥472 × 7,965 台

用法：
    .venv/bin/python scripts/生成模拟用量.py
"""

import random
import sys
import zlib
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.db import Base, SessionLocal, engine  # noqa: E402
from app.models_pet import PetSku, PetUsage, seed_pet  # noqa: E402

# 逐月校准目标：ym -> (单台月产 元, 在营台数)
MONTH_TARGETS = {
    "2026-01": (441, 7557),
    "2026-02": (346, 7265),
    "2026-03": (448, 7714),
    "2026-04": (450, 7778),
    "2026-05": (502, 7941),
    "2026-06": (472, 7965),
}

PROVINCES = [
    ("广东", 0.13), ("浙江", 0.12), ("上海", 0.11), ("山东", 0.09), ("江苏", 0.08),
    ("四川", 0.06), ("北京", 0.06), ("湖北", 0.05), ("河南", 0.05), ("福建", 0.04),
    ("湖南", 0.04), ("安徽", 0.04), ("辽宁", 0.03), ("陕西", 0.03), ("重庆", 0.03),
    ("云南", 0.02), ("广西", 0.01), ("", 0.01),  # 空省 → 计算侧归一为"未分省"
]

LINE_SHARES = [("F1", 0.55), ("M4", 0.30), ("M16", 0.10), ("A1", 0.05)]

# 各线可跑的 SKU（编码见 pet_seed_data.json）。TO1 在 2026-04 换版：
# 旧码 05.03.114.002 只出现在 1–3 月，新码 .003 从 4 月起——用于验证
# "H1 有、近 3 月无"的 SKU 不被 H1 摊派漏掉。
LINE_SKUS = {
    "F1": ["05.03.101.001", "05.03.103.001", "05.03.104.001", "05.03.106.001", "TO1"],
    "M4": ["05.03.102.001", "05.03.105.001", "05.03.107.001", "05.03.108.001", "TO1"],
    "M16": ["05.03.101.001", "05.03.102.001", "05.03.104.001"],
    "A1": ["05.03.103.001", "05.03.105.001"],
}

# C1 逐月在营台数（4 月上市爬坡至 6 月 98 台）；生化项目编码无价目表价
C1_MONTH_DEVICES = {"2026-04": 30, "2026-05": 62, "2026-06": 98}
C1_CODE = "05.09.001.001"
C1_PROVINCES = ["广东", "浙江", "上海", "山东", "江苏", "四川", "北京", "湖北"]

EMPTY_SN_SHARE = 0.005  # 少量空 SN 行：收入进分子、不进台数分母（口径边界之一）


def _h(s):
    """稳定哈希（内建 hash 对字符串按进程加盐，不可复现）。"""
    return zlib.crc32(s.encode("utf-8"))


def _pick(rng, weighted):
    x = rng.random() * sum(w for _, w in weighted)
    for v, w in weighted:
        x -= w
        if x <= 0:
            return v
    return weighted[-1][0]


def main():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_pet(db)
        prices = {s.code: (s.price_act or s.price_reg) for s in db.query(PetSku).all()}

        rng = random.Random(20260727)
        max_dev = max(n for _, n in MONTH_TARGETS.values())
        pool = []
        for i in range(max_dev):
            pool.append(
                {
                    "sn": f"SIM{i:05d}",
                    "line": _pick(rng, LINE_SHARES),
                    "province": _pick(rng, PROVINCES),
                    "mult": rng.uniform(0.6, 1.4),  # 设备产出差异
                }
            )

        db.query(PetUsage).delete()
        rows = []

        for ym, (per_dev, n_dev) in sorted(MONTH_TARGETS.items()):
            active = pool[:n_dev]
            total = per_dev * n_dev
            dev_total = total * (1 - EMPTY_SN_SHARE)
            wsum = sum(d["mult"] for d in active)
            date = f"{ym}-15"
            for d in active:
                rev = dev_total * d["mult"] / wsum
                skus = LINE_SKUS[d["line"]]
                k1 = skus[_h(d["sn"] + "a") % len(skus)]
                k2 = skus[_h(d["sn"] + "b") % len(skus)]
                for code, share in ((k1, 0.7), (k2, 0.3)) if k1 != k2 else ((k1, 1.0),):
                    if code == "TO1":  # 换版：4 月起切新码
                        code = "05.03.114.002" if ym <= "2026-03" else "05.03.114.003"
                    price = prices[code]
                    rows.append(
                        dict(
                            src=ym, ym=ym, test_date=date,
                            device_sn=d["sn"], device_type=d["line"], reagent_code=code,
                            project=code, pathogen="模拟病原体",
                            tests=rev * share / price, positive=0.0, negative=0.0,
                            hospital=f"模拟宠物医院{_h(d['sn']) % 500:03d}",
                            province=d["province"],
                            dealer=f"模拟经销商{_h(d['sn']) % 60:02d}",
                        )
                    )
            # 空 SN 行：并入某个有价 SKU，补足月度收入总额
            empty_rev = total * EMPTY_SN_SHARE
            code = "05.03.101.001"
            rows.append(
                dict(
                    src=ym, ym=ym, test_date=date,
                    device_sn="", device_type="F1", reagent_code=code,
                    project=code, pathogen="模拟病原体",
                    tests=empty_rev / prices[code], positive=0.0, negative=0.0,
                    hospital="模拟宠物医院(未关联SN)", province="广东", dealer="模拟经销商00",
                )
            )

        # C1：无价编码，不 join 价目表，只贡献在营台数（服务费口径）
        for ym, n in sorted(C1_MONTH_DEVICES.items()):
            for i in range(n):
                rows.append(
                    dict(
                        src=ym, ym=ym, test_date=f"{ym}-20",
                        device_sn=f"C1SIM{i:03d}", device_type="C1", reagent_code=C1_CODE,
                        project="生化套餐", pathogen="—",
                        tests=float(150 + i % 100), positive=0.0, negative=0.0,
                        hospital=f"模拟宠物医院{i % 200:03d}",
                        province=C1_PROVINCES[i % len(C1_PROVINCES)],
                        dealer=f"模拟经销商{i % 30:02d}",
                    )
                )

        db.bulk_insert_mappings(PetUsage, rows)
        db.commit()
        print(f"已写入 pet_usage 模拟明细 {len(rows):,} 行（{len(MONTH_TARGETS)} 个月 + C1）")
    finally:
        db.close()


if __name__ == "__main__":
    main()
