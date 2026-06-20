const algorithms = [
  {
    key: 'token',
    label: '令牌桶',
    desc: '以固定速率往桶里放令牌，每个请求消耗一个令牌。桶满时多余令牌丢弃。允许一定程度的突发流量（桶里有存量令牌时）。'
  },
  {
    key: 'leaky',
    label: '漏桶',
    desc: '请求先进入桶中排队，以固定速率从桶底"漏出"处理。桶满时新请求被拒绝。输出速率恒定，完全平滑流量。'
  },
  {
    key: 'sliding',
    label: '滑动窗口',
    desc: '统计最近 N 秒内的请求数，超过阈值则拒绝。比固定窗口更精确，避免窗口边界的突发问题。'
  }
]

export default {
  algorithms,
  algorithmDemo: {
    title: '限流算法对比',
    subtitle: '选择算法，点击"发送请求"观察效果',
    buttons: {
      send: '发送请求',
      burst: '突发 10 个请求',
      reset: '重置'
    },
    stats: {
      passed: '通过',
      rejected: '拒绝',
      tokens: '剩余令牌',
      queued: '桶中排队',
      window: '窗口内请求'
    },
    logs: {
      leakyProcessed: '漏桶处理了一个排队请求',
      tokenPassed: '请求通过（剩余令牌: {tokens}）',
      tokenRejected: '令牌不足，请求被拒绝 (429)',
      leakyQueued: '请求进入排队（队列: {queue}/5）',
      leakyRejected: '桶已满，请求被拒绝 (429)',
      slidingPassed: '请求通过（窗口内: {count}/5）',
      slidingRejected: '窗口内请求数超限 (429)'
    }
  },
  visualizer: {
    title: '限流算法可视化',
    subtitle: '选择算法，点击发送请求观察限流效果',
    buttons: {
      send: '发送请求',
      burst: '模拟突发 (10个)',
      reset: '重置'
    },
    stats: {
      totalSent: '已发送',
      passed: '通过',
      rejected: '拒绝',
      tokens: '剩余令牌'
    },
    requestLabel: '请求 #{id}'
  },
  backpressure: {
    title: '背压控制 (Backpressure)',
    subtitle: '当生产速度超过消费速度时会发生什么？',
    produceRate: '生产速率：',
    consumeRate: '消费速率：',
    buttons: {
      start: '开始',
      stop: '停止'
    },
    producer: '生产者',
    consumer: '消费者',
    bufferLabel: '缓冲区 ({size}/{max})',
    strategiesTitle: '背压处理策略：',
    status: {
      overflow: '缓冲区溢出！数据丢失',
      critical: '即将溢出，需要背压控制',
      warning: '缓冲区压力较大',
      normal: '正常运行'
    },
    strategies: [
      {
        name: '丢弃策略',
        desc: '缓冲区满时直接丢弃新数据',
        example: '如：日志采集、实时监控指标'
      },
      {
        name: '阻塞策略',
        desc: '缓冲区满时让生产者等待',
        example: '如：Go channel、Java BlockingQueue'
      },
      {
        name: '采样策略',
        desc: '只处理部分数据，跳过其余',
        example: '如：高频传感器数据降采样'
      },
      {
        name: '弹性扩容',
        desc: '动态增加消费者数量',
        example: '如：K8s HPA 自动扩缩容'
      }
    ]
  }
}
