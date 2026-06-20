export default {
  quality: {
    title: 'Data Quality Checker',
    subtitle: 'Click a dimension to inspect example data quality issues',
    badLabel: 'Problem data',
    goodLabel: 'After governance',
    scoreLabel: 'Quality score',
    dimensions: [
      {
        key: 'completeness',
        name: 'Completeness',
        icon: '📋',
        desc: 'Whether required values are missing',
        score: 72,
        badData: {
          cols: ['User ID', 'Name', 'Email', 'Phone'],
          rows: [
            [
              { value: '001' },
              { value: 'Alice' },
              { value: 'alice@mail.com' },
              { value: '138xxxx1234' }
            ],
            [
              { value: '002' },
              { value: 'Bob' },
              { value: '', error: true },
              { value: '', error: true }
            ],
            [
              { value: '003' },
              { value: '', error: true },
              { value: 'carol@mail.com' },
              { value: '139xxxx5678' }
            ]
          ]
        },
        goodData: {
          cols: ['User ID', 'Name', 'Email', 'Phone'],
          rows: [
            [
              { value: '001' },
              { value: 'Alice' },
              { value: 'alice@mail.com' },
              { value: '138xxxx1234' }
            ],
            [
              { value: '002' },
              { value: 'Bob' },
              { value: 'bob@mail.com' },
              { value: '137xxxx9012' }
            ],
            [
              { value: '003' },
              { value: 'Carol' },
              { value: 'carol@mail.com' },
              { value: '139xxxx5678' }
            ]
          ]
        }
      },
      {
        key: 'accuracy',
        name: 'Accuracy',
        icon: '🎯',
        desc: 'Whether values correctly reflect reality',
        score: 65,
        badData: {
          cols: ['Order ID', 'Amount', 'Date', 'Status'],
          rows: [
            [
              { value: 'ORD-101' },
              { value: '-50.00', error: true },
              { value: '2025-01-15' },
              { value: 'Completed' }
            ],
            [
              { value: 'ORD-102' },
              { value: '299.00' },
              { value: '2025-13-01', error: true },
              { value: 'Shipped' }
            ],
            [
              { value: 'ORD-103' },
              { value: '1500.00' },
              { value: '2025-02-28' },
              { value: 'Refunded', error: true }
            ]
          ]
        },
        goodData: {
          cols: ['Order ID', 'Amount', 'Date', 'Status'],
          rows: [
            [
              { value: 'ORD-101' },
              { value: '50.00' },
              { value: '2025-01-15' },
              { value: 'Completed' }
            ],
            [
              { value: 'ORD-102' },
              { value: '299.00' },
              { value: '2025-01-13' },
              { value: 'Shipped' }
            ],
            [
              { value: 'ORD-103' },
              { value: '1500.00' },
              { value: '2025-02-28' },
              { value: 'Completed' }
            ]
          ]
        }
      },
      {
        key: 'consistency',
        name: 'Consistency',
        icon: '🔗',
        desc: 'Whether the same data is consistent across systems',
        score: 58,
        badData: {
          cols: ['Source', 'Username', 'Phone', 'Address'],
          rows: [
            [
              { value: 'CRM' },
              { value: 'Alice' },
              { value: '13812341234' },
              { value: 'Chaoyang, Beijing' }
            ],
            [
              { value: 'Order system' },
              { value: 'Alice Z.', error: true },
              { value: '13812341234' },
              { value: 'Beijing Chaoyang', error: true }
            ],
            [
              { value: 'Support system' },
              { value: 'Alice' },
              { value: '13899999999', error: true },
              { value: 'Chaoyang, Beijing' }
            ]
          ]
        },
        goodData: {
          cols: ['Source', 'Username', 'Phone', 'Address'],
          rows: [
            [
              { value: 'CRM' },
              { value: 'Alice' },
              { value: '13812341234' },
              { value: 'Chaoyang, Beijing' }
            ],
            [
              { value: 'Order system' },
              { value: 'Alice' },
              { value: '13812341234' },
              { value: 'Chaoyang, Beijing' }
            ],
            [
              { value: 'Support system' },
              { value: 'Alice' },
              { value: '13812341234' },
              { value: 'Chaoyang, Beijing' }
            ]
          ]
        }
      },
      {
        key: 'timeliness',
        name: 'Timeliness',
        icon: '⏰',
        desc: 'Whether data is updated on time',
        score: 80,
        badData: {
          cols: ['SKU', 'Price', 'Stock', 'Updated at'],
          rows: [
            [
              { value: 'SKU-001' },
              { value: '$299' },
              { value: '50' },
              { value: '2024-06-01', error: true }
            ],
            [
              { value: 'SKU-002' },
              { value: '$599' },
              { value: '0', error: true },
              { value: '2024-03-15', error: true }
            ],
            [
              { value: 'SKU-003' },
              { value: '$199' },
              { value: '200' },
              { value: '2025-02-20' }
            ]
          ]
        },
        goodData: {
          cols: ['SKU', 'Price', 'Stock', 'Updated at'],
          rows: [
            [
              { value: 'SKU-001' },
              { value: '$259' },
              { value: '35' },
              { value: '2025-02-25' }
            ],
            [
              { value: 'SKU-002' },
              { value: '$549' },
              { value: '12' },
              { value: '2025-02-25' }
            ],
            [
              { value: 'SKU-003' },
              { value: '$199' },
              { value: '180' },
              { value: '2025-02-25' }
            ]
          ]
        }
      },
      {
        key: 'uniqueness',
        name: 'Uniqueness',
        icon: '🔑',
        desc: 'Whether duplicate records exist',
        score: 70,
        badData: {
          cols: ['User ID', 'Name', 'Email', 'Registered at'],
          rows: [
            [
              { value: '001' },
              { value: 'Alice' },
              { value: 'alice@mail.com' },
              { value: '2025-01-01' }
            ],
            [
              { value: '005' },
              { value: 'Alice', error: true },
              { value: 'alice@mail.com', error: true },
              { value: '2025-01-15', error: true }
            ],
            [
              { value: '002' },
              { value: 'Bob' },
              { value: 'bob@mail.com' },
              { value: '2025-01-10' }
            ]
          ]
        },
        goodData: {
          cols: ['User ID', 'Name', 'Email', 'Registered at'],
          rows: [
            [
              { value: '001' },
              { value: 'Alice' },
              { value: 'alice@mail.com' },
              { value: '2025-01-01' }
            ],
            [
              { value: '002' },
              { value: 'Bob' },
              { value: 'bob@mail.com' },
              { value: '2025-01-10' }
            ]
          ]
        }
      },
      {
        key: 'validity',
        name: 'Validity',
        icon: '✅',
        desc: 'Whether values match predefined formats and rules',
        score: 75,
        badData: {
          cols: ['Field', 'Value', 'Rule'],
          rows: [
            [
              { value: 'Email' },
              { value: 'not-an-email', error: true },
              { value: 'Must contain @' }
            ],
            [
              { value: 'Age' },
              { value: '-5', error: true },
              { value: '0-150' }
            ],
            [
              { value: 'Phone' },
              { value: '1234', error: true },
              { value: '11 digits' }
            ]
          ]
        },
        goodData: {
          cols: ['Field', 'Value', 'Rule'],
          rows: [
            [
              { value: 'Email' },
              { value: 'user@mail.com' },
              { value: 'Must contain @' }
            ],
            [{ value: 'Age' }, { value: '28' }, { value: '0-150' }],
            [
              { value: 'Phone' },
              { value: '13812345678' },
              { value: '11 digits' }
            ]
          ]
        }
      }
    ]
  },
  framework: {
    title: 'Data Governance Framework',
    subtitle: 'Click each stage to inspect the details',
    stages: [
      {
        key: 'define',
        name: 'Define standards',
        desc: 'Create data standards, naming rules, and data dictionaries',
        activities: [
          {
            icon: '📖',
            name: 'Data dictionary',
            desc: 'Define meaning, type, and allowed values for each field'
          },
          {
            icon: '📏',
            name: 'Naming rules',
            desc: 'Unify field naming conventions such as snake_case, camelCase, and prefixes'
          },
          {
            icon: '🏷️',
            name: 'Classification',
            desc: 'Classify data by sensitivity: public, internal, confidential, restricted'
          }
        ]
      },
      {
        key: 'collect',
        name: 'Collect and ingest',
        desc: 'Standardize collection processes to protect source quality',
        activities: [
          {
            icon: '🔌',
            name: 'Ingestion rules',
            desc: 'Define format, protocol, and frequency requirements'
          },
          {
            icon: '✅',
            name: 'Write validation',
            desc: 'Validate format, completeness, and compliance before writing data'
          },
          {
            icon: '📝',
            name: 'Lineage records',
            desc: 'Record data sources, processing chains, and dependencies'
          }
        ]
      },
      {
        key: 'store',
        name: 'Manage storage',
        desc: 'Store data appropriately while controlling cost and access',
        activities: [
          {
            icon: '🗄️',
            name: 'Layered storage',
            desc: 'Warehouse layers such as ODS -> DWD -> DWS -> ADS'
          },
          {
            icon: '🔒',
            name: 'Access control',
            desc: 'Control read/write permissions by role and data classification'
          },
          {
            icon: '♻️',
            name: 'Lifecycle',
            desc: 'Hot data -> warm data -> cold data -> archive or delete'
          }
        ]
      },
      {
        key: 'use',
        name: 'Use and consume',
        desc: 'Let the business use data safely and efficiently',
        activities: [
          {
            icon: '🔍',
            name: 'Data catalog',
            desc: 'Provide searchable data assets to reduce discovery cost'
          },
          {
            icon: '🎭',
            name: 'Desensitization',
            desc: 'Mask, encrypt, or generalize sensitive fields'
          },
          {
            icon: '📊',
            name: 'Quality monitoring',
            desc: 'Continuously monitor data quality metrics and alert on anomalies'
          }
        ]
      },
      {
        key: 'retire',
        name: 'Archive and destroy',
        desc: 'Archive or securely destroy data according to compliance requirements',
        activities: [
          {
            icon: '📦',
            name: 'Archive policy',
            desc: 'Move data beyond retention windows to low-cost storage'
          },
          {
            icon: '🗑️',
            name: 'Secure deletion',
            desc: 'Completely delete user data according to privacy requirements'
          },
          {
            icon: '📋',
            name: 'Audit logs',
            desc: 'Record deletion actions for compliance audits'
          }
        ]
      }
    ]
  },
  lineage: {
    title: 'Data Lineage Tracing',
    subtitle: 'Click any node to inspect upstream and downstream dependencies',
    labels: {
      upstream: 'Upstream dependencies: ',
      downstream: 'Downstream consumers: ',
      owner: 'Owner: ',
      noUpstream: 'None (data source)',
      noDownstream: 'None (final consumer)',
      joiner: ', '
    },
    nodes: {
      mysql_user: {
        name: 'MySQL user table',
        icon: '🗄️',
        upstream: [],
        downstream: ['ods_user'],
        owner: 'Business dev team'
      },
      mysql_order: {
        name: 'MySQL order table',
        icon: '🗄️',
        upstream: [],
        downstream: ['ods_order'],
        owner: 'Business dev team'
      },
      log_click: {
        name: 'Click log',
        icon: '📝',
        upstream: [],
        downstream: ['ods_click'],
        owner: 'Frontend team'
      },
      ods_user: {
        name: 'ODS users',
        icon: '📥',
        upstream: ['mysql_user'],
        downstream: ['dwd_user'],
        owner: 'Data engineer'
      },
      ods_order: {
        name: 'ODS orders',
        icon: '📥',
        upstream: ['mysql_order'],
        downstream: ['dwd_order'],
        owner: 'Data engineer'
      },
      ods_click: {
        name: 'ODS clicks',
        icon: '📥',
        upstream: ['log_click'],
        downstream: ['dwd_click'],
        owner: 'Data engineer'
      },
      dwd_user: {
        name: 'DWD user detail',
        icon: '🔧',
        upstream: ['ods_user'],
        downstream: ['dws_user_profile'],
        owner: 'Data developer'
      },
      dwd_order: {
        name: 'DWD order detail',
        icon: '🔧',
        upstream: ['ods_order'],
        downstream: ['dws_gmv'],
        owner: 'Data developer'
      },
      dwd_click: {
        name: 'DWD click detail',
        icon: '🔧',
        upstream: ['ods_click'],
        downstream: ['dws_user_profile'],
        owner: 'Data developer'
      },
      dws_user_profile: {
        name: 'DWS user profile',
        icon: '📊',
        upstream: ['dwd_user', 'dwd_click'],
        downstream: ['ads_report'],
        owner: 'Data analyst'
      },
      dws_gmv: {
        name: 'DWS GMV summary',
        icon: '📊',
        upstream: ['dwd_order'],
        downstream: ['ads_report'],
        owner: 'Data analyst'
      },
      ads_report: {
        name: 'ADS business report',
        icon: '📈',
        upstream: ['dws_user_profile', 'dws_gmv'],
        downstream: [],
        owner: 'Data product'
      }
    },
    layers: [
      {
        label: 'Data sources',
        nodeIds: ['mysql_user', 'mysql_order', 'log_click']
      },
      { label: 'ODS layer', nodeIds: ['ods_user', 'ods_order', 'ods_click'] },
      { label: 'DWD layer', nodeIds: ['dwd_user', 'dwd_order', 'dwd_click'] },
      { label: 'DWS layer', nodeIds: ['dws_user_profile', 'dws_gmv'] },
      { label: 'ADS layer', nodeIds: ['ads_report'] }
    ]
  }
}
