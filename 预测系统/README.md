# 收入预测系统 · 国内宠物 BU

按《国内宠物 BU · 技术文档》实现的设备驱动预测模型：

```
下半年净营收 = 基准 + 僵尸机激活 + 新投放 + 经销商压货 + 新上市线C1 − 渠道返利
基准 = 单台月产（近3月移动平均） × 在营台数 × 6
```

六因子按「红⊂黄⊂绿」累进映射到三档；上半年（1–6月）不预测，直接取 DW
真实开票净额；总量再按空间权重拆到 **省份×产品线** 和 **SKU×逐月**，
拆完加总必须等于总量（单测门禁）。

## 目录

```
预测系统/
├── backend/
│   ├── app/
│   │   ├── db.py              # 业务库连接（默认 SQLite，PET_DB_URL 可切 SQL Server）
│   │   ├── models_pet.py      # pet_usage / pet_sku / pet_meta / pet_params + seed
│   │   ├── pet_seed_data.json # 参数/meta/SKU 种子（价格为演示值）
│   │   ├── compute_pet.py     # 单台月产、六因子逐月、概览三档、空间权重、拆维度
│   │   ├── pet_router.py      # /api/pet/{params,summary,matrix,sku}
│   │   └── main.py            # FastAPI 入口（建表 + seed）
│   ├── scripts/生成模拟用量.py # 本地演示数据（⚠ 模拟数据，非真实经营数字）
│   └── tests/test_pet_breakdown.py  # 口径门禁：快照 + 恒等式 + 权重自检 + API
└── frontend/                  # Vite + React：概览 / 省份×产品线 / SKU 明细 / 参数面板
```

## 启动

```bash
# 后端
cd 预测系统/backend
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
.venv/bin/python scripts/生成模拟用量.py      # 灌模拟 pet_usage（首次）
.venv/bin/uvicorn app.main:app --reload --port 8000

# 前端（另开终端）
cd 预测系统/frontend
npm install
npm run dev          # http://localhost:5173，/api 代理到 8000
```

## 口径门禁（单测）

```bash
cd 预测系统/backend
.venv/bin/python -m pytest tests/test_pet_breakdown.py -v
```

`test_compute_snapshot` 逐项比对 `compute()` 输出快照——重构内部结构时保证
数字不变；口径**故意**要改时需同步更新快照常量。其余测试验证：

- Σ_{省,线} 月格[档] = 概览 monthly[档]（容差 0.02 万）
- Σ 格 H1 = h1_dw_total（DW 真实开票）
- Σ baseShare = Σ lineWeight = Σ c1ProvShare = 1
- 换版 SKU 编码按项目名合并、H1 老码不被摊派漏掉
- 改参数（PUT）即时重算

## 数据说明

真实环境中 `pet_usage` 由 CRM 抓取管道灌入（`crm抓取_设备用量.py` +
`load_用量_按月替换.py`，按月安全替换）、`h1_dw_*` 来自 DW 金额报表、
`newdev_plan` 来自 FC3+9 设备投入计划——这些上游脚本依赖内网系统，本仓库
用 `scripts/生成模拟用量.py` 生成**按文档实测表校准的合成数据**替代：
逐月单台月产/在营台数、C1 上市爬坡、TO1 换版编码、空 SN 行等口径边界
都有覆盖，概览数字与文档现值一致（黄档 H2 ≈ 3,195 万、全年 ≈ 4,804 万）。

关键口径边界（详见 `compute_pet.py` 注释）：

- 在营台数 = 当月跑过**有价试剂**的非 C1 设备数（INNER JOIN 价目表、排除空 SN）
- `LAST_FULL_YM = "2026-06"`：7 月导出只有半月，在库但不参与计算；跨期需改常量
- C1 无试剂单价，单列服务费口径（¥299/台/月，在服务就收），不进新投放因子（防双算）
- H2 返利只扣余额（DW 净额已扣 H1 部分），三档同减
- H1 拆维度用全 H1 逐月构成摊 DW 真实额；H2 用近 3 月构成外推
