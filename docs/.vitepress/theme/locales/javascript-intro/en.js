export default {
  variableBox: {
    title: '📦 Variables Are Named Boxes',
    defaultName: 'Alice',
    successMessage: '✅ let can be changed',
    errorMessage: '❌ const cannot be reassigned',
    modifyAge: 'Change age',
    modifyName: 'Change name',
    reset: 'Reset'
  },
  scope: {
    title: '🔍 Scope: where variables are visible',
    visibleVariables: '💡 Variables visible here',
    codeTitle: 'Matching code',
    fromGlobal: 'global',
    fromFunction: 'function',
    scopes: [
      {
        id: 'global',
        name: 'Global scope',
        color: '#a0aec0',
        vars: [{ name: 'appName', value: '"Todo"', own: true }],
        explanation:
          'In global scope, only the global variable appName is available.'
      },
      {
        id: 'function',
        name: 'Function scope: greet()',
        color: '#4299e1',
        vars: [
          { name: 'appName', value: '"Todo"', own: false, from: 'global' },
          { name: 'message', value: '"Hello"', own: true }
        ],
        explanation:
          'In function scope, JavaScript can use its own message and the global appName through the scope chain.'
      },
      {
        id: 'block',
        name: 'Block scope: if',
        color: '#38a169',
        vars: [
          { name: 'appName', value: '"Todo"', own: false, from: 'global' },
          { name: 'message', value: '"Hello"', own: false, from: 'function' },
          { name: 'greeting', value: 'message+appName', own: true }
        ],
        explanation:
          'In block scope, JavaScript can use its own greeting and variables from outer scopes.'
      }
    ],
    code: `const appName = "Todo"  // global scope

function greet() {
  const message = "Hello"  // function scope

  if (true) {
    const greeting = message + appName  // block scope
    console.log(greeting)
  }

  console.log(greeting)  // ❌ Error. Outer code cannot see inner variables.
}`
  },
  domTree: {
    title: 'DOM Tree: the Webpage JavaScript Sees',
    defaultTitle: 'My page',
    newTitle: 'Hello World!',
    welcome: 'Welcome',
    itemPrefix: 'Item ',
    newItemPrefix: 'New item ',
    modifyTitle: 'Change title',
    addItem: 'Add list item',
    changeColor: 'Change paragraph color',
    removeItem: 'Remove list item',
    codeTitle: 'Matching code',
    clickHint: 'Click a button above to see the matching code'
  },
  eventLoop: {
    title: 'Event Loop: How JavaScript Executes Code',
    codeQueue: 'Code queue',
    worker: 'Worker (single thread)',
    taskQueue: 'Task queue',
    executing: 'Executing',
    running: 'Running',
    done: 'Done',
    ready: '✅ Ready',
    waiting: '⏳ Waiting...',
    emptyQueue: 'No pending tasks',
    outputLog: 'Output log',
    emptyLog: 'Waiting for output...',
    playing: 'Running...',
    play: '▶ Auto play',
    step: '⏭ Step',
    stop: '⏸ Stop',
    reset: '🔄 Reset',
    orderTitle: 'Execution order: ',
    codeOrderTitle: 'Written order: ',
    notStarted: 'not started',
    codeOrder: '1, 2, 3, 4, 5',
    highlight:
      'Code is written top to bottom, but it does not always run top to bottom because async work is delayed until the current code finishes.',
    syncSource: 'sync code',
    codeQueueItems: [
      { id: 1, code: 'console.log("1")', type: 'sync', output: '1' },
      {
        id: 2,
        code: 'setTimeout(() => console.log("2"), 0)',
        type: 'async',
        output: '2'
      },
      { id: 3, code: 'console.log("3")', type: 'sync', output: '3' },
      {
        id: 4,
        code: 'fetch("/api").then(() => console.log("4"))',
        type: 'async',
        output: '4'
      },
      { id: 5, code: 'console.log("5")', type: 'sync', output: '5' }
    ],
    steps: [
      { description: 'Run console.log("1")', output: '1' },
      {
        description: 'Meet setTimeout and place its callback in the task queue',
        output: null
      },
      { description: 'Run console.log("3")', output: '3' },
      {
        description: 'Meet fetch and place its callback in the task queue',
        output: null
      },
      { description: 'Run console.log("5")', output: '5' },
      { description: 'Run the setTimeout callback', output: '2' },
      { description: 'Run the fetch callback', output: '4' }
    ]
  }
}
