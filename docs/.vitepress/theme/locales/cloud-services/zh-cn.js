export default {
  overview: {
    aliyun: '阿里云:',
    services: [
      {
        id: 'compute',
        icon: '⚙️',
        name: '计算',
        examples: 'EC2 / ECS',
        description: '提供虚拟服务器和计算能力，是云服务的基础',
        aws: 'Amazon EC2',
        aliyun: 'ECS 云服务器'
      },
      {
        id: 'storage',
        icon: '💾',
        name: '存储',
        examples: 'S3 / OSS',
        description: '对象存储服务，用于存放图片、文档等文件',
        aws: 'Amazon S3',
        aliyun: 'OSS 对象存储'
      },
      {
        id: 'network',
        icon: '🌐',
        name: '网络',
        examples: 'VPC / 专有网络',
        description: '构建隔离的虚拟网络环境',
        aws: 'Amazon VPC',
        aliyun: '专有网络 VPC'
      },
      {
        id: 'database',
        icon: '🗄️',
        name: '数据库',
        examples: 'RDS / PolarDB',
        description: '托管的关系型数据库服务',
        aws: 'Amazon RDS',
        aliyun: 'RDS 关系型数据库'
      },
      {
        id: 'security',
        icon: '🔒',
        name: '安全',
        examples: 'IAM / RAM',
        description: '身份认证和访问控制服务',
        aws: 'AWS IAM',
        aliyun: 'RAM 访问控制'
      },
      {
        id: 'middleware',
        icon: '🔧',
        name: '中间件',
        examples: 'MQ / RocketMQ',
        description: '消息队列和缓存服务',
        aws: 'Amazon MQ',
        aliyun: 'RocketMQ'
      }
    ]
  },
  computeInstance: {
    region: '地域',
    spec: '规格',
    image: '镜像',
    resultTitle: '配置结果',
    config: '配置',
    estimatedPrice: '预估价格',
    monthly: '月',
    scenario: '适用场景',
    regions: [
      { id: 'hangzhou', name: '华东-杭州' },
      { id: 'beijing', name: '华北-北京' },
      { id: 'shenzhen', name: '华南-深圳' },
      { id: 'singapore', name: '亚太-新加坡' }
    ],
    specs: [
      { id: 'small', name: '1核2G', scene: '测试环境、个人博客', price: 89 },
      {
        id: 'medium',
        name: '2核4G',
        scene: '中小型应用、开发环境',
        price: 199
      },
      { id: 'large', name: '4核8G', scene: '生产环境、中型网站', price: 399 },
      { id: 'xlarge', name: '8核16G', scene: '大型应用、数据库', price: 799 }
    ],
    images: [
      { id: 'ubuntu', name: 'Ubuntu 22.04' },
      { id: 'centos', name: 'CentOS 7.9' },
      { id: 'windows', name: 'Windows Server' },
      { id: 'alpine', name: 'Alpine Linux' }
    ]
  },
  deployWorkflow: {
    step: '步骤 {n}',
    tasksTitle: '具体操作：',
    previous: '上一步',
    next: '下一步',
    done: '完成',
    steps: [
      {
        name: '准备代码',
        time: '5分钟',
        description: '将网站代码打包成可部署的格式',
        tasks: [
          '整理 HTML/CSS/JS 文件',
          '压缩图片和静态资源',
          '检查文件路径是否正确'
        ]
      },
      {
        name: '创建存储桶',
        time: '2分钟',
        description: '在对象存储服务中创建存储空间',
        tasks: [
          '登录云控制台',
          '进入对象存储 OSS/S3',
          '点击"创建 Bucket"',
          '设置 Bucket 名称和地域'
        ]
      },
      {
        name: '上传文件',
        time: '3分钟',
        description: '将网站文件上传到存储桶',
        tasks: [
          '进入 Bucket 管理页面',
          '点击"上传文件"',
          '选择本地网站文件',
          '等待上传完成'
        ]
      },
      {
        name: '配置 CDN',
        time: '5分钟',
        description: '配置内容分发网络加速访问',
        tasks: [
          '进入 CDN 控制台',
          '添加加速域名',
          '配置源站为存储桶',
          '等待 CDN 部署完成'
        ]
      },
      {
        name: '域名绑定',
        time: '10分钟',
        description: '将自定义域名绑定到 CDN',
        tasks: [
          '添加域名解析记录',
          '配置 CNAME 到 CDN',
          '申请 SSL 证书',
          '测试 HTTPS 访问'
        ]
      }
    ]
  },
  pricingCalculator: {
    spec: '实例规格',
    runningHours: '运行时长',
    runningDays: '运行天数',
    hoursPerDay: '{hours} 小时/天',
    daysPerMonth: '{days} 天/月',
    monthlyComparison: '月度成本对比',
    perMonth: '{price}/月',
    saving: '省 {saving}%',
    specs: [
      { id: 'small', label: '1核2G (入门)' },
      { id: 'medium', label: '2核4G (标准)' },
      { id: 'large', label: '4核8G (高性能)' }
    ],
    models: {
      ondemand: '按需付费',
      reserved: '预留实例',
      spot: '抢占式'
    },
    recommendations: {
      lowUsage: '当前使用频率较低，建议选择按需付费',
      stable: '当前使用负载稳定，切换预留实例可省 {saving}%',
      reserved: '根据当前配置，预留实例更具成本优势'
    }
  },
  storageType: {
    features: '特点',
    scenarios: '适用场景',
    pricing: '计费方式',
    types: [
      {
        id: 'object',
        icon: '📦',
        name: '对象存储',
        example: 'S3 / OSS',
        features: '海量存储、高可靠、低成本',
        scenarios: '图片、视频、备份、静态网站',
        pricing: '按存储容量 + 请求次数'
      },
      {
        id: 'block',
        icon: '💽',
        name: '块存储',
        example: 'EBS / 云盘',
        features: '低延迟、高性能、可挂载',
        scenarios: '数据库、文件系统、操作系统',
        pricing: '按容量 + IOPS'
      },
      {
        id: 'file',
        icon: '📁',
        name: '文件存储',
        example: 'EFS / NAS',
        features: '共享访问、POSIX 兼容',
        scenarios: '共享文件、内容管理、HPC',
        pricing: '按容量 + 吞吐'
      },
      {
        id: 'archive',
        icon: '🗃️',
        name: '归档存储',
        example: 'Glacier / 归档',
        features: '极低成本、取回慢',
        scenarios: '冷数据、合规备份、长期归档',
        pricing: '按容量，取回额外收费'
      }
    ]
  }
}
