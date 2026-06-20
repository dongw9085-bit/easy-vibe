export default {
  polling: {
    title: 'Polling / 短轮询交互演示',
    client: 'Client',
    server: 'Server (无状态)',
    question: '有新消息吗？',
    createMessage: '制造新消息',
    startPolling: '▶ 开始定时轮询 (1s)',
    stopPolling: '⏹ 停止轮询',
    logServerPrepare: '服务端：偷偷准备了一条新消息 🤫',
    logClientRequest: '客户端：发起 HTTP GET 请求...',
    logResponseYes: '有啦！这是刚收到的弹幕',
    logResponseNo: '没有',
    logServerResponse: '服务端：响应 "{response}"，然后关闭连接。',
    logStopTimer: '停止定时器。',
    logStartPolling: '启动 setInterval() 狂轰乱炸模式。'
  },
  websocket: {
    title: 'WebSocket / 全双工通信演示',
    player1: 'Player 1',
    gameServer: 'Game Server',
    sendMove: '发招：升龙拳！👊',
    broadcast: '群发：敌军出动！🛸',
    disconnect: '⏹ 挥泪握手告别',
    connect: '⚡ Upgrade: websocket 协议质变',
    logDisconnect: '断开 WebSockets 连接 (TCP 四次挥手).',
    logClientRequest:
      '客户端发 HTTP 请求：Upgrade: websocket, Connection: Upgrade',
    logServerResponse:
      '服务端响应：101 Switching Protocols。神级链路建立完成！',
    logClientSend: '客户端：瞬间送出 0101 极简格式数据包',
    logServerSend: '服务端：瞬间下发最新全局状态帧',
    logServerReceive: '服务端：光速收到玩家操作响应。',
    logClientReceive: '客户端：光速渲染 Boss 动画！'
  },
  sse: {
    title: 'Server-Sent Events / 单向流推送演示',
    client: 'Client',
    server: 'Server (流管道)',
    pushData: '推送大盘数据 👇',
    disconnect: '⏹ 断开 SSE 连接',
    connect: '▶ 建立 SSE 流连接',
    logClientDisconnect: '客户端：主动断开连接 (Connection: close)',
    logClientConnect: '客户端：发起 HTTP Get, Accept: text/event-stream',
    logServerReady: '服务端：保持连接不断开，随时准备单向下发数据。',
    logServerPush: '服务端：向管道喷射数据 "data: {data}\\n\\n"',
    logClientReceive: '客户端：触发 onmessage 事件，拿到数据：{data}'
  },
  internationalization: {
    title: '浏览器原生的本地化转换 (i18n) 演示',
    intro:
      '请在下方切换用户的本地化偏好（环境代号）。体验浏览器引擎在不修改任何底层数据逻辑的前提下，是如何同时处理**语言字典**、**弹性换行**、**排版反转 (RTL)** 以及**原生数据格式转换**的。',
    envLabel: '🌐 模拟操作系统/浏览器偏好环境：',
    lab1Title: '实战区 1：依赖 Flex 面向字典与排版进行重构',
    lab1Desc:
      '由于我们在 CSS 中使用了弹性的 Flex 布局，并且没有写死 `margin-left` 而是用了 `gap` 与 `justify-content`，当切换到阿拉伯语时，`dir="rtl"` 属性会指挥浏览器**完美镜像反转**整个布局。当切换到德语时，超长的按钮文字会自动引发弹性换行，而不会溢出。',
    lab2Title: '实战区 2：使用 Intl 引擎接管数据呈现',
    lab2Desc:
      '彻底抛弃正则表达式的截取与拼接！看看原生的 <code>Intl.NumberFormat</code> 和 <code>Intl.DateTimeFormat</code> 是如何根据我们上方选择的"环境代号"将下方固定不变的底层二进制数据无缝格式化的。',
    rawMoney: '底层内存数值 (Float):',
    rawTime: '底层内存数值 (Timestamp):',
    engineIntervene: '引擎介入<br/> ➔',
    finalDisplay: 'DOM 最终呈现:'
  },
  accessibility: {
    title: '无障碍对象模型 (AOM) 视角对比演示',
    intro:
      '请尝试使用<strong>纯键盘（Tab 键与 Enter 键）</strong>分别操作下方两个面板中的元素，并观察右侧"屏幕阅读器"捕获到的 AOM 层解析结果。',
    caseATitle: '❌ 案例 A：纯粹的视觉欺骗',
    caseADesc:
      '使用 <code>&lt;div&gt;</code> 结合 CSS 绘制。在渲染树上很完美，但在 AOM 树中缺失语义。',
    confirmLabel: '操作确认：',
    placeholder: '请输入验证码',
    confirmBtn: '确认提交',
    aomHeader: '💻 屏幕阅读器解析 (AOM)：',
    noTabSupport: '（视障用户无法通过 Tab 键选中此区域的任何元素）',
    monitorHint: '（鼠标悬停或按 Tab 键切入以查看解析）',
    caseBTitle: '✅ 案例 B：语义化 + ARIA 护航',
    caseBDesc:
      '使用 <code>&lt;input&gt;</code>、<code>&lt;button&gt;</code> 等原生标签，补充 <code>aria-label</code>。在 AOM 树中拥有完整交互属性。',
    inputAria: '输入框：操作确认，请输入验证码',
    btnAriaFocus: '按钮：提交确认验证码。按下回车键激活。',
    btnAriaHover: '按钮：提交确认验证码。',
    alertBad:
      '【系统提示】普通 div 虽然能绑定点击事件，但键盘用户无法使用 Tab 聚焦它，也无法用 Enter 键触发它。这对肢体障碍人士是灾难。',
    alertGood:
      '【系统提示】原生 button 点击触发成功！无论你是用鼠标点击，还是用键盘 Enter 键，都能完美触发。',
    speaking: '🗣️ 正在朗读：'
  }
}
