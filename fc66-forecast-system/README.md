# FC6+6 基准收入预测系统 · Vibe Coding 开发包

本目录由《FC6+6 of TCSS 系统 PRD（Rev 2026-07-08）》Word 文档转化而来，是一套可直接用于 **Vibe Coding**（AI 辅助编程）的完整开发包。

## 目录内容

| 文件 | 说明 |
| --- | --- |
| [PRD.md](./PRD.md) | 原 Word PRD 的结构化 Markdown 版本（全部章节和表格），可直接作为 AI 编程工具的需求输入 |
| [VIBE-CODING-PROMPTS.md](./VIBE-CODING-PROMPTS.md) | 按 6 个阶段拆解的开发提示词，逐段粘贴给 Claude Code / Cursor 即可完成正式系统开发 |
| [prototype/index.html](./prototype/index.html) | **可运行原型**：零依赖单文件，浏览器直接打开即可演示全部 5 个功能模块 |

## 原型快速体验

```bash
# 方式一：直接用浏览器打开
open fc66-forecast-system/prototype/index.html

# 方式二：本地静态服务
npx serve fc66-forecast-system/prototype
```

原型实现了 PRD 定义的 5 个功能层（使用内置演示数据，非真实业务数据）：

1. **MCL 预测模型引擎** — `Rev_F3 = Rev_install + Rev_stock + Rev_rebate` 三分项计算，检测窗口 X、囤货阈值、Adj 折减系数、rebate_sign 均可在线调整（对应 KPI 参数库）
2. **DCL 数据源** — dim_device / fact_device_output / fact_dealer_price / fact_dealer_inventory / 返利测算五张表，囤货月数 X 可编辑并实时重算；含缺价兜底（price_fallback）与退机剔除演示
3. **KPI 预警** — 红黄绿阈值库、渠道压货风险清单（合理/轻度/重度三档折减）、单台产出预警、数据质量提示
4. **H/AI/H 审批流** — 草稿 → AI 校验 → 财务复核 → CEO 终审锁定的完整状态机，审批流水（ctl_approval）与仅追加的审计日志（ctl_audit_log），锁定后全部数据只读
5. **报表与可视化** — FC7–12 月度三分项堆叠图、经销商维度汇总、风险评估建议、CSV 导出

## 建议的正式开发路径

1. 阅读 `PRD.md` 确认业务口径（尤其 3.3 压货风控与附录 7 参数字典）
2. 打开原型确认交互形态是否符合预期
3. 按 `VIBE-CODING-PROMPTS.md` 的阶段 0 → 6 逐步让 AI 搭建正式系统（前后端分离 + 数据库）
4. 每阶段用文中的验收标准把关，不通过先修复再继续
