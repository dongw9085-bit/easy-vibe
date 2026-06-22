export default {
  common: {
    coreIdea: 'Core idea:',
    choiceAdvice: 'Recommendation:',
    listSeparator: ', ',
    semicolonSeparator: '; '
  },
  assetFingerprint: {
    title: 'Asset Fingerprint (Hash)',
    subtitle: 'Long-term Caching & Version Control',
    rebuild: 'Rebuild',
    enableHash: 'Enable Hash',
    buildOutput: 'Build Output',
    fileCount: '{count} files',
    browserCache: 'Browser Cache',
    cacheHitMiss: 'Hit: {hits} | Miss: {misses}',
    cacheHit: 'Cache Hit (Hash matched)',
    cacheMiss: 'Cache Miss (Hash changed)',
    cacheNew: 'New File (No cache)',
    cacheEffect: 'Cache Strategy Effect',
    hitRate: 'Cache Hit Rate',
    bandwidthSaved: 'Bandwidth Saved',
    avgLoadTime: 'Avg Load Time',
    fileInfo: 'File Info',
    size: 'Size:',
    type: 'Type:',
    modifyTime: 'Modified:',
    hash: 'Hash:',
    dependentModules: 'Dependencies ({count})',
    cacheStrategy: 'Cache Strategy',
    hashEnabled: 'Hash Enabled',
    hashEnabledDesc:
      'Filename includes content hash ({hash}). When file content changes, the URL changes and the browser re-fetches. Suitable for ',
    cacheControlImmutable: ' long-term caching.',
    hashDisabled: 'No Hash',
    hashDisabledDesc: 'Filename is fixed as ',
    hashDisabledDesc2:
      '. After updating, you need to manually refresh the cache or use version query parameters. This easily leads to "stale cache" issues.',
    infoBoxTitle: 'Why asset fingerprinting matters:',
    infoBoxContent:
      'By adding a content hash to filenames (e.g. main.a3f7b2c.js), you can implement a',
    infoBoxContent2: 'permanent cache',
    infoBoxContent3:
      ' strategy. The hash only changes when file content changes, so the browser only re-downloads when necessary. Users enjoy fast loading while always getting the latest code.',
    updated: 'Updated'
  },
  buildPipeline: {
    title: 'Build Pipeline',
    subtitle: 'The complete journey from source code to output',
    introPrefix: 'Imagine running a ',
    introHighlight: 'bakery',
    introSuffix:
      ': flour is sifted, mixed, fermented, and baked before becoming delicious bread. Code goes through similar "processing stages" before it can run in a browser.',
    hint: 'Click any stage above to see details',
    exampleLabel: 'For example:',
    infoBoxContent:
      'Like a factory assembly line, code passes through stages to become a browser-ready output. Each stage has its own responsibility, and they all link together.',
    stages: {
      lint: {
        name: 'Linting',
        simple: 'Find errors',
        detailDesc:
          'Like checking a essay for typos and grammar mistakes. Linting tools automatically detect issues like misspelled variable names, missing semicolons, or undefined variables.',
        example:
          'You write const mesage = "hello", and the linter warns: "Did you mean message? This variable name looks like a typo."'
      },
      transform: {
        name: 'Transpiling',
        simple: 'Translator',
        detailDesc:
          'Like translating Chinese to English for foreign readers. You may write TypeScript or modern JavaScript that older browsers cannot understand, so it needs to be converted to an older version.',
        example:
          'You write const name = user?.name (new syntax), it becomes var name = user && user.name ? user.name : undefined (understood by older browsers)'
      },
      dependency: {
        name: 'Dependency Resolution',
        simple: 'Map relations',
        detailDesc:
          'Like organizing a recipe to figure out which ingredients are needed. Your code may reference many other files. This stage analyzes "who depends on who" and draws a complete relationship map.',
        example:
          'main.js imports utils.js, which imports helper.js. Resolution produces a "dependency map" telling the bundler what order to process these files.'
      },
      bundle: {
        name: 'Bundling',
        simple: 'Pack boxes',
        detailDesc:
          'Like packing scattered items into a few boxes when moving. Your project may have hundreds of files; loading too many small files is slow for browsers. Bundling merges them into a few files.',
        example:
          'Originally 100 .js files become 2 files after bundling: app.js (your code) and vendor.js (third-party libraries). The browser only makes 2 requests instead of 100.'
      },
      optimize: {
        name: 'Optimization',
        simple: 'Slim down',
        detailDesc:
          'Like compressing a suitcase by removing unnecessary items. Remove whitespace and comments, eliminate unused code (Tree Shaking), and shorten variable names to reduce file size.',
        example:
          'Originally 100KB of code becomes 30KB after optimization. For example, function getUserName() { return name } becomes function a(){return n}'
      }
    }
  },
  bundlerComparison: {
    title: 'Bundler Comparison',
    subtitle: 'Vite vs Webpack vs Rollup',
    viewRadar: 'Radar',
    viewTable: 'Table',
    viewRecommend: 'Scenarios',
    dimensionLabel: 'Dimension',
    radarInfo:
      "The radar chart shows each tool's capabilities across dimensions. A larger area indicates stronger overall capability.",
    tableInfo:
      "The table compares each tool's specific scores per dimension for precise comparison.",
    recommendInfo:
      'Choosing the most suitable tool for your project type and team is more important than choosing the "best" tool.',
    dimensions: {
      speed: 'Build Speed',
      config: 'Config Complexity',
      ecosystem: 'Ecosystem',
      hmr: 'HMR Speed',
      output: 'Output Optimization',
      memory: 'Memory Usage'
    },
    bundlers: {
      vite: { shortDesc: 'Next-gen frontend build tool' },
      webpack: { shortDesc: 'Battle-tested powerful bundler' },
      rollup: { shortDesc: 'JavaScript module bundler' }
    },
    scenarios: {
      spa: {
        name: 'Small-to-medium SPA',
        shortDesc: 'Single-page app, fast development',
        bestReason:
          "Vite's blazing fast cold start and HMR provide an excellent developer experience with simple configuration, making it the first choice for small-to-medium projects.",
        altReason:
          'If you need extensive custom configuration or depend on specific webpack loaders, webpack remains a reliable choice.'
      },
      library: {
        name: 'JavaScript Library / Component Library',
        shortDesc: 'Bundling for npm packages',
        bestReason:
          'Rollup produces the cleanest output with the best Tree Shaking results, making it ideal for JavaScript libraries.',
        altReason:
          'Vite uses Rollup for production builds while providing a better developer experience, making it a good modern choice for library development.'
      },
      enterprise: {
        name: 'Large Enterprise Application',
        shortDesc: 'Complex business, team collaboration',
        bestReason:
          'Webpack has the most mature ecosystem with the richest collection of loaders and plugins, handling all kinds of complex scenarios and customization needs.',
        altReason:
          "If the team wants better developer experience and the project doesn't need too much custom build logic, Vite is also worth considering."
      },
      ssg: {
        name: 'Static Site Generation (SSG)',
        shortDesc: 'Docs sites, blogs, marketing pages',
        bestReason:
          'Modern SSG tools like VitePress and Astro are all based on Vite, offering good developer experience and fast builds.',
        altReason:
          'Some lightweight SSG tools use Rollup directly. Consider this if you have strict output size requirements.'
      }
    },
    bestChoice: 'Top Pick',
    alternative: 'Alternative'
  },
  codeSplitting: {
    title: 'Code Splitting Demo',
    subtitle: 'Load on demand, boost first-screen speed',
    routeConfig: 'Route Config',
    loadAnalysis: 'Load Analysis',
    initialLoad: 'Initial Load',
    lazyLoading: 'Lazy Loading',
    lazyTip: 'Click modules above to simulate lazy loading',
    originalTotal: 'Total (unoptimized)',
    initialLoadLabel: 'Initial Load',
    savings: 'Saved',
    loading: 'Loading...',
    cached: 'Cached',
    lazyLoad: 'On-demand',
    routes: {
      home: 'Home',
      about: 'About',
      dashboard: 'Dashboard',
      settings: 'Settings',
      reports: 'Reports'
    },
    infoBoxContent:
      'Not all code needs to load on the first screen. Through dynamic import(), we can defer non-core features until they are actually needed. It is like a restaurant a la carte system -- not all dishes are served at once, but on demand.'
  },
  dependencyGraph: {
    title: 'Dependency Graph',
    subtitle: 'Module dependency visualization',
    entryFile: 'Entry file',
    module: 'Module',
    dependency: 'Dependency',
    infoBoxContent:
      'Like a map, it helps you understand how modules reference each other. main.js imports utils, components, and api, while components also imports utils -- this is the dependency chain.'
  },
  hotReload: {
    title: 'Hot Module Replacement (HMR) Demo',
    subtitle: 'Edit code without page refresh, instant updates',
    traditionalRefresh: 'Traditional Refresh',
    hmrLabel: 'HMR Hot Reload',
    noHmrFooter: 'Page flashes, state lost',
    hmrFooter: 'No refresh, state preserved',
    workflowTitle: 'HMR Workflow',
    supportTitle: 'HMR Support by Build Tool',
    toolHeader: 'Build Tool',
    hmrSupportHeader: 'HMR Support',
    speedHeader: 'Update Speed',
    featureHeader: 'Features',
    infoBoxTitle: 'How HMR works:',
    infoBoxContent:
      'The build tool maintains a WebSocket connection with the browser. When a file is modified, the tool compiles the changed module and notifies the browser via WebSocket. The HMR Runtime in the browser receives the update, replaces the old module, and keeps the application state intact. It is like changing an engine mid-flight -- updates without stopping.',
    noHmrSteps: [
      'Edit code and save',
      'Manually refresh browser',
      'Page reloads all resources',
      'App state resets (login lost)'
    ],
    hmrSteps: [
      'Edit code and save',
      'Build tool detects change and compiles',
      'WebSocket pushes update to browser',
      'Partial module replacement, state preserved'
    ],
    flowSteps: [
      'Developer edits code',
      'Build tool compiles',
      'WebSocket push',
      'Browser replaces module',
      'Page updates instantly'
    ],
    hmrTools: [
      {
        name: 'Vite',
        support: 'Native',
        speed: 'Blazing (<100ms)',
        feature: 'ESM-based, fastest HMR'
      },
      {
        name: 'Webpack',
        support: 'Full',
        speed: 'Fast (1-3s)',
        feature: 'Most mature HMR implementation'
      },
      {
        name: 'Parcel',
        support: 'Auto',
        speed: 'Fast (500ms-1s)',
        feature: 'Zero config, automatic HMR'
      },
      {
        name: 'Rollup',
        support: 'Plugin',
        speed: 'Slower in dev',
        feature: 'Primarily for production builds'
      }
    ]
  },
  sourceMap: {
    title: 'SourceMap Demo',
    subtitle: 'The secret weapon for debugging minified code',
    sourceLabel: 'Source Code',
    minifiedLabel: 'Minified',
    sourceMapContent: 'SourceMap File Example',
    tipsTitle: 'Usage Tips',
    tipDevTitle: 'Development',
    tipDevDesc: 'Enable SourceMap for easier debugging',
    tipProdTitle: 'Production',
    tipProdDesc: 'Do not deploy .map files to prevent source code leaks',
    tipSeparateTitle: 'Separate Storage',
    tipSeparateDesc: 'Use sourceMappingURL to point to a separate server',
    infoBoxTitle: 'How SourceMap works:',
    infoBoxContent:
      'When minifying code, the build tool records each character\'s position in the source code and generates a .map file. During browser debugging, the mapping "restores" minified code to its source form. Warning: do not expose .map files in production to prevent source code leaks!',
    sourceCodeComment1: 'Calculate the sum of two numbers',
    sourceCodeLog1: 'Result:',
    sourceCodeLog2: 'Total:',
    sourceMapUrlComment: 'points to mapping file',
    fieldVersion: 'SourceMap spec version (currently 3)',
    fieldSources: 'Original source file list',
    fieldNames: 'Variable name mapping (before/after minification)',
    fieldMappings: 'Position mapping info (VLQ encoded)',
    fieldFile: 'Corresponding minified file name'
  },
  treeShaking: {
    title: 'Tree Shaking Demo',
    subtitle: 'Select the features you need and watch the bundle size change',
    sourceLabel: 'utils.js (Source)',
    controlLabel: 'Select Features',
    originalSize: 'Original Size',
    afterShaking: 'After Tree Shaking',
    savings: 'Saved',
    infoBoxTitle: 'How Tree Shaking works:',
    infoBoxContent:
      'Modern bundlers analyze ES module import/export relationships to automatically remove unused code. Prerequisites: 1) Use ES modules (import/export); 2) Code has no side effects; 3) Bundler supports it (Webpack, Rollup, etc.)'
  }
}
