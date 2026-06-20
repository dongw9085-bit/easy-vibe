export default {
  common: {
    ideaTitle: '核心思想：'
  },
  evolutionIntro: {
    title: '后端架构进化之旅',
    subtitle: '用餐厅比喻理解 30 年架构演进',
    restaurantScene: '🍽️ 餐厅场景',
    backendMapping: '💻 后端映射',
    corePain: '⚡ 核心痛点',
    idea: '架构演进是为了解决上一个时代的痛点，但也带来了新的复杂度。没有最好的架构，只有最适合的架构。',
    stages: [
      {
        era: '1990s',
        icon: '🏠',
        name: '家庭小作坊',
        arch: '物理服务器',
        restaurant: '家庭小厨房',
        scenario:
          '一位厨师在一间小厨房里，亲自去菜市场买菜、洗菜、切菜、炒菜、上菜。客人多了就忙不过来，只能让客人排队等。',
        mapping:
          '一台物理服务器，处理所有请求：接收HTTP请求、读取文件、执行CGI脚本、返回响应。CPU和内存有限，请求多了只能排队。',
        pains: [
          '单机性能瓶颈：客人太多时，厨师根本忙不过来',
          '垂直扩展成本高：买更贵的机器就像换更大的厨房，治标不治本',
          '单点故障：厨师生病了，整个餐馆必须关门'
        ]
      },
      {
        era: '2000s',
        icon: '🏢',
        name: '大型中央厨房',
        arch: '单体架构',
        restaurant: '连锁餐厅中央厨房',
        scenario:
          '建立了一个大型中央厨房，分工明确：有人专门洗菜、有人专门切菜、有人专门炒菜。但所有人都在一个大空间里工作，互相依赖。',
        mapping:
          '单体应用架构：所有功能模块（用户、订单、支付）都在同一个进程中运行，共享同一个数据库，部署在一个大应用服务器上。',
        pains: [
          '牵一发而动全身：切菜师傅切到手，整个厨房都要停下来',
          '技术债务累积：老员工（老代码）越来越多，新人很难接手',
          '部署风险高：更新一个菜品（功能）可能影响整个菜单（系统）'
        ]
      },
      {
        era: '2010s',
        icon: '🏭',
        name: '专业化分工',
        arch: '微服务架构',
        restaurant: '餐饮集团多厨房',
        scenario:
          '把中央厨房拆分成多个专业厨房：一个专门做中餐、一个专门做西餐、一个专门做甜点。每个厨房独立运营，通过标准化流程协作。',
        mapping:
          '微服务架构：每个业务功能（用户服务、订单服务、支付服务）都是独立的进程，有自己的数据库，通过HTTP/gRPC通信。',
        pains: [
          '分布式复杂度：协调多个厨房比管理一个厨房难得多',
          '网络依赖：中餐厨房需要西餐厨房的原料时，可能网络延迟或故障',
          '运维成本激增：需要更多人手（运维工程师）来管理这么多厨房'
        ]
      },
      {
        era: '2020s+',
        icon: '🍽️',
        name: '外卖平台',
        arch: 'Serverless',
        restaurant: '外卖/云厨房',
        scenario:
          '你不再自己开厨房，而是在外卖平台上注册。有订单时，平台调度附近的厨房为你制作食物。你只管设计菜品和推广，不用关心厨房在哪、有多少厨师。',
        mapping:
          'Serverless架构：开发者只写业务代码（函数），不关心服务器在哪、有多少台、怎么扩容。云平台自动调度资源，按实际执行时间付费。',
        pains: [
          '冷启动延迟：第一家店接单时可能需要热身（冷启动），客人要等',
          '平台依赖：完全依赖外卖平台（云厂商），迁移成本高',
          '资源限制：不能做太复杂的菜品（函数有时长和内存限制）'
        ]
      }
    ]
  },
  architectureComparison: {
    title: '架构演进对比',
    subtitle: '四个时代的核心架构特征',
    features: '🏗️ 架构特征',
    pros: '✅ 优点',
    cons: '❌ 痛点',
    techs: '🔧 典型技术',
    idea: '架构演进是为了解决上一个时代的痛点,但也带来了新的复杂度。',
    defaultEra: '单体',
    eras: [
      { name: '物理机', icon: '🖥️', year: '1990s', tag: '单机' },
      { name: '单体', icon: '🏢', year: '2000s', tag: '集中' },
      { name: '微服务', icon: '🏭', year: '2010s', tag: '分布' },
      { name: 'Serverless', icon: '☁️', year: '2020s+', tag: '无服' }
    ],
    details: {
      物理机: {
        features: [
          '单机部署，无冗余',
          'FTP 手动上传代码',
          '垂直扩展（买更强的机器）',
          '无服务治理概念'
        ],
        pros: [
          '部署简单，无需复杂配置',
          '单机性能好，无网络延迟',
          '易于调试和排查问题'
        ],
        cons: [
          '单点故障，服务不可用',
          '扩展困难，只能垂直扩容',
          '手动运维，效率低下'
        ],
        techs: ['Apache/Nginx', 'CGI/Perl', 'FTP/SFTP', '物理服务器']
      },
      单体: {
        features: [
          '单一代码库，统一技术栈',
          '共享数据库，事务一致性',
          '统一部署，整体发布',
          '进程内通信，无网络开销'
        ],
        pros: [
          '开发简单，易于上手',
          '测试方便，本地启动即可',
          '部署简单，一个包搞定'
        ],
        cons: [
          '代码耦合，牵一发而动全身',
          '技术栈单一，难以引入新技术',
          '团队扩张后协作困难'
        ],
        techs: [
          'Spring/Django/Rails',
          'Tomcat/Gunicorn',
          'MySQL/PostgreSQL',
          'Maven/Gradle'
        ]
      },
      微服务: {
        features: [
          '服务拆分，独立部署',
          '技术栈异构，自由选择',
          '数据库独立，最终一致性',
          '服务间网络通信'
        ],
        pros: [
          '服务独立，团队自治',
          '技术栈灵活，选择最适合的',
          '故障隔离，不影响全局'
        ],
        cons: ['分布式复杂度，调试困难', '网络延迟，性能损耗', '运维成本激增'],
        techs: [
          'Docker/Kubernetes',
          'gRPC/REST',
          'Kafka/RabbitMQ',
          'Prometheus/Grafana'
        ]
      },
      Serverless: {
        features: [
          '函数粒度，事件驱动',
          '自动扩缩容，按需计费',
          '无服务器管理，平台托管',
          '冷启动，有延迟'
        ],
        pros: [
          '无需运维，专注业务',
          '自动扩展，应对流量高峰',
          '按调用付费，成本低'
        ],
        cons: ['冷启动延迟', '平台锁定，迁移困难', '调试困难，本地难复现'],
        techs: [
          'AWS Lambda',
          'Vercel/Cloudflare',
          'Supabase/Firebase',
          'EventBridge'
        ]
      }
    }
  },
  techStackTimeline: {
    title: '技术栈演进时间线',
    subtitle: '每个时代的主流技术栈',
    eras: [
      {
        icon: '🖥️',
        name: '物理机时代',
        period: '1990s',
        categories: [
          { name: 'Web服务器', techs: ['Apache', 'Nginx', 'IIS'] },
          { name: '后端语言', techs: ['Perl', 'PHP', 'ASP'] },
          { name: '数据库', techs: ['MySQL', 'PostgreSQL', 'Oracle'] },
          { name: '部署方式', techs: ['FTP', 'SSH', '手动'] }
        ]
      },
      {
        icon: '🏢',
        name: '单体架构',
        period: '2000s',
        categories: [
          { name: '后端框架', techs: ['Spring', 'Django', 'Rails', 'Laravel'] },
          { name: '前端技术', techs: ['jQuery', 'Bootstrap', 'JSP'] },
          { name: '数据库', techs: ['MySQL', 'Redis', 'MongoDB'] },
          { name: '构建工具', techs: ['Maven', 'Gradle', 'Ant'] }
        ]
      },
      {
        icon: '🏭',
        name: '微服务',
        period: '2010s',
        categories: [
          { name: '容器化', techs: ['Docker', 'Kubernetes', 'Helm'] },
          { name: '服务框架', techs: ['Spring Cloud', 'gRPC', 'Dubbo'] },
          { name: '数据存储', techs: ['Redis', 'MongoDB', 'Kafka', 'ES'] },
          { name: '可观测', techs: ['Prometheus', 'Grafana', 'Jaeger'] }
        ]
      },
      {
        icon: '☁️',
        name: 'Serverless',
        period: '2020s+',
        categories: [
          { name: '函数计算', techs: ['Lambda', 'Vercel', 'Cloudflare'] },
          { name: 'BaaS', techs: ['Supabase', 'Firebase', 'Auth0'] },
          { name: '前端框架', techs: ['Next.js', 'Nuxt', 'SvelteKit'] },
          { name: '数据库', techs: ['PlanetScale', 'Neon', 'Turso'] }
        ]
      }
    ]
  },
  containerDocker: {
    title: 'Docker 容器化演示',
    subtitle: '理解容器如何让应用"一次打包，到处运行"',
    traditional: '传统部署',
    docker: 'Docker 容器',
    appA: '应用 A',
    appB: '应用 B',
    conflict: '依赖冲突!',
    depsV1: '依赖库 v1.0',
    depsShortV1: '依赖 v1.0',
    depsShortV2: '依赖 v2.0',
    os: '操作系统',
    hostOs: '宿主机操作系统',
    hardware: '物理服务器',
    idea: '容器化让应用"一次构建，到处运行"，解决了环境一致性和快速部署的问题。',
    benefits: [
      {
        icon: '📦',
        title: '环境一致性',
        desc: '开发、测试、生产环境完全一致，告别"在我机器上能跑"'
      },
      {
        icon: '🚀',
        title: '快速部署',
        desc: '秒级启动，镜像分发，滚动更新无停机'
      },
      {
        icon: '📊',
        title: '资源隔离',
        desc: 'CPU/内存限制，互不干扰，一台机器跑多个应用'
      },
      { icon: '🔄', title: '版本管理', desc: '镜像版本化，随时回滚，灰度发布' }
    ]
  },
  physicalServer: {
    title: '物理服务器时代演示',
    subtitle: '观察早期 CGI 服务器的处理瓶颈',
    client: '👤 用户浏览器',
    server: '🖥️ CGI 服务器',
    processing: '处理中...',
    waiting: '等待请求',
    send: '🚀 发起请求',
    processName: 'CGI Process #{id}',
    idea: '进程级隔离带来了稳定性，但也带来了巨大的性能开销。'
  },
  monolith: {
    title: '单体架构演示',
    subtitle: '观察单体应用如何处理请求',
    process: '单体应用进程',
    sharedDb: '共享数据库',
    normalRequest: '正常请求',
    simulateCrash: '模拟模块故障',
    reset: '重置',
    healthy: '健康',
    crashed: '已崩溃',
    affected: '受影响',
    targetCrashModule: '订单模块',
    idea: '所有模块在同一个进程中运行，内存共享，但一个模块崩溃可能导致整个进程挂掉（雪崩效应）。',
    modules: [
      { name: '用户模块', icon: '👤' },
      { name: '订单模块', icon: '📦' },
      { name: '支付模块', icon: '💳' },
      { name: '库存模块', icon: '🏭' }
    ]
  },
  microservices: {
    title: '🏭 微服务架构演示',
    subtitle: '观察多个独立服务如何协作，以及服务间通信方式',
    port: '端口:',
    database: '数据库:',
    dependencies: '依赖:',
    none: '无',
    flowTitle: '服务间通信链路',
    startFlow: '开始流程',
    reset: '重置',
    healthy: '健康',
    services: [
      {
        name: '用户服务',
        icon: '👤',
        port: '8081',
        database: 'MySQL',
        dependencies: []
      },
      {
        name: '订单服务',
        icon: '📦',
        port: '8082',
        database: 'PostgreSQL',
        dependencies: ['用户服务']
      },
      {
        name: '支付服务',
        icon: '💳',
        port: '8083',
        database: 'MongoDB',
        dependencies: ['用户服务', '订单服务']
      },
      {
        name: '库存服务',
        icon: '🏭',
        port: '8084',
        database: 'Redis',
        dependencies: ['订单服务']
      }
    ],
    flowSteps: [
      { service: '用户服务', action: '验证用户身份' },
      { service: '订单服务', action: '创建订单记录' },
      { service: '库存服务', action: '检查库存数量' },
      { service: '支付服务', action: '处理支付请求' },
      { service: '订单服务', action: '更新订单状态' }
    ]
  },
  serverless: {
    title: '⚡ Serverless 架构演示',
    subtitle: '观察 Serverless 如何按需执行函数、自动扩缩容',
    invocations: '调用: {count}',
    average: '平均: {duration}ms',
    scalingTitle: '自动扩缩容状态',
    concurrent: '并发请求:',
    runningInstances: '运行实例:',
    coldStarts: '冷启动:',
    simulatorTitle: '流量模拟器',
    explanationTitle: '💡 Serverless 核心特性',
    states: { cold: '冷状态', warming: '预热中', running: '运行中' },
    functions: [
      { name: '用户登录', icon: '🔐' },
      { name: '订单处理', icon: '📦' },
      { name: '图片处理', icon: '🖼️' },
      { name: '数据备份', icon: '💾' }
    ],
    trafficPatterns: [
      { name: '正常流量', icon: '📊', desc: '平稳的请求速率' },
      { name: '突发流量', icon: '🚀', desc: '突然的流量激增' },
      { name: '潮汐流量', icon: '🌊', desc: '周期性的高低峰' }
    ],
    explanation: [
      { term: '按需执行', desc: '函数只在被调用时运行，不调用不产生费用' },
      { term: '自动扩缩容', desc: '从 0 到数千实例自动扩展，无需人工干预' },
      { term: '冷启动', desc: '长时间未调用后首次调用会有延迟，需要预热策略' },
      {
        term: '事件驱动',
        desc: '响应 HTTP 请求、消息队列、定时任务等多种事件源'
      }
    ]
  },
  kubernetes: {
    title: '☸️ Kubernetes 编排演示',
    subtitle: '观察 K8s 如何自动调度容器、实现负载均衡和故障恢复',
    controlPlaneTitle: '控制平面 (Control Plane)',
    workerNodesTitle: '工作节点 (Worker Nodes)',
    memory: '内存:',
    podCount: '运行 Pod: {count} 个',
    scheduling: '调度中...',
    schedule: '🚀 模拟 Pod 调度',
    scaling: '扩容中...',
    scale: '📈 自动扩容',
    failing: '故障注入中...',
    fail: '💥 模拟节点故障',
    reset: '🔄 重置集群',
    explanationTitle: '💡 Kubernetes 核心概念',
    statuses: { active: '运行中', pending: '准备中', failed: '故障' },
    controlPlane: [
      { name: 'API Server', icon: '🌐', desc: '集群的统一入口' },
      { name: 'etcd', icon: '🗄️', desc: '分布式键值存储' },
      { name: 'Scheduler', icon: '📋', desc: 'Pod 调度器' },
      { name: 'Controller', icon: '🎮', desc: '控制器管理器' }
    ],
    logs: {
      startSchedule: '开始调度新 Pod...',
      evaluate: 'Scheduler: 评估节点资源...',
      scheduled: 'Pod 已调度到 {node}',
      noNode: '警告: 没有合适的节点可调度',
      highLoad: '检测到高负载，开始水平扩容...',
      joined: '{node} 已启动并加入集群',
      maxNodes: '已达到最大节点数',
      lost: '警告: {node} 失去连接!',
      reschedule: 'Controller: 开始重新调度 Pod...',
      migrated: 'Pod 已成功迁移到 {node}',
      reset: '集群已重置'
    },
    explanation: [
      { term: 'Pod', desc: '最小的部署单元，一个 Pod 可以包含一个或多个容器' },
      { term: 'Deployment', desc: '管理 Pod 的副本数量和滚动更新' },
      { term: 'Service', desc: '提供稳定的网络访问入口，实现负载均衡' },
      {
        term: 'Scheduler',
        desc: '根据资源需求和策略，自动将 Pod 调度到合适的节点'
      }
    ]
  }
}
