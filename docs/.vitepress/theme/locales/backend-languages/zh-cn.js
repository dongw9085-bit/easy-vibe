export default {
  demo: {
    title: '后端语言工具箱',
    subtitle: '选择合适的工具完成工作',
    introPrefix: '想象你是一名',
    introHighlight: '建筑工人',
    introSuffix:
      '：搬砖用铁铲，砌墙用瓦刀，装修用刷子。后端语言也一样，不同场景适合不同的"工具"。没有最好的语言，只有最合适的选择。',
    scenariosTitle: '🎯 适用场景',
    prosTitle: '✅ 优势',
    consTitle: '❌ 劣势',
    hint: '👆 点击上方任意语言，查看详细说明',
    infoStrong: '核心思想：',
    info: '选择语言时，先想清楚"我要解决什么问题"，而不是"哪个语言最火"。初创公司选 Python/Node.js 快速验证，大厂选 Java/Go 保证稳定，游戏开发选 C++ 追求极致性能。',
    languages: [
      {
        name: 'Go',
        icon: '🐹',
        metaphor: '电动螺丝刀',
        description: '云原生时代的高效工具',
        scenarios: [
          '微服务架构（Docker、K8s 都是 Go 写的）',
          '高并发 API 服务',
          'DevOps 工具开发',
          '区块链基础设施'
        ],
        pros: [
          '并发性能优秀（Goroutine 轻量级协程）',
          '编译快，部署简单（单一可执行文件）',
          '语法简洁，学习曲线平缓',
          '内存占用低，性能接近 C++'
        ],
        cons: [
          '生态不如 Java/Python 成熟',
          '错误处理繁琐（if err != nil）',
          '泛型支持较弱（Go 1.18+ 引入）',
          '不适合 CPU 密集型任务'
        ]
      },
      {
        name: 'Python',
        icon: '🐍',
        metaphor: '瑞士军刀',
        description: '什么都能干的全能工具',
        scenarios: [
          'AI/机器学习（PyTorch、TensorFlow）',
          '数据分析和处理',
          '快速原型开发',
          '自动化脚本'
        ],
        pros: [
          '语法极简，学习曲线平缓',
          'AI 生态无与伦比',
          '开发速度快，代码量少',
          '库丰富，几乎任何功能都有现成方案'
        ],
        cons: [
          '运行速度慢（比 Go/Java 慢 10-100 倍）',
          'GIL 限制多线程性能',
          '打包部署复杂（依赖地狱）',
          '动态类型，运行时错误多'
        ]
      },
      {
        name: 'Java',
        icon: '☕',
        metaphor: '重型挖掘机',
        description: '企业级开发的稳定选择',
        scenarios: [
          '大型企业系统（银行、保险、电商）',
          'Android 应用开发',
          '大数据处理（Hadoop、Spark）',
          '微服务架构（Spring Cloud）'
        ],
        pros: [
          '生态极其成熟，框架完备',
          '强类型，编译时检查',
          '多线程模型成熟',
          '跨平台，JVM 优化强大'
        ],
        cons: [
          '代码冗长，样板代码多',
          '启动慢，内存占用高',
          '学习曲线陡峭（Spring 全家桶）',
          '版本更新快，兼容性问题'
        ]
      },
      {
        name: 'Node.js',
        icon: '💚',
        metaphor: '万能扳手',
        description: '前后端统一的利器',
        scenarios: [
          '全栈 Web 应用（React + Node.js）',
          '实时系统（聊天应用、协作工具）',
          'Serverless（AWS Lambda、Vercel）',
          'I/O 密集型 API'
        ],
        pros: [
          '前后端统一语言，减少切换成本',
          'NPM 生态庞大，世界最大包仓库',
          '适合 I/O 密集型应用',
          '事件驱动，非阻塞 I/O'
        ],
        cons: [
          '单线程，CPU 密集型性能差',
          '回调地狱（虽然 async/await 有改善）',
          '动态类型，运行时错误多',
          '版本兼容性问题多'
        ]
      },
      {
        name: 'Rust',
        icon: '🦀',
        metaphor: '激光切割机',
        description: '内存安全的系统级工具',
        scenarios: [
          '系统编程（操作系统、数据库）',
          '区块链（Solana、Polkadot）',
          'WebAssembly（前端高性能计算）',
          '基础设施（AWS Firecracker）'
        ],
        pros: [
          '内存安全，编译时保证无泄漏',
          '性能接近 C++',
          '现代化语法，零成本抽象',
          '无 GC，运行时开销低'
        ],
        cons: [
          '学习曲线极其陡峭',
          '编译时间长',
          '生态不如 Go/Java 成熟',
          '开发速度慢'
        ]
      },
      {
        name: 'C++',
        icon: '⚡',
        metaphor: '工业电钻',
        description: '高性能计算的基石',
        scenarios: [
          '游戏开发（Unreal Engine）',
          '高频交易（金融系统）',
          '浏览器引擎（Chrome V8）',
          'AI 框架底层（PyTorch、TF）'
        ],
        pros: [
          '性能极致，无语言能超越',
          '底层控制力强，直接操作内存',
          '游戏开发标准',
          '生态成熟'
        ],
        cons: [
          '学习曲线极其陡峭',
          '内存管理复杂（易泄漏）',
          '开发效率低',
          '不适合 Web 开发'
        ]
      }
    ]
  },
  ecosystem: {
    title: '生态系统',
    subtitle: '不同语言的社区和包管理器',
    introPrefix: '想象你在',
    introHighlight: '逛超市',
    introSuffix:
      '：有的超市商品种类多但质量参差（NPM），有的商品质量高但价格贵（Java Maven），有的商品精挑细选（Go Modules）。',
    packageCount: '包数量',
    feature: '特点',
    infoStrong: '核心思想：',
    info: 'JavaScript/Node.js 的 NPM 是世界最大的包仓库，几乎任何功能都有现成方案。Python 的 PyPI 在 AI 领域无敌。Go 的 Go Modules 简洁可靠，没有依赖地狱。',
    ecosystems: [
      {
        name: 'NPM',
        icon: '💚',
        language: 'Node.js',
        packages: '200万+',
        feature: '最大生态'
      },
      {
        name: 'PyPI',
        icon: '🐍',
        language: 'Python',
        packages: '50万+',
        feature: 'AI 霸主'
      },
      {
        name: 'Maven',
        icon: '☕',
        language: 'Java',
        packages: '30万+',
        feature: '企业级'
      },
      {
        name: 'Go Modules',
        icon: '🐹',
        language: 'Go',
        packages: '10万+',
        feature: '简洁可靠'
      },
      {
        name: 'Cargo',
        icon: '🦀',
        language: 'Rust',
        packages: '10万+',
        feature: '现代化'
      },
      {
        name: 'RubyGems',
        icon: '💎',
        language: 'Ruby',
        packages: '15万+',
        feature: '优雅'
      }
    ]
  },
  efficiency: {
    title: '开发效率',
    subtitle: '不同语言完成相同任务的时间成本',
    introPrefix: '想象你在',
    introHighlight: '装修房子',
    introSuffix:
      '：有的装修队能快速完工但质量一般（Python、Ruby），有的慢工出细活（Rust、C++），有的速度和质量都不错（Go、Node.js）。',
    taskLabel: '选择任务：',
    chartTitle: '开发时间（小时）',
    infoStrong: '核心思想：',
    info: '初创公司选 Python/Ruby 快速验证想法，大厂选 Java/Go 平衡速度和质量。开发效率不只是写代码的速度，还包括调试、测试、维护的时间成本。',
    tasks: [
      { id: 'rest', label: 'REST API' },
      { id: 'web', label: 'Web 应用' },
      { id: 'script', label: '数据处理脚本' }
    ],
    taskData: {
      rest: [
        { name: 'Python', time: 4 },
        { name: 'Ruby', time: 3.5 },
        { name: 'Go', time: 5 },
        { name: 'Node.js', time: 4.5 },
        { name: 'Java', time: 8 },
        { name: 'Rust', time: 10 }
      ],
      web: [
        { name: 'Ruby', time: 9 },
        { name: 'Python', time: 10 },
        { name: 'Node.js', time: 11 },
        { name: 'Go', time: 12 },
        { name: 'Java', time: 20 },
        { name: 'Rust', time: 25 }
      ],
      script: [
        { name: 'Python', time: 1 },
        { name: 'Ruby', time: 1 },
        { name: 'Node.js', time: 1.5 },
        { name: 'Go', time: 2 },
        { name: 'Java', time: 4 },
        { name: 'Rust', time: 4 }
      ]
    }
  },
  memory: {
    title: '内存管理',
    subtitle: '不同语言的内存处理方式',
    introPrefix: '想象你在',
    introHighlight: '收拾房间',
    introSuffix:
      '：有的房间有自动扫地机器人定期清理（GC），有的需要自己动手整理（手动管理），有的房间设计得不会变乱（所有权系统）。',
    infoStrong: '核心思想：',
    info: 'GC 语言（Java、Go、Python）让开发者省心，但有性能开销。手动管理（C、C++）性能最好但容易内存泄漏。Rust 的所有权系统编译时保证安全，无运行时开销。',
    models: [
      {
        name: '垃圾回收 (GC)',
        icon: '♻️',
        description: '运行时自动回收不再使用的内存',
        languages: ['Java', 'Go', 'Python', 'Node.js']
      },
      {
        name: '手动管理',
        icon: '🔧',
        description: '开发者显式申请和释放内存',
        languages: ['C', 'C++']
      },
      {
        name: '所有权系统',
        icon: '🔒',
        description: '编译时通过规则保证内存安全',
        languages: ['Rust']
      }
    ]
  },
  syntax: {
    title: '语法对比镜',
    subtitle: '同样的功能，不同的表达方式',
    introPrefix: '想象你在',
    introHighlight: '写信',
    introSuffix:
      '：有人喜欢简洁明了（Python、Ruby），有人喜欢正式严谨（Java、C#），有人喜欢直接高效（Go）。不同语言的语法反映了不同的设计哲学。',
    lineCount: '代码行数：',
    lineUnit: ' 行',
    complexity: '复杂度：',
    infoStrong: '核心思想：',
    info: '简洁的语法（Python、Ruby）让开发更快，但冗长的语法（Java、C#）提供了更强的类型安全性和可维护性。没有"最好"的语法，只有最适合团队的语法。',
    languages: [
      { name: 'Python', icon: '🐍' },
      { name: 'Go', icon: '🐹' },
      { name: 'Node.js', icon: '💚' },
      { name: 'Java', icon: '☕' },
      { name: 'Rust', icon: '🦀' }
    ],
    codes: {
      Python: {
        code: 'print("Hello, World!")',
        filename: 'hello.py',
        complexity: '极简'
      },
      Go: {
        code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
        filename: 'hello.go',
        complexity: '简洁'
      },
      'Node.js': {
        code: 'console.log("Hello, World!");',
        filename: 'hello.js',
        complexity: '极简'
      },
      Java: {
        code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        filename: 'HelloWorld.java',
        complexity: '冗长'
      },
      Rust: {
        code: 'fn main() {\n    println!("Hello, World!");\n}',
        filename: 'main.rs',
        complexity: '简洁'
      }
    }
  },
  performance: {
    title: '性能赛道',
    subtitle: '不同语言的竞速测试',
    introPrefix: '想象你在',
    introHighlight: '赛车场',
    introSuffix:
      '：F1 赛车（C++、Rust）速度极快但难以驾驭，家用轿车（Python、Ruby）舒适但速度慢，跑车（Go、Java）在速度和操控之间取得平衡。',
    scenarioLabel: '选择赛道：',
    running: '测试中...',
    run: '▶ 开始测试',
    resultTitle: '测试结果（Requests/Second）',
    scenarios: [
      { id: 'hello', label: '🏁 简单 HTTP (Hello World)' },
      { id: 'json', label: '📦 JSON 序列化' },
      { id: 'db', label: '🗄️ 数据库查询' },
      { id: 'compute', label: '⚙️ CPU 密集计算' }
    ],
    explanations: {
      hello:
        '简单的 HTTP 响应测试。C++ 和 Rust 展现出接近硬件的性能优势。Go 和 Node.js 表现优秀（HTTP 栈经过高度优化）。Python 和 Ruby 由于解释器开销，性能相对较低。',
      json: 'JSON 序列化测试。C++ 和 Rust 依然领先，Node.js 的 V8 引擎优化让它的表现也不错。Python 标准库 json 模块性能尚可，但比编译型语言慢很多。',
      db: '模拟数据库查询。性能差距缩小，因为瓶颈主要在数据库 I/O。但编译型语言（C++、Rust、Go）的优势依然明显。',
      compute:
        'CPU 密集型计算（斐波那契）。Node.js 的短板暴露：单线程 + V8 优化不如静态语言。Python 和 Ruby 表现最差（解释型语言 + GIL 限制）。'
    },
    benchmarkData: {
      hello: [
        { language: 'C++', rps: 1500000 },
        { language: 'Rust', rps: 1200000 },
        { language: 'Go', rps: 1000000 },
        { language: 'Node.js', rps: 800000 },
        { language: 'Java', rps: 700000 },
        { language: 'Python', rps: 200000 },
        { language: 'Ruby', rps: 150000 }
      ],
      json: [
        { language: 'C++', rps: 800000 },
        { language: 'Rust', rps: 700000 },
        { language: 'Go', rps: 600000 },
        { language: 'Node.js', rps: 450000 },
        { language: 'Java', rps: 500000 },
        { language: 'Python', rps: 150000 },
        { language: 'Ruby', rps: 120000 }
      ],
      db: [
        { language: 'C++', rps: 300000 },
        { language: 'Rust', rps: 280000 },
        { language: 'Go', rps: 250000 },
        { language: 'Node.js', rps: 220000 },
        { language: 'Java', rps: 200000 },
        { language: 'Python', rps: 80000 },
        { language: 'Ruby', rps: 70000 }
      ],
      compute: [
        { language: 'C++', rps: 500000 },
        { language: 'Rust', rps: 480000 },
        { language: 'Go', rps: 400000 },
        { language: 'Java', rps: 350000 },
        { language: 'Node.js', rps: 50000 },
        { language: 'Python', rps: 30000 },
        { language: 'Ruby', rps: 25000 }
      ]
    }
  },
  concurrency: {
    title: '并发模型',
    subtitle: '不同语言处理多任务的方式',
    introPrefix: '想象你在',
    introHighlight: '餐厅工作',
    introSuffix:
      '：有的餐厅多个服务员同时服务（多线程），有的只有一个服务员但动作极快（事件循环），有的像流水线一样分工协作（协程）。',
    concurrencyLabel: '并发能力',
    memoryLabel: '内存开销',
    prosTitle: '✅ 优势',
    consTitle: '❌ 劣势',
    infoStrong: '核心思想：',
    info: 'Go 的协程适合高并发 I/O，Java 的线程池适合稳定的企业级应用，Node.js 的事件循环适合简单的 I/O 密集型任务。根据场景选择，而不是盲目追求"并发数"。',
    models: [
      {
        name: 'Goroutine',
        icon: '🐹',
        language: 'Go',
        description: '轻量级协程'
      },
      {
        name: 'Thread Pool',
        icon: '🧵',
        language: 'Java',
        description: '线程池'
      },
      {
        name: 'Event Loop',
        icon: '⚡',
        language: 'Node.js',
        description: '事件循环'
      },
      {
        name: 'Async/Await',
        icon: '🦀',
        language: 'Rust',
        description: '异步运行时'
      }
    ],
    modelInfo: {
      Goroutine: {
        title: 'Go Goroutine (协程)',
        concurrency: 95,
        memory: 90,
        code: 'go func() { /* 任务 */ }()',
        pros: ['轻量级（2KB 栈内存）', '可创建百万级协程', '语法简洁'],
        cons: ['需要手动管理生命周期', '错误处理繁琐']
      },
      'Thread Pool': {
        title: 'Java Thread Pool (线程池)',
        concurrency: 70,
        memory: 40,
        code: 'executor.submit(() -> { /* 任务 */ });',
        pros: ['成熟稳定', '异常处理完善', '工具丰富'],
        cons: ['线程重（1-2MB 栈）', '上下文切换开销大']
      },
      'Event Loop': {
        title: 'Node.js Event Loop (事件循环)',
        concurrency: 85,
        memory: 75,
        code: 'async function task() { /* 任务 */ }',
        pros: ['适合 I/O 密集型', '单线程无锁竞争', '语法优雅'],
        cons: ['CPU 密集型性能差', '无法利用多核']
      },
      'Async/Await': {
        title: 'Rust Async/Await (零成本抽象)',
        concurrency: 90,
        memory: 95,
        code: 'task::spawn(async move { /* 任务 */ });',
        pros: ['零成本抽象', '内存安全', '性能接近手动管理'],
        cons: ['学习曲线陡峭', '需要运行时']
      }
    }
  },
  comparison: {
    title: '语言天平',
    subtitle: '权衡不同维度的优劣势',
    introPrefix: '想象你在',
    introHighlight: '超市购物',
    introSuffix:
      '：有的商品便宜但不耐用，有的质量好但价格高。选择后端语言也一样，需要在性能、开发效率、生态成熟度等多个维度之间做权衡。',
    dimensionLabel: '选择比较维度：',
    insightStrong: '洞察分析：',
    infoStrong: '核心思想：',
    info: '没有"万能银弹"。高性能往往意味着高开发成本（C++、Rust），快速开发通常伴随性能损失（Python、Ruby）。根据项目核心诉求做取舍，而不是追求"样样都行"。',
    dimensions: [
      { key: 'performance', icon: '⚡', label: '性能' },
      { key: 'efficiency', icon: '🚀', label: '开发效率' },
      { key: 'ecosystem', icon: '📦', label: '生态成熟度' },
      { key: 'learning', icon: '📚', label: '学习曲线' },
      { key: 'concurrency', icon: '🔄', label: '并发能力' }
    ],
    dimensionInfo: {
      performance: {
        title: '性能对比',
        unit: '(分数越高越快)',
        insight:
          'C++ 和 Rust 在性能方面遥遥领先，但学习曲线极其陡峭。Go 和 Java 在性能和开发效率之间取得了很好的平衡。Python 和 Ruby 性能最弱，但开发速度最快。'
      },
      efficiency: {
        title: '开发效率',
        unit: '(分数越高越快)',
        insight:
          'Python 和 Ruby 在快速开发方面无与伦比，适合原型和初创公司。Go 和 Node.js 居中，兼顾了开发速度和性能。Rust 和 C++ 开发效率最低，主要受学习曲线影响。'
      },
      ecosystem: {
        title: '生态成熟度',
        unit: '(分数越高库越多)',
        insight:
          'Java、Python、Node.js 拥有最成熟的生态系统。Go 和 Rust 虽然年轻，但发展迅速。C++ 生态成熟但学习成本高。Ruby 生态主要集中在 Web 开发领域。'
      },
      learning: {
        title: '学习曲线',
        unit: '(分数越高越简单)',
        insight:
          'Python、Ruby、Go 最容易上手。Node.js 需要理解异步概念。Java 需要掌握面向对象和框架。Rust 和 C++ 学习曲线最陡，需要深入理解内存管理。'
      },
      concurrency: {
        title: '并发能力',
        unit: '(分数越高越强)',
        insight:
          'Go 的 Goroutine 是并发的王者，轻量且简单。Rust 的异步模型性能强大但复杂。Java 的线程池成熟稳定。Node.js 的事件循环适合 I/O 密集型。Python 的 GIL 限制了多线程性能。'
      }
    },
    languageScores: {
      performance: [
        { name: 'C++', score: 98 },
        { name: 'Rust', score: 95 },
        { name: 'Go', score: 90 },
        { name: 'Java', score: 75 },
        { name: 'Node.js', score: 70 },
        { name: 'Python', score: 30 },
        { name: 'Ruby', score: 25 }
      ],
      efficiency: [
        { name: 'Python', score: 95 },
        { name: 'Ruby', score: 90 },
        { name: 'Go', score: 85 },
        { name: 'Node.js', score: 85 },
        { name: 'Java', score: 60 },
        { name: 'Rust', score: 40 },
        { name: 'C++', score: 35 }
      ],
      ecosystem: [
        { name: 'Java', score: 95 },
        { name: 'Python', score: 95 },
        { name: 'Node.js', score: 95 },
        { name: 'C++', score: 90 },
        { name: 'Go', score: 75 },
        { name: 'Ruby', score: 70 },
        { name: 'Rust', score: 70 }
      ],
      learning: [
        { name: 'Python', score: 95 },
        { name: 'Ruby', score: 85 },
        { name: 'Go', score: 80 },
        { name: 'Node.js', score: 75 },
        { name: 'Java', score: 40 },
        { name: 'C++', score: 25 },
        { name: 'Rust', score: 20 }
      ],
      concurrency: [
        { name: 'Go', score: 95 },
        { name: 'Rust', score: 90 },
        { name: 'Node.js', score: 85 },
        { name: 'Java', score: 80 },
        { name: 'C++', score: 85 },
        { name: 'Python', score: 30 },
        { name: 'Ruby', score: 25 }
      ]
    }
  },
  selector: {
    title: '语言选择器',
    subtitle: '根据需求选择最合适的后端语言',
    introPrefix: '想象你在',
    introHighlight: '点餐',
    introSuffix:
      '：想吃快餐选 Python（快速），想吃大餐选 Java（正式），想吃健康餐选 Go（平衡）。没有"最好的"选择，只有"最合适"的选择。',
    recommended: '推荐语言',
    reasonStrong: '选择理由：',
    reset: '🔄 重新选择',
    infoStrong: '核心思想：',
    info: '不要问"哪个语言最火"，而要问"我的项目需要什么"。初创公司优先开发速度（Python/Node.js），大厂优先稳定性和性能（Java/Go），系统编程优先安全（Rust）。',
    questions: [
      {
        id: 'project_type',
        text: '项目类型是什么？',
        options: [
          { value: 'web', label: 'Web 应用' },
          { value: 'api', label: 'API 服务' },
          { value: 'ai', label: 'AI/ML' },
          { value: 'system', label: '系统编程' }
        ]
      },
      {
        id: 'performance',
        text: '性能要求如何？',
        options: [
          { value: 'high', label: '高性能' },
          { value: 'medium', label: '中等' },
          { value: 'low', label: '不敏感' }
        ]
      },
      {
        id: 'team',
        text: '团队背景？',
        options: [
          { value: 'frontend', label: '前端团队' },
          { value: 'python', label: 'Python 背景' },
          { value: 'java', label: 'Java 背景' },
          { value: 'new', label: '新团队' }
        ]
      }
    ],
    recommendations: {
      ai: {
        icon: '🐍',
        language: 'Python',
        reason:
          'AI/ML 的绝对统治地位，生态无与伦比。虽然性能不如 C++/Rust，但 95% 的 AI 项目都在用 Python。'
      },
      high: {
        icon: '🐹',
        language: 'Go',
        reason:
          '云原生时代的宠儿，简洁语法 + 原生并发 + 快速编译。单一可执行文件部署极其简单。'
      },
      frontend: {
        icon: '💚',
        language: 'Node.js',
        reason:
          '前后端统一，减少语言切换成本。NPM 生态庞大，适合快速迭代和 MVP 开发。'
      },
      python: {
        icon: '🐍',
        language: 'Python',
        reason:
          '利用团队现有技能，快速开发。Django/FastAPI 生态成熟，适合数据驱动的应用。'
      },
      java: {
        icon: '☕',
        language: 'Java',
        reason:
          '企业级开发的最佳选择。Spring Boot 生态极其成熟，团队熟悉度高，维护成本低。'
      },
      default: {
        icon: '🐹',
        language: 'Go',
        reason:
          '云原生时代的高性能语言。相比 Java 更简洁，相比 Node.js 性能更好，相比 Python 更稳定。'
      }
    }
  },
  scope: {
    directionCount: '{count} 个方向',
    headers: ['应用方向', '细分示例与说明', '典型应用 / 程序'],
    langs: [
      {
        id: 'java',
        icon: '☕',
        name: 'Java',
        tagline: '企业级常青树 · JVM 生态 · 强类型 · 大数据基石',
        dirs: [
          {
            dir: '企业级 Web 后端',
            detail:
              'Spring Boot / Spring Cloud 微服务；MyBatis/JPA 数据访问；Spring Security 认证授权',
            apps: ['淘宝核心系统', 'Spring Boot 项目', '银行网银系统']
          },
          {
            dir: '大数据处理',
            detail:
              'Hadoop MapReduce 批处理；Spark 流/批计算；Flink 实时流处理；Hive 数据仓库',
            apps: ['Hadoop', 'Spark', 'Flink', 'Hive']
          },
          {
            dir: '中间件开发',
            detail:
              '消息队列（Kafka/RocketMQ）；RPC 框架（Dubbo）；注册中心（Nacos/Zookeeper）',
            apps: ['Kafka', 'RocketMQ', 'Dubbo', 'Nacos']
          },
          {
            dir: '搜索引擎',
            detail: 'Elasticsearch 全文检索；Lucene 底层索引；Solr 企业搜索',
            apps: ['Elasticsearch', 'Lucene', 'Solr']
          },
          {
            dir: '金融交易系统',
            detail: '低延迟撮合引擎；风控规则引擎；清算结算系统',
            apps: ['LMAX Exchange', '蚂蚁金服核心']
          },
          {
            dir: 'Android 应用',
            detail: 'Android SDK 原生开发；Jetpack 组件库；与 Kotlin 混合开发',
            apps: ['企业内部 App', 'Android SDK']
          },
          {
            dir: '构建与 DevOps',
            detail: 'Maven/Gradle 构建；Jenkins CI/CD；SonarQube 代码质量',
            apps: ['Maven', 'Gradle', 'Jenkins']
          },
          {
            dir: '桌面应用',
            detail: 'JavaFX 桌面 GUI；Swing 遗留系统；跨平台工具',
            apps: ['IntelliJ IDEA', 'Eclipse', 'DBeaver']
          }
        ]
      },
      {
        id: 'nodejs',
        icon: '💚',
        name: 'Node.js',
        tagline: 'JavaScript 全栈 · 事件驱动 · npm 生态最大 · 实时通信',
        dirs: [
          {
            dir: 'Web API 后端',
            detail:
              'Express/Koa/Fastify REST API；NestJS 企业级框架；tRPC 类型安全',
            apps: ['NestJS', 'Express API', 'Strapi CMS']
          },
          {
            dir: '全栈框架',
            detail:
              'Next.js App Router（React SSR）；Nuxt 3（Vue SSR）；Remix；Astro',
            apps: ['Next.js', 'Nuxt', 'Remix', 'T3 Stack']
          },
          {
            dir: '实时通信',
            detail:
              'Socket.io WebSocket；Yjs/Automerge CRDT 协同编辑；WebRTC 信令',
            apps: ['协作文档', '实时白板', '聊天室']
          },
          {
            dir: 'Serverless',
            detail:
              'Vercel Edge Functions；Cloudflare Workers；AWS Lambda Node',
            apps: ['Vercel Serverless', 'Cloudflare Worker']
          },
          {
            dir: 'CLI 工具',
            detail: 'Commander/Yargs 参数解析；Ink 终端 UI；npx 分发',
            apps: ['create-react-app', 'Vercel CLI', 'eslint']
          },
          {
            dir: 'Electron 桌面',
            detail: 'Electron + React/Vue 跨平台桌面；electron-builder 打包',
            apps: ['VS Code', 'Slack', 'Notion', 'Discord']
          },
          {
            dir: '浏览器/编辑器插件',
            detail: 'Chrome Extension MV3；VS Code Extension；Obsidian Plugin',
            apps: ['uBlock Origin', '沉浸式翻译', 'GitLens']
          },
          {
            dir: 'Bot 与自动化',
            detail: 'Telegraf（Telegram Bot）；discord.js；Slack Bolt',
            apps: ['grammY Bot', 'discord.js Bot']
          }
        ]
      },
      {
        id: 'go',
        icon: '🐹',
        name: 'Go',
        tagline: '云原生之王 · 天然高并发 · 单二进制分发 · DevOps 基石',
        dirs: [
          {
            dir: '高并发 Web API',
            detail:
              'Gin/Echo/Fiber 框架 REST API；标准库 net/http；goroutine 天然并发',
            apps: ['Gin API', 'Echo 微服务', 'Fiber API']
          },
          {
            dir: '微服务架构',
            detail:
              'gRPC + Protobuf 通信；go-zero/Kratos 框架；服务注册/链路追踪',
            apps: ['gRPC 微服务', 'go-zero', 'Kratos']
          },
          {
            dir: '云原生基础设施',
            detail:
              'Docker/K8s/Terraform/Prometheus/etcd 全是 Go；自研 K8s Operator',
            apps: ['Docker', 'Kubernetes', 'Terraform', 'Prometheus']
          },
          {
            dir: 'CLI 命令行工具',
            detail: 'Cobra 框架；Bubble Tea TUI；编译单文件跨平台分发',
            apps: ['kubectl', 'gh CLI', 'lazygit', 'fzf']
          },
          {
            dir: '网络代理与中间件',
            detail: '反向代理/负载均衡；API 网关；VPN/内网穿透；DNS 服务',
            apps: ['Caddy', 'Traefik', 'frp', 'CoreDNS']
          },
          {
            dir: '分布式存储',
            detail: '分布式 KV 存储；对象存储；时序数据库',
            apps: ['etcd', 'MinIO', 'TiKV', 'InfluxDB']
          },
          {
            dir: '区块链',
            detail: '以太坊客户端；Hyperledger Fabric；共识算法实现',
            apps: ['go-ethereum', 'Hyperledger Fabric']
          },
          {
            dir: '监控与可观测',
            detail: 'Prometheus 指标采集；Grafana Agent；日志收集',
            apps: ['Prometheus', 'Grafana Agent', 'Loki']
          }
        ]
      },
      {
        id: 'rust',
        icon: '🦀',
        name: 'Rust',
        tagline: '内存安全 · 零成本抽象 · C++ 现代替代 · 增长最快的系统语言',
        dirs: [
          {
            dir: 'Tauri 桌面应用',
            detail:
              'Tauri 2.0 替代 Electron（体积小 10 倍+）；前端 React/Vue + 后端 Rust',
            apps: ['Tauri App', 'Spacedrive', 'AppFlowy']
          },
          {
            dir: 'WebAssembly 模块',
            detail: 'Rust → WASM 高性能计算（图像/PDF/加密）；Web 端编解码',
            apps: ['Figma 渲染引擎', 'SWC', 'wasm-pack']
          },
          {
            dir: 'CLI 命令行工具',
            detail: 'ripgrep/fd/bat/exa 等现代 CLI；编译为单二进制零依赖',
            apps: ['ripgrep', 'fd', 'bat', 'starship', 'delta']
          },
          {
            dir: '操作系统开发',
            detail: 'Redox OS 微内核；Linux 6.1+ Rust 内核模块；嵌入式 RTOS',
            apps: ['Redox OS', 'Linux Rust 模块', 'Tock OS']
          },
          {
            dir: '嵌入式开发',
            detail: 'embedded-rust 在 STM32/ESP32 固件；RTIC 实时并发框架',
            apps: ['embassy-rs', 'RTIC 项目', 'ESP-RS']
          },
          {
            dir: 'Serverless / 边缘',
            detail:
              'Cloudflare Workers Rust→WASM；Fastly Compute@Edge；冷启动极快',
            apps: ['Cloudflare Workers', 'Fermyon Spin', 'WasmEdge']
          },
          {
            dir: '高性能网络工具',
            detail: '网络代理；反向代理/负载均衡；VPN；内网穿透；DNS',
            apps: ['Pingora', 'Linkerd2-proxy', 'Hickory DNS']
          },
          {
            dir: '区块链开发',
            detail: 'Solana 链上程序；Substrate 框架（Polkadot）；零知识证明',
            apps: ['Solana', 'Substrate', 'StarkNet']
          },
          {
            dir: 'Web 后端服务',
            detail: 'Actix-web / Axum 高性能 API；gRPC；低延迟金融/游戏后端',
            apps: ['Axum API', 'Actix-web', 'Tonic gRPC']
          }
        ]
      },
      {
        id: 'csharp',
        icon: '🟣',
        name: 'C#',
        tagline: '.NET 生态 · 企业级 · Unity 游戏 · 跨平台',
        dirs: [
          {
            dir: '企业级 Web 后端',
            detail:
              'ASP.NET Core Web API；Entity Framework ORM；SignalR 实时通信',
            apps: ['Stack Overflow', 'ASP.NET 项目']
          },
          {
            dir: 'Unity 游戏开发',
            detail: 'Unity 引擎 C# 脚本；2D/3D 游戏；AR/VR 应用；游戏工具',
            apps: ['Unity 游戏', 'Pokemon GO', 'Beat Saber']
          },
          {
            dir: 'Windows 桌面',
            detail: 'WPF/WinUI 3 桌面 GUI；WinForms 遗留系统；MAUI 跨平台',
            apps: ['Visual Studio', 'Paint.NET', 'Windows Terminal']
          },
          {
            dir: 'Azure 云服务',
            detail: 'Azure Functions Serverless；Azure SDK；微服务（Dapr）',
            apps: ['Azure Functions', 'Dapr', 'Orleans']
          },
          {
            dir: '微服务架构',
            detail: '.NET Aspire 云原生；gRPC 通信；MassTransit 消息总线',
            apps: ['.NET Aspire', 'MassTransit', 'CAP']
          },
          {
            dir: 'Blazor Web 前端',
            detail: 'Blazor Server/WASM 用 C# 写前端；替代 JavaScript',
            apps: ['Blazor 项目', 'Radzen 组件库']
          }
        ]
      },
      {
        id: 'kotlin',
        icon: '🟠',
        name: 'Kotlin',
        tagline: '现代 JVM 语言 · Android 官方 · 空安全 · 协程',
        dirs: [
          {
            dir: 'Android 应用',
            detail: 'Jetpack Compose 声明式 UI；Google 官方推荐语言',
            apps: ['Google App', 'Coursera', 'Pinterest']
          },
          {
            dir: 'JVM 后端服务',
            detail: 'Ktor 轻量框架；Spring Boot Kotlin 支持；协程异步',
            apps: ['Ktor 服务', 'Spring Boot Kotlin']
          },
          {
            dir: '跨平台开发',
            detail: 'Kotlin Multiplatform（KMP）共享业务逻辑 iOS/Android/Web',
            apps: ['KMP 项目', 'Netflix (部分)']
          },
          {
            dir: '服务端脚本',
            detail: 'Kotlin Script (.kts)；Gradle 构建脚本（build.gradle.kts）',
            apps: ['Gradle Kotlin DSL', 'kscript']
          },
          {
            dir: '数据处理',
            detail: 'Kotlin DataFrame；与 Spark/Flink Java 生态互操作',
            apps: ['Kotlin DataFrame', 'Spark Kotlin']
          }
        ]
      },
      {
        id: 'scala',
        icon: '🔴',
        name: 'Scala',
        tagline: '大数据 JVM 之王 · 函数式+面向对象 · Spark 生态',
        dirs: [
          {
            dir: '大数据处理',
            detail: 'Spark 批/流计算；Flink Scala API；数据管道 ETL',
            apps: ['Apache Spark', 'Apache Flink', 'Databricks']
          },
          {
            dir: '分布式系统',
            detail: 'Akka Actor 模型；Akka Cluster 集群；Akka Streams 流处理',
            apps: ['Akka 项目', 'Lightbend 平台']
          },
          {
            dir: '金融系统',
            detail: '风险分析引擎；量化交易策略；复杂计算模型',
            apps: ['高盛交易系统', 'Morgan Stanley']
          },
          {
            dir: 'Web 后端',
            detail: 'Play Framework 异步 Web；Scala.js 前端；http4s 函数式',
            apps: ['Play Framework', 'Twitter 后端', 'LinkedIn']
          },
          {
            dir: '消息系统',
            detail: 'Kafka Streams 流处理；Kafka Connect 数据集成',
            apps: ['Apache Kafka', 'Kafka Streams']
          }
        ]
      },
      {
        id: 'swift',
        icon: '🍎',
        name: 'Swift',
        tagline: 'Apple 官方语言 · 类型安全 · 高性能 · iOS/macOS 生态',
        dirs: [
          {
            dir: 'iOS 应用',
            detail:
              'SwiftUI / UIKit 原生开发；Combine 响应式；WidgetKit 小组件',
            apps: ['所有 iOS App', 'Apple 全家桶']
          },
          {
            dir: 'macOS 应用',
            detail: 'AppKit / SwiftUI 桌面；菜单栏工具；系统扩展',
            apps: ['Xcode', 'Swift Playgrounds']
          },
          {
            dir: 'Web 后端',
            detail: 'Vapor / Hummingbird 框架；SwiftNIO 网络层',
            apps: ['Vapor API', 'Hummingbird 服务']
          },
          {
            dir: '跨平台移动',
            detail:
              'Swift on Server + iOS 共享模型层；Swift for Android（实验）',
            apps: ['LinkedIn (部分)', 'Airbnb (部分)']
          },
          {
            dir: '系统编程',
            detail: '与 C/Obj-C 互操作；底层框架开发；驱动/内核扩展',
            apps: ['Apple 系统框架', 'Swift 编译器']
          }
        ]
      },
      {
        id: 'ruby',
        icon: '💎',
        name: 'Ruby',
        tagline: '开发者幸福 · Rails 快速开发 · 元编程 · 优雅语法',
        dirs: [
          {
            dir: 'Web 全栈',
            detail:
              'Ruby on Rails MVC；Hotwire/Turbo 现代前端；Action Cable 实时',
            apps: ['GitHub', 'Shopify', 'Basecamp']
          },
          {
            dir: '快速原型 / MVP',
            detail: 'Rails scaffold 脚手架；ActiveRecord ORM；约定优于配置',
            apps: ['Airbnb 早期', 'Twitter 早期']
          },
          {
            dir: 'API 后端',
            detail: 'Grape / Rails API 模式；GraphQL Ruby；Sidekiq 后台任务',
            apps: ['Stripe API', 'GitLab']
          },
          {
            dir: 'DevOps 工具',
            detail: 'Chef/Puppet 配置管理；Vagrant 虚拟化；Homebrew 包管理',
            apps: ['Homebrew', 'Vagrant', 'Chef']
          },
          {
            dir: '脚本与自动化',
            detail: 'Rake 任务；数据迁移脚本；文本处理',
            apps: ['Fastlane', 'CocoaPods', 'Jekyll']
          }
        ]
      },
      {
        id: 'wasm',
        icon: '🔮',
        name: 'WebAssembly',
        tagline: '浏览器二进制格式 · 多语言编译目标 · 沙箱安全 · 接近原生性能',
        dirs: [
          {
            dir: '浏览器高性能计算',
            detail: '图像/视频处理；PDF 渲染；加密解密；科学计算',
            apps: ['Figma', 'Google Earth', 'Photoshop Web']
          },
          {
            dir: '游戏引擎 Web 化',
            detail: 'Unity/Godot/Unreal 编译到 Web；WebGL + WASM 渲染',
            apps: ['Unity WebGL', 'Godot Web', 'itch.io 游戏']
          },
          {
            dir: '开发工具链',
            detail: 'SWC/esbuild 编译器；SQLite WASM；语言 Playground',
            apps: ['SWC', 'esbuild', 'SQLite WASM']
          },
          {
            dir: 'Serverless / 边缘',
            detail: 'Cloudflare Workers WASM；Fermyon Spin；Fastly Compute',
            apps: ['Cloudflare Workers', 'Fermyon Spin']
          },
          {
            dir: '插件沙箱',
            detail: 'Envoy WASM Filter；Figma 插件；安全隔离执行第三方代码',
            apps: ['Envoy Proxy', 'Figma 插件', 'Extism']
          }
        ]
      }
    ]
  }
}
