export default {
  common: {
    coreIdea: '核心思想：',
    coreAdvantage: '核心优势：',
    coreDifference: '核心区别：',
    coreConcept: '核心概念：',
    matchRule: '匹配规则：',
    choiceAdvice: '选择建议：'
  },
  architecture: {
    title: '路由架构',
    subtitle: '前端路由系统的组成部分',
    intro: {
      prefix: '想象',
      highlight: '公司的组织架构',
      suffix:
        '：有前台接待（URL监听）、有调度中心（路由匹配）、有各部门（组件渲染）。前端路由也是这样分层协作的，各司其职。'
    },
    flowTitle: '📊 数据流向',
    info: '路由系统通过监听URL变化、匹配路由配置、执行守卫验证、渲染组件这一系列流程，实现了单页应用的无刷新导航。',
    layers: [
      {
        name: '浏览器层',
        icon: '🌐',
        desc: '提供 URL 和 History API',
        components: ['URL Bar', 'History API', 'Hash Change', 'PopState']
      },
      {
        name: '路由核心层',
        icon: '⚙️',
        desc: '路由系统的核心逻辑',
        components: ['Router 实例', '路由匹配器', 'History 管理', '守卫管道']
      },
      {
        name: '组件层',
        icon: '🧩',
        desc: '用户界面渲染',
        components: ['RouterView', 'RouterLink', '页面组件']
      }
    ],
    flowSteps: [
      '用户点击链接，触发 URL 变化',
      'History 监听器捕获变化',
      '路由匹配器找到对应配置',
      '执行守卫进行验证',
      '渲染组件到 RouterView'
    ]
  },
  dynamicRoutes: {
    title: '动态路由',
    subtitle: '让URL变身数据容器',
    intro: {
      prefix: '想象你在',
      highlight1: '图书馆',
      middle:
        '找书：每本书都有编号（动态参数），你需要根据这个编号找到对应的书籍。动态路由就像这样，用',
      highlight2: '占位符',
      suffix: '匹配不同的内容。'
    },
    exampleLabel: '例:',
    testPathTitle: '📍 测试路径',
    hint: '试试输入：user/123 或 products/electronics/456',
    resultTitle: '🎯 匹配结果',
    matchedRoute: '匹配路由:',
    extractedParams: '提取参数:',
    noResult: '输入路径查看解析结果',
    info: '动态路由用占位符（如 :id）捕获URL中的变量值，就像给数据贴上了"标签"，让组件可以通过这些标签获取具体内容。',
    paramTypes: [
      {
        name: 'required',
        pattern: ':id',
        label: '必填参数',
        example: '/user/123',
        description: 'URL中必须有对应的值'
      },
      {
        name: 'optional',
        pattern: ':id?',
        label: '可选参数',
        example: '/user 或 /user/123',
        description: '可以省略的参数'
      },
      {
        name: 'multiple',
        pattern: ':id+',
        label: '重复参数',
        example: '/files/a/b/c',
        description: '一个或多个值'
      },
      {
        name: 'zeroOrMore',
        pattern: ':id*',
        label: '灵活参数',
        example: '/tags 或 /tags/vue/router',
        description: '零个或多个值'
      }
    ]
  },
  hashVsHistory: {
    title: '路由模式对比',
    subtitle: 'Hash vs History',
    intro: {
      prefix: '想象你在',
      highlight1: '邮寄包裹',
      middle1: '：Hash模式像是把地址写在',
      highlight2: '便签条',
      middle2: '上（#后面），History模式则是直接写在',
      highlight3: '信封',
      suffix: '上。前者简单但不够正式，后者美观但需要服务端配合。'
    },
    hashMode: 'Hash 模式',
    historyMode: 'History 模式',
    compatibility: '兼容性',
    serverConfig: '服务端配置',
    seo: 'SEO友好度',
    noConfig: '无需配置',
    needConfig: '需要配置',
    poor: '较差',
    good: '良好',
    info: '现代项目优先选History模式（URL美观、SEO友好），如果需要兼容老浏览器或无法修改服务端配置，再用Hash模式。',
    navItems: [
      { name: '首页', path: 'home' },
      { name: '产品', path: 'products' },
      { name: '关于', path: 'about' }
    ],
    pages: {
      home: {
        title: '首页',
        content:
          '欢迎来到我们的网站！这是SPA的首页，所有页面切换都在前端完成，无需刷新。'
      },
      products: {
        title: '产品中心',
        content: '这里展示了我们的核心产品系列。SPA让浏览体验更流畅，切换更快。'
      },
      about: {
        title: '关于我们',
        content: '了解更多关于我们的故事。SPA模式下，页面间跳转几乎没有延迟。'
      }
    }
  },
  mpa: {
    title: 'MPA vs SPA',
    subtitle: '多页面 vs 单页面导航',
    intro: {
      prefix: '想象你在',
      highlight1: '餐厅吃饭',
      middle: '：MPA像是每次点菜都',
      highlight2: '换一家餐厅',
      suffix:
        '（重新加载整个页面），SPA则是在同一家餐厅换菜品（只更新需要变化的部分）。显然，SPA体验更流畅！'
    },
    mpaTitle: 'MPA (多页面应用)',
    spaTitle: 'SPA (单页面应用)',
    info: 'MPA每次跳转都要重新下载整个页面，SPA只在首次加载时下载，后续只更新变化的内容。这就是为什么SPA感觉"更快"的原因。',
    mpaSteps: [
      '1. 用户点击链接',
      '2. 浏览器发送 HTTP 请求',
      '3. 服务器返回完整 HTML',
      '4. 浏览器解析并渲染新页面',
      '5. 页面资源重新加载 (JS/CSS)'
    ],
    spaSteps: [
      '1. 用户点击链接',
      '2. 拦截默认行为',
      '3. 更新 URL (History API)',
      '4. 匹配路由配置',
      '5. 动态渲染新组件',
      '6. 页面无刷新更新'
    ],
    mpaFeatures: [
      { icon: '✓', text: 'SEO 友好', bad: false },
      { icon: '✓', text: '首屏快', bad: false },
      { icon: '✗', text: '页面有白屏', bad: true }
    ],
    spaFeatures: [
      { icon: '✓', text: '过渡流畅', bad: false },
      { icon: '✓', text: '体验好', bad: false },
      { icon: '✗', text: '需要 SSR 支持 SEO', bad: true }
    ]
  },
  nestedRoutes: {
    title: '嵌套路由',
    subtitle: '层层嵌套的视图容器',
    intro: {
      prefix: '想象',
      highlight1: '俄罗斯套娃',
      middle:
        '：每个大娃娃里都有小娃娃，小娃娃里还有更小的。嵌套路由就是这样，父组件的',
      highlight2: 'RouterView',
      suffix: '里可以渲染子组件，一层套一层。'
    },
    renderView: '🔲 渲染视图',
    info: '嵌套路由通过在父组件中放置 RouterView 来实现子路由的渲染。每个路由层级都有自己的 RouterView，就像套娃一样一层层展示。'
  },
  routeGuards: {
    title: '路由守卫',
    subtitle: '导航流程的安检员',
    intro: {
      prefix: '想象你在',
      highlight: '机场过安检',
      suffix:
        '：登机前要检查身份、行李，登机后可能还要确认信息。路由守卫就像这些安检员，在导航的各个阶段进行检查和拦截。'
    },
    codeExample: '💻 代码示例：',
    executionTitle: '📋 守卫执行顺序',
    info: '路由守卫常用于权限验证（检查用户是否登录）、页面预加载（获取数据）、防止误操作（离开前提示保存）等场景。',
    guards: [
      {
        name: 'beforeEach',
        type: 'global',
        icon: '🌍',
        shortDesc: '全局前置守卫',
        description: '在路由跳转前执行，常用于权限验证、登录检查等',
        example: `router.beforeEach((to, from, next) => {\n  if (to.meta.requiresAuth && !isLoggedIn()) {\n    next('/login')\n  } else {\n    next()\n  }\n})`
      },
      {
        name: 'beforeResolve',
        type: 'global',
        icon: '🔍',
        shortDesc: '全局解析守卫',
        description: '在导航被确认之前、组件内守卫和异步路由组件被解析之后调用',
        example: `router.beforeResolve((to, from, next) => {\n  // 数据预加载\n  next()\n})`
      },
      {
        name: 'afterEach',
        type: 'global',
        icon: '✅',
        shortDesc: '全局后置钩子',
        description: '在导航完成后执行，不能改变导航，常用于页面统计',
        example: `router.afterEach((to, from) => {\n  document.title = to.meta.title\n  analytics.track(to.path)\n})`
      },
      {
        name: 'beforeEnter',
        type: 'route',
        icon: '🛣️',
        shortDesc: '路由独享守卫',
        description: '在单个路由配置中定义，只在进入该路由时触发',
        example: `{\n  path: '/admin',\n  beforeEnter: (to, from, next) => {\n    if (!isAdmin()) next('/unauthorized')\n    else next()\n  }\n}`
      },
      {
        name: 'beforeRouteEnter',
        type: 'component',
        icon: '🔧',
        shortDesc: '组件内守卫-进入',
        description: '在渲染该组件的对应路由被验证前调用，不能访问组件实例',
        example: `beforeRouteEnter(to, from, next) {\n  next(vm => {\n    // 通过 vm 访问组件实例\n  })\n}`
      }
    ],
    executionSteps: [
      { name: '触发导航', description: '用户点击链接或调用 router.push()' },
      { name: 'beforeRouteLeave', description: '离开组件的守卫' },
      { name: 'beforeEach', description: '全局前置守卫' },
      { name: 'beforeEnter', description: '路由独享守卫' },
      { name: 'beforeRouteEnter', description: '组件内守卫' },
      { name: 'beforeResolve', description: '全局解析守卫' },
      { name: 'afterEach', description: '全局后置钩子' },
      { name: 'DOM 更新', description: '渲染新页面' }
    ]
  },
  routeMatching: {
    title: '路由匹配',
    subtitle: 'URL如何找到对应组件',
    intro: {
      prefix: '想象你在',
      highlight: '查字典',
      suffix:
        '：输入一个词，字典会帮你找到对应的解释。路由匹配也是这样，浏览器根据URL路径，在路由配置中找到最匹配的那一项，然后渲染对应组件。'
    },
    testPathTitle: '📍 测试路径',
    hint: '试试：user/123 或 products/electronics/456',
    resultTitle: '🎯 匹配结果',
    matchedRoute: '匹配路由:',
    extractedParams: '提取参数:',
    noMatch: '未找到匹配的路由',
    definedRoutes: '📋 已定义的路由',
    info: '路由按定义顺序匹配，先定义的优先。动态参数（:id）可以匹配任意值，但精确匹配优先级更高。',
    routes: [
      { path: '/', name: '首页', hasParams: false },
      { path: '/user', name: '用户列表', hasParams: false },
      { path: '/user/:id', name: '用户详情', hasParams: true },
      { path: '/user/:id/posts', name: '用户文章', hasParams: true },
      { path: '/products/:category/:id', name: '产品详情', hasParams: true },
      { path: '/:path(.*)*', name: '404页面', hasParams: true }
    ]
  },
  routingModes: {
    title: '路由模式',
    subtitle: '不同的URL管理方式',
    intro: {
      prefix: '想象你在',
      highlight: '寄快递',
      suffix:
        '：可以选择平邮（Hash，简单但慢）、快递（History，快速但需要配合）、或者专人送达（Memory，特殊场景）。不同模式适合不同需求。'
    },
    prosTitle: '✅ 优点',
    consTitle: '❌ 缺点',
    urlExample: '🌐 URL 示例',
    memorySuffix: ' (URL不变)',
    info: '现代Web应用优先选History模式，老项目或特殊场景用Hash，移动端App或测试环境可用Memory模式。',
    modes: [
      {
        key: 'hash',
        name: 'Hash 模式',
        icon: '#',
        description: '使用URL的hash部分（#）来模拟路由，兼容性最好',
        pros: ['兼容IE8+', '无需服务端配置', '部署简单'],
        cons: ['URL带有#号', 'SEO不友好', '分享可能丢失hash']
      },
      {
        key: 'history',
        name: 'History 模式',
        icon: '/',
        description: '使用HTML5 History API实现URL管理，最常用的模式',
        pros: ['URL美观', 'SEO友好', '符合用户习惯'],
        cons: ['需要服务端配置', '兼容性IE10+', '刷新返回404']
      },
      {
        key: 'memory',
        name: 'Memory 模式',
        icon: 'M',
        description: '将路由信息保存在内存中，不修改浏览器URL',
        pros: ['无需浏览器环境', '适用于测试', '移动端App内嵌'],
        cons: ['不支持刷新', 'URL不变化', '仅限特定场景']
      }
    ]
  },
  spaNavigation: {
    title: 'SPA导航流程',
    subtitle: '从点击到渲染的完整旅程',
    intro: {
      prefix: '想象你在',
      highlight: '餐厅点菜',
      suffix:
        '：从看菜单、下单、厨房准备、最后上菜。SPA导航也是这样，用户触发后经过一系列步骤，最终把新"菜品"（页面）端到你面前。'
    },
    optimizationTitle: '⚡ 关键优化点',
    info: '整个流程在浏览器内完成，无需服务器参与，体验如原生应用般流畅。这就是SPA相比传统MPA的最大优势。',
    steps: [
      { title: '触发导航', desc: '用户点击链接或调用 router.push()' },
      { title: 'URL 变化', desc: '浏览器地址栏更新，History API 记录状态' },
      { title: '路由匹配', desc: '路由器根据URL匹配对应的路由配置' },
      { title: '守卫验证', desc: '执行全局、路由独享、组件内守卫' },
      { title: '组件加载', desc: '懒加载的组件异步加载并解析' },
      { title: '组件渲染', desc: '新组件挂载到 DOM，页面更新' },
      { title: '后置钩子', desc: '执行 afterEach 钩子，完成导航' }
    ],
    tips: [
      {
        icon: '🎯',
        title: '路由懒加载',
        desc: '按需加载页面组件，减少初始包体积'
      },
      {
        icon: '🛡️',
        title: '守卫预加载',
        desc: '在beforeEnter中预加载数据，提升用户体验'
      },
      { icon: '⚡', title: '过渡动画', desc: '添加页面切换动画，让导航更流畅' }
    ]
  }
}
