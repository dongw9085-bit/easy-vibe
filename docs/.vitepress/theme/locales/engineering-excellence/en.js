export default {
  codeSmell: {
    title: 'Code Smell Detector - click to switch examples',
    problemCode: 'Problem code',
    suggestion: 'Improvement:',
    smells: [
      {
        name: 'Long function',
        icon: '📏',
        cls: 'red',
        desc: 'A function exceeds 50 lines, does too many things, and becomes hard to understand and test.',
        bad: `function processOrder(order) {
  // Validate order... (20 lines)
  // Calculate price... (15 lines)
  // Check inventory... (10 lines)
  // Send notification... (15 lines)
  // Update database... (10 lines)
  // Generate report... (10 lines)
  // 80+ lines in total!
}`,
        fix: 'Split the large function into focused functions such as validateOrder(), calculatePrice(), and checkInventory().'
      },
      {
        name: 'Magic numbers',
        icon: '🔢',
        cls: 'orange',
        desc: 'Raw numeric literals appear in code without clear meaning, so readers cannot tell what they represent.',
        bad: `if (user.age >= 18) { ... }
if (password.length < 8) { ... }
if (retryCount > 3) { ... }
setTimeout(fn, 86400000)`,
        fix: 'Replace them with named constants: const ADULT_AGE = 18, const MIN_PASSWORD_LENGTH = 8, const ONE_DAY_MS = 86400000.'
      },
      {
        name: 'Duplicated code',
        icon: '📋',
        cls: 'yellow',
        desc: 'The same or similar code appears in multiple places, making future changes easy to miss.',
        bad: `// File A
const tax = price * 0.13
const total = price + tax

// File B (almost the same)
const tax = amount * 0.13
const sum = amount + tax`,
        fix: 'Extract a shared calculateTax(amount) function and reuse it in all places.'
      },
      {
        name: 'Deep nesting',
        icon: '🪆',
        cls: 'purple',
        desc: 'Many layers of if/for nesting make code hard to read and turn control flow into a maze.',
        bad: `if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      if (order.isValid) {
        // The real logic finally starts...
      }
    }
  }
}`,
        fix: 'Use guard clauses to return early: if (!user) return; if (!user.isActive) return; ...'
      }
    ]
  },
  docStructure: {
    title: 'Documentation structure template - click to switch document types',
    docs: [
      {
        name: 'README',
        icon: '📖',
        sections: [
          {
            name: 'Project name + one-line description',
            desc: 'Let readers understand what the project is within 3 seconds.',
            example: '# MyApp\n> A lightweight task management tool'
          },
          {
            name: 'Quick start',
            desc: 'Give users the shortest path to run it, usually install plus run commands.',
            example: 'npm install myapp\nnpx myapp init'
          },
          {
            name: 'Features',
            desc: 'List core features so users can judge whether it fits their needs.',
            example:
              '- ✅ Task board\n- ✅ Team collaboration\n- ✅ Data export'
          },
          {
            name: 'Usage examples',
            desc: 'Show typical usage with code snippets, which are clearer than prose.',
            example: null
          },
          {
            name: 'Contributing + license',
            desc: 'Explain how to contribute and which open-source license applies.',
            example: null
          }
        ]
      },
      {
        name: 'API docs',
        icon: '🔌',
        sections: [
          {
            name: 'API overview',
            desc: 'Explain the base URL, authentication method, and common parameters.',
            example: 'Base URL: https://api.example.com/v1\nAuth: Bearer Token'
          },
          {
            name: 'Request parameters',
            desc: 'Use a table for parameter name, type, required status, and description.',
            example:
              '| Param  | Type   | Required | Description |\n| name   | string | Yes      | User name   |'
          },
          {
            name: 'Response format',
            desc: 'Show successful and failed JSON response examples.',
            example: '{ "code": 200, "data": { ... } }'
          },
          {
            name: 'Error codes',
            desc: 'List possible error codes and their meanings.',
            example:
              '401 - Unauthorized\n404 - Resource not found\n429 - Too many requests'
          }
        ]
      },
      {
        name: 'Architecture docs',
        icon: '🏛️',
        sections: [
          {
            name: 'System overview',
            desc: 'Summarize the system goal, boundaries, and core constraints.',
            example: null
          },
          {
            name: 'Architecture diagram',
            desc: 'Show the overall architecture, modules, and relationships.',
            example:
              '[Client] → [API Gateway] → [Microservice Cluster]\n                    ↓\n              [Database Cluster]'
          },
          {
            name: 'Technology choices',
            desc: 'Explain key technology decisions and compare alternatives.',
            example: null
          },
          {
            name: 'Deployment architecture',
            desc: 'Explain production deployment and scaling strategy.',
            example: null
          }
        ]
      }
    ]
  },
  openSourceWorkflow: {
    title: 'Open-source contribution workflow - click a step for details',
    commandTitle: 'Command',
    previous: 'Previous',
    next: 'Next',
    steps: [
      {
        name: 'Fork',
        icon: '🍴',
        desc: 'Fork the target repository on GitHub into your own account to get a full copy.',
        cmd: '# Click the Fork button on GitHub'
      },
      {
        name: 'Clone',
        icon: '📥',
        desc: 'Clone your forked repository into the local development environment.',
        cmd: 'git clone https://github.com/your-name/project.git\ncd project'
      },
      {
        name: 'Branch',
        icon: '🌿',
        desc: 'Create a feature branch instead of working directly on main. The branch name should describe the work.',
        cmd: 'git checkout -b fix/login-bug'
      },
      {
        name: 'Commit',
        icon: '💾',
        desc: 'Commit after finishing the change. Write a clear commit message and follow the project convention.',
        cmd: 'git add .\ngit commit -m "fix: fix blank login page"'
      },
      {
        name: 'Push',
        icon: '🚀',
        desc: 'Push the local branch to your forked remote repository.',
        cmd: 'git push origin fix/login-bug'
      },
      {
        name: 'PR',
        icon: '📬',
        desc: 'Create a Pull Request on GitHub and describe the change, linked issue, and test method.',
        cmd: '# Click "New Pull Request" on GitHub'
      },
      {
        name: 'Review',
        icon: '👀',
        desc: 'Maintainers review your code and may request changes. Update the branch and push again.',
        cmd: 'git add . && git commit -m "fix: address review feedback"\ngit push'
      },
      {
        name: 'Merge',
        icon: '🎉',
        desc: 'After approval, maintainers merge your PR. You are now a project contributor.',
        cmd: '# Maintainer action: Merge Pull Request'
      }
    ]
  },
  tddCycle: {
    title: 'TDD red-green-refactor cycle - click “Next” to advance',
    stepBadge: 'Step {current} / {total}',
    previous: 'Previous',
    next: 'Next',
    reset: 'Reset',
    phases: [
      { name: 'Red', icon: '🔴', cls: 'red' },
      { name: 'Green', icon: '🟢', cls: 'green' },
      { name: 'Refactor', icon: '🔵', cls: 'blue' }
    ],
    steps: [
      {
        phase: '🔴 Red - write a failing test first',
        cls: 'red',
        desc: 'Requirement: implement add(a, b). The first TDD step is not implementation, but writing a test.',
        fileLabel: 'add.test.js',
        code: `test('add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3)
})`,
        result: '❌ Test failed - add is not defined'
      },
      {
        phase: '🟢 Green - write the smallest passing implementation',
        cls: 'green',
        desc: 'Do not chase perfection. Write only enough code to pass the test.',
        fileLabel: 'add.js',
        code: `function add(a, b) {
  return a + b
}`,
        result: '✅ Test passed!'
      },
      {
        phase: '🔵 Refactor - improve the code',
        cls: 'blue',
        desc: 'After tests pass, improve the code safely. Tests are your safety net.',
        fileLabel: 'add.js',
        code: `const add = (a, b) => a + b`,
        result: '✅ Refactor complete, tests still pass!'
      },
      {
        phase: '🔴 Red - add a test for a new requirement',
        cls: 'red',
        desc: 'New requirement: add should handle numeric strings. Continue the loop.',
        fileLabel: 'add.test.js',
        code: `test('add("1", "2") should return 3', () => {
  expect(add('1', '2')).toBe(3)
})`,
        result: '❌ Test failed - returned "12" instead of 3'
      },
      {
        phase: '🟢 Green - fix the implementation',
        cls: 'green',
        desc: 'Update the implementation to handle string inputs.',
        fileLabel: 'add.js',
        code: `const add = (a, b) => Number(a) + Number(b)`,
        result: '✅ All tests pass!'
      }
    ]
  },
  testPyramid: {
    title: 'Interactive test pyramid - click each layer for details',
    example: 'Example:',
    upperLegend: 'Higher: slower, more expensive, closer to users',
    lowerLegend: 'Lower: faster, more numerous, closer to code',
    detailRows: [
      { key: 'count', label: 'Share' },
      { key: 'speed', label: 'Execution speed' },
      { key: 'cost', label: 'Maintenance cost' },
      { key: 'scope', label: 'Coverage scope' },
      { key: 'confidence', label: 'Confidence' }
    ],
    layers: [
      {
        name: 'E2E tests',
        cls: 'e2e',
        icon: '🖥️',
        width: '40%',
        count: 'About 10%',
        speed: 'Slow (seconds to minutes)',
        cost: 'High - many environment dependencies, fragile',
        scope: 'Complete user flows',
        confidence: 'Highest - simulates real user behavior',
        example: 'Use Playwright to simulate login → order → payment.'
      },
      {
        name: 'Integration tests',
        cls: 'integration',
        icon: '🔗',
        width: '60%',
        count: 'About 20%',
        speed: 'Medium (hundreds of milliseconds)',
        cost: 'Medium - needs some external dependencies',
        scope: 'Collaboration between modules',
        confidence: 'High - verifies components work together',
        example:
          'Test that an API can read/write the database and return expected JSON.'
      },
      {
        name: 'Unit tests',
        cls: 'unit',
        icon: '🧪',
        width: '85%',
        count: 'About 70%',
        speed: 'Very fast (milliseconds)',
        cost: 'Low - no external dependencies',
        scope: 'Single function or class',
        confidence: 'Baseline - verifies each small part works',
        example: 'Test whether formatPrice(100) returns "¥1.00".'
      }
    ]
  },
  refactoring: {
    title:
      'Refactoring technique comparison - choose a technique to compare before and after',
    before: 'Before',
    after: 'After',
    tip: 'Key point:',
    techniques: [
      {
        name: 'Extract function',
        description:
          'Extract Function: move a code block out of a large function into a clearly named new function.',
        before: [
          {
            text: 'function printReport(invoice) {\n  console.log("=== Invoice ===")\n'
          },
          {
            text: '  // Calculate total\n  let total = 0\n  for (let item of invoice.items) {\n    total += item.price * item.qty\n  }\n',
            changed: true
          },
          { text: '  console.log(`Total: ${total}`)\n}' }
        ],
        after: [
          {
            text: 'function printReport(invoice) {\n  console.log("=== Invoice ===")\n'
          },
          { text: '  const total = calcTotal(invoice.items)\n', changed: true },
          { text: '  console.log(`Total: ${total}`)\n}\n\n' },
          {
            text: 'function calcTotal(items) {\n  return items.reduce(\n    (s, i) => s + i.price * i.qty, 0\n  )\n}',
            changed: true
          }
        ],
        tip: 'Extract Function is one of the most common refactorings. A good function name is the best comment.'
      },
      {
        name: 'Rename variable',
        description:
          'Rename Variable: replace vague names with clear, meaningful names so code explains itself.',
        before: [
          { text: 'function calc(', changed: true },
          { text: 'a, b, c', changed: true },
          { text: ') {\n' },
          {
            text: '  const d = a * b\n  const e = d * (1 - c)\n  return e\n}',
            changed: true
          }
        ],
        after: [
          { text: 'function calcOrderTotal(', changed: true },
          { text: 'price, quantity, discountRate', changed: true },
          { text: ') {\n' },
          {
            text: '  const subtotal = price * quantity\n  const total = subtotal * (1 - discountRate)\n  return total\n}',
            changed: true
          }
        ],
        tip: 'Naming is a core engineering skill. Good names make code read like prose; poor names make it feel encrypted.'
      },
      {
        name: 'Remove duplication',
        description:
          'Remove Duplication: extract repeated logic into shared functions or templates and follow DRY.',
        before: [
          { text: '// Employee report\nfunction empReport(emp) {\n' },
          {
            text: '  return `${emp.name} | ${emp.dept} | ${emp.salary}`',
            changed: true
          },
          { text: '\n}\n\n// Manager report\nfunction mgrReport(mgr) {\n' },
          {
            text: '  return `${mgr.name} | ${mgr.dept} | ${mgr.salary}`',
            changed: true
          },
          { text: '\n}' }
        ],
        after: [
          { text: '' },
          {
            text: 'function formatReport(person) {\n  return `${person.name} | ${person.dept} | ${person.salary}`\n}',
            changed: true
          },
          { text: '\n\n// Unified call\n' },
          {
            text: 'formatReport(employee)\nformatReport(manager)',
            changed: true
          }
        ],
        tip: 'DRY is a basic software engineering principle. Every duplication is a future bug risk.'
      },
      {
        name: 'Simplify conditionals',
        description:
          'Simplify Conditional: replace deeply nested if/else code with guard clauses or strategies to reduce complexity.',
        before: [
          { text: 'function getDiscount(user) {\n' },
          {
            text: '  if (user.type === "vip") {\n    if (user.years > 5) {\n      return 0.3\n    } else {\n      return 0.2\n    }\n  } else {\n    if (user.years > 3) {\n      return 0.1\n    } else {\n      return 0\n    }\n  }',
            changed: true
          },
          { text: '\n}' }
        ],
        after: [
          { text: 'function getDiscount(user) {\n' },
          {
            text: '  if (user.type === "vip" && user.years > 5) return 0.3\n  if (user.type === "vip") return 0.2\n  if (user.years > 3) return 0.1\n  return 0',
            changed: true
          },
          { text: '\n}' }
        ],
        tip: 'Guard clauses remove nesting through early returns. Flat code is easier to read and maintain.'
      }
    ]
  },
  techWriting: {
    title: 'Technical writing comparison - click to switch cases',
    badTitle: '❌ Poor writing',
    goodTitle: '✅ Better writing',
    tipsTitle: 'Improvement points:',
    cases: [
      {
        name: 'Function comments',
        icon: '💬',
        bad: `// Process data
function process(d) {
  // ...
}`,
        good: `/**
 * Convert raw order data into invoice format.
 * @param {Order} order - Raw order object
 * @returns {Invoice} Formatted invoice
 * @throws {ValidationError} When order data is incomplete
 */
function toInvoice(order) {
  // ...
}`,
        tips: [
          'Explain why, not just what',
          'Document parameter and return types',
          'Describe exceptional cases'
        ]
      },
      {
        name: 'API description',
        icon: '🔌',
        bad: `POST /api/users
Send user data to create a user.`,
        good: `POST /api/users
Create a new user account.

Request body:
{
  "name": "Alice",     // required, 2-50 chars
  "email": "a@b.com"  // required, valid email
}

Success response 201:
{ "id": "u_123", "name": "Alice" }

Error response 400:
{ "error": "Invalid email format" }`,
        tips: [
          'Provide complete request/response examples',
          'Mark required and optional fields',
          'List error scenarios'
        ]
      },
      {
        name: 'Changelog',
        icon: '📝',
        bad: `v2.1 - fixed some bugs and added features`,
        good: `## v2.1.0 (2025-01-15)

### Added
- Support batch export of reports in PDF format

### Fixed
- Fix blank login page in Safari (#234)

### Changed
- Minimum Node.js version raised from 16 to 18`,
        tips: [
          'Group by change type',
          'Link related issue numbers',
          'Include version and date'
        ]
      }
    ]
  },
  decisionMatrix: {
    title: 'Decision Matrix',
    subtitle: 'Quantify tradeoffs for technology selection',
    technologies: 'Technologies to compare',
    addPlaceholder: 'Add technology...',
    dimensionsTitle: 'Evaluation dimensions and weights',
    scoringTitle: 'Scores (1-5)',
    dimensionColumn: 'Dimension',
    rankingTitle: 'Weighted total ranking',
    reset: 'Reset all',
    preset: 'Load preset',
    usageTitle: 'How to use:',
    usage:
      'Adjust weights to reflect project priorities, score each technology on each dimension, and the matrix calculates weighted totals automatically. Higher-weight dimensions affect the final result more.',
    dimensions: [
      { key: 'learning', label: 'Learning curve' },
      { key: 'ecosystem', label: 'Ecosystem' },
      { key: 'performance', label: 'Performance' },
      { key: 'community', label: 'Community activity' },
      { key: 'hiring', label: 'Hiring difficulty' }
    ]
  },
  licenseComparison: {
    title: 'Open-source license comparison tool',
    needs: 'My needs:',
    clear: 'Clear filters',
    recommendation: 'Recommended license:',
    licenseColumn: 'License',
    yes: 'Allowed',
    no: 'Not allowed / limited',
    conditional: 'Conditional',
    permissions: [
      { id: 'commercial', label: 'Commercial use' },
      { id: 'modify', label: 'Modify' },
      { id: 'distribute', label: 'Distribute' },
      { id: 'patent', label: 'Patent grant' },
      { id: 'private', label: 'Private use' },
      { id: 'copyleft', label: 'Open derivatives' },
      { id: 'liability', label: 'Liability waiver' }
    ],
    licenses: [
      {
        id: 'mit',
        name: 'MIT',
        summary: 'Very permissive, almost no restrictions',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: false,
          private: true,
          copyleft: false,
          liability: true
        },
        tags: ['commercial', 'simple', 'private']
      },
      {
        id: 'apache2',
        name: 'Apache 2.0',
        summary: 'Permissive plus patent protection',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: true,
          private: true,
          copyleft: false,
          liability: true
        },
        tags: ['commercial', 'patent', 'private']
      },
      {
        id: 'gpl3',
        name: 'GPL 3.0',
        summary: 'Strong copyleft, derivatives must be open source',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: true,
          private: true,
          copyleft: true,
          liability: true
        },
        tags: ['copyleft', 'patent']
      },
      {
        id: 'bsd2',
        name: 'BSD 2-Clause',
        summary: 'Similar to MIT, minimal and permissive',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: false,
          private: true,
          copyleft: false,
          liability: true
        },
        tags: ['commercial', 'simple', 'private']
      },
      {
        id: 'mpl2',
        name: 'MPL 2.0',
        summary: 'File-level copyleft, a middle ground',
        perms: {
          commercial: true,
          modify: true,
          distribute: true,
          patent: true,
          private: true,
          copyleft: 'cond',
          liability: true
        },
        tags: ['commercial', 'patent', 'copyleft']
      }
    ],
    filters: [
      { id: 'commercial', label: 'Allow commercial use' },
      { id: 'patent', label: 'Need patent protection' },
      { id: 'simple', label: 'Keep it simple' },
      { id: 'copyleft', label: 'Require open derivatives' },
      { id: 'private', label: 'Allow closed-source use' }
    ]
  },
  designPatternCatalog: {
    title: 'Design pattern catalog - click a category to view common patterns',
    count: '{count} patterns',
    when: 'Use cases',
    code: 'Code example',
    categories: [
      {
        name: 'Creational',
        icon: '🏗️',
        cls: 'create',
        patterns: [
          {
            name: 'Singleton',
            intent:
              'Ensure a class has only one instance and provide a global access point.',
            when: 'Database connection pools, global configuration, loggers.',
            code: `class Database {
  static instance = null
  static getInstance() {
    if (!this.instance) {
      this.instance = new Database()
    }
    return this.instance
  }
}`
          },
          {
            name: 'Factory',
            intent:
              'Define an interface for creating objects and let subclasses decide which class to instantiate.',
            when: 'When different object types must be created based on conditions.',
            code: `function createNotification(type) {
  switch (type) {
    case 'email': return new EmailNotify()
    case 'sms':   return new SmsNotify()
    case 'push':  return new PushNotify()
  }
}`
          }
        ]
      },
      {
        name: 'Structural',
        icon: '🧱',
        cls: 'structure',
        patterns: [
          {
            name: 'Decorator',
            intent:
              'Add responsibilities to objects dynamically, with more flexibility than inheritance.',
            when: 'When behavior must be extended without modifying existing code.',
            code: `function withLogging(fn) {
  return function(...args) {
    console.log('call:', fn.name)
    return fn.apply(this, args)
  }
}
const save = withLogging(saveUser)`
          },
          {
            name: 'Adapter',
            intent:
              'Convert one interface into another interface expected by clients.',
            when: 'Integrating third-party APIs or supporting legacy interfaces.',
            code: `class OldApi { getData() { ... } }

class ApiAdapter {
  constructor(old) { this.old = old }
  fetch() { return this.old.getData() }
}`
          }
        ]
      },
      {
        name: 'Behavioral',
        icon: '🎭',
        cls: 'behavior',
        patterns: [
          {
            name: 'Observer',
            intent:
              'Define one-to-many dependencies so dependents are notified automatically when state changes.',
            when: 'Event systems, state management, message push.',
            code: `class EventBus {
  listeners = {}
  on(event, fn) {
    (this.listeners[event] ||= []).push(fn)
  }
  emit(event, data) {
    this.listeners[event]?.forEach(fn => fn(data))
  }
}`
          },
          {
            name: 'Strategy',
            intent:
              'Define a family of algorithms and make them interchangeable.',
            when: 'Switching sorting strategies, payment methods, or validation rules.',
            code: `const strategies = {
  bubble: arr => { /* bubble sort */ },
  quick:  arr => { /* quick sort */ },
  merge:  arr => { /* merge sort */ }
}
function sort(arr, type) {
  return strategies[type](arr)
}`
          }
        ]
      }
    ]
  },
  patternPlayground: {
    title: 'Design Pattern Playground',
    subtitle: 'Choose a pattern and try it',
    observerDesc:
      'Simulate event publish/subscribe: add subscribers, publish an event, and observe how notifications spread.',
    publisher: '📡 Publisher',
    eventPlaceholder: 'Enter event message...',
    publish: 'Publish event',
    subscribers: '👥 Subscribers',
    add: '+ Add',
    emptySubscribers: 'No subscribers yet. Click "Add".',
    received: 'Received: {message}',
    remove: 'Remove',
    eventLog: '📋 Event log',
    strategyDesc:
      'Choose different sorting strategies and observe how the same data is processed.',
    dataTitle: '📊 Data to sort',
    shuffle: '🔀 Shuffle data',
    strategyTitle: '⚙️ Choose strategy',
    sorting: 'Sorting...',
    execute: '▶ Run sort',
    stepsInfo: 'Steps: {count} | Strategy: {strategy}',
    defaultEvent: 'Default event',
    subscribeLog: '[Subscribe] {name} joined the subscriber list',
    unsubscribeLog: '[Unsubscribe] {name} left',
    publishLog: '[Publish] Event: "{message}" → notify {count} subscribers',
    subNames: [
      'Alex',
      'Blake',
      'Casey',
      'Dana',
      'Evan',
      'Finley',
      'Gray',
      'Harper'
    ],
    modes: [
      { key: 'observer', name: 'Observer pattern', icon: '📡' },
      { key: 'strategy', name: 'Strategy pattern', icon: '⚙️' }
    ],
    sortStrategies: [
      { key: 'bubble', name: 'Bubble sort', complexity: 'O(n²)' },
      { key: 'selection', name: 'Selection sort', complexity: 'O(n²)' },
      { key: 'insertion', name: 'Insertion sort', complexity: 'O(n²)' }
    ]
  },
  securityChecklist: {
    title: 'Project Security Checklist',
    subtitle: 'Check completed safeguards and view the project security score',
    scoreLabel: 'Security score',
    scoreValue: '{score} pts',
    collapse: 'Collapse',
    detail: 'View best practices',
    levels: { excellent: 'Excellent', pass: 'Pass', danger: 'Danger' },
    categories: [
      {
        icon: '🔍',
        name: 'Input validation',
        open: true,
        items: [
          {
            label: 'Validate all user input on the server',
            checked: false,
            showDetail: false,
            detail:
              'Never rely only on frontend validation. Attackers can bypass the browser and send requests directly, so the server must validate length, type, format, and range.'
          },
          {
            label: 'Use allowlists instead of blocklists',
            checked: false,
            showDetail: false,
            detail:
              'Blocklists are easy to miss. Define what is allowed instead of trying to filter every dangerous character.'
          },
          {
            label: 'Limit uploaded file type and size',
            checked: false,
            showDetail: false,
            detail:
              'Validate MIME type and extension, limit file size, store uploads outside the web root, and use randomized filenames.'
          }
        ]
      },
      {
        icon: '🔐',
        name: 'Authentication and authorization',
        open: false,
        items: [
          {
            label: 'Store passwords with bcrypt/argon2 hashes',
            checked: false,
            showDetail: false,
            detail:
              'Never store plaintext passwords. Use slow salted hashes such as bcrypt cost>=10 or argon2id to resist brute force and rainbow tables.'
          },
          {
            label: 'Enable multi-factor authentication (MFA)',
            checked: false,
            showDetail: false,
            detail:
              'Add a second factor such as TOTP, SMS, or hardware keys so leaked passwords do not immediately grant access.'
          },
          {
            label: 'Apply least-privilege access control to APIs',
            checked: false,
            showDetail: false,
            detail:
              'Every API endpoint should check roles and permissions so users only access resources they are allowed to operate on.'
          },
          {
            label: 'Secure session management (timeout and rotation)',
            checked: false,
            showDetail: false,
            detail:
              'Regenerate the session ID after login, set reasonable expiration, and destroy server-side sessions on logout.'
          }
        ]
      },
      {
        icon: '🛡️',
        name: 'Data protection',
        open: false,
        items: [
          {
            label: 'Encrypt sensitive data at rest',
            checked: false,
            showDetail: false,
            detail:
              'Encrypt sensitive database fields such as phone numbers or IDs with algorithms such as AES-256, and store keys separately.'
          },
          {
            label: 'Do not record sensitive information in logs',
            checked: false,
            showDetail: false,
            detail:
              'Logs should not include passwords, tokens, or credit card numbers. Mask values, such as keeping only the last four phone digits.'
          },
          {
            label: 'Prevent SQL injection with parameterized queries',
            checked: false,
            showDetail: false,
            detail:
              'Use parameterized queries or an ORM for all database operations. Never concatenate SQL strings.'
          }
        ]
      },
      {
        icon: '🌐',
        name: 'Communication security',
        open: false,
        items: [
          {
            label: 'Enable HTTPS site-wide',
            checked: false,
            showDetail: false,
            detail:
              'Use TLS 1.2+ for all communication and configure HSTS to force HTTPS.'
          },
          {
            label: 'Set secure response headers (CSP, X-Frame-Options)',
            checked: false,
            showDetail: false,
            detail:
              'Configure Content-Security-Policy to limit resource origins, X-Frame-Options to prevent clickjacking, and X-Content-Type-Options to prevent MIME sniffing.'
          },
          {
            label: 'Set Cookie HttpOnly / Secure / SameSite',
            checked: false,
            showDetail: false,
            detail:
              'HttpOnly blocks JavaScript access, Secure restricts transmission to HTTPS, and SameSite=Lax helps prevent CSRF.'
          }
        ]
      }
    ]
  },
  webSecurity: {
    title:
      'Web security vulnerability demo (educational) - click to switch vulnerability type',
    flowTitle: 'Attack flow',
    badTitle: '❌ Vulnerable code',
    goodTitle: '✅ Fixed code',
    defense: 'Defense:',
    vulns: [
      {
        name: 'XSS',
        icon: '💉',
        flow: [
          'Attacker submits malicious script in an input field',
          'Server stores it without filtering',
          'Script runs when another user opens the page',
          'User cookies or data are stolen'
        ],
        bad: "// Directly inserting user input (dangerous!)\nel.innerHTML = userInput\n// If userInput = '<scr' + 'ipt>steal(cookie)</scr' + 'ipt>'\n// the script will execute!",
        good: `// Insert safely with textContent
el.textContent = userInput
// Or use framework escaping
// Vue: {{ userInput }}  escaped automatically
// React: {userInput}    escaped automatically`,
        defense:
          'Never trust user input. Use framework escaping, avoid innerHTML, and encode output.'
      },
      {
        name: 'SQL injection',
        icon: '🗄️',
        flow: [
          'Attacker enters a special string in the login form',
          'The string is concatenated into SQL',
          'The database executes a modified query',
          'Attacker bypasses auth or reads data'
        ],
        bad: `// SQL string concatenation (dangerous!)
const sql = "SELECT * FROM users " +
  "WHERE name='" + username + "'" +
  " AND pass='" + password + "'"
// Input: admin' OR '1'='1
// Becomes: WHERE name='admin' OR '1'='1'`,
        good: `// Parameterized query (safe)
const sql = "SELECT * FROM users " +
  "WHERE name = ? AND pass = ?"
db.query(sql, [username, password])
// Parameters are escaped safely and cannot inject SQL`,
        defense:
          'Always use parameterized queries or an ORM. Never concatenate SQL strings.'
      },
      {
        name: 'CSRF',
        icon: '🎭',
        flow: [
          'User logs into a bank site with cookies',
          'User visits a malicious site',
          'The malicious site submits a transfer request',
          'Browser sends cookies automatically and the request succeeds'
        ],
        bad: `<!-- Hidden form on malicious site -->
<form action="https://bank.com/transfer"
      method="POST" id="evil">
  <input name="to" value="attacker" />
  <input name="amount" value="10000" />
</form>
<script>document.getElementById('evil')
  .submit()</script>`,
        good: `// Server: generate and verify CSRF token
app.post('/transfer', (req, res) => {
  if (req.body.token !== req.session.csrf) {
    return res.status(403).send('Forbidden')
  }
  // Execute transfer...
})
// Also set SameSite cookie attributes`,
        defense:
          'Use CSRF tokens, set SameSite cookies, and validate Referer/Origin headers.'
      }
    ]
  },
  techRadar: {
    title: 'Technology radar - click a technology for details',
    ringLabel: 'Ring: {ring}',
    rings: [
      { name: 'Adopt', cls: 'adopt' },
      { name: 'Trial', cls: 'trial' },
      { name: 'Assess', cls: 'assess' },
      { name: 'Hold', cls: 'hold' }
    ],
    categories: [
      { name: 'Language', cls: 'lang' },
      { name: 'Framework', cls: 'framework' },
      { name: 'Tool', cls: 'tool' },
      { name: 'Platform', cls: 'platform' }
    ],
    techs: [
      {
        name: 'TypeScript',
        category: 'lang',
        ring: 'Adopt',
        pos: { top: '42%', left: '30%' },
        desc: 'A type-safe JavaScript superset that has become a default choice for frontend projects.'
      },
      {
        name: 'React',
        category: 'framework',
        ring: 'Adopt',
        pos: { top: '35%', left: '55%' },
        desc: 'The richest frontend ecosystem, suitable for large teams and complex applications.'
      },
      {
        name: 'Vue',
        category: 'framework',
        ring: 'Adopt',
        pos: { top: '50%', left: '45%' },
        desc: 'A progressive framework with a gentle learning curve and strong Chinese community.'
      },
      {
        name: 'Go',
        category: 'lang',
        ring: 'Adopt',
        pos: { top: '55%', left: '32%' },
        desc: 'A strong backend choice for high concurrency, fast builds, and simple deployment.'
      },
      {
        name: 'Rust',
        category: 'lang',
        ring: 'Trial',
        pos: { top: '30%', left: '22%' },
        desc: 'Memory safety without GC, suitable for systems programming and high-performance scenarios, but harder to learn.'
      },
      {
        name: 'Svelte',
        category: 'framework',
        ring: 'Trial',
        pos: { top: '25%', left: '60%' },
        desc: 'A compile-time framework with no virtual DOM and a very small bundle size.'
      },
      {
        name: 'Bun',
        category: 'tool',
        ring: 'Assess',
        pos: { top: '18%', left: '42%' },
        desc: 'A next-generation JS runtime with excellent speed but a still-maturing ecosystem.'
      },
      {
        name: 'Deno',
        category: 'platform',
        ring: 'Assess',
        pos: { top: '15%', left: '55%' },
        desc: 'A security-first JS/TS runtime with built-in tooling.'
      },
      {
        name: 'jQuery',
        category: 'framework',
        ring: 'Hold',
        pos: { top: '8%', left: '38%' },
        desc: 'Historically important, but modern frameworks have replaced it for new projects.'
      }
    ]
  }
}
