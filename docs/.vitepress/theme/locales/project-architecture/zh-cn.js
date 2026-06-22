export default {
  architectureComparison: {
    title: '前后端项目架构对比',
    subtitle: '点击切换查看不同架构层次',
    frontendButton: '前端架构',
    backendButton: '后端架构',
    typicalFiles: '📁 典型文件',
    principles: '✅ 设计原则',
    coreIdeaLabel: '核心思想：',
    coreIdea:
      '好的架构就像整理好的空间——前端像衣柜（按功能分类展示），后端像厨房（按流程分工协作）。点击上方层次查看详情！',
    frontendLayers: [
      {
        id: 'views',
        name: 'Views / Pages',
        icon: '📄',
        badge: '页面层',
        class: 'views-layer',
        duty: '职责：页面组件，对应路由',
        example: 'Home.vue、UserProfile.vue',
        arrow: '组合',
        files: ['Home/index.vue', 'User/Profile.vue', 'pages/about.tsx'],
        principles: [
          '保持"薄"，逻辑下沉到 hooks',
          '页面级状态管理',
          '路由懒加载'
        ]
      },
      {
        id: 'components',
        name: 'Components',
        icon: '🧩',
        badge: '组件层',
        class: 'components-layer',
        duty: '职责：可复用的 UI 组件',
        example: 'Button.vue、Modal.vue、UserCard.vue',
        arrow: '调用',
        files: ['common/Button/', 'business/UserCard/', 'layout/Header/'],
        principles: [
          '单一职责，一个组件只做一件事',
          'Props 清晰可预测',
          '样式隔离（scoped/css-modules）'
        ]
      },
      {
        id: 'hooks',
        name: 'Hooks / Composables',
        icon: '🎣',
        badge: '逻辑层',
        class: 'hooks-layer',
        duty: '职责：可复用的业务逻辑',
        example: 'useAuth()、useLoading()、useForm()',
        arrow: '使用',
        files: ['useAuth.js', 'usePagination.ts', 'composables/useFetch.js'],
        principles: ['纯函数优先', '单一功能，便于测试', '命名以 use 开头']
      },
      {
        id: 'services',
        name: 'Services / API',
        icon: '🌐',
        badge: '服务层',
        class: 'services-layer',
        duty: '职责：API 调用，数据获取',
        example: 'userApi.getProfile()、orderApi.create()',
        arrow: '请求',
        files: ['services/user.js', 'api/request.ts', 'clients/http.js'],
        principles: ['统一错误处理', '请求/响应拦截', '接口统一管理']
      },
      {
        id: 'utils',
        name: 'Utils / Helpers',
        icon: '🛠️',
        badge: '工具层',
        class: 'utils-layer',
        duty: '职责：通用工具函数',
        example: 'formatDate()、storage.set()、validator.email()',
        arrow: '',
        files: ['utils/format.js', 'helpers/storage.ts', 'lib/validator.js'],
        principles: ['纯函数，无副作用', '单一职责', '完善的 JSDoc 注释']
      }
    ],
    backendLayers: [
      {
        id: 'controller',
        name: 'Controller',
        icon: '🎮',
        badge: '入口层',
        class: 'controller-layer',
        duty: '职责：接收 HTTP 请求，返回响应',
        example: 'UserController.getById()、OrderController.create()',
        arrow: '调用',
        files: ['userController.js', 'routes/api.js', 'handlers/order.ts'],
        principles: ['只处理 HTTP 相关逻辑', '参数校验', '不直接操作数据库']
      },
      {
        id: 'service',
        name: 'Service',
        icon: '⚙️',
        badge: '业务层',
        class: 'service-layer',
        duty: '职责：核心业务逻辑，事务管理',
        example: 'UserService.createUser()、OrderService.process()',
        arrow: '调用',
        files: ['userService.js', 'services/order.ts', 'business/user.js'],
        principles: ['包含核心业务规则', '协调多个 Repository', '管理事务边界']
      },
      {
        id: 'repository',
        name: 'Repository',
        icon: '🗄️',
        badge: '数据层',
        class: 'repository-layer',
        duty: '职责：数据持久化，数据库操作',
        example: 'UserRepository.findById()、OrderRepository.save()',
        arrow: '查询',
        files: ['userRepository.js', 'dao/order.ts', 'models/user.js'],
        principles: ['只负责数据存取', 'ORM 封装', '不包含业务逻辑']
      },
      {
        id: 'model',
        name: 'Model / Entity',
        icon: '📊',
        badge: '模型层',
        class: 'model-layer',
        duty: '职责：数据结构和业务规则定义',
        example: 'User 类、Order 实体、DTO 定义',
        arrow: '',
        files: ['models/User.js', 'entities/order.ts', 'dto/userDto.js'],
        principles: ['定义数据结构', '字段验证规则', '与其他层解耦']
      }
    ]
  }
}
