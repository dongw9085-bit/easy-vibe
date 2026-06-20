export default {
  common: {
    coreIdea: 'Core idea:',
    recommendation: 'Recommendation:',
    receive: '📥 Receives:',
    emit: '📤 Emits:',
    listSeparator: ', ',
    semicolonSeparator: '; '
  },
  hierarchy: {
    title: 'Component Hierarchy',
    subtitle: 'Component relationships like a family tree',
    introPrefix: 'Imagine working in a ',
    introHighlight: 'company org chart',
    introSuffix:
      ': the CEO (root component) sits at the top, departments (parent components) report below, and employees (child components) live inside each department. That is a component tree.',
    hint: '👆 Click any node above to inspect its responsibility.',
    idea: 'Components are like an org chart: parents coordinate the whole, children handle focused responsibilities. Data flows downward, events report upward.',
    nodes: {
      app: {
        icon: '👑',
        label: 'App (Root)',
        desc: 'CEO - global management',
        title: 'App Root Component',
        description:
          'Like a company CEO, it initializes and coordinates the entire app, including routes, global state, theme configuration, and other top-level decisions.',
        props: [],
        events: []
      },
      header: {
        icon: '📌',
        label: 'Header',
        desc: 'Navigation department',
        title: 'Header Navigation',
        description:
          'The front desk of the company, showing logo, navigation, user info, cart state, and other global entry points used across pages.',
        props: ['user', 'cartCount'],
        events: ['logout', 'search']
      },
      main: {
        icon: '📄',
        label: 'Main Content',
        desc: 'Main content department',
        title: 'Main Content',
        description:
          'The core business department. It manages the page body and uses flex or grid layout to arrange sidebars and content areas.',
        props: [],
        events: []
      },
      sidebar: {
        icon: '📑',
        label: 'Sidebar',
        desc: 'Sidebar team',
        title: 'Sidebar',
        description:
          'A navigation team that provides collapsible menus. It is common in admin dashboards and category browsing pages.',
        props: ['menuItems', 'collapsed'],
        events: ['select', 'toggle']
      },
      productlist: {
        icon: '🛍️',
        label: 'ProductList',
        desc: 'Product list team',
        title: 'ProductList',
        description:
          'The product display team. It fetches data, handles pagination, sorting, and filters, and contains many ProductCard members.',
        props: ['products', 'loading', 'total'],
        events: ['loadMore', 'sort', 'filter']
      },
      productcard: {
        icon: '🏷️',
        label: 'ProductCard',
        desc: 'Product card employee',
        title: 'ProductCard',
        description:
          'A focused employee at the leaf level. It renders one product with image, name, price, and rating, and focuses on UI display.',
        props: ['product', 'showAddToCart'],
        events: ['addToCart', 'click']
      },
      footer: {
        icon: '🔻',
        label: 'Footer',
        desc: 'Footer department',
        title: 'Footer',
        description:
          'The support department. It renders copyright, friend links, contact information, social links, and other auxiliary content.',
        props: [],
        events: []
      }
    }
  },
  propsFlow: {
    title: 'Props Data Flow',
    subtitle: 'One-way delivery from parent to child',
    introPrefix: 'Imagine working at a ',
    introHighlight: 'delivery company',
    introSuffix:
      ': packages (data) can only move from sender (parent component) to recipient (child component). The recipient cannot change the package directly, and can only call back with an event.',
    parentLabel: '👨 Parent Component (Sender)',
    childLabel: '👦 Child Component (Recipient)',
    packageContent: 'Package content:',
    packageColor: 'Package color:',
    sendPackage: '📮 Send package:',
    receivePackage: '📬 Receive package:',
    flowing: 'Delivering package...',
    idleFlow: 'One-way props flow',
    editLabel: '📝 Edit package content:',
    namePlaceholder: 'Recipient name',
    agePlaceholder: 'Age',
    light: 'Light',
    dark: 'Dark',
    lightPackage: 'Light package',
    darkPackage: 'Dark package',
    emitButton: '📞 Call parent to change name',
    ageUnit: 'years old',
    defaultUser: { name: 'Alex', age: 25 },
    emittedName: 'Mia',
    idea: 'Props are one-way data flow. The parent is the sender and the child is the recipient. Children should not mutate props directly; they emit events so the parent can update state.'
  },
  eventBus: {
    title: 'Event Bus',
    subtitle: 'Message delivery like a radio station',
    introPrefix: 'Imagine working at a ',
    introHighlight: 'radio station',
    introSuffix:
      ': any department (component) can publish messages through the station (Event Bus), and every radio (listener) can receive them without knowing the sender.',
    busLabel: 'Radio Station (Event Bus)',
    listening: '📻 Listening',
    offline: '🔇 Offline',
    logTitle: '📨 Message Log',
    emitType: '🎤 Broadcast',
    receiveType: '📻 Received',
    emitMessage: '{name} broadcast: new message!',
    receiveMessage: '{name} received the broadcast',
    hint: '👆 Click any department above to simulate broadcasting; other active departments will receive it.',
    idea: 'Event Bus is like a radio station: any component can send or receive messages without knowing the other side exists. It suits simple cross-component communication, but listeners should be removed when components unmount.',
    components: [
      { id: 1, name: 'Header', icon: '📌' },
      { id: 2, name: 'Sidebar', icon: '📑' },
      { id: 3, name: 'ProductList', icon: '🛍️' },
      { id: 4, name: 'Cart', icon: '🛒' }
    ]
  },
  comparison: {
    title: 'State Management Comparison',
    subtitle: 'Where different tools fit',
    introPrefix: 'Imagine shopping in a ',
    introHighlight: 'supermarket',
    introSuffix:
      ': small trips use a basket (Zustand), larger trips use a cart (Pinia), and enterprise purchasing uses professional logistics (Redux). Pick the tool that matches the need.',
    headers: {
      tool: 'Tool',
      difficulty: 'Difficulty',
      size: 'Size',
      framework: 'Framework'
    },
    scenariosTitle: '🎯 Best for',
    prosTitle: '✅ Pros',
    consTitle: '❌ Cons',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    idea: 'For new Vue 3 projects, choose Pinia. For small and medium React projects, choose Zustand. For large enterprise apps, choose Redux Toolkit. Match the tool to project scale.',
    libraries: [
      {
        id: 'redux',
        name: 'Redux',
        icon: '🔄',
        tagline: 'Predictable state container for JavaScript apps',
        scenarios: [
          'large enterprise apps',
          'strict data-flow control',
          'complex state logic'
        ],
        pros: [
          'strict data flow, easy to debug',
          'strong middleware ecosystem'
        ],
        cons: ['steep learning curve', 'more boilerplate'],
        learningCurve: 80,
        bundleSize: '7KB',
        framework: 'React/Vue/Angular'
      },
      {
        id: 'vuex',
        name: 'Vuex',
        icon: '🌿',
        tagline: 'Official state management library for Vue.js',
        scenarios: [
          'medium and large Vue 2/3 projects',
          'modular state management',
          'teams familiar with Vue'
        ],
        pros: ['deep Vue integration', 'reactive system'],
        cons: ['Vue only', 'replaced by Pinia in Vue 3'],
        learningCurve: 60,
        bundleSize: '4KB',
        framework: 'Vue Only'
      },
      {
        id: 'pinia',
        name: 'Pinia',
        icon: '🍍',
        tagline: 'Intuitive, type-safe, flexible Vue Store',
        scenarios: [
          'first choice for new Vue 3 projects',
          'TypeScript-heavy apps',
          'simpler state management'
        ],
        pros: ['lightweight design', 'native TypeScript support'],
        cons: ['Vue 3 focused', 'younger ecosystem'],
        learningCurve: 30,
        bundleSize: '2KB',
        framework: 'Vue 3 Only'
      },
      {
        id: 'zustand',
        name: 'Zustand',
        icon: '🐻',
        tagline: 'Minimal React state management',
        scenarios: [
          'small and medium React projects',
          'simple APIs',
          'no complex middleware'
        ],
        pros: ['minimal API', 'no Provider needed'],
        cons: ['smaller ecosystem', 'debugging tools are weaker than Redux'],
        learningCurve: 25,
        bundleSize: '1KB',
        framework: 'React Only'
      }
    ]
  },
  vuexPinia: {
    title: 'Vuex vs Pinia',
    subtitle: 'Old and new Vue state management',
    introPrefix: 'Imagine ordering at a ',
    introHighlight: 'restaurant',
    introSuffix:
      ': Vuex is like a traditional restaurant where different departments (state/mutations/actions) fill different forms; Pinia is like a fast-food counter where one composable API handles the flow.',
    classic: 'Classic',
    recommended: 'Recommended',
    vuexCodeTitle: 'Vuex Code Example',
    piniaCodeTitle: 'Pinia Code Example',
    idea: 'Use Pinia directly for new Vue 3 projects. Its syntax is simpler and TypeScript support is stronger. Vuex is still fine for existing apps, but gradual migration to Pinia is recommended.',
    cards: {
      vuex: [
        '✅ Options API',
        '✅ Separate State / Mutations / Actions',
        '❌ More boilerplate',
        '❌ Weaker TypeScript support'
      ],
      pinia: [
        '✅ Composition API',
        '✅ Removes Mutations and simplifies code',
        '✅ Excellent TypeScript support',
        '✅ Automatic code splitting'
      ]
    }
  },
  redux: {
    title: 'Redux Data Flow',
    subtitle: 'A one-way circular data pipeline',
    introPrefix: 'Imagine working in a ',
    introHighlight: 'library',
    introSuffix:
      ': readers (View) submit borrowing forms (Action), librarians (Reducer) review them and update inventory records (Store), then the notice board (View update) refreshes.',
    counterLabel: 'Current inventory:',
    counterUnit: 'books',
    increment: 'Restock (+1)',
    decrement: 'Checkout (-1)',
    reset: 'Reset inventory',
    reducerProcessing: 'Reducer processing...',
    storeUpdated: 'Store updated',
    idea: 'Redux is a one-way data-flow loop: View dispatches Action → Reducer pure function handles it → Store updates → View re-renders. State is predictable and easier to debug.'
  },
  mobx: {
    title: 'MobX Reactivity',
    subtitle: 'Automatic dependency tracking',
    introPrefix: 'Imagine watching a ',
    introHighlight: 'magic show',
    introSuffix:
      ': when the magician (Observable) changes an object, every audience member watching it (Reaction) notices automatically without manual notifications.',
    stateTitle: 'Observable State',
    reactionTitle: 'Automatic Reaction',
    total: 'Total:',
    completed: 'Completed:',
    itemUnit: 'items',
    inputPlaceholder: 'Enter a todo...',
    add: '➕ Add',
    idea: 'MobX automatically tracks relationships between state and reactions. When state changes, related updates run automatically. You change data, and the UI follows.',
    todos: [
      { id: 1, text: 'Learn MobX', completed: false },
      { id: 2, text: 'Understand reactivity', completed: true }
    ]
  },
  zustandJotai: {
    title: 'Zustand & Jotai',
    subtitle: 'Lightweight React state management',
    introPrefix: 'Imagine working in a ',
    introHighlight: 'convenience store',
    introSuffix:
      ': Zustand is like one shared warehouse, while Jotai splits products into small independent cells (Atoms) that can be used on demand.',
    idea: 'Zustand fits small and medium projects with a clean API. Jotai fits scenarios that need fine-grained control and modular state. Both support TypeScript and do not require a Provider.',
    tabs: [
      { id: 'zustand', name: 'Zustand', icon: '🐻' },
      { id: 'jotai', name: 'Jotai', icon: '⚛️' }
    ],
    features: {
      zustand: [
        {
          icon: '📦',
          title: 'Single Store',
          desc: 'Manage all state centrally'
        },
        {
          icon: '⚡',
          title: 'Minimal API',
          desc: 'No Provider wrapper required'
        },
        {
          icon: '🎯',
          title: 'Fine-grained Subscription',
          desc: 'Only rerender the components that need it'
        }
      ],
      jotai: [
        {
          icon: '⚛️',
          title: 'Atomic Model',
          desc: 'Split state into independent Atoms'
        },
        {
          icon: '🔗',
          title: 'Automatic Dependencies',
          desc: 'Derived state tracks dependencies automatically'
        },
        { icon: '📝', title: 'TypeScript', desc: 'Native type support' }
      ]
    },
    codeComments: {
      useInComponent: 'Use inside a component',
      baseAtom: 'Base Atom',
      derivedAtom: 'Derived Atom'
    }
  }
}
