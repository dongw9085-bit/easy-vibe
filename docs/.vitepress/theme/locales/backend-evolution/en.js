export default {
  common: {
    ideaTitle: 'Core idea:'
  },
  evolutionIntro: {
    title: 'Backend Architecture Evolution',
    subtitle:
      'Understand 30 years of architecture evolution through a restaurant analogy',
    restaurantScene: '🍽️ Restaurant scenario',
    backendMapping: '💻 Backend mapping',
    corePain: '⚡ Core pain points',
    idea: 'Architecture evolves to solve the pain points of the previous era, while introducing new complexity. There is no best architecture, only the architecture that best fits the context.',
    stages: [
      {
        era: '1990s',
        icon: '🏠',
        name: 'Small family workshop',
        arch: 'Physical server',
        restaurant: 'Home kitchen',
        scenario:
          'One cook works in a small kitchen and personally buys ingredients, washes, cuts, cooks, and serves. When customers increase, everyone has to queue.',
        mapping:
          'One physical server handles every request: receiving HTTP requests, reading files, executing CGI scripts, and returning responses. CPU and memory are limited, so extra requests queue up.',
        pains: [
          'Single-machine bottleneck: too many customers overwhelm the cook',
          'Vertical scaling is expensive: buying a bigger machine is like buying a bigger kitchen',
          'Single point of failure: if the cook is unavailable, the restaurant closes'
        ]
      },
      {
        era: '2000s',
        icon: '🏢',
        name: 'Large central kitchen',
        arch: 'Monolith',
        restaurant: 'Chain restaurant central kitchen',
        scenario:
          'A large central kitchen has clear roles: washing, cutting, and cooking. But everyone works in the same big room and depends on each other.',
        mapping:
          'A monolithic application runs all modules, such as users, orders, and payments, in one process. It shares one database and is deployed as one large application.',
        pains: [
          'A small issue affects the whole kitchen',
          'Technical debt accumulates and becomes hard for new people to understand',
          'Releasing one feature may affect the entire system'
        ]
      },
      {
        era: '2010s',
        icon: '🏭',
        name: 'Specialized division',
        arch: 'Microservices',
        restaurant: 'Restaurant group with multiple kitchens',
        scenario:
          'The central kitchen is split into specialized kitchens for different cuisines. Each kitchen runs independently and collaborates through standardized processes.',
        mapping:
          'Each business capability, such as user service, order service, and payment service, runs as an independent process with its own database and communicates through HTTP or gRPC.',
        pains: [
          'Distributed coordination is much harder than managing one kitchen',
          'Network delays or failures affect cross-service dependencies',
          'Operations cost rises because many services need to be managed'
        ]
      },
      {
        era: '2020s+',
        icon: '🍽️',
        name: 'Delivery platform',
        arch: 'Serverless',
        restaurant: 'Delivery platform / cloud kitchen',
        scenario:
          'You no longer run your own kitchen. When an order arrives, the platform dispatches nearby capacity. You focus on menu design and promotion.',
        mapping:
          'In serverless architecture, developers write business functions and ignore server location, quantity, and scaling. The cloud platform schedules resources and bills by execution.',
        pains: [
          'Cold starts can delay the first request',
          'The platform dependency creates migration cost',
          'Function runtime and memory limits constrain complex work'
        ]
      }
    ]
  },
  architectureComparison: {
    title: 'Architecture Evolution Comparison',
    subtitle: 'Core architectural traits across four eras',
    features: '🏗️ Architecture traits',
    pros: '✅ Advantages',
    cons: '❌ Pain points',
    techs: '🔧 Typical technologies',
    idea: 'Architecture evolves to solve prior pain points, while also introducing new complexity.',
    defaultEra: 'Monolith',
    eras: [
      {
        name: 'Physical server',
        icon: '🖥️',
        year: '1990s',
        tag: 'Single node'
      },
      { name: 'Monolith', icon: '🏢', year: '2000s', tag: 'Centralized' },
      { name: 'Microservices', icon: '🏭', year: '2010s', tag: 'Distributed' },
      { name: 'Serverless', icon: '☁️', year: '2020s+', tag: 'No server ops' }
    ],
    details: {
      'Physical server': {
        features: [
          'Single-machine deployment without redundancy',
          'Manual code upload through FTP',
          'Vertical scaling by buying stronger machines',
          'No service governance concept'
        ],
        pros: [
          'Simple deployment with little configuration',
          'Good single-node performance without network hops',
          'Easy debugging and troubleshooting'
        ],
        cons: [
          'Single point of failure',
          'Hard to scale except vertically',
          'Manual operations are inefficient'
        ],
        techs: ['Apache/Nginx', 'CGI/Perl', 'FTP/SFTP', 'Physical server']
      },
      Monolith: {
        features: [
          'Single codebase and unified stack',
          'Shared database and transactional consistency',
          'Unified deployment and whole-system release',
          'In-process communication without network overhead'
        ],
        pros: [
          'Simple development and onboarding',
          'Convenient local testing',
          'Simple deployment as one package'
        ],
        cons: [
          'Tight coupling makes small changes risky',
          'Single stack makes new technology hard to introduce',
          'Large teams become hard to coordinate'
        ],
        techs: [
          'Spring/Django/Rails',
          'Tomcat/Gunicorn',
          'MySQL/PostgreSQL',
          'Maven/Gradle'
        ]
      },
      Microservices: {
        features: [
          'Services are split and deployed independently',
          'Heterogeneous technology stacks',
          'Independent databases and eventual consistency',
          'Network communication between services'
        ],
        pros: [
          'Independent services and autonomous teams',
          'Flexible technology choices',
          'Fault isolation'
        ],
        cons: [
          'Distributed complexity and hard debugging',
          'Network latency and performance overhead',
          'Operations cost rises sharply'
        ],
        techs: [
          'Docker/Kubernetes',
          'gRPC/REST',
          'Kafka/RabbitMQ',
          'Prometheus/Grafana'
        ]
      },
      Serverless: {
        features: [
          'Function granularity and event-driven execution',
          'Automatic scaling and pay-per-use billing',
          'No server management',
          'Cold starts introduce latency'
        ],
        pros: [
          'No server operations, focus on business logic',
          'Automatic scaling for traffic spikes',
          'Pay per invocation keeps cost low'
        ],
        cons: [
          'Cold start latency',
          'Platform lock-in and migration difficulty',
          'Difficult local reproduction and debugging'
        ],
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
    title: 'Technology Stack Evolution Timeline',
    subtitle: 'Mainstream technology stacks in each era',
    eras: [
      {
        icon: '🖥️',
        name: 'Physical server era',
        period: '1990s',
        categories: [
          { name: 'Web servers', techs: ['Apache', 'Nginx', 'IIS'] },
          { name: 'Backend languages', techs: ['Perl', 'PHP', 'ASP'] },
          { name: 'Databases', techs: ['MySQL', 'PostgreSQL', 'Oracle'] },
          { name: 'Deployment', techs: ['FTP', 'SSH', 'Manual'] }
        ]
      },
      {
        icon: '🏢',
        name: 'Monolith',
        period: '2000s',
        categories: [
          {
            name: 'Backend frameworks',
            techs: ['Spring', 'Django', 'Rails', 'Laravel']
          },
          { name: 'Frontend tech', techs: ['jQuery', 'Bootstrap', 'JSP'] },
          { name: 'Databases', techs: ['MySQL', 'Redis', 'MongoDB'] },
          { name: 'Build tools', techs: ['Maven', 'Gradle', 'Ant'] }
        ]
      },
      {
        icon: '🏭',
        name: 'Microservices',
        period: '2010s',
        categories: [
          { name: 'Containers', techs: ['Docker', 'Kubernetes', 'Helm'] },
          {
            name: 'Service frameworks',
            techs: ['Spring Cloud', 'gRPC', 'Dubbo']
          },
          { name: 'Data stores', techs: ['Redis', 'MongoDB', 'Kafka', 'ES'] },
          { name: 'Observability', techs: ['Prometheus', 'Grafana', 'Jaeger'] }
        ]
      },
      {
        icon: '☁️',
        name: 'Serverless',
        period: '2020s+',
        categories: [
          {
            name: 'Function compute',
            techs: ['Lambda', 'Vercel', 'Cloudflare']
          },
          { name: 'BaaS', techs: ['Supabase', 'Firebase', 'Auth0'] },
          {
            name: 'Frontend frameworks',
            techs: ['Next.js', 'Nuxt', 'SvelteKit']
          },
          { name: 'Databases', techs: ['PlanetScale', 'Neon', 'Turso'] }
        ]
      }
    ]
  },
  containerDocker: {
    title: 'Docker Containerization Demo',
    subtitle:
      'See how containers let applications be packaged once and run anywhere',
    traditional: 'Traditional deployment',
    docker: 'Docker containers',
    appA: 'App A',
    appB: 'App B',
    conflict: 'Dependency conflict!',
    depsV1: 'Dependency library v1.0',
    depsShortV1: 'Dependency v1.0',
    depsShortV2: 'Dependency v2.0',
    os: 'Operating system',
    hostOs: 'Host operating system',
    hardware: 'Physical server',
    idea: 'Containerization lets applications be built once and run anywhere, solving environment consistency and fast deployment problems.',
    benefits: [
      {
        icon: '📦',
        title: 'Environment consistency',
        desc: 'Development, testing, and production environments stay consistent.'
      },
      {
        icon: '🚀',
        title: 'Fast deployment',
        desc: 'Second-level startup, image distribution, and rolling updates without downtime.'
      },
      {
        icon: '📊',
        title: 'Resource isolation',
        desc: 'CPU and memory limits keep multiple applications from interfering with each other.'
      },
      {
        icon: '🔄',
        title: 'Version management',
        desc: 'Versioned images support rollback and gradual rollout.'
      }
    ]
  },
  physicalServer: {
    title: 'Physical Server Era Demo',
    subtitle: 'Observe the processing bottleneck of early CGI servers',
    client: '👤 User browser',
    server: '🖥️ CGI server',
    processing: 'Processing...',
    waiting: 'Waiting for requests',
    send: '🚀 Send request',
    processName: 'CGI Process #{id}',
    idea: 'Process-level isolation improves stability, but it also creates heavy performance overhead.'
  },
  monolith: {
    title: 'Monolithic Architecture Demo',
    subtitle: 'Observe how a monolithic application handles requests',
    process: 'Monolithic application process',
    sharedDb: 'Shared database',
    normalRequest: 'Normal request',
    simulateCrash: 'Simulate module failure',
    reset: 'Reset',
    healthy: 'Healthy',
    crashed: 'Crashed',
    affected: 'Affected',
    targetCrashModule: 'Order module',
    idea: 'All modules run in the same process and share memory. If one module crashes, the entire process may go down.',
    modules: [
      { name: 'User module', icon: '👤' },
      { name: 'Order module', icon: '📦' },
      { name: 'Payment module', icon: '💳' },
      { name: 'Inventory module', icon: '🏭' }
    ]
  },
  microservices: {
    title: '🏭 Microservices Architecture Demo',
    subtitle: 'Observe how independent services collaborate and communicate',
    port: 'Port:',
    database: 'Database:',
    dependencies: 'Dependencies:',
    none: 'None',
    flowTitle: 'Service-to-service communication flow',
    startFlow: 'Start flow',
    reset: 'Reset',
    healthy: 'Healthy',
    services: [
      {
        name: 'User service',
        icon: '👤',
        port: '8081',
        database: 'MySQL',
        dependencies: []
      },
      {
        name: 'Order service',
        icon: '📦',
        port: '8082',
        database: 'PostgreSQL',
        dependencies: ['User service']
      },
      {
        name: 'Payment service',
        icon: '💳',
        port: '8083',
        database: 'MongoDB',
        dependencies: ['User service', 'Order service']
      },
      {
        name: 'Inventory service',
        icon: '🏭',
        port: '8084',
        database: 'Redis',
        dependencies: ['Order service']
      }
    ],
    flowSteps: [
      { service: 'User service', action: 'Verify user identity' },
      { service: 'Order service', action: 'Create order record' },
      { service: 'Inventory service', action: 'Check stock quantity' },
      { service: 'Payment service', action: 'Process payment request' },
      { service: 'Order service', action: 'Update order status' }
    ]
  },
  serverless: {
    title: '⚡ Serverless Architecture Demo',
    subtitle: 'Observe on-demand function execution and automatic scaling',
    invocations: 'Calls: {count}',
    average: 'Avg: {duration}ms',
    scalingTitle: 'Auto-scaling status',
    concurrent: 'Concurrent requests:',
    runningInstances: 'Running instances:',
    coldStarts: 'Cold starts:',
    simulatorTitle: 'Traffic simulator',
    explanationTitle: '💡 Serverless core traits',
    states: { cold: 'Cold', warming: 'Warming', running: 'Running' },
    functions: [
      { name: 'User login', icon: '🔐' },
      { name: 'Order processing', icon: '📦' },
      { name: 'Image processing', icon: '🖼️' },
      { name: 'Data backup', icon: '💾' }
    ],
    trafficPatterns: [
      { name: 'Normal traffic', icon: '📊', desc: 'Steady request rate' },
      { name: 'Traffic burst', icon: '🚀', desc: 'Sudden traffic spike' },
      { name: 'Tidal traffic', icon: '🌊', desc: 'Periodic peaks and valleys' }
    ],
    explanation: [
      {
        term: 'On-demand execution',
        desc: 'Functions run only when invoked, so idle functions do not create runtime cost.'
      },
      {
        term: 'Automatic scaling',
        desc: 'Scale automatically from zero to thousands of instances without manual intervention.'
      },
      {
        term: 'Cold start',
        desc: 'The first call after a long idle period may have extra latency and may need warm-up strategies.'
      },
      {
        term: 'Event driven',
        desc: 'Respond to HTTP requests, message queues, scheduled tasks, and other event sources.'
      }
    ]
  },
  kubernetes: {
    title: '☸️ Kubernetes Orchestration Demo',
    subtitle:
      'Observe how K8s schedules containers, balances load, and recovers from failures',
    controlPlaneTitle: 'Control Plane',
    workerNodesTitle: 'Worker Nodes',
    memory: 'Memory:',
    podCount: 'Running Pods: {count}',
    scheduling: 'Scheduling...',
    schedule: '🚀 Simulate Pod scheduling',
    scaling: 'Scaling...',
    scale: '📈 Auto scale',
    failing: 'Injecting failure...',
    fail: '💥 Simulate node failure',
    reset: '🔄 Reset cluster',
    explanationTitle: '💡 Kubernetes core concepts',
    statuses: { active: 'Running', pending: 'Pending', failed: 'Failed' },
    controlPlane: [
      { name: 'API Server', icon: '🌐', desc: 'Unified cluster entry point' },
      { name: 'etcd', icon: '🗄️', desc: 'Distributed key-value store' },
      { name: 'Scheduler', icon: '📋', desc: 'Pod scheduler' },
      { name: 'Controller', icon: '🎮', desc: 'Controller manager' }
    ],
    logs: {
      startSchedule: 'Starting to schedule a new Pod...',
      evaluate: 'Scheduler: evaluating node resources...',
      scheduled: 'Pod scheduled to {node}',
      noNode: 'Warning: no suitable node is available',
      highLoad: 'High load detected. Starting horizontal scaling...',
      joined: '{node} started and joined the cluster',
      maxNodes: 'Maximum node count reached',
      lost: 'Warning: {node} lost connection!',
      reschedule: 'Controller: starting Pod rescheduling...',
      migrated: 'Pods migrated to {node}',
      reset: 'Cluster reset'
    },
    explanation: [
      {
        term: 'Pod',
        desc: 'The smallest deployment unit. A Pod can contain one or more containers.'
      },
      {
        term: 'Deployment',
        desc: 'Manages Pod replica count and rolling updates.'
      },
      {
        term: 'Service',
        desc: 'Provides stable network access and load balancing.'
      },
      {
        term: 'Scheduler',
        desc: 'Automatically schedules Pods to suitable nodes based on resource needs and policies.'
      }
    ]
  }
}
