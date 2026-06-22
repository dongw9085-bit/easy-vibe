export default {
  comparison: {
    title: 'Popular Async Task Frameworks',
    subtitle: 'Click a framework to inspect the details',
    featureTitle: 'Core features:',
    usecaseTitle: 'Typical scenarios:',
    frameworks: [
      {
        name: 'Celery',
        lang: 'Python',
        rating: 5,
        desc: 'The most popular distributed task queue in the Python ecosystem. It supports multiple brokers such as RabbitMQ and Redis, with a broad feature set and active community.',
        features: [
          'Scheduled tasks',
          'Task chains',
          'Result backend',
          'Automatic retries',
          'Priority queues',
          'Task routing'
        ],
        usecase:
          'Data pipelines, email sending, report generation, machine learning training jobs'
      },
      {
        name: 'Sidekiq',
        lang: 'Ruby',
        rating: 5,
        desc: 'A high-performance background job processor in the Ruby ecosystem. It is Redis-based, uses a multithreaded model, and is very memory efficient.',
        features: [
          'Multithreading',
          'Web UI',
          'Scheduled jobs',
          'Batch processing',
          'Rate limiting',
          'Unique jobs'
        ],
        usecase:
          'Email, notifications, import and export jobs in Rails applications'
      },
      {
        name: 'Bull',
        lang: 'Node.js',
        rating: 4,
        desc: 'A mature Redis-based task queue library in the Node.js ecosystem. It supports priorities, delayed jobs, repeatable jobs, and more. BullMQ is its next-generation version.',
        features: [
          'Priorities',
          'Delayed jobs',
          'Rate limiting',
          'Concurrency control',
          'Event driven',
          'Dashboard'
        ],
        usecase:
          'API background processing, file conversion, crawling jobs, notifications'
      },
      {
        name: 'RQ',
        lang: 'Python',
        rating: 3,
        desc: 'A lightweight Python task queue based on Redis. Its API is simple and easy to use, suitable for small and mid-sized projects that do not need all Celery features.',
        features: [
          'Simple API',
          'Job dependencies',
          'Worker management',
          'Failure retries',
          'Dashboard'
        ],
        usecase: 'Background jobs for small and mid-sized web applications'
      },
      {
        name: 'Kafka Streams',
        lang: 'Java/JVM',
        rating: 4,
        desc: 'A Kafka-based stream processing framework for high-throughput real-time data processing. It naturally supports distributed execution and fault tolerance.',
        features: [
          'Stream processing',
          'Exactly-once semantics',
          'State stores',
          'Windowing',
          'High throughput',
          'Fault tolerance'
        ],
        usecase:
          'Real-time data pipelines, event-driven architecture, log aggregation and analytics'
      }
    ]
  },
  flow: {
    title: 'Synchronous vs Asynchronous Processing',
    subtitle: 'Click the button to compare the two processing modes',
    tabs: { sync: 'Synchronous', async: 'Asynchronous' },
    userRequest: 'User request',
    serverProcessing: 'Server processing',
    submitOrder: 'Submit order',
    processing: 'Processing...',
    waitingSubmit: 'Waiting to submit',
    userWaiting: '⏳ User waiting... ({elapsed}s)',
    returned: '✅ Returned ({time}ms)',
    waitingResponse: '⏳ Waiting for response...',
    completed: '✅ Completed ({time})',
    syncSummary:
      'Synchronous mode: the user waited {time}ms and only received a response after all tasks finished serially.',
    asyncSummary:
      'Asynchronous mode: the user waited only {time}ms while slow tasks continued in the background.',
    tasks: [
      { name: 'Reserve inventory', time: 50, status: 'pending' },
      { name: 'Create order', time: 100, status: 'pending' },
      { name: 'Send confirmation email', time: 800, status: 'pending' },
      { name: 'Update recommendation system', time: 600, status: 'pending' },
      { name: 'Write audit log', time: 300, status: 'pending' }
    ]
  },
  retry: {
    title: 'Task Retry and Backoff Strategies',
    subtitle: 'Simulate the retry process after a task fails',
    runningLabel: 'Retrying...',
    startLabel: 'Run task (simulate failure)',
    attemptLabel: 'Attempt {count}: {kind}',
    executeKind: 'run',
    retryKind: 'retry',
    waitLabel: 'Wait {delay}s before retry',
    formulaLabel: 'Delay formula:',
    statuses: {
      success: 'Success',
      fail: 'Failed',
      waiting: 'Waiting',
      running: 'Running'
    },
    errors: ['Connection timeout', 'Service unavailable', 'Network error'],
    strategies: [
      {
        key: 'fixed',
        label: 'Fixed interval',
        desc: 'Every retry waits for the same duration. It is simple, but can cause retry storms.',
        formula: 'delay = 2s'
      },
      {
        key: 'exponential',
        label: 'Exponential backoff',
        desc: 'The wait time doubles after each retry, which helps avoid overloading the server.',
        formula: 'delay = 2^n seconds (1s, 2s, 4s, 8s...)'
      },
      {
        key: 'jitter',
        label: 'Backoff + jitter',
        desc: 'Adds random offset on top of exponential backoff so many clients do not retry at the same time.',
        formula: 'delay = 2^n + random(0, 1s)'
      }
    ]
  },
  worker: {
    title: 'Worker Pool Model',
    subtitle: 'Watch tasks get distributed to different workers',
    buttons: { add: 'Add task', start: 'Start processing', reset: 'Reset' },
    workerCount: 'Worker count:',
    queueTitle: 'Task queue ({count})',
    doneTitle: 'Completed ({count})',
    workersTitle: 'Workers',
    emptyQueue: 'Queue is empty',
    emptyDone: 'None yet',
    idle: '💤 Idle',
    completedCount: 'Completed: {count}',
    taskTypes: [
      'Send email',
      'Generate report',
      'Compress image',
      'Sync data',
      'Push notification',
      'Archive logs',
      'Export PDF',
      'Warm cache'
    ]
  }
}
