export default {
  common: {
    coreIdea: '核心思想：',
    recommendation: '选择建议：',
    receive: '📥 接收:',
    emit: '📤 触发:',
    listSeparator: '、',
    semicolonSeparator: '；'
  },
  hierarchy: {
    title: '组件层级结构',
    subtitle: '像家谱树一样的组件关系',
    introPrefix: '想象你在',
    introHighlight: '公司组织架构',
    introSuffix:
      '工作：CEO（根组件）在顶层，下面是各个部门（父组件），每个部门里还有员工（子组件）。这就是组件树！',
    hint: '👆 点击上方任意节点，查看职责说明',
    idea: '组件像组织架构，父组件管理整体，子组件负责具体功能。数据从上往下传，事件从下往上报。',
    nodes: {
      app: {
        icon: '👑',
        label: 'App (根组件)',
        desc: 'CEO - 管理全局',
        title: 'App 根组件',
        description:
          '就像公司的CEO，负责整个应用的初始化和全局管理。包含路由、全局状态、主题配置等大方向决策。',
        props: [],
        events: []
      },
      header: {
        icon: '📌',
        label: 'Header',
        desc: '导航栏部门',
        title: 'Header 导航栏',
        description:
          '公司的前台部门，负责展示Logo、导航菜单、用户信息和购物车等。大部分页面都会用到它。',
        props: ['user', 'cartCount'],
        events: ['logout', 'search']
      },
      main: {
        icon: '📄',
        label: 'Main Content',
        desc: '主内容部门',
        title: 'Main Content 主内容',
        description:
          '公司的核心业务部门，管理页面的主要内容区域。用flex或grid布局组织侧边栏和内容。',
        props: [],
        events: []
      },
      sidebar: {
        icon: '📑',
        label: 'Sidebar',
        desc: '侧边栏小组',
        title: 'Sidebar 侧边栏',
        description:
          '公司的导航小组，提供可折叠的菜单。常见于后台管理系统或分类浏览页面。',
        props: ['menuItems', 'collapsed'],
        events: ['select', 'toggle']
      },
      productlist: {
        icon: '🛍️',
        label: 'ProductList',
        desc: '商品列表组',
        title: 'ProductList 商品列表',
        description:
          '商品展示团队，负责数据获取、分页、排序和筛选。包含多个ProductCard成员。',
        props: ['products', 'loading', 'total'],
        events: ['loadMore', 'sort', 'filter']
      },
      productcard: {
        icon: '🏷️',
        label: 'ProductCard',
        desc: '商品卡片员工',
        title: 'ProductCard 商品卡片',
        description:
          '最基层的员工，负责展示单个商品的信息（图片、名称、价格、评分）。专注于UI展示。',
        props: ['product', 'showAddToCart'],
        events: ['addToCart', 'click']
      },
      footer: {
        icon: '🔻',
        label: 'Footer',
        desc: '页脚部门',
        title: 'Footer 页脚',
        description:
          '公司的后勤部门，展示版权信息、友情链接、联系方式、社交媒体链接等辅助信息。',
        props: [],
        events: []
      }
    }
  },
  propsFlow: {
    title: 'Props 数据传递',
    subtitle: '父亲给儿子送礼物的单向流动',
    introPrefix: '想象你在',
    introHighlight: '快递公司',
    introSuffix:
      '工作：包裹（数据）只能从寄件人（父组件）发往收件人（子组件），收件人不能直接修改包裹内容，只能通过电话（事件）让寄件人修改。',
    parentLabel: '👨 父组件 (寄件人)',
    childLabel: '👦 子组件 (收件人)',
    packageContent: '包裹内容:',
    packageColor: '包装颜色:',
    sendPackage: '📮 发送包裹:',
    receivePackage: '📬 接收包裹:',
    flowing: '快递派送中...',
    idleFlow: 'Props 单向传递',
    editLabel: '📝 修改包裹内容：',
    namePlaceholder: '收件人姓名',
    agePlaceholder: '年龄',
    light: '亮色',
    dark: '暗色',
    lightPackage: '亮色包装',
    darkPackage: '暗色包装',
    emitButton: '📞 打电话给爸爸改名字',
    ageUnit: '岁',
    defaultUser: { name: '小明', age: 25 },
    emittedName: '小红',
    idea: 'Props 是单向数据流，父组件像寄件人，子组件像收件人。子组件不能直接修改 props，只能通过 emit 事件通知父组件修改。'
  },
  eventBus: {
    title: 'Event Bus 事件总线',
    subtitle: '像广播站一样的消息传递',
    introPrefix: '想象你在',
    introHighlight: '广播电台',
    introSuffix:
      '工作：任何部门（组件）都可以通过广播站（Event Bus）发布消息，所有收音机（监听器）都能收到广播。不需要知道对方是谁！',
    busLabel: '广播站 (Event Bus)',
    listening: '📻 收音中',
    offline: '🔇 未开机',
    logTitle: '📨 消息记录',
    emitType: '🎤 广播',
    receiveType: '📻 收听',
    emitMessage: '{name} 发布广播: 有新消息！',
    receiveMessage: '{name} 收到广播',
    hint: '👆 点击上方任意部门，模拟发送广播消息，其他开机的部门会收到',
    idea: 'Event Bus 像广播站，任何组件都可以发送和接收消息，不需要知道对方存在。适合简单的跨组件通信，但要记得组件销毁时关闭收音机（取消监听）。',
    components: [
      { id: 1, name: 'Header', icon: '📌' },
      { id: 2, name: 'Sidebar', icon: '📑' },
      { id: 3, name: 'ProductList', icon: '🛍️' },
      { id: 4, name: 'Cart', icon: '🛒' }
    ]
  },
  comparison: {
    title: '状态管理方案对比',
    subtitle: '不同工具的适用场景',
    introPrefix: '想象你在',
    introHighlight: '超市',
    introSuffix:
      '采购：小买小卖用购物篮（Zustand），大采购用手推车（Pinia），企业级采购用专业物流（Redux）。根据需求选对工具！',
    headers: {
      tool: '工具',
      difficulty: '难度',
      size: '大小',
      framework: '框架'
    },
    scenariosTitle: '🎯 适用场景',
    prosTitle: '✅ 优点',
    consTitle: '❌ 缺点',
    easy: '简单',
    medium: '中等',
    hard: '复杂',
    idea: 'Vue 3 新项目推荐 Pinia，React 中小型项目推荐 Zustand，大型企业级应用推荐 Redux Toolkit。根据项目规模选择最合适的工具。',
    libraries: [
      {
        id: 'redux',
        name: 'Redux',
        icon: '🔄',
        tagline: 'JavaScript 应用的可预测状态容器',
        scenarios: ['大型企业级应用', '需要严格数据流控制', '复杂的状态逻辑'],
        pros: ['严格的数据流，易于调试', '强大的中间件生态'],
        cons: ['学习曲线陡峭', '样板代码较多'],
        learningCurve: 80,
        bundleSize: '7KB',
        framework: 'React/Vue/Angular'
      },
      {
        id: 'vuex',
        name: 'Vuex',
        icon: '🌿',
        tagline: 'Vue.js 的官方状态管理库',
        scenarios: [
          'Vue 2/3 中大型项目',
          '需要模块化管理状态',
          '团队成员熟悉 Vue 生态'
        ],
        pros: ['与 Vue 深度集成', '响应式系统'],
        cons: ['仅适用于 Vue', 'Vue 3 中被 Pinia 取代'],
        learningCurve: 60,
        bundleSize: '4KB',
        framework: 'Vue Only'
      },
      {
        id: 'pinia',
        name: 'Pinia',
        icon: '🍍',
        tagline: '直观、类型安全、灵活的 Vue Store',
        scenarios: [
          'Vue 3 新项目首选',
          '重视 TypeScript 支持',
          '希望简化状态管理'
        ],
        pros: ['轻量级设计', '原生 TypeScript 支持'],
        cons: ['Vue 3 专属', '生态系统相对年轻'],
        learningCurve: 30,
        bundleSize: '2KB',
        framework: 'Vue 3 Only'
      },
      {
        id: 'zustand',
        name: 'Zustand',
        icon: '🐻',
        tagline: '极简的 React 状态管理',
        scenarios: ['React 中小型项目', '追求简洁 API', '不需要复杂中间件'],
        pros: ['极简 API', '无需 Provider'],
        cons: ['生态相对较小', '调试工具不如 Redux'],
        learningCurve: 25,
        bundleSize: '1KB',
        framework: 'React Only'
      }
    ]
  },
  vuexPinia: {
    title: 'Vuex vs Pinia',
    subtitle: 'Vue 状态管理的新老方案',
    introPrefix: '想象你在',
    introHighlight: '餐厅',
    introSuffix:
      '点餐：Vuex 就像传统餐厅，需要分部门（state/mutations/actions）填写单据；Pinia 就像快餐店，直接在一个柜台（组合式 API）搞定所有流程。',
    classic: '经典',
    recommended: '推荐',
    vuexCodeTitle: 'Vuex 代码示例',
    piniaCodeTitle: 'Pinia 代码示例',
    idea: 'Vue 3 新项目直接用 Pinia，语法更简洁、TypeScript 支持更好。老项目用 Vuex 也没问题，但推荐逐步迁移到 Pinia。',
    cards: {
      vuex: [
        '✅ 选项式 API',
        '✅ State / Mutations / Actions 分离',
        '❌ 样板代码较多',
        '❌ TypeScript 支持较弱'
      ],
      pinia: [
        '✅ 组合式 API',
        '✅ 去除 Mutations，简化代码',
        '✅ 完美 TypeScript 支持',
        '✅ 自动代码分割'
      ]
    }
  },
  redux: {
    title: 'Redux 数据流',
    subtitle: '单向循环的数据管道',
    introPrefix: '想象你在',
    introHighlight: '图书馆',
    introSuffix:
      '工作：读者（View）填写借书单（Action），管理员（Reducer）审核后更新库存记录（Store），新通知（View更新）就会显示在公告栏。',
    counterLabel: '当前库存：',
    counterUnit: '本书',
    increment: '进货 (+1)',
    decrement: '出货 (-1)',
    reset: '重置库存',
    reducerProcessing: 'Reducer 处理中...',
    storeUpdated: 'Store 已更新',
    idea: 'Redux 是单向数据流循环：View 触发 Action → Reducer 纯函数处理 → 更新 Store → 通知 View 重新渲染。状态可预测，易于调试。'
  },
  mobx: {
    title: 'MobX 响应式原理',
    subtitle: '自动追踪依赖的魔法',
    introPrefix: '想象你在',
    introHighlight: '魔术表演',
    introSuffix:
      '现场：魔术师（Observable）改变物品，所有盯着看的观众（Reaction）都会自动注意到变化，不需要一个个去通知他们。',
    stateTitle: 'Observable 状态',
    reactionTitle: '自动响应',
    total: '总计：',
    completed: '已完成：',
    itemUnit: '项',
    inputPlaceholder: '输入待办事项...',
    add: '➕ 添加',
    idea: 'MobX 自动追踪状态和响应的关系，状态变化时自动触发相关更新。就像魔术，你只管改变数据，UI 会自动更新。',
    todos: [
      { id: 1, text: '学习 MobX', completed: false },
      { id: 2, text: '理解响应式原理', completed: true }
    ]
  },
  zustandJotai: {
    title: 'Zustand & Jotai',
    subtitle: 'React 轻量级状态管理',
    introPrefix: '想象你在',
    introHighlight: '便利店',
    introSuffix:
      '工作：Zustand 就像整个仓库统一管理，Jotai 就像把商品拆成一个个小格子（Atom），每个格子独立管理，按需取用。',
    idea: 'Zustand 适合中小项目，API 简洁直观；Jotai 适合需要细粒度控制的场景，状态更模块化。两个都支持 TypeScript，不需要 Provider。',
    tabs: [
      { id: 'zustand', name: 'Zustand', icon: '🐻' },
      { id: 'jotai', name: 'Jotai', icon: '⚛️' }
    ],
    features: {
      zustand: [
        { icon: '📦', title: '单一 Store', desc: '所有状态集中管理' },
        { icon: '⚡', title: '极简 API', desc: '无需 Provider 包裹' },
        { icon: '🎯', title: '细粒度订阅', desc: '只重渲染需要的组件' }
      ],
      jotai: [
        { icon: '⚛️', title: '原子化', desc: '状态拆分成独立 Atom' },
        { icon: '🔗', title: '自动依赖', desc: '派生状态自动追踪' },
        { icon: '📝', title: 'TypeScript', desc: '原生类型支持' }
      ]
    },
    codeComments: {
      useInComponent: '在组件中使用',
      baseAtom: '基础 Atom',
      derivedAtom: '派生 Atom'
    }
  }
}
