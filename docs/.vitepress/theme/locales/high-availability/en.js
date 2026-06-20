export default {
  availability: {
    title: 'Availability Level Calculator',
    subtitle: 'Click to see downtime for different numbers of nines',
    labels: {
      yearly: 'Yearly downtime',
      monthly: 'Monthly downtime',
      weekly: 'Weekly downtime',
      examples: 'Typical scenarios: '
    },
    slaLevels: [
      {
        nines: '2',
        label: '2 nines',
        percent: '99%',
        yearly: '3.65 days',
        monthly: '7.3 hours',
        weekly: '1.68 hours',
        examples: 'Internal tools, non-critical systems'
      },
      {
        nines: '3',
        label: '3 nines',
        percent: '99.9%',
        yearly: '8.76 hours',
        monthly: '43.8 minutes',
        weekly: '10.1 minutes',
        examples: 'Standard web apps, enterprise systems'
      },
      {
        nines: '4',
        label: '4 nines',
        percent: '99.99%',
        yearly: '52.6 minutes',
        monthly: '4.38 minutes',
        weekly: '1.01 minutes',
        examples: 'E-commerce platforms, SaaS services'
      },
      {
        nines: '5',
        label: '5 nines',
        percent: '99.999%',
        yearly: '5.26 minutes',
        monthly: '26.3 seconds',
        weekly: '6.05 seconds',
        examples: 'Financial trading, telecom core networks'
      }
    ]
  },
  failover: {
    title: 'Failover Strategy Comparison',
    subtitle: 'Click to inspect how each high-availability architecture works',
    prosTitle: 'Pros',
    consTitle: 'Cons',
    strategies: [
      {
        key: 'active-standby',
        name: 'Active-standby',
        desc: 'One primary node handles all requests while a standby waits. If the primary fails, the standby takes over.',
        nodes: [
          {
            label: 'Primary node',
            status: 'Serving requests',
            role: 'primary'
          },
          { label: 'Standby node', status: 'Syncing standby', role: 'standby' }
        ],
        pros: [
          'Simple architecture',
          'Data consistency is easier to guarantee'
        ],
        cons: [
          'Standby resources are underused',
          'Failover has a brief interruption'
        ]
      },
      {
        key: 'active-active',
        name: 'Active-active',
        desc: 'Both nodes serve requests and synchronize data. If either node fails, the other continues serving traffic.',
        nodes: [
          { label: 'Node A', status: 'Serving requests', role: 'primary' },
          { label: 'Node B', status: 'Serving requests', role: 'primary' }
        ],
        pros: ['High resource utilization', 'No failover interruption'],
        cons: [
          'Conflict handling is complex',
          'Write conflicts must be resolved'
        ]
      },
      {
        key: 'multi-az',
        name: 'Multi-AZ',
        desc: 'Deploy across different data centers in the same region to survive a single facility failure.',
        nodes: [
          { label: 'AZ-1 primary', status: 'Read/write', role: 'primary' },
          { label: 'AZ-2 replica', status: 'Read-only', role: 'secondary' },
          { label: 'AZ-3 replica', status: 'Read-only', role: 'secondary' }
        ],
        pros: [
          'Data-center-level disaster recovery',
          'Read throughput can scale'
        ],
        cons: ['Cross-AZ latency', 'Higher cost']
      },
      {
        key: 'multi-region',
        name: 'Multi-region active-active',
        desc: 'Deploy complete services in multiple regions, with each region serving local traffic independently.',
        nodes: [
          { label: 'Beijing', status: 'Independent service', role: 'primary' },
          { label: 'Shanghai', status: 'Independent service', role: 'primary' },
          { label: 'Guangzhou', status: 'Independent service', role: 'primary' }
        ],
        pros: [
          'Region-level disaster recovery',
          'Lower latency through nearby access'
        ],
        cons: [
          'Very complex architecture',
          'Data synchronization is challenging'
        ]
      }
    ]
  }
}
