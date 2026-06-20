export default {
  demo: {
    title: 'Backend Language Toolbox',
    subtitle: 'Choose the right tool for the job',
    introPrefix: 'Imagine you are a',
    introHighlight: 'construction worker',
    introSuffix:
      ': shovels move bricks, trowels build walls, and brushes handle finishing work. Backend languages are similar: different tools fit different scenarios. There is no best language, only the right choice for the problem.',
    scenariosTitle: '🎯 Good fits',
    prosTitle: '✅ Strengths',
    consTitle: '❌ Trade-offs',
    hint: '👆 Click any language above to view details',
    infoStrong: 'Core idea:',
    info: 'When choosing a language, first ask what problem you are solving, not which language is hottest. Startups often pick Python or Node.js for fast validation, large companies often pick Java or Go for stability, and game teams pick C++ for maximum performance.',
    languages: [
      {
        name: 'Go',
        icon: '🐹',
        metaphor: 'Electric screwdriver',
        description: 'Efficient tool for the cloud-native era',
        scenarios: [
          'Microservices, including Docker and Kubernetes ecosystems',
          'High-concurrency API services',
          'DevOps tooling',
          'Blockchain infrastructure'
        ],
        pros: [
          'Excellent concurrency with lightweight goroutines',
          'Fast compilation and simple single-binary deployment',
          'Simple syntax and gentle learning curve',
          'Low memory footprint with performance close to C++'
        ],
        cons: [
          'Ecosystem is less mature than Java or Python',
          'Error handling can be verbose',
          'Generics are still relatively young',
          'Not ideal for CPU-heavy workloads'
        ]
      },
      {
        name: 'Python',
        icon: '🐍',
        metaphor: 'Swiss army knife',
        description: 'A general-purpose tool that can do almost anything',
        scenarios: [
          'AI and machine learning with PyTorch or TensorFlow',
          'Data analysis and processing',
          'Rapid prototyping',
          'Automation scripts'
        ],
        pros: [
          'Very simple syntax and gentle learning curve',
          'Unmatched AI ecosystem',
          'Fast development with less code',
          'Rich libraries for almost every feature'
        ],
        cons: [
          'Slow runtime compared with Go or Java',
          'GIL limits multithreaded CPU work',
          'Packaging and deployment can be complex',
          'Dynamic typing can defer errors to runtime'
        ]
      },
      {
        name: 'Java',
        icon: '☕',
        metaphor: 'Heavy excavator',
        description: 'Stable choice for enterprise development',
        scenarios: [
          'Large enterprise systems such as banks, insurance, and ecommerce',
          'Android application development',
          'Big data with Hadoop and Spark',
          'Microservices with Spring Cloud'
        ],
        pros: [
          'Very mature ecosystem and frameworks',
          'Strong typing and compile-time checks',
          'Mature multithreading model',
          'Cross-platform JVM with strong optimization'
        ],
        cons: [
          'Verbose code and boilerplate',
          'Slow startup and higher memory use',
          'Steep Spring ecosystem learning curve',
          'Fast version changes can create compatibility work'
        ]
      },
      {
        name: 'Node.js',
        icon: '💚',
        metaphor: 'Universal wrench',
        description: 'Strong tool for shared frontend and backend JavaScript',
        scenarios: [
          'Full-stack Web apps with React and Node.js',
          'Realtime systems such as chat and collaboration tools',
          'Serverless on AWS Lambda or Vercel',
          'I/O-heavy APIs'
        ],
        pros: [
          'One language across frontend and backend',
          'Huge NPM ecosystem',
          'Good fit for I/O-heavy applications',
          'Event-driven non-blocking I/O'
        ],
        cons: [
          'Single thread is weak for CPU-heavy work',
          'Callback complexity, despite async/await improvements',
          'Dynamic typing can defer errors to runtime',
          'Many version compatibility issues'
        ]
      },
      {
        name: 'Rust',
        icon: '🦀',
        metaphor: 'Laser cutter',
        description: 'Memory-safe systems-level tool',
        scenarios: [
          'Systems programming such as operating systems and databases',
          'Blockchain such as Solana and Polkadot',
          'WebAssembly for high-performance frontend compute',
          'Infrastructure such as AWS Firecracker'
        ],
        pros: [
          'Memory safety enforced at compile time',
          'Performance close to C++',
          'Modern syntax with zero-cost abstractions',
          'No GC and low runtime overhead'
        ],
        cons: [
          'Very steep learning curve',
          'Long compile times',
          'Ecosystem is less mature than Go or Java',
          'Slower development speed'
        ]
      },
      {
        name: 'C++',
        icon: '⚡',
        metaphor: 'Industrial drill',
        description: 'Foundation for high-performance computing',
        scenarios: [
          'Game development with Unreal Engine',
          'High-frequency trading systems',
          'Browser engines such as Chrome V8',
          'Low-level AI framework internals'
        ],
        pros: [
          'Extreme performance',
          'Strong low-level control over memory',
          'Standard choice for game development',
          'Mature ecosystem'
        ],
        cons: [
          'Very steep learning curve',
          'Complex memory management and leak risk',
          'Lower development efficiency',
          'Poor fit for ordinary Web development'
        ]
      }
    ]
  },
  ecosystem: {
    title: 'Ecosystems',
    subtitle: 'Communities and package managers across languages',
    introPrefix: 'Imagine you are',
    introHighlight: 'shopping in supermarkets',
    introSuffix:
      ': some stores have huge variety but mixed quality, such as NPM; some have high quality but heavier cost, such as Java Maven; some are carefully curated and simple, such as Go Modules.',
    packageCount: 'Packages',
    feature: 'Feature',
    infoStrong: 'Core idea:',
    info: 'NPM for JavaScript and Node.js is the world largest package repository, with ready-made options for almost anything. PyPI dominates AI in Python. Go Modules is simple and reliable, with far less dependency chaos.',
    ecosystems: [
      {
        name: 'NPM',
        icon: '💚',
        language: 'Node.js',
        packages: '2M+',
        feature: 'Largest ecosystem'
      },
      {
        name: 'PyPI',
        icon: '🐍',
        language: 'Python',
        packages: '500K+',
        feature: 'AI leader'
      },
      {
        name: 'Maven',
        icon: '☕',
        language: 'Java',
        packages: '300K+',
        feature: 'Enterprise-grade'
      },
      {
        name: 'Go Modules',
        icon: '🐹',
        language: 'Go',
        packages: '100K+',
        feature: 'Simple and reliable'
      },
      {
        name: 'Cargo',
        icon: '🦀',
        language: 'Rust',
        packages: '100K+',
        feature: 'Modern'
      },
      {
        name: 'RubyGems',
        icon: '💎',
        language: 'Ruby',
        packages: '150K+',
        feature: 'Elegant'
      }
    ]
  },
  efficiency: {
    title: 'Developer Efficiency',
    subtitle: 'Time cost for the same task across languages',
    introPrefix: 'Imagine you are',
    introHighlight: 'renovating a house',
    introSuffix:
      ': some crews finish quickly with average quality, such as Python and Ruby; some work slowly and carefully, such as Rust and C++; some balance speed and quality, such as Go and Node.js.',
    taskLabel: 'Choose task:',
    chartTitle: 'Development time (hours)',
    infoStrong: 'Core idea:',
    info: 'Startups often pick Python or Ruby to validate ideas quickly, while larger companies often pick Java or Go to balance speed and quality. Developer efficiency includes debugging, testing, and maintenance, not just typing code.',
    tasks: [
      { id: 'rest', label: 'REST API' },
      { id: 'web', label: 'Web app' },
      { id: 'script', label: 'Data processing script' }
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
    title: 'Memory Management',
    subtitle: 'How different languages handle memory',
    introPrefix: 'Imagine you are',
    introHighlight: 'cleaning a room',
    introSuffix:
      ': some rooms have robot vacuums that clean regularly (GC), some require manual tidying, and some are designed so they cannot become messy (ownership).',
    infoStrong: 'Core idea:',
    info: 'GC languages such as Java, Go, and Python reduce developer burden but add performance overhead. Manual management in C and C++ is fastest but leak-prone. Rust ownership checks safety at compile time without runtime overhead.',
    models: [
      {
        name: 'Garbage Collection (GC)',
        icon: '♻️',
        description: 'Runtime automatically reclaims unused memory',
        languages: ['Java', 'Go', 'Python', 'Node.js']
      },
      {
        name: 'Manual management',
        icon: '🔧',
        description: 'Developers explicitly allocate and free memory',
        languages: ['C', 'C++']
      },
      {
        name: 'Ownership system',
        icon: '🔒',
        description: 'Compile-time rules guarantee memory safety',
        languages: ['Rust']
      }
    ]
  },
  syntax: {
    title: 'Syntax Comparison Lens',
    subtitle: 'Same feature, different expression',
    introPrefix: 'Imagine you are',
    introHighlight: 'writing a letter',
    introSuffix:
      ': some people prefer concise writing, such as Python and Ruby; some prefer formal rigor, such as Java and C#; some prefer direct efficiency, such as Go. Syntax reflects language design philosophy.',
    lineCount: 'Lines of code:',
    lineUnit: ' lines',
    complexity: 'Complexity:',
    infoStrong: 'Core idea:',
    info: 'Concise syntax such as Python and Ruby speeds development, while verbose syntax such as Java and C# can provide stronger type safety and maintainability. There is no best syntax, only the syntax that fits the team.',
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
        complexity: 'Minimal'
      },
      Go: {
        code: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
        filename: 'hello.go',
        complexity: 'Concise'
      },
      'Node.js': {
        code: 'console.log("Hello, World!");',
        filename: 'hello.js',
        complexity: 'Minimal'
      },
      Java: {
        code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        filename: 'HelloWorld.java',
        complexity: 'Verbose'
      },
      Rust: {
        code: 'fn main() {\n    println!("Hello, World!");\n}',
        filename: 'main.rs',
        complexity: 'Concise'
      }
    }
  },
  performance: {
    title: 'Performance Track',
    subtitle: 'Speed tests across languages',
    introPrefix: 'Imagine you are at a',
    introHighlight: 'race track',
    introSuffix:
      ': F1 cars such as C++ and Rust are extremely fast but hard to handle, family cars such as Python and Ruby are comfortable but slow, and sports cars such as Go and Java balance speed and control.',
    scenarioLabel: 'Choose track:',
    running: 'Testing...',
    run: '▶ Start test',
    resultTitle: 'Results (Requests/Second)',
    scenarios: [
      { id: 'hello', label: '🏁 Simple HTTP (Hello World)' },
      { id: 'json', label: '📦 JSON serialization' },
      { id: 'db', label: '🗄️ Database query' },
      { id: 'compute', label: '⚙️ CPU-heavy compute' }
    ],
    explanations: {
      hello:
        'Simple HTTP response test. C++ and Rust show near-hardware performance advantages. Go and Node.js also perform well thanks to optimized HTTP stacks. Python and Ruby are slower because of interpreter overhead.',
      json: 'JSON serialization test. C++ and Rust still lead, while Node.js benefits from V8 optimization. Python standard json is usable but much slower than compiled languages.',
      db: 'Simulated database query. The gap shrinks because the bottleneck is mainly database I/O, but compiled languages such as C++, Rust, and Go still have a clear advantage.',
      compute:
        'CPU-heavy Fibonacci-style compute. Node.js weakness appears: single thread plus less static optimization. Python and Ruby perform worst because they are interpreted and affected by GIL-style limits.'
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
    title: 'Concurrency Models',
    subtitle: 'How different languages handle many tasks',
    introPrefix: 'Imagine you work in a',
    introHighlight: 'restaurant',
    introSuffix:
      ': some restaurants use many waiters at the same time (threads), some use one very fast waiter (event loop), and some split work like an assembly line (coroutines).',
    concurrencyLabel: 'Concurrency',
    memoryLabel: 'Memory overhead',
    prosTitle: '✅ Strengths',
    consTitle: '❌ Trade-offs',
    infoStrong: 'Core idea:',
    info: 'Go coroutines fit high-concurrency I/O, Java thread pools fit stable enterprise systems, and Node.js event loops fit simple I/O-heavy tasks. Choose by scenario instead of blindly chasing concurrency count.',
    models: [
      {
        name: 'Goroutine',
        icon: '🐹',
        language: 'Go',
        description: 'Lightweight coroutine'
      },
      {
        name: 'Thread Pool',
        icon: '🧵',
        language: 'Java',
        description: 'Thread pool'
      },
      {
        name: 'Event Loop',
        icon: '⚡',
        language: 'Node.js',
        description: 'Event loop'
      },
      {
        name: 'Async/Await',
        icon: '🦀',
        language: 'Rust',
        description: 'Async runtime'
      }
    ],
    modelInfo: {
      Goroutine: {
        title: 'Go Goroutine',
        concurrency: 95,
        memory: 90,
        code: 'go func() { /* task */ }()',
        pros: [
          'Lightweight 2KB stack',
          'Can create millions of goroutines',
          'Simple syntax'
        ],
        cons: ['Lifecycle must be managed', 'Error handling can be verbose']
      },
      'Thread Pool': {
        title: 'Java Thread Pool',
        concurrency: 70,
        memory: 40,
        code: 'executor.submit(() -> { /* task */ });',
        pros: [
          'Mature and stable',
          'Strong exception handling',
          'Rich tooling'
        ],
        cons: [
          'Threads are heavy, often 1-2MB stacks',
          'Context switching overhead'
        ]
      },
      'Event Loop': {
        title: 'Node.js Event Loop',
        concurrency: 85,
        memory: 75,
        code: 'async function task() { /* task */ }',
        pros: [
          'Good for I/O-heavy workloads',
          'Single thread avoids lock contention',
          'Elegant syntax'
        ],
        cons: [
          'Poor for CPU-heavy work',
          'Does not use multiple cores directly'
        ]
      },
      'Async/Await': {
        title: 'Rust Async/Await',
        concurrency: 90,
        memory: 95,
        code: 'task::spawn(async move { /* task */ });',
        pros: [
          'Zero-cost abstraction',
          'Memory safe',
          'Performance close to manual management'
        ],
        cons: ['Steep learning curve', 'Requires a runtime']
      }
    }
  },
  comparison: {
    title: 'Language Balance Scale',
    subtitle: 'Compare strengths and trade-offs across dimensions',
    introPrefix: 'Imagine you are',
    introHighlight: 'shopping in a supermarket',
    introSuffix:
      ': some products are cheap but not durable, while some are high-quality but expensive. Backend language choices also require trade-offs across performance, development speed, ecosystem maturity, and more.',
    dimensionLabel: 'Choose dimension:',
    insightStrong: 'Insight:',
    infoStrong: 'Core idea:',
    info: 'There is no silver bullet. High performance often means higher development cost, as with C++ and Rust. Fast development often means performance trade-offs, as with Python and Ruby. Choose by the core need of the project, not by trying to maximize everything.',
    dimensions: [
      { key: 'performance', icon: '⚡', label: 'Performance' },
      { key: 'efficiency', icon: '🚀', label: 'Development speed' },
      { key: 'ecosystem', icon: '📦', label: 'Ecosystem maturity' },
      { key: 'learning', icon: '📚', label: 'Learning curve' },
      { key: 'concurrency', icon: '🔄', label: 'Concurrency' }
    ],
    dimensionInfo: {
      performance: {
        title: 'Performance comparison',
        unit: '(higher is faster)',
        insight:
          'C++ and Rust lead in raw performance but have very steep learning curves. Go and Java balance performance and productivity well. Python and Ruby are slower but fast to build with.'
      },
      efficiency: {
        title: 'Development speed',
        unit: '(higher is faster)',
        insight:
          'Python and Ruby are excellent for fast development and prototypes. Go and Node.js sit in the middle, balancing speed and performance. Rust and C++ are slower to develop with, mainly due to learning curve.'
      },
      ecosystem: {
        title: 'Ecosystem maturity',
        unit: '(higher means more libraries)',
        insight:
          'Java, Python, and Node.js have the most mature ecosystems. Go and Rust are younger but growing fast. C++ is mature but costly to learn. Ruby is strongest around Web development.'
      },
      learning: {
        title: 'Learning curve',
        unit: '(higher is easier)',
        insight:
          'Python, Ruby, and Go are easiest to start with. Node.js requires async concepts. Java requires object-oriented design and frameworks. Rust and C++ are steep because memory management matters.'
      },
      concurrency: {
        title: 'Concurrency',
        unit: '(higher is stronger)',
        insight:
          'Go goroutines are lightweight and simple. Rust async is powerful but complex. Java thread pools are mature and stable. Node.js event loops fit I/O-heavy systems. Python GIL limits multithreaded CPU performance.'
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
    title: 'Language Selector',
    subtitle: 'Choose the best backend language for your needs',
    introPrefix: 'Imagine you are',
    introHighlight: 'ordering food',
    introSuffix:
      ': choose Python for fast food, Java for a formal meal, and Go for a balanced healthy meal. There is no best choice, only the best fit.',
    recommended: 'Recommended language',
    reasonStrong: 'Reason:',
    reset: '🔄 Choose again',
    infoStrong: 'Core idea:',
    info: 'Do not ask which language is hottest. Ask what your project needs. Startups prioritize development speed with Python or Node.js, large companies prioritize stability and performance with Java or Go, and systems programming prioritizes safety with Rust.',
    questions: [
      {
        id: 'project_type',
        text: 'What type of project is it?',
        options: [
          { value: 'web', label: 'Web app' },
          { value: 'api', label: 'API service' },
          { value: 'ai', label: 'AI/ML' },
          { value: 'system', label: 'Systems programming' }
        ]
      },
      {
        id: 'performance',
        text: 'How high are the performance requirements?',
        options: [
          { value: 'high', label: 'High performance' },
          { value: 'medium', label: 'Medium' },
          { value: 'low', label: 'Not sensitive' }
        ]
      },
      {
        id: 'team',
        text: 'What is the team background?',
        options: [
          { value: 'frontend', label: 'Frontend team' },
          { value: 'python', label: 'Python background' },
          { value: 'java', label: 'Java background' },
          { value: 'new', label: 'New team' }
        ]
      }
    ],
    recommendations: {
      ai: {
        icon: '🐍',
        language: 'Python',
        reason:
          'Python dominates AI/ML with an unmatched ecosystem. It is slower than C++ or Rust, but most AI projects use Python.'
      },
      high: {
        icon: '🐹',
        language: 'Go',
        reason:
          'Go is a cloud-native favorite with simple syntax, native concurrency, fast compilation, and very simple single-binary deployment.'
      },
      frontend: {
        icon: '💚',
        language: 'Node.js',
        reason:
          'One language across frontend and backend reduces switching cost. NPM is huge and fits rapid MVP iteration.'
      },
      python: {
        icon: '🐍',
        language: 'Python',
        reason:
          'Use the team existing skills for fast development. Django and FastAPI are mature and fit data-driven applications.'
      },
      java: {
        icon: '☕',
        language: 'Java',
        reason:
          'A strong enterprise default. Spring Boot is mature, team familiarity is high, and maintenance cost is predictable.'
      },
      default: {
        icon: '🐹',
        language: 'Go',
        reason:
          'A high-performance cloud-native language. Simpler than Java, faster than Node.js, and more stable than Python for many backend services.'
      }
    }
  },
  scope: {
    directionCount: '{count} directions',
    headers: [
      'Application area',
      'Examples and details',
      'Typical apps / programs'
    ],
    langs: [
      {
        id: 'java',
        icon: '☕',
        name: 'Java',
        tagline:
          'Enterprise evergreen · JVM ecosystem · strong typing · big data foundation',
        dirs: [
          {
            dir: 'Enterprise Web backend',
            detail:
              'Spring Boot / Spring Cloud microservices; MyBatis/JPA data access; Spring Security authentication and authorization',
            apps: [
              'Taobao core systems',
              'Spring Boot projects',
              'Banking online systems'
            ]
          },
          {
            dir: 'Big data processing',
            detail:
              'Hadoop MapReduce batch processing; Spark streaming and batch computing; Flink real-time stream processing; Hive data warehouses',
            apps: ['Hadoop', 'Spark', 'Flink', 'Hive']
          },
          {
            dir: 'Middleware development',
            detail:
              'Message queues such as Kafka/RocketMQ; RPC frameworks such as Dubbo; registries such as Nacos/Zookeeper',
            apps: ['Kafka', 'RocketMQ', 'Dubbo', 'Nacos']
          },
          {
            dir: 'Search engines',
            detail:
              'Elasticsearch full-text search; Lucene low-level indexing; Solr enterprise search',
            apps: ['Elasticsearch', 'Lucene', 'Solr']
          },
          {
            dir: 'Financial trading systems',
            detail:
              'Low-latency matching engines; risk-control rule engines; clearing and settlement systems',
            apps: ['LMAX Exchange', 'Ant Group core systems']
          },
          {
            dir: 'Android apps',
            detail:
              'Native Android SDK development; Jetpack libraries; mixed development with Kotlin',
            apps: ['Internal enterprise apps', 'Android SDK']
          },
          {
            dir: 'Build and DevOps',
            detail:
              'Maven/Gradle builds; Jenkins CI/CD; SonarQube code quality',
            apps: ['Maven', 'Gradle', 'Jenkins']
          },
          {
            dir: 'Desktop apps',
            detail:
              'JavaFX desktop GUIs; legacy Swing systems; cross-platform tools',
            apps: ['IntelliJ IDEA', 'Eclipse', 'DBeaver']
          }
        ]
      },
      {
        id: 'nodejs',
        icon: '💚',
        name: 'Node.js',
        tagline:
          'JavaScript full stack · event-driven · largest npm ecosystem · realtime communication',
        dirs: [
          {
            dir: 'Web API backend',
            detail:
              'Express/Koa/Fastify REST APIs; NestJS enterprise framework; tRPC type safety',
            apps: ['NestJS', 'Express API', 'Strapi CMS']
          },
          {
            dir: 'Full-stack frameworks',
            detail:
              'Next.js App Router with React SSR; Nuxt 3 with Vue SSR; Remix; Astro',
            apps: ['Next.js', 'Nuxt', 'Remix', 'T3 Stack']
          },
          {
            dir: 'Realtime communication',
            detail:
              'Socket.io WebSocket; Yjs/Automerge CRDT collaborative editing; WebRTC signaling',
            apps: ['Collaborative docs', 'Realtime whiteboards', 'Chat rooms']
          },
          {
            dir: 'Serverless',
            detail:
              'Vercel Edge Functions; Cloudflare Workers; AWS Lambda Node',
            apps: ['Vercel Serverless', 'Cloudflare Worker']
          },
          {
            dir: 'CLI tools',
            detail:
              'Commander/Yargs argument parsing; Ink terminal UI; npx distribution',
            apps: ['create-react-app', 'Vercel CLI', 'eslint']
          },
          {
            dir: 'Electron desktop',
            detail:
              'Electron + React/Vue cross-platform desktop apps; electron-builder packaging',
            apps: ['VS Code', 'Slack', 'Notion', 'Discord']
          },
          {
            dir: 'Browser/editor plugins',
            detail: 'Chrome Extension MV3; VS Code Extension; Obsidian Plugin',
            apps: ['uBlock Origin', 'Immersive Translate', 'GitLens']
          },
          {
            dir: 'Bots and automation',
            detail: 'Telegraf for Telegram bots; discord.js; Slack Bolt',
            apps: ['grammY Bot', 'discord.js Bot']
          }
        ]
      },
      {
        id: 'go',
        icon: '🐹',
        name: 'Go',
        tagline:
          'Cloud-native leader · native high concurrency · single-binary distribution · DevOps foundation',
        dirs: [
          {
            dir: 'High-concurrency Web APIs',
            detail:
              'Gin/Echo/Fiber REST APIs; standard library net/http; natural concurrency with goroutines',
            apps: ['Gin API', 'Echo microservices', 'Fiber API']
          },
          {
            dir: 'Microservice architecture',
            detail:
              'gRPC + Protobuf communication; go-zero/Kratos frameworks; service discovery and tracing',
            apps: ['gRPC microservices', 'go-zero', 'Kratos']
          },
          {
            dir: 'Cloud-native infrastructure',
            detail:
              'Docker/K8s/Terraform/Prometheus/etcd are all written in Go; custom K8s Operators',
            apps: ['Docker', 'Kubernetes', 'Terraform', 'Prometheus']
          },
          {
            dir: 'CLI tools',
            detail:
              'Cobra framework; Bubble Tea TUIs; single-file cross-platform binaries',
            apps: ['kubectl', 'gh CLI', 'lazygit', 'fzf']
          },
          {
            dir: 'Network proxies and middleware',
            detail:
              'Reverse proxies/load balancing; API gateways; VPN/tunneling; DNS services',
            apps: ['Caddy', 'Traefik', 'frp', 'CoreDNS']
          },
          {
            dir: 'Distributed storage',
            detail:
              'Distributed KV stores; object storage; time-series databases',
            apps: ['etcd', 'MinIO', 'TiKV', 'InfluxDB']
          },
          {
            dir: 'Blockchain',
            detail:
              'Ethereum clients; Hyperledger Fabric; consensus algorithm implementations',
            apps: ['go-ethereum', 'Hyperledger Fabric']
          },
          {
            dir: 'Monitoring and observability',
            detail:
              'Prometheus metrics collection; Grafana Agent; log collection',
            apps: ['Prometheus', 'Grafana Agent', 'Loki']
          }
        ]
      },
      {
        id: 'rust',
        icon: '🦀',
        name: 'Rust',
        tagline:
          'Memory safety · zero-cost abstractions · modern C++ alternative · fast-growing systems language',
        dirs: [
          {
            dir: 'Tauri desktop apps',
            detail:
              'Tauri 2.0 as a smaller Electron alternative; React/Vue frontend plus Rust backend',
            apps: ['Tauri App', 'Spacedrive', 'AppFlowy']
          },
          {
            dir: 'WebAssembly modules',
            detail:
              'Rust to WASM for high-performance compute such as image/PDF/crypto; Web-side codecs',
            apps: ['Figma rendering engine', 'SWC', 'wasm-pack']
          },
          {
            dir: 'CLI tools',
            detail:
              'Modern CLIs such as ripgrep/fd/bat/exa; single-binary builds with no runtime dependencies',
            apps: ['ripgrep', 'fd', 'bat', 'starship', 'delta']
          },
          {
            dir: 'Operating system development',
            detail:
              'Redox OS microkernel; Linux 6.1+ Rust kernel modules; embedded RTOS work',
            apps: ['Redox OS', 'Linux Rust modules', 'Tock OS']
          },
          {
            dir: 'Embedded development',
            detail:
              'embedded-rust for STM32/ESP32 firmware; RTIC real-time concurrency framework',
            apps: ['embassy-rs', 'RTIC projects', 'ESP-RS']
          },
          {
            dir: 'Serverless / edge',
            detail:
              'Cloudflare Workers Rust to WASM; Fastly Compute@Edge; very fast cold starts',
            apps: ['Cloudflare Workers', 'Fermyon Spin', 'WasmEdge']
          },
          {
            dir: 'High-performance network tools',
            detail:
              'Network proxies; reverse proxies/load balancing; VPNs; tunnels; DNS',
            apps: ['Pingora', 'Linkerd2-proxy', 'Hickory DNS']
          },
          {
            dir: 'Blockchain development',
            detail:
              'Solana on-chain programs; Substrate framework for Polkadot; zero-knowledge proofs',
            apps: ['Solana', 'Substrate', 'StarkNet']
          },
          {
            dir: 'Web backend services',
            detail:
              'High-performance APIs with Actix-web / Axum; gRPC; low-latency finance/game backends',
            apps: ['Axum API', 'Actix-web', 'Tonic gRPC']
          }
        ]
      },
      {
        id: 'csharp',
        icon: '🟣',
        name: 'C#',
        tagline:
          '.NET ecosystem · enterprise-grade · Unity games · cross-platform',
        dirs: [
          {
            dir: 'Enterprise Web backend',
            detail:
              'ASP.NET Core Web API; Entity Framework ORM; SignalR realtime communication',
            apps: ['Stack Overflow', 'ASP.NET projects']
          },
          {
            dir: 'Unity game development',
            detail:
              'Unity engine C# scripting; 2D/3D games; AR/VR apps; game tooling',
            apps: ['Unity games', 'Pokemon GO', 'Beat Saber']
          },
          {
            dir: 'Windows desktop',
            detail:
              'WPF/WinUI 3 desktop GUIs; legacy WinForms systems; MAUI cross-platform apps',
            apps: ['Visual Studio', 'Paint.NET', 'Windows Terminal']
          },
          {
            dir: 'Azure cloud services',
            detail:
              'Azure Functions serverless; Azure SDK; microservices with Dapr',
            apps: ['Azure Functions', 'Dapr', 'Orleans']
          },
          {
            dir: 'Microservice architecture',
            detail:
              '.NET Aspire cloud-native apps; gRPC communication; MassTransit message bus',
            apps: ['.NET Aspire', 'MassTransit', 'CAP']
          },
          {
            dir: 'Blazor Web frontend',
            detail:
              'Blazor Server/WASM lets teams write frontend in C# instead of JavaScript',
            apps: ['Blazor projects', 'Radzen component library']
          }
        ]
      },
      {
        id: 'kotlin',
        icon: '🟠',
        name: 'Kotlin',
        tagline:
          'Modern JVM language · official Android choice · null safety · coroutines',
        dirs: [
          {
            dir: 'Android apps',
            detail:
              'Jetpack Compose declarative UI; officially recommended by Google',
            apps: ['Google apps', 'Coursera', 'Pinterest']
          },
          {
            dir: 'JVM backend services',
            detail:
              'Ktor lightweight framework; Spring Boot Kotlin support; coroutine-based async work',
            apps: ['Ktor services', 'Spring Boot Kotlin']
          },
          {
            dir: 'Cross-platform development',
            detail:
              'Kotlin Multiplatform shares business logic across iOS/Android/Web',
            apps: ['KMP projects', 'Netflix (partly)']
          },
          {
            dir: 'Server-side scripts',
            detail:
              'Kotlin Script (.kts); Gradle build scripts with build.gradle.kts',
            apps: ['Gradle Kotlin DSL', 'kscript']
          },
          {
            dir: 'Data processing',
            detail:
              'Kotlin DataFrame; interoperability with Spark/Flink Java ecosystems',
            apps: ['Kotlin DataFrame', 'Spark Kotlin']
          }
        ]
      },
      {
        id: 'scala',
        icon: '🔴',
        name: 'Scala',
        tagline:
          'JVM big-data leader · functional plus object-oriented · Spark ecosystem',
        dirs: [
          {
            dir: 'Big data processing',
            detail:
              'Spark batch/stream processing; Flink Scala API; data pipeline ETL',
            apps: ['Apache Spark', 'Apache Flink', 'Databricks']
          },
          {
            dir: 'Distributed systems',
            detail: 'Akka Actor model; Akka Cluster; Akka Streams',
            apps: ['Akka projects', 'Lightbend platform']
          },
          {
            dir: 'Financial systems',
            detail:
              'Risk-analysis engines; quantitative trading strategies; complex computation models',
            apps: ['Goldman Sachs trading systems', 'Morgan Stanley']
          },
          {
            dir: 'Web backend',
            detail:
              'Play Framework async Web apps; Scala.js frontend; http4s functional services',
            apps: ['Play Framework', 'Twitter backend', 'LinkedIn']
          },
          {
            dir: 'Messaging systems',
            detail: 'Kafka Streams processing; Kafka Connect data integration',
            apps: ['Apache Kafka', 'Kafka Streams']
          }
        ]
      },
      {
        id: 'swift',
        icon: '🍎',
        name: 'Swift',
        tagline:
          'Official Apple language · type-safe · high performance · iOS/macOS ecosystem',
        dirs: [
          {
            dir: 'iOS apps',
            detail:
              'Native development with SwiftUI / UIKit; Combine reactive programming; WidgetKit widgets',
            apps: ['All iOS apps', 'Apple ecosystem apps']
          },
          {
            dir: 'macOS apps',
            detail:
              'AppKit / SwiftUI desktop apps; menu bar tools; system extensions',
            apps: ['Xcode', 'Swift Playgrounds']
          },
          {
            dir: 'Web backend',
            detail: 'Vapor / Hummingbird frameworks; SwiftNIO networking layer',
            apps: ['Vapor API', 'Hummingbird services']
          },
          {
            dir: 'Cross-platform mobile',
            detail:
              'Swift on Server plus shared iOS model layers; experimental Swift for Android',
            apps: ['LinkedIn (partly)', 'Airbnb (partly)']
          },
          {
            dir: 'Systems programming',
            detail:
              'Interop with C/Obj-C; low-level framework development; driver/kernel extensions',
            apps: ['Apple system frameworks', 'Swift compiler']
          }
        ]
      },
      {
        id: 'ruby',
        icon: '💎',
        name: 'Ruby',
        tagline:
          'Developer happiness · Rails rapid development · metaprogramming · elegant syntax',
        dirs: [
          {
            dir: 'Web full stack',
            detail:
              'Ruby on Rails MVC; Hotwire/Turbo modern frontend; Action Cable realtime features',
            apps: ['GitHub', 'Shopify', 'Basecamp']
          },
          {
            dir: 'Rapid prototype / MVP',
            detail:
              'Rails scaffold generation; ActiveRecord ORM; convention over configuration',
            apps: ['Early Airbnb', 'Early Twitter']
          },
          {
            dir: 'API backend',
            detail:
              'Grape / Rails API mode; GraphQL Ruby; Sidekiq background jobs',
            apps: ['Stripe API', 'GitLab']
          },
          {
            dir: 'DevOps tools',
            detail:
              'Chef/Puppet configuration management; Vagrant virtualization; Homebrew package management',
            apps: ['Homebrew', 'Vagrant', 'Chef']
          },
          {
            dir: 'Scripts and automation',
            detail: 'Rake tasks; data migration scripts; text processing',
            apps: ['Fastlane', 'CocoaPods', 'Jekyll']
          }
        ]
      },
      {
        id: 'wasm',
        icon: '🔮',
        name: 'WebAssembly',
        tagline:
          'Browser binary format · multi-language compilation target · sandbox safety · near-native performance',
        dirs: [
          {
            dir: 'High-performance browser compute',
            detail:
              'Image/video processing; PDF rendering; encryption/decryption; scientific computing',
            apps: ['Figma', 'Google Earth', 'Photoshop Web']
          },
          {
            dir: 'Game engines on the Web',
            detail:
              'Unity/Godot/Unreal compiled to Web; WebGL + WASM rendering',
            apps: ['Unity WebGL', 'Godot Web', 'itch.io games']
          },
          {
            dir: 'Developer toolchains',
            detail: 'SWC/esbuild compilers; SQLite WASM; language playgrounds',
            apps: ['SWC', 'esbuild', 'SQLite WASM']
          },
          {
            dir: 'Serverless / edge',
            detail: 'Cloudflare Workers WASM; Fermyon Spin; Fastly Compute',
            apps: ['Cloudflare Workers', 'Fermyon Spin']
          },
          {
            dir: 'Plugin sandboxes',
            detail:
              'Envoy WASM Filter; Figma plugins; safe isolated execution of third-party code',
            apps: ['Envoy Proxy', 'Figma plugins', 'Extism']
          }
        ]
      }
    ]
  }
}
