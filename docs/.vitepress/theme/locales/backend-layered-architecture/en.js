export default {
  overview: {
    title: 'Backend Four-Layer Architecture Overview',
    subtitle: 'Click a layer to see details.',
    client: 'Client (Web / App)',
    db: 'Database (MySQL / PostgreSQL)',
    commonMistakes: 'Common mistakes:',
    layers: [
      {
        id: 'controller',
        name: 'Controller',
        badge: 'Entry',
        duty: 'Receive requests, validate parameters, call Service'
      },
      {
        id: 'service',
        name: 'Service',
        badge: 'Business core',
        duty: 'Orchestrate business logic, manage transactions, coordinate modules'
      },
      {
        id: 'repository',
        name: 'Repository',
        badge: 'Data access',
        duty: 'Persistence, query encapsulation, ORM mapping'
      },
      {
        id: 'domain',
        name: 'Domain',
        badge: 'Domain model',
        duty: 'Entities, business rules, value objects'
      }
    ],
    infoMap: {
      controller: {
        title: 'Controller Layer - Request Reception',
        desc: 'Receives HTTP requests, parses parameters, performs basic validation, and delegates business work to the Service layer.',
        analogy:
          'Like a restaurant host: greets guests, checks reservations, and guides them to a table, but does not cook.',
        mistakes: [
          'Putting business logic in Controller',
          'Accessing database directly',
          'Skipping parameter validation'
        ]
      },
      service: {
        title: 'Service Layer - Business Orchestration',
        desc: 'Coordinates business logic, transactions, and multiple repositories. It owns business rules and workflows.',
        analogy:
          'Like a chef: follows recipes, coordinates ingredients, and controls output quality.',
        mistakes: [
          'Circular dependencies between services',
          'Writing SQL directly',
          'Overlong methods covering many scenarios'
        ]
      },
      repository: {
        title: 'Repository Layer - Data Gateway',
        desc: 'Encapsulates all data access so upper layers do not care about database type or SQL details.',
        analogy:
          'Like warehouse staff: fetches and stores ingredients while the chef only states what is needed.',
        mistakes: [
          'Putting business logic in Repository',
          'Returning entities directly to frontend',
          'One repository operating many unrelated tables'
        ]
      },
      domain: {
        title: 'Domain Layer - Business Blueprint',
        desc: 'Defines entities, value objects, and business rules. Other layers depend on it, but it depends on no other layer.',
        analogy:
          'Like a menu and dish standard: defines what a dish is, which ingredients it uses, and how it should taste.',
        mistakes: [
          'Embedding persistence concerns in Domain',
          'Writing database operations in Domain',
          'Circular dependencies between domain objects'
        ]
      }
    }
  },
  controller: {
    title: 'Controller Layer: Request Reception',
    subtitle: 'Click flow nodes to see details.',
    requestLabel: 'Client sends request',
    requestCode: `POST /api/users/register
Content-Type: application/json
{ "username": "Alice", "email": "alice@example.com", "password": "123456" }`,
    arrive: '↓ Request arrives',
    receiveLabel: 'Controller receives and parses request',
    validateArrow: '↓ Validate parameters + call service',
    validationLabel: 'Parameter validation, one Controller responsibility',
    validationCode: `public class UserRegisterRequest {
    @NotBlank(message = "Username is required")
    @Size(min = 2, max = 20) private String username;
    @Email(message = "Invalid email format") private String email;
    @Size(min = 6, message = "Password needs at least 6 characters") private String password;
}`,
    validationDetailTitle: 'Why validate in Controller?',
    validationDetails: [
      'First defense: reject invalid requests early',
      'Reduce downstream burden: Service can assume cleaned data',
      'Separate concerns: Service focuses on business, not format validation'
    ],
    responseArrow: '↓ Return result',
    responseLabel: 'Controller wraps response',
    responseCode: `HTTP/1.1 200 OK
{ "code": 200, "message": "Registered",
  "data": { "id": 10001, "username": "Alice", "email": "alice@example.com" } }`,
    dutiesTitle: 'Core Controller Responsibilities',
    duties: [
      { name: 'Receive request', desc: 'Map HTTP request to method' },
      { name: 'Validate params', desc: 'Basic format and required checks' },
      { name: 'Call Service', desc: 'Forward request to business layer' },
      { name: 'Wrap response', desc: 'Return unified response format' }
    ]
  },
  service: {
    title: 'Service Layer: Business Orchestration',
    subtitle:
      'Choose a business scenario to see how Service coordinates logic.',
    scenarios: [
      { id: 'order', name: 'Order flow' },
      { id: 'refund', name: 'Refund handling' },
      { id: 'report', name: 'Report generation' }
    ],
    allData: {
      order: {
        title: 'E-commerce Order Flow',
        desc: 'Placing an order involves inventory deduction, order creation, and payment records, all requiring transactional consistency.',
        steps: [
          {
            name: 'Parameter validation and DTO conversion',
            layer: 'Controller',
            code: `@PostMapping("/orders")
public ResponseEntity<OrderDTO> createOrder(
    @RequestBody @Valid CreateOrderRequest request) {
    OrderDTO order = orderService.createOrder(request);
    return ResponseEntity.ok(order);
}`
          },
          {
            name: 'Business orchestration with transaction',
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
                name: 'Check and deduct inventory',
                desc: 'Ensure stock is sufficient',
                status: 'Success'
              },
              {
                icon: '📝',
                name: 'Create order record',
                desc: 'Generate order header',
                status: 'Success'
              },
              {
                icon: '💳',
                name: 'Create payment record',
                desc: 'Initialize pending payment',
                status: 'Success'
              },
              {
                icon: '🔄',
                name: 'Commit transaction',
                desc: 'Atomic commit',
                status: 'Committed'
              }
            ]
          },
          {
            name: 'Persist data',
            layer: 'Repository',
            code: `public interface OrderRepository extends JpaRepository<Order, Long> {
    // Basic CRUD is built in
}`
          }
        ]
      },
      refund: {
        title: 'Refund Processing Flow',
        desc: 'Refunds involve order state changes, payment-channel refund, and inventory rollback.',
        steps: [
          {
            name: 'Receive refund request',
            layer: 'Controller',
            code: `@PostMapping("/orders/{orderId}/refund")
public ResponseEntity<RefundDTO> applyRefund(
    @PathVariable Long orderId, @RequestBody @Valid RefundRequest request) {
    return ResponseEntity.ok(refundService.processRefund(orderId, request));
}`
          },
          {
            name: 'Process refund business logic',
            layer: 'Service',
            code: `@Transactional
public RefundDTO processRefund(Long orderId, RefundRequest request) {
    Order order = orderRepository.findById(orderId).orElseThrow();
    if (order.getStatus() != OrderStatus.PAID)
        throw new InvalidOrderStateException("Refund is not allowed");
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
                name: 'Validate order state',
                desc: 'Check whether refund is allowed',
                status: 'Passed'
              },
              {
                icon: '💰',
                name: 'Calculate refund amount',
                desc: 'Apply refund rules',
                status: 'Done'
              },
              {
                icon: '🏦',
                name: 'Call payment channel',
                desc: 'Request third-party refund',
                status: 'Processing'
              },
              {
                icon: '📝',
                name: 'Update order status',
                desc: 'Mark as refunding',
                status: 'Updated'
              },
              {
                icon: '🔄',
                name: 'Restore inventory async',
                desc: 'Restore stock in background',
                status: 'Submitted'
              }
            ]
          }
        ]
      },
      report: {
        title: 'Report Generation Flow',
        desc: 'Complex reports involve multi-source queries, aggregation, and asynchronous export.',
        steps: [
          {
            name: 'Receive report request',
            layer: 'Controller',
            code: `@GetMapping("/reports/sales")
public ResponseEntity<ReportTaskDTO> generateSalesReport(
    @RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
    ReportTaskDTO task = reportService.createReportTask(startDate, endDate);
    return ResponseEntity.accepted().body(task);
}`
          },
          {
            name: 'Asynchronous report orchestration',
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
                name: 'Query multiple data sources',
                desc: 'Orders/Payments/Refunds',
                status: 'Queried'
              },
              {
                icon: '🔄',
                name: 'Aggregate and clean data',
                desc: 'Join data and handle missing values',
                status: 'Done'
              },
              {
                icon: '📊',
                name: 'Calculate business metrics',
                desc: 'GMV, order count, average order value',
                status: 'Calculated'
              },
              {
                icon: '📄',
                name: 'Export Excel',
                desc: 'Generate and upload file',
                status: 'Done'
              }
            ]
          }
        ]
      }
    },
    principlesTitle: 'Service Layer Design Principles',
    principles: [
      {
        title: 'Single responsibility',
        desc: 'One Service owns one business area',
        example: 'UserService handles users, OrderService handles orders'
      },
      {
        title: 'Transaction boundary',
        desc: 'Manage transactions declaratively in Service',
        example: 'Put @Transactional on Service methods'
      },
      {
        title: 'Avoid cycles',
        desc: 'Services should not call each other in loops',
        example: 'A→B→A creates a cycle'
      },
      {
        title: 'DTO conversion',
        desc: 'Convert to DTO before returning; do not expose entities',
        example: 'return new UserDTO(user)'
      }
    ]
  },
  repository: {
    title: 'Repository Layer: Data Access Boundary',
    subtitle:
      'Repository encapsulates data access so upper layers do not need database details.',
    bad: 'Poor approach',
    good: 'Clean approach',
    badPanel: 'Write SQL directly in Service',
    goodPanel: 'Use Repository to encapsulate data access',
    badBadge: 'Tightly coupled',
    goodBadge: 'Clearly decoupled',
    badTitle: 'Problems with this approach',
    goodTitle: 'Benefits of this approach',
    badCode: `@Service
public class OrderService {
    @Autowired private JdbcTemplate jdbcTemplate;

    public List<Order> getUserOrders(Long userId) {
        // ❌ SQL is hard-coded in Service
        // ❌ Changing database requires changing business code
        // ❌ Unit tests need a real database
        String sql = "SELECT * FROM orders WHERE user_id = ? AND deleted = 0";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Order order = new Order();
            order.setId(rs.getLong("id"));
            order.setUserId(rs.getLong("user_id"));
            return order;
        }, userId);
    }
}`,
    goodCode: `// Repository interface definition
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // ✅ Query generated from method name
    List<Order> findByUserIdAndDeletedFalse(Long userId);

    // ✅ Custom JPQL
    @Query("SELECT o FROM Order o WHERE o.createdAt BETWEEN :start AND :end")
    List<Order> findByDateRange(@Param("start") LocalDateTime start,
                                @Param("end") LocalDateTime end);
}

// Service layer with pure business logic
@Service
public class OrderService {
    @Autowired private OrderRepository orderRepository; // ✅ Depend on interface

    public List<OrderDTO> getUserOrders(Long userId) {
        List<Order> orders = orderRepository.findByUserIdAndDeletedFalse(userId);
        return orders.stream().map(OrderDTO::from).collect(Collectors.toList());
    }
}`,
    problems: [
      'Database coupling: SQL is scattered through business code',
      'Hard to test: unit tests become database integration tests',
      'Duplicate code: same query conditions repeated everywhere',
      'Security risk: handwritten SQL can miss injection safeguards'
    ],
    benefits: [
      'Separation of concerns: Service handles business, Repository handles data',
      'High testability: mocks can replace the real database',
      'Code reuse: common queries are defined once and reused',
      'Low switching cost: changing database mostly affects Repository implementation'
    ],
    tableTitle: 'Repository Implementation Options',
    headers: ['Implementation', 'Pros', 'Cons', 'Best for'],
    repos: [
      {
        name: 'Spring Data JPA',
        tag: 'Mainstream',
        tagClass: '',
        pros: 'Method-name query derivation, built-in pagination',
        cons: 'Complex queries may be less efficient',
        scene: 'Fast development, standard CRUD'
      },
      {
        name: 'MyBatis / MyBatis-Plus',
        tag: 'SQL control',
        tagClass: 'blue',
        pros: 'Full SQL control and strong dynamic SQL',
        cons: 'Requires handwritten SQL',
        scene: 'Complex queries, performance-sensitive paths'
      },
      {
        name: 'Spring Data JDBC',
        tag: 'Lightweight',
        tagClass: 'green',
        pros: 'Simple, lightweight, fast startup',
        cons: 'No complex mapping',
        scene: 'Microservices, simple aggregate roots'
      }
    ]
  },
  domain: {
    title: 'Domain Layer: Domain Model Design',
    subtitle:
      'Domain carries business concepts and forms the dependency base for all layers.',
    tabs: [
      { id: 'comparison', name: 'Anemic vs Rich' },
      { id: 'valueobject', name: 'Value object design' }
    ],
    anemicTitle: 'Anemic Model',
    richTitle: 'Rich Domain Model',
    traditional: 'Traditional approach',
    recommended: 'Recommended approach',
    anemicProblemsTitle: 'Problems with anemic model',
    anemicProblems: [
      'Violates object orientation: objects have data but no behavior',
      'Scattered logic: same rule may repeat in multiple Services',
      'Hard to maintain: changing a rule requires finding all usages'
    ],
    richBenefitsTitle: 'Benefits of rich domain model',
    richBenefits: [
      'Object-oriented: data and behavior are encapsulated together',
      'Business cohesion: rules stay with objects and change in one place',
      'Testable: domain objects are in-memory and do not require database',
      'Expressive: order.cancel() is more natural than orderService.cancel(order)'
    ],
    valueObjectTitle: 'What is a Value Object?',
    valueObjectDesc:
      'An immutable object without a unique identity. It describes a feature or property. Two value objects are equal when all properties are equal.',
    addressTitle: 'Address',
    moneyTitle: 'Money',
    anemicEntity: `@Entity
public class Order {
    @Id private Long id;
    private BigDecimal totalAmount;
    private OrderStatus status;
    // Only getters/setters, no business logic
    public Long getId() { return id; }
    public void setStatus(OrderStatus s) { this.status = s; }
}`,
    anemicService: `@Service
public class OrderService {
    public void cancelOrder(Long orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow();
        // Anemic model: business logic is scattered in Service
        if (order.getStatus() == OrderStatus.SHIPPED)
            throw new IllegalStateException("Shipped order cannot be cancelled");
        order.setStatus(OrderStatus.CANCELLED);
        orderRepository.save(order);
    }
}`,
    richEntity: `@Entity
public class Order {
    @Id private Long id;
    private BigDecimal totalAmount;
    private OrderStatus status;

    // Business behavior is encapsulated in the entity
    public void cancel() {
        if (this.status == OrderStatus.SHIPPED)
            throw new IllegalStateException("Shipped order cannot be cancelled");
        this.status = OrderStatus.CANCELLED;
        registerEvent(new OrderCancelledEvent(this.id));
    }

    public void pay(Payment payment) {
        if (this.status != OrderStatus.PENDING_PAYMENT)
            throw new IllegalStateException("Invalid order state");
        this.status = OrderStatus.PAID;
    }
}`,
    richService: `@Service
public class OrderService {
    @Transactional
    public void cancelOrder(Long orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow();
        order.cancel(); // Call domain behavior
        orderRepository.save(order);
    }
}`,
    addressVO: `// Value object: immutable and without ID
public record Address(String province, String city, String district, String street) {
    public String toDisplayString() {
        return String.format("%s%s%s%s", province, city, district, street);
    }
}
// Addresses are equal when all properties match
Address a1 = new Address("Guangdong", "Shenzhen", "Nanshan", "Tech Park");
Address a2 = new Address("Guangdong", "Shenzhen", "Nanshan", "Tech Park");
a1.equals(a2); // true`,
    moneyVO: `public record Money(BigDecimal amount, Currency currency) {
    public static Money yuan(BigDecimal amount) {
        return new Money(amount, Currency.getInstance("CNY"));
    }
    // Operations return new value objects because they are immutable
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
    title: 'DTO Flow: Data Conversion Between Layers',
    subtitle:
      'DTO means Data Transfer Object, the carrier for data passed between layers.',
    controllerLayer: 'Controller Layer',
    controllerCode: `// Receive Request DTO
public ResponseEntity<UserDTO> createUser(
    @RequestBody @Valid UserCreateRequest request) { ... }`,
    toService: '↓ Convert to parameters required by Service',
    serviceLayer: 'Service Layer',
    serviceCode: `public UserDTO createUser(UserCreateParam param) {
    User user = param.toEntity();   // Convert to Entity
    userRepository.save(user);
    return UserDTO.from(user);      // Entity → DTO
}`,
    toRepository: '↓ Convert to Entity required by Repository',
    repositoryLayer: 'Repository Layer',
    repositoryCode: `public interface UserRepository
    extends JpaRepository<User, Long> { }`,
    returnEntity: '↑ Return Entity and convert to DTO',
    returnClient: 'Return to client',
    responseCode: `{ "id": 10001, "username": "Alice",
  "email": "alice@example.com", "createdAt": "2024-01-15T10:30:00Z" }`,
    tableTitle: 'DTO Responsibility by Layer',
    headers: ['Layer', 'DTO type', 'Responsibility', 'Example'],
    rows: [
      {
        layer: 'Controller',
        cls: 'green',
        type: 'Request / Response DTO',
        purpose: 'Define API contract and validation',
        example: 'UserCreateRequest'
      },
      {
        layer: 'Service',
        cls: 'orange',
        type: 'Param / Result DTO',
        purpose: 'Wrap business method parameters and decouple layers',
        example: 'UserCreateParam'
      },
      {
        layer: 'Repository',
        cls: 'blue',
        type: 'Entity / DO',
        purpose: 'Map database table structure',
        example: 'UserEntity'
      }
    ]
  },
  dependency: {
    title: 'Dependency Direction: Core Rule of Layered Architecture',
    subtitle:
      'Understanding dependency direction is essential to layered architecture.',
    outer: 'Outer layer (UI / external systems)',
    middle: 'Middle layer (application layer)',
    inner: 'Inner layer (domain layer)',
    depends: '↓ depends on',
    principleTitle: 'Core principle: Dependency Inversion Principle',
    principleDesc:
      'High-level modules should not depend on low-level implementation details. They should depend on abstractions.',
    rules: [
      {
        title: 'Controller → Service interface',
        desc: 'Controller depends on the Service interface, not implementation class'
      },
      {
        title: 'Service → Repository interface',
        desc: 'Service depends on Repository interface and does not care how data is stored'
      },
      {
        title: 'All layers depend on Domain',
        desc: 'Domain is the core and is depended on by upper layers, but Domain depends on no layer'
      }
    ]
  },
  clean: {
    title: 'Clean Architecture vs Layered Architecture',
    subtitle:
      'Layered architecture is a foundation for clean architecture. Understanding the relationship helps build more flexible systems.',
    tabs: [
      { id: 'layered', name: 'Traditional layered' },
      { id: 'clean', name: 'Clean architecture' },
      { id: 'compare', name: 'Comparison' }
    ],
    layeredLayers: [
      {
        name: 'Controller Layer',
        desc: 'Receive requests, validate parameters',
        cls: 'green'
      },
      {
        name: 'Service Layer',
        desc: 'Business logic, transaction management',
        cls: 'orange'
      },
      {
        name: 'Repository Layer',
        desc: 'Data access, ORM mapping',
        cls: 'blue'
      },
      { name: 'Domain Layer', desc: 'Entities, business rules', cls: 'teal' }
    ],
    layeredTitle: 'Traditional Layered Architecture Traits',
    layeredTraits: [
      'Vertical dependency: upper layers directly depend on lower layers',
      'Simple and intuitive: clear structure, easy to understand',
      'Good for small and medium projects: quick development',
      'Potential issue: lower-layer changes may affect upper layers'
    ],
    cleanLayers: [
      {
        name: 'Domain layer (core)',
        items: 'Entity / ValueObject / DomainService',
        cls: 'teal'
      },
      {
        name: 'Application layer',
        items: 'Service / UseCase / DTO',
        cls: 'orange'
      },
      {
        name: 'Interface adapters',
        items: 'Controller / Gateway / Presenter',
        cls: 'blue'
      },
      {
        name: 'Frameworks and drivers',
        items: 'Web / DB / UI / external APIs',
        cls: 'gray'
      }
    ],
    depRule:
      'Dependency direction: outer → inner. Inner layers do not know outer layers exist.',
    cleanTitle: 'Clean Architecture Traits',
    cleanTraits: [
      'Dependency inversion: dependencies point from outside to inside through interfaces',
      'Domain at core: business logic is central and independent of frameworks',
      'Highly testable: core business can be unit-tested without frameworks',
      'Technology independent: database and framework can be replaced more easily'
    ],
    headers: ['Feature', 'Traditional layered', 'Clean architecture'],
    compareRows: [
      {
        feature: 'Dependency direction',
        layered: 'Top to bottom',
        clean: 'Outside to inside'
      },
      {
        feature: 'Core business location',
        layered: 'Service layer',
        clean: 'Domain layer at center'
      },
      {
        feature: 'Framework dependency',
        layered: 'Deeper',
        clean: 'Shallower through interfaces'
      },
      {
        feature: 'Testability',
        layered: 'Often needs integration tests',
        clean: 'Core can be unit-tested'
      },
      { feature: 'Learning curve', layered: 'Gentle', clean: 'Steeper' },
      {
        feature: 'Best fit',
        layered: 'Small/medium, fast iteration',
        clean: 'Large, complex, long-term maintenance'
      }
    ],
    layeredChoice: 'Choose traditional layered when...',
    layeredChoiceItems: [
      'Project is small and business is simple',
      'Team is not familiar with DDD',
      'You need fast launch and market validation'
    ],
    cleanChoice: 'Choose clean architecture when...',
    cleanChoiceItems: [
      'Business is complex with rich domain model',
      'Long-term maintenance and evolution matter',
      'Technology stack may change frequently'
    ]
  }
}
