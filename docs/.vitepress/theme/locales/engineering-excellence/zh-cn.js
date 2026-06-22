export default {
  codeSmell: {
    title: '代码坏味道识别器 ── 点击切换不同示例',
    problemCode: '问题代码',
    suggestion: '改进建议：',
    smells: [
      {
        name: '过长函数',
        icon: '📏',
        cls: 'red',
        desc: '一个函数超过 50 行，做了太多事情，难以理解和测试。',
        bad: `function processOrder(order) {
  // 验证订单... (20行)
  // 计算价格... (15行)
  // 检查库存... (10行)
  // 发送通知... (15行)
  // 更新数据库... (10行)
  // 生成报表... (10行)
  // 总计 80+ 行！
}`,
        fix: '将大函数拆分为多个职责单一的小函数：validateOrder()、calculatePrice()、checkInventory() 等。'
      },
      {
        name: '魔法数字',
        icon: '🔢',
        cls: 'orange',
        desc: '代码中直接使用含义不明的数字字面量，阅读者无法理解其含义。',
        bad: `if (user.age >= 18) { ... }
if (password.length < 8) { ... }
if (retryCount > 3) { ... }
setTimeout(fn, 86400000)`,
        fix: '用命名常量替代：const ADULT_AGE = 18、const MIN_PASSWORD_LENGTH = 8、const ONE_DAY_MS = 86400000。'
      },
      {
        name: '重复代码',
        icon: '📋',
        cls: 'yellow',
        desc: '相同或相似的代码出现在多处，修改时容易遗漏。',
        bad: `// 文件 A
const tax = price * 0.13
const total = price + tax

// 文件 B（几乎一样）
const tax = amount * 0.13
const sum = amount + tax`,
        fix: '提取公共函数 calculateTax(amount)，在多处复用，修改只需改一处。'
      },
      {
        name: '过深嵌套',
        icon: '🪆',
        cls: 'purple',
        desc: '多层 if/for 嵌套导致代码难以阅读，逻辑像迷宫。',
        bad: `if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      if (order.isValid) {
        // 终于到了真正的逻辑...
      }
    }
  }
}`,
        fix: '使用卫语句（Guard Clause）提前返回：if (!user) return; if (!user.isActive) return; ...'
      }
    ]
  },
  docStructure: {
    title: '文档结构模板 ── 点击切换文档类型',
    docs: [
      {
        name: 'README',
        icon: '📖',
        sections: [
          {
            name: '项目名称 + 一句话描述',
            desc: '让读者在 3 秒内知道这个项目是什么。',
            example: '# MyApp\n> 一个轻量级的任务管理工具'
          },
          {
            name: '快速开始',
            desc: '最短路径让用户跑起来，通常是安装 + 运行命令。',
            example: 'npm install myapp\nnpx myapp init'
          },
          {
            name: '功能特性',
            desc: '用列表列出核心功能，让用户判断是否满足需求。',
            example: '- ✅ 任务看板\n- ✅ 团队协作\n- ✅ 数据导出'
          },
          {
            name: '使用示例',
            desc: '展示典型用法的代码片段，比文字描述更直观。',
            example: null
          },
          {
            name: '贡献指南 + 许可证',
            desc: '说明如何参与贡献，以及项目的开源许可证。',
            example: null
          }
        ]
      },
      {
        name: 'API 文档',
        icon: '🔌',
        sections: [
          {
            name: '接口概述',
            desc: '说明 API 的基础 URL、认证方式、通用参数。',
            example: 'Base URL: https://api.example.com/v1\nAuth: Bearer Token'
          },
          {
            name: '请求参数',
            desc: '用表格列出每个参数的名称、类型、是否必填、说明。',
            example:
              '| 参数   | 类型   | 必填 | 说明     |\n| name   | string | 是   | 用户名   |'
          },
          {
            name: '响应格式',
            desc: '展示成功和失败的 JSON 响应示例。',
            example: '{ "code": 200, "data": { ... } }'
          },
          {
            name: '错误码说明',
            desc: '列出所有可能的错误码及其含义。',
            example: '401 - 未授权\n404 - 资源不存在\n429 - 请求过于频繁'
          }
        ]
      },
      {
        name: '架构文档',
        icon: '🏛️',
        sections: [
          {
            name: '系统概述',
            desc: '用一段话说明系统的目标、边界和核心约束。',
            example: null
          },
          {
            name: '架构图',
            desc: '展示系统的整体架构，包括各模块和它们之间的关系。',
            example:
              '[客户端] → [API 网关] → [微服务集群]\n                    ↓\n              [数据库集群]'
          },
          {
            name: '技术选型',
            desc: '说明关键技术的选择理由和替代方案的对比。',
            example: null
          },
          {
            name: '部署架构',
            desc: '说明生产环境的部署方式、扩容策略。',
            example: null
          }
        ]
      }
    ]
  },
  openSourceWorkflow: {
    title: '开源贡献流程 ── 点击步骤查看详情',
    commandTitle: '对应命令',
    previous: '上一步',
    next: '下一步',
    steps: [
      {
        name: 'Fork',
        icon: '🍴',
        desc: '在 GitHub 上 Fork 目标仓库到自己的账号下，获得一份完整的副本。',
        cmd: '# 在 GitHub 页面点击 Fork 按钮'
      },
      {
        name: 'Clone',
        icon: '📥',
        desc: '将 Fork 后的仓库克隆到本地开发环境。',
        cmd: 'git clone https://github.com/你的用户名/项目.git\ncd 项目'
      },
      {
        name: 'Branch',
        icon: '🌿',
        desc: '创建功能分支，不要直接在 main 上开发。分支名应描述你要做的事。',
        cmd: 'git checkout -b fix/login-bug'
      },
      {
        name: 'Commit',
        icon: '💾',
        desc: '完成修改后提交，写清晰的 commit message。遵循项目的提交规范。',
        cmd: 'git add .\ngit commit -m "fix: 修复登录页白屏问题"'
      },
      {
        name: 'Push',
        icon: '🚀',
        desc: '将本地分支推送到你 Fork 的远程仓库。',
        cmd: 'git push origin fix/login-bug'
      },
      {
        name: 'PR',
        icon: '📬',
        desc: '在 GitHub 上创建 Pull Request，描述你的改动、关联的 Issue、测试方法。',
        cmd: '# 在 GitHub 页面点击 "New Pull Request"'
      },
      {
        name: 'Review',
        icon: '👀',
        desc: '维护者会审查你的代码，可能提出修改建议。根据反馈修改后再次 push 即可。',
        cmd: 'git add . && git commit -m "fix: 根据 review 反馈调整"\ngit push'
      },
      {
        name: 'Merge',
        icon: '🎉',
        desc: '审查通过后，维护者会合并你的 PR。恭喜，你成为了项目贡献者！',
        cmd: '# 维护者操作：Merge Pull Request'
      }
    ]
  },
  tddCycle: {
    title: 'TDD 红绿重构循环 ── 点击"下一步"推进',
    stepBadge: '第 {current} 步 / {total}',
    previous: '上一步',
    next: '下一步',
    reset: '重置',
    phases: [
      { name: 'Red', icon: '🔴', cls: 'red' },
      { name: 'Green', icon: '🟢', cls: 'green' },
      { name: 'Refactor', icon: '🔵', cls: 'blue' }
    ],
    steps: [
      {
        phase: '🔴 Red — 先写一个失败的测试',
        cls: 'red',
        desc: '需求：实现 add(a, b) 函数。TDD 第一步不是写实现，而是先写测试。',
        fileLabel: 'add.test.js',
        code: `test('add(1, 2) 应该返回 3', () => {
  expect(add(1, 2)).toBe(3)
})`,
        result: '❌ 测试失败 — add is not defined'
      },
      {
        phase: '🟢 Green — 写最小实现让测试通过',
        cls: 'green',
        desc: '不追求完美，只写刚好让测试通过的代码。',
        fileLabel: 'add.js',
        code: `function add(a, b) {
  return a + b
}`,
        result: '✅ 测试通过！'
      },
      {
        phase: '🔵 Refactor — 重构优化',
        cls: 'blue',
        desc: '测试通过后安全地改进代码，测试是你的安全网。',
        fileLabel: 'add.js',
        code: `const add = (a, b) => a + b`,
        result: '✅ 重构完成，测试仍然通过！'
      },
      {
        phase: '🔴 Red — 添加新需求的测试',
        cls: 'red',
        desc: '新需求：add 应该能处理字符串数字。继续循环！',
        fileLabel: 'add.test.js',
        code: `test('add("1", "2") 应该返回 3', () => {
  expect(add('1', '2')).toBe(3)
})`,
        result: '❌ 测试失败 — 返回了 "12" 而不是 3'
      },
      {
        phase: '🟢 Green — 修复实现',
        cls: 'green',
        desc: '修改实现以处理字符串输入。',
        fileLabel: 'add.js',
        code: `const add = (a, b) => Number(a) + Number(b)`,
        result: '✅ 所有测试通过！'
      }
    ]
  },
  testPyramid: {
    title: '交互式测试金字塔 ── 点击每一层查看详情',
    example: '示例：',
    upperLegend: '越往上：越慢、越贵、越接近用户',
    lowerLegend: '越往下：越快、越多、越接近代码',
    detailRows: [
      { key: 'count', label: '数量占比' },
      { key: 'speed', label: '执行速度' },
      { key: 'cost', label: '维护成本' },
      { key: 'scope', label: '覆盖范围' },
      { key: 'confidence', label: '信心指数' }
    ],
    layers: [
      {
        name: 'E2E 测试',
        cls: 'e2e',
        icon: '🖥️',
        width: '40%',
        count: '约 10%',
        speed: '慢（秒~分钟级）',
        cost: '高 — 环境依赖多，易碎',
        scope: '完整用户流程',
        confidence: '最高 — 模拟真实用户操作',
        example: '用 Playwright 模拟用户登录 → 下单 → 支付的完整流程'
      },
      {
        name: '集成测试',
        cls: 'integration',
        icon: '🔗',
        width: '60%',
        count: '约 20%',
        speed: '中等（百毫秒级）',
        cost: '中 — 需要部分外部依赖',
        scope: '模块间协作',
        confidence: '较高 — 验证组件间的配合',
        example: '测试 API 接口能否正确读写数据库并返回预期 JSON'
      },
      {
        name: '单元测试',
        cls: 'unit',
        icon: '🧪',
        width: '85%',
        count: '约 70%',
        speed: '极快（毫秒级）',
        cost: '低 — 无外部依赖',
        scope: '单个函数/类',
        confidence: '基础 — 确保每个零件正常',
        example: '测试 formatPrice(100) 是否返回 "¥1.00"'
      }
    ]
  },
  refactoring: {
    title: '重构手法对比演示 ── 选择一种手法查看前后对比',
    before: '重构前',
    after: '重构后',
    tip: '要点：',
    techniques: [
      {
        name: '提炼函数',
        description:
          'Extract Function：将一段代码从大函数中提取出来，放入一个命名清晰的新函数中。',
        before: [
          {
            text: 'function printReport(invoice) {\n  console.log("=== 账单 ===")\n'
          },
          {
            text: '  // 计算总额\n  let total = 0\n  for (let item of invoice.items) {\n    total += item.price * item.qty\n  }\n',
            changed: true
          },
          { text: '  console.log(`总计: ${total}`)\n}' }
        ],
        after: [
          {
            text: 'function printReport(invoice) {\n  console.log("=== 账单 ===")\n'
          },
          { text: '  const total = calcTotal(invoice.items)\n', changed: true },
          { text: '  console.log(`总计: ${total}`)\n}\n\n' },
          {
            text: 'function calcTotal(items) {\n  return items.reduce(\n    (s, i) => s + i.price * i.qty, 0\n  )\n}',
            changed: true
          }
        ],
        tip: '提炼函数是最常用的重构手法。好的函数名就是最好的注释——如果你需要写注释解释一段代码在做什么，那它就该被提炼成函数。'
      },
      {
        name: '重命名变量',
        description:
          'Rename Variable：用清晰、有意义的名称替换含糊的变量名，让代码自解释。',
        before: [
          { text: 'function calc(', changed: true },
          { text: 'a, b, c', changed: true },
          { text: ') {\n' },
          {
            text: '  const d = a * b\n  const e = d * (1 - c)\n  return e\n}',
            changed: true
          }
        ],
        after: [
          { text: 'function calcOrderTotal(', changed: true },
          { text: 'price, quantity, discountRate', changed: true },
          { text: ') {\n' },
          {
            text: '  const subtotal = price * quantity\n  const total = subtotal * (1 - discountRate)\n  return total\n}',
            changed: true
          }
        ],
        tip: '变量命名是程序员最重要的基本功之一。好的命名让代码像散文一样可读，差的命名让代码像密码一样难解。'
      },
      {
        name: '消除重复',
        description:
          'Remove Duplication：将重复的逻辑抽取为共享函数或模板，遵循 DRY 原则。',
        before: [
          { text: '// 员工报表\nfunction empReport(emp) {\n' },
          {
            text: '  return `${emp.name} | ${emp.dept} | ${emp.salary}`',
            changed: true
          },
          { text: '\n}\n\n// 经理报表\nfunction mgrReport(mgr) {\n' },
          {
            text: '  return `${mgr.name} | ${mgr.dept} | ${mgr.salary}`',
            changed: true
          },
          { text: '\n}' }
        ],
        after: [
          { text: '' },
          {
            text: 'function formatReport(person) {\n  return `${person.name} | ${person.dept} | ${person.salary}`\n}',
            changed: true
          },
          { text: '\n\n// 统一调用\n' },
          {
            text: 'formatReport(employee)\nformatReport(manager)',
            changed: true
          }
        ],
        tip: "DRY（Don\\'t Repeat Yourself）是软件工程的基本原则。每一处重复都是未来 bug 的温床——改了一处忘了另一处，就是典型的重复代码事故。"
      },
      {
        name: '简化条件',
        description:
          'Simplify Conditional：用卫语句、策略模式等手法替代深层嵌套的 if-else，降低圈复杂度。',
        before: [
          { text: 'function getDiscount(user) {\n' },
          {
            text: '  if (user.type === "vip") {\n    if (user.years > 5) {\n      return 0.3\n    } else {\n      return 0.2\n    }\n  } else {\n    if (user.years > 3) {\n      return 0.1\n    } else {\n      return 0\n    }\n  }',
            changed: true
          },
          { text: '\n}' }
        ],
        after: [
          { text: 'function getDiscount(user) {\n' },
          {
            text: '  if (user.type === "vip" && user.years > 5) return 0.3\n  if (user.type === "vip") return 0.2\n  if (user.years > 3) return 0.1\n  return 0',
            changed: true
          },
          { text: '\n}' }
        ],
        tip: '卫语句（Guard Clause）通过提前返回来消除嵌套。扁平的代码结构比深层嵌套更容易理解和维护。'
      }
    ]
  },
  techWriting: {
    title: '技术写作对比 ── 点击切换案例',
    badTitle: '❌ 差的写法',
    goodTitle: '✅ 好的写法',
    tipsTitle: '改进要点：',
    cases: [
      {
        name: '函数注释',
        icon: '💬',
        bad: `// 处理数据
function process(d) {
  // ...
}`,
        good: `/**
 * 将原始订单数据转换为发票格式
 * @param {Order} order - 原始订单对象
 * @returns {Invoice} 格式化后的发票
 * @throws {ValidationError} 订单数据不完整时
 */
function toInvoice(order) {
  // ...
}`,
        tips: [
          '说明"为什么"而非"是什么"',
          '标注参数类型和返回值',
          '说明异常情况'
        ]
      },
      {
        name: 'API 说明',
        icon: '🔌',
        bad: `POST /api/users
发送用户数据创建用户。`,
        good: `POST /api/users
创建新用户账号。

请求体：
{
  "name": "张三",      // 必填，2-50字符
  "email": "a@b.com"  // 必填，有效邮箱
}

成功响应 201：
{ "id": "u_123", "name": "张三" }

错误响应 400：
{ "error": "邮箱格式无效" }`,
        tips: ['提供完整的请求/响应示例', '标注必填/选填', '列出错误场景']
      },
      {
        name: '变更日志',
        icon: '📝',
        bad: `v2.1 - 修了一些bug，加了新功能`,
        good: `## v2.1.0 (2025-01-15)

### 新增
- 支持批量导出 PDF 格式报表

### 修复
- 修复登录页在 Safari 下白屏的问题 (#234)

### 变更
- 最低 Node.js 版本要求从 16 升至 18`,
        tips: [
          '按类型分类（新增/修复/变更）',
          '关联 Issue 编号',
          '标注版本号和日期'
        ]
      }
    ]
  },
  decisionMatrix: {
    title: '决策矩阵',
    subtitle: '量化对比，科学选型',
    technologies: '待比较技术',
    addPlaceholder: '添加技术...',
    dimensionsTitle: '评估维度与权重',
    scoringTitle: '打分（1-5）',
    dimensionColumn: '维度',
    rankingTitle: '加权总分排名',
    reset: '重置全部',
    preset: '加载预设',
    usageTitle: '使用方法：',
    usage:
      '调整权重反映你的项目优先级，为每个技术在各维度打分，系统自动计算加权总分。权重越高的维度对最终结果影响越大。',
    dimensions: [
      { key: 'learning', label: '学习曲线' },
      { key: 'ecosystem', label: '生态系统' },
      { key: 'performance', label: '性能' },
      { key: 'community', label: '社区活跃度' },
      { key: 'hiring', label: '招聘难度' }
    ]
  },
  licenseComparison: {
    title: '开源许可证对比工具',
    needs: '我的需求：',
    clear: '清除筛选',
    recommendation: '推荐许可证：',
    licenseColumn: '许可证',
    yes: '允许',
    no: '不允许/限制',
    conditional: '有条件',
    permissions: [
      { id: 'commercial', label: '商用' },
      { id: 'modify', label: '修改' },
      { id: 'distribute', label: '分发' },
      { id: 'patent', label: '专利授权' },
      { id: 'private', label: '私用' },
      { id: 'copyleft', label: '需开源衍生' },
      { id: 'liability', label: '免责' }
    ],
    licenses: [
      {
        id: 'mit',
        name: 'MIT',
        summary: '最宽松，几乎无限制',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: false,
          private: true,
          copyleft: false,
          liability: true
        },
        tags: ['commercial', 'simple', 'private']
      },
      {
        id: 'apache2',
        name: 'Apache 2.0',
        summary: '宽松 + 专利保护',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: true,
          private: true,
          copyleft: false,
          liability: true
        },
        tags: ['commercial', 'patent', 'private']
      },
      {
        id: 'gpl3',
        name: 'GPL 3.0',
        summary: '强 Copyleft，衍生必须开源',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: true,
          private: true,
          copyleft: true,
          liability: true
        },
        tags: ['copyleft', 'patent']
      },
      {
        id: 'bsd2',
        name: 'BSD 2-Clause',
        summary: '类似 MIT，极简宽松',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: false,
          private: true,
          copyleft: false,
          liability: true
        },
        tags: ['commercial', 'simple', 'private']
      },
      {
        id: 'mpl2',
        name: 'MPL 2.0',
        summary: '文件级 Copyleft，折中方案',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: true,
          private: true,
          copyleft: 'cond',
          liability: true
        },
        tags: ['commercial', 'patent', 'copyleft']
      }
    ],
    filters: [
      { id: 'commercial', label: '允许商用' },
      { id: 'patent', label: '需要专利保护' },
      { id: 'simple', label: '尽量简单' },
      { id: 'copyleft', label: '要求衍生开源' },
      { id: 'private', label: '允许闭源使用' }
    ]
  },
  designPatternCatalog: {
    title: '设计模式图鉴 ── 点击分类查看常用模式',
    count: '{count} 个模式',
    when: '适用场景',
    code: '代码示例',
    categories: [
      {
        name: '创建型',
        icon: '🏗️',
        cls: 'create',
        patterns: [
          {
            name: '单例模式 Singleton',
            intent: '确保一个类只有一个实例，并提供全局访问点。',
            when: '数据库连接池、全局配置管理、日志记录器。',
            code: `class Database {
  static instance = null
  static getInstance() {
    if (!this.instance) {
      this.instance = new Database()
    }
    return this.instance
  }
}`
          },
          {
            name: '工厂模式 Factory',
            intent: '定义创建对象的接口，让子类决定实例化哪个类。',
            when: '需要根据条件创建不同类型对象时。',
            code: `function createNotification(type) {
  switch (type) {
    case 'email': return new EmailNotify()
    case 'sms':   return new SmsNotify()
    case 'push':  return new PushNotify()
  }
}`
          }
        ]
      },
      {
        name: '结构型',
        icon: '🧱',
        cls: 'structure',
        patterns: [
          {
            name: '装饰器模式 Decorator',
            intent: '动态地给对象添加额外职责，比继承更灵活。',
            when: '需要在不修改原有代码的情况下扩展功能。',
            code: `function withLogging(fn) {
  return function(...args) {
    console.log('调用:', fn.name)
    return fn.apply(this, args)
  }
}
const save = withLogging(saveUser)`
          },
          {
            name: '适配器模式 Adapter',
            intent: '将一个接口转换成客户端期望的另一个接口。',
            when: '对接第三方 API、兼容旧系统接口。',
            code: `class OldApi { getData() { ... } }

class ApiAdapter {
  constructor(old) { this.old = old }
  fetch() { return this.old.getData() }
}`
          }
        ]
      },
      {
        name: '行为型',
        icon: '🎭',
        cls: 'behavior',
        patterns: [
          {
            name: '观察者模式 Observer',
            intent: '定义一对多依赖，当状态变化时自动通知所有依赖者。',
            when: '事件系统、状态管理、消息推送。',
            code: `class EventBus {
  listeners = {}
  on(event, fn) {
    (this.listeners[event] ||= []).push(fn)
  }
  emit(event, data) {
    this.listeners[event]?.forEach(fn => fn(data))
  }
}`
          },
          {
            name: '策略模式 Strategy',
            intent: '定义一系列算法，使它们可以互相替换。',
            when: '排序策略、支付方式、验证规则的切换。',
            code: `const strategies = {
  bubble: arr => { /* 冒泡排序 */ },
  quick:  arr => { /* 快速排序 */ },
  merge:  arr => { /* 归并排序 */ }
}
function sort(arr, type) {
  return strategies[type](arr)
}`
          }
        ]
      }
    ]
  },
  patternPlayground: {
    title: '设计模式演练场',
    subtitle: '选择模式，动手体验',
    observerDesc: '模拟事件发布/订阅：添加订阅者，发布事件，观察通知如何传播。',
    publisher: '📡 发布者 (Publisher)',
    eventPlaceholder: '输入事件消息...',
    publish: '发布事件',
    subscribers: '👥 订阅者',
    add: '+ 添加',
    emptySubscribers: '暂无订阅者，点击"添加"按钮',
    received: '收到: {message}',
    remove: '移除',
    eventLog: '📋 事件日志',
    strategyDesc: '选择不同的排序策略，观察同一组数据如何被不同算法处理。',
    dataTitle: '📊 待排序数据',
    shuffle: '🔀 打乱数据',
    strategyTitle: '⚙️ 选择策略',
    sorting: '排序中...',
    execute: '▶ 执行排序',
    stepsInfo: '步骤数: {count} | 策略: {strategy}',
    defaultEvent: '默认事件',
    subscribeLog: '[订阅] {name} 加入了订阅列表',
    unsubscribeLog: '[取消订阅] {name} 离开了',
    publishLog: '[发布] 事件: "{message}" → 通知 {count} 个订阅者',
    subNames: ['小明', '小红', '小刚', '小美', '小李', '小王', '小张', '小赵'],
    modes: [
      { key: 'observer', name: '观察者模式', icon: '📡' },
      { key: 'strategy', name: '策略模式', icon: '⚙️' }
    ],
    sortStrategies: [
      { key: 'bubble', name: '冒泡排序', complexity: 'O(n²)' },
      { key: 'selection', name: '选择排序', complexity: 'O(n²)' },
      { key: 'insertion', name: '插入排序', complexity: 'O(n²)' }
    ]
  },
  securityChecklist: {
    title: '项目安全检查清单',
    subtitle: '勾选已完成的安全措施，查看项目安全评分',
    scoreLabel: '安全评分',
    scoreValue: '{score}分',
    collapse: '收起',
    detail: '查看最佳实践',
    levels: { excellent: '优秀', pass: '及格', danger: '危险' },
    categories: [
      {
        icon: '🔍',
        name: '输入验证',
        open: true,
        items: [
          {
            label: '所有用户输入在服务端进行校验',
            checked: false,
            showDetail: false,
            detail:
              '永远不要仅依赖前端校验。攻击者可以绕过浏览器直接发送请求，服务端必须对长度、类型、格式、范围做二次验证。'
          },
          {
            label: '使用白名单而非黑名单过滤',
            checked: false,
            showDetail: false,
            detail:
              '黑名单容易遗漏。应明确定义"允许什么"而非"禁止什么"，例如只允许字母数字而非试图过滤所有特殊字符。'
          },
          {
            label: '对文件上传进行类型和大小限制',
            checked: false,
            showDetail: false,
            detail:
              '校验文件 MIME 类型和扩展名，限制文件大小，将上传文件存储在 Web 根目录之外，使用随机文件名。'
          }
        ]
      },
      {
        icon: '🔐',
        name: '认证授权',
        open: false,
        items: [
          {
            label: '密码使用 bcrypt/argon2 哈希存储',
            checked: false,
            showDetail: false,
            detail:
              '绝不明文存储密码。使用自带盐值的慢哈希算法（bcrypt cost>=10 或 argon2id），抵御彩虹表和暴力破解。'
          },
          {
            label: '实施多因素认证 (MFA)',
            checked: false,
            showDetail: false,
            detail:
              '在密码之外增加第二因素（TOTP、短信、硬件密钥），即使密码泄露也能阻止未授权登录。'
          },
          {
            label: '接口实施最小权限访问控制',
            checked: false,
            showDetail: false,
            detail:
              '每个 API 端点都应检查用户角色和权限，确保用户只能访问自己有权操作的资源（RBAC / ABAC）。'
          },
          {
            label: '会话管理安全（超时、轮换）',
            checked: false,
            showDetail: false,
            detail:
              '登录后重新生成 Session ID，设置合理的过期时间，登出时销毁服务端会话。'
          }
        ]
      },
      {
        icon: '🛡️',
        name: '数据保护',
        open: false,
        items: [
          {
            label: '敏感数据加密存储',
            checked: false,
            showDetail: false,
            detail:
              '对数据库中的敏感字段（手机号、身份证等）使用 AES-256 等算法加密，密钥与数据分离存储。'
          },
          {
            label: '日志中不记录敏感信息',
            checked: false,
            showDetail: false,
            detail:
              '日志中不应出现密码、Token、信用卡号等。使用脱敏处理，如只记录手机号后四位。'
          },
          {
            label: '实施 SQL 注入防护（参数化查询）',
            checked: false,
            showDetail: false,
            detail: '所有数据库操作使用参数化查询或 ORM，绝不拼接 SQL 字符串。'
          }
        ]
      },
      {
        icon: '🌐',
        name: '通信安全',
        open: false,
        items: [
          {
            label: '全站启用 HTTPS',
            checked: false,
            showDetail: false,
            detail:
              '使用 TLS 1.2+ 加密所有通信，配置 HSTS 头强制 HTTPS，防止中间人攻击和数据窃听。'
          },
          {
            label: '设置安全响应头（CSP、X-Frame-Options）',
            checked: false,
            showDetail: false,
            detail:
              '配置 Content-Security-Policy 限制资源加载来源，X-Frame-Options 防止点击劫持，X-Content-Type-Options 防止 MIME 嗅探。'
          },
          {
            label: 'Cookie 设置 HttpOnly / Secure / SameSite',
            checked: false,
            showDetail: false,
            detail:
              'HttpOnly 防止 JS 读取，Secure 确保仅 HTTPS 传输，SameSite=Lax 防止 CSRF 攻击。'
          }
        ]
      }
    ]
  },
  webSecurity: {
    title: 'Web 安全漏洞演示（教育用途）── 点击切换漏洞类型',
    flowTitle: '攻击流程',
    badTitle: '❌ 有漏洞的代码',
    goodTitle: '✅ 修复后的代码',
    defense: '防御要点：',
    vulns: [
      {
        name: 'XSS',
        icon: '💉',
        flow: [
          '攻击者在输入框提交恶意脚本',
          '服务器未过滤直接存入数据库',
          '其他用户访问页面时脚本被执行',
          '用户 Cookie/数据被窃取'
        ],
        bad: "// 直接插入用户输入（危险！）\nel.innerHTML = userInput\n// 如果 userInput = '<scr' + 'ipt>steal(cookie)</scr' + 'ipt>'\n// 脚本会被执行！",
        good: `// 使用 textContent 安全插入
el.textContent = userInput
// 或使用框架自动转义
// Vue: {{ userInput }}  自动转义
// React: {userInput}    自动转义`,
        defense:
          '永远不要信任用户输入。使用框架自带的转义机制，避免 innerHTML，对输出进行编码。'
      },
      {
        name: 'SQL 注入',
        icon: '🗄️',
        flow: [
          '攻击者在登录框输入特殊字符串',
          '字符串被拼接进 SQL 语句',
          '数据库执行了被篡改的查询',
          '攻击者绕过认证或获取数据'
        ],
        bad: `// 字符串拼接 SQL（危险！）
const sql = "SELECT * FROM users " +
  "WHERE name='" + username + "'" +
  " AND pass='" + password + "'"
// 输入: admin' OR '1'='1
// 变成: WHERE name='admin' OR '1'='1'`,
        good: `// 使用参数化查询（安全）
const sql = "SELECT * FROM users " +
  "WHERE name = ? AND pass = ?"
db.query(sql, [username, password])
// 参数被安全转义，无法注入`,
        defense: '始终使用参数化查询或 ORM，永远不要拼接 SQL 字符串。'
      },
      {
        name: 'CSRF',
        icon: '🎭',
        flow: [
          '用户登录了银行网站（有 Cookie）',
          '用户访问了恶意网站',
          '恶意网站自动发起转账请求',
          '浏览器自动携带 Cookie，请求成功'
        ],
        bad: `<!-- 恶意网站的隐藏表单 -->
<form action="https://bank.com/transfer"
      method="POST" id="evil">
  <input name="to" value="attacker" />
  <input name="amount" value="10000" />
</form>
<script>document.getElementById('evil')
  .submit()</script>`,
        good: `// 服务端：生成并验证 CSRF Token
app.post('/transfer', (req, res) => {
  if (req.body.token !== req.session.csrf) {
    return res.status(403).send('拒绝')
  }
  // 执行转账...
})
// 同时设置 SameSite Cookie 属性`,
        defense:
          '使用 CSRF Token、设置 SameSite Cookie 属性、验证 Referer/Origin 头。'
      }
    ]
  },
  techRadar: {
    title: '技术雷达 ── 点击技术点查看详情',
    ringLabel: '环位：{ring}',
    rings: [
      { name: '采纳', cls: 'adopt' },
      { name: '试验', cls: 'trial' },
      { name: '评估', cls: 'assess' },
      { name: '暂缓', cls: 'hold' }
    ],
    categories: [
      { name: '语言', cls: 'lang' },
      { name: '框架', cls: 'framework' },
      { name: '工具', cls: 'tool' },
      { name: '平台', cls: 'platform' }
    ],
    techs: [
      {
        name: 'TypeScript',
        category: 'lang',
        ring: '采纳',
        pos: { top: '42%', left: '30%' },
        desc: '类型安全的 JavaScript 超集，已成为前端项目标配。'
      },
      {
        name: 'React',
        category: 'framework',
        ring: '采纳',
        pos: { top: '35%', left: '55%' },
        desc: '生态最丰富的前端框架，适合大型团队和复杂应用。'
      },
      {
        name: 'Vue',
        category: 'framework',
        ring: '采纳',
        pos: { top: '50%', left: '45%' },
        desc: '渐进式框架，学习曲线平缓，中文社区活跃。'
      },
      {
        name: 'Go',
        category: 'lang',
        ring: '采纳',
        pos: { top: '55%', left: '32%' },
        desc: '高并发后端首选，编译快、部署简单。'
      },
      {
        name: 'Rust',
        category: 'lang',
        ring: '试验',
        pos: { top: '30%', left: '22%' },
        desc: '内存安全无 GC，适合系统编程和高性能场景，学习曲线陡峭。'
      },
      {
        name: 'Svelte',
        category: 'framework',
        ring: '试验',
        pos: { top: '25%', left: '60%' },
        desc: '编译时框架，无虚拟 DOM，包体积极小。'
      },
      {
        name: 'Bun',
        category: 'tool',
        ring: '评估',
        pos: { top: '18%', left: '42%' },
        desc: '新一代 JS 运行时，速度极快但生态尚在完善。'
      },
      {
        name: 'Deno',
        category: 'platform',
        ring: '评估',
        pos: { top: '15%', left: '55%' },
        desc: '安全优先的 JS/TS 运行时，内置工具链。'
      },
      {
        name: 'jQuery',
        category: 'framework',
        ring: '暂缓',
        pos: { top: '8%', left: '38%' },
        desc: '历史功臣，但现代框架已全面替代，新项目不建议使用。'
      }
    ]
  }
}
