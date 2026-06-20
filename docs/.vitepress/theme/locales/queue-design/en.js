export default {
  decoupling: {
    title: 'System Decoupling Demo',
    subtitle: 'From tight coupling to loose coupling',
    syncMode: '🔗 Tight coupling (sync)',
    asyncMode: '🔓 Loose coupling (async)',
    syncTitle: '❌ The fatal problem of tight coupling',
    asyncTitle: '✅ The core advantage of loose coupling',
    orderService: 'Order service',
    createOrder: 'Create order',
    createOrderAndSend: 'Create order + send message',
    notificationService: 'Notification service',
    notificationDesc: 'Send SMS/email',
    serviceDown: 'Service down ❌',
    messageQueue: 'Message queue',
    messageSent: 'Message sent',
    smsService: 'SMS service',
    emailService: 'Email service',
    pointsService: 'Points service',
    offline: 'Offline (order unaffected)',
    running: 'Running',
    simulateFailure: 'Simulate notification failure',
    sendOrderMessage: 'Send order message',
    ideaTitle: 'Core idea:',
    idea: 'Synchronous calls create strong dependencies and slow responses; asynchronous messaging decouples systems, improves response speed, and scales more easily.',
    syncCalls: [
      { id: 1, service: 'Call inventory service', status: 'Processing...' },
      { id: 2, service: 'Call points service', status: 'Processing...' },
      {
        id: 3,
        service: 'Call notification service',
        status: 'Failed! Order rolled back'
      }
    ],
    problems: [
      {
        term: 'Strong dependency: ',
        desc: 'notification failure blocks order creation'
      },
      {
        term: 'Slow response: ',
        desc: 'total time = 300ms + 500ms + 400ms = 1200ms'
      },
      {
        term: 'Hard to extend: ',
        desc: 'adding a service requires changing order code'
      }
    ],
    benefits: [
      {
        term: 'Independent operation: ',
        desc: 'notification failures do not block order creation'
      },
      {
        term: 'Fast response: ',
        desc: 'the order service only spends 50ms sending a message'
      },
      {
        term: 'Easy extension: ',
        desc: 'new consumers can be added without changing order code'
      }
    ]
  },
  peakShaving: {
    title: 'Peak Shaving: flatten traffic spikes',
    subtitle: 'Simulate a burst and see how a queue protects backend systems',
    processRate: 'Processing capacity (Consumer)',
    processRateDesc: 'Maximum backend processing speed',
    queueCapacity: 'Queue capacity (Queue Size)',
    queueCapacityDesc: 'Maximum requests the message queue can buffer',
    burst: '⚡️ Simulate flash-sale traffic burst',
    reset: '🔄 Reset system',
    inboundRate: 'Current inbound traffic',
    queueBacklog: 'Queue backlog',
    processRateActual: 'Actual processing rate',
    rejected: 'Rejected requests (rate limited)',
    legendInbound: 'Inbound traffic (user requests)',
    legendProcess: 'Processed traffic (system load)',
    legendQueue: 'Queue backlog',
    principleTitle: 'Core principle:',
    principlePrefix: 'When ',
    inbound: 'inbound traffic',
    blue: ' (blue)',
    exceeds: ' exceeds ',
    capacity: 'processing capacity',
    greenLine: ' (green line)',
    principleMiddle: ', extra requests are stored in the ',
    queue: 'message queue',
    orangeArea: ' (orange area).',
    principleEnd:
      'After the traffic peak passes, the system keeps processing the backlog at full speed until the queue is empty. This is peak shaving.'
  },
  reliability: {
    title: 'Message Reliability Demo',
    subtitle: 'Three defense lines keep messages from being lost',
    line1: 'Line 1',
    line2: 'Line 2',
    line3: 'Line 3',
    producerAck: 'Producer ACK',
    brokerPersistence: 'Broker persistence',
    consumerAck: 'Consumer ACK',
    producer: 'Producer',
    sendMessage: 'Send message',
    message: 'Message',
    ackConfirm: 'ACK confirmation',
    broker: 'Broker',
    receiveAndStore: 'Receive and store',
    sendAndWait: 'Send and wait for ACK',
    producerTip:
      'If no ACK is received, the producer retries or records a local log.',
    memoryStorage: 'Memory storage',
    memoryDesc: 'Fast, but lost on restart',
    highRisk: '❌ High risk',
    diskStorage: 'Disk storage',
    diskDesc: 'Persisted to avoid loss',
    recommended: '✅ Recommended',
    replication: 'Multi-replica sync',
    replicationDetail:
      'Messages are synced to 3 nodes, so data is not lost even if 1 node fails.',
    storageMode: 'Storage mode',
    memory: 'Memory',
    disk: 'Disk',
    diskSafe: 'Message persisted and safe',
    memoryRisk: 'Message is only in memory and will be lost on restart',
    pullMessage: 'Pull message',
    pullDesc: 'Fetch message from Broker',
    processMessage: 'Process message',
    processDesc: 'Run business logic',
    manualAck: 'Manual ACK',
    manualAckDesc: 'Confirm after processing',
    autoAck: 'Auto ACK',
    autoAckDesc: 'Efficient but can lose messages',
    notRecommended: '⚠️ Not recommended',
    manualAckSpaced: 'Manual ACK',
    manualAckReliable: 'Reliable, ACK after processing',
    simulateConsume: 'Simulate consumption',
    startConsume: 'Start consumption flow',
    consumeTip:
      'If processing fails, no ACK is sent and the Broker redelivers.',
    summaryTitle: 'All three defense lines are required:',
    summary: 'Producer ACK → Broker persistence → Consumer ACK',
    sending: 'Sending...',
    sent: 'Sent',
    ackSafe: 'ACK received, message safe'
  },
  idempotence: {
    title: 'Idempotence Demo',
    subtitle: 'Repeated consumption does not create side effects',
    transferTab: '💰 Bank transfer',
    elevatorTab: '🛗 Elevator button',
    transferTitle: '❌ Non-idempotent operation: bank transfer',
    transferSubtitle: 'Repeated consumption can debit multiple times',
    sender: 'Sender',
    receiver: 'Receiver',
    balance: 'Balance: ¥',
    transferAmount: 'Transfer ¥100',
    retryTimes: 'Retried {count} times',
    protection: 'Idempotence protection',
    enabled: 'Enabled',
    disabled: 'Disabled',
    processing: 'Processing...',
    simulateDuplicate: 'Simulate duplicate consumption',
    uniqueIdInfo:
      'Each transaction has a unique ID, so duplicate requests are filtered automatically.',
    logTitle: 'Processing log',
    emptyLog: 'No logs yet. Click the button to start.',
    noProtection: '❌ No idempotence protection',
    withProtection: '✅ With idempotence protection',
    debit: 'Debit ¥{amount}',
    duplicateDebit: 'Duplicate consumption causes multiple debits',
    filteredOnce: 'Duplicate requests are filtered, so debit happens once',
    elevatorTitle: '✅ Naturally idempotent operation: elevator button',
    elevatorSubtitle:
      'No matter how many times it is pressed, the elevator handles one request',
    elevatorPanel: 'Elevator button panel',
    pressedPrefix: 'Pressed',
    pressedSuffix: 'times',
    rapidPress: 'Press 3 times quickly',
    clickRepeatedly: '🚀 Click repeatedly',
    elevatorInfo:
      'Pressed {count} times, but the elevator handles only one request.',
    whyElevator: 'Why is an elevator button idempotent?',
    explanations: [
      'State changes once: idle → selected',
      'Repeated requests do not change the target floor',
      'No extra idempotence protection is required'
    ],
    principleTitle: 'Core idempotence principle:',
    transferPrinciple:
      'Generate a unique ID for each message and check whether it was processed before doing the operation.',
    elevatorPrinciple:
      'Design operations so repeated execution has the same effect as one execution.',
    logRequest: 'Received transfer request: ¥100',
    logSuccess: 'Attempt {attempt}: transferred ¥100 successfully',
    logRecorded:
      'Idempotence check: unique ID recorded, later requests filtered',
    logDuplicate: 'Attempt {attempt}: duplicate request ignored',
    logTransfer: 'Attempt {attempt}: transferred ¥100'
  }
}
