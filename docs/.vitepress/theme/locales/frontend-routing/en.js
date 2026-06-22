export default {
  common: {
    coreIdea: 'Core idea:',
    coreAdvantage: 'Core advantage:',
    coreDifference: 'Core difference:',
    coreConcept: 'Core concept:',
    matchRule: 'Matching rule:',
    choiceAdvice: 'Recommendation:'
  },
  architecture: {
    title: 'Router Architecture',
    subtitle: 'Parts of a frontend routing system',
    intro: {
      prefix: 'Imagine a',
      highlight: 'company org structure',
      suffix:
        ': reception listens for visitors (URL changes), dispatch finds the right department (route matching), and teams render the actual work (components). Frontend routing is a layered collaboration like this.'
    },
    flowTitle: '📊 Data flow',
    info: 'A router listens for URL changes, matches route config, runs guards, and renders components. This is how single-page apps navigate without full page refreshes.',
    layers: [
      {
        name: 'Browser layer',
        icon: '🌐',
        desc: 'Provides URL and History API',
        components: ['URL Bar', 'History API', 'Hash Change', 'PopState']
      },
      {
        name: 'Router core layer',
        icon: '⚙️',
        desc: 'Core router logic',
        components: [
          'Router instance',
          'Route matcher',
          'History manager',
          'Guard pipeline'
        ]
      },
      {
        name: 'Component layer',
        icon: '🧩',
        desc: 'UI rendering',
        components: ['RouterView', 'RouterLink', 'Page components']
      }
    ],
    flowSteps: [
      'User clicks a link and triggers a URL change',
      'History listener captures the change',
      'Route matcher finds the matching config',
      'Guards run validation',
      'Component renders into RouterView'
    ]
  },
  dynamicRoutes: {
    title: 'Dynamic Routes',
    subtitle: 'Turn URLs into data containers',
    intro: {
      prefix: 'Imagine looking for books in a',
      highlight1: 'library',
      middle:
        ': each book has an ID, and you use that ID to find the right book. Dynamic routes use',
      highlight2: 'placeholders',
      suffix: 'to match different content.'
    },
    exampleLabel: 'Example:',
    testPathTitle: '📍 Test path',
    hint: 'Try: user/123 or products/electronics/456',
    resultTitle: '🎯 Match result',
    matchedRoute: 'Matched route:',
    extractedParams: 'Extracted params:',
    noResult: 'Enter a path to see the parsing result',
    info: 'Dynamic routes use placeholders such as :id to capture variable values from URLs, so components can read concrete content from those labels.',
    paramTypes: [
      {
        name: 'required',
        pattern: ':id',
        label: 'Required param',
        example: '/user/123',
        description: 'The URL must contain a value'
      },
      {
        name: 'optional',
        pattern: ':id?',
        label: 'Optional param',
        example: '/user or /user/123',
        description: 'The parameter may be omitted'
      },
      {
        name: 'multiple',
        pattern: ':id+',
        label: 'Repeated param',
        example: '/files/a/b/c',
        description: 'One or more values'
      },
      {
        name: 'zeroOrMore',
        pattern: ':id*',
        label: 'Flexible param',
        example: '/tags or /tags/vue/router',
        description: 'Zero or more values'
      }
    ]
  },
  hashVsHistory: {
    title: 'Routing Mode Comparison',
    subtitle: 'Hash vs History',
    intro: {
      prefix: 'Imagine',
      highlight1: 'mailing a package',
      middle1: ': Hash mode is like writing the address on a',
      highlight2: 'sticky note',
      middle2: 'after #, while History mode writes it directly on the',
      highlight3: 'envelope',
      suffix:
        '. The first is simple but less formal; the second looks clean but needs server support.'
    },
    hashMode: 'Hash mode',
    historyMode: 'History mode',
    compatibility: 'Compatibility',
    serverConfig: 'Server config',
    seo: 'SEO friendliness',
    noConfig: 'No config',
    needConfig: 'Required',
    poor: 'Poor',
    good: 'Good',
    info: 'Modern projects usually prefer History mode for clean URLs and better SEO. Use Hash mode when old browser compatibility or immutable server config matters.',
    navItems: [
      { name: 'Home', path: 'home' },
      { name: 'Products', path: 'products' },
      { name: 'About', path: 'about' }
    ],
    pages: {
      home: {
        title: 'Home',
        content:
          'Welcome to our site. This is the SPA home page; page switches happen on the frontend without refreshes.'
      },
      products: {
        title: 'Product Center',
        content:
          'Here are our core products. SPA navigation makes browsing smoother and switching faster.'
      },
      about: {
        title: 'About Us',
        content:
          'Learn more about our story. In SPA mode, page transitions have almost no delay.'
      }
    }
  },
  mpa: {
    title: 'MPA vs SPA',
    subtitle: 'Multi-page vs single-page navigation',
    intro: {
      prefix: 'Imagine eating at a',
      highlight1: 'restaurant',
      middle: ': MPA is like',
      highlight2: 'changing restaurants',
      suffix:
        'for every dish, reloading the whole page. SPA stays in the same restaurant and only changes the dish, so the experience feels smoother.'
    },
    mpaTitle: 'MPA (Multi-page app)',
    spaTitle: 'SPA (Single-page app)',
    info: 'MPA downloads a full page on every navigation. SPA downloads the app once, then updates only changed content. That is why SPA often feels faster.',
    mpaSteps: [
      '1. User clicks a link',
      '2. Browser sends HTTP request',
      '3. Server returns full HTML',
      '4. Browser parses and renders the new page',
      '5. Page resources reload (JS/CSS)'
    ],
    spaSteps: [
      '1. User clicks a link',
      '2. Default behavior is intercepted',
      '3. URL updates through History API',
      '4. Route config is matched',
      '5. New component renders dynamically',
      '6. Page updates without refresh'
    ],
    mpaFeatures: [
      { icon: '✓', text: 'SEO friendly', bad: false },
      { icon: '✓', text: 'Fast first screen', bad: false },
      { icon: '✗', text: 'Page flash during navigation', bad: true }
    ],
    spaFeatures: [
      { icon: '✓', text: 'Smooth transitions', bad: false },
      { icon: '✓', text: 'Good experience', bad: false },
      { icon: '✗', text: 'Needs SSR for SEO', bad: true }
    ]
  },
  nestedRoutes: {
    title: 'Nested Routes',
    subtitle: 'Layered view containers',
    intro: {
      prefix: 'Imagine',
      highlight1: 'nesting dolls',
      middle:
        ': each large doll contains a smaller one. Nested routes work similarly: a parent component can render a child component inside its',
      highlight2: 'RouterView',
      suffix: ', layer by layer.'
    },
    renderView: '🔲 Rendered view',
    info: 'Nested routes render child routes by placing RouterView inside parent components. Each route level has its own RouterView, like nested dolls.'
  },
  routeGuards: {
    title: 'Route Guards',
    subtitle: 'Security checks in the navigation flow',
    intro: {
      prefix: 'Imagine going through',
      highlight: 'airport security',
      suffix:
        ': identity and baggage are checked before boarding, and extra checks may happen later. Route guards perform checks and interception at different navigation stages.'
    },
    codeExample: '💻 Code example:',
    executionTitle: '📋 Guard execution order',
    info: 'Route guards are commonly used for permission checks, login validation, data preloading, and warning users before unsafe navigation.',
    guards: [
      {
        name: 'beforeEach',
        type: 'global',
        icon: '🌍',
        shortDesc: 'Global before guard',
        description:
          'Runs before route navigation, often for auth and login checks',
        example: `router.beforeEach((to, from, next) => {\n  if (to.meta.requiresAuth && !isLoggedIn()) {\n    next('/login')\n  } else {\n    next()\n  }\n})`
      },
      {
        name: 'beforeResolve',
        type: 'global',
        icon: '🔍',
        shortDesc: 'Global resolve guard',
        description:
          'Runs before navigation is confirmed, after component guards and async route components resolve',
        example: `router.beforeResolve((to, from, next) => {\n  // preload data\n  next()\n})`
      },
      {
        name: 'afterEach',
        type: 'global',
        icon: '✅',
        shortDesc: 'Global after hook',
        description:
          'Runs after navigation completes; cannot change navigation and is often used for analytics',
        example: `router.afterEach((to, from) => {\n  document.title = to.meta.title\n  analytics.track(to.path)\n})`
      },
      {
        name: 'beforeEnter',
        type: 'route',
        icon: '🛣️',
        shortDesc: 'Per-route guard',
        description:
          'Defined on a single route and triggered only when entering that route',
        example: `{\n  path: '/admin',\n  beforeEnter: (to, from, next) => {\n    if (!isAdmin()) next('/unauthorized')\n    else next()\n  }\n}`
      },
      {
        name: 'beforeRouteEnter',
        type: 'component',
        icon: '🔧',
        shortDesc: 'In-component enter guard',
        description:
          'Runs before the route component is confirmed and cannot access the component instance directly',
        example: `beforeRouteEnter(to, from, next) {\n  next(vm => {\n    // access component instance through vm\n  })\n}`
      }
    ],
    executionSteps: [
      {
        name: 'Navigation triggered',
        description: 'User clicks a link or calls router.push()'
      },
      {
        name: 'beforeRouteLeave',
        description: 'Guard for the component being left'
      },
      { name: 'beforeEach', description: 'Global before guard' },
      { name: 'beforeEnter', description: 'Per-route guard' },
      { name: 'beforeRouteEnter', description: 'In-component guard' },
      { name: 'beforeResolve', description: 'Global resolve guard' },
      { name: 'afterEach', description: 'Global after hook' },
      { name: 'DOM update', description: 'Render the new page' }
    ]
  },
  routeMatching: {
    title: 'Route Matching',
    subtitle: 'How a URL finds its component',
    intro: {
      prefix: 'Imagine using a',
      highlight: 'dictionary',
      suffix:
        ': you enter a word and the dictionary finds its definition. Route matching finds the best matching route config for a URL path and renders the component.'
    },
    testPathTitle: '📍 Test path',
    hint: 'Try: user/123 or products/electronics/456',
    resultTitle: '🎯 Match result',
    matchedRoute: 'Matched route:',
    extractedParams: 'Extracted params:',
    noMatch: 'No matching route found',
    definedRoutes: '📋 Defined routes',
    info: 'Routes match in definition order, so earlier routes have priority. Dynamic params such as :id can match arbitrary values, while exact matches are more specific.',
    routes: [
      { path: '/', name: 'Home', hasParams: false },
      { path: '/user', name: 'User list', hasParams: false },
      { path: '/user/:id', name: 'User detail', hasParams: true },
      { path: '/user/:id/posts', name: 'User posts', hasParams: true },
      {
        path: '/products/:category/:id',
        name: 'Product detail',
        hasParams: true
      },
      { path: '/:path(.*)*', name: '404 page', hasParams: true }
    ]
  },
  routingModes: {
    title: 'Routing Modes',
    subtitle: 'Different ways to manage URLs',
    intro: {
      prefix: 'Imagine',
      highlight: 'shipping a package',
      suffix:
        ': regular mail is like Hash mode, express delivery is like History mode, and courier handoff is like Memory mode. Different needs fit different modes.'
    },
    prosTitle: '✅ Pros',
    consTitle: '❌ Cons',
    urlExample: '🌐 URL example',
    memorySuffix: ' (URL unchanged)',
    info: 'Modern Web apps usually prefer History mode. Use Hash for legacy projects or special server constraints, and Memory for mobile-app embeds or test environments.',
    modes: [
      {
        key: 'hash',
        name: 'Hash mode',
        icon: '#',
        description:
          'Uses the hash part of the URL (#) to simulate routing and has the best compatibility',
        pros: [
          'Compatible with IE8+',
          'No server config required',
          'Simple deployment'
        ],
        cons: ['URL contains #', 'Poor SEO', 'Shared links may lose hash']
      },
      {
        key: 'history',
        name: 'History mode',
        icon: '/',
        description:
          'Uses the HTML5 History API to manage clean URLs and is the most common mode',
        pros: ['Clean URLs', 'SEO friendly', 'Matches user expectations'],
        cons: [
          'Needs server config',
          'IE10+ compatibility',
          'Refresh may return 404'
        ]
      },
      {
        key: 'memory',
        name: 'Memory mode',
        icon: 'M',
        description:
          'Stores route state in memory without changing the browser URL',
        pros: [
          'No browser environment required',
          'Good for tests',
          'Fits mobile app embeds'
        ],
        cons: [
          'No refresh support',
          'URL does not change',
          'Limited to special scenarios'
        ]
      }
    ]
  },
  spaNavigation: {
    title: 'SPA Navigation Flow',
    subtitle: 'The full journey from click to render',
    intro: {
      prefix: 'Imagine',
      highlight: 'ordering food in a restaurant',
      suffix:
        ': you read the menu, place an order, the kitchen prepares it, and the dish is served. SPA navigation follows a similar chain before the new page appears.'
    },
    optimizationTitle: '⚡ Key optimizations',
    info: 'The whole flow happens inside the browser without server participation, giving a native-app-like experience. This is the biggest advantage of SPA over traditional MPA.',
    steps: [
      {
        title: 'Trigger navigation',
        desc: 'User clicks a link or calls router.push()'
      },
      {
        title: 'URL changes',
        desc: 'Browser address bar updates and History API records state'
      },
      {
        title: 'Route matching',
        desc: 'Router matches the URL against route config'
      },
      {
        title: 'Guard validation',
        desc: 'Global, route-level, and component guards run'
      },
      {
        title: 'Component loading',
        desc: 'Lazy-loaded components are fetched and resolved'
      },
      {
        title: 'Component rendering',
        desc: 'The new component mounts into the DOM and the page updates'
      },
      {
        title: 'After hook',
        desc: 'afterEach hooks run and navigation completes'
      }
    ],
    tips: [
      {
        icon: '🎯',
        title: 'Route lazy loading',
        desc: 'Load page components on demand to reduce initial bundle size'
      },
      {
        icon: '🛡️',
        title: 'Guard preloading',
        desc: 'Preload data in beforeEnter to improve user experience'
      },
      {
        icon: '⚡',
        title: 'Transition animations',
        desc: 'Add page transition animations to make navigation smoother'
      }
    ]
  }
}
