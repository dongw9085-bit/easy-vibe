export default {
  common: {
    reset: '重置',
    running: '运行中...',
    addTask: '添加任务',
    taskLabel: '任务',
    empty: '空',
    runningState: '运行中',
    idleState: '空闲',
    sleeping: '休眠',
    execution: '执行',
    waiting: '等待'
  },

  processThreadCoroutine: {
    title: '进程 / 线程 / 协程 对比演示',
    multiProcess: '多进程',
    multiThread: '多线程',
    coroutine: '协程',
    startSimulation: '开始模拟',
    memoryUsage: '内存占用',
    contextSwitch: '上下文切换',
    completedTasks: '完成任务',
    elapsedTime: '耗时',
    taskQueue: '任务队列',
    explanationTitles: {
      process: '多进程模型',
      thread: '多线程模型',
      coroutine: '协程模型'
    },
    explanationTypes: {
      process: 'success',
      thread: 'warning',
      coroutine: 'info'
    },
    explanationTexts: {
      process:
        '每个进程拥有独立的内存空间，隔离性强但开销大。进程间通信需要 IPC 机制。适合需要强隔离的场景，如浏览器标签页、沙箱程序。',
      thread:
        '线程共享进程内存，切换开销较小，但需要同步机制保护共享数据。适合 CPU 密集型任务和需要共享数据的场景。',
      coroutine:
        '用户态轻量级线程，由运行时调度，切换极快。适合 I/O 密集型高并发场景，如 Web 服务器、网关、长连接服务。'
    }
  },

  threadScheduling: {
    title: '线程调度演示',
    fifo: 'FIFO (先来先服务)',
    roundRobin: '时间片轮转',
    priority: '优先级调度',
    addThread: '添加线程',
    pause: '暂停',
    startScheduling: '开始调度',
    timelineLabel: '时间轴',
    priorityLabel: '优先级',
    stateTexts: {
      running: '运行中',
      ready: '就绪',
      blocked: '阻塞',
      completed: '完成'
    },
    slotRunning: '运行',
    slotWaiting: '等待',
    completedThreads: '已完成线程',
    contextSwitches: '上下文切换',
    avgWaitTime: '平均等待时间',
    throughput: '吞吐量 (线程/秒)',
    currentAlgorithm: '当前调度算法',
    algorithmNames: {
      fifo: 'FIFO (First In First Out)',
      roundrobin: 'Round Robin (时间片轮转)',
      priority: 'Priority Scheduling (优先级调度)'
    },
    algorithmDescriptions: {
      fifo: '按照线程到达的先后顺序执行，直到当前线程完成才执行下一个。简单公平但可能导致短任务等待长任务。',
      roundrobin:
        '每个线程轮流执行一个时间片，时间片用完就切换到下一个线程。响应性好，适合交互式系统。',
      priority:
        '根据线程优先级决定执行顺序，高优先级线程优先执行。需要处理优先级反转和饥饿问题。'
    }
  },

  asyncAwait: {
    title: 'async/await 机制演示',
    runExample: '运行示例',
    showDetails: '显示详细信息',
    codeTitle: 'Python asyncio 示例',
    commentSuspend: '# await 挂起，让出 CPU',
    commentResume: '# I/O 完成后继续执行',
    commentConcurrent: '# 并发执行',
    executionTimeline: '执行时间线',
    eventLoop: '事件循环',
    scheduling: '调度中',
    io: 'I/O',
    concurrentTaskCount: '并发任务数',
    totalExecutionTime: '总执行时间',
    ioWaitTime: 'I/O 等待时间',
    cpuUtilization: 'CPU 利用率',
    alertTitle: 'async/await 的优势',
    alertDescription:
      '当一个任务遇到 I/O 操作(如网络请求)时，await 会让出 CPU，事件循环调度其他任务执行。I/O 完成后，任务从断点恢复。这种方式让单个线程可以并发处理数千个任务。'
  },

  concurrentVsParallel: {
    title: '并发 (Concurrency) vs 并行 (Parallelism) 演示',
    singleCoreConcurrent: '单核并发',
    multiCoreParallel: '多核并行',
    hybridMode: '混合模式',
    startDemo: '开始演示',
    cpuCoreSingle: 'CPU 核心 (单核)',
    cpuCoreMulti: 'CPU 核心 ({count}核)',
    taskExecution: '任务执行',
    comparisonTitle: '并发 vs 并行 对比',
    concurrencyTitle: '并发 (Concurrency)',
    concurrencyDesc: '多个任务交替执行，宏观上同时推进',
    concurrencyExamples: '单核CPU多线程、协程调度、异步I/O',
    parallelismTitle: '并行 (Parallelism)',
    parallelismDesc: '多个任务真正同时执行',
    parallelismExamples: '多核CPU计算、GPU并行计算、分布式处理',
    examplesLabel: '例子',
    needConditions: '需要什么条件?',
    concurrencyNeed: '并发: 单核 CPU 即可实现',
    parallelismNeed: '并行: 需要多核 CPU 或多台机器'
  },

  eventLoop: {
    title: '事件循环 (Event Loop) 演示',
    startSimulation: '开始模拟',
    addTask: '添加任务',
    addMicrotask: '添加微任务',
    speedSlow: '慢速',
    speedNormal: '正常',
    speedFast: '快速',
    speedVeryFast: '极快',
    speedInstant: '即时',
    callStack: '调用栈 (Call Stack)',
    eventLoopTitle: '事件循环 (Event Loop)',
    checkLabel: '检查',
    step1: '执行调用栈中的同步代码',
    step2: '执行所有微任务 (microtasks)',
    step3: '渲染 UI (如果需要)',
    step4: '执行宏任务 (macrotask)',
    taskQueue: '任务队列',
    microtaskQueue: '微任务队列 (Microtasks)',
    macrotaskQueue: '宏任务队列 (Macrotasks)',
    highPriority: '高优先级',
    queueEmpty: '队列为空',
    stackEmpty: '栈为空',
    lineLabel: '第 {line} 行',
    taskTypes: {
      setTimeout: 'setTimeout',
      setInterval: 'setInterval',
      io: 'I/O',
      domEvent: 'DOM事件'
    },
    taskName: '任务 {id}',
    microtaskName: '微任务 {id}'
  },

  processIsolation: {
    title: '进程内存隔离演示',
    createProcess: '创建进程',
    killProcess: '结束进程',
    simulateCrash: '模拟进程崩溃',
    systemMemory: '系统内存',
    processLabel: '进程 {id}',
    codeSegment: '代码段',
    dataSegment: '数据段',
    heapSegment: '堆',
    stackSegment: '栈',
    crashed: '已崩溃',
    crashNotAffectOthers: '不影响其他进程',
    sharedMemory: '共享内存区域 (IPC)',
    processCanAccess: '进程 {id} 可以访问',
    infoTitles: {
      empty: '进程隔离',
      crashed: '隔离性验证',
      running: '内存布局'
    },
    infoDescriptions: {
      empty:
        '每个进程拥有独立的虚拟地址空间，一个进程崩溃不会影响其他进程。点击"创建进程"开始演示。',
      crashed:
        '进程已崩溃但其他进程正常运行，证明进程间内存隔离有效。崩溃的进程会被操作系统回收资源。',
      running:
        '当前有 {count} 个进程在运行。每个进程的内存分为代码段、数据段、堆和栈，相互隔离不可访问。'
    }
  },

  goroutineGreenThread: {
    title: 'Go 协程 (Goroutine) 与 GMP 调度演示',
    overview: '整体视图',
    gmp: 'GMP 调度',
    channel: 'Channel 通信',
    startDemo: '开始演示',
    globalQueue: 'Global Queue (G)',
    processorsLabel: 'P (Processors) - {count} 个',
    machinesLabel: 'M (Machine Threads) - {count} 个',
    localQueue: '本地队列',
    bindM: '绑定 M{id}',
    alertTitle: 'GMP 调度模型',
    alertDescription:
      'G (Goroutine): 待执行的任务。M (Machine): 操作系统线程，执行 G 的载体。P (Processor): 逻辑处理器，提供执行上下文。G 先放入 P 的本地队列，P 与 M 绑定后，M 从 P 获取 G 执行。当本地队列空时，会从全局队列或其他 P 偷任务。'
  },

  coroutineLightweight: {
    title: '协程轻量级对比演示',
    memoryComparison: '内存占用对比',
    switchComparison: '切换开销对比',
    creationComparison: '创建速度对比',
    coroutineCountLabel: '{count} 个协程',
    threadModel: '线程模型',
    coroutineModel: '协程模型',
    memoryUsage: '内存占用',
    creationTime: '创建时间',
    contextSwitch: '上下文切换',
    moreIndicator: '+{count} 更多...',
    savingsBadge: '节省 {percent}% 内存',
    insightTitles: {
      small: '小规模场景',
      medium: '中等规模场景',
      large: '大规模高并发场景'
    },
    insightDescriptions: {
      small:
        '当前 {count} 个并发单元，线程和协程的差别还不明显。建议增加到 1000+ 来观察显著差异。',
      medium:
        '使用协程可以节省 {savings}% 的内存（约 {memSaved}MB），创建速度快 {speedup} 倍。',
      large:
        '在高并发场景下，协程优势巨大！节省 {savings}% 内存（{memSaved}MB），{threadMem}MB vs {coroutineMem}MB。这是 C10K/C10M 问题的关键解决方案。'
    }
  }
}
