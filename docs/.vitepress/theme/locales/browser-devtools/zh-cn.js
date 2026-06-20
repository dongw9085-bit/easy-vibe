export default {
  common: {
    coreIdea: '核心思想：',
    recommendation: '选择建议：'
  },
  mainDemo: {
    controlLabel: 'Chrome DevTools 模拟器',
    tourPlaceholder: '选择导览场景...',
    tourOptions: {
      elements: '1. 元素面板 (Elements)',
      console: '2. 控制台 (Console)',
      sources: '3. 源代码 (Sources)',
      network: '4. 网络 (Network)',
      application: '5. 应用 (Application)'
    },
    stopBtn: '停止演示',
    tabs: {
      elements: { label: '元素', desc: '查看和修改页面 HTML 结构与 CSS 样式' },
      console: {
        label: '控制台',
        desc: '查看日志、错误信息，执行 JavaScript 代码'
      },
      sources: {
        label: '源代码/来源',
        desc: '查看源代码，设置断点调试 JavaScript'
      },
      network: { label: '网络', desc: '监控网络请求，查看接口数据和加载性能' },
      performance: { label: '性能', desc: '分析页面运行性能' },
      memory: { label: '内存', desc: '检测内存泄漏' },
      application: {
        label: '应用',
        desc: '查看本地存储(Storage)、Cookies、缓存等'
      },
      security: { label: '隐私与安全', desc: '查看证书和安全问题' },
      lighthouse: { label: 'Lighthouse', desc: '页面质量审计' },
      recorder: { label: '记录器', desc: '录制用户操作' }
    },
    titles: {
      elementPicker: '选择页面中的元素以进行检查',
      deviceToggle: '切换设备工具栏',
      settings: '设置',
      close: '关闭'
    },
    consoleSidebar: {
      messages: '6 条消息',
      userMessages: '6 条用户消息',
      noErrors: '无错误',
      noWarnings: '无警告',
      noInfo: '无信息',
      verbose: '6 条详细消息'
    },
    consoleToolbar: {
      title: '控制台工具栏',
      clear: '清除控制台',
      liveExpression: '创建实时表达式',
      filter: '过滤',
      defaultLevel: '默认级别 ▼'
    },
    bottomDrawer: {
      console: '控制台',
      aiAssist: 'AI 辅助',
      changes: '新变化',
      issues: '问题',
      search: '搜索',
      noResultsTitle: '未找到匹配项',
      noResultsDesc: '没有与您的搜索查询相符的结果'
    },
    stylesPanel: {
      styles: '样式',
      computed: '计算样式',
      layout: '布局',
      eventListeners: '事件监听器'
    },
    elementsFilter: '过滤',
    sources: {
      page: 'Page',
      filesystem: 'Filesystem',
      noWatchExpressions: 'No watch expressions'
    },
    tours: {
      console: {
        tab: '控制台 (Console)：查看日志、交互式运行代码',
        toolbar: '工具栏：可清空日志、设置 Log 级别、过滤内容',
        sidebar: '侧边栏：按类型聚合消息 (Errors, Warnings)',
        logLine: '日志流：显示代码输出，点击右侧链接可跳转源码',
        drawer: '抽屉 (Drawer)：查看搜索结果、Issues 等辅助信息',
        input: '即时执行：在这里输入 JS 表达式并回车运行'
      },
      elements: {
        tab: '元素面板 (Elements)：实时查看和修改 DOM/CSS',
        domTree: 'DOM 树：页面的 HTML 结构，可折叠/展开/拖拽',
        selectedElement: '选中元素：点击元素以在右侧查看其样式',
        stylesPanel: '样式面板 (Styles)：查看计算后的样式和 CSS 规则',
        cssRule: 'CSS 规则：可直接修改属性值，实时预览效果'
      },
      sources: {
        tab: '源代码 (Sources)：文件浏览与断点调试',
        fileSystem: '文件系统：查看加载的所有资源文件',
        codeEditor: '编辑器：查看源码，点击行号设置断点',
        debugger: '调试器：查看变量 (Watch)、调用栈 (Call Stack)'
      },
      network: {
        tab: '网络 (Network)：抓包分析',
        toolbar: '过滤器：按类型筛选请求 (XHR/Fetch, CSS, JS)',
        gridHeader: '请求列表：查看状态码、类型、大小、耗时',
        clickRow: '点击请求行查看详情',
        detailPanel: '详情面板：查看 Headers, Preview, Response',
        headersTab: 'Headers: 查看请求/响应头信息',
        general: 'General：查看 URL、Method (GET/POST) 和状态码 (200)',
        responseHeaders: 'Response Headers：服务器返回的头信息 (Content-Type)',
        requestHeaders:
          'Request Headers：浏览器发送的头信息 (User-Agent, Cookies)',
        previewTab: 'Preview: 格式化预览接口返回的数据',
        previewContent: 'Preview Content: 查看 JSON 结构',
        responseTab: 'Response: 查看原始响应数据',
        responseBody: 'Response Body: 原始文本内容',
        waterfall: '瀑布流 (Waterfall)：请求生命周期耗时分析'
      },
      application: {
        tab: '应用 (Application)：存储与缓存管理',
        storageSidebar: '存储类型：Local Storage, Cookies, IndexedDB',
        storageContent: '数据视图：查看 Key-Value 数据，支持增删改查'
      }
    }
  },
  liveDemo: {
    instruction: '👆 点击上方元素，下方 DevTools 实时联动',
    titles: {
      elementPicker: '选择页面中的元素以进行检查',
      deviceToggle: '切换设备工具栏'
    },
    tabs: {
      elements: '元素',
      console: '控制台',
      sources: '源代码',
      network: '网络',
      application: '应用'
    },
    stylesTabs: {
      styles: '样式 (Styles)',
      computed: '计算 (Computed)'
    },
    presets: {
      title: '✨ 快速预设 (Presets)',
      placeholder: '选择一种风格 (Select Preset)...',
      h1: [
        '默认样式 (Default)',
        '活力红 (Vibrant Red)',
        '科技蓝 (Tech Blue)',
        '优雅紫 (Elegant Purple)'
      ],
      button: [
        '默认样式 (Default)',
        '警告风格 (Warning)',
        '幽灵按钮 (Ghost)',
        '深黑按钮 (Dark)'
      ],
      container: ['默认卡片 (Card)', '深色模式 (Dark)', '极简白 (Minimal)']
    },
    placeholder:
      '此演示主要展示 Elements 面板的实时编辑功能。请切换回 "元素" 面板。'
  },
  consoleDemo: {
    title: 'Console (控制台)',
    inputPlaceholder: '输入 JS 代码，按回车执行...',
    shortcutsLabel: '快速尝试：',
    welcomeLog: 'Welcome to the interactive console demo!',
    infoLog: 'Try typing simple JavaScript commands below.',
    warnLog: 'This is a simulated environment, not a real JS engine.'
  },
  elementsDemo: {
    title: 'Elements (元素面板)',
    previewLabel: '页面预览 (Page Preview)',
    footerTip:
      '点击左侧 DOM 树中的元素，在右侧 Styles 面板修改样式，下方预览会实时更新。'
  },
  networkDemo: {
    title: 'Network (网络面板)',
    refreshBtn: '刷新页面',
    simulateFailBtn: '模拟请求失败',
    footerTip: '💡 点击某一行可以查看请求详情'
  },
  applicationDemo: {
    title: 'Application (应用面板)',
    clearAllBtn: 'Clear All',
    addBtn: 'Add',
    infoBars: {
      local: '持久化存储：即便关闭浏览器，数据也会保留。',
      session: '临时存储：关闭标签页后，数据会被清空。',
      cookies: 'Cookies：通常用于身份验证，会随请求发送给服务器。'
    }
  },
  sourcesDemo: {
    title: 'Sources (源代码调试)',
    footerTip: '点击行号设置断点。点击 Run 开始执行，代码将在断点处最停。'
  }
}
