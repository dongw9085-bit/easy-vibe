export default {
  overview: {
    aliyun: 'Alibaba Cloud:',
    services: [
      {
        id: 'compute',
        icon: '⚙️',
        name: 'Compute',
        examples: 'EC2 / ECS',
        description:
          'Virtual servers and compute capacity, the foundation of cloud services.',
        aws: 'Amazon EC2',
        aliyun: 'ECS cloud server'
      },
      {
        id: 'storage',
        icon: '💾',
        name: 'Storage',
        examples: 'S3 / OSS',
        description:
          'Object storage for images, documents, backups, and other files.',
        aws: 'Amazon S3',
        aliyun: 'OSS object storage'
      },
      {
        id: 'network',
        icon: '🌐',
        name: 'Network',
        examples: 'VPC / virtual private cloud',
        description: 'Build isolated virtual network environments.',
        aws: 'Amazon VPC',
        aliyun: 'Virtual Private Cloud'
      },
      {
        id: 'database',
        icon: '🗄️',
        name: 'Database',
        examples: 'RDS / PolarDB',
        description: 'Managed relational database services.',
        aws: 'Amazon RDS',
        aliyun: 'RDS relational database'
      },
      {
        id: 'security',
        icon: '🔒',
        name: 'Security',
        examples: 'IAM / RAM',
        description: 'Identity authentication and access control services.',
        aws: 'AWS IAM',
        aliyun: 'RAM access control'
      },
      {
        id: 'middleware',
        icon: '🔧',
        name: 'Middleware',
        examples: 'MQ / RocketMQ',
        description: 'Message queue and cache services.',
        aws: 'Amazon MQ',
        aliyun: 'RocketMQ'
      }
    ]
  },
  computeInstance: {
    region: 'Region',
    spec: 'Instance type',
    image: 'Image',
    resultTitle: 'Configuration result',
    config: 'Configuration',
    estimatedPrice: 'Estimated price',
    monthly: 'month',
    scenario: 'Use case',
    regions: [
      { id: 'hangzhou', name: 'East China - Hangzhou' },
      { id: 'beijing', name: 'North China - Beijing' },
      { id: 'shenzhen', name: 'South China - Shenzhen' },
      { id: 'singapore', name: 'Asia Pacific - Singapore' }
    ],
    specs: [
      {
        id: 'small',
        name: '1 vCPU / 2 GB',
        scene: 'Test environments and personal blogs',
        price: 89
      },
      {
        id: 'medium',
        name: '2 vCPU / 4 GB',
        scene: 'Small apps and development environments',
        price: 199
      },
      {
        id: 'large',
        name: '4 vCPU / 8 GB',
        scene: 'Production environments and medium sites',
        price: 399
      },
      {
        id: 'xlarge',
        name: '8 vCPU / 16 GB',
        scene: 'Large applications and databases',
        price: 799
      }
    ],
    images: [
      { id: 'ubuntu', name: 'Ubuntu 22.04' },
      { id: 'centos', name: 'CentOS 7.9' },
      { id: 'windows', name: 'Windows Server' },
      { id: 'alpine', name: 'Alpine Linux' }
    ]
  },
  deployWorkflow: {
    step: 'Step {n}',
    tasksTitle: 'Actions:',
    previous: 'Previous',
    next: 'Next',
    done: 'Done',
    steps: [
      {
        name: 'Prepare code',
        time: '5 min',
        description: 'Package the website code into a deployable format.',
        tasks: [
          'Organize HTML/CSS/JS files',
          'Compress images and static assets',
          'Check that file paths are correct'
        ]
      },
      {
        name: 'Create bucket',
        time: '2 min',
        description: 'Create storage space in an object storage service.',
        tasks: [
          'Log in to the cloud console',
          'Open OSS or S3 object storage',
          'Click "Create Bucket"',
          'Set the bucket name and region'
        ]
      },
      {
        name: 'Upload files',
        time: '3 min',
        description: 'Upload website files to the bucket.',
        tasks: [
          'Open the bucket management page',
          'Click "Upload files"',
          'Choose local website files',
          'Wait for upload completion'
        ]
      },
      {
        name: 'Configure CDN',
        time: '5 min',
        description: 'Configure content delivery network acceleration.',
        tasks: [
          'Open the CDN console',
          'Add an accelerated domain',
          'Set the origin to the bucket',
          'Wait for CDN deployment'
        ]
      },
      {
        name: 'Bind domain',
        time: '10 min',
        description: 'Bind a custom domain to the CDN.',
        tasks: [
          'Add DNS records',
          'Point CNAME to the CDN',
          'Request an SSL certificate',
          'Test HTTPS access'
        ]
      }
    ]
  },
  pricingCalculator: {
    spec: 'Instance type',
    runningHours: 'Runtime',
    runningDays: 'Running days',
    hoursPerDay: '{hours} hours/day',
    daysPerMonth: '{days} days/month',
    monthlyComparison: 'Monthly cost comparison',
    perMonth: '{price}/month',
    saving: 'Save {saving}%',
    specs: [
      { id: 'small', label: '1 vCPU / 2 GB (entry)' },
      { id: 'medium', label: '2 vCPU / 4 GB (standard)' },
      { id: 'large', label: '4 vCPU / 8 GB (high performance)' }
    ],
    models: {
      ondemand: 'On-demand',
      reserved: 'Reserved instance',
      spot: 'Spot instance'
    },
    recommendations: {
      lowUsage: 'Usage is low, so on-demand billing is recommended.',
      stable:
        'The workload is stable. Switching to reserved instances can save {saving}%.',
      reserved:
        'Reserved instances are more cost-effective for this configuration.'
    }
  },
  storageType: {
    features: 'Features',
    scenarios: 'Use cases',
    pricing: 'Billing model',
    types: [
      {
        id: 'object',
        icon: '📦',
        name: 'Object storage',
        example: 'S3 / OSS',
        features: 'Massive scale, high reliability, low cost',
        scenarios: 'Images, videos, backups, static websites',
        pricing: 'By storage capacity + request count'
      },
      {
        id: 'block',
        icon: '💽',
        name: 'Block storage',
        example: 'EBS / cloud disk',
        features: 'Low latency, high performance, mountable',
        scenarios: 'Databases, file systems, operating systems',
        pricing: 'By capacity + IOPS'
      },
      {
        id: 'file',
        icon: '📁',
        name: 'File storage',
        example: 'EFS / NAS',
        features: 'Shared access, POSIX compatible',
        scenarios: 'Shared files, content management, HPC',
        pricing: 'By capacity + throughput'
      },
      {
        id: 'archive',
        icon: '🗃️',
        name: 'Archive storage',
        example: 'Glacier / archive',
        features: 'Very low cost, slow retrieval',
        scenarios: 'Cold data, compliance backups, long-term archives',
        pricing: 'By capacity, with extra retrieval fees'
      }
    ]
  }
}
