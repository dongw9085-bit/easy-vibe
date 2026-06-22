# FC6+6 TCSS — 全公司预测支持系统

企业半年度滚动预测系统（Forecast 6+6 Total Company Support System）

## 技术栈

| 层 | 技术 |
|---|---|
| 前端 | React 18 + TypeScript + Vite + Tailwind CSS + ECharts |
| 后端 | Node.js + Express + TypeScript |
| 数据库 | PostgreSQL 16 + Prisma ORM |
| 缓存 | Redis 7 |
| 报表 | SheetJS (xlsx) |
| 认证 | JWT + RBAC |

## 快速启动

### 1. 启动数据库

```bash
cd fc6-tcss
docker-compose up -d
```

### 2. 配置后端

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
```

### 3. 启动后端

```bash
npm run dev   # 运行在 http://localhost:3001
```

### 4. 启动前端

```bash
cd ../frontend
npm install
npm run dev   # 运行在 http://localhost:5173
```

## 演示账号

| 角色 | 邮箱 | 权限 |
|---|---|---|
| 系统管理员 | admin@tcss.com | 全权 |
| 财务 | finance@tcss.com | 录入、复核 |
| 业务 | business@tcss.com | 录入 |
| CEO | ceo@tcss.com | 审批 |

密码均为 `demo`（演示模式，生产环境需接入密码验证）

## 核心功能

1. **预测版本管理** — 创建、管理 FC6+6 半年度预测版本
2. **收入预测** — 按 BU/产品线/SKU 录入，支持 Excel 批量导入
3. **费用预测** — 维持性费用、电商、HC C&B 等分类录入
4. **HC 人员计划** — FTE + 薪酬福利（C&B）预测
5. **Capex 计划** — 仪器投放、自动化项目资本支出
6. **生产成本** — BOM 成本还原，多基地管理
7. **KPI 基准库** — 历史/预算/10年规划对比，超阈值预警
8. **多级审批** — 业务录入 → 财务复核 → CEO 审批 → 数据锁定
9. **报表导出** — 自动生成 Excel 管理报表，ECharts 可视化看板

## 系统架构

```
fc6-tcss/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma    # 数据库 Schema（9张核心表）
│   │   └── seed.ts          # 演示数据
│   └── src/
│       ├── index.ts         # Express 服务入口
│       ├── middleware/auth.ts
│       └── routes/          # 各模块 API 路由
├── frontend/
│   └── src/
│       ├── pages/           # 各功能页面
│       ├── components/      # 共用组件（Layout）
│       ├── store/           # Zustand 状态管理
│       ├── types/           # TypeScript 类型定义
│       └── utils/           # API 封装、格式化工具
└── docker-compose.yml       # PostgreSQL + Redis
```
