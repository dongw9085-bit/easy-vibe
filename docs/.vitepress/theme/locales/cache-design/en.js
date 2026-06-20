export default {
  performanceComparison: {
    scenarios: [
      {
        name: 'Without cache',
        metric: '5-8 s response, high DB pressure',
        width: '95%'
      },
      {
        name: 'With cache',
        metric: '50 ms response, most reads served from memory',
        width: '24%'
      }
    ]
  },
  lifecycle: {
    title: 'Cache Lifecycle Demo',
    subtitle: 'Watch a cache entry move from creation to eviction',
    storage: 'Cache storage',
    capacity: 'capacity',
    hitRate: 'Hit rate',
    evictions: 'Evictions',
    ttl: 'TTL',
    hits: 'Hits',
    access: 'Accessed',
    secondsAgo: 's ago',
    operation: 'Operation',
    read: 'Read data',
    write: 'Write new data',
    auto: 'Auto simulation',
    start: 'Start',
    stop: 'Stop',
    autoSimulation: ' auto simulation',
    timeline: 'Event timeline',
    legend: {
      new: 'New write',
      hit: 'Cache hit',
      expiring: 'Expiring soon',
      evicting: 'Evicting'
    },
    events: {
      evict: 'Evict {key} (LRU)',
      write: 'Write {key}',
      emptyMiss: 'Cache is empty, miss',
      hit: 'Hit {key} ({hits} times)',
      expired: '{key} expired'
    }
  },
  problems: {
    title: 'Three Common Cache Problems',
    subtitle: 'Scenarios and fixes for penetration, breakdown, and avalanche',
    scenarioTitle: 'Scenario simulation',
    solutionsTitle: 'Solutions',
    dbPressure: 'Database pressure',
    dbLoad: 'Database load',
    simulatingAttack: 'Attacking...',
    simulateAttack: 'Simulate malicious attack',
    simulating: 'Simulating...',
    simulateHotExpire: 'Simulate hot key expiration',
    simulateAvalanche: 'Simulate cache avalanche',
    applyRandomTtl: 'Apply fix: random TTL',
    comparisonTitle: 'Problem comparison',
    tableHeaders: ['Problem', 'Cause', 'Impact', 'Main fixes'],
    problems: [
      {
        id: 'penetration',
        name: 'Cache penetration',
        icon: '🕳️',
        introTitle: 'What is cache penetration?',
        introHtml:
          'A request queries <strong>nonexistent data</strong>, such as malicious id=-1. The cache misses and the database also has no record, so every request hits the database.',
        flow: ['Request id=-999', 'Cache miss', 'Database query (not found)'],
        solutions: [
          {
            number: '1',
            name: 'Bloom Filter',
            desc: 'Add a filter before the cache to quickly decide that an id definitely does not exist.',
            note: 'Can prove absence, but may have false positives.'
          },
          {
            number: '2',
            name: 'Cache empty objects',
            desc: 'When a record does not exist, cache a NULL value with a short TTL such as 5 minutes.'
          }
        ]
      },
      {
        id: 'breakdown',
        name: 'Cache breakdown',
        icon: '🔥',
        introTitle: 'What is cache breakdown?',
        introHtml:
          'A <strong>hot key</strong> expires, such as a trending topic, and millions of concurrent requests hit the database at once.',
        hotData: 'Hot data',
        concurrentRequests: 'Concurrent requests',
        requestPrefix: 'Request',
        mutex: 'Mutex lock',
        mutexText: 'Only one thread can query the database',
        statuses: {
          waiting: 'Waiting',
          processing: 'Querying database...',
          done: '✅ Done',
          fromCache: '✅ From cache'
        },
        solutions: [
          {
            number: '1',
            name: 'Mutex Lock',
            desc: 'Allow only one thread to query the database while other threads wait.',
            note: 'Pro: simple. Con: blocks other requests.'
          },
          {
            number: '2',
            name: 'Logical Expiration',
            desc: 'Do not set a cache TTL. Store an expiration timestamp inside the value.',
            note: 'When data is logically expired, refresh asynchronously while returning stale data.'
          }
        ]
      },
      {
        id: 'avalanche',
        name: 'Cache avalanche',
        icon: '❄️',
        introTitle: 'What is cache avalanche?',
        introHtml:
          'Many cache entries <strong>expire at the same time</strong>, such as after a system restart where everything expires at 00:00:00, and the database is overwhelmed.',
        expiredTogether: 'Expired together!',
        solutions: [
          {
            number: '1',
            name: 'Random TTL',
            desc: 'Avoid simultaneous expiration by adding random jitter to TTL.',
            code: 'ttl = 600 + random.randint(-60, 60) # 600 ± 60 seconds'
          },
          {
            number: '2',
            name: 'Cache warm-up',
            desc: 'Proactively load hot data into cache when the system starts.',
            note: 'Use scheduled jobs to refresh hot data before it expires.'
          },
          {
            number: '3',
            name: 'Circuit breaking and fallback',
            desc: 'When database pressure is too high, temporarily stop refreshing cache and return fallback data.',
            note: 'For example: "System busy, please try again later."'
          }
        ]
      }
    ],
    comparisonRows: [
      [
        'Cache penetration',
        'Querying nonexistent data',
        'Higher database pressure',
        'Bloom filter, cache empty objects'
      ],
      [
        'Cache breakdown',
        'Hot data expires',
        'Instant database pressure',
        'Mutex lock, logical expiration'
      ],
      [
        'Cache avalanche',
        'Many entries expire together',
        'Database overload',
        'Random TTL, cache warm-up'
      ]
    ]
  },
  consistency: {
    strategies: [
      {
        name: 'Update DB, then delete cache',
        desc: 'Low complexity and a short inconsistency window; works for most products.'
      },
      {
        name: 'Delayed double delete',
        desc: 'Deletes cache twice to reduce stale reads in high consistency scenarios.'
      },
      {
        name: 'Avoid delete-before-update',
        desc: 'Deleting cache first can reload old database values under concurrency.'
      }
    ]
  },
  ecommerceArchitecture: {
    title: 'E-commerce Cache Architecture Demo',
    description:
      'Shows multi-level cache architecture in e-commerce systems, including product, inventory, and user caches.',
    placeholder:
      'E-commerce cache architecture demo placeholder - detailed interaction to be implemented'
  }
}
