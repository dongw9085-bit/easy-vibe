export default {
  performanceComparison: {
    scenarios: [
      { name: '无缓存', metric: '5-8 秒响应，数据库压力高', width: '95%' },
      {
        name: '有缓存',
        metric: '50 毫秒响应，大多数读取由内存承载',
        width: '24%'
      }
    ]
  },
  lifecycle: {
    title: '缓存生命周期演示',
    subtitle: '观察缓存条目从创建到淘汰的完整过程',
    storage: '缓存存储',
    capacity: '容量',
    hitRate: '命中率',
    evictions: '淘汰',
    ttl: 'TTL',
    hits: '命中',
    access: '访问',
    secondsAgo: 's前',
    operation: '操作',
    read: '读取数据',
    write: '写入新数据',
    auto: '自动模拟',
    start: '开始',
    stop: '停止',
    autoSimulation: '自动模拟',
    timeline: '事件时间线',
    legend: {
      new: '新写入',
      hit: '缓存命中',
      expiring: '即将过期',
      evicting: '淘汰中'
    },
    events: {
      evict: '淘汰 {key} (LRU)',
      write: '写入 {key}',
      emptyMiss: '缓存为空，未命中',
      hit: '命中 {key} (第{hits}次)',
      expired: '{key} 过期'
    }
  },
  problems: {
    title: '缓存的三大问题',
    subtitle: '穿透、击穿、雪崩的场景与解决方案',
    scenarioTitle: '场景模拟',
    solutionsTitle: '解决方案',
    dbPressure: '数据库压力',
    dbLoad: '数据库负载',
    simulatingAttack: '攻击中...',
    simulateAttack: '模拟恶意攻击',
    simulating: '模拟中...',
    simulateHotExpire: '模拟热点过期',
    simulateAvalanche: '模拟缓存雪崩',
    applyRandomTtl: '应用解决方案（随机 TTL）',
    comparisonTitle: '三大问题对比',
    tableHeaders: ['问题', '原因', '影响', '主要解决方案'],
    problems: [
      {
        id: 'penetration',
        name: '缓存穿透',
        icon: '🕳️',
        introTitle: '什么是缓存穿透？',
        introHtml:
          '查询一个<strong>不存在的数据</strong>（如恶意请求 id=-1），缓存没有，数据库也没有。导致每次请求都直接打到数据库。',
        flow: ['请求 id=-999', '缓存未命中', '数据库查询（不存在）'],
        solutions: [
          {
            number: '1',
            name: '布隆过滤器 (Bloom Filter)',
            desc: '在缓存前加一层过滤器，快速判断"这个 id 肯定不存在"。',
            note: '100% 判断不存在，但可能有误判'
          },
          {
            number: '2',
            name: '缓存空对象',
            desc: '查询不存在时，缓存一个 NULL 值（TTL 设置短一点，如 5 分钟）。'
          }
        ]
      },
      {
        id: 'breakdown',
        name: '缓存击穿',
        icon: '🔥',
        introTitle: '什么是缓存击穿？',
        introHtml:
          '某个<strong>热点数据</strong>过期（如微博热搜），瞬间几百万请求同时打到数据库。',
        hotData: '热点数据',
        concurrentRequests: '并发请求',
        requestPrefix: '请求',
        mutex: '互斥锁',
        mutexText: '只有一个线程能查数据库',
        statuses: {
          waiting: '等待中',
          processing: '查询数据库...',
          done: '✅ 完成',
          fromCache: '✅ 从缓存获取'
        },
        solutions: [
          {
            number: '1',
            name: '互斥锁 (Mutex Lock)',
            desc: '只允许一个线程查数据库，其他线程等待。',
            note: '优点：简单；缺点：阻塞其他请求'
          },
          {
            number: '2',
            name: '逻辑过期 (Logical Expiration)',
            desc: '不设置 TTL，而是在 value 里存一个过期时间字段。',
            note: '查询时发现"逻辑过期"，异步更新缓存，同时返回旧数据'
          }
        ]
      },
      {
        id: 'avalanche',
        name: '缓存雪崩',
        icon: '❄️',
        introTitle: '什么是缓存雪崩？',
        introHtml:
          '大量缓存<strong>同时过期</strong>（如系统重启后，所有缓存都在 00:00:00 过期），数据库瞬间被打爆。',
        expiredTogether: '同时过期！',
        solutions: [
          {
            number: '1',
            name: '随机 TTL',
            desc: '避免同时过期，TTL 加上随机值。',
            code: 'ttl = 600 + random.randint(-60, 60) # 600 ± 60 秒'
          },
          {
            number: '2',
            name: '缓存预热',
            desc: '系统启动时，主动加载热点数据到缓存。',
            note: '使用定时任务，提前刷新即将过期的热点数据'
          },
          {
            number: '3',
            name: '熔断降级',
            desc: '当数据库压力过大时，暂时停止更新缓存，直接返回降级数据。',
            note: '如"系统繁忙，请稍后再试"'
          }
        ]
      }
    ],
    comparisonRows: [
      [
        '缓存穿透',
        '查询不存在的数据',
        '数据库压力增加',
        '布隆过滤器、缓存空对象'
      ],
      ['缓存击穿', '热点数据过期', '数据库瞬间压力', '互斥锁、逻辑过期'],
      ['缓存雪崩', '大量缓存同时过期', '数据库被打爆', '随机 TTL、缓存预热']
    ]
  },
  consistency: {
    strategies: [
      {
        name: '先更新数据库，再删除缓存',
        desc: '复杂度低，不一致窗口短，适用于大多数商品类场景。'
      },
      {
        name: '延迟双删',
        desc: '删除两次缓存，降低高一致性场景中的脏读概率。'
      },
      {
        name: '避免先删缓存再更新数据库',
        desc: '并发下先删缓存可能重新加载旧数据库值。'
      }
    ]
  },
  ecommerceArchitecture: {
    title: '电商缓存架构演示',
    description:
      '展示电商系统中的多级缓存架构设计，包括商品缓存、库存缓存、用户缓存等',
    placeholder: '电商缓存架构演示组件占位符 - 待实现具体交互'
  }
}
