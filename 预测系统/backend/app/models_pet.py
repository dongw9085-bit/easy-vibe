"""宠物 BU 四张表 + 种子数据。

表结构与口径见《国内宠物 BU · 技术文档》§2：
- pet_usage  逐条原始用量（事实表），粒度 = 设备 × 日期 × 病原体项目
- pet_sku    逐 SKU 单价与 H1 检测量
- pet_meta   标量/JSON 基准数据（key/value）
- pet_params 参数面板（业务可改）

seed 语义：seed_pet() 只在 key 不存在时插入，对已有行永不更新
label/note——改代码文案不会刷到已建库，要生效需删行重建
（backend/scripts/清理宠物弃用参数.py）。
"""

import json
from pathlib import Path

from sqlalchemy import Column, Float, Integer, String

from .db import Base

_SEED_PATH = Path(__file__).resolve().parent / "pet_seed_data.json"


def _s(v, n=200):
    """字符串统一截断，防止超长来源字段撑爆列宽。"""
    if v is None:
        return None
    return str(v)[:n]


class PetSku(Base):
    __tablename__ = "pet_sku"

    code = Column(String(40), primary_key=True)  # 试剂产品编码 = 价目表物料编码
    name = Column(String(100))  # 项目名（CRM 首次出现值）
    tests = Column(Float)  # H1 检测次数（seed 后不刷新，仅溯源文案用）
    price_reg = Column(Float)  # 每测试常规价 = 价目表价格 ÷ 盒内测试数
    price_act = Column(Float)  # 每测试活动价


class PetMeta(Base):
    __tablename__ = "pet_meta"

    key = Column(String(50), primary_key=True)
    value = Column(String(4000))


class PetUsage(Base):
    __tablename__ = "pet_usage"

    id = Column(Integer, primary_key=True, autoincrement=True)
    src = Column(String(20))  # H1（手工导出）/ 2026-04…（API 月份）
    ym = Column(String(7))  # 检测年月；API 行钉成文件月份，保证按月替换原子
    test_date = Column(String(12))  # date__c 毫秒时间戳按 UTC+8 转
    device_sn = Column(String(50))
    device_type = Column(String(20))  # 设备型号 = 产品线（F1/M4/M16/A1/C1）
    reagent_code = Column(String(40))  # 05.03.*
    project = Column(String(100))
    pathogen = Column(String(50))
    tests = Column(Float)  # 病原体测试次数（模型的"检测量"）
    positive = Column(Float)
    negative = Column(Float)
    hospital = Column(String(200))
    province = Column(String(50))
    dealer = Column(String(200))


class PetParam(Base):
    __tablename__ = "pet_params"

    key = Column(String(50), primary_key=True)
    value = Column(String(100))
    label = Column(String(100))
    group = Column(String(50))
    unit = Column(String(20))
    note = Column(String(1000))


def _load_seed():
    with open(_SEED_PATH, encoding="utf-8") as f:
        return json.load(f)


def seed_pet(db):
    """灌种子：pet_sku 仅在表空时整表灌入；meta/params 逐 key 补缺，永不覆盖已有行。"""
    seed = _load_seed()

    if db.query(PetSku).count() == 0:
        for r in seed.get("sku", []):
            db.add(
                PetSku(
                    code=_s(r["code"], 40),
                    name=_s(r.get("name"), 100),
                    tests=r.get("tests"),
                    price_reg=r.get("price_reg"),
                    price_act=r.get("price_act"),
                )
            )

    existing_meta = {k for (k,) in db.query(PetMeta.key).all()}
    for k, v in seed.get("meta", {}).items():
        if k in existing_meta:
            continue
        if v is None and k == "hospitals":
            v = 5624  # 源为 null 时硬编码兜底
        db.add(PetMeta(key=k, value=json.dumps(v, ensure_ascii=False) if isinstance(v, (dict, list)) else _s(v, 4000)))

    existing_params = {k for (k,) in db.query(PetParam.key).all()}
    for p in seed.get("params", []):
        if p["key"] in existing_params:
            continue  # 只补缺，永不更新已有行的 value/label/note
        db.add(
            PetParam(
                key=p["key"],
                value=str(p["value"]),
                label=p.get("label"),
                group=p.get("group"),
                unit=p.get("unit"),
                note=p.get("note"),
            )
        )

    db.commit()
