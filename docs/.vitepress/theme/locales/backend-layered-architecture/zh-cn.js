export default {
  overview: {
    title: '后端四层架构总览',
    subtitle: '点击各层查看详细说明',
    client: '客户端 (Web / App)',
    db: '数据库 (MySQL / PostgreSQL)',
    commonMistakes: '常见错误：',
    layers: [
      {
        id: 'controller',
        name: 'Controller',
        badge: '入口',
        duty: '接收请求、参数校验、调用 Service'
      },
      {
        id: 'service',
        name: 'Service',
        badge: '业务核心',
        duty: '业务逻辑编排、事务管理、跨模块协调'
      },
      {
        id: 'repository',
        name: 'Repository',
        badge: '数据访问',
        duty: '数据持久化、查询封装、ORM 映射'
      },
      {
        id: 'domain',
        name: 'Domain',
        badge: '领域模型',
        duty: '实体定义、业务规则、值对象'
      }
    ],
    infoMap: {
      controller: {
        title: 'Controller 层 — 请求的"门童"',
        desc: '负责接收 HTTP 请求、解析参数、进行基础校验，然后调用 Service 层处理业务。',
        analogy:
          '就像餐厅的门童，负责迎接客人、检查预约、引导入座，但不负责做菜。',
        mistakes: [
          '在 Controller 里写业务逻辑',
          '直接操作数据库',
          '不做参数校验'
        ]
      },
      service: {
        title: 'Service 层 — 业务逻辑的"厨师"',
        desc: '编排业务逻辑、管理事务、协调多个 Repository。包含所有的业务规则和流程。',
        analogy: '就像餐厅的厨师，按照菜谱做菜，协调各种食材，把控菜品质量。',
        mistakes: [
          'Service 之间循环依赖',
          '直接写 SQL',
          '单个方法过长包含多个业务场景'
        ]
      },
      repository: {
        title: 'Repository 层 — 数据的"仓管"',
        desc: '封装所有数据访问逻辑，上层不需要关心具体的数据库类型和 SQL 语句。',
        analogy:
          '就像仓管员，负责从仓库取食材、存放剩余食材，厨师只需说要什么。',
        mistakes: [
          '在 Repository 里写业务逻辑',
          '直接返回实体给前端',
          '一个 Repository 操作多个表'
        ]
      },
      domain: {
        title: 'Domain 层 — 业务概念的"蓝图"',
        desc: '定义实体、值对象、业务规则。是所有层的依赖基础，但不依赖任何其他层。',
        analogy:
          '就像菜单和菜品标准，定义了什么是"宫保鸡丁"、用什么食材、什么口味。',
        mistakes: [
          'Domain 包含持久化注解',
          '在 Domain 里写数据库操作',
          'Domain 对象之间循环依赖'
        ]
      }
    }
  },
  controller: {
    title: 'Controller 层：请求的"接待员"',
    subtitle: '点击流程节点查看详情',
    requestLabel: '客户端发起请求',
    requestCode: `POST /api/users/register
Content-Type: application/json
{ "username": "张三", "email": "zhangsan@example.com", "password": "123456" }`,
    arrive: '↓ 请求到达',
    receiveLabel: 'Controller 接收并解析请求',
    validateArrow: '↓ 参数校验 + 调用',
    validationLabel: '参数校验（Controller 的职责之一）',
    validationCode: `public class UserRegisterRequest {
    @NotBlank(message = "用户名不能为空")
    @Size(min = 2, max = 20) private String username;
    @Email(message = "邮箱格式不正确") private String email;
    @Size(min = 6, message = "密码至少6位") private String password;
}`,
    validationDetailTitle: '为什么校验要放在 Controller？',
    validationDetails: [
      '第一道防线：尽早拦截非法请求',
      '减轻下游压力：Service 层可以假设数据已清洗',
      '关注点分离：Service 专注于业务，不处理格式验证'
    ],
    responseArrow: '↓ 返回结果',
    responseLabel: 'Controller 封装响应返回',
    responseCode: `HTTP/1.1 200 OK
{ "code": 200, "message": "注册成功",
  "data": { "id": 10001, "username": "张三", "email": "zhangsan@example.com" } }`,
    dutiesTitle: 'Controller 的核心职责',
    duties: [
      { name: '接收请求', desc: '映射 HTTP 请求到方法' },
      { name: '参数校验', desc: '基础格式和必填校验' },
      { name: '调用 Service', desc: '将请求转发给业务层' },
      { name: '封装响应', desc: '统一响应格式返回' }
    ]
  },
  service: {
    title: 'Service 层：业务逻辑的"指挥家"',
    subtitle: '选择业务场景，查看 Service 层如何编排逻辑',
    scenarios: [
      { id: 'order', name: '下单流程' },
      { id: 'refund', name: '退款处理' },
      { id: 'report', name: '报表生成' }
    ],
    allData: {
      order: {
        title: '电商下单流程',
        desc: '用户下单涉及库存扣减、订单创建、支付记录，需保证事务一致性',
        steps: [
          {
            name: '参数校验与DTO转换',
            layer: 'Controller',
            code: `@PostMapping("/orders")
public ResponseEntity<OrderDTO> createOrder(
    @RequestBody @Valid CreateOrderRequest request) {
    OrderDTO order = orderService.createOrder(request);
    return ResponseEntity.ok(order);
}`
          },
          {
            name: '业务逻辑编排（事务管理）',
            layer: 'Service',
            code: `@Transactional
public OrderDTO createOrder(CreateOrderRequest request) {
    inventoryService.checkAndDeduct(request.getSkuId(), request.getQuantity());
    Order order = new Order();
    order.setUserId(request.getUserId());
    order.setTotalAmount(calculateTotal(request));
    orderRepository.save(order);
    Payment payment = createPayment(order);
    paymentRepository.save(payment);
    return convertToDTO(order);
}`,
            subs: [
              {
                icon: '✅',
                name: '检查并扣减库存',
                desc: '确保库存充足',
                status: '成功'
              },
              {
                icon: '📝',
                name: '创建订单记录',
                desc: '生成订单主表',
                status: '成功'
              },
              {
                icon: '💳',
                name: '创建支付记录',
                desc: '初始化待支付',
                status: '成功'
              },
              {
                icon: '🔄',
                name: '事务提交',
                desc: '原子性提交',
                status: '已提交'
              }
            ]
          },
          {
            name: '数据持久化',
            layer: 'Repository',
            code: `public interface OrderRepository extends JpaRepository<Order, Long> {
    // 基本 CRUD 已内置
}`
          }
        ]
      },
      refund: {
        title: '退款处理流程',
        desc: '退款涉及订单状态变更、支付原路返回、库存回滚',
        steps: [
          {
            name: '接收退款申请',
            layer: 'Controller',
            code: `@PostMapping("/orders/{orderId}/refund")
public ResponseEntity<RefundDTO> applyRefund(
    @PathVariable Long orderId, @RequestBody @Valid RefundRequest request) {
    return ResponseEntity.ok(refundService.processRefund(orderId, request));
}`
          },
          {
            name: '退款业务处理',
            layer: 'Service',
            code: `@Transactional
public RefundDTO processRefund(Long orderId, RefundRequest request) {
    Order order = orderRepository.findById(orderId).orElseThrow();
    if (order.getStatus() != OrderStatus.PAID)
        throw new InvalidOrderStateException("不允许退款");
    BigDecimal amount = calculateRefundAmount(order, request);
    paymentService.refund(order.getPaymentNo(), amount, request.getReason());
    order.setStatus(OrderStatus.REFUNDING);
    orderRepository.save(order);
    inventoryService.restoreStockAsync(order.getItems());
    return convertToDTO(saveRefundRecord(orderId, amount, request));
}`,
            subs: [
              {
                icon: '🔍',
                name: '验证订单状态',
                desc: '检查是否可退款',
                status: '通过'
              },
              {
                icon: '💰',
                name: '计算退款金额',
                desc: '根据规则计算',
                status: '完成'
              },
              {
                icon: '🏦',
                name: '调用支付渠道',
                desc: '请求第三方退款',
                status: '处理中'
              },
              {
                icon: '📝',
                name: '更新订单状态',
                desc: '标记为退款中',
                status: '已更新'
              },
              {
                icon: '🔄',
                name: '异步恢复库存',
                desc: '后台恢复库存',
                status: '已提交'
              }
            ]
          }
        ]
      },
      report: {
        title: '报表生成流程',
        desc: '复杂报表涉及多数据源查询、数据聚合、异步导出',
        steps: [
          {
            name: '接收报表请求',
            layer: 'Controller',
            code: `@GetMapping("/reports/sales")
public ResponseEntity<ReportTaskDTO> generateSalesReport(
    @RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
    ReportTaskDTO task = reportService.createReportTask(startDate, endDate);
    return ResponseEntity.accepted().body(task);
}`
          },
          {
            name: '异步报表编排',
            layer: 'Service',
            code: `@Async("reportExecutor")
public void generateReportAsync(Long taskId) {
    ReportTask task = reportTaskRepository.findById(taskId).orElseThrow();
    task.setStatus(TaskStatus.RUNNING);
    reportTaskRepository.save(task);
    SalesReportData data = aggregateSalesData(task);
    calculateMetrics(data);
    String fileUrl = exportToExcel(data, task);
    task.setStatus(TaskStatus.COMPLETED);
    task.setFileUrl(fileUrl);
    reportTaskRepository.save(task);
}`,
            subs: [
              {
                icon: '📥',
                name: '多数据源查询',
                desc: 'Orders/Payments/Refunds',
                status: '已查询'
              },
              {
                icon: '🔄',
                name: '数据聚合清洗',
                desc: '关联数据、处理缺失值',
                status: '已完成'
              },
              {
                icon: '📊',
                name: '计算业务指标',
                desc: 'GMV、订单数、客单价',
                status: '已计算'
              },
              {
                icon: '📄',
                name: '导出 Excel',
                desc: '生成并上传至 OSS',
                status: '已完成'
              }
            ]
          }
        ]
      }
    },
    principlesTitle: 'Service 层设计原则',
    principles: [
      {
        title: '单一职责',
        desc: '一个 Service 只负责一块业务领域',
        example: 'UserService 只管用户，OrderService 只管订单'
      },
      {
        title: '事务边界',
        desc: '在 Service 层声明式管理事务',
        example: '@Transactional 放在 Service 方法上'
      },
      {
        title: '避免循环依赖',
        desc: 'Service 之间不要互相调用',
        example: 'A→B→A 会导致循环'
      },
      {
        title: 'DTO 转换',
        desc: '返回前转换为 DTO，不暴露实体',
        example: 'return new UserDTO(user)'
      }
    ]
  },
  repository: {
    title: 'Repository 层：数据的"仓库管理员"',
    subtitle: 'Repository 封装数据访问逻辑，让上层无需关心数据库细节',
    bad: '糟糕的做法',
    good: '优雅的做法',
    badPanel: '在 Service 里直接写 SQL',
    goodPanel: '使用 Repository 封装数据访问',
    badBadge: '耦合严重',
    goodBadge: '清晰解耦',
    badTitle: '这种做法的问题',
    goodTitle: '这样做的好处',
    badCode: `@Service
public class OrderService {
    @Autowired private JdbcTemplate jdbcTemplate;

    public List<Order> getUserOrders(Long userId) {
        // ❌ SQL 硬编码在 Service 里
        // ❌ 更换数据库需要改业务代码
        // ❌ 无法单元测试，必须连真实数据库
        String sql = "SELECT * FROM orders WHERE user_id = ? AND deleted = 0";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Order order = new Order();
            order.setId(rs.getLong("id"));
            order.setUserId(rs.getLong("user_id"));
            return order;
        }, userId);
    }
}`,
    goodCode: `// Repository 接口定义
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // ✅ 自动生成查询
    List<Order> findByUserIdAndDeletedFalse(Long userId);

    // ✅ 自定义 JPQL
    @Query("SELECT o FROM Order o WHERE o.createdAt BETWEEN :start AND :end")
    List<Order> findByDateRange(@Param("start") LocalDateTime start,
                                @Param("end") LocalDateTime end);
}

// Service 层（纯业务逻辑）
@Service
public class OrderService {
    @Autowired private OrderRepository orderRepository; // ✅ 依赖接口

    public List<OrderDTO> getUserOrders(Long userId) {
        List<Order> orders = orderRepository.findByUserIdAndDeletedFalse(userId);
        return orders.stream().map(OrderDTO::from).collect(Collectors.toList());
    }
}`,
    problems: [
      '数据库耦合：业务代码里到处都是 SQL，换数据库等于重写',
      '难以测试：必须连真实数据库，单元测试变成集成测试',
      '代码重复：同样的查询条件在每个方法里重复写',
      '安全隐患：手写 SQL 容易漏掉防注入处理'
    ],
    benefits: [
      '关注点分离：Service 专注业务，Repository 专注数据',
      '可测试性高：单元测试可用 Mock 替代真实数据库',
      '代码复用：通用查询方法定义一次，到处复用',
      '切换成本低：换数据库只需改 Repository 实现'
    ],
    tableTitle: '不同 Repository 实现方式对比',
    headers: ['实现方式', '优点', '缺点', '适用场景'],
    repos: [
      {
        name: 'Spring Data JPA',
        tag: '主流方案',
        tagClass: '',
        pros: '方法名自动推导、分页内置',
        cons: '复杂查询性能一般',
        scene: '快速开发、标准 CRUD'
      },
      {
        name: 'MyBatis / MyBatis-Plus',
        tag: '国内主流',
        tagClass: 'blue',
        pros: 'SQL 完全可控、动态 SQL 强大',
        cons: '需要手写 SQL',
        scene: '复杂查询、性能敏感'
      },
      {
        name: 'Spring Data JDBC',
        tag: '轻量',
        tagClass: 'green',
        pros: '简单轻量、启动快速',
        cons: '无复杂映射',
        scene: '微服务、简单聚合根'
      }
    ]
  },
  domain: {
    title: 'Domain 层：领域模型设计',
    subtitle: 'Domain 是业务概念的载体，所有层的依赖基础',
    tabs: [
      { id: 'comparison', name: '贫血 vs 充血' },
      { id: 'valueobject', name: '值对象设计' }
    ],
    anemicTitle: '贫血模型 (Anemic)',
    richTitle: '充血模型 (Rich Domain)',
    traditional: '传统做法',
    recommended: '推荐做法',
    anemicProblemsTitle: '贫血模型的问题',
    anemicProblems: [
      '违背面向对象：对象只有数据没有行为',
      '逻辑分散：同样的规则可能在多个 Service 重复',
      '难以维护：改一个规则要找所有用到的地方'
    ],
    richBenefitsTitle: '充血模型的优势',
    richBenefits: [
      '符合面向对象：数据和行为封装在一起',
      '业务内聚：规则跟着对象走，改一处处处生效',
      '可测试：领域对象是纯内存对象，不需要数据库',
      '表达力强：order.cancel() 比 orderService.cancel(order) 更自然'
    ],
    valueObjectTitle: '什么是值对象（Value Object）？',
    valueObjectDesc:
      '没有唯一标识、不可变的对象，描述某种特征或属性。两个值对象所有属性相等就被认为是同一个。',
    addressTitle: '地址 Address',
    moneyTitle: '金钱 Money',
    anemicEntity: `@Entity
public class Order {
    @Id private Long id;
    private BigDecimal totalAmount;
    private OrderStatus status;
    // 只有 getter/setter，没有业务逻辑
    public Long getId() { return id; }
    public void setStatus(OrderStatus s) { this.status = s; }
}`,
    anemicService: `@Service
public class OrderService {
    public void cancelOrder(Long orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow();
        // 贫血模型：业务逻辑散落在 Service 里
        if (order.getStatus() == OrderStatus.SHIPPED)
            throw new IllegalStateException("已发货不能取消");
        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }
}`,
    richEntity: `@Entity
public class Order {
    @Id private Long id;
    private BigDecimal totalAmount;
    private OrderStatus status;

    // 业务行为封装在实体里
    public void cancel() {
        if (this.status == OrderStatus.SHIPPED)
            throw new IllegalStateException("已发货不能取消");
        this.status = OrderStatus.CANCELLED;
        registerEvent(new OrderCancelledEvent(this.id));
    }

    public void pay(Payment payment) {
        if (this.status != OrderStatus.PENDING_PAYMENT)
            throw new IllegalStateException("状态不正确");
        this.status = OrderStatus.PAID;
    }
}`,
    richService: `@Service
public class OrderService {
    @Transactional
    public void cancelOrder(Long orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow();
        order.cancel(); // 调用领域对象的业务方法
        orderRepository.save(order);
    }
}`,
    addressVO: `// 值对象：不可变、无 ID
public record Address(String province, String city, String district, String street) {
    public String toDisplayString() {
        return String.format("%s%s%s%s", province, city, district, street);
    }
}
// 地址相等只要属性相同
Address a1 = new Address("广东", "深圳", "南山", "科技园");
Address a2 = new Address("广东", "深圳", "南山", "科技园");
a1.equals(a2); // true`,
    moneyVO: `public record Money(BigDecimal amount, Currency currency) {
    public static Money yuan(BigDecimal amount) {
        return new Money(amount, Currency.getInstance("CNY"));
    }
    // 运算返回新的值对象（不可变）
    public Money add(Money other) {
        if (!this.currency.equals(other.currency))
            throw new IllegalArgumentException("Cannot add different currencies");
        return new Money(this.amount.add(other.amount), this.currency);
    }
}
Money price = Money.yuan(new BigDecimal("199.99"));
Money shipping = Money.yuan(new BigDecimal("10.00"));
Money total = price.add(shipping); // ¥209.99`
  },
  dto: {
    title: 'DTO 流转：数据在不同层之间的转换',
    subtitle: 'DTO（Data Transfer Object）是层与层之间传递数据的载体',
    controllerLayer: 'Controller 层',
    controllerCode: `// 接收 Request DTO
public ResponseEntity<UserDTO> createUser(
    @RequestBody @Valid UserCreateRequest request) { ... }`,
    toService: '↓ 转换为 Service 需要的参数',
    serviceLayer: 'Service 层',
    serviceCode: `public UserDTO createUser(UserCreateParam param) {
    User user = param.toEntity();   // 转换为 Entity
    userRepository.save(user);
    return UserDTO.from(user);      // Entity → DTO
}`,
    toRepository: '↓ 转换为 Repository 需要的 Entity',
    repositoryLayer: 'Repository 层',
    repositoryCode: `public interface UserRepository
    extends JpaRepository<User, Long> { }`,
    returnEntity: '↑ 返回 Entity，转换为 DTO',
    returnClient: '返回给客户端',
    responseCode: `{ "id": 10001, "username": "张三",
  "email": "zhangsan@example.com", "createdAt": "2024-01-15T10:30:00Z" }`,
    tableTitle: '不同层的 DTO 职责',
    headers: ['层级', 'DTO 类型', '职责', '示例'],
    rows: [
      {
        layer: 'Controller',
        cls: 'green',
        type: 'Request / Response DTO',
        purpose: '定义 API 契约、参数校验',
        example: 'UserCreateRequest'
      },
      {
        layer: 'Service',
        cls: 'orange',
        type: 'Param / Result DTO',
        purpose: '封装业务方法参数，解耦层间依赖',
        example: 'UserCreateParam'
      },
      {
        layer: 'Repository',
        cls: 'blue',
        type: 'Entity / DO',
        purpose: '映射数据库表结构',
        example: 'UserEntity'
      }
    ]
  },
  dependency: {
    title: '依赖方向：分层架构的核心规则',
    subtitle: '理解依赖方向，才能真正掌握分层架构',
    outer: '外层（UI / 外部系统）',
    middle: '中层（应用层）',
    inner: '内层（领域层）',
    depends: '↓ 依赖',
    principleTitle: '核心原则：依赖倒置（DIP）',
    principleDesc: '上层模块不应该依赖下层模块的具体实现，而应该依赖于抽象。',
    rules: [
      {
        title: 'Controller → Service 接口',
        desc: 'Controller 只依赖 Service 的接口，不依赖实现类'
      },
      {
        title: 'Service → Repository 接口',
        desc: 'Service 只依赖 Repository 接口，不关心数据怎么存'
      },
      {
        title: '所有层依赖 Domain',
        desc: 'Domain 是核心，被所有上层依赖，但 Domain 不依赖任何层'
      }
    ]
  },
  clean: {
    title: '整洁架构与分层架构对比',
    subtitle: '分层架构是整洁架构的基础，理解两者关系有助于构建更灵活的系统',
    tabs: [
      { id: 'layered', name: '传统分层' },
      { id: 'clean', name: '整洁架构' },
      { id: 'compare', name: '对比总结' }
    ],
    layeredLayers: [
      { name: 'Controller 层', desc: '接收请求、参数校验', cls: 'green' },
      { name: 'Service 层', desc: '业务逻辑、事务管理', cls: 'orange' },
      { name: 'Repository 层', desc: '数据访问、ORM 映射', cls: 'blue' },
      { name: 'Domain 层', desc: '实体定义、业务规则', cls: 'teal' }
    ],
    layeredTitle: '传统分层架构特点',
    layeredTraits: [
      '垂直依赖：上层直接依赖下层',
      '简单直观：结构清晰，易于理解',
      '适合中小型项目：快速开发，上手简单',
      '潜在问题：底层变更可能影响上层'
    ],
    cleanLayers: [
      {
        name: '领域层（核心）',
        items: 'Entity / ValueObject / DomainService',
        cls: 'teal'
      },
      { name: '应用层', items: 'Service / UseCase / DTO', cls: 'orange' },
      {
        name: '接口适配层',
        items: 'Controller / Gateway / Presenter',
        cls: 'blue'
      },
      { name: '框架与驱动层', items: 'Web / DB / UI / 外部接口', cls: 'gray' }
    ],
    depRule: '依赖方向：外层 → 内层，内层不知道外层的存在',
    cleanTitle: '整洁架构特点',
    cleanTraits: [
      '依赖倒置：依赖方向从外到内，通过接口隔离',
      '领域为核心：业务逻辑位于中心，独立于框架',
      '可测试性强：核心业务可脱离框架单元测试',
      '技术无关：可轻松切换数据库、框架等'
    ],
    headers: ['特性', '传统分层', '整洁架构'],
    compareRows: [
      { feature: '依赖方向', layered: '从上到下', clean: '从外到内' },
      {
        feature: '核心业务位置',
        layered: 'Service 层',
        clean: 'Domain 层（中心）'
      },
      { feature: '框架依赖', layered: '较深', clean: '较浅（接口隔离）' },
      { feature: '可测试性', layered: '需要集成测试', clean: '核心可单元测试' },
      { feature: '学习曲线', layered: '平缓', clean: '较陡' },
      {
        feature: '适用场景',
        layered: '中小型、快速迭代',
        clean: '大型复杂、长期维护'
      }
    ],
    layeredChoice: '选择传统分层当...',
    layeredChoiceItems: [
      '项目规模较小，业务简单',
      '团队对 DDD 不熟悉',
      '需要快速上线验证市场'
    ],
    cleanChoice: '选择整洁架构当...',
    cleanChoiceItems: [
      '业务复杂，领域模型丰富',
      '需要长期维护和演进',
      '需要频繁切换技术栈'
    ]
  }
}
