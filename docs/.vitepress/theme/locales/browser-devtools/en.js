export default {
  common: {
    coreIdea: 'Core idea:',
    recommendation: 'Recommendation:'
  },
  mainDemo: {
    controlLabel: 'Chrome DevTools Simulator',
    tourPlaceholder: 'Select a tour scenario...',
    tourOptions: {
      elements: '1. Elements Panel',
      console: '2. Console Panel',
      sources: '3. Sources Panel',
      network: '4. Network Panel',
      application: '5. Application Panel'
    },
    stopBtn: 'Stop Demo',
    tabs: {
      elements: {
        label: 'Elements',
        desc: 'View and modify page HTML structure and CSS styles'
      },
      console: {
        label: 'Console',
        desc: 'View logs, errors, and execute JavaScript code'
      },
      sources: {
        label: 'Sources',
        desc: 'View source code and set breakpoints for debugging'
      },
      network: {
        label: 'Network',
        desc: 'Monitor network requests, view API data and load performance'
      },
      performance: {
        label: 'Performance',
        desc: 'Analyze runtime performance'
      },
      memory: { label: 'Memory', desc: 'Detect memory leaks' },
      application: {
        label: 'Application',
        desc: 'View local storage, cookies, and cache'
      },
      security: {
        label: 'Security',
        desc: 'View certificates and security issues'
      },
      lighthouse: { label: 'Lighthouse', desc: 'Page quality audit' },
      recorder: { label: 'Recorder', desc: 'Record user interactions' }
    },
    titles: {
      elementPicker: 'Select an element in the page to inspect it',
      deviceToggle: 'Toggle device toolbar',
      settings: 'Settings',
      close: 'Close'
    },
    consoleSidebar: {
      messages: '6 messages',
      userMessages: '6 user messages',
      noErrors: 'No errors',
      noWarnings: 'No warnings',
      noInfo: 'No info',
      verbose: '6 verbose messages'
    },
    consoleToolbar: {
      title: 'Console toolbar',
      clear: 'Clear console',
      liveExpression: 'Create live expression',
      filter: 'Filter',
      defaultLevel: 'Default level ▼'
    },
    bottomDrawer: {
      console: 'Console',
      aiAssist: 'AI Assist',
      changes: "What's new",
      issues: 'Issues',
      search: 'Search',
      noResultsTitle: 'No matches found',
      noResultsDesc: 'No results matching your search query'
    },
    stylesPanel: {
      styles: 'Styles',
      computed: 'Computed',
      layout: 'Layout',
      eventListeners: 'Event Listeners'
    },
    elementsFilter: 'Filter',
    sources: {
      page: 'Page',
      filesystem: 'Filesystem',
      noWatchExpressions: 'No watch expressions'
    },
    tours: {
      console: {
        tab: 'Console: View logs and run code interactively',
        toolbar: 'Toolbar: Clear logs, set log levels, filter content',
        sidebar: 'Sidebar: Aggregate messages by type (Errors, Warnings)',
        logLine:
          'Log stream: Display code output, click source links to jump to code',
        drawer: 'Drawer: View search results, issues, and other auxiliary info',
        input:
          'Live execution: Enter a JS expression here and press Enter to run'
      },
      elements: {
        tab: 'Elements Panel: View and modify DOM/CSS in real time',
        domTree:
          'DOM Tree: Page HTML structure, collapsible/expandable/draggable',
        selectedElement:
          'Selected element: Click an element to view its styles on the right',
        stylesPanel: 'Styles Panel: View computed styles and CSS rules',
        cssRule:
          'CSS Rules: Modify property values directly and preview in real time'
      },
      sources: {
        tab: 'Sources: File browsing and breakpoint debugging',
        fileSystem: 'File system: View all loaded resource files',
        codeEditor:
          'Editor: View source code, click line numbers to set breakpoints',
        debugger: 'Debugger: View variables (Watch), call stack (Call Stack)'
      },
      network: {
        tab: 'Network: Packet capture analysis',
        toolbar: 'Filters: Filter requests by type (XHR/Fetch, CSS, JS)',
        gridHeader:
          'Request list: View status codes, types, sizes, and timings',
        clickRow: 'Click a request row for details',
        detailPanel: 'Detail panel: View Headers, Preview, Response',
        headersTab: 'Headers: View request/response headers',
        general: 'General: View URL, Method (GET/POST) and status code (200)',
        responseHeaders:
          'Response Headers: Server-returned header info (Content-Type)',
        requestHeaders:
          'Request Headers: Browser-sent header info (User-Agent, Cookies)',
        previewTab: 'Preview: Formatted preview of API response data',
        previewContent: 'Preview Content: View JSON structure',
        responseTab: 'Response: View raw response data',
        responseBody: 'Response Body: Raw text content',
        waterfall: 'Waterfall: Request lifecycle timing analysis'
      },
      application: {
        tab: 'Application: Storage and cache management',
        storageSidebar: 'Storage types: Local Storage, Cookies, IndexedDB',
        storageContent: 'Data view: View Key-Value data with full CRUD support'
      }
    }
  },
  liveDemo: {
    instruction:
      '👆 Click an element above, DevTools will update in real time below',
    titles: {
      elementPicker: 'Select an element in the page to inspect it',
      deviceToggle: 'Toggle device toolbar'
    },
    tabs: {
      elements: 'Elements',
      console: 'Console',
      sources: 'Sources',
      network: 'Network',
      application: 'Application'
    },
    stylesTabs: {
      styles: 'Styles',
      computed: 'Computed'
    },
    presets: {
      title: '✨ Quick Presets',
      placeholder: 'Select a preset...',
      h1: ['Default', 'Vibrant Red', 'Tech Blue', 'Elegant Purple'],
      button: ['Default', 'Warning', 'Ghost', 'Dark'],
      container: ['Card', 'Dark', 'Minimal']
    },
    placeholder:
      'This demo mainly showcases the Elements panel live editing. Please switch back to the "Elements" panel.'
  },
  consoleDemo: {
    title: 'Console',
    inputPlaceholder: 'Enter JS code, press Enter to execute...',
    shortcutsLabel: 'Quick try:',
    welcomeLog: 'Welcome to the interactive console demo!',
    infoLog: 'Try typing simple JavaScript commands below.',
    warnLog: 'This is a simulated environment, not a real JS engine.'
  },
  elementsDemo: {
    title: 'Elements Panel',
    previewLabel: 'Page Preview',
    footerTip:
      'Click an element in the DOM tree on the left, modify styles in the Styles panel on the right, and the preview below will update in real time.'
  },
  networkDemo: {
    title: 'Network Panel',
    refreshBtn: 'Refresh Page',
    simulateFailBtn: 'Simulate Failure',
    footerTip: '💡 Click a row to view request details'
  },
  applicationDemo: {
    title: 'Application Panel',
    clearAllBtn: 'Clear All',
    addBtn: 'Add',
    infoBars: {
      local:
        'Persistent storage: Data persists even after closing the browser.',
      session: 'Temporary storage: Data is cleared when the tab is closed.',
      cookies:
        'Cookies: Typically used for authentication, sent to the server with requests.'
    }
  },
  sourcesDemo: {
    title: 'Sources (Debugging)',
    footerTip:
      'Click a line number to set a breakpoint. Click Run to start execution, the code will pause at breakpoints.'
  }
}
