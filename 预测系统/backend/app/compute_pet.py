"""宠物 BU 预测计算（设备驱动模型）。

下半年净营收 = 基准 + 僵尸机激活 + 新投放 + 经销商压货 + 新上市线C1 − 渠道返利
基准 = 单台月产（近3月移动平均，价源默认活动价 act） × 在营台数 × 6

六个因子按"红⊂黄⊂绿"累进映射到三档；上半年（1–6月）不预测，
直接取 DW 真实开票净额（pet_meta.h1_dw_total / h1_dw_monthly）。
再把总量按空间权重拆到 省份×产品线 和 SKU×逐月，拆完加总必须等于总量
（单测门禁 tests/test_pet_breakdown.py）。

全部内部计算用元，返回前一律 ÷10000 转万元并 round。
"""

import json

from sqlalchemy import case, distinct, func

from .models_pet import PetMeta, PetParam, PetSku, PetUsage

W = 10000.0  # 元 → 万元
RAMP = {7: 0.5, 8: 0.7, 9: 0.9, 10: 1.0, 11: 1.0, 12: 1.0}  # 僵尸机激活爬坡，ΣRAMP=5.1
STOCK = {7: 0.0, 8: 0.0, 9: 0.0, 10: 0.0, 11: 0.5, 12: 0.5}  # 压货月度形状（年底压两个月）
LINES = ["F1", "M4", "M16", "A1", "C1"]  # 交叉表 5 列
NONC1_LINES = ["F1", "M4", "M16", "A1"]  # 进基准构成的成熟线
PROV_UNKNOWN = "未分省"  # 空省归一
LAST_FULL_YM = "2026-06"  # 完整月上界（7 月导出只有半月，不参与计算；跨期需改这里）
H2_MONTHS = [7, 8, 9, 10, 11, 12]
H1_MONTHS = [1, 2, 3, 4, 5, 6]
TIERS = ["red", "yellow", "green"]


# ---------------------------------------------------------------- 基础读数


def _params(db):
    return {p.key: p.value for p in db.query(PetParam).all()}


def _meta(db):
    return {m.key: m.value for m in db.query(PetMeta).all()}


def _meta_json(meta, key, default=None):
    v = meta.get(key)
    if v is None:
        return default
    try:
        return json.loads(v)
    except (TypeError, ValueError):
        return default


def _meta_float(meta, key, default=0.0):
    try:
        return float(meta.get(key))
    except (TypeError, ValueError):
        return default


def _f(params, key, default=0.0):
    try:
        return float(params.get(key))
    except (TypeError, ValueError):
        return default


def _price_col(src):
    """price = coalesce(price_act, price_reg) 若价源为活动价，反之亦然。"""
    if src == "act":
        return func.coalesce(PetSku.price_act, PetSku.price_reg)
    return func.coalesce(PetSku.price_reg, PetSku.price_act)


def _ym_month(ym):
    return int(ym.split("-")[1])


# ---------------------------------------------------------------- 单台月产


def _ma_per_dev(db, src, window, last=LAST_FULL_YM):
    """逐月：非C1检测收入 ÷ 非C1在营台数，取最近 window 个完整月的算术平均。

    边界（见技术文档 §5.1）：
    - INNER JOIN pet_sku：无价编码既不进分子，其行也不参与分母台数统计，
      "在营台数" = 当月跑过有价试剂的非 C1 设备数
    - 空 SN 不计台数，但空 SN 行的检测收入仍进分子
    - 平均而非取末月：单月失真（春节低点），移动平均更稳
    """
    price = _price_col(src)
    rows = (
        db.query(
            PetUsage.ym,
            func.sum(PetUsage.tests * price),
            func.count(distinct(case((PetUsage.device_sn != "", PetUsage.device_sn)))),
        )
        .join(PetSku, PetUsage.reagent_code == PetSku.code)
        .filter(PetUsage.device_type != "C1", PetUsage.ym <= last)
        .group_by(PetUsage.ym)
        .order_by(PetUsage.ym)
        .all()
    )
    months = [
        {
            "ym": ym,
            "revenue": float(rev or 0),
            "devices": int(dev or 0),
            "per_dev": (float(rev or 0) / dev) if dev else 0.0,
        }
        for ym, rev, dev in rows
    ]
    tail = months[-window:] if window > 0 else months
    per_dev = sum(m["per_dev"] for m in tail) / len(tail) if tail else 0.0
    devices = months[-1]["devices"] if months else 0  # 末月在营台数
    return per_dev, devices, months, [m["ym"] for m in tail]


def c1_ramp(db, last=LAST_FULL_YM):
    """C1 逐月检测量与在营台数。C1 无价，不 join pet_sku；不排除空 SN。"""
    rows = (
        db.query(PetUsage.ym, func.sum(PetUsage.tests), func.count(distinct(PetUsage.device_sn)))
        .filter(PetUsage.device_type == "C1", PetUsage.ym <= last)
        .group_by(PetUsage.ym)
        .order_by(PetUsage.ym)
        .all()
    )
    return [{"ym": ym, "tests": float(t or 0), "devices": int(d or 0)} for ym, t, d in rows]


# ---------------------------------------------------------------- 六因子逐月（概览与拆维度共用同一份口径）


def _factor_monthly(db):
    """产出基准/僵尸机/新投放/压货/C1/返利的三档总量与逐月值（单位：元）。"""
    P = _params(db)
    meta = _meta(db)

    src = P.get("price_source", "reg")
    mode = P.get("base_mode", "ma")
    if mode == "june":  # 历史值按 ma 处理
        mode = "ma"
    window = int(_f(P, "base_ma_window", 3))

    per_dev, devices, ma_months, ma_used = _ma_per_dev(db, src, window)
    base_m_h1 = _meta_float(meta, "base_monthly_act" if src == "act" else "base_monthly_reg")
    dev_h1 = _meta_float(meta, "devices")

    if mode == "ma" and per_dev > 0 and devices > 0:
        base_m = per_dev * devices
    else:  # h1avg 分支，或 ma 分支库空兜底
        base_m = base_m_h1
        devices = dev_h1
        per_dev = base_m / devices if devices else 0.0
    base_h2 = base_m * 6

    shape_raw = _meta_json(meta, "shape", {}) or {}
    shape = {int(k): float(v) for k, v in shape_raw.items()}
    if not shape:
        shape = {m: 1.0 / 6 for m in H2_MONTHS}
    shape_sum = sum(shape.values())  # 种子可能只存 4 位小数，归一保证 Σ=1（逐月加总=档位合计）
    shape = {m: v / shape_sum for m, v in shape.items()}

    # 僵尸机激活：激活后的机器按全线平均单台月产计价，月度按 RAMP 爬坡
    zn = _f(P, "zombie_n")
    z = {
        "red": 0.0,
        "yellow": zn * _f(P, "act_rate_yellow") * per_dev * 6,
        "green": zn * _f(P, "act_rate_green") * per_dev * 6,
    }
    ramp_sum = sum(RAMP.values())
    z_m = {t: {m: z[t] * RAMP[m] / ramp_sum for m in H2_MONTHS} for t in TIERS}

    # 新投放（"设备月"口径）：cum[i] = 截至该月累计已铺台数 = 该月在营
    plan = _meta_json(meta, "newdev_plan") or {}
    plan_monthly = plan.get("monthly") or []
    rate_y = _f(P, "newdev_rate_yellow")
    rate_g = _f(P, "newdev_rate_green")
    nm = {t: [0.0] * 6 for t in TIERS}
    cum = []
    if plan_monthly and sum(plan_monthly) > 0:
        acc = 0.0
        for i in range(6):
            acc += float(plan_monthly[i]) if i < len(plan_monthly) else 0.0
            cum.append(acc)
            nm["yellow"][i] = acc * per_dev * rate_y
            nm["green"][i] = acc * per_dev * rate_g
    else:  # 回退：满投放 6 个月 × 上机爬坡形状
        nn = _f(P, "newdev_n")
        for i, m in enumerate(H2_MONTHS):
            nm["yellow"][i] = nn * per_dev * rate_y * 6 * RAMP[m] / ramp_sum
            nm["green"][i] = nn * per_dev * rate_g * 6 * RAMP[m] / ramp_sum
    n = {t: sum(nm[t]) for t in TIERS}

    # 经销商压货：sell-in > sell-out，当期确认收入，红档不含；年底压两个月
    stock_months = _f(P, "stock_months")
    stock = stock_months * base_m if stock_months > 0 else _f(P, "stock_h2") * W
    s = {"red": 0.0, "yellow": stock, "green": stock * _f(P, "stock_grn_mult")}
    s_m = {t: {m: s[t] * STOCK[m] for m in H2_MONTHS} for t in TIERS}

    # 新上市线 C1（服务费口径）：只要机器在服务，每台每月收费，含现有存量
    fee = _f(P, "c1_service_fee")
    ramp = c1_ramp(db)
    c1_existing = ramp[-1]["devices"] if ramp else 0
    c1_plan = plan.get("c1_monthly") or []
    c1_cum = []
    acc = 0.0
    for i in range(6):
        acc += float(c1_plan[i]) if i < len(c1_plan) else 0.0
        c1_cum.append(acc)
    gm = _f(P, "c1_green_mult")
    c1_mo = {
        "red": [c1_existing * fee for _ in range(6)],
        "yellow": [(c1_existing + c1_cum[i]) * fee for i in range(6)],
        "green": [(c1_existing + c1_cum[i] * gm) * fee for i in range(6)],
    }
    c1 = {t: sum(c1_mo[t]) for t in TIERS}

    # 渠道返利：DW 净额已扣返利，H1 已用额含在 H1 实际里，H2 只扣余额，三档同减
    rebate = _f(P, "rebate_h2") * W

    return {
        "params": P,
        "meta": meta,
        "src": src,
        "mode": mode,
        "window": window,
        "per_dev": per_dev,
        "devices": devices,
        "ma_months": ma_months,
        "ma_used": ma_used,
        "base_m": base_m,
        "base_h2": base_h2,
        "base_m_h1": base_m_h1,
        "dev_h1": dev_h1,
        "shape": shape,
        "z": z,
        "z_m": z_m,
        "nm": nm,
        "n": n,
        "cum": cum,
        "plan": plan,
        "s": s,
        "s_m": s_m,
        "stock_months": stock_months,
        "c1": c1,
        "c1_mo": c1_mo,
        "c1_existing": c1_existing,
        "c1_cum": c1_cum,
        "c1_ramp": ramp,
        "fee": fee,
        "rebate": rebate,
    }


# ---------------------------------------------------------------- 溯源


def _base_provenance(f):
    lines = [
        f"{m['ym']}：单台月产 ¥{m['per_dev']:.0f} × 在营 {m['devices']:,} 台"
        for m in f["ma_months"]
        if m["ym"] in f["ma_used"]
    ]
    return {
        "confidence": "confirmed",
        "formula": "基准 = 单台月产（近{}月移动平均） × 末月在营台数 × 6".format(f["window"]),
        "steps": lines
        + [
            f"单台月产 = 平均({', '.join(f['ma_used'])}) = ¥{f['per_dev']:.1f}/台/月",
            f"基准月额 = {f['per_dev']:.1f} × {f['devices']:,} = {f['base_m'] / W:.2f} 万/月",
            f"基准 H2 = {f['base_m'] / W:.2f} × 6 = {f['base_h2'] / W:.2f} 万",
        ],
        "source": "pet_usage（CRM 设备用量）× pet_sku（价目表每测试单价，价源={}）".format(
            "活动价" if f["src"] == "act" else "常规价"
        ),
        "note": "在营台数 = 当月跑过有价试剂的非 C1 设备数（排除空 SN）；月度形状沿用 H1 季节分布",
    }


def _zombie_provenance(f):
    P = f["params"]
    return {
        "confidence": "assumption",
        "formula": "档位 = 僵尸机基数 × 激活率 × 单台月产 × 6",
        "steps": [
            f"僵尸机基数 {int(_f(P, 'zombie_n')):,} 台（CRM 驾驶舱口径：终端 3 个月内无检测使用，手工录入）",
            f"黄 = {int(_f(P, 'zombie_n')):,} × {_f(P, 'act_rate_yellow'):.0%} × ¥{f['per_dev']:.1f} × 6 = {f['z']['yellow'] / W:.2f} 万",
            f"绿 = {int(_f(P, 'zombie_n')):,} × {_f(P, 'act_rate_green'):.0%} × ¥{f['per_dev']:.1f} × 6 = {f['z']['green'] / W:.2f} 万",
            "月度按 RAMP（7 月 0.5 → 10 月起 1.0）爬坡摊",
        ],
        "source": "zombie_n / act_rate_* 参数面板",
        "note": "5% 为管理层硬要求；8% 为绿档占位。激活机按全线平均单台月产计价",
    }


def _newdev_provenance(f):
    if f["cum"]:
        dev_months = sum(f["cum"])
        steps = [
            f"FC3+9 成熟线计划逐月 {[int(x) for x in f['plan'].get('monthly', [])]}，累计在营 {[int(c) for c in f['cum']]}",
            f"Σ 设备月 = {dev_months:,.0f}（7 月铺的贡献 6 个月，12 月铺的只贡献 1 个月）",
            f"黄 = {dev_months:,.0f} × ¥{f['per_dev']:.1f} × {_f(f['params'], 'newdev_rate_yellow'):.0%} = {f['n']['yellow'] / W:.2f} 万",
            f"绿 = {dev_months:,.0f} × ¥{f['per_dev']:.1f} × {_f(f['params'], 'newdev_rate_green'):.0%} = {f['n']['green'] / W:.2f} 万",
        ]
        source = "pet_meta.newdev_plan ← 2026年FC3+9-设备投入.xlsx（资产类别=投放仪器）"
    else:
        steps = [f"无投放计划，回退 newdev_n = {_f(f['params'], 'newdev_n'):.0f} 台 × 满投放 6 个月 × 爬坡形状"]
        source = "newdev_n 参数（回退）"
    return {
        "confidence": "assumption",
        "formula": "档位 = Σ_月( 累计已铺台数 × 单台月产 × 实现率 )",
        "steps": steps,
        "source": source,
        "note": "C1 不进本因子（单独走服务费，混入会双算）；单台月产用全线混合均值（成熟线近似）；计划月=需求月，上机滞后由累计在营台数近似消化",
    }


def _stock_provenance(f):
    return {
        "confidence": "assumption",
        "formula": "压货 = 压货月数 × 基准月额；绿档 × 倍数",
        "steps": [
            f"黄 = {f['stock_months']:.0f} × {f['base_m'] / W:.2f} = {f['s']['yellow'] / W:.2f} 万",
            f"绿 = {f['s']['yellow'] / W:.2f} × {_f(f['params'], 'stock_grn_mult')} = {f['s']['green'] / W:.2f} 万",
            "月度形状：11、12 月各 50%（业务确认年底压两个月）",
        ],
        "source": "stock_months / stock_grn_mult 参数面板",
        "note": "压货是 sell-in > sell-out 的渠道短期增量，当期确认收入，红档不含。黄档最大单项，对『压两个月』口径敏感度最高",
    }


def _c1_provenance(f):
    return {
        "confidence": "assumption",
        "formula": "档位 = Σ_月( (存量 + 累计新投) × 服务费 )",
        "steps": [
            f"C1 存量在营 {f['c1_existing']} 台（{LAST_FULL_YM}），服务费 ¥{f['fee']:.0f}/台/月",
            f"新投计划逐月 {[int(x) for x in f['plan'].get('c1_monthly', [])]}，累计 {[int(c) for c in f['c1_cum']]}",
            f"红 = {f['c1_existing']} × {f['fee']:.0f} × 6 = {f['c1']['red'] / W:.2f} 万（存量保底）",
            f"黄 = {f['c1']['yellow'] / W:.2f} 万；绿（新投 × {_f(f['params'], 'c1_green_mult')}） = {f['c1']['green'] / W:.2f} 万",
        ],
        "source": "pet_usage（C1 在营爬坡）＋ newdev_plan.c1_monthly ＋ c1_service_fee",
        "note": "C1 产品编码未维护、无试剂单价，Σ_SKU 基准会算成 0，故单列为服务费口径——与检测量无关，在服务就收",
    }


def _rebate_provenance(f):
    return {
        "confidence": "confirmed",
        "formula": "返利 = −H2 返利余额（三档同减）",
        "steps": [
            f"2025 返利年度总额 324.8 万，H1 已用 266.4 万（已含在 H1 实际里），H2 只扣余额 {f['rebate'] / W:.2f} 万",
        ],
        "source": "rebate_h2 参数面板（业务给 2026-07-21）",
        "note": "DW 净额本身已是扣返利后的金额，不能再扣全年总额",
    }


# ---------------------------------------------------------------- 概览


def compute(db):
    f = _factor_monthly(db)
    meta = f["meta"]

    comp = {
        t: {
            "基准": f["base_h2"],
            "僵尸机激活": f["z"][t],
            "新投放": f["n"][t],
            "经销商压货": f["s"][t],
            "新上市线C1": f["c1"][t],
            "返利": -f["rebate"],
        }
        for t in TIERS
    }
    tiers = {t: round(sum(comp[t].values()) / W, 2) for t in TIERS}
    components = {t: {k: round(v / W, 2) for k, v in comp[t].items()} for t in TIERS}

    monthly = {}
    for t in TIERS:
        monthly[t] = {}
        for i, m in enumerate(H2_MONTHS):
            v = (
                f["base_h2"] * f["shape"][m]
                - f["rebate"] * f["shape"][m]
                + f["z_m"][t][m]
                + f["nm"][t][i]
                + f["s_m"][t][m]
                + f["c1_mo"][t][i]
            )
            monthly[t][m] = round(v / W, 2)

    # 上半年实际：主口径 = DW 真实开票；回退 = H1 均值基准 + C1 服务费
    h1_dw_total = _meta_float(meta, "h1_dw_total")
    if h1_dw_total > 0:
        h1_monthly_raw = _meta_json(meta, "h1_dw_monthly", {}) or {}
        h1_total = round(h1_dw_total / W, 2)
        h1_actual = {
            "total": h1_total,
            "monthly": {int(k): round(float(v) / W, 2) for k, v in h1_monthly_raw.items()},
            "components": {"基准": h1_total},  # 不再拆因子，DW 总额含 C1 等全部宠物开票
            "confidence": "confirmed",
            "note": "DW_T_TaxSalesNetValue 真实开票净额（预提口径），三档共用",
        }
    else:
        h1_base = f["base_m_h1"] * 6
        c1_h1 = sum(r["devices"] * f["fee"] for r in f["c1_ramp"])
        h1_total = round((h1_base + c1_h1) / W, 2)
        h1_actual = {
            "total": h1_total,
            "monthly": {},
            "components": {"基准": round(h1_base / W, 2), "新上市线C1": round(c1_h1 / W, 2)},
            "confidence": "assumption",
            "note": "DW 未灌，按 H1 月均基准 + C1 服务费估算",
        }

    tiers_fy = {t: round(h1_actual["total"] + tiers[t], 2) for t in TIERS}

    provenance = {
        "基准": _base_provenance(f),
        "僵尸机激活": _zombie_provenance(f),
        "新投放": _newdev_provenance(f),
        "经销商压货": _stock_provenance(f),
        "新上市线C1": _c1_provenance(f),
        "返利": _rebate_provenance(f),
    }

    facts = {
        "devices": f["devices"],
        "per_dev": round(f["per_dev"], 1),
        "price_source": f["src"],
        "base_mode": f["mode"],
        "ma_window": f["window"],
        "ma_used": f["ma_used"],
        "ma_months": [
            {"ym": m["ym"], "per_dev": round(m["per_dev"], 1), "devices": m["devices"]} for m in f["ma_months"]
        ],
        "zombie_n": int(_f(f["params"], "zombie_n")),
        "c1_existing": f["c1_existing"],
        "c1_new_h2": int(f["c1_cum"][-1]) if f["c1_cum"] else 0,
        "devices_h1": int(f["dev_h1"]),
        "h1_tests": _meta_float(meta, "h1_tests"),
        "per_dev_month_tests": _meta_float(meta, "per_dev_month_tests"),
        "hospitals": _meta_float(meta, "hospitals"),
    }

    return {
        "tiers": tiers,
        "components": components,
        "provenance": provenance,
        "monthly": monthly,
        "h1_actual": h1_actual,
        "tiers_fy": tiers_fy,
        "data_mode": {
            "source": meta.get("source"),
            "generated": meta.get("generated"),
            "h1": "dw" if h1_dw_total > 0 else "estimate",
        },
        "facts": facts,
    }


# ---------------------------------------------------------------- 空间权重


def _dim_weights(db, f=None):
    """近 3 月构成 → 基准空间权重；FC3+9 by_line × 线单台产 → 新投放线间权重；
    C1 在营分布 → C1 省份权重。分母是"当月全非 C1 在营台数"（与总口径同源），
    保证 Σ baseShare = 1。
    """
    if f is None:
        f = _factor_monthly(db)
    price = _price_col(f["src"])
    used = f["ma_used"]  # 与单台月产同窗口的近 N 个完整月

    month_dev = {m["ym"]: m["devices"] for m in f["ma_months"]}

    rows = (
        db.query(
            PetUsage.ym,
            PetUsage.province,
            PetUsage.device_type,
            PetUsage.reagent_code,
            func.sum(PetUsage.tests * price),
        )
        .join(PetSku, PetUsage.reagent_code == PetSku.code)
        .filter(PetUsage.device_type.in_(NONC1_LINES), PetUsage.ym.in_(used))
        .group_by(PetUsage.ym, PetUsage.province, PetUsage.device_type, PetUsage.reagent_code)
        .all()
    )

    w_rec = {}  # (province, line, code) -> 近3月移动平均(当月收入 ÷ 当月全非C1在营台数)
    n_used = len(used) or 1
    for ym, prov, line, code, rev in rows:
        dev = month_dev.get(ym) or 0
        if dev <= 0:
            continue
        key = ((prov or PROV_UNKNOWN), line, code)
        w_rec[key] = w_rec.get(key, 0.0) + float(rev or 0) / dev / n_used

    brec = sum(w_rec.values())
    base_share = {}  # (province, line) -> 基准/僵尸机/压货/返利的空间权重
    line_base = {d: 0.0 for d in NONC1_LINES}
    for (p, d, _k), v in w_rec.items():
        base_share[(p, d)] = base_share.get((p, d), 0.0) + (v / brec if brec else 0.0)
        line_base[d] += v

    prov_in_line = {}  # (province, line) -> 省在线内占比
    for (p, d), v in base_share.items():
        lb = line_base[d] / brec if brec else 0.0
        prov_in_line[(p, d)] = v / lb if lb else 0.0

    # 新投放线间权重：units(d) × perdev(d)，perdev(d) = 线基准 ÷ 该线末月在营台数
    units = (f["plan"].get("by_line") or {}) if f["plan"] else {}
    last_ym = used[-1] if used else LAST_FULL_YM
    line_dev_rows = (
        db.query(
            PetUsage.device_type,
            func.count(distinct(case((PetUsage.device_sn != "", PetUsage.device_sn)))),
        )
        .join(PetSku, PetUsage.reagent_code == PetSku.code)
        .filter(PetUsage.device_type.in_(NONC1_LINES), PetUsage.ym == last_ym)
        .group_by(PetUsage.device_type)
        .all()
    )
    line_dev = {d: int(c or 0) for d, c in line_dev_rows}
    lw_raw = {}
    for d in NONC1_LINES:
        u = float(units.get(d, 0) or 0)
        perdev_d = line_base[d] / line_dev[d] if line_dev.get(d) else 0.0
        lw_raw[d] = u * perdev_d
    lw_total = sum(lw_raw.values())
    if lw_total > 0:
        line_weight = {d: lw_raw[d] / lw_total for d in NONC1_LINES}
    else:
        line_weight = {d: 1.0 / len(NONC1_LINES) for d in NONC1_LINES}

    # C1 省份权重：末月在营台数分布
    c1_rows = (
        db.query(PetUsage.province, func.count(distinct(PetUsage.device_sn)))
        .filter(PetUsage.device_type == "C1", PetUsage.ym == last_ym)
        .group_by(PetUsage.province)
        .all()
    )
    c1_dev = {(p or PROV_UNKNOWN): int(c or 0) for p, c in c1_rows}
    c1_total = sum(c1_dev.values())
    c1_prov_share = {p: c / c1_total for p, c in c1_dev.items()} if c1_total else {PROV_UNKNOWN: 1.0}

    provinces = sorted(
        {p for (p, _d) in base_share} | set(c1_prov_share),
        key=lambda p: (p == PROV_UNKNOWN, p),
    )

    return {
        "w_rec": w_rec,
        "brec": brec,
        "base_share": base_share,
        "line_base": line_base,
        "prov_in_line": prov_in_line,
        "line_weight": line_weight,
        "c1_prov_share": c1_prov_share,
        "provinces": provinces,
        "used": used,
    }


# ---------------------------------------------------------------- H1 构成（DW 真实额逐月摊派）


def _h1_composition(db, f):
    """H1 每格权重：W_H1(p,d,k,m) = 该叶子第 m 月检测收入（全 H1 窗口，不是近3月）；
    C1 以 c1_m(p,m) = 在营台数 × 服务费 并入。返回叶子明细与每月总权重。
    """
    price = _price_col(f["src"])
    rows = (
        db.query(
            PetUsage.ym,
            PetUsage.province,
            PetUsage.device_type,
            PetUsage.reagent_code,
            func.sum(PetUsage.tests * price),
        )
        .join(PetSku, PetUsage.reagent_code == PetSku.code)
        .filter(PetUsage.device_type.in_(NONC1_LINES), PetUsage.ym <= LAST_FULL_YM)
        .group_by(PetUsage.ym, PetUsage.province, PetUsage.device_type, PetUsage.reagent_code)
        .all()
    )
    leaves = {}  # (p, d, k, m) -> 权重（元）
    for ym, prov, line, code, rev in rows:
        m = _ym_month(ym)
        leaves[((prov or PROV_UNKNOWN), line, code, m)] = float(rev or 0)

    c1_rows = (
        db.query(PetUsage.ym, PetUsage.province, func.count(distinct(PetUsage.device_sn)))
        .filter(PetUsage.device_type == "C1", PetUsage.ym <= LAST_FULL_YM)
        .group_by(PetUsage.ym, PetUsage.province)
        .all()
    )
    c1_m = {}  # (p, m) -> 台数 × 服务费
    for ym, prov, cnt in c1_rows:
        c1_m[((prov or PROV_UNKNOWN), _ym_month(ym))] = int(cnt or 0) * f["fee"]

    wtot = {m: 0.0 for m in H1_MONTHS}
    for (_p, _d, _k, m), v in leaves.items():
        wtot[m] += v
    for (_p, m), v in c1_m.items():
        wtot[m] += v

    h1_monthly_raw = _meta_json(f["meta"], "h1_dw_monthly", {}) or {}
    dw_m = {int(k): float(v) for k, v in h1_monthly_raw.items()}

    return leaves, c1_m, wtot, dw_m


# ---------------------------------------------------------------- 省份 × 产品线


def compute_pet_matrix(db):
    f = _factor_monthly(db)
    wts = _dim_weights(db, f)
    leaves, c1m, wtot, dw_m = _h1_composition(db, f)

    # H1 叶子聚合到 (p, d, m)
    h1_cell_w = {}
    for (p, d, _k, m), v in leaves.items():
        h1_cell_w[(p, d, m)] = h1_cell_w.get((p, d, m), 0.0) + v
    for (p, m), v in c1m.items():
        h1_cell_w[(p, "C1", m)] = h1_cell_w.get((p, "C1", m), 0.0) + v

    provinces = sorted(
        set(wts["provinces"]) | {p for (p, _d, _m) in h1_cell_w},
        key=lambda p: (p == PROV_UNKNOWN, p),
    )

    rows = []
    for p in provinces:
        cells = {}
        for d in LINES:
            h1_vals = []
            for m in H1_MONTHS:
                w = h1_cell_w.get((p, d, m), 0.0)
                v = dw_m.get(m, 0.0) * w / wtot[m] if wtot.get(m) else 0.0
                h1_vals.append(round(v / W, 4))
            h2 = {t: [] for t in TIERS}
            bs = wts["base_share"].get((p, d), 0.0)
            pil = wts["prov_in_line"].get((p, d), 0.0)
            lw = wts["line_weight"].get(d, 0.0)
            c1s = wts["c1_prov_share"].get(p, 0.0)
            for t in TIERS:
                for i, m in enumerate(H2_MONTHS):
                    v = (
                        f["base_h2"] * f["shape"][m]
                        - f["rebate"] * f["shape"][m]
                        + f["z_m"][t][m]
                        + f["s_m"][t][m]
                    ) * bs
                    if d in NONC1_LINES:
                        v += f["nm"][t][i] * lw * pil
                    if d == "C1":
                        v += f["c1_mo"][t][i] * c1s
                    h2[t].append(round(v / W, 4))
            actual_h1 = round(sum(h1_vals), 4)
            tiers_h2 = {t: round(sum(h2[t]), 4) for t in TIERS}
            if actual_h1 == 0 and all(v == 0 for v in tiers_h2.values()):
                continue  # 空格不返回，压缩包体
            cells[d] = {
                "actual_h1_m": h1_vals,
                "h2_m": h2,
                "actual_h1": actual_h1,
                "tiers_h2": tiers_h2,
            }
        if not cells:
            continue
        l12 = {
            t: round(
                sum(c["actual_h1"] for c in cells.values())
                + sum(c["tiers_h2"][t] for c in cells.values()),
                4,
            )
            for t in TIERS
        }
        rows.append({"province": p, "cells": cells, "l12_total": l12})

    return {
        "lines": LINES,
        "months_h1": H1_MONTHS,
        "months_h2": H2_MONTHS,
        "rows": rows,
        "dw_total": round(_meta_float(f["meta"], "h1_dw_total") / W, 2),
        "used": wts["used"],
    }


# ---------------------------------------------------------------- SKU 明细


def compute_pet_sku(db, province=None, device_type=None):
    """SKU × 逐月。按 PetSku.name 分组（换版编码自动合并）；C1 以伪 SKU「C1服务费」并入。

    H1 单独遍历全部 H1 叶子——H1 有、近 3 月无的 SKU（停用/换版老码）
    若只遍历近 3 月叶子会被漏掉，H1 会短计。
    """
    f = _factor_monthly(db)
    wts = _dim_weights(db, f)
    leaves, c1m, wtot, dw_m = _h1_composition(db, f)

    code_name = {s.code: (s.name or s.code) for s in db.query(PetSku).all()}

    def _match(p, d):
        if province and p != province:
            return False
        if device_type and d != device_type:
            return False
        return True

    rows = {}  # name -> row dict

    def _row(name):
        if name not in rows:
            rows[name] = {
                "project": name,
                "codes": set(),
                "device_types": set(),
                "actual_h1_m": [0.0] * 6,
                "tiers_m": {t: [0.0] * 6 for t in TIERS},
            }
        return rows[name]

    # H2：基准/僵尸机/压货/返利按 bs_k = W_rec/Brec；新投放再乘 SKU 在格内占比
    cell_w = {}  # (p, d) -> Σ_k W_rec
    for (p, d, _k), v in wts["w_rec"].items():
        cell_w[(p, d)] = cell_w.get((p, d), 0.0) + v
    for (p, d, k), v in wts["w_rec"].items():
        if not _match(p, d):
            continue
        name = code_name.get(k, k)
        r = _row(name)
        r["codes"].add(k)
        r["device_types"].add(d)
        bs_k = v / wts["brec"] if wts["brec"] else 0.0
        sku_in_cell = v / cell_w[(p, d)] if cell_w.get((p, d)) else 0.0
        lw = wts["line_weight"].get(d, 0.0)
        pil = wts["prov_in_line"].get((p, d), 0.0)
        for t in TIERS:
            for i, m in enumerate(H2_MONTHS):
                val = (
                    f["base_h2"] * f["shape"][m]
                    - f["rebate"] * f["shape"][m]
                    + f["z_m"][t][m]
                    + f["s_m"][t][m]
                ) * bs_k
                val += f["nm"][t][i] * lw * pil * sku_in_cell
                r["tiers_m"][t][i] += val / W

    # C1 伪 SKU H2
    if (device_type in (None, "C1")):
        for p, share in wts["c1_prov_share"].items():
            if province and p != province:
                continue
            r = _row("C1服务费")
            r["codes"].add("—")
            r["device_types"].add("C1")
            for t in TIERS:
                for i in range(6):
                    r["tiers_m"][t][i] += f["c1_mo"][t][i] * share / W

    # H1：遍历全部 H1 叶子
    for (p, d, k, m), v in leaves.items():
        if not _match(p, d):
            continue
        if not wtot.get(m):
            continue
        name = code_name.get(k, k)
        r = _row(name)
        r["codes"].add(k)
        r["device_types"].add(d)
        r["actual_h1_m"][m - 1] += dw_m.get(m, 0.0) * v / wtot[m] / W
    if device_type in (None, "C1"):
        for (p, m), v in c1m.items():
            if province and p != province:
                continue
            if not wtot.get(m):
                continue
            r = _row("C1服务费")
            r["codes"].add("—")
            r["device_types"].add("C1")
            r["actual_h1_m"][m - 1] += dw_m.get(m, 0.0) * v / wtot[m] / W

    out = []
    for r in rows.values():
        actual_h1 = round(sum(r["actual_h1_m"]), 4)
        tiers_h2 = {t: round(sum(r["tiers_m"][t]), 4) for t in TIERS}
        out.append(
            {
                "project": r["project"],
                "codes": sorted(r["codes"]),
                "device_types": sorted(r["device_types"]),
                "actual_h1_m": [round(v, 4) for v in r["actual_h1_m"]],
                "tiers_m": {t: [round(v, 4) for v in r["tiers_m"][t]] for t in TIERS},
                "actual_h1": actual_h1,
                "tiers_h2": tiers_h2,
            }
        )
    out.sort(key=lambda r: -r["tiers_h2"]["yellow"])
    return {"rows": out, "months_h1": H1_MONTHS, "months_h2": H2_MONTHS}
