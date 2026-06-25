# FC6+6 TCSS — Vibe Coding 全量提示词文档
> 基于《FC6+6 AI财务预测系统 系统架构设计文档 (SAD) V1.0》生成
> 日期：2026-06-23 | 用途：AI 辅助编码（Claude / Cursor / Copilot）

---

## 文档使用说明

本文档将 SAD 中的每一个系统模块转化为**可直接粘贴给 AI 编码助手的提示词（Prompt）**。
每个 Prompt 独立可用，也可按顺序组合使用，实现从数据库到前端的全栈渐进开发。

---

## 第一部分：系统总体架构 Prompt

```
你是一位全栈架构师。请帮我设计并实现 FC6+6 TCSS（Total Cost & Strategy System）企业级财务预测系统。

## 系统定位
企业级半年度滚动预测系统，覆盖业绩规划、财务预测、资源配置和绩效管理四大职能。
预测周期：FC7-12（下半年预测），基于 YTD6（上半年实际数）驱动。

## 五大核心模块
- M1：数据源采集与导入
- M2：预测模型引擎（5个子模型）
- M3：KPI 设置与预警
- M4：多角色权限与审批流（H/AI/H 三级）
- M5：报表自动生成

## 数据流架构（L1→L5）
L1 数据源层    → ERP / CRM / SFE / HR + Excel 模板上传
L2 采集存储层  → M1 数据清洗 + 统一数据库
L3 模型引擎层  → M2 预测引擎（5子模型）+ M3 KPI 库调用
L4 工作流层    → M4 权限审批 + AI 预警 + 版本控制
L5 报表输出层  → M5 自动生成 + 下载 + 同行业对比

## 技术栈
- 前端：React 18 + TypeScript + Vite + Tailwind CSS + ECharts
- 后端：Node.js + Express + TypeScript
- 数据库：PostgreSQL + Prisma ORM
- 缓存：Redis
- 文件处理：SheetJS (xlsx)
- 认证：JWT + RBAC

## 第一步任务
请先输出完整的 PostgreSQL 数据库 Schema（Prisma 格式），包含所有模块的核心数据表。
```

---

## 第二部分：M1 数据采集模块 Prompt

### 2A — 数据库 Schema（M1 专项）

```
基于以下三层数据架构，设计 M1 数据采集模块的数据库表和 API。

## 三层数据分类

### 第1层：历史实际数（自动同步）
来源：ERP / CRM / SFE / eHR 系统
字段包含：
- ERP YTD6：收入、费用、历史产量、实际成本
- CRM YTD6：单台产出
- 库存：YTD6金额 + 周转天数 + 报废率
- HR：YTD5 实际 FTEs
- 对比基准：去年实际数、前一期预测、年度预算数
接入方式：API 自动同步 / 批量导入

### 第2层：基础线预测（Excel 上传 / 手工录入）
字段包含：
- 经销商经销存数据、CRM预测、年底囤货计划
- 维持性费用、VIP 客户费用
- 库存变化 + 预测周转天数
- SKU 7-12月份产量、生产线FTEs预测、预测生产天数、得率、OEE

### 第3层：增长性假设（Excel 上传 / 手工录入）
字段包含：
- SFE 数据、仪器投放计划、增加销售HC计划
- 电商投流、POCBio预测
- HC C&B 计划、电商新增包装测试
- 产品完全成本、降本项目、自动化 Capex
- 研发立项 BC/NPV、管理费用消减计划

## 运营工厂 SKU 专项字段（BOM 成本还原）
以下字段适用于厦门/长汀、苏州仪器/试剂、北京原料三个基地：
- 产品 SKU 标准成本、动因和结构
- 变动成本：BOM和成本还原、关联价格、直接人工(DL)、耗材和生产费用
- 半变动：能源、质检、间接制造
- 固定：间接制造、租金、折旧和摊销
- 关联因素：得率、OEE、Capex

## 任务
1. 设计涵盖三层数据的 Prisma Schema（含 DataSource、ImportJob、RawRecord 等表）
2. 实现 Excel 模板上传 API（POST /api/import/upload）
3. 实现 ERP 数据批量同步 API（POST /api/sync/erp）
4. 实现数据清洗和字段映射服务（DataCleanService）
5. 返回导入结果摘要（成功/失败/警告条数）
```

### 2B — Excel 模板设计 Prompt

```
请为 FC6+6 系统设计标准化 Excel 导入模板，使用 SheetJS 实现。

## 需要的模板
1. 收入预测模板（revenue_template.xlsx）
   列：BU | 产品线 | SKU | 月份 | 年份 | 数据类型(YTD/FC) | 基础销量 | 增长销量 | 单价 | 基础收入 | 增长收入 | 毛利率% | DSO天数

2. 费用预测模板（expense_template.xlsx）
   列：BU | 费用类别 | 子类别 | 月份 | 年份 | 数据类型 | 金额 | 备注

3. 运营成本模板（production_cost_template.xlsx）
   列：基地 | SKU | 月份 | 年份 | 数据类型 | 计划产量 | 直接材料 | 外购材料 | 直接人工 | 耗材 | 能源 | 质检 | 间接制造 | 折旧 | 得率 | OEE | 周转天数

4. HC 人员计划模板（hc_template.xlsx）
   列：BU | 部门 | 月份 | 年份 | 数据类型 | 人数 | FTE | 基本薪资 | 奖金 | 社保 | C&B合计

5. Capex 模板（capex_template.xlsx）
   列：BU | 项目名称 | 类别 | 月份 | 年份 | 投资金额 | 折旧月数 | 月折旧 | 效率提升% | ROI%

## 实现要求
- 每个模板首行为表头（中文），第二行起为数据行
- 支持数据验证（下拉框选择BU、类别等枚举值）
- 提供模板下载 API：GET /api/import/template/:type
- 提供模板上传解析 API：POST /api/import/:type/:versionId
- 解析后写入数据库并返回导入摘要
```

---

## 第三部分：M2 预测模型引擎 Prompt

### 3A — 子模型1：市场预测模型

```
实现 FC6+6 市场预测模型（子模型1）。

## 核心逻辑
销售预测 = 销售基础线 + 增长计划
           ↓                ↓
   【YTD6 历史驱动】     【增长输入驱动】

## 五个市场营销 BU 的输入映射

| BU | 基础线输入 | 增长计划输入 |
|---|---|---|
| 国内人医 | ERP YTD6、CRM YTD6、经销商经销存、前一期预测、年度预算、CRM预测、年底囤货计划 | SFE数据、其他新增目标 |
| 电商 | CRM预测 | 电商投流、新增费用、新增HC |
| 国际人医公卫 | 标单、产品线历史数据 | 公卫新增目标、增加销售HC |
| 国际人医非公卫 | 常规单、产品线历史数据 | 非公卫新增目标、POCBio预测 |
| 宠物 | ERP YTD6、CRM YTD6、去年实际数、已投仪器数、年底囤货 | 新增仪器投放、C1预测增量 |

## 每个 BU 的统一输出
- 产品结构和毛利率预测（按产品线 / SKU 分层）
- BU 部门费用预测
- 运营资金 DSO 预测
- 利润中心 EBIT 预测和对比（vs 历史 / 预算）

## 实现任务
1. 设计 MarketForecastEngine 服务类（TypeScript）
2. 实现 calculateBaseline(buType, ytdData) 方法
3. 实现 calculateGrowthPlan(buType, growthInputs) 方法
4. 实现 mergeAndOutput(versionId, buType) 方法，输出标准化结果
5. 实现 GET /api/forecast/revenue/:versionId?bu= 接口
6. 实现 GET /api/forecast/ebit/:versionId?bu= 接口（返回EBIT和对比）
```

### 3B — 子模型2：运营工厂预测模型

```
实现 FC6+6 运营工厂预测模型（子模型2）。

## 核心逻辑
对比标准成本的差异分析，基于 MRP/BOM 和成本动因驱动的制造成本核算

## 成本构成和驱动参数

| 成本项 | 关键驱动参数 | 来源系统 |
|---|---|---|
| MRP物料需求与库存策略 | 库存变化、预测周转天数 | ERP库存模块 |
| 外购材料 + 北京原料BOM | 完全变动成本 | BOM采购模块 |
| 直接人工 | 生产线FTEs、工时、计件标准、效率 | HR模块/ERP/SOP |
| 制造费用（耗材/能源/质检） | 预测产量、生产批次 | ERP成本模块 |
| 制造费用（折旧） | Capex计划、OEE | ERP成本模块 |

## 适用基地
- 厦门 / 长汀：BOM和成本还原预测
- 北京（原料）：BOM预测、变动成本
- 苏州（仪器）：BOM和成本还原预测
- 苏州（试剂）：BOM和成本还原预测

## 实现任务
1. 实现 ProductionCostEngine 服务类
2. 实现 calculateMaterialCost(skuId, plannedVolume, bomData) 方法
3. 实现 calculateLaborCost(siteId, fteData, hours) 方法
4. 实现 calculateOverhead(siteId, plannedVolume, capexData) 方法
5. 实现 calculateTotalProductionCost(versionId, siteId) 聚合方法
6. 实现 GET /api/forecast/production/:versionId?site= 接口
7. 实现 GET /api/forecast/production/site-summary/:versionId 接口（各基地汇总）
```

### 3C — 子模型3：自动化与降本模型

```
实现 FC6+6 自动化与降本项目预测模型（子模型3）。

## 核心逻辑
基于 Capex 和降本项目，测算效率提升带来的成本变化

## 三类降本计算

### 1. 材料降本
- 输入：采购谈判/替代料方案，设定降本率（%）
- 计算：降本节约金额 = 原材料成本 × 降本率
- 输出：按月、按SKU的材料节约预测

### 2. 人工效率提升
- 输入：自动化项目名称、FTEs减少数、废品率降低%、工时节约%
- 计算：人工节约 = FTEs减少 × 月均C&B + 工时节约金额
- 输出：按月人工成本节约

### 3. Capex与折旧
- 输入：自动化设备Capex金额、折旧年限（月数）、投入使用月份
- 计算：月折旧 = Capex总额 ÷ 折旧月数
- 输出：按月折旧费用（增加成本）、净节约 = 效率节约 - 新增折旧

## 实现任务
1. 设计 CostReductionPlan 数据模型
2. 实现 CostReductionEngine 服务类
3. 实现 calculateMaterialSaving(planId) 方法
4. 实现 calculateLaborSaving(planId) 方法
5. 实现 calculateCapexDepreciation(capexId) 方法
6. 实现 calculateNetSaving(versionId) 聚合方法（效率节约 - 新增折旧）
7. 实现 GET /api/forecast/cost-reduction/:versionId 接口
```

### 3D — 子模型4：研发预测模型

```
实现 FC6+6 研发预测模型（子模型4）。

## 核心逻辑
基于10年规划，将当年立项项目纳入 FC6+6

## 输入数据结构
- 立项清单：项目名称、优先等级（P0/P1/P2/P3）、立项时间
- 经济性分析：BC（商业案例）、NPV（净现值）、PRD（产品需求文档）
- CAP调整策略：资本化支出（计入资产）vs 费用化支出（计入当期费用）的拆分规则

## 输出字段
- 本期研发费用预测（费用化部分，按月）
- 本期研发资本化支出（Capex 部分，按月）
- 进入 FC6+6 的研发调整项

## 实现任务
1. 设计 RDProject 数据模型（含优先级、BC/NPV、资本化比例）
2. 实现 RDForecastEngine 服务类
3. 实现 calculateRDExpense(projectId, period) 方法（费用化部分）
4. 实现 calculateRDCapex(projectId, period) 方法（资本化部分）
5. 实现 GET /api/forecast/rd/:versionId 接口（返回研发费用和Capex拆分）
```

### 3E — 子模型5：HC/C&B 预测模型

```
实现 FC6+6 管理与 HC/C&B 预测模型（子模型5）。

## 核心逻辑
通过 HR 模块数据驱动 FTEs + 薪酬福利（C&B）全量预测

## 数据流
HR 模块 YTD5 实际 FTEs → HC C&B 计划录入 → 自动生成薪酬福利预测

## 计算逻辑
- 基本薪资预测 = FTE × 月均基本薪资
- 奖金预测 = 基本薪资 × 奖金比例（按BU、季度配置）
- 社保 = 基本薪资 × 社保费率（按城市配置）
- C&B 合计 = 基本薪资 + 奖金 + 社保 + 其他福利

## 附加功能
1. 人均指标测算：人均收入 = BU总收入 ÷ FTE（与行业对比）
2. 管理费用消减：各部门费用削减计划结构化录入和测算

## 实现任务
1. 设计 HCForecast 和 CBPlan 数据模型
2. 实现 HCForecastEngine 服务类
3. 实现 calculateMonthlyCB(buId, month, fteData) 方法
4. 实现 calculatePerHeadRevenue(buId, versionId) 方法（人均产值）
5. 实现 GET /api/forecast/hc/:versionId 接口
6. 实现 GET /api/forecast/hc/per-head/:versionId 接口（人均指标）

## 行业对比扩展
实现定期抓取同行业公开财务数据（使用公开API或爬虫），
与公司 FC6+6 关键绩效自动对比，生成偏差分析报告。
```

---

## 第四部分：M3 KPI 设置与预警 Prompt

```
实现 FC6+6 KPI 设置与预警模块（M3）。

## KPI 数据库结构

| KPI类型 | 数据来源 | 用途 |
|---|---|---|
| 历史实际 | ERP/CRM 历史数据自动汇入 | 基础比较基准、趋势分析 |
| 年度预算 | 预算编制系统导入 | 执行偏差分析 |
| 10年规划 | 战略规划系统导入 | 战略一致性校验 |
| 前置性/结果性KPI | SFE/CRM/内部系统 | 业务预测/结果分析 |

## 核心运作规则
1. 录入数据自动与 KPI 数据库匹配
2. KPI 数据库按 BU、工厂、中心自动匹配绩效指标
3. 数据超出 KPI 阈值时触发预警通知（可配置预警规则）
4. 批准后数据和 KPIs 自动锁定，保留审计日志
5. 支持跨 BU、跨工厂横向对比查询

## KPI 指标体系（主要指标）

| 模块 | KPI 指标 |
|---|---|
| 收入 | 产品线销量、收入、毛利率、DSO |
| 费用 | BU费用率、电商ROI、VIP客户费用 |
| 生产 | OEE、得率、周转天数、报废率 |
| 人员 | FTE数量、人均产值、C&B占比 |
| 资本 | Capex金额、折旧、ROI |
| 利润 | EBIT、EBIT率（各利润中心） |

## 实现任务
1. 设计 KPIBenchmark、KPIAlert 数据模型
2. 实现 KPIService 类，包含：
   - checkThreshold(recordId, kpiCode) 方法（实时检测）
   - batchCheckVersion(versionId) 方法（版本提交时批量检测）
   - generateAlertReport(versionId) 方法（生成预警汇总）
3. 实现 GET /api/kpi/benchmarks?bu=&year= 接口
4. 实现 POST /api/kpi/benchmarks 接口（新增/更新基准值）
5. 实现 GET /api/kpi/alerts/:versionId 接口（返回当前版本所有预警）
6. 实现 WebSocket 推送：当数据录入触发预警时实时通知前端
```

---

## 第五部分：M4 权限与审批流 Prompt

```
实现 FC6+6 多角色权限与审批流模块（M4）。

## H/AI/H 三级管控工作流

| 角色层级 | 角色 | 权限范围 | 操作约束 |
|---|---|---|---|
| H（录入层）| 各业务部门用户 | 数据录入、修改（限本BU）、查看本BU报表 | 提交后进入审核队列，不可自行锁定 |
| AI（辅助层）| 系统AI引擎 | 数据校验、KPI偏差预警、异常标记、预测建议 | 不产生最终决定，仅辅助判断 |
| H（审批层）| 财务（复核）/ CEO（终审）| 财务：复核修改全部数据；CEO：最终审批 | 审批后字段自动锁定，记入版本库 |

## 审批流状态机
DRAFT → SUBMITTED → FINANCE_REVIEWED → CEO_APPROVED → LOCKED
                         ↓ (驳回)
                        DRAFT

## 版本控制规则
- 每次修改记录：操作人 + 时间 + 变更字段 + 版本号
- 审批完成后创建新版本快照，历史版本可回溯
- 审计日志不可删除，支持导出（CSV/Excel）

## 实现任务
1. 设计 Role 枚举（BUSINESS / FINANCE / CEO / ADMIN）
2. 实现 JWT + RBAC 认证中间件
3. 实现 ApprovalService 类，包含：
   - submitForReview(versionId, userId) 方法
   - financeReview(versionId, userId, comment) 方法
   - ceoApprove(versionId, userId, comment) 方法
   - lockVersion(versionId) 方法（自动锁定所有字段）
   - rejectVersion(versionId, userId, reason) 方法
4. 实现 AuditLogService 类（所有写操作异步记录）
5. 实现以下 API：
   - POST /api/approvals/:versionId/action（统一审批动作入口）
   - GET /api/approvals/:versionId/history（审批历史）
   - GET /api/audit-logs/:versionId（审计日志）
   - GET /api/audit-logs/export/:versionId（导出 CSV）
6. 实现 AI 辅助层：
   - 数据提交时自动触发 KPI 校验
   - 异常数据（环比变化 > 30%）自动标记并生成说明建议
   - 预测建议以 JSON 格式附在审批流消息中
```

---

## 第六部分：M5 报表自动生成 Prompt

### 6A — 报表生成引擎

```
实现 FC6+6 报表自动生成模块（M5）。

## 报表输出清单

| 报表类型 | 覆盖范围 | 格式 |
|---|---|---|
| 公司级FC6+6关键绩效报告 | 全公司合并视图 | Excel + PPT 标准模板 |
| 各BU KPI报表 | 市场营销/运营/研发/管理 | Excel + PPT 标准模板 |
| 同行业对比分析 | 行业引擎自动抓取 | 内嵌报表+图表 |
| 风险评估与改进建议 | KPI预警+AI建议 | 附于管理报表末页 |

## 科目拆分合并规则
- 按设定规则自动拆分和合并管理报表科目
- 支持多 BU 口径汇总 → 公司合并报表向上汇总逻辑
- Excel 模板格式锁定，确保各 BU 口径一致

## EBIT 报表计算逻辑
EBIT = 收入 × 毛利率 - BU部门费用 - 分摊管理费用
EBIT率 = EBIT ÷ 收入

## 实现任务
1. 实现 ReportGeneratorService 类，包含：
   - generateCompanyReport(versionId) 方法（公司级合并报表）
   - generateBUReport(versionId, buId) 方法（BU级报表）
   - generateEBITSummary(versionId) 方法（EBIT汇总）
   - generateIndustryComparison(versionId) 方法（同行对比）
   - generateRiskReport(versionId) 方法（风险评估）
2. 实现 ExcelExporter 类（基于 SheetJS）：
   - exportFC6Report(versionId) → 多Sheet Excel文件
   - exportBUKPIReport(versionId, buId) → BU KPI Excel
   - Sheet 结构：封面页 + 收入预测 + 费用预测 + HC计划 + Capex + EBIT汇总
3. 实现以下 API：
   - GET /api/reports/:versionId/excel（下载完整报表）
   - GET /api/reports/:versionId/ebit（EBIT JSON数据）
   - GET /api/reports/:versionId/bu-kpi/:buId（BU KPI JSON）
   - GET /api/reports/:versionId/risk（风险评估 JSON）
```

### 6B — 前端可视化 Prompt

```
基于 React + ECharts，实现 FC6+6 系统前端可视化仪表板。

## 页面结构
1. 登录页（LoginPage）— JWT认证，4个演示角色快速切换
2. 仪表板（DashboardPage）— KPI总览 + 预警 + 图表
3. 版本管理（VersionsPage）— 预测版本列表和新建
4. 版本详情（VersionDetailPage）— 数据模块入口 + 审批工作流
5. 收入预测（RevenuePage）— 表格录入 + Excel上传
6. 费用预测（ExpensesPage）— 费用分类录入
7. HC人员计划（HCPage）— FTE + C&B录入 + 饼图
8. Capex计划（CapexPage）— 资本支出录入
9. 生产成本（ProductionPage）— 各基地BOM成本录入
10. 管理报表（ReportsPage）— EBIT汇总 + 多维图表
11. KPI基准库（KPIPage）— 基准值管理

## 仪表板核心图表（ECharts）

### 图表1：各 BU 收入 & EBIT 对比柱状图
- X轴：BU名称（国内人医/电商/国际人医/宠物）
- Y轴：金额（万元）
- 系列：收入（浅蓝）、毛利润（深蓝）、费用（红）、EBIT（绿）

### 图表2：毛利率雷达图
- 各 BU 毛利率 vs KPI基准 vs 行业均值
- 三层雷达叠加对比

### 图表3：FTE 分布饼图
- 各 BU FTE 占比

### 图表4：EBIT 趋势折线图（月度）
- 月度EBIT走势（YTD实际 + FC预测）
- 区分实际（实线）vs 预测（虚线）

### 图表5：Capex 投入甘特图
- 各项目投入时间线和折旧摊销

## 实现要求
- 所有图表使用 echarts-for-react 封装
- 颜色规范：实际数据=灰/蓝，预测数据=绿，预警=橙/红
- 响应式：桌面端 2-3列布局，移动端单列
- 数据状态管理使用 Zustand
- 加载状态使用 Skeleton 占位
```

---

## 第七部分：数据安全与接口规范 Prompt

```
实现 FC6+6 系统的数据安全机制和接口规范。

## 数据加密要求
1. 传输加密：所有 API 强制 HTTPS，禁止 HTTP 明文传输
2. 存储加密：
   - PostgreSQL 数据库静态加密（pgcrypto 或 外部KMS）
   - 敏感字段（薪资、利润数据）额外进行列级加密
   - 加密字段：salary, bonus, ebit, grossProfit 等
3. 数据脱敏：
   - 开发/测试环境禁止使用真实财务数据
   - 提供数据脱敏脚本（替换真实数字为随机比例缩放值）

## API 接口规范

### 统一响应格式
{
  "success": true,
  "data": {...},
  "meta": { "total": 100, "page": 1, "pageSize": 20 },
  "error": null
}

### 错误响应格式
{
  "success": false,
  "data": null,
  "error": { "code": "PERMISSION_DENIED", "message": "无权操作已锁定版本" }
}

### 核心接口清单
GET    /api/health                           系统健康检查
POST   /api/auth/login                       用户登录
GET    /api/auth/me                          获取当前用户
GET    /api/versions                         版本列表
POST   /api/versions                         新建版本
GET    /api/versions/:id/summary             版本汇总数据
GET    /api/versions/:id/kpi-alerts          KPI预警列表
POST   /api/import/:type/:versionId          Excel导入
GET    /api/import/template/:type            下载模板
GET    /api/revenue?versionId=&bu=           收入数据
POST   /api/revenue                          新增收入记录
PUT    /api/revenue/:id                      更新收入记录
DELETE /api/revenue/:id                      删除收入记录
GET    /api/expenses?versionId=&bu=          费用数据
POST   /api/expenses                         新增费用记录
GET    /api/hc?versionId=&bu=               HC计划
POST   /api/hc                               新增HC记录
GET    /api/capex?versionId=&bu=            Capex计划
POST   /api/capex                            新增Capex记录
GET    /api/production?versionId=&site=     生产成本
POST   /api/production                       新增生产成本
GET    /api/kpi/benchmarks                   KPI基准值
POST   /api/kpi/benchmarks                   新增基准值
POST   /api/approvals/:versionId/action      审批动作
GET    /api/approvals/:versionId/history     审批历史
GET    /api/reports/:versionId/excel         下载Excel报表
GET    /api/reports/:versionId/ebit          EBIT报表数据
GET    /api/audit-logs/:versionId            审计日志

## 实现任务
1. 实现统一响应中间件（responseFormatter）
2. 实现全局错误处理中间件（errorHandler）
3. 实现请求日志中间件（requestLogger）
4. 实现速率限制（rate-limiter：100次/分钟/IP）
5. 实现数据脱敏工具函数（maskFinancialData）
6. 编写 OpenAPI 3.0 规范文档（swagger.yaml）
```

---

## 第八部分：部署配置 Prompt

```
为 FC6+6 TCSS 配置生产级部署方案。

## 部署架构
- 前端：Vercel / GitHub Pages（静态托管）
- 后端：Docker 容器化，部署到云服务器（阿里云/AWS）
- 数据库：PostgreSQL 16（托管服务或自建）
- 缓存：Redis 7（托管服务或自建）
- 文件存储：阿里云 OSS / AWS S3（Excel 文件存储）

## Docker 配置

### docker-compose.yml（生产环境）
services:
  backend:
    build: ./backend
    env_file: .env.production
    ports: ["3001:3001"]
    depends_on: [db, redis]
  
  frontend:
    build: ./frontend
    ports: ["80:80"]
    environment:
      - VITE_API_URL=https://api.yourdomain.com
  
  db:
    image: postgres:16-alpine
    volumes: [pgdata:/var/lib/postgresql/data]
    environment:
      POSTGRES_DB: fc6tcss_prod
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
  
  redis:
    image: redis:7-alpine
    command: redis-server --requirepass ${REDIS_PASSWORD}

## 环境变量清单（.env.production）
DATABASE_URL=postgresql://user:pass@db:5432/fc6tcss_prod
JWT_SECRET=<64位随机字符串>
REDIS_URL=redis://:pass@redis:6379
FRONTEND_URL=https://yourdomain.com
PORT=3001
NODE_ENV=production

## 实现任务
1. 编写 backend/Dockerfile（多阶段构建）
2. 编写 frontend/Dockerfile（nginx静态服务）
3. 编写 nginx.conf（前端SPA路由支持 + 反向代理后端）
4. 编写 GitHub Actions CI/CD 工作流：
   - 触发：push to main
   - 步骤：lint → test → build → docker push → deploy
5. 编写数据库迁移脚本和回滚方案
6. 编写 README.md（完整启动指南）
```

---

## 快速参考：关键业务术语

| 术语 | 说明 |
|---|---|
| FC6+6 | Forecast 6+6，前6月实际数 + 后6月预测数 |
| YTD6 | Year-To-Date 6个月，上半年实际完成数 |
| FC7-12 | 7-12月预测数（下半年） |
| BU | Business Unit，业务单元 |
| EBIT | 息税前利润（收入 - 成本 - 费用） |
| DSO | Days Sales Outstanding，应收账款周转天数 |
| FTE | Full-Time Equivalent，全职当量 |
| C&B | Compensation & Benefits，薪酬福利 |
| OEE | Overall Equipment Effectiveness，设备综合效率 |
| BOM | Bill of Materials，物料清单 |
| SFE | Sales Force Effectiveness，销售力量效能 |
| Capex | Capital Expenditure，资本支出 |
| BC | Business Case，商业案例 |
| NPV | Net Present Value，净现值 |
| CAP | Capitalization，资本化（研发支出） |
| MRP | Material Requirements Planning，物料需求计划 |
| SKU | Stock Keeping Unit，最小库存单元 |

---

## 开发优先级建议

| 阶段 | 模块 | 预估工作量 |
|---|---|---|
| Sprint 1（1-2周）| 数据库Schema + M4权限认证 + M1基础导入 | 高优先级 |
| Sprint 2（1-2周）| M2子模型1（市场预测）+ M5基础报表 | 高优先级 |
| Sprint 3（1-2周）| M2子模型2（运营工厂）+ M3 KPI预警 | 中优先级 |
| Sprint 4（1-2周）| M2子模型3-5 + 审批流优化 + 图表完善 | 中优先级 |
| Sprint 5（1周）  | 数据加密 + 部署配置 + 测试 | 收尾 |

---

## 附录：MCL 模型组件库 & DCL 数据采集清单

> 来源：FC6+6 TCSS 思维导图（Rev20260625）
> MCL = Model Component Library（模型组件库）
> DCL = Data Collection List（数据采集清单）

---

### MCL 总览

| MCL编号 | 名称 | 覆盖预测节点 | 关联 DCL |
|---|---|---|---|
| MCL-01 | 基准收入 | 节点01–04（Rev_F1~F4） | DCL01–05 |
| MCL-02 | 增量收入 | 节点05–09（Rev_F5~F9） | DCL06–10 |
| MCL-03 | 营销费用优化 | 节点10–12（Rev_F10~F12） | DCL11–13 |
| MCL-04 | 基准销货成本 | 节点13（Rev_F13） | DCL14 |
| MCL-05 | 销货成本优化 | 节点14–17（Rev_F14~F17） | DCL15–19 |
| MCL-06 | 研发项目 | 节点18（Rev_F18） | DCL20 |
| MCL-07 | 管理费用优化 | 节点19（Rev_F19） | DCL21 |

---

### MCL-01：基准收入

**驱动因素：** 无新举措下稳态收入（YTD6历史驱动）
**预测逻辑：** 经销商进销存、装机单台产出、趋势与订单预测、年底囤货计划

| 节点编号 | 节点名称 | 方法说明 | 计算公式 | 关联DCL |
|---|---|---|---|---|
| 节点01 | 经销商进销存 | 用最新进销存数据推算半年期稳态收入 | `Rev_F1 = MAX(月均出库量, 最后一月出库量) × 6` | DCL-01 |
| 节点02 | 装机单台产出 | 存量装机的稳态试剂/服务收入 | `Rev_F2 = CRM已投放仪器数 × 单台月均产出(试剂/服务) × 6` | DCL-02 |
| 节点03 | 销售趋势和订单 | 结合历史趋势与销售订单估算收入 | `Rev_F3 = 历史增长趋势外推收入 + 预计订单` | DCL-03, DCL-04 |
| 节点04 | 经销商囤货计划 | 经销商囤货计划反映对完成目标预期 | `Rev_F4 = 经销商囤货月数(X) × 月均销售额` | DCL-05 |

---

### MCL-02：增量收入

**驱动因素：** 来自新举措、新产品、新市场或扩张的收入
**预测逻辑：** SFE销售漏斗转化目标、电商增量、POCBio新市场、国际销售线索转化、CRM计划装机产出

| 节点编号 | 节点名称 | 方法说明 | 计算公式 | 关联DCL |
|---|---|---|---|---|
| 节点05 | SFE销售漏斗转化目标 | 销售人员带来的增量销售 | `Rev_F5 = SFE转化目标金额/FTE × 实际销售FTEs数` | DCL-06 |
| 节点06 | 电商OTO增量 | 线上渠道增量假设 | `Rev_F6 = 电商平台预测` | DCL-07 |
| 节点07 | POCBio新市场收入 | POCBio进入低端和私立市场收入预测 | `Rev_F7 = 目标市场 × 渗透率` | DCL-08 |
| 节点08 | 国际销售线索转化目标 | 海外市场新销售线索转化目标收入 | `Rev_F8 = 国际线索总价值 × 转化率` | DCL-09 |
| 节点09 | CRM计划投放仪器产出 | CRM计划新装机增量贡献 | `Rev_F9 = CRM计划新投放仪器数 × 单台产出/月 × 月份数` | DCL-10 |

---

### MCL-03：营销费用优化

**驱动因素：** 对现有基准营销与销售支出的效率改进
**预测逻辑：** 保持维持性/VIP费用，新增业务HC&费用，营销费用率改进比率

| 节点编号 | 节点名称 | 方法说明 | 计算公式 | 关联DCL |
|---|---|---|---|---|
| 节点10 | 维持性费用 | 存量必保费用 | `Rev_F10 = 上一年度或预算费用` | DCL-11 |
| 节点11 | 增量业务新增费用 | 新举措新增的人员C&B与直接费用 | `Rev_F11 = 新增HC C&B预测 + 新增变动费用` | DCL-12 |
| 节点12 | 降低营销费用 | 降低S&M费用率 | `Rev_F12 = 营销基准数 × 费用率改进目标` | DCL-13 |

---

### MCL-04：基准销货成本

**驱动因素：** 当前生产与采购条件下的标准销货成本
**预测逻辑：** 基于上一年度实际生产成本作为基准

| 节点编号 | 节点名称 | 方法说明 | 计算公式 | 关联DCL |
|---|---|---|---|---|
| 节点13 | 标准销货成本 | 确定标准成本 | `Rev_F13 = 标准销货成本 = 上一年度实际生产成本` | DCL-14 |

---

### MCL-05：销货成本优化

**驱动因素：** 通过自动化、采购变更、流程重设计降低销货成本
**预测逻辑：** 采购降本率、制造费用节约率、人员效率提升、自动化设备Capex

| 节点编号 | 节点名称 | 方法说明 | 计算公式 | 关联DCL |
|---|---|---|---|---|
| 节点14 | 采购降本 | 材料价格谈判或替代料方案预测降本率 | `Rev_F14 = 材料节约金额 = 原材料成本 × 降本率` | DCL-15 |
| 节点15 | 精益降本项目 | 流程改进精益方案降低制造费用的节约率 | `Rev_F15 = 制造成本节约金额 = 制造费用基准成本 × 节约率` | DCL-16 |
| 节点16 | 人工成本节约 | 提升工时效率和节约FTEs/零时工节约 | `Rev_F16 = 人工节约 = 减少FTE数 × 月均C&B + 原工时成本 × 工时节约%` | DCL-17 |
| 节点17 | 自动化项目和Capex | 自动化项目带来的成本变动和节约 | `Rev_F17 = 净节约 = 人员节约和效率提升的金额 - 当期新增月折旧` | DCL-18, DCL-19 |

---

### MCL-06：研发项目

**驱动因素：** 面向未来的产品与技术投资流
**预测逻辑：** 基于10年规划，将当年立项项目和计划进度纳入FC6+6

| 节点编号 | 节点名称 | 方法说明 | 计算公式 | 关联DCL |
|---|---|---|---|---|
| 节点18 | 研发项目预测 | 按规划和项目优先等级预测 | 已批准→按实际月度预算计入FC；计划立项→按规划预算占位计入FC Rolling段，不计入Firm段；未审批→仅记录在DCL-21管线，不计入任何费用。`Rev_F18 = 批准立项总金额列入当年金额 +/- 预计项目关键进度偏差的金额调整` | DCL-20 |

---

### MCL-07：管理费用优化

**驱动因素：** 管理费用与间接、非经营费用和效率举措
**预测逻辑：** 管理部门和非经营费用预测、削减计划测算

| 节点编号 | 节点名称 | 方法说明 | 计算公式 | 关联DCL |
|---|---|---|---|---|
| 节点19 | 管理费用优化 | 降低管理和非经营性费用 | `Rev_F19 = 净G&A费用 = 管理部门基准费用合计 - 削减节约合计` | DCL-21 |

---

### DCL 数据采集清单（完整列表）

| DCL编号 | 数据内容 | 采集来源 | 更新频率 | 采集方式 | 关联MCL |
|---|---|---|---|---|---|
| DCL-01 | 经销商进销存月报表 | 模板导入 | 每季度 | 人工 | MCL-01 |
| DCL-02 | CRM装机报表 | BI/CRM | 每月 | 自动 | MCL-01 |
| DCL-03 | YTD6实际销售报表 | BI/ERP | 每季度 | 自动 | MCL-01 |
| DCL-04 | 预计订单表 | 模板导入 | 每季度 | 人工 | MCL-01 |
| DCL-05 | 经销商囤货预测表 | 模板导入 | 每季度 | 人工 | MCL-01 |
| DCL-06 | SFE销售效能表 | BI/SFE | 每月 | 自动 | MCL-02 |
| DCL-07 | 电商渠道假设表 | 模板导入 | 每月 | 手动 | MCL-02 |
| DCL-08 | POCBio新市场预测表 | 模板导入 | 每季度 | 人工 | MCL-02 |
| DCL-09 | 国际销售线索表 | BI/模板导入 | 每月 | 自动 | MCL-02 |
| DCL-10 | CRM计划装机表 | BI/CRM | 每月 | 自动 | MCL-02 |
| DCL-11 | 维持性VIP客户&必保费用明细表 | BI/ERP | 每季度 | 自动 | MCL-03 |
| DCL-12 | 新增S&M费用计划表 | 模板导入 | 每季度 | 人工 | MCL-03 |
| DCL-13 | S&M费用率改进计划表 | 模板导入 | 每月 | 手动 | MCL-03 |
| DCL-14 | 产品实际生产成本表 | BI/ERP/模板导入 | 每年 | 自动/手动 | MCL-04 |
| DCL-15 | 材料降本计划表 | 模板导入 | 每季度 | 人工 | MCL-05 |
| DCL-16 | 流程改善和精益降本项目表 | 模板导入 | 每月 | 人工 | MCL-05 |
| DCL-17 | 人工效率提升表 | BI/ERP，模板导入 | 每月 | 自动/人工 | MCL-05 |
| DCL-18 | Capex与折旧计划表 | 模板导入 | 每季度 | 人工 | MCL-05 |
| DCL-19 | 项目节约收益计划表 | 模板导入 | 每季度 | 人工 | MCL-05 |
| DCL-20 | 研发项目进度计划表 | 模板导入 | 每季度 | 人工 | MCL-06 |
| DCL-21 | 管理和非经营性费用变动计划表 | 模板导入 | 每季度 | 人工 | MCL-07 |

---

### MCL/DCL 与系统模块映射

| 系统模块 | 关联MCL | 关联DCL | 实现优先级 |
|---|---|---|---|
| M1 数据采集（Excel上传） | 全部 | DCL-01~21 | Sprint 1 |
| M2 子模型1（市场预测） | MCL-01, MCL-02 | DCL-01~10 | Sprint 2 |
| M2 子模型2（运营工厂成本） | MCL-04, MCL-05 | DCL-14~19 | Sprint 3 |
| M2 子模型3（降本项目） | MCL-05 | DCL-15~19 | Sprint 3 |
| M2 子模型4（研发预测） | MCL-06 | DCL-20, DCL-21 | Sprint 4 |
| M2 子模型5（HC/C&B） | MCL-03 | DCL-11~13 | Sprint 4 |
| M3 KPI预警 | MCL-01~07（输出端） | — | Sprint 3 |
| M5 EBIT报表 | MCL-01~07（汇总） | — | Sprint 2 |
