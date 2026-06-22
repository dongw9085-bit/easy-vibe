export default {
  storageTypes: {
    title: 'Storage Type Comparison',
    subtitle: 'Click to inspect the characteristics of each storage model',
    labels: {
      access: 'Access method',
      scenario: 'Typical scenarios',
      products: 'Representative products',
      scalability: 'Scalability'
    },
    types: [
      {
        key: 'block',
        icon: '🧱',
        name: 'Block storage',
        desc: 'Splits data into fixed-size blocks and exposes raw storage like a disk. The operating system can create a filesystem on top of it. It has the highest performance, but cannot be directly shared over the network.',
        access: 'iSCSI / FC protocol, mounted as a disk device',
        scenario: 'Database storage, virtual machine disks',
        products: 'AWS EBS, Alibaba Cloud Disk, Ceph RBD',
        scalability:
          'A single volume has capacity limits and usually needs manual expansion'
      },
      {
        key: 'file',
        icon: '📁',
        name: 'File storage',
        desc: 'Provides a traditional filesystem interface with directories and files. Multiple servers can mount and read/write it at the same time, like a network shared folder.',
        access: 'NFS / SMB / CIFS protocol, mounted as a directory',
        scenario: 'Shared config files, CMS media files, log collection',
        products: 'AWS EFS, Alibaba Cloud NAS, NFS Server',
        scalability:
          'Capacity can scale elastically, but performance is limited by protocol overhead'
      },
      {
        key: 'object',
        icon: '☁️',
        name: 'Object storage',
        desc: 'Stores files as objects through HTTP APIs. Each object has a unique key. It has a flat structure, nearly unlimited capacity, and low cost, making it a common choice for internet applications.',
        access: 'HTTP/HTTPS RESTful API (PUT/GET/DELETE)',
        scenario: 'Images, videos, backups, static site hosting, data lakes',
        products: 'AWS S3, Alibaba Cloud OSS, MinIO, Cloudflare R2',
        scalability:
          'Nearly unlimited scaling with automatic distributed storage'
      }
    ]
  },
  uploadFlow: {
    title: 'File Upload Method Comparison',
    subtitle: 'Switch between upload modes to compare their flow',
    tabs: {
      proxy: 'Server proxy',
      direct: 'Direct client upload'
    },
    playingLabel: 'Playing...',
    playLabel: 'Play flow',
    verdicts: {
      proxy:
        '⚠️ Server proxy: files pass through your server, consuming bandwidth and memory; large files can easily time out.',
      direct:
        '✅ Direct client upload: files go directly to OSS, while the server only issues credentials. It is efficient and saves resources.'
    },
    steps: {
      proxy: [
        {
          title: 'Client → Server',
          desc: 'The user selects a file and uploads it to your backend server',
          note: 'Large files consume server bandwidth and memory'
        },
        {
          title: 'Server receives file',
          desc: 'The backend temporarily stores the file on local disk or in memory',
          note: 'May hit Nginx body size limits'
        },
        {
          title: 'Server → OSS',
          desc: 'The backend forwards the file to object storage',
          note: 'The file is transferred twice, which is inefficient'
        },
        {
          title: 'OSS returns URL',
          desc: 'Object storage returns the file access URL',
          note: ''
        },
        {
          title: 'Server → Client',
          desc: 'The backend returns the file URL to the frontend',
          note: ''
        }
      ],
      direct: [
        {
          title: 'Client → Server',
          desc: 'The frontend requests temporary upload credentials, such as a pre-signed URL',
          note: 'Only a small JSON payload is transferred, usually in milliseconds'
        },
        {
          title: 'Server signs credentials',
          desc: 'The backend uses the OSS SDK to generate a signed temporary upload URL',
          note: 'Credentials usually expire in 5-15 minutes'
        },
        {
          title: 'Client → OSS',
          desc: 'The frontend uploads the file directly to object storage',
          note: 'The file bypasses your server and saves bandwidth'
        },
        {
          title: 'OSS callback',
          desc: 'After upload, OSS calls back your server for confirmation',
          note: 'The server records file metadata in the database'
        }
      ]
    }
  },
  cdn: {
    title: 'How CDN Acceleration Works',
    subtitle: 'Compare file access paths with and without CDN',
    tabs: {
      off: 'No CDN',
      on: 'With CDN'
    },
    nodes: {
      user: 'Beijing user',
      cdn: 'Beijing CDN node',
      cdnDetail: 'Cache hit',
      origin: 'Origin (US West S3)'
    },
    cacheMiss: 'Return to origin on cache miss',
    metrics: [
      {
        label: 'Time to first byte (TTFB)',
        enabledValue: '~30ms',
        disabledValue: '~200ms',
        enabledWidth: '15%',
        disabledWidth: '100%'
      },
      {
        label: 'Download 1MB image',
        enabledValue: '~50ms',
        disabledValue: '~800ms',
        enabledWidth: '20%',
        disabledWidth: '100%'
      }
    ]
  }
}
