export default {
  storageTypes: {
    title: '存储类型对比',
    subtitle: '点击查看不同存储方式的特点',
    labels: {
      access: '访问方式',
      scenario: '典型场景',
      products: '代表产品',
      scalability: '扩展性'
    },
    types: [
      {
        key: 'block',
        icon: '🧱',
        name: '块存储',
        desc: '将数据切分为固定大小的"块"，像硬盘一样提供原始存储空间。操作系统可以在上面创建文件系统。性能最高，但不能直接通过网络共享。',
        access: 'iSCSI / FC 协议，挂载为磁盘设备',
        scenario: '数据库存储、虚拟机磁盘',
        products: 'AWS EBS、阿里云云盘、Ceph RBD',
        scalability: '单卷有容量上限，需要手动扩容'
      },
      {
        key: 'file',
        icon: '📁',
        name: '文件存储',
        desc: '提供传统的文件系统接口（目录 + 文件），支持多台服务器同时挂载和读写。就像一个网络共享文件夹。',
        access: 'NFS / SMB / CIFS 协议，挂载为目录',
        scenario: '共享配置文件、CMS 媒体文件、日志收集',
        products: 'AWS EFS、阿里云 NAS、NFS Server',
        scalability: '容量可弹性伸缩，但性能受限于协议开销'
      },
      {
        key: 'object',
        icon: '☁️',
        name: '对象存储',
        desc: '通过 HTTP API 存取文件（对象），每个对象有唯一 Key。扁平结构，无目录层级。容量几乎无限，成本最低，是互联网应用的首选。',
        access: 'HTTP/HTTPS RESTful API（PUT/GET/DELETE）',
        scenario: '图片、视频、备份、静态网站托管、数据湖',
        products: 'AWS S3、阿里云 OSS、MinIO、Cloudflare R2',
        scalability: '近乎无限扩展，自动分布式存储'
      }
    ]
  },
  uploadFlow: {
    title: '文件上传方式对比',
    subtitle: '点击切换查看两种上传方式的流程差异',
    tabs: {
      proxy: '服务端中转',
      direct: '客户端直传'
    },
    playingLabel: '演示中...',
    playLabel: '播放流程',
    verdicts: {
      proxy:
        '⚠️ 服务端中转：文件经过你的服务器，占用带宽和内存，大文件容易超时',
      direct:
        '✅ 客户端直传：文件直接上传到 OSS，服务器只负责签发凭证，高效且省资源'
    },
    steps: {
      proxy: [
        {
          title: '客户端 → 服务器',
          desc: '用户选择文件，上传到你的后端服务器',
          note: '大文件会占用服务器带宽和内存'
        },
        {
          title: '服务器接收文件',
          desc: '后端将文件暂存到本地磁盘或内存',
          note: '可能触发 Nginx 的 body size 限制'
        },
        {
          title: '服务器 → OSS',
          desc: '后端再将文件转发到对象存储',
          note: '文件传输了两次，效率低'
        },
        { title: 'OSS 返回 URL', desc: '对象存储返回文件的访问地址', note: '' },
        {
          title: '服务器 → 客户端',
          desc: '后端将文件 URL 返回给前端',
          note: ''
        }
      ],
      direct: [
        {
          title: '客户端 → 服务器',
          desc: '前端请求一个临时上传凭证（Pre-signed URL）',
          note: '只传少量 JSON 数据，毫秒级'
        },
        {
          title: '服务器签发凭证',
          desc: '后端用 OSS SDK 生成带签名的临时上传 URL',
          note: '凭证有效期通常 5-15 分钟'
        },
        {
          title: '客户端 → OSS',
          desc: '前端直接将文件上传到对象存储',
          note: '文件不经过你的服务器，节省带宽'
        },
        {
          title: 'OSS 回调通知',
          desc: '上传完成后 OSS 回调你的服务器确认',
          note: '服务器记录文件元信息到数据库'
        }
      ]
    }
  },
  cdn: {
    title: 'CDN 加速原理',
    subtitle: '对比有无 CDN 时的文件访问路径',
    tabs: {
      off: '无 CDN',
      on: '有 CDN'
    },
    nodes: {
      user: '北京用户',
      cdn: '北京 CDN 节点',
      cdnDetail: '缓存命中',
      origin: '源站（美西 S3）'
    },
    cacheMiss: '缓存未命中时回源',
    metrics: [
      {
        label: '首字节时间 (TTFB)',
        enabledValue: '~30ms',
        disabledValue: '~200ms',
        enabledWidth: '15%',
        disabledWidth: '100%'
      },
      {
        label: '下载 1MB 图片',
        enabledValue: '~50ms',
        disabledValue: '~800ms',
        enabledWidth: '20%',
        disabledWidth: '100%'
      }
    ]
  }
}
