export default {
  polling: {
    title: 'Polling / Short Polling Demo',
    client: 'Client',
    server: 'Server (Stateless)',
    question: 'Any new messages?',
    createMessage: 'Create Message',
    startPolling: '▶ Start Polling (1s)',
    stopPolling: '⏹ Stop Polling',
    logServerPrepare: 'Server: Secretly prepared a new message 🤫',
    logClientRequest: 'Client: Initiating HTTP GET request...',
    logResponseYes: 'Yes! Just received a new message',
    logResponseNo: 'No',
    logServerResponse:
      'Server: Responded "{response}", then closed connection.',
    logStopTimer: 'Timer stopped.',
    logStartPolling: 'Starting setInterval() polling mode.'
  },
  websocket: {
    title: 'WebSocket / Full-Duplex Communication Demo',
    player1: 'Player 1',
    gameServer: 'Game Server',
    sendMove: 'Send: Shoryuken! 👊',
    broadcast: 'Broadcast: Enemy deployed! 🛸',
    disconnect: '⏹ Disconnect WebSocket',
    connect: '⚡ Upgrade: WebSocket Protocol',
    logDisconnect: 'Disconnected WebSocket (TCP 4-way handshake).',
    logClientRequest:
      'Client sends HTTP request: Upgrade: websocket, Connection: Upgrade',
    logServerResponse:
      'Server responds: 101 Switching Protocols. Connection established!',
    logClientSend: 'Client: Instantly sent binary frame packet',
    logServerSend: 'Server: Instantly sent global state frame',
    logServerReceive: 'Server: Received player action at light speed.',
    logClientReceive: 'Client: Rendered Boss animation at light speed!'
  },
  sse: {
    title: 'Server-Sent Events / Unidirectional Stream Demo',
    client: 'Client',
    server: 'Server (Stream Pipe)',
    pushData: 'Push Stock Data 👇',
    disconnect: '⏹ Disconnect SSE',
    connect: '▶ Establish SSE Stream',
    logClientDisconnect:
      'Client: Actively closed connection (Connection: close)',
    logClientConnect: 'Client: Initiating HTTP GET, Accept: text/event-stream',
    logServerReady:
      'Server: Keeping connection open, ready to push data unidirectionally.',
    logServerPush: 'Server: Pushing data to pipe "data: {data}\\n\\n"',
    logClientReceive: 'Client: Triggered onmessage event, received data: {data}'
  },
  internationalization: {
    title: 'Browser Native Localization (i18n) Demo',
    intro:
      'Switch user locale preference below. Experience how browser engine handles **language dictionary**, **flexible wrapping**, **RTL layout** and **native data format conversion** without modifying underlying data logic.',
    envLabel: '🌐 Simulate OS/Browser Preference Environment:',
    lab1Title: 'Lab 1: Flex-Based Dictionary & Layout Refactoring',
    lab1Desc:
      'Since we used flexible Flex layout in CSS, with `gap` and `justify-content` instead of hardcoded `margin-left`, when switching to Arabic, the `dir="rtl"` attribute commands browser to **perfectly mirror** the layout. When switching to German, long button text automatically triggers flexible wrapping without overflow.',
    lab2Title: 'Lab 2: Using Intl Engine for Data Presentation',
    lab2Desc:
      'Completely abandon regex splitting and concatenation! See how native <code>Intl.NumberFormat</code> and <code>Intl.DateTimeFormat</code> seamlessly format the fixed binary data below based on selected "locale code".',
    rawMoney: 'Raw Memory Value (Float):',
    rawTime: 'Raw Memory Value (Timestamp):',
    engineIntervene: 'Engine介入<br/> ➔',
    finalDisplay: 'DOM Final Display:'
  },
  accessibility: {
    title: 'Accessibility Object Model (AOM) Comparison Demo',
    intro:
      'Try using <strong>pure keyboard (Tab and Enter keys)</strong> to operate elements in both panels below, and observe what the "screen reader" captures from the AOM layer.',
    caseATitle: '❌ Case A: Pure Visual Deception',
    caseADesc:
      'Uses <code>&lt;div&gt;</code> with CSS styling. Perfect on render tree, but missing semantics on AOM tree.',
    confirmLabel: 'Confirm Action:',
    placeholder: 'Enter verification code',
    confirmBtn: 'Confirm Submit',
    aomHeader: '💻 Screen Reader Parsing (AOM):',
    noTabSupport:
      '(Visually impaired users cannot select any element in this area using Tab key)',
    monitorHint: '(Hover mouse or press Tab to see parsing)',
    caseBTitle: '✅ Case B: Semantic + ARIA Guard',
    caseBDesc:
      'Uses native tags like <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code> with supplemented <code>aria-label</code>. Has complete interaction properties in AOM tree.',
    inputAria: 'Input: Confirm action, enter verification code',
    btnAriaFocus: 'Button: Submit verification code. Press Enter to activate.',
    btnAriaHover: 'Button: Submit verification code.',
    alertBad:
      '[System Alert] Regular div can bind click events, but keyboard users cannot focus with Tab or trigger with Enter. This is disastrous for people with motor disabilities.',
    alertGood:
      '[System Alert] Native button click triggered successfully! Whether using mouse click or keyboard Enter, it works perfectly.',
    speaking: '🗣️ Speaking:'
  }
}
