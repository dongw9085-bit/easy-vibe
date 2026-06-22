export default {
  comparison: {
    title: '主流异步任务框架对比',
    subtitle: '点击查看各框架详情',
    featureTitle: '核心特性：',
    usecaseTitle: '典型场景：',
    frameworks: [
      {
        name: 'Celery',
        lang: 'Python',
        rating: 5,
        desc: 'Python 生态最流行的分布式任务队列，支持多种消息中间件（RabbitMQ、Redis），功能全面且社区活跃。',
        features: [
          '定时任务',
          '任务链',
          '结果存储',
          '自动重试',
          '优先级队列',
          '任务路由'
        ],
        usecase: '数据处理管道、邮件发送、报表生成、机器学习训练任务'
      },
      {
        name: 'Sidekiq',
        lang: 'Ruby',
        rating: 5,
        desc: 'Ruby 生态的高性能后台任务处理器，基于 Redis，使用多线程模型，内存效率极高。',
        features: [
          '多线程',
          'Web UI',
          '定时任务',
          '批量处理',
          '速率限制',
          '唯一任务'
        ],
        usecase: 'Rails 应用的邮件、通知、数据导入导出'
      },
      {
        name: 'Bull',
        lang: 'Node.js',
        rating: 4,
        desc: 'Node.js 生态最成熟的任务队列库，基于 Redis，支持优先级、延迟任务、重复任务等。BullMQ 是其下一代版本。',
        features: [
          '优先级',
          '延迟任务',
          '速率限制',
          '并发控制',
          '事件驱动',
          'Dashboard'
        ],
        usecase: 'API 后台处理、文件转换、爬虫任务、通知推送'
      },
      {
        name: 'RQ',
        lang: 'Python',
        rating: 3,
        desc: '轻量级 Python 任务队列，基于 Redis，API 简洁易用。适合不需要 Celery 全部功能的中小项目。',
        features: [
          '简洁 API',
          '任务依赖',
          'Worker 管理',
          '失败重试',
          'Dashboard'
        ],
        usecase: '中小型 Web 应用的后台任务处理'
      },
      {
        name: 'Kafka Streams',
        lang: 'Java/JVM',
        rating: 4,
        desc: '基于 Kafka 的流处理框架，适合高吞吐量的实时数据处理场景，天然支持分布式和容错。',
        features: [
          '流处理',
          '精确一次语义',
          '状态存储',
          '窗口操作',
          '高吞吐',
          '容错'
        ],
        usecase: '实时数据管道、事件驱动架构、日志聚合分析'
      }
    ]
  },
  flow: {
    title: '同步 vs 异步处理对比',
    subtitle: '点击按钮观察两种模式的差异',
    tabs: { sync: '同步模式', async: '异步模式' },
    userRequest: '用户请求',
    serverProcessing: '服务端处理',
    submitOrder: '提交订单',
    processing: '处理中...',
    waitingSubmit: '等待提交',
    userWaiting: '⏳ 用户等待中... ({elapsed}s)',
    returned: '✅ 已返回 ({time}ms)',
    waitingResponse: '⏳ 等待响应...',
    completed: '✅ 完成 ({time})',
    syncSummary: '同步模式：用户等待了 {time}ms，所有任务串行完成后才返回响应',
    asyncSummary: '异步模式：用户仅等待 {time}ms，耗时任务在后台异步处理',
    tasks: [
      { name: '扣减库存', time: 50, status: 'pending' },
      { name: '创建订单', time: 100, status: 'pending' },
      { name: '发送确认邮件', time: 800, status: 'pending' },
      { name: '更新推荐系统', time: 600, status: 'pending' },
      { name: '记录审计日志', time: 300, status: 'pending' }
    ]
  },
  retry: {
    title: '任务重试与退避策略',
    subtitle: '模拟任务失败后的重试过程',
    runningLabel: '重试中...',
    startLabel: '执行任务（模拟失败）',
    attemptLabel: '第 {count} 次{kind}',
    executeKind: '执行',
    retryKind: '重试',
    waitLabel: '等待 {delay}s 后重试',
    formulaLabel: '延迟公式：',
    statuses: {
      success: '成功',
      fail: '失败',
      waiting: '等待中',
      running: '执行中'
    },
    errors: ['连接超时', '服务不可用', '网络错误'],
    strategies: [
      {
        key: 'fixed',
        label: '固定间隔',
        desc: '每次重试等待相同的时间，简单但可能造成"重试风暴"',
        formula: 'delay = 2s'
      },
      {
        key: 'exponential',
        label: '指数退避',
        desc: '每次重试等待时间翻倍，有效避免服务端过载',
        formula: 'delay = 2^n 秒 (1s, 2s, 4s, 8s...)'
      },
      {
        key: 'jitter',
        label: '指数退避+抖动',
        desc: '在指数退避基础上加随机偏移，防止多个客户端同时重试',
        formula: 'delay = 2^n + random(0, 1s)'
      }
    ]
  },
  worker: {
    title: 'Worker 工作池模型',
    subtitle: '观察任务如何被分发到不同 Worker 处理',
    buttons: { add: '添加任务', start: '开始处理', reset: '重置' },
    workerCount: 'Worker 数量：',
    queueTitle: '任务队列 ({count})',
    doneTitle: '已完成 ({count})',
    workersTitle: 'Workers',
    emptyQueue: '队列为空',
    emptyDone: '暂无',
    idle: '💤 空闲',
    completedCount: '已完成: {count}',
    taskTypes: [
      '发送邮件',
      '生成报表',
      '图片压缩',
      '数据同步',
      '推送通知',
      '日志归档',
      'PDF 导出',
      '缓存预热'
    ]
  }
}
