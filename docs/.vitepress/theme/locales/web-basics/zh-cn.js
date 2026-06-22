export default {
  layout: {
    boxModel: {
      title: 'CSS 盒模型',
      subtitle: '理解元素实际占用空间的构成',
      scenario:
        '场景：你要做三个并排卡片，容器宽度 900px，每个卡片设 width: 200px。结果第三个掉下去了——为什么？',
      actualWidth: '实际占用宽度',
      includedFormula:
        '{width}px（已包含 padding 和 border） + {margin}×2 = {total}px',
      overflowHint: '三个卡片需要 {width}px，超出容器 900px，第三个会掉下去',
      fitHint: '三个卡片共 {width}px，可以放下',
      keyDifference: '关键区别：',
      info: 'content-box（默认）的 width 只是内容宽度；border-box 的 width 包含 content + padding + border。推荐全局设置 box-sizing: border-box。',
      layers: {
        margin: 'margin',
        border: 'border',
        padding: 'padding',
        content: 'content'
      }
    },
    flexbox: {
      title: 'Flexbox 布局',
      subtitle: '通过调整参数观察元素排列方式的变化',
      mainAxis: '主轴',
      crossAxis: '交叉轴',
      mainAxisTitle: '主轴 (Main Axis)',
      mainAxisDesc: '元素排列的方向，由 flex-direction 决定',
      crossAxisTitle: '交叉轴 (Cross Axis)',
      crossAxisDesc: '垂直于主轴，用于对齐元素',
      justifyLabel: 'justify-content（主轴对齐）',
      alignLabel: 'align-items（交叉轴对齐）',
      mainAxisDirection: '主轴方向: {direction}',
      crossAxisDirection: '交叉轴方向: {direction}',
      horizontal: '水平 →',
      vertical: '垂直 ↓',
      memoryTitle: '记忆方法：',
      memory:
        'justify-content 控制主轴方向的对齐（水平时左右，垂直时上下）；align-items 控制交叉轴方向的对齐。',
      directions: [
        { id: 'row', label: 'row（水平）' },
        { id: 'column', label: 'column（垂直）' }
      ]
    },
    domManipulator: {
      title: 'DOM 操作演示',
      subtitle: '通过 JavaScript 动态修改页面内容、样式和结构',
      editContent: '修改内容',
      placeholder: '输入标题',
      updateTitle: '更新标题',
      editStyle: '修改样式',
      editElements: '添加/删除元素',
      addItem: '添加项目',
      removeLast: '删除最后',
      fallbackTitle: '点击按钮更新标题',
      cardDesc: '这是一个演示 DOM 操作的卡片区域。',
      empty: '（列表为空）',
      codeTitle: '对应的 JavaScript 代码',
      comments: {
        title: '// 修改文本内容',
        style: '// 切换 CSS 类',
        add: '// 创建并添加新元素',
        remove: '// 删除最后一个元素',
        idle: '// 点击左侧按钮查看对应代码'
      },
      newItem: '新项目 {n}',
      methodsTitle: '常用 DOM 方法',
      methods: [
        { code: 'querySelector()', desc: '按选择器查找元素' },
        { code: 'textContent', desc: '获取/设置文本内容' },
        { code: 'classList', desc: '操作元素的 CSS 类' },
        { code: 'createElement()', desc: '创建新元素' },
        { code: 'appendChild()', desc: '添加子元素' },
        { code: 'remove()', desc: '删除元素' }
      ],
      noticeTitle: '注意：',
      notice:
        '频繁操作 DOM 会影响性能。现代框架（Vue/React）使用虚拟 DOM 来优化这个过程——先在内存中计算差异，再批量更新真实 DOM。',
      initialTitle: '欢迎学习 DOM',
      initialItems: ['项目 1', '项目 2'],
      styles: [
        { id: '', label: '默认' },
        { id: 'highlight', label: '高亮' },
        { id: 'dark', label: '深色' }
      ]
    },
    triad: {
      title: 'HTML / CSS / JavaScript 协作演示',
      subtitle: '同一段页面，切换查看三者各自的作用',
      hero: '欢迎来到我的网站',
      desc: '这是一段描述文字',
      button: '点我试试',
      process: '执行过程',
      principleTitle: '分工原则：',
      principle:
        'HTML 定义结构（是什么），CSS 定义样式（长什么样），JavaScript 定义行为（能做什么）。',
      modes: [
        { id: 'html', label: 'HTML', icon: '结构', codeTitle: 'HTML 代码' },
        { id: 'css', label: 'CSS', icon: '样式', codeTitle: 'CSS 代码' },
        {
          id: 'js',
          label: 'JavaScript',
          icon: '行为',
          codeTitle: 'JavaScript 代码'
        }
      ],
      codeLines: {
        html: [
          { key: 'h1', text: '<h1>欢迎来到我的网站</h1>' },
          { key: 'p', text: '<p>这是一段描述文字</p>' },
          { key: 'btn', text: '<button>点我试试</button>' }
        ],
        css: [
          { key: 'h1', text: '.hero {' },
          { key: 'h1', text: '  color: #0ea5e9;' },
          { key: 'h1', text: '  font-size: 20px;' },
          { key: 'h1', text: '}' },
          { key: 'btn', text: '.cta { background: #0ea5e9; }' }
        ],
        js: [
          { key: 'btn', text: "const btn = document.querySelector('.cta')" },
          { key: 'btn', text: "btn.addEventListener('click', () => {" },
          { key: 'btn', text: '  count++' },
          { key: 'btn', text: "  btn.textContent = '点我 (' + count + ')'" },
          { key: 'btn', text: '})' }
        ]
      },
      steps: {
        html: [
          '浏览器解析标签，识别内容类型',
          'h1 是标题，p 是段落，button 是按钮',
          '按默认样式渲染（此时看起来很朴素）'
        ],
        css: [
          '解析选择器，找到对应元素',
          '应用颜色、字号、间距等样式规则',
          '页面外观发生变化'
        ],
        js: [
          '通过选择器获取按钮元素',
          '注册 click 事件监听器',
          '点击时执行回调函数，更新计数'
        ]
      }
    }
  },
  frameworks: {
    imperativeDeclarative: {
      title: '命令式 vs 声明式',
      subtitle: '两种编程思维的对比（通俗说：手动操作 vs 自动响应）',
      imperative: '命令式 (Imperative)',
      imperativeSub: 'jQuery Style - 手动操作',
      declarative: '声明式 (Declarative)',
      declarativeSub: 'Vue/React Style - 自动响应',
      manualDom: '// 手动操作 DOM',
      bindData: '// 只需要绑定数据',
      count: 'Count:',
      high: '⚠️ Count is high!',
      step1: 'Step 1: Value++',
      step2: 'Step 2: Update Text',
      step3: 'Step 3: Check Logic',
      autoRender: 'Value++ (Auto Render)',
      autoStatus: 'Framework handles DOM updates automatically.',
      ideaTitle: '核心思想：',
      idea: '命令式像"手把手教电脑怎么做"，声明式像"告诉电脑要什么，它自己搞定"。',
      ready: 'Ready.',
      variableChanged: 'Variable `count` is now {count}. DOM is NOT updated.',
      domUpdated: 'DOM text updated manually.',
      logicHigh: 'Logic checked: > 5. Manually showing message.',
      logicLow: 'Logic checked: <= 5. No message.'
    },
    jqueryState: {
      title: '什么是 jQuery？用“购物车数量”秒懂',
      subtitle:
        '左边：像 jQuery 一样手动改页面（容易漏）。右边：像 Vue/React 一样只改状态。',
      jqueryTitle: 'jQuery 思路：到处改 DOM',
      stateTitle: 'Vue/React 思路：只改 State',
      badge: '🛒 角标：',
      cartPage: '购物车页数量：',
      checkout: '结算按钮：',
      checkoutAction: '去结算',
      commandTitle: '模拟“你写的命令”',
      increaseData: '数据 +1（但还没改页面）',
      updateBadge: '改角标',
      updateCartPage: '改购物车页',
      updateCheckout: '改结算按钮',
      logTitle: '命令日志',
      emptyLog: '（还没有操作）',
      oneThing: '你只需要做一件事',
      reset: '重置',
      okHint: 'State 变了，界面三处会自动同步，不需要你“手动找 DOM 去改”。',
      termsTitle: '这里的两个新词',
      domTerm: '浏览器里的页面结构（按钮/文字/图片都在里面）',
      stateTerm: '页面的数据（比如购物车数量）',
      unit: '件',
      consistent: '✅ 三处显示一致（恭喜你都改对了）',
      inconsistent:
        '⚠️ 数据和页面不一致：你可能漏更新了某一处 DOM（真实项目里这就是 bug）',
      logs: {
        increase: '数据 +1（现在真实数据 = {value}）',
        badge: '更新角标 DOM = {value}',
        cart: '更新购物车页 DOM = {value}',
        checkout: '更新结算按钮 DOM = {value}'
      }
    },
    renderingStrategy: {
      title: '渲染策略：CSR / SSR / SSG',
      subtitle: '选择策略，观察首屏表现',
      ttfb: 'TTFB',
      tti: '可交互时间',
      seo: 'SEO 友好',
      strategies: [
        {
          key: 'csr',
          label: 'CSR',
          ttfb: 450,
          tti: 1600,
          seo: '一般',
          note: 'JS 拉取完成后才渲染'
        },
        {
          key: 'ssr',
          label: 'SSR',
          ttfb: 220,
          tti: 1100,
          seo: '好',
          note: '首屏更快，但服务器压力更大'
        },
        {
          key: 'ssg',
          label: 'SSG',
          ttfb: 120,
          tti: 700,
          seo: '很好',
          note: '静态预渲染，适合内容站点'
        }
      ]
    },
    responsiveGrid: {
      title: '响应式布局：一套代码，多种屏幕',
      subtitle: '拖动宽度，观察列数变化',
      viewport: '视口宽度：',
      card: 'Card {n}',
      columns: '当前列数：'
    },
    routingMode: {
      title: '路由方式：整页刷新 vs 局部切换',
      subtitle: '点击导航，感受体验差异',
      mpa: '传统多页 (MPA)',
      spa: '单页应用 (SPA)',
      pages: ['首页', '商品', '购物车', '个人中心'],
      loading: '页面加载中...',
      currentPage: '当前页面：',
      hints: {
        mpa: 'MPA：每次切换都要整页刷新',
        spa: 'SPA：只更新内容区域，状态可保留'
      }
    },
    sliceRequest: {
      title: '切图时代：请求数越多越慢',
      subtitle: '调整切图数量，观察加载时间变化',
      sliceCount: '切图数量：',
      sheet: '张',
      sprite: '合并雪碧图 (Sprite)',
      totalRequests: '总请求数',
      loadTime: '预计加载时间'
    }
  },
  network: {
    urlParser: {
      label: 'URL 解析 -- 把人类文字翻译成结构化信息',
      status: '悬停查看每个部分的职责',
      parts: [
        {
          id: 'protocol',
          title: '🚛 交通方式 (协议 Protocol)',
          desc: '代表你要求坐安全级别最高的"运钞车"（加密通信HTTPS）。如果是 HTTP，就是老式敞篷车，沿途都会被看见。'
        },
        {
          id: 'host',
          title: '🏢 店铺名 (主机名 Host)',
          desc: '这就是你要去哪家店，也是服务器的域名，后续浏览器需要把它翻译成网络世界认的数字 IP。'
        },
        {
          id: 'path',
          title: '📍 具体货架 (路径 Path)',
          desc: '进了店门之后，你要去哪个房间拿具体的哪件商品或执行具体的某个动作。'
        }
      ]
    },
    dnsLookup: {
      label: 'DNS 解析 -- 查地址簿找坐标',
      browserTitle: '浏览器',
      browserDescs: [
        '要去 www.google.com',
        '问 114查号台...',
        '收到: 142... 发车!'
      ],
      requestLabel: '询问坐标',
      responseLabel: '返回 IP',
      dnsTitle: '114查号台 (DNS)',
      dnsDescs: ['待命', '正在翻地址簿...', '找到啦: 142.250.80.46'],
      buttons: {
        running: '查询中...',
        restart: '重新查询',
        start: '开始 DNS 查询'
      },
      status: [
        '点击按钮，告诉浏览器你不知道 Google 服务器在哪',
        '浏览器向营运商查号台 (DNS) 请求数字坐标...',
        '拿到具体的 IP 地址，准备开始发车通信！'
      ]
    },
    tcpHandshake: {
      label: 'TCP 三次握手 -- 建立可靠通话渠道',
      client: '浏览器 (你)',
      server: 'Google 服务器',
      connected: '连接成功',
      waiting: '等待连接',
      start: '发起连接',
      reset: '断开重连',
      messages: [
        {
          title: '第1次握手: SYN',
          desc: '"喂，服务器老哥在吗？我能发信息，你能收到吗？"'
        },
        {
          title: '第2次握手: SYN-ACK',
          desc: '"在！我收到了！那你现在能听到我说话吗？"'
        },
        {
          title: '第3次握手: ACK',
          desc: '"我就知道你听到了，证实通道没问题，准备聊正事！"'
        }
      ],
      status: [
        '点击【发起连接】模拟 TCP 三次握手过程',
        '发送 SYN 包: 浏览器试探服务器接收能力...',
        '回复 SYN-ACK 包: 服务器确认接收并试探浏览器...',
        '回复 ACK 包: 浏览器再次确认。双方通道建立完毕，可以正式发请求！'
      ]
    },
    httpExchange: {
      label: 'HTTP 请求与响应 -- 寄纸条买包裹',
      requestHeader: '📤 【买方发纸条】 HTTP Request',
      userAgent: 'Mac Chrome 浏览器',
      acceptLanguage: 'zh-CN (我要中文货)',
      send: '塞入通道发送 →',
      loading: '等包裹寄回...',
      retry: '再试一次 ↻',
      responseHeader: '📥 【卖方回包裹】 HTTP Response',
      okNote: '交易成功',
      divider: '空行 (分隔快递单和物品正文)',
      bodyCode:
        '<!DOCTYPE html>\n<html>\n  <body>这里是Google搜索页面的代码</body>\n</html>',
      empty: '这里将显示服务器返回的包裹...',
      status: {
        idle: '组装好 HTTP 请求单，包含请求路径和各项补充情报。',
        loading: '请求正在通过刚才建立好的 TCP 通道飞速传输给对方...',
        done: '服务器找到货物 (HTML代码)，贴上 200 OK 标签原路返回送达！'
      }
    },
    browserRendering: {
      label: '浏览器渲染 -- 干瘪文字拆解组装变成精美画面',
      status: '点击上方各步骤图标，查看每一阶段的工厂作业产出',
      domInput: 'input (搜索框)',
      cssResult: 'h1 (红色文字规则)',
      steps: [
        {
          icon: '📄',
          name: '源码',
          title: '拿到纯文本源代码',
          desc: '刚传回来的只是一堆干瘪的 HTML, CSS 等代码字符。这只是建造网页的说明书，不是真正的画面。'
        },
        {
          icon: '🦴',
          name: 'DOM解析',
          title: '1. 搭骨架 (DOM 解析)',
          desc: '第一步通读 HTML 标签，构建树状骨架图（DOM 树），了解结构关系，例如"标题框在身体(body)里"。'
        },
        {
          icon: '🎨',
          name: 'CSS解析',
          title: '2. 样式附加 (CSS 解析)',
          desc: '第二步读 CSS，把对应的样式规则（如"标题为红色"）关联并绑定到我们刚才搭建好的特定骨架节点上。'
        },
        {
          icon: '📏',
          name: 'Layout排版',
          title: '3. 几何排版 (Layout)',
          desc: '第三步拿尺子量每个骨架的大小。结合你的屏幕尺寸，精确计算出每个元素所在的绝对坐标 x, y 和明确的长宽高尺寸。'
        },
        {
          icon: '🖼️',
          name: 'Paint绘制',
          title: '4. 像素涂色 (Paint)',
          desc: '最后，有了骨架、颜色规则、和精准坐标尺寸，浏览器控制像素画笔，在一瞬间完成上色和填充！'
        }
      ]
    }
  }
}
