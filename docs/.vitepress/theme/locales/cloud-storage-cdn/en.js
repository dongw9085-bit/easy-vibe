export default {
  common: {
    coreIdea: 'Core idea:',
    placeholderSuffix: 'demo placeholder - interaction to be implemented'
  },
  objectStorage: {
    title: 'Object Storage Architecture',
    subtitle:
      'Understand the relationship between Bucket, Object, and Metadata.',
    accountName: 'Cloud Account',
    accountDesc: 'Manages permissions, billing, and global configuration',
    bucketsTitle: 'Buckets',
    bucketsDesc: 'Namespace isolation and permission control',
    objectCount: '{count} objects',
    objectsTitle: 'Objects',
    objectsDesc: 'File data + metadata',
    objectsPlaceholder: 'Click a bucket above to view objects.',
    metadataTitle: 'Metadata',
    metadataDesc: 'System metadata + custom metadata',
    systemMetadata: 'System Metadata',
    customMetadata: 'Custom Metadata',
    metadataPlaceholder: 'Click an object to view detailed metadata.',
    idea: 'Object storage uses a three-level structure: Account → Bucket → Object. Each object carries rich metadata for retrieval and management.',
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
    title: 'How CDN Acceleration Works',
    subtitle: 'How edge nodes, origin server, and origin fetch work together.',
    usersTitle: 'Global Users',
    edgeTitle: 'CDN Edge Nodes',
    cacheLabel: 'Cache',
    hitLabel: 'Hit',
    originTitle: 'Origin Server',
    originName: 'Object storage origin',
    healthy: 'Healthy',
    backToSourceRequest: '⬆️ Origin fetch request',
    backToSourceSteps: [
      '1. CDN node misses cache',
      '2. Node fetches from origin',
      '3. Origin returns file content',
      '4. CDN caches and responds to user'
    ],
    controlsTitle: '🎮 Simulation',
    hitButton: 'Simulate cache hit',
    missButton: 'Simulate cache miss and origin fetch',
    reset: 'Reset',
    statsTitle: '📊 Access Stats',
    stats: {
      cacheHit: 'Cache hits',
      cacheMiss: 'Cache misses',
      hitRate: 'Hit rate',
      avgResponse: 'Avg response'
    },
    cacheHitText: '✅ Cache hit',
    cacheMissText: '❌ Miss',
    backToSourceText: '📥 Fetching origin...',
    idea: 'CDN is like opening branches worldwide: users get resources from the nearest branch instead of always visiting the main store.',
    users: [
      { id: 'user1', name: 'Beijing user', icon: '👤', x: 75, y: 35 },
      { id: 'user2', name: 'Shanghai user', icon: '👤', x: 80, y: 55 },
      { id: 'user3', name: 'Guangzhou user', icon: '👤', x: 70, y: 75 },
      { id: 'user4', name: 'Chengdu user', icon: '👤', x: 50, y: 60 },
      { id: 'user5', name: 'Overseas user', icon: '👤', x: 90, y: 25 }
    ],
    edgeNodes: [
      {
        id: 'node1',
        name: 'Beijing node',
        icon: '🌐',
        location: 'North China',
        cacheSize: '2.5 TB',
        hitRate: 92
      },
      {
        id: 'node2',
        name: 'Shanghai node',
        icon: '🌐',
        location: 'East China',
        cacheSize: '3.1 TB',
        hitRate: 89
      },
      {
        id: 'node3',
        name: 'Guangzhou node',
        icon: '🌐',
        location: 'South China',
        cacheSize: '1.8 TB',
        hitRate: 87
      },
      {
        id: 'node4',
        name: 'Chengdu node',
        icon: '🌐',
        location: 'Southwest China',
        cacheSize: '1.2 TB',
        hitRate: 85
      }
    ]
  },
  upload: {
    title: 'File Upload Flow',
    subtitle:
      'Understand direct upload, multipart upload, and resumable upload.',
    suitable: 'Best for: {value}',
    flowTitles: {
      direct: '🚀 Direct Upload Flow',
      multipart: '🔪 Multipart Upload Flow',
      resume: '💾 Resumable Upload Flow'
    },
    methods: [
      {
        id: 'direct',
        name: 'Direct upload',
        icon: '🚀',
        description: 'Upload small files to object storage in one request',
        suitable: '< 100MB'
      },
      {
        id: 'multipart',
        name: 'Multipart upload',
        icon: '🔪',
        description: 'Split large files into parts and upload in parallel',
        suitable: '> 100MB'
      },
      {
        id: 'resume',
        name: 'Resumable upload',
        icon: '💾',
        description: 'Continue from the breakpoint after network interruption',
        suitable: 'Any size'
      }
    ],
    flows: {
      direct: [
        {
          title: 'User selects file',
          detail: 'Browser selects a 5MB image file'
        },
        {
          title: 'Request upload credential',
          detail: 'Frontend → backend → temporary STS credential'
        },
        {
          title: 'Upload directly to object storage',
          detail: 'Browser → OSS/COS, 5MB in one request'
        },
        {
          title: 'Upload complete',
          detail: 'Return URL; frontend asks backend to save record'
        }
      ],
      multipart: [
        {
          title: 'Split file into parts',
          detail: '500MB video → fifty 10MB parts'
        },
        {
          title: 'Initialize multipart upload',
          detail: 'Get uploadId for the upload session'
        },
        {
          title: 'Upload parts in parallel',
          detail: '3 concurrent uploads, 10MB each',
          slots: ['Part 1', 'Part 2', 'Part 3']
        },
        {
          title: 'Complete multipart upload',
          detail: 'Server combines all parts into the full file'
        }
      ],
      resume: [
        {
          title: 'Start uploading 1GB video',
          detail: '6 parts uploaded (60MB), uploading part 7'
        },
        {
          title: 'Network interrupted',
          detail: 'WiFi switches to 4G; upload stops and part 7 fails'
        },
        {
          title: 'Query uploaded parts',
          detail: 'After network recovery, ask server which parts were saved'
        },
        {
          title: 'Resume succeeds',
          detail: 'Continue from part 7 without re-uploading the first 6 parts'
        }
      ]
    },
    uploadedChunks: 'Uploaded parts: 6/100',
    resumeUploaded: ['✅ Parts 1-6', 'Uploaded'],
    resumePending: ['⏳ Parts 7-100', 'Pending'],
    successItems: [
      ['💾 Traffic saved', '60MB'],
      ['⏱️ Time saved', '~6s'],
      ['🎯 Resume progress', '6% → 100%']
    ],
    idea: 'Multipart upload improves reliability for large files. If the network breaks, resumable upload avoids sending the whole file again.'
  },
  placeholders: {
    edge: {
      title: 'Edge Node Distribution Demo',
      subtitle:
        'Shows global CDN edge-node distribution and scheduling strategy.',
      placeholder:
        'Edge node distribution demo placeholder - interaction to be implemented'
    },
    cache: {
      title: 'Cache Policy Demo',
      subtitle:
        'Shows CDN and object-storage cache policy configuration, including TTL and refresh.',
      placeholder:
        'Cache policy demo placeholder - interaction to be implemented',
      idea: 'Cache policy balances hit rate and freshness. A TTL that is too short causes frequent origin fetches; one that is too long can serve stale content.'
    },
    traffic: {
      title: 'Traffic Scheduling',
      subtitle: 'Understand CDN intelligent scheduling and load balancing.',
      placeholder:
        'Traffic scheduling demo placeholder - interaction to be implemented',
      idea: 'Intelligent scheduling combines nearest access, load balancing, and failover to provide global acceleration and high availability.'
    },
    https: {
      title: 'HTTPS Optimization',
      subtitle: 'Understand CDN HTTPS protocol and certificate management.',
      placeholder:
        'HTTPS optimization demo placeholder - interaction to be implemented',
      idea: 'HTTPS encrypts traffic with TLS/SSL to prevent man-in-the-middle attacks and data leakage. It is a security baseline for modern web apps.'
    },
    analytics: {
      title: 'Access Analytics',
      subtitle: 'Understand CDN access statistics and log analytics.',
      placeholder:
        'Access analytics demo placeholder - interaction to be implemented',
      idea: 'Log analytics shows who accessed which resources and when, helping detect unusual access patterns and security events.'
    }
  }
}
