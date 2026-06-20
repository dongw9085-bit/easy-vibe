export default {
  componentTree: {
    title: '组件化拆分',
    subtitle: '一个页面如何拆成多个独立组件',
    treeTitle: '组件树结构',
    previewTitle: '页面预览',
    siteName: '电商网站',
    searchBox: '搜索框',
    cart: '购物车(3)',
    productName: '商品 {index}',
    copyright: '© 2025 电商网站',
    dataIndependent: '数据独立',
    styleIsolated: '样式隔离',
    reused: '复用 {count} 次',
    infoStrong: '核心思想：',
    info: '组件化就是把一个大页面拆成多个独立的小块。每个组件管理自己的数据、界面和样式，互不干扰。同一个组件可以在不同地方复用多次，传入不同的数据就会显示不同的内容。',
    components: [
      {
        id: 'app',
        name: 'App（根组件）',
        icon: '📱',
        depth: 0,
        desc: '整个应用的根组件，包含所有其他组件。'
      },
      {
        id: 'navbar',
        name: 'NavBar（导航栏）',
        icon: '🧭',
        depth: 1,
        desc: '页面顶部的导航栏，包含 Logo、搜索框和购物车入口。'
      },
      {
        id: 'search',
        name: 'SearchBox（搜索框）',
        icon: '🔍',
        depth: 2,
        desc: '独立的搜索框组件，管理搜索关键词和搜索结果。'
      },
      {
        id: 'cart',
        name: 'CartIcon（购物车图标）',
        icon: '🛒',
        depth: 2,
        desc: '显示购物车数量的小图标，数据来自全局购物车状态。'
      },
      {
        id: 'product',
        name: 'ProductCard（商品卡片）',
        icon: '📦',
        depth: 1,
        reused: 3,
        desc: '单个商品的展示卡片。写一次代码，传入不同的商品数据就能复用多次，每次显示不同的商品信息。'
      },
      {
        id: 'footer',
        name: 'Footer（页脚）',
        icon: '📄',
        depth: 1,
        desc: '页面底部信息，一般包含版权声明等。'
      }
    ]
  },
  dataUIGap: {
    dataBadge: '数据（JavaScript 变量）',
    uiBadge: '界面（用户看到的）',
    productCount: '商品数量',
    totalPrice: '总价',
    status: '状态',
    tooMany: '过多',
    normal: '正常',
    addProduct: '添加商品（修改数据）',
    desynced: '❌ 不同步',
    synced: '✅ 同步',
    cart: '购物车',
    itemUnit: '{count} 件',
    syncUI: '手动同步界面',
    syncedButton: '已同步',
    reset: '重置',
    desyncStat: '累计不同步 {count} 次',
    infoStrong: '核心问题：',
    info: '在没有框架的情况下，数据变了，界面不会自动跟着变。你必须自己写代码去更新界面，一旦忘了，用户看到的就是过时的、错误的信息。'
  },
  declarativeFormula: {
    stateLabel: 'State（数据）',
    uiLabel: 'UI（界面）',
    inputTitle: '修改数据（State）',
    username: '用户名',
    namePlaceholder: '输入名字',
    productCount: '商品数量',
    darkMode: '深色模式',
    outputTitle: '渲染结果（UI）',
    greetingUser: '你好，{name}！',
    greetingGuest: '你好，访客！',
    cartLine: '购物车：{count} 件商品',
    totalLine: '总价：¥{total}',
    warning: '商品数量较多，请确认订单',
    themeLine: '当前主题：{theme}',
    dark: '深色',
    light: '浅色',
    snapshotTitle: '当前 State 快照',
    empty: '(空)',
    infoStrong: '核心思想：',
    info: '你只需要修改数据（State），框架会根据数据自动渲染出对应的界面（UI）。同样的数据永远渲染出同样的界面，这就是 UI = f(State)。'
  },
  domCost: {
    title: 'DOM 操作耗时对比',
    subtitle: '逐个操作 vs 批量操作',
    countLabel: '修改次数',
    countUnit: '{count} 次',
    running: '执行中...',
    start: '开始对比',
    slowBadge: '逐个操作 DOM',
    slowDesc:
      '每修改一次数据 → 立刻操作一次真实 DOM → 浏览器每次都要重新布局和绘制',
    timeLabel: '模拟耗时',
    slowStep: '修改 → 布局 → 绘制',
    repeatStep: '... 重复 {count} 次 ...',
    fastBadge: '批量计算后一次性操作',
    fastDesc:
      '所有修改先在内存中计算好 → 最后只操作一次真实 DOM → 浏览器只需要重新布局和绘制一次',
    memoryStep: '内存中计算 {count} 次变化',
    commitStep: '一次性提交 → 布局 → 绘制',
    savings: '批量操作节省了',
    savingsTail: '的耗时',
    infoStrong: '核心思想：',
    info: 'DOM 操作的真正代价不是“修改值”本身，而是每次修改后浏览器必须执行的“重新布局 + 重新绘制”。减少 DOM 操作次数，就是减少这些昂贵的计算。虚拟 DOM 的作用就是先在内存中算好所有变化，最后一次性提交。'
  },
  frameworkSpectrum: {
    title: '框架光谱',
    subtitle: '运行时 ↔ 编译时',
    moreRuntime: '更多运行时',
    moreCompile: '更多编译时',
    runtimeWork: '运行时工作量',
    compileWork: '编译时工作量',
    bundleSize: '打包体积',
    devExperience: '开发体验',
    trendStrong: '趋势：',
    trend:
      '趋势很明确：框架在不断将工作从运行时移向编译时，目标是同时实现更好的开发体验和更优的运行性能。',
    frameworks: {
      react: {
        id: 'react',
        name: 'React',
        short: 'R',
        emoji: '⚛️',
        percent: 20,
        runtimePercent: 80,
        compilePercent: 20,
        bundleSize: '中等',
        devExperience: '★★★★☆',
        summary: '运行时为主：虚拟 DOM + Reconciliation'
      },
      vue3: {
        id: 'vue3',
        name: 'Vue 3',
        short: 'V',
        emoji: '💚',
        percent: 40,
        runtimePercent: 60,
        compilePercent: 40,
        bundleSize: '中等',
        devExperience: '★★★★★',
        summary: '混合：编译优化模板 + 运行时虚拟 DOM'
      },
      vapor: {
        id: 'vapor',
        name: 'Vue Vapor',
        short: 'Vp',
        emoji: '🌫️',
        percent: 60,
        runtimePercent: 40,
        compilePercent: 60,
        bundleSize: '较小',
        devExperience: '★★★★☆',
        summary: '编译时为主：跳过虚拟 DOM，编译生成直接操作'
      },
      svelte: {
        id: 'svelte',
        name: 'Svelte',
        short: 'S',
        emoji: '🔥',
        percent: 80,
        runtimePercent: 20,
        compilePercent: 80,
        bundleSize: '最小',
        devExperience: '★★★★☆',
        summary: '编译时为主：编译时生成精确 DOM 更新代码'
      },
      solid: {
        id: 'solid',
        name: 'Solid.js',
        short: 'Sd',
        emoji: '⬆️',
        percent: 90,
        runtimePercent: 10,
        compilePercent: 90,
        bundleSize: '最小',
        devExperience: '★★★★☆',
        summary: '纯编译时：细粒度响应式，无虚拟 DOM'
      }
    }
  },
  reactivityMechanism: {
    modify: '修改数据',
    underHood: '引擎盖下',
    infoStrong: '核心思想：',
    tabs: {
      vue: {
        id: 'vue',
        label: 'Vue (Proxy)',
        color: 'var(--vp-c-green-1)',
        steps: [
          'count = 1 → Proxy 的 set 陷阱被触发',
          '通知依赖收集器：“count 变了”',
          '找到所有依赖 count 的组件',
          '自动更新 DOM'
        ],
        info: 'Vue 通过 Proxy 自动拦截数据读写，开发者无需额外操作——写法最自然。'
      },
      react: {
        id: 'react',
        label: 'React (setState)',
        color: 'var(--vp-c-brand)',
        steps: [
          '调用 setCount(count + 1)',
          'React 将更新加入队列',
          '批量处理队列，触发 re-render',
          '虚拟 DOM Diff → 更新真实 DOM'
        ],
        info: 'React 要求显式调用 setState，虽然多一步，但数据流更可预测。'
      },
      svelte: {
        id: 'svelte',
        label: 'Svelte (编译器)',
        color: 'var(--vp-c-warning-1)',
        steps: [
          'count += 1 被编译器识别为赋值',
          '编译时已生成 $$invalidate(count)',
          '直接更新对应的 DOM 节点（无 Diff）',
          '零运行时开销'
        ],
        info: 'Svelte 在编译时完成分析，运行时零开销——但依赖编译器魔法。'
      }
    }
  },
  virtualDomDiff: {
    title: '虚拟 DOM Diff 过程',
    subtitle: '最小化 DOM 更新的核心机制',
    modify: '修改数据',
    reset: '重置',
    todoTitle: '待办清单',
    itemLearn: '学习 Vue',
    itemHomework: '写作业',
    itemCode: '写代码',
    itemGame: '打游戏',
    itemMovie: '看电影',
    modifiedBadge: '修改: 1 个节点',
    newBadge: '新增: 1 个节点',
    totalNodes: '虚拟 DOM 节点总数',
    realUpdates: '需要更新的真实 DOM',
    savedOps: '节省的 DOM 操作',
    infoStrong: '核心思想：',
    info: '虚拟 DOM 先在内存中对比新旧两棵树，找出最小差异，然后只更新必要的真实 DOM 节点——避免了大量无效操作。'
  },
  whatIsDom: {
    title: 'HTML → DOM 树',
    subtitle: '浏览器如何理解你写的 HTML',
    htmlTitle: '你写的 HTML 代码',
    parseLabel: '浏览器解析',
    treeTitle: '浏览器生成的 DOM 树',
    explanations: [
      {
        icon: '📄',
        title: '节点（Node）',
        text: 'DOM 树上的每一个方块就是一个节点。每个 HTML 标签（如 <code>&lt;h1&gt;</code>、<code>&lt;p&gt;</code>）都对应一个节点。'
      },
      {
        icon: '🌳',
        title: '父子关系',
        text: '标签嵌套在另一个标签里面，在 DOM 树上就是父节点和子节点的关系。<code>&lt;body&gt;</code> 里包含 <code>&lt;h1&gt;</code>，所以 body 是 h1 的父节点。'
      },
      {
        icon: '✏️',
        title: 'DOM 操作',
        text: 'JavaScript 可以增加、删除、修改 DOM 树上的节点。修改节点后，浏览器会重新计算布局并重新绘制页面，这就是“DOM 操作”。'
      }
    ],
    infoStrong: '关键概念：',
    info: 'DOM 是浏览器在内存中维护的一棵树，它和你写的 HTML 一一对应。JavaScript 无法直接修改 HTML 文件，它修改的是这棵 DOM 树——浏览器再根据 DOM 树的变化更新屏幕上的显示。',
    htmlLines: [
      { text: '<html>', indent: 0, tag: 'html' },
      { text: '<body>', indent: 1, tag: 'body' },
      { text: '<h1>我的购物车</h1>', indent: 2, tag: 'h1' },
      { text: '<p>共 3 件商品</p>', indent: 2, tag: 'p' },
      { text: '<ul>', indent: 2, tag: 'ul' },
      { text: '<li>耳机</li>', indent: 3, tag: 'li1' },
      { text: '<li>键盘</li>', indent: 3, tag: 'li2' },
      { text: '<li>鼠标</li>', indent: 3, tag: 'li3' },
      { text: '</ul>', indent: 2, tag: 'ul' },
      { text: '<button>结算</button>', indent: 2, tag: 'btn' },
      { text: '</body>', indent: 1, tag: 'body' },
      { text: '</html>', indent: 0, tag: 'html' }
    ],
    treeNodes: [
      { id: 1, label: 'html', depth: 0, tag: 'html' },
      { id: 2, label: 'body', depth: 1, tag: 'body' },
      { id: 3, label: 'h1', depth: 2, tag: 'h1', text: '我的购物车' },
      { id: 4, label: 'p', depth: 2, tag: 'p', text: '共 3 件商品' },
      { id: 5, label: 'ul', depth: 2, tag: 'ul' },
      { id: 6, label: 'li', depth: 3, tag: 'li1', text: '耳机' },
      { id: 7, label: 'li', depth: 3, tag: 'li2', text: '键盘' },
      { id: 8, label: 'li', depth: 3, tag: 'li3', text: '鼠标' },
      { id: 9, label: 'button', depth: 2, tag: 'btn', text: '结算' }
    ]
  },
  manualVsAuto: {
    manualBadge: '手动同步 / jQuery 风格',
    autoBadge: '自动同步 / 框架风格',
    addProduct: '添加商品',
    reset: '重置',
    synced: '已同步',
    unsynced: '未同步',
    syncManual: '手动同步',
    missLabel: '遗漏次数：',
    itemUnit: '{count} 件',
    empty: '（空）',
    normal: '正常',
    tooMany: '⚠️ 商品过多！',
    separator: '、',
    infoStrong: '核心思想：',
    info: '前端框架的本质价值在于“自动同步”——你只需修改数据，框架保证所有依赖该数据的 UI 自动更新，不会遗漏。',
    products: [
      '耳机 ¥99',
      '键盘 ¥199',
      '鼠标 ¥59',
      '显示器 ¥1299',
      '摄像头 ¥149',
      '音箱 ¥79'
    ],
    areas: {
      count: '购物车数量',
      list: '商品列表',
      total: '总价',
      status: '状态提示'
    }
  },
  whyNoAutoSync: {
    title: '变量修改时发生了什么？',
    subtitle: '原生 JavaScript vs 框架',
    native: '原生 JavaScript',
    framework: '使用框架（Vue）',
    codeTitle: '你写的代码',
    clickComment: '// 点击按钮时执行',
    executed: '✓ 执行',
    manualComment: '// 你还要手动写下面这些：',
    manualBadge: '✓ 手动',
    needWrite: '需要你写',
    noMoreCode: '// 不需要写别的了',
    frameworkAutoComment: '// 框架会自动完成后续步骤',
    flowTitle: '执行流程',
    jsModify: 'JavaScript 修改变量',
    countChanged: 'count 从 {from} 变成 {to}',
    stopped: '❌ 到这里就停了',
    frameworkTakesOver: '↓ 框架自动接管',
    findDom: '找到 DOM 节点',
    detectChange: '框架检测到变化',
    manualGetDom: '手动调用 document.getElementById()',
    proxyDetect: 'Proxy 拦截了赋值操作，通知更新系统',
    modifyDom: '修改 DOM 内容',
    frameworkUpdateDom: '框架更新所有相关 DOM',
    manualTextContent: '手动调用 .textContent = 新值',
    autoUpdateCount: '自动找到所有使用了 count 的位置并更新',
    auto: '自动',
    resultTitle: '界面结果',
    cart: '购物车',
    itemUnit: '{count} 件',
    totalPrice: '总价',
    staleAll: '变量已经改了，但界面没有任何变化',
    stalePartial: '购物车更新了，但总价还是旧的',
    runInitial: '执行 count = count + 1',
    continueManual: '继续手动同步下一个',
    runAgain: '再执行一次',
    reset: '重置',
    nativeInfoStrong: '为什么不自动？',
    nativeInfo:
      'JavaScript 的变量是“无感知”的。你执行 <code>count = 4</code> 时，JavaScript 引擎只是把内存中 count 的值从 3 改成 4，仅此而已。它不会通知任何人，不会触发任何回调，不会去检查页面上哪里显示了 count。所以界面不会有任何变化——除非你自己写代码去更新 DOM。',
    frameworkInfoStrong: '框架怎么做到的？',
    frameworkInfo:
      '框架把你的数据用特殊机制包裹起来。以 Vue 为例，它用 JavaScript 的 Proxy（代理）功能拦截你对变量的赋值操作。当你写 <code>count = 4</code> 时，Proxy 会在赋值的同时自动执行一段“通知”代码，告诉框架“count 变了”，框架再去找到所有用到 count 的 DOM 节点并更新它们。整个过程你不需要写任何额外代码。'
  },
  frameworkMotivation: {
    cards: [
      {
        title: '问题',
        items: [
          '数据变化时，手动更新 DOM 容易遗漏',
          '页面越复杂，需要同步的地方越多，越容易出 bug',
          '多人协作时，DOM 操作散落各处，维护成本高'
        ]
      },
      {
        title: '根本原因',
        items: [
          '浏览器不知道“数据”和“界面”的对应关系',
          '原生 DOM API 只提供底层操作，没有“数据变了就更新 UI”的能力',
          '开发者被迫充当“人肉同步器”'
        ]
      },
      {
        title: '框架的解法',
        items: [
          '建立数据到 UI 的映射关系（UI = f(State)）',
          '自动检测数据变化（响应式系统）',
          '自动计算最小 DOM 更新（虚拟 DOM / 编译优化）'
        ]
      }
    ]
  }
}
