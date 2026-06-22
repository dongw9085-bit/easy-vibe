export default {
  architectureComparison: {
    title: 'Frontend and Backend Project Architecture',
    subtitle: 'Click to switch between architecture layers',
    frontendButton: 'Frontend architecture',
    backendButton: 'Backend architecture',
    typicalFiles: '📁 Typical files',
    principles: '✅ Design principles',
    coreIdeaLabel: 'Core idea:',
    coreIdea:
      'Good architecture is like an organized workspace: frontend is like a wardrobe organized by display function, while backend is like a kitchen organized by workflow. Click a layer above for details.',
    frontendLayers: [
      {
        id: 'views',
        name: 'Views / Pages',
        icon: '📄',
        badge: 'Page layer',
        class: 'views-layer',
        duty: 'Responsibility: page components mapped to routes',
        example: 'Home.vue, UserProfile.vue',
        arrow: 'Compose',
        files: ['Home/index.vue', 'User/Profile.vue', 'pages/about.tsx'],
        principles: [
          'Keep pages thin and move logic into hooks',
          'Page-level state management',
          'Route lazy loading'
        ]
      },
      {
        id: 'components',
        name: 'Components',
        icon: '🧩',
        badge: 'Component layer',
        class: 'components-layer',
        duty: 'Responsibility: reusable UI components',
        example: 'Button.vue, Modal.vue, UserCard.vue',
        arrow: 'Call',
        files: ['common/Button/', 'business/UserCard/', 'layout/Header/'],
        principles: [
          'Single responsibility: one component does one thing',
          'Clear and predictable props',
          'Style isolation with scoped CSS or CSS modules'
        ]
      },
      {
        id: 'hooks',
        name: 'Hooks / Composables',
        icon: '🎣',
        badge: 'Logic layer',
        class: 'hooks-layer',
        duty: 'Responsibility: reusable business logic',
        example: 'useAuth(), useLoading(), useForm()',
        arrow: 'Use',
        files: ['useAuth.js', 'usePagination.ts', 'composables/useFetch.js'],
        principles: [
          'Prefer pure functions',
          'One focused capability, easy to test',
          'Name with the use prefix'
        ]
      },
      {
        id: 'services',
        name: 'Services / API',
        icon: '🌐',
        badge: 'Service layer',
        class: 'services-layer',
        duty: 'Responsibility: API calls and data fetching',
        example: 'userApi.getProfile(), orderApi.create()',
        arrow: 'Request',
        files: ['services/user.js', 'api/request.ts', 'clients/http.js'],
        principles: [
          'Centralized error handling',
          'Request/response interceptors',
          'Manage interfaces in one place'
        ]
      },
      {
        id: 'utils',
        name: 'Utils / Helpers',
        icon: '🛠️',
        badge: 'Utility layer',
        class: 'utils-layer',
        duty: 'Responsibility: general helper functions',
        example: 'formatDate(), storage.set(), validator.email()',
        arrow: '',
        files: ['utils/format.js', 'helpers/storage.ts', 'lib/validator.js'],
        principles: [
          'Pure functions with no side effects',
          'Single responsibility',
          'Useful JSDoc comments'
        ]
      }
    ],
    backendLayers: [
      {
        id: 'controller',
        name: 'Controller',
        icon: '🎮',
        badge: 'Entry layer',
        class: 'controller-layer',
        duty: 'Responsibility: receive HTTP requests and return responses',
        example: 'UserController.getById(), OrderController.create()',
        arrow: 'Call',
        files: ['userController.js', 'routes/api.js', 'handlers/order.ts'],
        principles: [
          'Handle only HTTP-related logic',
          'Validate parameters',
          'Do not access the database directly'
        ]
      },
      {
        id: 'service',
        name: 'Service',
        icon: '⚙️',
        badge: 'Business layer',
        class: 'service-layer',
        duty: 'Responsibility: core business logic and transaction management',
        example: 'UserService.createUser(), OrderService.process()',
        arrow: 'Call',
        files: ['userService.js', 'services/order.ts', 'business/user.js'],
        principles: [
          'Contain core business rules',
          'Coordinate multiple repositories',
          'Manage transaction boundaries'
        ]
      },
      {
        id: 'repository',
        name: 'Repository',
        icon: '🗄️',
        badge: 'Data layer',
        class: 'repository-layer',
        duty: 'Responsibility: persistence and database operations',
        example: 'UserRepository.findById(), OrderRepository.save()',
        arrow: 'Query',
        files: ['userRepository.js', 'dao/order.ts', 'models/user.js'],
        principles: [
          'Only handle data access',
          'Wrap ORM details',
          'Do not include business logic'
        ]
      },
      {
        id: 'model',
        name: 'Model / Entity',
        icon: '📊',
        badge: 'Model layer',
        class: 'model-layer',
        duty: 'Responsibility: data structures and business rule definitions',
        example: 'User class, Order entity, DTO definitions',
        arrow: '',
        files: ['models/User.js', 'entities/order.ts', 'dto/userDto.js'],
        principles: [
          'Define data structures',
          'Define field validation rules',
          'Stay decoupled from other layers'
        ]
      }
    ]
  }
}
