export default {
  stepsDemo: {
    title: '系统设计四步法',
    subtitle: '点击每个步骤查看详细内容',
    exampleLabel: '示例（设计短链服务）：',
    steps: [
      {
        key: 'requirements',
        name: '需求澄清',
        time: '~5 分钟',
        desc: '不要急着画架构图。先搞清楚：系统要解决什么问题？用户规模多大？有哪些核心功能？有哪些非功能需求？',
        checklist: [
          '核心功能有哪些？（MVP 范围）',
          '用户规模？DAU / QPS 预估',
          '读写比例？读多写少还是写多读少？',
          '数据量级？需要存多少数据？',
          '可用性要求？几个 9？',
          '延迟要求？P99 要多少毫秒？'
        ],
        example:
          '短链服务：生成短链（写）+ 重定向（读），读写比约 100:1，日均 1 亿次重定向，短链永不过期。'
      },
      {
        key: 'estimation',
        name: '容量估算',
        time: '~5 分钟',
        desc: '用"信封背面估算"（Back-of-envelope estimation）快速计算系统需要的资源量级，为后续架构决策提供数据支撑。',
        checklist: [
          'QPS 估算：日请求量 / 86400',
          '存储估算：单条数据大小 × 总量',
          '带宽估算：QPS × 单次响应大小',
          '缓存估算：热点数据量（通常 20% 数据承载 80% 请求）',
          '峰值估算：平均 QPS × 峰值系数（通常 2-5 倍）'
        ],
        example:
          '1 亿次/天 ≈ 1200 QPS，峰值 ≈ 3600 QPS。每条短链 100 字节，5 年 = 1.8 亿条 ≈ 18GB。缓存热点 20% ≈ 3.6GB，一台 Redis 足够。'
      },
      {
        key: 'design',
        name: '架构设计',
        time: '~15 分钟',
        desc: '画出核心组件和数据流。先画最简单的版本（单机），再根据需求逐步演进（加缓存、分库分表、CDN 等）。',
        checklist: [
          'API 设计：定义核心接口的输入输出',
          '数据模型：设计核心表结构',
          '核心组件：Web 服务、数据库、缓存、消息队列',
          '数据流：请求从用户到数据库的完整路径',
          '读写分离：读路径和写路径分开考虑'
        ],
        example:
          '写路径：客户端 → API → 生成短码（Base62） → 写入 MySQL + Redis。读路径：客户端 → CDN → API → Redis 查询 → 302 重定向。'
      },
      {
        key: 'deep-dive',
        name: '深入优化',
        time: '~10 分钟',
        desc: '针对系统的瓶颈和关键问题进行深入讨论。这是展示技术深度的环节。',
        checklist: [
          '如何保证短码唯一性？（哈希冲突处理）',
          '如何应对热点？（缓存、CDN）',
          '如何水平扩展？（分库分表策略）',
          '如何保证高可用？（主备、多可用区）',
          '如何监控和告警？（关键指标）',
          '安全考虑？（防刷、恶意链接检测）'
        ],
        example:
          '短码生成：用分布式 ID 生成器（Snowflake）+ Base62 编码，避免哈希冲突。热点短链用多级缓存（本地缓存 + Redis + CDN）。'
      }
    ]
  },
  capacity: {
    title: '信封背面估算器',
    subtitle: '输入基础数据，自动计算系统容量需求',
    inputLabels: {
      dau: '日活用户（万）',
      reqPerUser: '人均请求数/天',
      responseSize: '单次响应大小（KB）',
      peakFactor: '峰值系数'
    },
    resultLabels: {
      dailyRequests: '日请求量',
      avgQps: '平均 QPS',
      peakQps: '峰值 QPS',
      dailyBandwidth: '日带宽',
      peakBandwidth: '峰值带宽'
    },
    perSecondSuffix: '/s',
    referenceTitle: '常用估算参考值',
    units: {
      hundredMillion: ' 亿',
      tenThousand: ' 万'
    },
    references: [
      { label: '1 天', value: '86,400 秒' },
      { label: '1 月', value: '≈ 250 万秒' },
      { label: 'QPS 1000', value: '≈ 1 台 8 核服务器' },
      { label: '1 亿/天', value: '≈ 1,200 QPS' },
      { label: 'MySQL 单机', value: '≈ 5,000 QPS' },
      { label: 'Redis 单机', value: '≈ 100,000 QPS' }
    ]
  }
}
