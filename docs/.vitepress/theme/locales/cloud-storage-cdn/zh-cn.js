export default {
  common: {
    coreIdea: '核心思想：',
    placeholderSuffix: '演示组件占位符 - 待实现具体交互'
  },
  objectStorage: {
    title: '对象存储架构',
    subtitle: '理解 Bucket、Object 和 Metadata 的关系',
    accountName: '云账户 (Account)',
    accountDesc: '管理权限、计费、全局配置',
    bucketsTitle: '存储桶 (Buckets)',
    bucketsDesc: '命名空间隔离，权限控制',
    objectCount: '{count} 对象',
    objectsTitle: '对象 (Objects)',
    objectsDesc: '文件数据 + 元数据',
    objectsPlaceholder: '点击上方存储桶查看对象列表',
    metadataTitle: '元数据 (Metadata)',
    metadataDesc: '系统元数据 + 自定义元数据',
    systemMetadata: '系统元数据 (System)',
    customMetadata: '自定义元数据 (Custom)',
    metadataPlaceholder: '点击左侧对象查看详细元数据',
    idea: '对象存储采用三层架构：Account（账户）→ Bucket（桶）→ Object（对象），每个对象都附带丰富的元数据用于检索和管理。理解这个层次结构是掌握对象存储的第一步。',
    buckets: [
      { name: 'myapp-images-prod', icon: '🖼️', objects: 12543, size: '256 GB' },
      { name: 'myapp-videos-prod', icon: '🎬', objects: 892, size: '1.2 TB' },
      { name: 'myapp-backups', icon: '💾', objects: 3456, size: '500 GB' }
    ],
    objectsData: {
      'myapp-images-prod': [
        {
          key: 'avatars/user123.jpg',
          type: 'image/jpeg',
          size: '156 KB',
          lastModified: '2024-01-15'
        },
        {
          key: 'products/shoes-01.png',
          type: 'image/png',
          size: '2.3 MB',
          lastModified: '2024-01-14'
        },
        {
          key: 'banners/sale-2024.webp',
          type: 'image/webp',
          size: '456 KB',
          lastModified: '2024-01-13'
        }
      ],
      'myapp-videos-prod': [
        {
          key: 'tutorials/intro.mp4',
          type: 'video/mp4',
          size: '156 MB',
          lastModified: '2024-01-15'
        },
        {
          key: 'ads/promo-2024.mp4',
          type: 'video/mp4',
          size: '234 MB',
          lastModified: '2024-01-14'
        }
      ],
      'myapp-backups': [
        {
          key: 'db/daily-20240115.sql.gz',
          type: 'application/gzip',
          size: '456 MB',
          lastModified: '2024-01-15'
        },
        {
          key: 'logs/access-20240114.log.gz',
          type: 'application/gzip',
          size: '123 MB',
          lastModified: '2024-01-14'
        }
      ]
    },
    metadataData: {
      'avatars/user123.jpg': {
        system: {
          'Content-Type': 'image/jpeg',
          'Content-Length': '159745',
          'Last-Modified': '2024-01-15T08:30:00Z',
          ETag: '"abc123def456"',
          'x-oss-storage-class': 'Standard'
        },
        custom: {
          'x-oss-meta-owner': 'user123',
          'x-oss-meta-usage': 'avatar',
          'x-oss-meta-uploaded-by': 'web-upload'
        }
      },
      'products/shoes-01.png': {
        system: {
          'Content-Type': 'image/png',
          'Content-Length': '2412555',
          'Last-Modified': '2024-01-14T16:20:00Z',
          ETag: '"xyz789ghi012"',
          'x-oss-storage-class': 'Standard'
        },
        custom: {
          'x-oss-meta-product-id': 'shoes-01',
          'x-oss-meta-category': 'footwear',
          'x-oss-meta-price': '199.99'
        }
      }
    }
  },
  cdnAcceleration: {
    title: 'CDN 加速原理',
    subtitle: '边缘节点、源站与回源的协同工作',
    usersTitle: '全球用户',
    edgeTitle: 'CDN 边缘节点 (Edge Nodes)',
    cacheLabel: '缓存',
    hitLabel: '命中',
    originTitle: '源站 (Origin Server)',
    originName: '对象存储源站',
    healthy: '健康',
    backToSourceRequest: '⬆️ 回源请求',
    backToSourceSteps: [
      '1. CDN 节点未命中缓存',
      '2. 向源站发起回源请求',
      '3. 源站返回文件内容',
      '4. CDN 缓存并响应用户'
    ],
    controlsTitle: '🎮 模拟演示',
    hitButton: '模拟缓存命中',
    missButton: '模拟缓存未命中（回源）',
    reset: '重置',
    statsTitle: '📊 访问统计',
    stats: {
      cacheHit: '缓存命中',
      cacheMiss: '缓存未命中',
      hitRate: '命中率',
      avgResponse: '平均响应'
    },
    cacheHitText: '✅ 缓存命中',
    cacheMissText: '❌ 未命中',
    backToSourceText: '📥 回源中...',
    idea: 'CDN就像在全球开了分店——用户访问最近的分店拿资源，不用都跑总店来，速度自然快。',
    users: [
      { id: 'user1', name: '北京用户', icon: '👤', x: 75, y: 35 },
      { id: 'user2', name: '上海用户', icon: '👤', x: 80, y: 55 },
      { id: 'user3', name: '广州用户', icon: '👤', x: 70, y: 75 },
      { id: 'user4', name: '成都用户', icon: '👤', x: 50, y: 60 },
      { id: 'user5', name: '海外用户', icon: '👤', x: 90, y: 25 }
    ],
    edgeNodes: [
      {
        id: 'node1',
        name: '北京节点',
        icon: '🌐',
        location: '华北',
        cacheSize: '2.5 TB',
        hitRate: 92
      },
      {
        id: 'node2',
        name: '上海节点',
        icon: '🌐',
        location: '华东',
        cacheSize: '3.1 TB',
        hitRate: 89
      },
      {
        id: 'node3',
        name: '广州节点',
        icon: '🌐',
        location: '华南',
        cacheSize: '1.8 TB',
        hitRate: 87
      },
      {
        id: 'node4',
        name: '成都节点',
        icon: '🌐',
        location: '西南',
        cacheSize: '1.2 TB',
        hitRate: 85
      }
    ]
  },
  upload: {
    title: '文件上传流程',
    subtitle: '理解直传、分片、断点续传三种方式',
    suitable: '适合: {value}',
    flowTitles: {
      direct: '🚀 直传流程',
      multipart: '🔪 分片上传流程',
      resume: '💾 断点续传流程'
    },
    methods: [
      {
        id: 'direct',
        name: '直传',
        icon: '🚀',
        description: '小文件一次性上传到对象存储',
        suitable: '< 100MB'
      },
      {
        id: 'multipart',
        name: '分片上传',
        icon: '🔪',
        description: '大文件切分多片并行上传',
        suitable: '> 100MB'
      },
      {
        id: 'resume',
        name: '断点续传',
        icon: '💾',
        description: '网络中断后从断点继续上传',
        suitable: '任何大小'
      }
    ],
    flows: {
      direct: [
        { title: '用户选择文件', detail: '浏览器选择 5MB 图片文件' },
        { title: '申请上传凭证', detail: '前端 → 后端 → STS 临时凭证' },
        {
          title: '直传到对象存储',
          detail: '浏览器 → OSS/COS（5MB 一次性上传）'
        },
        { title: '上传完成', detail: '返回 URL，前端通知后端保存记录' }
      ],
      multipart: [
        { title: '文件分片', detail: '500MB 视频 → 50个 10MB 分片' },
        { title: '初始化分片上传', detail: '获取 uploadId（上传会话 ID）' },
        {
          title: '并行上传分片',
          detail: '3 个并发，每片 10MB',
          slots: ['分片 1', '分片 2', '分片 3']
        },
        { title: '合并分片', detail: '服务端合并所有分片为完整文件' }
      ],
      resume: [
        {
          title: '开始上传 1GB 视频',
          detail: '已上传 6 个分片（60MB），正在上传第 7 个'
        },
        {
          title: '网络中断！',
          detail: 'WiFi 切换到 4G，上传中断，第 7 个分片上传失败'
        },
        {
          title: '查询已上传分片',
          detail: '恢复网络后，查询服务端已保存的分片列表'
        },
        {
          title: '断点续传成功！',
          detail: '从第 7 个分片继续上传，无需重传前 6 个分片'
        }
      ]
    },
    uploadedChunks: '已上传分片: 6/100',
    resumeUploaded: ['✅ 分片 1-6', '已上传'],
    resumePending: ['⏳ 分片 7-100', '待上传'],
    successItems: [
      ['💾 节省流量', '60MB'],
      ['⏱️ 节省时间', '~6s'],
      ['🎯 续传进度', '6% → 100%']
    ],
    idea: '大文件分片上传提高可靠性，网络中断可以从断点续传，避免重复上传整个文件。'
  },
  placeholders: {
    edge: {
      title: '边缘节点分布演示',
      subtitle: '展示CDN边缘节点在全球的分布情况和调度策略',
      placeholder: '边缘节点分布演示组件占位符 - 待实现具体交互'
    },
    cache: {
      title: '缓存策略演示',
      subtitle: '展示CDN和对象存储的缓存策略配置，包括缓存时间、刷新机制等',
      placeholder: '缓存策略演示组件占位符 - 待实现具体交互',
      idea: '缓存策略平衡命中率和新鲜度，TTL 设置太短会导致频繁回源，太长会导致内容过期。'
    },
    traffic: {
      title: '流量调度',
      subtitle: '理解 CDN 智能调度和负载均衡',
      placeholder: '流量调度演示组件占位符 - 待实现具体交互',
      idea: '智能调度通过就近访问、负载均衡和故障切换，实现全球加速和高可用性。'
    },
    https: {
      title: 'HTTPS 优化',
      subtitle: '理解 CDN 的 HTTPS 协议和证书管理',
      placeholder: 'HTTPS 优化演示组件占位符 - 待实现具体交互',
      idea: 'HTTPS 通过 TLS/SSL 加密数据传输，防止中间人攻击和数据泄露，是现代 Web 应用的安全基础。'
    },
    analytics: {
      title: '访问分析',
      subtitle: '理解 CDN 访问统计和日志分析',
      placeholder: '访问分析演示组件占位符 - 待实现具体交互',
      idea: '通过日志分析，可以了解谁在何时访问了什么资源，帮助发现异常访问模式和安全事件。'
    }
  }
}
