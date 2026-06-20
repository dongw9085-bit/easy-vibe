export default {
  introPrs: {
    columns: [
      {
        title: '问题',
        items: [
          {
            strong: '上下文难以保持一致',
            text: '对话一长，前后语义容易脱节。'
          },
          {
            strong: '关键事实容易丢失',
            text: '早期给出的信息在后续轮次中难以被准确引用。'
          },
          {
            strong: '调用成本持续上升',
            text: '每一轮都要重新处理大量历史内容。'
          }
        ]
      },
      {
        title: '可能的成因',
        items: [
          {
            strong: '视野仅限当前调用',
            text: '模型只能依赖这一轮提供的上下文。'
          },
          {
            strong: '信息缺乏结构化组织',
            text: '重要信息与次要细节混在一起，难以形成稳定记忆。'
          },
          {
            strong: '历史内容反复计算',
            text: '大量固定前缀在多轮对话中被一遍遍重新处理。'
          }
        ]
      },
      {
        title: '带来的影响',
        items: [
          {
            strong: '回答质量不稳定',
            text: '对话越长，模型越难保持一致性和可追溯性。'
          },
          {
            strong: '成本难以预估',
            text: '每轮上下文大小高度波动，调用费用不可控。'
          },
          {
            strong: '难以工程化落地',
            text: '缺乏明确的上下文管理策略，系统在生产环境中难以维护与扩展。'
          }
        ]
      }
    ]
  },
  agentContextFlow: {
    currentRound: '当前轮次',
    tokenUsage: 'Token 占用',
    currentCost: '本轮成本',
    overflow: '溢出截断：前 {count} 轮对话已被遗忘！',
    safe: '记忆完整',
    limit: 'Context Window Limit ({limit})',
    systemPrompt: 'System Prompt ({tokens})',
    history: 'History ({count} rounds)',
    newInput: 'New Input',
    sliderHint: '拖动滑块增加对话轮次：',
    firstRound: '第 1 轮',
    maxRound: '第 {round} 轮',
    normalStrong: '一切正常',
    normal:
      '当前 Token 数 ({total}) 未超过窗口限制。模型能完美回忆起所有对话细节。',
    warningStrong: '发生遗忘',
    warning:
      'Token 总量 ({total}) 已超过窗口限制 ({limit})。为了放入新对话，系统被迫丢弃了最早的 {count} 轮历史记录。'
  },
  contextWindow: {
    usedLabel: '已经写了多少个 token',
    maxLabel: '黑板最多能写几个 token',
    header: '模型能看到的“小黑板”（上下文窗口）',
    overflow: '⚠️ 达到上下文上限 (已截断)',
    inputLabel: '输入内容（看黑板怎么被一点点写满）',
    shortButton: '填一段短文本',
    longButton: '一下子塞满黑板',
    clearButton: '清空',
    placeholder: '在这里输入几句话，看看小黑板是怎么逐渐被写满的...',
    infoStrong: '说明：',
    info: '上下文窗口可以理解成模型的“小黑板”。黑板只有这么大，写满了就必须擦掉旧的才能写新的。一旦溢出，最早写的那部分内容就会被擦掉，模型会完全“看不见”它们。',
    defaultText:
      '上下文工程（Context Engineering）是指优化提供给大语言模型（LLM）的提示词。',
    words: [
      '人工智能',
      '深度学习',
      '神经网络',
      '大模型',
      'Transformer',
      '注意力机制',
      '上下文窗口',
      'Token',
      'Embedding',
      '微调',
      '预训练',
      '推理',
      '生成',
      'RAG'
    ]
  },
  kvCache: {
    toggle: '开启“背课文加速”（前缀复用 / KV Cache）',
    generating: '生成中...',
    send: '发送新请求',
    systemTitle: '固定开场白（System Prompt）',
    cached: '已背过',
    systemContent: '你是一个乐于助人的 AI 助手... （大约 500 个 token）',
    calculating: '计算中...',
    historyTitle: '最近几轮聊天记录',
    historyContent: '用户：你好... （大约 200 个 token）',
    queryTitle: '这一次的新问题',
    queryTokens: '（大约 50 个 token）',
    ttft: '开口速度（首字延迟 TTFT）',
    saved: '节省 {time}ms',
    processed: '这次一共算了多少个 token',
    cost: '大致算力消耗（越少越省钱）',
    hitStrong: '命中时在干嘛：',
    hit: '前面的固定开场白不再重复计算，直接用“上一次背过的结果”，所以又快又省。',
    missStrong: '没开缓存时：',
    miss: '每次都要从头把所有 token 重新算一遍注意力，就像每次都从第一页开始重读课文，又慢又费钱。',
    queryA: '帮我写一段 Python 代码',
    queryB: '这段代码怎么运行？'
  },
  slidingWindow: {
    maxLabel: '窗口里最多能记住几条对话',
    maxValue: '最多 {count} 条',
    autoPlay: '▶ 自动演示',
    reset: '↺ 重新开始',
    forgottenTitle: '已被遗忘的内容',
    noForgotten: '这里暂时还没有被“挤出去”的对话',
    outside: '⬆ 窗口外（模型已经看不到）',
    inside: '⬇ 窗口内（模型还能看到）',
    activeTitle: '当前还在记忆里的对话',
    emptyActive: '从这里开始聊天，看看旧对话是怎么被“挤出去”的',
    placeholder: '在这里输入一条消息，然后点发送',
    send: '发送消息',
    infoStrong: '说明：',
    info: '滑动窗口是最简单的记忆管理方式：新的进来，旧的出去。好处是永远不会“撑爆脑子”，代价就是——一旦滑出窗口（上面灰色区域），模型就完全忘了它存在过。',
    aiReply: 'I heard you say "{text}". Interesting!',
    script: [
      '你好，我是张三。',
      '你好呀，我是你的 AI 助手。',
      '我今天有点累，帮我记录一下待办吧。',
      '没问题，你可以把待办一条条发给我。',
      '第一件事：给客户发邮件。',
      '好的，已经记下来了。',
      '第二件事：晚上去买菜做饭。',
      '收到，也帮你记住了。',
      '第三件事：记得给女朋友买花。',
      '这条也帮你写在“小黑板”上了。',
      '现在还记得我第一句话说了什么吗？',
      '呃……我只看得到窗口里的几条，最早那句已经被挤出去了。'
    ]
  },
  lostInMiddle: {
    positionLabel: '关键信息大概在整段话的哪个位置：{position}%',
    start: 'Start (System)',
    end: 'End (Query)',
    needle: '关键事实',
    yAxis: '被记住的概率',
    xAxis: '在上下文里的位置',
    retrieval: '检索成功率',
    description: '位置描述',
    front: '偏开头',
    back: '偏结尾',
    middle: '中间区域（最危险）',
    observationStrong: '实验观察：',
    observation:
      '当关键信息藏在整段话的中间位置时，模型最容易“漏看掉”（Lost in the Middle）。',
    advice:
      '最靠谱的做法：把重要指令放在最前面的 System Prompt，或者最后的用户问题里。'
  },
  selectiveContext: {
    totalLabel: '现在一共记了几条',
    maxLabel: '黑板最多能记几条',
    pinnedTitle: '钉住区（永远保留的重要信息）',
    count: '当前 {count} 条',
    unpinTitle: '取消钉住',
    locked: '🔒 系统信息固定在这',
    unpin: '📌 取消钉住',
    scrollingTitle: '会被“挤走”的普通对话（先进先出）',
    pinTitle: '把这条钉在黑板上',
    pin: '📌 钉住这条',
    empty: '这里是“普通对话区”，暂时还空着',
    placeholder: '在这里输入一条新的信息，比如“我叫小明”',
    add: '添加到黑板',
    presetName: '用户：我的名字叫 Alice',
    presetNameText: '我的名字叫 Alice。',
    presetPassword: '用户：系统密码是 1234',
    presetPasswordText: '系统密码是 1234。',
    infoStrong: '说明：',
    info: '“选择性保留”就是：重要的就钉在黑板上，普通的让它自己滑走。系统提示通常会永久钉住，用户的关键信息（比如名字、账号、重要偏好）也可以通过记忆模块或 RAG 钉在这里，避免被新对话挤掉。',
    fullAlert: 'Context window full of pinned messages! Unpin something first.'
  },
  ragSimulation: {
    defaultQuery: '如何重置密码？',
    inputStep: '用户提问 (User Query)',
    placeholder: '输入问题...',
    searching: '检索中...',
    search: '🚀 开始检索',
    retrievalStep: '图书馆检索 (Retrieval)',
    scanning: '正在扫描...',
    hitCount: '命中 {count} 条',
    relevance: '{score}% 相关',
    copyPaste: '✂️ 复制粘贴',
    finalPrompt: '最终上下文 (Final Prompt)',
    systemPrompt:
      '你是一个专业的 AI 助手。请基于下方【检索到的资料】回答用户的提问。',
    retrievedTitle: '📚 检索到的资料 (Context)',
    noDocs: '(未找到相关资料)',
    waiting: '等待提问...',
    documents: [
      {
        id: 1,
        title: '密码重置指南',
        content:
          '用户可以通过点击设置页面的"忘记密码"链接来重置密码。系统会发送验证邮件。',
        score: 0
      },
      {
        id: 2,
        title: '定价策略',
        content:
          '基础版每月 $10，专业版每月 $29。企业版需要联系销售团队获取报价。',
        score: 0
      },
      {
        id: 3,
        title: 'API 文档',
        content:
          '所有 API 请求都需要在 Header 中包含 Bearer Token 进行身份验证。',
        score: 0
      },
      {
        id: 4,
        title: '账户安全',
        content:
          '为了账户安全，建议开启双重认证 (2FA)。定期修改密码也是好习惯。',
        score: 0
      }
    ],
    keywords: {
      password: '密码',
      security: '安全',
      price: '价格',
      priceShort: '价',
      api: 'API'
    }
  },
  contextCompression: {
    originalText:
      '上下文工程（Context Engineering）是指优化提供给大语言模型（LLM）的提示词，以确保其拥有生成准确且相关回复所需的信息。其中的一个主要挑战是 LLM 的上下文窗口有限，这限制了它们一次能处理的文本量。为了克服这个问题，开发者使用了诸如摘要生成（Summarization）等技术，将长文档浓缩为保留关键信息的短版本。另一种技术是检索增强生成（RAG），它根据用户的查询从数据库中仅获取最相关的片段。此外，通过将非结构化文本转换为 JSON 等结构化数据，也可以减少冗余字符，提高信息密度。',
    chooseStrategy: '1. 选择压缩策略',
    originalLabel: '原始文本 (Original)',
    placeholder: '在此输入长文本...',
    compressedLabel: '压缩后 (Compressed)',
    compressing: '正在压缩...',
    startHint: '请点击上方按钮开始压缩',
    savedSpace: '节省空间',
    strategies: [
      { id: 'summary', label: '📝 摘要生成', desc: '保留大意' },
      { id: 'extract', label: '🔑 关键词', desc: '提炼要点' },
      { id: 'json', label: '⚙️ 结构化', desc: '转 JSON' }
    ],
    results: {
      summary:
        '上下文工程旨在优化 LLM 提示词以解决上下文窗口限制。主要技术包括摘要生成（浓缩关键信息）、RAG（按需检索相关片段）以及结构化数据转换（提高信息密度）。',
      extract:
        '- 目标: 优化 LLM 提示词\n- 挑战: 上下文窗口有限\n- 方案1: 摘要生成 (Summarization)\n- 方案2: 检索增强生成 (RAG)\n- 方案3: 结构化数据 (JSON)'
    }
  },
  memoryPalace: {
    empty: '🚧 空地：点击下方按钮开始建造记忆宫殿',
    progress: '当前进度: {current}/4',
    reset: '🔄 重置重建',
    start: '🏗️ 开始建造',
    next: '➕ 添加下一层',
    why: '为什么这样设计？',
    steps: [
      {
        id: 'base',
        title: '第一层：地基 (System)',
        desc: '系统设定、身份、原则',
        detail: '✅ 永远不变，利用 KV Cache 实现 0 成本背诵',
        color: 'var(--vp-c-brand)',
        icon: '🏛️'
      },
      {
        id: 'task',
        title: '第二层：支柱 (Task)',
        desc: '当前任务目标、用户画像',
        detail: '📌 任务期内“钉死”，保证方向不偏',
        color: '#8e44ad',
        icon: '📌'
      },
      {
        id: 'chat',
        title: '第三层：客厅 (Chat)',
        desc: '最近 5-10 轮对话',
        detail: '🔄 滑动窗口，旧的自动腾出空间',
        color: '#e67e22',
        icon: '💬'
      },
      {
        id: 'rag',
        title: '第四层：图书馆 (RAG)',
        desc: '按需检索的知识',
        detail: '📚 不占脑子，用时再查，无限扩展',
        color: '#27ae60',
        icon: '🔍'
      }
    ],
    explanations: [
      '**地基最稳**：把 System Prompt 放在最前面，利用 KV Cache 机制，让 AI "背下来"，后续请求**速度快且免费**。',
      '**目标明确**：无论聊得多嗨，任务目标（如“写一个 Python 爬虫”）必须**钉死**，防止 AI 聊偏了。',
      '**保持鲜活**：最近的对话最重要，用滑动窗口保留，**旧的自动忘掉**，给新信息腾地方。',
      '**无限外脑**：遇到不懂的，不要瞎编，去“图书馆”查资料。**用完即走**，不占宝贵的脑容量。'
    ]
  },
  memoryPalaceAction: {
    chatHeader: '📱 用户视角 (Chat)',
    stepInfo: '步骤 {current} / {total}',
    previous: '⬅️ 上一步',
    restart: '🔄 重新演示',
    next: '下一步 ➡️',
    aiHeader: '🧠 AI 视角 (Context Construction)',
    layerBase: 'Layer 1: 地基 (System)',
    layerTask: 'Layer 2: 支柱 (Task)',
    layerChat: 'Layer 3: 客厅 (Chat)',
    layerRag: 'Layer 4: 图书馆 (RAG)',
    noChat: '(暂无对话历史)',
    noRag: '(当前无需检索)',
    whatHappened: '💡 这一步发生了什么：',
    scenarios: {
      coding: {
        name: '👨‍💻 代码助手场景',
        steps: [
          {
            user: '帮我写一个 Python 贪吃蛇游戏',
            action: '初始化',
            layers: {
              base: 'System: 你是资深 Python 工程师...',
              task: 'Task: 编写贪吃蛇游戏，使用 Pygame 库...',
              chat: [],
              rag: []
            },
            desc: '初始化：装载地基(System)和任务(Task)。此时 Layer 1 & 2 建立。'
          },
          {
            user: null,
            ai_thinking: '需要查询 Pygame 的最新初始化代码...',
            action: '检索',
            layers: {
              base: 'System: 你是资深 Python 工程师...',
              task: 'Task: 编写贪吃蛇游戏，使用 Pygame 库...',
              chat: [],
              rag: [
                'Docs: Pygame.init() usage...',
                'Docs: Game loop pattern...'
              ]
            },
            desc: '思考与检索：发现需要知识补充，临时调取 RAG 资料到 Layer 4。'
          },
          {
            user: null,
            ai: '好的，这是一个基于 Pygame 的贪吃蛇基础代码...',
            action: '生成',
            layers: {
              base: 'System: 你是资深 Python 工程师...',
              task: 'Task: 编写贪吃蛇游戏，使用 Pygame 库...',
              chat: ['User: 写贪吃蛇', 'AI: [Code Block]'],
              rag: []
            },
            desc: '生成回答：RAG 资料用完即扔(节省空间)，对话写入 Layer 3 (Chat)。'
          },
          {
            user: '蛇移动得太快了，怎么调慢点？',
            action: '追问',
            layers: {
              base: 'System: 你是资深 Python 工程师...',
              task: 'Task: 编写贪吃蛇游戏，使用 Pygame 库...',
              chat: ['User: 写贪吃蛇', 'AI: [Code Block]', 'User: 调慢点'],
              rag: []
            },
            desc: '用户追问：新对话追加到 Layer 3。Layer 1 & 2 保持不变(0成本)。 '
          },
          {
            user: null,
            ai: '你可以调整 clock.tick(15) 中的数值...',
            action: '回复',
            layers: {
              base: 'System: 你是资深 Python 工程师...',
              task: 'Task: 编写贪吃蛇游戏，使用 Pygame 库...',
              chat: [
                'User: 写贪吃蛇',
                'AI: [Code Block]',
                'User: 调慢点',
                'AI: 调整 tick 值...'
              ],
              rag: []
            },
            desc: '持续对话：Layer 3 增长。如果太长，最上面的对话会被挤出去(滑动窗口)。'
          }
        ]
      },
      support: {
        name: '👩‍💼 客服助手场景',
        steps: [
          {
            user: '我的订单发货了吗？单号 12345',
            action: '接收',
            layers: {
              base: 'System: 你是电商客服，语气温柔...',
              task: 'Task: 处理订单查询请求...',
              chat: [],
              rag: []
            },
            desc: '接收消息：加载地基(System)。'
          },
          {
            user: null,
            ai_thinking: '查询订单系统 API...',
            action: '工具调用',
            layers: {
              base: 'System: 你是电商客服，语气温柔...',
              task: 'Task: 处理订单查询请求...',
              chat: ['User: 查单号 12345'],
              rag: ['API_Result: {id:12345, status:"shipped", loc:"Beijing"}']
            },
            desc: '调用工具/RAG：获取实时订单状态，放入 Layer 4。'
          },
          {
            user: null,
            ai: '亲，查到了哦！您的包裹已经在北京中转了。',
            action: '回复',
            layers: {
              base: 'System: 你是电商客服，语气温柔...',
              task: 'Task: 处理订单查询请求...',
              chat: ['User: 查单号 12345', 'AI: 在北京中转'],
              rag: []
            },
            desc: '完成回复：Layer 4 清空，对话保留在 Layer 3。'
          }
        ]
      }
    }
  }
}
