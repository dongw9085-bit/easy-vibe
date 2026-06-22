export default {
  common: {
    coreIdea: '核心思想：',
    choiceAdvice: '选择建议：',
    listSeparator: '、',
    semicolonSeparator: '；'
  },
  assetFingerprint: {
    title: '资源指纹 (Hash)',
    subtitle: '长期缓存与版本控制',
    rebuild: '重新构建',
    enableHash: '启用 Hash',
    buildOutput: '构建产物',
    fileCount: '{count} 个文件',
    browserCache: '浏览器缓存',
    cacheHitMiss: '命中: {hits} | 未命中: {misses}',
    cacheHit: '缓存命中 (Hash 匹配)',
    cacheMiss: '缓存未命中 (Hash 变化)',
    cacheNew: '新文件 (无缓存)',
    cacheEffect: '缓存策略效果',
    hitRate: '缓存命中率',
    bandwidthSaved: '节省带宽',
    avgLoadTime: '平均加载时间',
    fileInfo: '文件信息',
    size: '大小:',
    type: '类型:',
    modifyTime: '修改时间:',
    hash: 'Hash:',
    dependentModules: '依赖的模块 ({count})',
    cacheStrategy: '缓存策略',
    hashEnabled: '启用 Hash',
    hashEnabledDesc:
      '文件名包含内容哈希 ({hash})。文件内容变化时，URL 会改变，浏览器会重新请求。适合配置 ',
    cacheControlImmutable: ' 长期缓存。',
    hashDisabled: '无 Hash',
    hashDisabledDesc: '文件名固定为 ',
    hashDisabledDesc2:
      '。更新文件后，需要手动刷新缓存或使用版本号查询参数。容易遇到"缓存不更新"的问题。',
    infoBoxTitle: '资源指纹的作用：',
    infoBoxContent: '通过给文件名添加内容哈希（如 main.a3f7b2c.js），可以实现',
    infoBoxContent2: '永久缓存',
    infoBoxContent3:
      '策略。只有文件内容变化时哈希才会改变，浏览器才会重新下载。这样用户每次访问都能享受极速加载，同时又能及时获取最新代码。',
    updated: '更新'
  },
  buildPipeline: {
    title: '构建流水线',
    subtitle: '从源代码到产物的完整旅程',
    introPrefix: '想象你在开一家',
    introHighlight: '面包店',
    introSuffix:
      '：面粉要过筛、搅拌、发酵、烘烤，最后才能变成香喷喷的面包。代码也一样，需要经过一道道"加工工序"，才能变成浏览器能运行的程序。',
    hint: '点击上方任意阶段，查看详细解释',
    exampleLabel: '举个例子：',
    infoBoxContent:
      '就像工厂流水线一样，代码经过一道道工序，最终变成可以在浏览器运行的产物。每个阶段各司其职，环环相扣。',
    stages: {
      lint: {
        name: '代码检查',
        simple: '找错误',
        detailDesc:
          '就像写作文前先检查有没有错别字和语法错误。代码检查工具会自动发现你的代码问题，比如变量名拼写错误、漏写了分号、使用了未定义的变量等。',
        example:
          '你写了 const mesage = "hello"，检查工具会提醒："mesage 是不是想写 message？这个变量名看起来有拼写错误。"'
      },
      transform: {
        name: '代码转换',
        simple: '翻译官',
        detailDesc:
          '就像把中文翻译成英文让外国人能看懂。你写的可能是 TypeScript 或新版 JavaScript 语法，但老浏览器"看不懂"，需要转换成它们能理解的旧版本。',
        example:
          '你写了 const name = user?.name（新版语法），转换后变成 var name = user && user.name ? user.name : undefined（老浏览器能懂的写法）'
      },
      dependency: {
        name: '依赖解析',
        simple: '理关系',
        detailDesc:
          '就像整理食谱，搞清楚做一道菜需要哪些食材。你的代码可能引用了很多其他文件，这个阶段会分析"谁依赖谁"，画出一张完整的关系图。',
        example:
          'main.js 引用了 utils.js，utils.js 又引用了 helper.js，解析后会生成一张"依赖地图"，告诉打包工具按什么顺序处理这些文件。'
      },
      bundle: {
        name: '模块打包',
        simple: '装箱子',
        detailDesc:
          '就像搬家时把零散的东西装进几个大箱子。你的项目可能有上百个文件，浏览器加载太多小文件会很慢，打包就是把它们合并成少数几个文件。',
        example:
          '原来有 100 个 .js 文件，打包后变成 2 个文件：app.js（你的代码）和 vendor.js（第三方库）。浏览器只需请求 2 次而不是 100 次。'
      },
      optimize: {
        name: '代码优化',
        simple: '瘦身',
        detailDesc:
          '就像压缩行李箱，把不必要的东西扔掉。删除代码中的空格和注释、去掉没用到代码（Tree Shaking）、压缩变量名，让文件体积更小。',
        example:
          '原来 100KB 的代码，优化后变成 30KB。比如把 function getUserName() { return name } 压缩成 function a(){return n}'
      }
    }
  },
  bundlerComparison: {
    title: '打包工具对比',
    subtitle: 'Vite vs Webpack vs Rollup',
    viewRadar: '雷达图',
    viewTable: '对比表',
    viewRecommend: '场景推荐',
    dimensionLabel: '对比维度',
    radarInfo:
      '雷达图展示了各工具在多个维度的能力分布，面积越大代表综合能力越强。',
    tableInfo: '表格详细对比了各工具在每个维度的具体得分，方便精确对比。',
    recommendInfo:
      '根据你的项目类型和团队情况，选择最适合的工具往往比选择"最好"的工具更重要。',
    dimensions: {
      speed: '构建速度',
      config: '配置难度',
      ecosystem: '生态丰富',
      hmr: '热更新速度',
      output: '产物优化',
      memory: '内存占用'
    },
    bundlers: {
      vite: { shortDesc: '下一代前端构建工具' },
      webpack: { shortDesc: '老牌强大的打包工具' },
      rollup: { shortDesc: 'JavaScript 模块打包器' }
    },
    scenarios: {
      spa: {
        name: '中小型 SPA 项目',
        shortDesc: '单页应用，快速开发',
        bestReason:
          'Vite 的极速冷启动和热更新让开发体验极佳，配置简单，是中小型项目的首选。',
        altReason:
          '如果需要大量自定义配置或依赖特定的 webpack loader，webpack 仍然是可靠的选择。'
      },
      library: {
        name: 'JavaScript 库/组件库',
        shortDesc: '打包发布 npm 包',
        bestReason:
          'Rollup 生成的代码最干净，Tree Shaking 效果最好，非常适合打包 JavaScript 库。',
        altReason:
          'Vite 使用 Rollup 进行生产构建，同时提供更好的开发体验，也是现代库开发的好选择。'
      },
      enterprise: {
        name: '大型企业级应用',
        shortDesc: '复杂业务，多人协作',
        bestReason:
          'Webpack 生态最成熟，loader 和 plugin 最丰富，能应对各种复杂场景和定制化需求。',
        altReason:
          '如果团队追求更好的开发体验，且项目不需要太多自定义构建逻辑，Vite 也是值得考虑的选项。'
      },
      ssg: {
        name: '静态站点生成 (SSG)',
        shortDesc: '文档站、博客、营销页',
        bestReason:
          'VitePress、Astro 等现代 SSG 工具都基于 Vite，开发体验好，构建速度快。',
        altReason:
          '一些轻量级 SSG 工具直接使用 Rollup，如果对产物体积要求极高可以考虑。'
      }
    },
    bestChoice: '首选推荐',
    alternative: '备选方案'
  },
  codeSplitting: {
    title: '代码分割演示',
    subtitle: '按需加载，提升首屏速度',
    routeConfig: '路由配置',
    loadAnalysis: '加载分析',
    initialLoad: '首屏加载',
    lazyLoading: '按需加载 (Lazy Loading)',
    lazyTip: '点击上方模块可模拟按需加载',
    originalTotal: '未优化总大小',
    initialLoadLabel: '首屏加载',
    savings: '节省',
    loading: '加载中...',
    cached: '已缓存',
    lazyLoad: '按需加载',
    routes: {
      home: '首页',
      about: '关于我们',
      dashboard: '数据面板',
      settings: '系统设置',
      reports: '报表中心'
    },
    infoBoxContent:
      '不是所有代码都需要在首屏加载。通过动态导入 import()，我们可以把非核心功能延迟到真正需要时再加载。这就像餐厅的点餐制——不是把所有菜一次性端上来，而是按需上菜。'
  },
  dependencyGraph: {
    title: '依赖图谱',
    subtitle: '模块依赖关系可视化',
    entryFile: '入口文件',
    module: '模块',
    dependency: '依赖关系',
    infoBoxContent:
      '就像地图一样，帮助你理解模块之间是如何相互引用的。main.js 引用了 utils、components、api，而 components 又引用了 utils——这就是依赖链。'
  },
  hotReload: {
    title: '热更新 (HMR) 演示',
    subtitle: '修改代码无需刷新页面，即时生效',
    traditionalRefresh: '传统刷新',
    hmrLabel: 'HMR 热更新',
    noHmrFooter: '页面闪烁、状态丢失',
    hmrFooter: '无刷新、状态保持',
    workflowTitle: 'HMR 工作流程',
    supportTitle: '各构建工具 HMR 支持',
    toolHeader: '构建工具',
    hmrSupportHeader: 'HMR 支持',
    speedHeader: '更新速度',
    featureHeader: '特点',
    infoBoxTitle: 'HMR 的核心原理：',
    infoBoxContent:
      '构建工具通过 WebSocket 与浏览器保持连接。当文件修改后，工具编译变更模块，通过 WebSocket 通知浏览器。浏览器中的 HMR Runtime 接收更新，替换旧模块，同时保持应用状态不变。这就像是给飞行中的飞机换引擎——不停机就能完成更新。',
    noHmrSteps: [
      '修改代码并保存',
      '手动刷新浏览器',
      '页面重新加载所有资源',
      '应用状态重置（登录丢失）'
    ],
    hmrSteps: [
      '修改代码并保存',
      '构建工具检测变更并编译',
      'WebSocket 推送更新到浏览器',
      '局部替换模块，状态保持'
    ],
    flowSteps: [
      '开发者修改代码',
      '构建工具编译',
      'WebSocket推送',
      '浏览器替换模块',
      '页面即时更新'
    ],
    hmrTools: [
      {
        name: 'Vite',
        support: '原生支持',
        speed: '极快 (<100ms)',
        feature: '基于 ESM，HMR 速度最快'
      },
      {
        name: 'Webpack',
        support: '完全支持',
        speed: '较快 (1-3s)',
        feature: '最成熟的 HMR 实现'
      },
      {
        name: 'Parcel',
        support: '自动支持',
        speed: '快 (500ms-1s)',
        feature: '零配置，自动 HMR'
      },
      {
        name: 'Rollup',
        support: '插件支持',
        speed: '开发时较慢',
        feature: '主要用于生产构建'
      }
    ]
  },
  sourceMap: {
    title: 'SourceMap 原理演示',
    subtitle: '调试压缩代码的秘密武器',
    sourceLabel: '源代码 (Source)',
    minifiedLabel: '压缩后 (Minified)',
    sourceMapContent: 'SourceMap 文件内容示例',
    tipsTitle: '使用建议',
    tipDevTitle: '开发环境',
    tipDevDesc: '开启 SourceMap，方便调试',
    tipProdTitle: '生产环境',
    tipProdDesc: '不部署 .map 文件，防止源码泄露',
    tipSeparateTitle: '单独存放',
    tipSeparateDesc: '使用 sourceMappingURL 指向独立服务器',
    infoBoxTitle: 'SourceMap 工作原理：',
    infoBoxContent:
      '压缩代码时，构建工具会记录每个字符在源代码中的位置，生成 .map 文件。浏览器调试时，通过映射关系把压缩后的代码"还原"成源代码显示。注意：生产环境不要暴露 .map 文件，防止源码泄露！',
    sourceCodeComment1: '计算两个数的和',
    sourceCodeLog1: '结果:',
    sourceCodeLog2: '总和:',
    sourceMapUrlComment: '指向映射文件',
    fieldVersion: 'SourceMap 规范版本（当前是 3）',
    fieldSources: '原始源文件列表',
    fieldNames: '压缩前后的变量名映射',
    fieldMappings: '位置映射信息（VLQ 编码）',
    fieldFile: '对应的压缩文件名'
  },
  treeShaking: {
    title: 'Tree Shaking 演示',
    subtitle: '选择你需要的功能，观察包体积变化',
    sourceLabel: 'utils.js (源代码)',
    controlLabel: '选择需要的功能',
    originalSize: '原始大小',
    afterShaking: 'Tree Shaking 后',
    savings: '节省',
    infoBoxTitle: 'Tree Shaking 原理：',
    infoBoxContent:
      '现代打包工具会分析 ES 模块的导出/导入关系，自动移除未被使用的代码。前提条件：1) 使用 ES 模块 (import/export)；2) 代码无副作用；3) 打包工具支持（Webpack、Rollup 等）'
  }
}
