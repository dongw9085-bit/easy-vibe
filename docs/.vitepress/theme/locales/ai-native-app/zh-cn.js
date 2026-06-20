export default {
  common: {
    reset: '重置',
    replay: '重播'
  },
  flow: {
    title: 'AI 应用请求处理流程',
    subtitle: '点击"发送请求"，观察一次 AI 请求的完整生命周期',
    send: '发送请求',
    running: '处理中...',
    inputLabel: '输入',
    outputLabel: '输出',
    latencyLabel: '耗时',
    insightLabel: '关键洞察：',
    insight:
      'AI 应用的请求链路比传统应用更长，模型推理通常占总耗时的 60-80%。优化重点在于：Prompt 缓存、流式输出、异步处理。',
    steps: [
      {
        id: 'input',
        icon: '👤',
        name: '用户输入',
        en: 'User Input',
        detail:
          '用户通过自然语言输入请求。系统需要处理多种输入形式：文本、语音转文字、图片描述等。与传统应用的表单提交不同，输入是开放式的、非结构化的。',
        input: '"帮我总结这篇文章的核心观点"',
        output: '{ text: "帮我总结...", type: "text", lang: "zh" }',
        latency: '~0ms',
        latencyPct: 2
      },
      {
        id: 'preprocess',
        icon: '🔧',
        name: '预处理',
        en: 'Preprocessing',
        detail:
          '对用户输入进行清洗和增强：意图识别、关键词提取、上下文拼接、RAG 检索相关文档片段、构建完整的 Prompt。这一步决定了模型能获得多少有效信息。',
        input: '{ text: "帮我总结...", context: [...历史对话] }',
        output:
          '{ system_prompt: "你是...", user_prompt: "...", retrieved_docs: [...] }',
        latency: '~200ms',
        latencyPct: 15
      },
      {
        id: 'model',
        icon: '🧠',
        name: '模型推理',
        en: 'Model Inference',
        detail:
          '将构建好的 Prompt 发送给大语言模型进行推理。这是整个链路中耗时最长的环节。模型会根据 Prompt 中的指令、上下文和检索到的知识，生成回答。',
        input: '{ messages: [...], model: "gpt-4", temperature: 0.7 }',
        output: '{ content: "这篇文章的核心观点有三个...", tokens: 256 }',
        latency: '~2-8s',
        latencyPct: 75
      },
      {
        id: 'postprocess',
        icon: '🛡️',
        name: '后处理',
        en: 'Post-processing',
        detail:
          '对模型输出进行安全检查和格式化：内容审核过滤、幻觉检测、格式转换（Markdown 渲染）、引用来源标注、敏感信息脱敏等。',
        input: '{ raw_output: "这篇文章的核心观点有三个..." }',
        output:
          '{ safe: true, formatted: "## 核心观点\\n1. ...", sources: [...] }',
        latency: '~100ms',
        latencyPct: 8
      },
      {
        id: 'response',
        icon: '💬',
        name: '响应输出',
        en: 'Response',
        detail:
          '将处理后的结果以流式方式返回给用户。前端逐步渲染 Markdown 内容，同时展示引用来源和置信度。用户可以在生成过程中随时中断或追问。',
        input: '{ formatted: "## 核心观点\\n1. ...", stream: true }',
        output: '用户看到逐字出现的回答 + 来源引用',
        latency: '~50ms (首字节)',
        latencyPct: 5
      }
    ]
  },
  principles: {
    title: 'AI 原生设计原则',
    subtitle: '点击卡片，深入了解每条设计原则',
    exampleTitle: '实践对比',
    badLabel: '反面示例',
    goodLabel: '正确做法',
    checklistTitle: '检查清单',
    items: [
      {
        id: 'graceful',
        icon: '🛡️',
        name: '优雅降级',
        brief: 'AI 失败时，系统仍然可用',
        detail:
          'AI 模型可能超时、返回错误、产生幻觉。优雅降级意味着：当 AI 不可用时，系统应该有兜底方案，而不是直接崩溃。这是 AI 原生应用与玩具项目的分水岭。',
        bad: '模型 API 超时后，页面显示空白错误页，用户只能刷新重试。',
        good: '模型超时后，显示缓存的上一次回答或推荐相关文档，同时后台自动重试。',
        checklist: [
          '设置合理的 API 超时时间（通常 30-60s）',
          '准备降级方案：缓存、规则引擎、人工转接',
          '向用户透明地展示当前状态',
          '记录失败日志用于后续优化'
        ]
      },
      {
        id: 'human',
        icon: '🤝',
        name: '人机协作',
        brief: '关键决策由人类确认',
        detail:
          'AI 擅长生成和建议，但不应该在高风险场景中自主决策。人机协作（Human-in-the-Loop）模式让 AI 负责草稿和推荐，人类负责审核和确认。',
        bad: 'AI 自动发送邮件给客户，内容未经人工审核，导致错误信息传播。',
        good: 'AI 生成邮件草稿并高亮不确定的部分，用户审核修改后手动发送。',
        checklist: [
          '识别哪些操作是"高风险"的（发送、删除、支付）',
          '高风险操作前必须有人工确认步骤',
          'AI 输出标注置信度，低置信内容需人工复核',
          '提供便捷的编辑和修改界面'
        ]
      },
      {
        id: 'transparent',
        icon: '🔍',
        name: '透明可解释',
        brief: '让用户理解 AI 的推理过程',
        detail:
          'AI 不是黑盒魔法。用户需要知道 AI 为什么给出这个回答、依据了哪些信息、有多大把握。透明性建立信任，也帮助用户判断何时该相信 AI、何时该质疑。',
        bad: 'AI 直接给出一个结论，没有任何解释或来源引用，用户无法判断可靠性。',
        good: '回答附带推理过程、引用来源链接、置信度指示，用户可以追溯验证。',
        checklist: [
          '展示 AI 的推理链路或思考过程',
          '标注信息来源和引用',
          '显示置信度或不确定性指标',
          '提供"为什么这样回答"的解释入口'
        ]
      },
      {
        id: 'feedback',
        icon: '🔄',
        name: '反馈闭环',
        brief: '用户反馈驱动持续改进',
        detail:
          '每一次用户交互都是改进的机会。通过收集用户对 AI 输出的评价（点赞/点踩、修改记录、追问模式），持续优化 Prompt、微调模型、改进检索策略。',
        bad: 'AI 回答错误后，没有任何反馈渠道，同样的错误会反复出现。',
        good: '用户可以标记错误回答，系统自动收集并用于优化 Prompt 和检索策略。',
        checklist: [
          '提供简单的反馈机制（👍👎 按钮）',
          '记录用户的修改和追问作为隐式反馈',
          '定期分析反馈数据，优化 Prompt 模板',
          '建立 A/B 测试机制验证改进效果'
        ]
      }
    ]
  },
  architecture: {
    title: '传统应用 vs AI 原生应用',
    subtitle: '切换视图，对比两种架构的核心差异',
    traditionalButton: '传统应用',
    aiNativeButton: 'AI 原生应用',
    techLabel: '典型技术',
    placeholder: '点击左侧层级查看详情',
    differenceLabel: '核心区别：',
    difference: {
      traditional: '传统应用的逻辑由开发者用 if/else 硬编码，行为完全确定。',
      aiNative:
        'AI 原生应用的核心逻辑由模型驱动，行为具有概率性，需要全新的设计思维。'
    },
    architectures: {
      traditional: {
        label: '传统应用架构',
        layers: [
          {
            icon: '🖥️',
            name: '前端 UI',
            color: '#3b82f6',
            brief: '用户界面与交互',
            detail:
              '基于确定性的表单、按钮、页面路由。用户操作触发固定的业务流程，所有交互路径在开发时已经确定。',
            techs: ['React', 'Vue', 'HTML/CSS']
          },
          {
            icon: '⚙️',
            name: '业务逻辑层',
            color: '#8b5cf6',
            brief: '硬编码的规则引擎',
            detail:
              '开发者用 if/else、switch/case 编写所有业务规则。每一条路径都需要人工预设，无法处理规则之外的情况。',
            techs: ['Node.js', 'Java', 'Python']
          },
          {
            icon: '🗄️',
            name: '数据存储',
            color: '#06b6d4',
            brief: '结构化数据管理',
            detail:
              '关系型数据库存储结构化数据，Schema 固定。数据的读写遵循严格的 CRUD 模式。',
            techs: ['MySQL', 'PostgreSQL', 'Redis']
          },
          {
            icon: '🔌',
            name: 'API 接口',
            color: '#10b981',
            brief: '固定的请求/响应',
            detail:
              '每个 API 端点返回确定性的结果。相同的输入永远产生相同的输出，行为完全可预测。',
            techs: ['REST', 'GraphQL', 'gRPC']
          }
        ]
      },
      'ai-native': {
        label: 'AI 原生应用架构',
        layers: [
          {
            icon: '💬',
            name: '自然语言交互层',
            color: '#f59e0b',
            brief: '对话式 + 流式输出',
            detail:
              '用户通过自然语言表达意图，系统以流式方式逐步生成响应。交互不再是固定的表单，而是开放式的对话。',
            techs: ['Streaming UI', 'Markdown 渲染', 'SSE']
          },
          {
            icon: '🧠',
            name: '模型推理层',
            color: '#ef4444',
            brief: 'LLM 驱动的决策引擎',
            detail:
              '核心逻辑不再是 if/else，而是由大语言模型根据 Prompt 和上下文进行推理。输出具有概率性，同样的输入可能产生不同的结果。',
            techs: ['GPT-4', 'Claude', 'Prompt 工程']
          },
          {
            icon: '🔗',
            name: '编排与工具层',
            color: '#8b5cf6',
            brief: 'Agent 编排 + 工具调用',
            detail:
              '模型可以调用外部工具（搜索、数据库、API）来获取实时信息。编排层负责管理多步推理、工具选择和结果整合。',
            techs: ['LangChain', 'Function Calling', 'RAG']
          },
          {
            icon: '📦',
            name: '上下文管理层',
            color: '#06b6d4',
            brief: '向量数据库 + 记忆系统',
            detail:
              '使用向量数据库存储和检索非结构化知识。通过 Embedding 将文本转化为语义向量，实现基于含义的搜索而非关键词匹配。',
            techs: ['Pinecone', 'ChromaDB', 'Embedding']
          },
          {
            icon: '🛡️',
            name: '安全与护栏层',
            color: '#10b981',
            brief: '输出过滤 + 幻觉检测',
            detail:
              'AI 输出不可完全信任，需要护栏机制：内容过滤、事实核查、幻觉检测、敏感信息脱敏等。这是传统应用不需要的全新层级。',
            techs: ['Guardrails', '内容审核', '事实校验']
          }
        ]
      }
    }
  },
  ux: {
    title: 'AI 原生交互模式',
    subtitle: '点击卡片，体验每种 AI 交互模式的效果',
    demoSuffix: '演示',
    notes: {
      streaming: '逐字输出，用户无需等待完整响应',
      loading: '分阶段展示进度，而非单一的"加载中"',
      confidence: '让用户知道 AI 对自己的回答有多"确定"',
      fallback: 'AI 不确定时，优雅降级而非强行回答'
    },
    fallbackFlow: [
      'AI 尝试回答...',
      '检测到不确定',
      '提示用户：此回答可能不准确',
      '提供替代方案',
      '转接人工 / 推荐文档 / 换个方式提问'
    ],
    detailLabel: '设计要点',
    patterns: [
      {
        id: 'streaming',
        icon: '💬',
        name: '流式输出',
        brief: '逐字生成，即时反馈',
        detail:
          '流式输出让用户在 AI 思考时就能看到部分结果，大幅降低感知等待时间。技术上通过 SSE（Server-Sent Events）或 WebSocket 实现，前端逐步渲染 Markdown 内容。'
      },
      {
        id: 'loading',
        icon: '⏳',
        name: '智能加载态',
        brief: '分阶段展示处理进度',
        detail:
          'AI 请求通常需要数秒，传统的转圈加载会让用户焦虑。智能加载态将处理过程拆解为可见的步骤（理解问题 → 检索知识 → 生成回答），让等待变得可预期。'
      },
      {
        id: 'confidence',
        icon: '📊',
        name: '置信度指示',
        brief: '展示 AI 的确定程度',
        detail:
          'AI 的输出具有概率性，不同回答的可靠程度不同。通过置信度指示器，用户可以判断哪些信息可以直接采纳，哪些需要二次验证。这是 AI 原生应用透明性的核心体现。'
      },
      {
        id: 'fallback',
        icon: '🛡️',
        name: '优雅降级',
        brief: '不确定时的兜底策略',
        detail:
          '当 AI 无法给出可靠回答时，不应该硬编一个答案。优雅降级策略包括：坦诚告知不确定性、提供替代信息源、转接人工服务、引导用户换个方式提问。'
      }
    ],
    fullText:
      'React 是一个用于构建用户界面的 JavaScript 库。它采用组件化的开发模式，让你可以将复杂的 UI 拆分成独立的、可复用的小模块。',
    loadingStages: [
      '理解用户意图...',
      '检索相关知识...',
      '组织回答内容...',
      '生成最终响应'
    ],
    confidenceItems: [
      {
        text: 'React 由 Meta 开发',
        score: 98,
        level: '高置信',
        color: '#10b981'
      },
      {
        text: '全球约 40% 的网站使用 React',
        score: 72,
        level: '中置信',
        color: '#f59e0b'
      },
      {
        text: 'React 19 将在下月发布',
        score: 35,
        level: '低置信',
        color: '#ef4444'
      }
    ]
  },
  prompt: {
    title: 'Prompt 工程实验室',
    subtitle: '修改 Prompt 结构，观察输出质量的变化',
    systemLabel: 'System Prompt（系统指令）',
    userLabel: 'User Prompt（用户输入）',
    systemPlaceholder: '设定 AI 的角色和行为规则...',
    userPlaceholder: '用户的具体问题或指令...',
    run: '模拟生成',
    outputLabel: '模拟输出',
    generating: '生成中...',
    placeholder: '点击"模拟生成"查看效果',
    qualityLabel: '输出质量评估',
    tipsLabel: 'Prompt 技巧：',
    templates: [
      { id: 'bad', icon: '❌', name: '模糊提问' },
      { id: 'basic', icon: '📝', name: '基础结构' },
      { id: 'good', icon: '✅', name: '最佳实践' }
    ],
    data: {
      bad: {
        system: '',
        user: '帮我写个介绍',
        output:
          '好的，这是一个介绍：\n\n大家好，我是一个人，我喜欢很多东西。我觉得生活很有趣。谢谢大家。\n\n（输出模糊、缺乏方向、没有实际价值）',
        quality: [
          { name: '相关性', score: 20, color: '#ef4444' },
          { name: '具体性', score: 10, color: '#ef4444' },
          { name: '可用性', score: 15, color: '#ef4444' }
        ],
        tip: '没有 System Prompt，没有上下文，问题过于模糊 —— AI 只能猜测你的意图。'
      },
      basic: {
        system: '你是一个技术文档写手。',
        user: '帮我写一段关于 React 的介绍，大约100字。',
        output:
          'React 是由 Meta（原 Facebook）开发的开源 JavaScript 库，用于构建用户界面。它采用组件化开发模式和虚拟 DOM 技术，能够高效地更新和渲染页面。React 的声明式编程风格让开发者可以更直观地描述 UI 状态，广泛应用于现代 Web 开发中。',
        quality: [
          { name: '相关性', score: 70, color: '#f59e0b' },
          { name: '具体性', score: 65, color: '#f59e0b' },
          { name: '可用性', score: 60, color: '#f59e0b' }
        ],
        tip: '有了角色设定和基本约束（字数），输出质量明显提升，但仍缺少格式和受众定义。'
      },
      good: {
        system:
          '你是一位资深前端技术博主。写作风格：简洁专业，善用类比。目标读者：编程初学者。输出格式：先用一句话总结，再展开说明，最后给出一个生活类比。',
        user: '请介绍 React 是什么，以及为什么它如此流行。控制在150字以内。',
        output:
          '一句话总结：React 是一个帮你高效搭建网页界面的 JavaScript 工具库。\n\n展开说明：React 由 Meta 团队开发，核心理念是"组件化"——把复杂页面拆成独立的小积木，每个积木管理自己的状态和外观。它的虚拟 DOM 机制能智能计算最小更新范围，避免不必要的页面重绘。\n\n生活类比：如果网页是一面乐高墙，React 就是那套标准化的乐高积木系统——你可以独立替换任何一块，而不用推倒重来。',
        quality: [
          { name: '相关性', score: 95, color: '#10b981' },
          { name: '具体性', score: 90, color: '#10b981' },
          { name: '可用性', score: 95, color: '#10b981' }
        ],
        tip: '角色 + 风格 + 受众 + 格式 + 约束 = 高质量输出。好的 Prompt 就是好的需求文档。'
      }
    }
  }
}
