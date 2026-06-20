export default {
  cap: {
    title: 'CAP 定理交互演示',
    subtitle: '点击选择两个属性，查看对应的系统类型',
    examplesLabel: '典型系统：',
    sacrificeLabel: '放弃了：',
    hint: '请选择两个属性查看结果',
    items: [
      { key: 'C', letter: 'C', name: '一致性', desc: '所有节点看到相同的数据' },
      { key: 'A', letter: 'A', name: '可用性', desc: '每个请求都能得到响应' },
      {
        key: 'P',
        letter: 'P',
        name: '分区容错',
        desc: '网络分区时系统仍能运行'
      }
    ],
    combinations: {
      CA: {
        type: 'CA 系统（放弃分区容错）',
        desc: '在没有网络分区的情况下，同时保证一致性和可用性。但在分布式环境中，网络分区是不可避免的，所以纯 CA 系统在实际分布式场景中很少见。',
        examples: '单机 MySQL、PostgreSQL（单节点）',
        sacrifice: '分区容错性（P）— 网络故障时系统不可用'
      },
      CP: {
        type: 'CP 系统（放弃可用性）',
        desc: '网络分区时优先保证数据一致性，可能拒绝部分请求。适合对数据正确性要求极高的场景。',
        examples: 'ZooKeeper、etcd、HBase、MongoDB（强一致模式）',
        sacrifice: '可用性（A）— 分区时部分请求会被拒绝或超时'
      },
      AP: {
        type: 'AP 系统（放弃强一致性）',
        desc: '网络分区时优先保证可用性，允许数据暂时不一致（最终一致性）。适合对可用性要求高、能容忍短暂不一致的场景。',
        examples: 'Cassandra、DynamoDB、DNS、CDN',
        sacrifice: '强一致性（C）— 不同节点可能短暂返回不同数据'
      }
    }
  },
  consistency: {
    title: '一致性模型对比',
    subtitle: '点击查看不同一致性模型的行为差异',
    tradeoffLabel: '权衡：',
    models: [
      {
        key: 'strong',
        name: '强一致性',
        desc: '写入成功后，所有节点立即返回最新值。像单机数据库一样的体验。',
        tradeoff:
          '延迟高（需要等所有节点确认），可用性低（节点故障时可能阻塞）',
        steps: [
          {
            nodes: [
              { name: '节点A', value: 'v1', status: 'ok' },
              { name: '节点B', value: 'v1', status: 'ok' },
              { name: '节点C', value: 'v1', status: 'ok' }
            ],
            desc: '初始状态，所有节点数据一致'
          },
          {
            nodes: [
              { name: '节点A', value: 'v2 ✍️', status: 'writing' },
              { name: '节点B', value: '同步中...', status: 'syncing' },
              { name: '节点C', value: '同步中...', status: 'syncing' }
            ],
            desc: '客户端写入 v2，等待所有节点确认'
          },
          {
            nodes: [
              { name: '节点A', value: 'v2', status: 'ok' },
              { name: '节点B', value: 'v2', status: 'ok' },
              { name: '节点C', value: 'v2', status: 'ok' }
            ],
            desc: '所有节点确认后才返回成功，读任意节点都是 v2'
          }
        ]
      },
      {
        key: 'eventual',
        name: '最终一致性',
        desc: '写入后不等所有节点同步，数据最终会一致，但中间可能读到旧值。',
        tradeoff: '延迟低、可用性高，但可能短暂读到旧数据',
        steps: [
          {
            nodes: [
              { name: '节点A', value: 'v1', status: 'ok' },
              { name: '节点B', value: 'v1', status: 'ok' },
              { name: '节点C', value: 'v1', status: 'ok' }
            ],
            desc: '初始状态'
          },
          {
            nodes: [
              { name: '节点A', value: 'v2 ✍️', status: 'writing' },
              { name: '节点B', value: 'v1', status: 'stale' },
              { name: '节点C', value: 'v1', status: 'stale' }
            ],
            desc: '写入 A 后立即返回成功，B/C 还是旧值'
          },
          {
            nodes: [
              { name: '节点A', value: 'v2', status: 'ok' },
              { name: '节点B', value: 'v2', status: 'ok' },
              { name: '节点C', value: 'v1→v2', status: 'syncing' }
            ],
            desc: '后台异步同步，逐渐达到一致'
          }
        ]
      },
      {
        key: 'causal',
        name: '因果一致性',
        desc: '有因果关系的操作保证顺序，无因果关系的操作可以乱序。介于强一致和最终一致之间。',
        tradeoff: '比强一致性延迟低，比最终一致性更可预测',
        steps: [
          {
            nodes: [
              { name: '用户A', value: '发帖: "你好"', status: 'ok' },
              { name: '用户B', value: '看到帖子', status: 'ok' },
              { name: '用户C', value: '看到帖子', status: 'ok' }
            ],
            desc: '用户 A 发帖'
          },
          {
            nodes: [
              { name: '用户A', value: '发帖: "你好"', status: 'ok' },
              { name: '用户B', value: '回复: "嗨!"', status: 'writing' },
              { name: '用户C', value: '看到帖子', status: 'ok' }
            ],
            desc: '用户 B 回复（因果依赖于 A 的帖子）'
          },
          {
            nodes: [
              { name: '用户A', value: '看到回复', status: 'ok' },
              { name: '用户B', value: '回复: "嗨!"', status: 'ok' },
              { name: '用户C', value: '先看到帖子再看到回复', status: 'ok' }
            ],
            desc: '所有人都先看到帖子再看到回复（因果顺序保证）'
          }
        ]
      }
    ]
  },
  challenges: {
    title: '分布式系统八大挑战',
    subtitle: '点击查看每个挑战的详情和应对策略',
    scenarioLabel: '场景举例：',
    solutionLabel: '应对策略：',
    items: [
      {
        key: 'network',
        name: '网络不可靠',
        icon: '🔌',
        desc: '分布式系统的节点通过网络通信，而网络随时可能丢包、延迟、断开。这是分布式系统最根本的挑战——你永远不能假设网络是可靠的。',
        scenario:
          '服务 A 调用服务 B，请求发出后 3 秒没收到响应。是 B 没收到？还是 B 处理了但响应丢了？A 无法区分。',
        solutions: [
          '超时 + 重试：设置合理超时，失败后重试（需保证幂等性）',
          '心跳检测：定期发送心跳包检测连接是否存活',
          '断路器模式：连续失败后暂停调用，避免雪崩'
        ]
      },
      {
        key: 'clock',
        name: '时钟不同步',
        icon: '⏰',
        desc: '每台机器的物理时钟都有微小偏差（时钟漂移），即使用 NTP 同步也只能精确到毫秒级。在分布式系统中，你不能依赖物理时钟来判断事件的先后顺序。',
        scenario:
          '节点 A 在 10:00:00.001 写入数据，节点 B 在 10:00:00.002 写入数据。但 B 的时钟快了 5ms，实际上 B 先写的。',
        solutions: [
          '逻辑时钟（Lamport Clock）：用递增计数器代替物理时钟',
          '向量时钟（Vector Clock）：每个节点维护一个向量，追踪因果关系',
          'TrueTime（Google Spanner）：用 GPS + 原子钟提供有界误差的时间'
        ]
      },
      {
        key: 'partition',
        name: '网络分区',
        icon: '✂️',
        desc: '网络分区是指部分节点之间无法通信，但各自仍在运行。这时系统必须在一致性和可用性之间做选择（CAP 定理）。',
        scenario:
          '数据中心 A 和 B 之间的光纤被挖断，两边的服务各自运行，但数据开始分叉。',
        solutions: [
          'CP 策略：分区时拒绝写入，保证一致性（如 ZooKeeper）',
          'AP 策略：分区时允许写入，事后合并冲突（如 DynamoDB）',
          '多数派写入：只要多数节点确认就算成功'
        ]
      },
      {
        key: 'consistency',
        name: '数据一致性',
        icon: '🔄',
        desc: '多个副本之间如何保持数据一致？强一致性性能差，最终一致性可能读到旧数据。没有银弹，只有权衡。',
        scenario:
          '用户在节点 A 修改了头像，但刷新页面时请求被路由到节点 B，看到的还是旧头像。',
        solutions: [
          '读写同一节点：写入后的读请求路由到同一节点',
          '读修复（Read Repair）：读取时检测不一致并修复',
          '反熵协议：后台定期比对副本，修复差异'
        ]
      },
      {
        key: 'failure',
        name: '部分失败',
        icon: '💥',
        desc: '分布式系统中，部分节点可能失败而其他节点正常运行。系统需要在部分失败的情况下继续提供服务。',
        scenario:
          '5 个节点的集群中有 2 个节点宕机，系统需要判断：是继续服务还是停止？剩余节点的数据是否完整？',
        solutions: [
          '冗余副本：数据存多份，单点故障不影响可用性',
          '故障检测：通过心跳和超时机制快速发现故障节点',
          '自动故障转移：检测到主节点故障后自动切换到备节点'
        ]
      },
      {
        key: 'split-brain',
        name: '脑裂问题',
        icon: '🧠',
        desc: '当网络分区导致集群分成两部分时，两边都认为自己是"主"，各自接受写入，导致数据冲突。这就是脑裂。',
        scenario:
          '主从架构中，主节点和从节点之间网络断开，从节点以为主节点挂了，自己升级为主。现在有两个主节点同时写入。',
        solutions: [
          '多数派选举：只有获得多数票的节点才能成为主节点',
          'Fencing Token：旧主节点的写入请求会被存储层拒绝',
          '仲裁节点：引入第三方节点来裁决谁是真正的主'
        ]
      },
      {
        key: 'ordering',
        name: '事件排序',
        icon: '📋',
        desc: '在分布式系统中，不同节点上发生的事件没有全局统一的顺序。如何确定"谁先谁后"是一个根本性难题。',
        scenario:
          '两个用户同时编辑同一个文档，节点 A 收到"删除第 3 行"，节点 B 收到"修改第 3 行"。最终结果取决于执行顺序。',
        solutions: [
          '全序广播（Total Order Broadcast）：所有节点以相同顺序处理消息',
          'CRDT（无冲突复制数据类型）：数据结构本身保证合并无冲突',
          'OT（操作转换）：Google Docs 使用的协作编辑算法'
        ]
      },
      {
        key: 'transaction',
        name: '分布式事务',
        icon: '🔐',
        desc: '跨多个节点的操作如何保证原子性？要么全部成功，要么全部回滚。这比单机事务复杂得多。',
        scenario:
          '电商下单：扣库存在服务 A，扣余额在服务 B，创建订单在服务 C。如果扣余额失败，库存需要回滚。',
        solutions: [
          '2PC（两阶段提交）：协调者先问所有参与者能否提交，再统一提交',
          'Saga 模式：每个步骤有对应的补偿操作，失败时逐步回滚',
          'TCC（Try-Confirm-Cancel）：预留资源 → 确认 → 取消'
        ]
      }
    ]
  }
}
