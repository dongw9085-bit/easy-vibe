export default {
  componentTree: {
    title: 'Component breakdown',
    subtitle: 'How one page is split into independent components',
    treeTitle: 'Component tree',
    previewTitle: 'Page preview',
    siteName: 'E-commerce site',
    searchBox: 'Search box',
    cart: 'Cart (3)',
    productName: 'Product {index}',
    copyright: '© 2025 E-commerce site',
    dataIndependent: 'Independent data',
    styleIsolated: 'Isolated styles',
    reused: 'Reused {count} times',
    infoStrong: 'Core idea:',
    info: 'Componentization means splitting a large page into independent small pieces. Each component owns its own data, UI, and styles. The same component can be reused in multiple places with different input data.',
    components: [
      {
        id: 'app',
        name: 'App (root component)',
        icon: '📱',
        depth: 0,
        desc: 'The root component of the whole app. It contains all other components.'
      },
      {
        id: 'navbar',
        name: 'NavBar',
        icon: '🧭',
        depth: 1,
        desc: 'The top navigation bar with the logo, search box, and cart entry.'
      },
      {
        id: 'search',
        name: 'SearchBox',
        icon: '🔍',
        depth: 2,
        desc: 'An independent search component that manages keywords and results.'
      },
      {
        id: 'cart',
        name: 'CartIcon',
        icon: '🛒',
        depth: 2,
        desc: 'A small cart indicator. Its data comes from global cart state.'
      },
      {
        id: 'product',
        name: 'ProductCard',
        icon: '📦',
        depth: 1,
        reused: 3,
        desc: 'A card for one product. Write the code once, pass in different product data, and reuse it many times.'
      },
      {
        id: 'footer',
        name: 'Footer',
        icon: '📄',
        depth: 1,
        desc: 'The bottom area of the page, usually containing copyright text.'
      }
    ]
  },
  dataUIGap: {
    dataBadge: 'Data (JavaScript variable)',
    uiBadge: 'UI (what users see)',
    productCount: 'Product count',
    totalPrice: 'Total price',
    status: 'Status',
    tooMany: 'Too many',
    normal: 'Normal',
    addProduct: 'Add product (change data)',
    desynced: '❌ Out of sync',
    synced: '✅ Synced',
    cart: 'Cart',
    itemUnit: '{count} item(s)',
    syncUI: 'Sync UI manually',
    syncedButton: 'Synced',
    reset: 'Reset',
    desyncStat: 'Out-of-sync events: {count}',
    infoStrong: 'Core problem:',
    info: 'Without a framework, changing data does not automatically update the UI. You must write code to update the interface yourself. If you forget, users see stale or wrong information.'
  },
  declarativeFormula: {
    stateLabel: 'State (data)',
    uiLabel: 'UI',
    inputTitle: 'Change State',
    username: 'Username',
    namePlaceholder: 'Enter a name',
    productCount: 'Product count',
    darkMode: 'Dark mode',
    outputTitle: 'Rendered result (UI)',
    greetingUser: 'Hello, {name}!',
    greetingGuest: 'Hello, guest!',
    cartLine: 'Cart: {count} item(s)',
    totalLine: 'Total: ¥{total}',
    warning: 'Many products selected. Please confirm the order.',
    themeLine: 'Current theme: {theme}',
    dark: 'Dark',
    light: 'Light',
    snapshotTitle: 'Current State snapshot',
    empty: '(empty)',
    infoStrong: 'Core idea:',
    info: 'You only change State. The framework renders the corresponding UI automatically. The same data always renders the same UI: UI = f(State).'
  },
  domCost: {
    title: 'DOM operation cost comparison',
    subtitle: 'One-by-one operations vs batch operation',
    countLabel: 'Number of changes',
    countUnit: '{count} times',
    running: 'Running...',
    start: 'Start comparison',
    slowBadge: 'Update DOM one by one',
    slowDesc:
      'Each data change immediately touches the real DOM, so the browser repeatedly lays out and paints.',
    timeLabel: 'Simulated time',
    slowStep: 'Change → layout → paint',
    repeatStep: '... repeat {count} more times ...',
    fastBadge: 'Batch first, update once',
    fastDesc:
      'All changes are computed in memory first, then committed to the real DOM once.',
    memoryStep: 'Compute {count} changes in memory',
    commitStep: 'Commit once → layout → paint',
    savings: 'Batching saved',
    savingsTail: 'of the time',
    infoStrong: 'Core idea:',
    info: 'The real cost of DOM operations is not changing a value itself, but the layout and paint work the browser must do afterward. Reducing DOM writes reduces these expensive calculations.'
  },
  frameworkSpectrum: {
    title: 'Framework spectrum',
    subtitle: 'Runtime ↔ compile time',
    moreRuntime: 'More runtime',
    moreCompile: 'More compile time',
    runtimeWork: 'Runtime work',
    compileWork: 'Compile-time work',
    bundleSize: 'Bundle size',
    devExperience: 'Developer experience',
    trendStrong: 'Trend:',
    trend:
      'The trend is clear: frameworks keep moving work from runtime to compile time to improve both developer experience and runtime performance.',
    frameworks: {
      react: {
        id: 'react',
        name: 'React',
        short: 'R',
        emoji: '⚛️',
        percent: 20,
        runtimePercent: 80,
        compilePercent: 20,
        bundleSize: 'Medium',
        devExperience: '★★★★☆',
        summary: 'Runtime-first: virtual DOM + reconciliation'
      },
      vue3: {
        id: 'vue3',
        name: 'Vue 3',
        short: 'V',
        emoji: '💚',
        percent: 40,
        runtimePercent: 60,
        compilePercent: 40,
        bundleSize: 'Medium',
        devExperience: '★★★★★',
        summary: 'Hybrid: compiled templates + runtime virtual DOM'
      },
      vapor: {
        id: 'vapor',
        name: 'Vue Vapor',
        short: 'Vp',
        emoji: '🌫️',
        percent: 60,
        runtimePercent: 40,
        compilePercent: 60,
        bundleSize: 'Smaller',
        devExperience: '★★★★☆',
        summary:
          'Compile-time leaning: skips virtual DOM and generates direct operations'
      },
      svelte: {
        id: 'svelte',
        name: 'Svelte',
        short: 'S',
        emoji: '🔥',
        percent: 80,
        runtimePercent: 20,
        compilePercent: 80,
        bundleSize: 'Smallest',
        devExperience: '★★★★☆',
        summary:
          'Compile-time-first: precise DOM update code is generated during build'
      },
      solid: {
        id: 'solid',
        name: 'Solid.js',
        short: 'Sd',
        emoji: '⬆️',
        percent: 90,
        runtimePercent: 10,
        compilePercent: 90,
        bundleSize: 'Smallest',
        devExperience: '★★★★☆',
        summary: 'Fine-grained reactivity with no virtual DOM'
      }
    }
  },
  reactivityMechanism: {
    modify: 'Modify data',
    underHood: 'Under the hood',
    infoStrong: 'Core idea:',
    tabs: {
      vue: {
        id: 'vue',
        label: 'Vue (Proxy)',
        color: 'var(--vp-c-green-1)',
        steps: [
          'count = 1 triggers the Proxy set trap',
          'Notify the dependency tracker: count changed',
          'Find all components that depend on count',
          'Update the DOM automatically'
        ],
        info: 'Vue uses Proxy to intercept reads and writes automatically, so the code feels natural.'
      },
      react: {
        id: 'react',
        label: 'React (setState)',
        color: 'var(--vp-c-brand)',
        steps: [
          'Call setCount(count + 1)',
          'React queues the update',
          'Batch the queue and trigger re-render',
          'Virtual DOM diff → update real DOM'
        ],
        info: 'React requires explicit setState calls. It is one extra step, but the data flow is predictable.'
      },
      svelte: {
        id: 'svelte',
        label: 'Svelte (compiler)',
        color: 'var(--vp-c-warning-1)',
        steps: [
          'The compiler recognizes count += 1 as assignment',
          '$$invalidate(count) is generated at compile time',
          'Update the exact DOM node directly, without diffing',
          'Near-zero runtime overhead'
        ],
        info: 'Svelte performs analysis at compile time, reducing runtime overhead while relying on compiler behavior.'
      }
    }
  },
  virtualDomDiff: {
    title: 'Virtual DOM diff process',
    subtitle: 'The core mechanism for minimizing DOM updates',
    modify: 'Modify data',
    reset: 'Reset',
    todoTitle: 'Todo list',
    itemLearn: 'Learn Vue',
    itemHomework: 'Do homework',
    itemCode: 'Write code',
    itemGame: 'Play games',
    itemMovie: 'Watch a movie',
    modifiedBadge: 'Modified: 1 node',
    newBadge: 'Added: 1 node',
    totalNodes: 'Total virtual DOM nodes',
    realUpdates: 'Real DOM updates needed',
    savedOps: 'Saved DOM operations',
    infoStrong: 'Core idea:',
    info: 'The virtual DOM compares old and new trees in memory, finds the minimal difference, and updates only the necessary real DOM nodes.'
  },
  whatIsDom: {
    title: 'HTML → DOM tree',
    subtitle: 'How the browser understands your HTML',
    htmlTitle: 'HTML code you write',
    parseLabel: 'Browser parses',
    treeTitle: 'DOM tree generated by the browser',
    explanations: [
      {
        icon: '📄',
        title: 'Node',
        text: 'Every box in the DOM tree is a node. Each HTML tag, such as <code>&lt;h1&gt;</code> or <code>&lt;p&gt;</code>, maps to one node.'
      },
      {
        icon: '🌳',
        title: 'Parent-child relationship',
        text: 'When one tag is nested inside another, the DOM tree represents that as a parent-child relationship.'
      },
      {
        icon: '✏️',
        title: 'DOM operation',
        text: 'JavaScript can add, remove, or change nodes in the DOM tree. After a node changes, the browser recalculates layout and paints the page again.'
      }
    ],
    infoStrong: 'Key concept:',
    info: 'The DOM is a tree maintained by the browser in memory. It corresponds to the HTML you wrote. JavaScript changes this DOM tree, and the browser updates the screen from that changed tree.',
    htmlLines: [
      { text: '<html>', indent: 0, tag: 'html' },
      { text: '<body>', indent: 1, tag: 'body' },
      { text: '<h1>My cart</h1>', indent: 2, tag: 'h1' },
      { text: '<p>3 products total</p>', indent: 2, tag: 'p' },
      { text: '<ul>', indent: 2, tag: 'ul' },
      { text: '<li>Headphones</li>', indent: 3, tag: 'li1' },
      { text: '<li>Keyboard</li>', indent: 3, tag: 'li2' },
      { text: '<li>Mouse</li>', indent: 3, tag: 'li3' },
      { text: '</ul>', indent: 2, tag: 'ul' },
      { text: '<button>Checkout</button>', indent: 2, tag: 'btn' },
      { text: '</body>', indent: 1, tag: 'body' },
      { text: '</html>', indent: 0, tag: 'html' }
    ],
    treeNodes: [
      { id: 1, label: 'html', depth: 0, tag: 'html' },
      { id: 2, label: 'body', depth: 1, tag: 'body' },
      { id: 3, label: 'h1', depth: 2, tag: 'h1', text: 'My cart' },
      { id: 4, label: 'p', depth: 2, tag: 'p', text: '3 products total' },
      { id: 5, label: 'ul', depth: 2, tag: 'ul' },
      { id: 6, label: 'li', depth: 3, tag: 'li1', text: 'Headphones' },
      { id: 7, label: 'li', depth: 3, tag: 'li2', text: 'Keyboard' },
      { id: 8, label: 'li', depth: 3, tag: 'li3', text: 'Mouse' },
      { id: 9, label: 'button', depth: 2, tag: 'btn', text: 'Checkout' }
    ]
  },
  manualVsAuto: {
    manualBadge: 'Manual sync / jQuery style',
    autoBadge: 'Automatic sync / framework style',
    addProduct: 'Add product',
    reset: 'Reset',
    synced: 'Synced',
    unsynced: 'Not synced',
    syncManual: 'Sync manually',
    missLabel: 'Misses:',
    itemUnit: '{count} item(s)',
    empty: '(empty)',
    normal: 'Normal',
    tooMany: '⚠️ Too many products!',
    separator: ', ',
    infoStrong: 'Core idea:',
    info: 'The essential value of frontend frameworks is automatic synchronization: you change data, and the framework updates every UI location that depends on it.',
    products: [
      'Headphones ¥99',
      'Keyboard ¥199',
      'Mouse ¥59',
      'Monitor ¥1299',
      'Camera ¥149',
      'Speaker ¥79'
    ],
    areas: {
      count: 'Cart count',
      list: 'Product list',
      total: 'Total',
      status: 'Status'
    }
  },
  whyNoAutoSync: {
    title: 'What happens when a variable changes?',
    subtitle: 'Native JavaScript vs framework',
    native: 'Native JavaScript',
    framework: 'Using a framework (Vue)',
    codeTitle: 'Code you write',
    clickComment: '// Run when the button is clicked',
    executed: '✓ Executed',
    manualComment: '// You still have to write these lines:',
    manualBadge: '✓ Manual',
    needWrite: 'You must write this',
    noMoreCode: '// No more code needed',
    frameworkAutoComment: '// The framework completes the next steps',
    flowTitle: 'Execution flow',
    jsModify: 'JavaScript changes the variable',
    countChanged: 'count changes from {from} to {to}',
    stopped: '❌ It stops here',
    frameworkTakesOver: '↓ Framework takes over',
    findDom: 'Find DOM nodes',
    detectChange: 'Framework detects the change',
    manualGetDom: 'Call document.getElementById() manually',
    proxyDetect:
      'Proxy intercepts the assignment and notifies the update system',
    modifyDom: 'Change DOM content',
    frameworkUpdateDom: 'Framework updates all related DOM nodes',
    manualTextContent: 'Set .textContent manually',
    autoUpdateCount: 'Automatically find and update every place using count',
    auto: 'Auto',
    resultTitle: 'UI result',
    cart: 'Cart',
    itemUnit: '{count} item(s)',
    totalPrice: 'Total price',
    staleAll: 'The variable changed, but the UI did not change at all.',
    stalePartial: 'Cart updated, but the total price is still stale.',
    runInitial: 'Run count = count + 1',
    continueManual: 'Continue syncing the next field manually',
    runAgain: 'Run again',
    reset: 'Reset',
    nativeInfoStrong: 'Why is it not automatic?',
    nativeInfo:
      'JavaScript variables are not aware of the UI. When you run <code>count = 4</code>, the engine only changes the value in memory. It does not notify anyone, trigger a callback, or check where count is displayed on the page. The UI will not change unless you update the DOM yourself.',
    frameworkInfoStrong: 'How does the framework do it?',
    frameworkInfo:
      'A framework wraps your data with a special mechanism. Vue uses JavaScript Proxy to intercept assignments. When you write <code>count = 4</code>, Proxy also runs notification code so the framework can find and update every DOM node that depends on count.'
  },
  frameworkMotivation: {
    cards: [
      {
        title: 'Problem',
        items: [
          'When data changes, manual DOM updates are easy to miss.',
          'The more complex a page becomes, the more places need synchronization.',
          'In team work, scattered DOM operations become hard to maintain.'
        ]
      },
      {
        title: 'Root cause',
        items: [
          'The browser does not know the relationship between data and UI.',
          'Native DOM APIs are low-level operations, not automatic UI synchronization.',
          'Developers are forced to act as manual synchronizers.'
        ]
      },
      {
        title: 'Framework solution',
        items: [
          'Build a mapping from data to UI: UI = f(State).',
          'Detect data changes automatically with reactivity.',
          'Compute minimal DOM updates with virtual DOM or compiler optimization.'
        ]
      }
    ]
  }
}
