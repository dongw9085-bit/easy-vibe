export default {
  layout: {
    boxModel: {
      title: 'CSS Box Model',
      subtitle: 'Understand how much space an element actually occupies',
      scenario:
        'Scenario: you want three cards in one 900px row, and each card has width: 200px. The third card wraps to the next line. Why?',
      actualWidth: 'Actual occupied width',
      includedFormula:
        '{width}px (already includes padding and border) + {margin}×2 = {total}px',
      overflowHint:
        'Three cards need {width}px, which exceeds the 900px container, so the third card wraps.',
      fitHint: 'Three cards use {width}px in total, so they fit.',
      keyDifference: 'Key difference:',
      info: 'content-box, the default, makes width apply only to content. border-box makes width include content + padding + border. A global box-sizing: border-box setting is usually recommended.',
      layers: {
        margin: 'margin',
        border: 'border',
        padding: 'padding',
        content: 'content'
      }
    },
    flexbox: {
      title: 'Flexbox Layout',
      subtitle: 'Adjust the settings and watch how items are arranged',
      mainAxis: 'Main axis',
      crossAxis: 'Cross axis',
      mainAxisTitle: 'Main Axis',
      mainAxisDesc:
        'The direction items are laid out, controlled by flex-direction.',
      crossAxisTitle: 'Cross Axis',
      crossAxisDesc: 'Perpendicular to the main axis and used to align items.',
      justifyLabel: 'justify-content (main-axis alignment)',
      alignLabel: 'align-items (cross-axis alignment)',
      mainAxisDirection: 'Main axis: {direction}',
      crossAxisDirection: 'Cross axis: {direction}',
      horizontal: 'horizontal →',
      vertical: 'vertical ↓',
      memoryTitle: 'Memory aid:',
      memory:
        'justify-content aligns items along the main axis. align-items aligns them along the cross axis.',
      directions: [
        { id: 'row', label: 'row (horizontal)' },
        { id: 'column', label: 'column (vertical)' }
      ]
    },
    domManipulator: {
      title: 'DOM Manipulation Demo',
      subtitle: 'Use JavaScript to change page content, styles, and structure',
      editContent: 'Change content',
      placeholder: 'Enter a title',
      updateTitle: 'Update title',
      editStyle: 'Change style',
      editElements: 'Add/remove elements',
      addItem: 'Add item',
      removeLast: 'Remove last',
      fallbackTitle: 'Click the button to update the title',
      cardDesc: 'This card demonstrates DOM manipulation.',
      empty: '(The list is empty)',
      codeTitle: 'Corresponding JavaScript code',
      comments: {
        title: '// Change text content',
        style: '// Toggle a CSS class',
        add: '// Create and append a new element',
        remove: '// Remove the last element',
        idle: '// Click a button on the left to see the code'
      },
      newItem: 'New item {n}',
      methodsTitle: 'Common DOM methods',
      methods: [
        { code: 'querySelector()', desc: 'Find an element by selector' },
        { code: 'textContent', desc: 'Get or set text content' },
        { code: 'classList', desc: 'Work with CSS classes' },
        { code: 'createElement()', desc: 'Create a new element' },
        { code: 'appendChild()', desc: 'Append a child element' },
        { code: 'remove()', desc: 'Remove an element' }
      ],
      noticeTitle: 'Note:',
      notice:
        'Frequent DOM operations can hurt performance. Modern frameworks such as Vue and React use a virtual DOM to compute changes in memory and then batch updates to the real DOM.',
      initialTitle: 'Welcome to DOM',
      initialItems: ['Item 1', 'Item 2'],
      styles: [
        { id: '', label: 'Default' },
        { id: 'highlight', label: 'Highlight' },
        { id: 'dark', label: 'Dark' }
      ]
    },
    triad: {
      title: 'HTML / CSS / JavaScript Collaboration',
      subtitle: 'Switch modes to see what each layer does for the same page',
      hero: 'Welcome to my website',
      desc: 'This is a description paragraph',
      button: 'Try me',
      process: 'Execution process',
      principleTitle: 'Division of work:',
      principle:
        'HTML defines structure, CSS defines presentation, and JavaScript defines behavior.',
      modes: [
        {
          id: 'html',
          label: 'HTML',
          icon: 'Structure',
          codeTitle: 'HTML code'
        },
        { id: 'css', label: 'CSS', icon: 'Style', codeTitle: 'CSS code' },
        {
          id: 'js',
          label: 'JavaScript',
          icon: 'Behavior',
          codeTitle: 'JavaScript code'
        }
      ],
      codeLines: {
        html: [
          { key: 'h1', text: '<h1>Welcome to my website</h1>' },
          { key: 'p', text: '<p>This is a description paragraph</p>' },
          { key: 'btn', text: '<button>Try me</button>' }
        ],
        css: [
          { key: 'h1', text: '.hero {' },
          { key: 'h1', text: '  color: #0ea5e9;' },
          { key: 'h1', text: '  font-size: 20px;' },
          { key: 'h1', text: '}' },
          { key: 'btn', text: '.cta { background: #0ea5e9; }' }
        ],
        js: [
          { key: 'btn', text: "const btn = document.querySelector('.cta')" },
          { key: 'btn', text: "btn.addEventListener('click', () => {" },
          { key: 'btn', text: '  count++' },
          { key: 'btn', text: "  btn.textContent = 'Clicked (' + count + ')'" },
          { key: 'btn', text: '})' }
        ]
      },
      steps: {
        html: [
          'The browser parses tags and identifies content types',
          'h1 is a heading, p is a paragraph, and button is a button',
          'The page renders with default styles'
        ],
        css: [
          'The browser parses selectors and finds matching elements',
          'Color, font size, spacing, and other rules are applied',
          'The page appearance changes'
        ],
        js: [
          'The script selects the button element',
          'It registers a click event listener',
          'When clicked, the callback runs and updates the count'
        ]
      }
    }
  },
  frameworks: {
    imperativeDeclarative: {
      title: 'Imperative vs Declarative',
      subtitle:
        'Two programming mindsets: manual operations vs automatic response',
      imperative: 'Imperative',
      imperativeSub: 'jQuery style - manual operations',
      declarative: 'Declarative',
      declarativeSub: 'Vue/React style - automatic response',
      manualDom: '// Manually operate the DOM',
      bindData: '// Bind data only',
      count: 'Count:',
      high: '⚠️ Count is high!',
      step1: 'Step 1: Value++',
      step2: 'Step 2: Update Text',
      step3: 'Step 3: Check Logic',
      autoRender: 'Value++ (Auto Render)',
      autoStatus: 'Framework handles DOM updates automatically.',
      ideaTitle: 'Core idea:',
      idea: 'Imperative code tells the computer how to do each step. Declarative code tells it the desired result and lets the framework handle the updates.',
      ready: 'Ready.',
      variableChanged: 'Variable `count` is now {count}. DOM is NOT updated.',
      domUpdated: 'DOM text updated manually.',
      logicHigh: 'Logic checked: > 5. Manually showing message.',
      logicLow: 'Logic checked: <= 5. No message.'
    },
    jqueryState: {
      title: 'What is jQuery? Understand it with a cart count',
      subtitle:
        'Left: manually update the page like jQuery, which is easy to miss. Right: update state like Vue or React.',
      jqueryTitle: 'jQuery mindset: update DOM everywhere',
      stateTitle: 'Vue/React mindset: update State only',
      badge: '🛒 Badge:',
      cartPage: 'Cart page count:',
      checkout: 'Checkout button:',
      checkoutAction: 'Checkout',
      commandTitle: 'Simulated commands',
      increaseData: 'Data +1 (page not updated yet)',
      updateBadge: 'Update badge',
      updateCartPage: 'Update cart page',
      updateCheckout: 'Update checkout button',
      logTitle: 'Command log',
      emptyLog: '(No actions yet)',
      oneThing: 'You only need one action',
      reset: 'Reset',
      okHint:
        'When State changes, all three UI locations sync automatically. You do not manually find and update DOM nodes.',
      termsTitle: 'Two terms here',
      domTerm:
        'The page structure inside the browser, including buttons, text, and images',
      stateTerm: 'Page data, such as the cart count',
      unit: 'items',
      consistent: '✅ All three places are consistent.',
      inconsistent:
        '⚠️ Data and page are inconsistent. You probably forgot to update one DOM location, which becomes a bug in real projects.',
      logs: {
        increase: 'Data +1 (real data = {value})',
        badge: 'Updated badge DOM = {value}',
        cart: 'Updated cart page DOM = {value}',
        checkout: 'Updated checkout button DOM = {value}'
      }
    },
    renderingStrategy: {
      title: 'Rendering Strategies: CSR / SSR / SSG',
      subtitle: 'Choose a strategy and compare the first-screen behavior',
      ttfb: 'TTFB',
      tti: 'Time to interactive',
      seo: 'SEO friendly',
      strategies: [
        {
          key: 'csr',
          label: 'CSR',
          ttfb: 450,
          tti: 1600,
          seo: 'Fair',
          note: 'The page renders only after JavaScript loads and fetches data.'
        },
        {
          key: 'ssr',
          label: 'SSR',
          ttfb: 220,
          tti: 1100,
          seo: 'Good',
          note: 'The first screen is faster, but the server does more work.'
        },
        {
          key: 'ssg',
          label: 'SSG',
          ttfb: 120,
          tti: 700,
          seo: 'Excellent',
          note: 'The page is pre-rendered as static HTML, which suits content sites.'
        }
      ]
    },
    responsiveGrid: {
      title: 'Responsive Layout: one codebase, many screens',
      subtitle: 'Drag the width and watch the column count change',
      viewport: 'Viewport width:',
      card: 'Card {n}',
      columns: 'Current columns:'
    },
    routingMode: {
      title: 'Routing Mode: full-page reload vs partial switch',
      subtitle: 'Click navigation items to feel the difference',
      mpa: 'Traditional multi-page app (MPA)',
      spa: 'Single-page app (SPA)',
      pages: ['Home', 'Products', 'Cart', 'Profile'],
      loading: 'Loading page...',
      currentPage: 'Current page:',
      hints: {
        mpa: 'MPA: each navigation performs a full-page reload.',
        spa: 'SPA: only the content area updates, so state can be preserved.'
      }
    },
    sliceRequest: {
      title: 'Image slicing era: more requests means slower loading',
      subtitle: 'Change the number of slices and watch the load time',
      sliceCount: 'Slice count:',
      sheet: 'images',
      sprite: 'Merge into a sprite',
      totalRequests: 'Total requests',
      loadTime: 'Estimated load time'
    }
  },
  network: {
    urlParser: {
      label:
        'URL Parsing -- Translating human text into structured information',
      status: 'Hover over each part to see its responsibility',
      parts: [
        {
          id: 'protocol',
          title: '🚛 Transport mode (Protocol)',
          desc: 'This says you want the safest vehicle, HTTPS encrypted communication. With HTTP, it is like an open-top car that anyone along the way can inspect.'
        },
        {
          id: 'host',
          title: '🏢 Store name (Host)',
          desc: 'This is the destination server domain. The browser later translates it into the numeric IP address used by the network.'
        },
        {
          id: 'path',
          title: '📍 Exact shelf (Path)',
          desc: 'After entering the store, this tells the server which room, resource, or action you want.'
        }
      ]
    },
    dnsLookup: {
      label: 'DNS Lookup -- Finding coordinates in the address book',
      browserTitle: 'Browser',
      browserDescs: [
        'Wants to visit www.google.com',
        'Asking the directory service...',
        'Received 142... ready to go!'
      ],
      requestLabel: 'Ask for coordinates',
      responseLabel: 'Return IP',
      dnsTitle: 'Directory service (DNS)',
      dnsDescs: [
        'Standing by',
        'Looking through the address book...',
        'Found it: 142.250.80.46'
      ],
      buttons: {
        running: 'Looking up...',
        restart: 'Look up again',
        start: 'Start DNS lookup'
      },
      status: [
        'Click the button to tell the browser that you do not know where the Google server is',
        'The browser asks DNS for the numeric network address...',
        'The IP address is ready, so communication can begin.'
      ]
    },
    tcpHandshake: {
      label: 'TCP Three-Way Handshake -- Establishing a reliable channel',
      client: 'Browser (you)',
      server: 'Google server',
      connected: 'Connected',
      waiting: 'Waiting',
      start: 'Start connection',
      reset: 'Disconnect and retry',
      messages: [
        {
          title: 'Handshake 1: SYN',
          desc: '"Hi server, are you there? I can send messages. Can you receive them?"'
        },
        {
          title: 'Handshake 2: SYN-ACK',
          desc: '"Yes, I received it. Can you hear me now?"'
        },
        {
          title: 'Handshake 3: ACK',
          desc: '"I heard you too. The channel is verified. Let us talk business."'
        }
      ],
      status: [
        'Click "Start connection" to simulate the TCP three-way handshake',
        'Send SYN: the browser tests whether the server can receive data...',
        'Receive SYN-ACK: the server confirms receipt and tests the browser...',
        'Send ACK: the browser confirms again. The channel is ready for requests.'
      ]
    },
    httpExchange: {
      label: 'HTTP Request and Response -- Sending a note to buy a package',
      requestHeader: '📤 Buyer note: HTTP Request',
      userAgent: 'Mac Chrome browser',
      acceptLanguage: 'en-US (I want English content)',
      send: 'Send through the channel →',
      loading: 'Waiting for the package...',
      retry: 'Try again ↻',
      responseHeader: '📥 Seller package: HTTP Response',
      okNote: 'success',
      divider: 'Blank line (separates headers from the body)',
      bodyCode:
        '<!DOCTYPE html>\n<html>\n  <body>This is the Google search page HTML</body>\n</html>',
      empty: 'The server response package will appear here...',
      status: {
        idle: 'The HTTP request is assembled with a path and supporting headers.',
        loading: 'The request is traveling quickly through the TCP channel...',
        done: 'The server found the HTML, attached a 200 OK label, and returned it.'
      }
    },
    browserRendering: {
      label: 'Browser Rendering -- Turning plain text into a polished page',
      status:
        'Click each step icon above to see the output of each rendering stage',
      domInput: 'input (search box)',
      cssResult: 'h1 (red text rule)',
      steps: [
        {
          icon: '📄',
          name: 'Source',
          title: 'Receive plain text source code',
          desc: 'The response is just plain HTML and CSS text. It is an instruction manual for the page, not the visual page yet.'
        },
        {
          icon: '🦴',
          name: 'DOM parse',
          title: '1. Build the skeleton (DOM parsing)',
          desc: 'The browser reads HTML tags and builds a tree structure, such as a heading inside the body.'
        },
        {
          icon: '🎨',
          name: 'CSS parse',
          title: '2. Attach styles (CSS parsing)',
          desc: 'The browser reads CSS and attaches matching style rules, such as red title text, to the DOM nodes.'
        },
        {
          icon: '📏',
          name: 'Layout',
          title: '3. Compute geometry (Layout)',
          desc: 'The browser measures each element and calculates exact x/y coordinates, width, and height for the current screen.'
        },
        {
          icon: '🖼️',
          name: 'Paint',
          title: '4. Paint pixels (Paint)',
          desc: 'With structure, style, and geometry ready, the browser paints pixels and the page appears.'
        }
      ]
    }
  }
}
