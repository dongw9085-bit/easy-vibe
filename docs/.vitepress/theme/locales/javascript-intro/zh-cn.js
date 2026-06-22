export default {
  variableBox: {
    title: '📦 变量就像带名字的盒子',
    defaultName: '张三',
    successMessage: '✅ let 可以修改',
    errorMessage: '❌ const 不能改',
    modifyAge: '修改 age',
    modifyName: '修改 name',
    reset: '重置'
  },
  scope: {
    title: '🔍 作用域：变量的"可见范围"',
    visibleVariables: '💡 当前位置可见的变量',
    codeTitle: '对应代码',
    fromGlobal: '全局',
    fromFunction: '函数',
    scopes: [
      {
        id: 'global',
        name: '全局作用域',
        color: '#a0aec0',
        vars: [{ name: 'appName', value: '"Todo"', own: true }],
        explanation: '在全局作用域，只能使用全局变量 appName'
      },
      {
        id: 'function',
        name: '函数 greet() 作用域',
        color: '#4299e1',
        vars: [
          { name: 'appName', value: '"Todo"', own: false, from: '全局' },
          { name: 'message', value: '"你好"', own: true }
        ],
        explanation:
          '在函数作用域，可以使用自己的 message 和全局的 appName（作用域链查找）'
      },
      {
        id: 'block',
        name: 'if 块作用域',
        color: '#38a169',
        vars: [
          { name: 'appName', value: '"Todo"', own: false, from: '全局' },
          { name: 'message', value: '"你好"', own: false, from: '函数' },
          { name: 'greeting', value: 'message+appName', own: true }
        ],
        explanation:
          '在块级作用域，可以使用自己的 greeting，以及外层的 message 和 appName'
      }
    ],
    code: `const appName = "Todo"  // 全局作用域

function greet() {
  const message = "你好"  // 函数作用域

  if (true) {
    const greeting = message + appName  // 块级作用域
    console.log(greeting)
  }

  console.log(greeting)  // ❌ 报错！外层看不到内层
}`
  },
  domTree: {
    title: 'DOM 树：JavaScript 看到的网页',
    defaultTitle: '我的网页',
    newTitle: 'Hello World!',
    welcome: '欢迎光临',
    itemPrefix: '项目',
    newItemPrefix: '新项目',
    modifyTitle: '修改标题',
    addItem: '添加列表项',
    changeColor: '改变段落颜色',
    removeItem: '删除列表项',
    codeTitle: '对应代码',
    clickHint: '点击上方按钮查看对应代码'
  },
  eventLoop: {
    title: '事件循环：JavaScript 的执行机制',
    codeQueue: '代码队列',
    worker: '工位（单线程）',
    taskQueue: '便签栏（任务队列）',
    executing: '执行中',
    running: '正在执行',
    done: '执行完成',
    ready: '✅ 就绪',
    waiting: '⏳ 等待中...',
    emptyQueue: '暂无待办任务',
    outputLog: '输出日志',
    emptyLog: '等待输出...',
    playing: '执行中...',
    play: '▶ 自动播放',
    step: '⏭ 单步执行',
    stop: '⏸ 停止',
    reset: '🔄 重置',
    orderTitle: '执行顺序：',
    codeOrderTitle: '代码书写顺序：',
    notStarted: '还未开始',
    codeOrder: '1, 2, 3, 4, 5',
    highlight:
      '代码从上到下写的，但执行顺序不一定从上到下——因为异步操作会被"推迟"到当前代码执行完之后。',
    syncSource: '同步代码',
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
      { description: '执行 console.log("1")', output: '1' },
      { description: '遇到 setTimeout，把回调贴到便签栏', output: null },
      { description: '执行 console.log("3")', output: '3' },
      { description: '遇到 fetch，把回调贴到便签栏', output: null },
      { description: '执行 console.log("5")', output: '5' },
      { description: '执行 setTimeout 的回调', output: '2' },
      { description: '执行 fetch 的回调', output: '4' }
    ]
  }
}
