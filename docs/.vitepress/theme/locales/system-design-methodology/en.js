export default {
  stepsDemo: {
    title: 'Four-Step System Design Method',
    subtitle: 'Click each step to inspect the details',
    exampleLabel: 'Example: designing a URL shortener',
    steps: [
      {
        key: 'requirements',
        name: 'Clarify requirements',
        time: '~5 min',
        desc: 'Do not rush into drawing architecture diagrams. First clarify the problem, scale, core features, and non-functional requirements.',
        checklist: [
          'What are the core features? (MVP scope)',
          'Expected user scale? DAU / QPS',
          'Read/write ratio?',
          'Data volume? How much data must be stored?',
          'Availability target? How many nines?',
          'Latency target? What P99 latency is acceptable?'
        ],
        example:
          'URL shortener: create short links (write) and redirect (read), roughly 100:1 read/write ratio, 100 million redirects per day, links never expire.'
      },
      {
        key: 'estimation',
        name: 'Estimate capacity',
        time: '~5 min',
        desc: 'Use back-of-the-envelope estimation to calculate resource scale quickly and ground architecture decisions in numbers.',
        checklist: [
          'QPS: daily requests / 86400',
          'Storage: size per record x total records',
          'Bandwidth: QPS x response size',
          'Cache: hot data size, often 20% of data serving 80% of requests',
          'Peak: average QPS x peak factor, often 2-5x'
        ],
        example:
          '100 million requests/day is about 1200 QPS, peak about 3600 QPS. 100 bytes per short link for 5 years is about 180 million records or 18GB. Hot cache at 20% is about 3.6GB, so one Redis node is enough.'
      },
      {
        key: 'design',
        name: 'Design architecture',
        time: '~15 min',
        desc: 'Draw core components and data flow. Start with the simplest version, then evolve it with cache, sharding, CDN, and other components as needed.',
        checklist: [
          'API design: define inputs and outputs',
          'Data model: design core tables',
          'Core components: web service, database, cache, message queue',
          'Data flow: full path from user request to database',
          'Separate read and write paths'
        ],
        example:
          'Write path: client -> API -> generate short code with Base62 -> write MySQL and Redis. Read path: client -> CDN -> API -> Redis lookup -> 302 redirect.'
      },
      {
        key: 'deep-dive',
        name: 'Deep dive',
        time: '~10 min',
        desc: 'Discuss bottlenecks and key system risks in depth. This is where you show technical depth.',
        checklist: [
          'How to guarantee short-code uniqueness?',
          'How to handle hot links?',
          'How to scale horizontally?',
          'How to ensure high availability?',
          'How to monitor and alert?',
          'Security concerns such as abuse prevention and malicious link detection?'
        ],
        example:
          'Generate short codes using a distributed ID generator such as Snowflake plus Base62 encoding to avoid hash collisions. Use multi-level caching with local cache, Redis, and CDN for hot links.'
      }
    ]
  },
  capacity: {
    title: 'Back-of-the-Envelope Estimator',
    subtitle: 'Enter basic numbers to estimate system capacity requirements',
    inputLabels: {
      dau: 'Daily active users (10k)',
      reqPerUser: 'Requests per user/day',
      responseSize: 'Response size (KB)',
      peakFactor: 'Peak factor'
    },
    resultLabels: {
      dailyRequests: 'Daily requests',
      avgQps: 'Average QPS',
      peakQps: 'Peak QPS',
      dailyBandwidth: 'Daily bandwidth',
      peakBandwidth: 'Peak bandwidth'
    },
    perSecondSuffix: '/s',
    referenceTitle: 'Common estimation references',
    units: {
      hundredMillion: ' hundred million',
      tenThousand: ' ten thousand'
    },
    references: [
      { label: '1 day', value: '86,400 seconds' },
      { label: '1 month', value: '~2.5M seconds' },
      { label: 'QPS 1000', value: '~1 eight-core server' },
      { label: '100M/day', value: '~1,200 QPS' },
      { label: 'Single MySQL node', value: '~5,000 QPS' },
      { label: 'Single Redis node', value: '~100,000 QPS' }
    ]
  }
}
