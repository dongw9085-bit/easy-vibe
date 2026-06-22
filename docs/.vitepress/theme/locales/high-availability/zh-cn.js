export default {
  availability: {
    title: '可用性等级计算器',
    subtitle: '点击查看不同"几个 9"对应的停机时间',
    labels: {
      yearly: '每年停机',
      monthly: '每月停机',
      weekly: '每周停机',
      examples: '典型场景：'
    },
    slaLevels: [
      {
        nines: '2',
        label: '2 个 9',
        percent: '99%',
        yearly: '3.65 天',
        monthly: '7.3 小时',
        weekly: '1.68 小时',
        examples: '内部工具、非关键系统'
      },
      {
        nines: '3',
        label: '3 个 9',
        percent: '99.9%',
        yearly: '8.76 小时',
        monthly: '43.8 分钟',
        weekly: '10.1 分钟',
        examples: '普通 Web 应用、企业系统'
      },
      {
        nines: '4',
        label: '4 个 9',
        percent: '99.99%',
        yearly: '52.6 分钟',
        monthly: '4.38 分钟',
        weekly: '1.01 分钟',
        examples: '电商平台、SaaS 服务'
      },
      {
        nines: '5',
        label: '5 个 9',
        percent: '99.999%',
        yearly: '5.26 分钟',
        monthly: '26.3 秒',
        weekly: '6.05 秒',
        examples: '金融交易、电信核心网'
      }
    ]
  },
  failover: {
    title: '故障转移策略对比',
    subtitle: '点击查看不同高可用架构的工作方式',
    prosTitle: '优点',
    consTitle: '缺点',
    strategies: [
      {
        key: 'active-standby',
        name: '主备模式',
        desc: '一个主节点处理所有请求，备节点待命。主节点故障时，备节点接管。',
        nodes: [
          { label: '主节点', status: '处理请求', role: 'primary' },
          { label: '备节点', status: '待命同步', role: 'standby' }
        ],
        pros: ['架构简单，易于理解', '数据一致性好保证'],
        cons: ['备节点资源浪费', '切换有短暂中断（秒级）']
      },
      {
        key: 'active-active',
        name: '主主模式',
        desc: '两个节点都处理请求，互相同步数据。任一节点故障，另一个继续服务。',
        nodes: [
          { label: '节点 A', status: '处理请求', role: 'primary' },
          { label: '节点 B', status: '处理请求', role: 'primary' }
        ],
        pros: ['资源利用率高', '无切换中断'],
        cons: ['数据冲突处理复杂', '需要解决写冲突']
      },
      {
        key: 'multi-az',
        name: '多可用区',
        desc: '在同一地域的不同数据中心部署，防止单个机房故障。',
        nodes: [
          { label: 'AZ-1 主', status: '读写', role: 'primary' },
          { label: 'AZ-2 从', status: '只读', role: 'secondary' },
          { label: 'AZ-3 从', status: '只读', role: 'secondary' }
        ],
        pros: ['机房级容灾', '读性能可扩展'],
        cons: ['跨 AZ 延迟（1-2ms）', '成本增加']
      },
      {
        key: 'multi-region',
        name: '异地多活',
        desc: '在不同地域部署完整的服务，每个地域独立处理本地流量。',
        nodes: [
          { label: '北京', status: '独立服务', role: 'primary' },
          { label: '上海', status: '独立服务', role: 'primary' },
          { label: '广州', status: '独立服务', role: 'primary' }
        ],
        pros: ['地域级容灾', '就近访问延迟低'],
        cons: ['架构极其复杂', '数据同步挑战大']
      }
    ]
  }
}
