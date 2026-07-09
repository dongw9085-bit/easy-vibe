# FC6+6 基准收入系统 · Vibe Coding 开发提示词

本文件把 [PRD.md](./PRD.md) 拆解为可直接投喂给 AI 编程工具（Claude Code / Cursor 等）的**分阶段提示词**。按顺序逐个执行，每一步验收通过后再进行下一步。

## 使用方法

1. 新建一个空项目目录，把 `PRD.md` 复制进去
2. 按下面的阶段顺序，把提示词逐段粘贴给 AI
3. 每个阶段结束后运行验收标准中的检查，不通过就让 AI 修复后再继续

推荐技术栈（提示词中已内置，可按团队习惯替换）：

- 前端：Vue 3 + Vite + Element Plus + ECharts
- 后端：Node.js (Express) 或 Python (FastAPI)
- 数据库：SQLite（原型）→ PostgreSQL（生产）

---

## 阶段 0 · 项目脚手架

```text
请阅读项目根目录的 PRD.md（FC6+6 AI 财务预测系统 MCL01-03 国内宠物装机产出基准收入）。

创建一个前后端分离的项目脚手架：
- frontend/：Vue 3 + Vite + Element Plus + ECharts
- backend/：FastAPI + SQLite（用 SQLAlchemy 建模）
- 根目录 README.md 说明启动方式

先不实现业务逻辑，只要前后端能各自启动、前端能调通后端的 /api/health 接口即可。
```

**验收**：`npm run dev` 和后端服务都能启动，页面能显示后端返回的 health 状态。

---

## 阶段 1 · DCL 数据模型（18 张表）

```text
根据 PRD.md 第 6 章「对 DCL 数据源建模 URS」，在 backend 中创建全部 18 张表的
ORM 模型和建表迁移：

维度表（10 张）：dim_company, dim_business_unit, dim_channel, dim_customer,
dim_sku, dim_device, dim_model, dim_forecast_version, dim_period, dim_kpi

事实表（5 张）：fact_sales_actual, fact_device_output, fact_dealer_inventory,
fact_sales_forecast_qty, fact_revenue_forecast

治理表（3 张）：ctl_approval, ctl_audit_log, ctl_version_shot

要求：
1. 字段严格按 PRD 6.3 节的字段清单实现（dim_sku、dim_device、
   dim_forecast_version、fact_device_output、fact_dealer_inventory、
   dim_kpi、ctl_approval 七张表有明确字段定义，其余表按 6.2 节说明合理设计）
2. 所有事实表必须携带 公司/BU/version_id/period_id 四个维度外键（PRD 6.1）
3. ctl_audit_log 只允许 INSERT，不提供 UPDATE/DELETE 接口
4. 编写一个 seed 脚本，生成演示数据：3 个经销商、8 台在用/退机设备
  （机型 M4/F1/A1）、每机型 2–3 个试剂 SKU、最近 3 个月的检测次数、
   经销商×SKU 年度商务价格（故意留 1–2 个缺价用于测试兜底逻辑）、
   囤货月数假设（覆盖合规/轻度/重度三种情形）、各经销商返利测算金额
```

**验收**：跑 seed 后用 SQL 能查到 18 张表且演示数据完整；audit log 表无删改接口。

---

## 阶段 2 · MCL 计算引擎（Rev_F3）

```text
根据 PRD.md 第 3 章，在 backend 实现 Rev_F3 计算引擎，暴露
POST /api/engine/calculate?version_id=xxx 接口：

Rev_F3 = Rev_install + Rev_stock + Rev_rebate

分项① Rev_install（3.2 节）：
- 只取 dim_device.status='在用' 的 SN（PRD 4.3：退机/停用剔除）
- 每台 SN × 可用 SKU：最近 X 个月（X 默认 3，从 KPI 参数库读取，可配置）
  月均检测次数 T[SN,SKU] × 经销商年度商务价格 P[dealer,SKU] × 6 个月
- 经销商识别链：device_sn → dim_device.customer_id → dim_customer（PRD 4.2）
- 缺价兜底：无经销商年度价时回退 dim_sku 标准 ASP，标记 price_fallback=TRUE
- 不足 X 个月的 SN 按实际月数取均值并标记

分项② Rev_stock（3.3 节，含压货风控）：
- Rev_stock = Σ StockMonths × AvgMonthlySales × Adj（经销商×SKU 粒度）
- 准入判定（满足其一 Adj=1.00）：X ≤ 2；或 |X − X_历史同期| ≤ 1
- 轻度压货（2<X≤3 且偏差>1）：Adj=0.70；重度压货（X>3）：Adj=0.50
- 阈值和折减系数全部从 dim_kpi 参数库读取，不许硬编码
- 触发折减时：写 risk_flag='渠道压货风险' 治理记录 + ctl_audit_log 留痕

分项③ Rev_rebate（3.4 节）：
- Σ 经销商返利测算金额 × rebate_sign（默认 +1，可配置为 -1 抵减口径）
- 在 fact_revenue_forecast.calc_basis 记录口径说明

计算结果按「经销商×SKU」明细 + BU×期间（FC7–12 六个月）汇总两个层级写入
fact_revenue_forecast，并返回 JSON。请为三个分项各写至少 3 个单元测试，
覆盖：正常计算、缺价兜底、三档压货折减、退机设备剔除。
```

**验收**：单测全绿；手工核对一个经销商的三分项数字与 Excel 手算一致。

---

## 阶段 3 · KPI 预警

```text
根据 PRD.md 1.4 模块 3 和 6.3 节 dim_kpi 表，实现 KPI 预警服务：

1. dim_kpi 内置指标：单台产出（次/月）、囤货月数（月）、收入增长率（%），
   各带红/黄/绿三档阈值和基准值
2. 引擎计算完成后自动执行 KPI 匹配：按 apply_dim（BU/SKU/设备）把计算结果
   与阈值对比，产出 绿=达标 / 黄=预警 / 红=超标 三种状态
3. 提供 GET /api/kpi/alerts?version_id=xxx 返回预警清单
  （含压货风险清单：dealer/SKU/X/X_历史同期/Adj）
4. 红色预警的记录标记 data_locked=TRUE，前端展示锁定图标
```

**验收**：seed 数据中的重度压货经销商出现在红色预警清单中。

---

## 阶段 4 · H/AI/H 审批流与版本控制

```text
根据 PRD.md 1.4 模块 4、6.1 节和 6.3 节 ctl_approval 表，实现审批流：

1. 四个角色：H 录入（编制人）、AI 辅助（引擎自动校验）、财务复核、CEO 终审
2. 版本状态机：草稿 → 复核中 → 已审批 → 已锁定（dim_forecast_version.status）
3. 流转规则：
   - H 录入提交 → 触发 AI 辅助自动校验（数据质量校验 PRD 4.3 + KPI 预警），
     校验通过才能进入财务复核
   - 财务复核可「批准/退回」，退回后版本回到草稿
   - CEO 终审批准 → 版本 is_locked=TRUE，同时把所有事实表当前数据写入
     ctl_version_shot 快照
4. 已锁定版本的所有数据禁止修改（后端强制校验），只能复制出新版本
5. 每次流转写 ctl_approval 流水，每次数据写操作记 ctl_audit_log
6. 前端提供审批看板：当前状态、待办、审批历史时间线
```

**验收**：走完一遍完整审批链路；锁定后尝试改数据返回 403；快照可查。

---

## 阶段 5 · 报表自动生成与可视化

```text
根据 PRD.md 1.4 模块 5，实现报表层：

1. FC6+6 基准收入报表页：
   - 顶部卡片：Rev_F3 总额及三分项（Rev_install / Rev_stock / Rev_rebate）
   - ECharts 图：FC7–12 月度收入柱状图（三分项堆叠）+ 经销商占比饼图
   - 明细表：经销商×SKU 粒度，可按分项/风险标记筛选
2. 风险评估建议板块：列出压货风险清单和折减金额，附处置建议文案
3. 导出：一键下载 Excel/CSV（含汇总 + 明细两个 sheet）
4. 版本对比：任选两个 version_id 并排对比差异
```

**验收**：图表数字与引擎输出一致；导出文件可用 Excel 打开。

---

## 阶段 6（可选）· 行业数据对比

```text
根据 PRD.md 第 8 章，实现行业数据对比模块：

1. 行业数据录入表（或对接公开财报数据源）：同行业公司季报/半年报收入
2. 与本公司 FC6+6 关键绩效自动对比，生成偏差分析
3. 在报表页新增「同行业数据分析」板块展示对比图
```

---

## 给 AI 的全局约束（可加入项目 CLAUDE.md）

```text
- 所有业务参数（X 检测窗口、囤货阈值、Adj 折减系数、rebate_sign）必须从
  dim_kpi 参数库读取，禁止硬编码
- 金额口径：含税销售净额，人民币，保留 2 位小数
- 任何对事实表的写操作必须同步写 ctl_audit_log
- 已锁定版本（is_locked=TRUE）的数据在后端一律拒绝修改
- 界面语言为简体中文，术语与 PRD 保持一致（分项①②③、H/AI/H、FC6+6 等）
```
