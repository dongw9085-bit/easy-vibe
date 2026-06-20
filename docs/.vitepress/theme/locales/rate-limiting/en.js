const algorithms = [
  {
    key: 'token',
    label: 'Token bucket',
    desc: 'Adds tokens to the bucket at a fixed rate. Each request consumes one token, and extra tokens are discarded when the bucket is full. It allows bursts when stored tokens are available.'
  },
  {
    key: 'leaky',
    label: 'Leaky bucket',
    desc: 'Requests first enter a queue and are processed at a fixed leak rate. New requests are rejected when the bucket is full. Output rate stays constant, smoothing traffic completely.'
  },
  {
    key: 'sliding',
    label: 'Sliding window',
    desc: 'Counts requests in the most recent N seconds and rejects traffic above the threshold. It is more precise than a fixed window and avoids bursts at window boundaries.'
  }
]

export default {
  algorithms,
  algorithmDemo: {
    title: 'Rate Limiting Algorithm Comparison',
    subtitle: 'Choose an algorithm, then send requests to observe the effect',
    buttons: {
      send: 'Send request',
      burst: 'Burst 10 requests',
      reset: 'Reset'
    },
    stats: {
      passed: 'Passed',
      rejected: 'Rejected',
      tokens: 'Tokens left',
      queued: 'Queued in bucket',
      window: 'Requests in window'
    },
    logs: {
      leakyProcessed: 'Leaky bucket processed one queued request',
      tokenPassed: 'Request passed (tokens left: {tokens})',
      tokenRejected: 'Not enough tokens; request rejected (429)',
      leakyQueued: 'Request queued (queue: {queue}/5)',
      leakyRejected: 'Bucket full; request rejected (429)',
      slidingPassed: 'Request passed (in window: {count}/5)',
      slidingRejected: 'Window request limit exceeded (429)'
    }
  },
  visualizer: {
    title: 'Rate Limiting Visualization',
    subtitle:
      'Choose an algorithm and send requests to see rate limiting in action',
    buttons: {
      send: 'Send request',
      burst: 'Simulate burst (10)',
      reset: 'Reset'
    },
    stats: {
      totalSent: 'Sent',
      passed: 'Passed',
      rejected: 'Rejected',
      tokens: 'Tokens left'
    },
    requestLabel: 'Request #{id}'
  },
  backpressure: {
    title: 'Backpressure Control',
    subtitle: 'What happens when production is faster than consumption?',
    produceRate: 'Produce rate:',
    consumeRate: 'Consume rate:',
    buttons: {
      start: 'Start',
      stop: 'Stop'
    },
    producer: 'Producer',
    consumer: 'Consumer',
    bufferLabel: 'Buffer ({size}/{max})',
    strategiesTitle: 'Backpressure strategies:',
    status: {
      overflow: 'Buffer overflow. Data is being lost',
      critical: 'About to overflow; backpressure is needed',
      warning: 'Buffer pressure is high',
      normal: 'Running normally'
    },
    strategies: [
      {
        name: 'Drop strategy',
        desc: 'Drop new data directly when the buffer is full',
        example: 'Example: log collection, real-time metrics'
      },
      {
        name: 'Blocking strategy',
        desc: 'Make producers wait when the buffer is full',
        example: 'Example: Go channels, Java BlockingQueue'
      },
      {
        name: 'Sampling strategy',
        desc: 'Process only part of the data and skip the rest',
        example: 'Example: downsampling high-frequency sensor data'
      },
      {
        name: 'Elastic scaling',
        desc: 'Dynamically increase the number of consumers',
        example: 'Example: Kubernetes HPA autoscaling'
      }
    ]
  }
}
