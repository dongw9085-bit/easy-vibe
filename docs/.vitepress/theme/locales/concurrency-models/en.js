export default {
  common: {
    reset: 'Reset',
    running: 'Running...',
    addTask: 'Add Task',
    taskLabel: 'Task',
    empty: 'Empty',
    runningState: 'Running',
    idleState: 'Idle',
    sleeping: 'Sleeping',
    execution: 'Exec',
    waiting: 'Wait'
  },

  processThreadCoroutine: {
    title: 'Process / Thread / Coroutine Comparison',
    multiProcess: 'Multi-Process',
    multiThread: 'Multi-Thread',
    coroutine: 'Coroutine',
    startSimulation: 'Start Simulation',
    memoryUsage: 'Memory Usage',
    contextSwitch: 'Context Switches',
    completedTasks: 'Completed Tasks',
    elapsedTime: 'Elapsed Time',
    taskQueue: 'Task Queue',
    explanationTitles: {
      process: 'Multi-Process Model',
      thread: 'Multi-Thread Model',
      coroutine: 'Coroutine Model'
    },
    explanationTypes: {
      process: 'success',
      thread: 'warning',
      coroutine: 'info'
    },
    explanationTexts: {
      process:
        'Each process has its own independent memory space, strong isolation but high overhead. Inter-process communication requires IPC mechanisms. Suitable for scenarios requiring strong isolation, such as browser tabs and sandbox programs.',
      thread:
        'Threads share process memory, with lower switching overhead, but require synchronization mechanisms to protect shared data. Suitable for CPU-intensive tasks and scenarios that need shared data.',
      coroutine:
        'User-space lightweight threads, scheduled by the runtime, extremely fast switching. Suitable for I/O-intensive high-concurrency scenarios, such as web servers, gateways, and long-connection services.'
    }
  },

  threadScheduling: {
    title: 'Thread Scheduling Demo',
    fifo: 'FIFO (First Come First Served)',
    roundRobin: 'Round Robin',
    priority: 'Priority Scheduling',
    addThread: 'Add Thread',
    pause: 'Pause',
    startScheduling: 'Start Scheduling',
    timelineLabel: 'Timeline',
    priorityLabel: 'Priority',
    stateTexts: {
      running: 'Running',
      ready: 'Ready',
      blocked: 'Blocked',
      completed: 'Completed'
    },
    slotRunning: 'Run',
    slotWaiting: 'Wait',
    completedThreads: 'Completed Threads',
    contextSwitches: 'Context Switches',
    avgWaitTime: 'Avg Wait Time',
    throughput: 'Throughput (threads/s)',
    currentAlgorithm: 'Current Scheduling Algorithm',
    algorithmNames: {
      fifo: 'FIFO (First In First Out)',
      roundrobin: 'Round Robin (Time Slice)',
      priority: 'Priority Scheduling'
    },
    algorithmDescriptions: {
      fifo: 'Execute threads in the order they arrive. The current thread must complete before the next one starts. Simple and fair, but may cause short tasks to wait for long ones.',
      roundrobin:
        'Each thread takes turns executing for a time slice. When the slice expires, it switches to the next thread. Good responsiveness, suitable for interactive systems.',
      priority:
        'Execution order is determined by thread priority. Higher priority threads execute first. Requires handling priority inversion and starvation issues.'
    }
  },

  asyncAwait: {
    title: 'async/await Mechanism Demo',
    runExample: 'Run Example',
    showDetails: 'Show Details',
    codeTitle: 'Python asyncio Example',
    commentSuspend: '# await suspends, yields CPU',
    commentResume: '# Continue after I/O completes',
    commentConcurrent: '# Concurrent execution',
    executionTimeline: 'Execution Timeline',
    eventLoop: 'Event Loop',
    scheduling: 'Scheduling',
    io: 'I/O',
    concurrentTaskCount: 'Concurrent Tasks',
    totalExecutionTime: 'Total Time',
    ioWaitTime: 'I/O Wait Time',
    cpuUtilization: 'CPU Utilization',
    alertTitle: 'Advantages of async/await',
    alertDescription:
      'When a task encounters an I/O operation (such as a network request), await yields the CPU, and the event loop schedules other tasks to execute. After I/O completes, the task resumes from the suspension point. This approach allows a single thread to handle thousands of concurrent tasks.'
  },

  concurrentVsParallel: {
    title: 'Concurrency vs Parallelism Demo',
    singleCoreConcurrent: 'Single-Core Concurrent',
    multiCoreParallel: 'Multi-Core Parallel',
    hybridMode: 'Hybrid Mode',
    startDemo: 'Start Demo',
    cpuCoreSingle: 'CPU Core (Single Core)',
    cpuCoreMulti: 'CPU Cores ({count} Cores)',
    taskExecution: 'Task Execution',
    comparisonTitle: 'Concurrency vs Parallelism',
    concurrencyTitle: 'Concurrency',
    concurrencyDesc:
      'Multiple tasks alternate execution, progressing simultaneously at a macro level',
    concurrencyExamples:
      'Single-core CPU multi-threading, coroutine scheduling, async I/O',
    parallelismTitle: 'Parallelism',
    parallelismDesc: 'Multiple tasks execute truly simultaneously',
    parallelismExamples:
      'Multi-core CPU computing, GPU parallel computing, distributed processing',
    examplesLabel: 'Examples',
    needConditions: 'What Conditions Are Needed?',
    concurrencyNeed: 'Concurrency: A single-core CPU is sufficient',
    parallelismNeed: 'Parallelism: Requires multi-core CPU or multiple machines'
  },

  eventLoop: {
    title: 'Event Loop Demo',
    startSimulation: 'Start Simulation',
    addTask: 'Add Task',
    addMicrotask: 'Add Microtask',
    speedSlow: 'Slow',
    speedNormal: 'Normal',
    speedFast: 'Fast',
    speedVeryFast: 'Very Fast',
    speedInstant: 'Instant',
    callStack: 'Call Stack',
    eventLoopTitle: 'Event Loop',
    checkLabel: 'Check',
    step1: 'Execute synchronous code in the call stack',
    step2: 'Execute all microtasks',
    step3: 'Render UI (if needed)',
    step4: 'Execute macrotask',
    taskQueue: 'Task Queue',
    microtaskQueue: 'Microtask Queue',
    macrotaskQueue: 'Macrotask Queue',
    highPriority: 'High Priority',
    queueEmpty: 'Queue Empty',
    stackEmpty: 'Stack Empty',
    lineLabel: 'Line {line}',
    taskTypes: {
      setTimeout: 'setTimeout',
      setInterval: 'setInterval',
      io: 'I/O',
      domEvent: 'DOM Event'
    },
    taskName: 'Task {id}',
    microtaskName: 'Microtask {id}'
  },

  processIsolation: {
    title: 'Process Memory Isolation Demo',
    createProcess: 'Create Process',
    killProcess: 'Kill Process',
    simulateCrash: 'Simulate Crash',
    systemMemory: 'System Memory',
    processLabel: 'Process {id}',
    codeSegment: 'Code',
    dataSegment: 'Data',
    heapSegment: 'Heap',
    stackSegment: 'Stack',
    crashed: 'Crashed',
    crashNotAffectOthers: 'Does not affect other processes',
    sharedMemory: 'Shared Memory (IPC)',
    processCanAccess: 'Process {id} can access',
    infoTitles: {
      empty: 'Process Isolation',
      crashed: 'Isolation Verified',
      running: 'Memory Layout'
    },
    infoDescriptions: {
      empty:
        'Each process has its own independent virtual address space. A crash in one process does not affect other processes. Click "Create Process" to start the demo.',
      crashed:
        'A process has crashed but other processes are still running normally, proving that inter-process memory isolation is effective. The crashed process will have its resources reclaimed by the OS.',
      running:
        '{count} processes are currently running. Each process memory is divided into code, data, heap, and stack segments, isolated from each other.'
    }
  },

  goroutineGreenThread: {
    title: 'Go Goroutine & GMP Scheduling Demo',
    overview: 'Overview',
    gmp: 'GMP Scheduling',
    channel: 'Channel Communication',
    startDemo: 'Start Demo',
    globalQueue: 'Global Queue (G)',
    processorsLabel: 'P (Processors) - {count} Total',
    machinesLabel: 'M (Machine Threads) - {count} Total',
    localQueue: 'Local Queue',
    bindM: 'Bound to M{id}',
    alertTitle: 'GMP Scheduling Model',
    alertDescription:
      "G (Goroutine): Tasks to be executed. M (Machine): OS threads that execute G. P (Processor): Logical processor providing execution context. G is first placed in P's local queue. After P binds to M, M fetches G from P for execution. When the local queue is empty, it steals tasks from the global queue or other P's."
  },

  coroutineLightweight: {
    title: 'Coroutine Lightweight Comparison Demo',
    memoryComparison: 'Memory Usage Comparison',
    switchComparison: 'Switching Overhead Comparison',
    creationComparison: 'Creation Speed Comparison',
    coroutineCountLabel: '{count} coroutines',
    threadModel: 'Thread Model',
    coroutineModel: 'Coroutine Model',
    memoryUsage: 'Memory Usage',
    creationTime: 'Creation Time',
    contextSwitch: 'Context Switch',
    moreIndicator: '+{count} more...',
    savingsBadge: 'Saves {percent}% Memory',
    insightTitles: {
      small: 'Small Scale',
      medium: 'Medium Scale',
      large: 'Large Scale High Concurrency'
    },
    insightDescriptions: {
      small:
        'Currently {count} concurrent units. The difference between threads and coroutines is not significant yet. Try increasing to 1000+ to observe significant differences.',
      medium:
        'Using coroutines can save {savings}% of memory (about {memSaved}MB), with {speedup}x faster creation speed.',
      large:
        'In high-concurrency scenarios, coroutines have a huge advantage! Saving {savings}% memory ({memSaved}MB), {threadMem}MB vs {coroutineMem}MB. This is the key solution for the C10K/C10M problem.'
    }
  }
}
