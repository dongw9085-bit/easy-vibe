export default {
  overview: {
    title: '前端性能优化全景图',
    subtitle: '点击下方维度，探索性能瓶颈与优化方案的对应关系',
    bottlenecksTitle: '常见瓶颈 (Bottlenecks)',
    solutionsTitle: '优化方案 (Solutions)',
    arrowText: '如何解决？',
    goalPrefix: '核心目标：',
    dimensions: [
      {
        id: 'network',
        name: '传输层 (Network)',
        icon: '📡',
        goal: '让资源更快到达浏览器 (减体积、减次数、缩短距离)',
        bottlenecks: [
          { title: '体积过大', desc: '图片、JS bundle 未压缩，下载耗时久' },
          { title: '请求过多', desc: 'HTTP/1.1 队头阻塞，资源排队下载' },
          { title: '网络延迟', desc: '服务器物理距离远，RTT 时间长' }
        ],
        solutions: [
          {
            title: '资源压缩',
            desc: 'Gzip/Brotli, 图片格式转换 (WebP)',
            tags: ['减体积']
          },
          {
            title: '懒加载',
            desc: '只加载当前视口可见的资源',
            tags: ['减体积', '减次数']
          },
          {
            title: 'CDN 加速',
            desc: '将资源分发到离用户最近的节点',
            tags: ['缩短距离']
          },
          {
            title: 'HTTP 缓存',
            desc: '利用浏览器缓存，避免重复请求',
            tags: ['减次数']
          }
        ]
      },
      {
        id: 'rendering',
        name: '渲染层 (Rendering)',
        icon: '🎨',
        goal: '让页面更快画出来 (减少重排重绘、利用 GPU)',
        bottlenecks: [
          { title: '关键路径阻塞', desc: 'CSS/JS 阻塞了 DOM 树构建' },
          { title: '频繁重排 (Reflow)', desc: '修改布局属性导致全量重新计算' },
          { title: '动画卡顿', desc: '使用 CPU 绘制动画，帧率低于 60fps' }
        ],
        solutions: [
          {
            title: '关键 CSS 内联',
            desc: '首屏样式直接写在 HTML 中',
            tags: ['关键路径']
          },
          {
            title: 'GPU 加速',
            desc: '使用 transform/opacity 触发合成层',
            tags: ['动画']
          },
          {
            title: '虚拟列表',
            desc: '只渲染可见 DOM，处理海量数据',
            tags: ['DOM 优化']
          },
          {
            title: '防抖节流',
            desc: '减少高频事件触发渲染的频率',
            tags: ['逻辑优化']
          }
        ]
      },
      {
        id: 'execution',
        name: '执行层 (Scripting)',
        icon: '⚙️',
        goal: '让主线程不卡顿 (减少长任务、并行计算)',
        bottlenecks: [
          { title: '主线程阻塞', desc: '长任务 (Long Tasks) 导致无法响应交互' },
          { title: '无效计算', desc: 'React/Vue 中不必要的组件重渲染' },
          { title: '内存泄漏', desc: '未清理的监听器导致页面越来越卡' }
        ],
        solutions: [
          {
            title: 'Web Workers',
            desc: '将复杂计算移到后台线程',
            tags: ['并行']
          },
          {
            title: '代码分割',
            desc: '按需加载 JS，减少主线程解析压力',
            tags: ['减负']
          },
          {
            title: '时间切片',
            desc: '将大任务拆分为多个小任务',
            tags: ['响应']
          },
          {
            title: '算法优化',
            desc: '降低时间复杂度 (如 O(n²) -> O(n))',
            tags: ['效率']
          }
        ]
      }
    ]
  },
  metrics: {
    subtitle: '调整加载时间，观察性能指标变化',
    loadTimeLabel: '模拟加载时间：',
    secondsUnit: '秒',
    desc: {
      fcp: '首次内容绘制',
      lcp: '最大内容绘制',
      fid: '首次输入延迟',
      cls: '累积布局偏移'
    },
    statuses: {
      good: '良好',
      needsImprovement: '需改进',
      poor: '差'
    },
    infoPrefix: '核心指标：',
    infoText:
      'FCP（首次绘制）≤1.8s，LCP（最大内容绘制）≤2.5s，FID（输入延迟）≤100ms，CLS（布局偏移）≤0.1。目标是让所有指标都达到"良好"标准。'
  },
  imageOptimization: {
    title: '图片格式对比：大小与质量的权衡',
    subtitle: '对比不同图片格式的大小和质量',
    labels: {
      fileSize: '文件大小',
      compression: '压缩率',
      quality: '质量',
      support: '浏览器支持',
      useCase: '适用场景',
      detailComparison: '详细对比',
      format: '格式',
      size: '大小',
      transparency: '透明度',
      animation: '动画',
      rating: '推荐指数'
    },
    formats: [
      {
        name: 'JPEG',
        badge: '经典',
        badgeClass: 'classic',
        size: '500 KB',
        fileSize: '500 KB',
        compression: '70%',
        quality: 85,
        support: '100%',
        useCase: '照片、复杂图像',
        sizeLevel: '中等',
        qualityLevel: '良好',
        transparency: false,
        animation: false,
        rating: 4,
        gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)'
      },
      {
        name: 'PNG',
        badge: '无损',
        badgeClass: 'lossless',
        size: '1.2 MB',
        fileSize: '1.2 MB',
        compression: '40%',
        quality: 100,
        support: '100%',
        useCase: '透明图片、图标',
        sizeLevel: '大',
        qualityLevel: '完美',
        transparency: true,
        animation: false,
        rating: 4.5,
        gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)'
      },
      {
        name: 'WebP',
        badge: '推荐',
        badgeClass: 'recommended',
        size: '250 KB',
        fileSize: '250 KB',
        compression: '85%',
        quality: 90,
        support: '95%',
        useCase: '大部分场景',
        sizeLevel: '小',
        qualityLevel: '优秀',
        transparency: true,
        animation: true,
        rating: 5,
        gradient: 'linear-gradient(135deg, #34d399, #10b981)'
      },
      {
        name: 'AVIF',
        badge: '最新',
        badgeClass: 'latest',
        size: '180 KB',
        fileSize: '180 KB',
        compression: '90%',
        quality: 95,
        support: '75%',
        useCase: '追求极致性能',
        sizeLevel: '最小',
        qualityLevel: '卓越',
        transparency: true,
        animation: false,
        rating: 4.5,
        gradient: 'linear-gradient(135deg, #f472b6, #ec4899)'
      }
    ],
    tips: [
      {
        icon: '💡',
        title: '优化建议',
        items: [
          '优先使用 WebP 格式，可减少 30-50% 的大小',
          '为旧浏览器提供 JPEG/PNG 降级方案',
          '使用 <picture> 元素实现自动降级',
          '照片使用 JPEG，图标使用 PNG 或 SVG'
        ]
      },
      {
        icon: '🔧',
        title: '工具推荐',
        items: [
          'Squoosh：Google 开源的图片压缩工具',
          'ImageOptim：Mac 平台的图片优化工具',
          'TinyPNG：在线智能压缩，支持 WebP',
          'Sharp：Node.js 图片处理库，适合自动化'
        ]
      }
    ]
  },
  virtualScrolling: {
    title: '虚拟滚动',
    subtitle: '只渲染可见区域的列表项',
    itemContent: '虚拟滚动列表项内容',
    totalLabel: '总数据量',
    renderedLabel: '实际渲染',
    memorySavedLabel: '节省内存',
    infoPrefix: '工作原理：',
    infoTextBefore: '不渲染全部',
    infoTextAfter:
      '项，只渲染视口中可见的项（加上少量缓冲）。滚动时计算应该显示哪些项，并使用绝对定位创建完整列表的错觉。性能从 O(n) 优化到 O(1)。'
  }
}
