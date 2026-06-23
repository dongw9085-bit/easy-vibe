# FC6+6 AI财务预测系统 — Vibe Coding 实战指南

## 项目背景

本章以真实企业级项目为例，带你用 Vibe Coding 方式从零构建 **FC6+6 TCSS（Total Cost & Strategy System）**——一套企业级半年度滚动预测系统，覆盖业绩规划、财务预测、资源配置和绩效管理四大职能。

> **Vibe Coding 核心理念**：你是产品经理+架构师，AI 是你的全栈工程师团队。用精准的需求描述驱动 AI 生成代码，而不是自己写代码。

---

## 系统概览

### 你将构建的东西

```
FC6+6 TCSS
├── M1 数据源采集与导入
│   ├── ERP/CRM/SFE 系统对接（API 同步）
│   ├── Excel 模板批量导入
│   └── 统一数据库存储
├── M2 预测模型引擎
│   ├── 子模型1：市场预测（按BU拆分）
│   ├── 子模型2：运营工厂成本预测（BOM驱动）
│   ├── 子模型3：自动化与降本测算
│   ├── 子模型4：研发费用预测（BC/NPV）
│   └── 子模型5：HC & C&B 薪酬预测
├── M3 KPI设置与预警
├── M4 多角色权限与审批流
└── M5 报表自动生成
```

### 技术选型（Vibe Coding 推荐栈）

| 层次 | 技术选择 | 理由 |
|------|---------|------|
| 前端 | React + Ant Design Pro | 企业中后台最成熟生态 |
| 后端 | Python FastAPI | AI/数据处理生态最强 |
| 数据库 | PostgreSQL + Redis | 关系型数据 + 缓存层 |
| AI引擎 | LangChain + Claude API | 预测建议与异常分析 |
| 任务队列 | Celery + RabbitMQ | 异步数据同步和报表生成 |
| 部署 | Docker Compose | 开发阶段快速启动 |

---

## 阶段一：用 AI 读懂需求文档，生成架构方案

### 1.1 把 SAD 文档喂给 AI

拿到系统架构设计文档（SAD）后，不要自己硬读。用这个 Prompt 让 AI 帮你消化：

```
我有一份企业级财务预测系统的架构设计文档（SAD），内容如下：

[粘贴文档内容]

请帮我：
1. 提取5个核心模块的功能边界
2. 识别最关键的数据实体（至少10个）
3. 画出模块间的依赖关系（用文字描述）
4. 标出哪些功能需要AI能力，哪些是纯业务逻辑
5. 建议用 Python FastAPI + React 实现的项目结构
```

### 1.2 生成数据库 Schema

AI 理解需求后，立刻让它生成数据库设计：

```
基于上面的FC6+6系统需求，请生成 PostgreSQL 数据库 Schema。

要求：
- 覆盖 M1-M5 所有模块的核心表
- 包含字段名、数据类型、主键、外键约束
- 处理多BU、多工厂、多版本的数据隔离
- 包含审计日志表（操作人、时间、变更字段）
- 用 SQL DDL 格式输出，加上中文注释

优先处理这些实体：
预测版本、BU数据、SKU成本、KPI配置、审批流状态、用户角色
```

**AI 生成的核心表结构示例：**

```sql
-- 预测版本控制表
CREATE TABLE forecast_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    version_name VARCHAR(50) NOT NULL,          -- 如 "FC7-12_2026_v1"
    forecast_period VARCHAR(20) NOT NULL,        -- "FC7-12"
    base_year_actual_months INT DEFAULT 6,       -- YTD月份数
    status VARCHAR(20) DEFAULT 'draft',          -- draft/reviewing/approved/locked
    created_by UUID REFERENCES users(id),
    approved_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    approved_at TIMESTAMPTZ,
    is_locked BOOLEAN DEFAULT FALSE
);

-- 业务单元配置表
CREATE TABLE business_units (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bu_code VARCHAR(20) UNIQUE NOT NULL,         -- "BU_DOMESTIC_MEDICAL"
    bu_name VARCHAR(100) NOT NULL,               -- "国内人医"
    bu_type VARCHAR(30) NOT NULL,                -- "marketing" / "factory" / "center"
    parent_bu_id UUID REFERENCES business_units(id)
);

-- KPI数据库
CREATE TABLE kpi_definitions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kpi_code VARCHAR(50) UNIQUE NOT NULL,
    kpi_name VARCHAR(100) NOT NULL,
    kpi_type VARCHAR(30),                        -- "leading" / "lagging"
    bu_id UUID REFERENCES business_units(id),
    threshold_warning DECIMAL(15,4),
    threshold_critical DECIMAL(15,4),
    unit VARCHAR(20)                             -- "%" / "万元" / "天"
);

-- 审计日志表（不可删除）
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    table_name VARCHAR(50) NOT NULL,
    record_id UUID NOT NULL,
    operation VARCHAR(10) NOT NULL,              -- INSERT/UPDATE/DELETE
    changed_by UUID REFERENCES users(id),
    changed_at TIMESTAMPTZ DEFAULT NOW(),
    old_values JSONB,
    new_values JSONB,
    version_id UUID REFERENCES forecast_versions(id)
);
```

---

## 阶段二：Vibe Coding 构建 M1 数据采集模块

### 2.1 项目骨架生成

用这个 Prompt 让 AI 一次性生成项目结构：

```
用 Python FastAPI 创建 FC6+6 系统的后端项目骨架。

项目结构要求：
fc66-backend/
├── app/
│   ├── main.py               # FastAPI 入口
│   ├── core/
│   │   ├── config.py         # 环境变量配置
│   │   ├── database.py       # SQLAlchemy 连接池
│   │   └── security.py       # JWT认证
│   ├── models/               # SQLAlchemy ORM 模型
│   ├── schemas/              # Pydantic 请求/响应模型
│   ├── api/v1/
│   │   ├── m1_data_import/   # M1 数据采集模块
│   │   ├── m2_forecast/      # M2 预测引擎
│   │   ├── m3_kpi/           # M3 KPI管理
│   │   ├── m4_workflow/      # M4 审批流
│   │   └── m5_reports/       # M5 报表生成
│   ├── services/             # 业务逻辑层
│   └── tasks/                # Celery 异步任务

生成 main.py、core/config.py、core/database.py 的完整代码。
使用 SQLAlchemy 2.0 async、Pydantic v2、Python 3.11+。
```

### 2.2 Excel 模板上传解析

M1 的核心功能是处理业务用户上传的 Excel 模板：

```
实现 FC6+6 系统的 Excel 模板上传和解析功能。

业务背景：
- 用户上传包含以下数据的 Excel：经销商预测数据、SKU产量计划、FTEs预测
- 每个 Excel 有固定模板格式，不同 BU 使用不同模板
- 解析后需要做数据校验，错误要精确到行列
- 校验通过后写入数据库，失败需要返回详细错误报告

请实现：
1. POST /api/v1/data-import/upload 接口
2. 支持 .xlsx 格式，文件大小限制 50MB
3. 使用 openpyxl 解析，自动识别模板类型（通过sheet名称）
4. 校验规则：必填字段不为空、数字字段类型正确、BU代码存在于数据库
5. 异步处理（用 Celery），返回 task_id 供前端轮询进度
6. 错误报告格式：[{"row": 5, "col": "C", "field": "sku_code", "error": "SKU不存在"}]
```

### 2.3 ERP 接口对接

```
实现与 ERP 系统的数据同步功能（API方式）。

接口规格：
- ERP 提供 REST API，需要 Bearer Token 认证
- 同步频率：每天凌晨2点自动同步，支持手动触发
- 数据范围：YTD6 收入/费用/库存，按BU和SKU粒度

请实现：
1. services/erp_sync.py：ERP API 客户端（带重试机制，最多3次）
2. tasks/sync_tasks.py：Celery 定时任务，使用 celery-beat 配置
3. 同步记录表（sync_logs）：记录每次同步时间、条数、状态、错误信息
4. POST /api/v1/data-import/sync/trigger：手动触发同步接口
5. GET /api/v1/data-import/sync/status：查询同步状态

异常处理：
- ERP API 超时（30秒）：记录日志，发送告警邮件
- 数据格式异常：跳过异常行，继续同步，汇总错误
- 重复数据：使用 upsert 策略（ON CONFLICT DO UPDATE）
```

---

## 阶段三：Vibe Coding 构建 M2 预测引擎

### 3.1 市场预测子模型

这是系统最核心的模块，用分治法拆解给 AI：

```
实现 FC6+6 市场预测子模型（子模型1）。

业务逻辑：
预测值 = 基础线（YTD6历史数据外推）+ 增长计划（业务输入）

每个BU的数据结构不同：
- 国内人医：基础线来自 ERP+CRM YTD6，增长来自 SFE 数据
- 电商：基础线来自 CRM，增长来自投流预算
- 宠物：基础线来自 ERP+已投放仪器数，增长来自新增仪器计划

请实现 services/forecast/market_forecast.py：

class MarketForecastService:
    def calculate_baseline(self, bu_code: str, version_id: str) -> dict:
        """基于YTD6数据计算下半年基础线（线性外推 + 季节性调整）"""
        pass
    
    def apply_growth_plan(self, bu_code: str, baseline: dict, growth_inputs: dict) -> dict:
        """将增长计划叠加到基础线上"""
        pass
    
    def calculate_bu_forecast(self, bu_code: str, version_id: str) -> ForecastResult:
        """完整预测流程：基础线 + 增长计划 → 输出含毛利率的预测"""
        pass

输出结构 ForecastResult：
- 月度收入预测（7-12月）
- 毛利率预测
- BU费用预测
- DSO预测（运营资金）
- EBIT预测

用 Pydantic 定义所有输入输出模型。
```

### 3.2 运营工厂成本预测（BOM驱动）

```
实现运营工厂成本预测子模型（子模型2），这是BOM驱动的制造成本核算。

业务背景：
工厂有三个：厦门/长汀、苏州、北京
成本构成：
  - 变动成本：BOM物料（外购材料）、直接人工（DL）、制造耗材
  - 半变动：能源、质检费用
  - 固定成本：间接制造费用、折旧
  
关键驱动参数：
  - 预测产量（SKU × 月份）
  - BOM系数（每单位产品的物料消耗）
  - FTEs × 工时标准 = 直接人工成本
  - OEE（设备综合效率）影响实际产出
  - 得率（良品率）影响实际物料消耗

请实现：
1. 成本分层计算逻辑（变动/半变动/固定分开建模）
2. BOM展开计算（支持多级BOM）
3. 标准成本 vs 实际预测成本的差异分析
4. 三个工厂的成本汇总到公司级

用 pandas 做矩阵运算，结果写入 forecast_factory_costs 表。
```

### 3.3 AI 智能分析层（Claude API集成）

```
在 M2 预测引擎上增加 AI 分析层，调用 Claude API 提供智能解读。

功能需求：
1. 预测异常检测：当某个指标预测值偏离历史均值 >20%，AI 自动生成解释
2. KPI预警建议：KPI超阈值时，AI 根据上下文生成改进建议（不超过200字）
3. 同行业对比分析：爬取同行季报数据，AI 生成对比报告

实现 services/ai_analysis.py：

import anthropic

class AIAnalysisService:
    def __init__(self):
        self.client = anthropic.Anthropic()
    
    def analyze_forecast_anomaly(self, metric_name: str, 
                                  current_value: float,
                                  historical_avg: float,
                                  context: dict) -> str:
        """检测预测异常并生成 AI 解读"""
        prompt = f"""
        财务预测异常分析：
        指标：{metric_name}
        预测值：{current_value}
        历史均值：{historical_avg}
        偏差：{(current_value - historical_avg) / historical_avg:.1%}
        
        背景信息：{context}
        
        请用100字以内分析可能的原因，并给出1个改进建议。
        """
        message = self.client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=300,
            messages=[{"role": "user", "content": prompt}]
        )
        return message.content[0].text
    
    async def generate_kpi_improvement_suggestion(self, kpi: dict) -> str:
        """KPI超阈值时生成改进建议"""
        pass
```

---

## 阶段四：Vibe Coding 构建 M4 审批流

### 4.1 H/AI/H 三级审批机制

这是系统最复杂的业务逻辑，用状态机实现：

```
实现 FC6+6 的 H/AI/H 三级审批工作流。

审批流规则：
1. H（录入层）：业务用户录入数据 → 提交审批 → 数据进入队列
2. AI（辅助层）：自动校验数据合理性、KPI偏差分析、标记异常 → 生成审核意见
3. H（审批层）：财务复核（可修改全部数据）→ CEO终审 → 数据锁定

状态机：
draft → submitted → ai_reviewing → ai_flagged/ai_passed 
    → finance_reviewing → finance_approved → ceo_reviewing → approved/rejected

数据锁定规则：
- CEO 审批后，对应版本的所有数据字段自动锁定（is_locked=True）
- 锁定后任何修改操作返回 403，并记录尝试修改的审计日志

请实现：
1. models/workflow.py：审批状态机（使用 transitions 库）
2. services/workflow_service.py：审批流核心逻辑
3. api/v1/m4_workflow/router.py：审批相关 API
   - POST /workflow/submit：提交审批
   - GET /workflow/{version_id}/status：查询审批状态
   - POST /workflow/{version_id}/approve：审批人审批/驳回
4. 每次状态变更自动写入 audit_logs 表

权限控制：
- 录入层用户：只能提交自己BU的数据
- 财务：可查看/修改全部，执行财务复核
- CEO：只能审批/驳回，不可修改数据
```

---

## 阶段五：Vibe Coding 构建 M5 报表生成

### 5.1 Excel 报表自动生成

```
实现 FC6+6 自动生成 Excel 报表功能。

报表类型：
1. 公司级FC6+6关键绩效报告（合并视图）
2. 各BU KPI报表（分BU视图）
3. 同行业对比分析

技术要求：
- 使用 openpyxl 生成，基于预置模板填充数据
- 模板存储在 /templates/ 目录，按报表类型区分
- 支持图表（折线图、柱状图）自动生成
- 科目拆分合并逻辑：管理报表科目 → 多BU汇总 → 公司合并

请实现 services/report_generator.py：

class ReportGenerator:
    def generate_company_fc_report(self, version_id: str) -> bytes:
        """生成公司级FC6+6报告，返回Excel二进制"""
        pass
    
    def generate_bu_kpi_report(self, bu_code: str, version_id: str) -> bytes:
        """生成单个BU的KPI报表"""
        pass
    
    def merge_subjects(self, data: dict, merge_rules: list) -> dict:
        """按规则合并管理报表科目"""
        pass

还需要：
- GET /api/v1/reports/download/{report_type}/{version_id}：下载报表接口
- 异步生成（Celery），大报表生成时间可能超过30秒
- 生成完成后发送通知（站内消息 + 可选邮件）
```

---

## 阶段六：前端 Vibe Coding

### 6.1 前端项目骨架

```
用 React + Ant Design Pro 创建 FC6+6 系统前端。

页面结构：
fc66-frontend/
├── src/
│   ├── pages/
│   │   ├── Dashboard/           # 总览看板
│   │   ├── DataImport/          # M1 数据导入
│   │   ├── ForecastEngine/      # M2 预测结果查看
│   │   ├── KPIManagement/       # M3 KPI管理
│   │   ├── Workflow/            # M4 审批流
│   │   └── Reports/             # M5 报表下载
│   ├── components/
│   │   ├── ForecastChart/       # 预测趋势图
│   │   ├── KPIAlertBadge/       # KPI预警徽章
│   │   └── VersionSelector/     # 版本切换器
│   └── services/                # API 调用层

请生成：
1. 数据导入页面（DataImport/index.tsx）：
   - 拖拽上传 Excel
   - 上传进度显示
   - 解析结果预览（表格）
   - 错误详情展示（精确到行列）
   - 确认导入按钮

2. 审批流页面（Workflow/index.tsx）：
   - 当前版本的审批状态时间线
   - 不同角色显示不同操作按钮
   - AI审核意见展示区域
   - 审批历史记录

使用 Ant Design 5.x 组件，TypeScript 严格模式。
```

### 6.2 KPI 预警看板

```
创建 KPI 实时预警看板组件。

功能：
- 展示所有 BU 的关键 KPI 状态（正常/警告/超阈值）
- 颜色编码：绿/黄/红
- 点击 KPI 展开 AI 生成的分析建议
- 支持按 BU、工厂、时间筛选
- 数据每30秒自动刷新（WebSocket 或轮询）

组件：KPIAlertDashboard
输入 Props：
- buFilter: string[]
- timeRange: [Dayjs, Dayjs]

用 Ant Design 的 Statistic、Progress、Alert 组件。
图表用 @ant-design/charts 的仪表盘图。
```

---

## Vibe Coding 核心技巧总结

### 高效提示词模式

| 场景 | Prompt 模式 |
|------|------------|
| 读懂复杂需求 | "分析这份文档，提取X个实体、Y个关键规则、Z个边界条件" |
| 生成数据库设计 | "基于以上需求，生成PostgreSQL DDL，包含约束和中文注释" |
| 实现业务逻辑 | "实现[服务名]，输入是X，输出是Y，规则是Z，用[技术栈]" |
| 处理异常情况 | "上面的实现缺少异常处理，请补充：超时、空数据、权限不足三种场景" |
| 生成测试 | "为上面的函数生成 pytest 单元测试，覆盖正常流程和3个边界情况" |

### 拆解复杂系统的方法

1. **模块化拆解**：一次只让 AI 实现一个模块，不要贪大
2. **接口先行**：先让 AI 定义接口和数据模型，再实现逻辑
3. **迭代验证**：每个功能完成后立即测试，不要堆积到最后
4. **错误驱动**：把报错信息直接贴给 AI，让它修复

### 常见 Vibe Coding 陷阱

- ❌ 一次 Prompt 要求实现整个系统
- ❌ 不指定技术栈版本（导致 AI 使用过时 API）
- ❌ 忽略权限和数据隔离需求
- ✅ 分模块、分接口、分函数地推进
- ✅ 每次 Prompt 都包含：输入、输出、约束条件
- ✅ 让 AI 先解释实现思路，再写代码

---

## 延伸阅读

- [LangGraph 高级 RAG 实战](../langgraph-advanced-rag/)
- [企业级知识库构建](../llamaindex-enterprise-knowledge-base/)
- [RAG 技术入门](../rag-introduction/)
