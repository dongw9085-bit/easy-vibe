export default {
  workflow: {
    title: '先玩一下：Agent 不是“聊天”，是“循环行动”',
    subtitle: '它会反复：观察 → 计划 → 用工具 → 检查结果。',
    reset: '重置',
    nextRound: '下一轮 ({round}/3)',
    taskTitle: '任务',
    task: '帮我找 3 篇 “Agent” 入门文章，并输出：标题 + 一句话总结。',
    roundTitle: '这一轮发生了什么？',
    logTitle: 'Agent 运行日志（示意）',
    steps: [
      { id: 'observe', name: '观察', icon: '👀' },
      { id: 'plan', name: '计划', icon: '🧩' },
      { id: 'act', name: '行动', icon: '🔧' },
      { id: 'check', name: '检查', icon: '✅' }
    ],
    scenarios: [
      {
        observe: '看到用户目标：要 3 篇入门文章 + 简短总结。',
        plan: '计划：1) 搜索关键词 2) 打开前几条 3) 抽取标题与要点。',
        act: '调用工具：web_search(query="agent introduction")。',
        check: '检查：结果里有 3 条可用链接，还缺“每条一句话总结”。'
      },
      {
        observe: '拿到链接列表，准备逐条打开并提取要点。',
        plan: '计划：依次 read_page 3 次，把内容压缩成一句话。',
        act: '调用工具：read_page(url=...) × 3。',
        check: '检查：信息够了，但标题格式不统一，需要整理输出。'
      },
      {
        observe: '材料齐全：标题 + 文章要点都已提取。',
        plan: '计划：统一格式，输出 Markdown 列表。',
        act: '组织输出：每条“标题 - 一句话总结”。',
        check: '完成：满足“3 条 + 一句话总结 + 可直接复制”。'
      }
    ]
  },
  levels: {
    title: 'Agent 能力分级（从聊天到协作）',
    subtitle: '拖动看看：等级越高，越像“能独立干活的同事”。',
    current: '当前：{name}',
    can: '能做什么',
    risk: '容易出的问题',
    example: '典型任务',
    levels: [
      {
        name: 'L0：纯对话',
        can: ['回答问题', '写文本/代码（但不执行）'],
        risk: ['只能“说”，不能“做”', '需要你手动分步骤'],
        example: '解释概念、写一段文案'
      },
      {
        name: 'L1：单工具',
        can: ['调用一个固定工具', '把结果解释给你'],
        risk: ['工具用错参数', '缺少复杂规划'],
        example: '只会查一次搜索/只会跑一次代码'
      },
      {
        name: 'L2：多工具',
        can: ['在多个工具间选择', '按需要组合调用'],
        risk: ['选择工具不稳', '权限与安全需要控制'],
        example: '搜索 + 打开网页 + 摘要'
      },
      {
        name: 'L3：多步骤执行',
        can: ['先计划后执行', '完成一串步骤', '记录中间结果'],
        risk: ['步骤漏/顺序错', '成本上升（更多调用）'],
        example: '读代码 → 改代码 → 跑测试 → 出报告'
      },
      {
        name: 'L4：自我纠错',
        can: ['失败后换策略', '用检查点避免跑偏'],
        risk: ['可能反复尝试（需要上限）', '更依赖监控与日志'],
        example: '测试失败后自动定位并尝试修复'
      },
      {
        name: 'L5：多 Agent 协作',
        can: ['多个角色分工', '并行处理任务', '合并结果'],
        risk: ['协作成本更高', '需要清晰协议与仲裁机制'],
        example: '研究员找资料 + 工程师实现 + 编辑写总结'
      }
    ]
  },
  architecture: {
    title: 'Agent 由哪些模块拼起来？',
    subtitle: '点一下模块，看它“负责什么”。',
    pipe: '用户目标 → 计划 → 工具调用 → 结果 → 再计划…',
    pipeSmall: '（记忆会贯穿整个过程）',
    input: '典型输入',
    output: '典型输出',
    modules: [
      {
        id: 'llm',
        icon: '🧠',
        name: 'LLM（大脑）',
        desc: '负责理解目标、生成计划、选择动作、组织语言输出。',
        input: '用户目标 + 当前状态 + 可用工具列表',
        output: '下一步计划 / 工具调用参数 / 最终回答'
      },
      {
        id: 'tools',
        icon: '🔧',
        name: 'Tools（手脚）',
        desc: '负责真正“做事”：搜索、读写文件、调用 API、运行命令。',
        input: 'tool_name + input_schema 参数',
        output: '工具执行结果（文本/数据/文件变更）'
      },
      {
        id: 'memory',
        icon: '💾',
        name: 'Memory（记忆）',
        desc: '把“已经做过什么、得到什么结果”存起来，避免重复与跑偏。',
        input: '对话历史 / 工具结果 / 当前任务状态',
        output: '可检索的上下文（短期/长期/工作记忆）'
      },
      {
        id: 'planner',
        icon: '🧩',
        name: 'Planning（规划）',
        desc: '把大目标拆成小步骤，并在失败时改计划（计划不是一次性的）。',
        input: '目标 + 约束（预算/时间/安全） + 当前进度',
        output: '步骤清单 / 下一步动作 / 停止条件'
      },
      {
        id: 'guard',
        icon: '🛡️',
        name: 'Guardrails（护栏）',
        desc: '限制风险：权限白名单、预算上限、敏感操作确认、沙箱执行。',
        input: '请求执行的动作 + 安全策略',
        output: '允许/拒绝/要求确认 + 审计日志'
      }
    ]
  },
  frameworkComparison: {
    title: '主流框架对比（先看“适配度”）',
    subtitle: '先选你的关注点，再看推荐。',
    headers: ['框架', '上手', '可控', '多 Agent', '适合做什么'],
    recommend: '此刻更推荐：{name}',
    focuses: [
      { id: 'start', label: '快速上手' },
      { id: 'control', label: '可控可调试' },
      { id: 'team', label: '多 Agent 协作' }
    ],
    frameworks: [
      {
        name: 'LangChain / LangGraph',
        learn: '中',
        control: '高',
        multi: '中',
        use: '可控的工具调用、工作流、企业集成'
      },
      {
        name: 'AutoGen',
        learn: '中',
        control: '中',
        multi: '高',
        use: '多 Agent 对话协作、编程/分析助手'
      },
      {
        name: 'CrewAI',
        learn: '低',
        control: '中',
        multi: '高',
        use: '角色分工清晰的团队协作任务'
      }
    ],
    reasons: {
      start: '概念更直观（角色+任务），适合先跑通一个最小团队。',
      team: '多 Agent 对话与协作是强项，适合需要分工的场景。',
      control: '把流程“画成图/写成步骤”，更利于调试、上线与长期维护。'
    }
  },
  challenges: {
    title: 'Agent 的挑战：没护栏就容易“翻车”',
    subtitle: '打开这些护栏，风险会明显下降。',
    score: '风险分数：{score}/100',
    toggles: {
      maxSteps: '最大迭代次数（防死循环）',
      budget: '预算上限（防烧钱）',
      confirm: '危险操作二次确认',
      sandbox: '沙箱执行（隔离系统）'
    },
    risksTitle: '常见风险',
    risks: [
      '重复尝试 → 死循环',
      '乱用工具 → 误删/误发',
      '外部内容注入 → 被带偏',
      '调用太多 → 成本失控'
    ],
    enabledTitle: '你现在开启了什么？',
    note: '建议：最少也要有“最大步数 + 确认”。',
    adviceTitle: '一句话建议',
    enabledNames: {
      maxSteps: '最大步数',
      budget: '预算上限',
      confirm: '二次确认',
      sandbox: '沙箱'
    },
    noneEnabled: '（都没开）',
    joiner: '、',
    advice: {
      baseline: '先加“最大步数”和“二次确认”，这是最低成本的安全感。',
      good: '很稳了：可以开始做更复杂的任务，但记得加日志与监控。',
      mid: '还不错：建议再加预算或沙箱，避免极端情况。',
      bad: '风险偏高：建议优先补护栏，再让 Agent 真去执行。'
    }
  },
  future: {
    title: 'Agent 的未来：更稳、更强、更协作',
    subtitle: '点一个趋势，看它意味着什么。',
    impact: '会带来什么？',
    prepare: '你现在能做什么准备？',
    trends: [
      {
        id: 'planning',
        label: '更强规划',
        desc: '把大目标拆成更合理的子任务，并能动态改计划。',
        impact: '更少跑题、更少漏步骤，复杂任务成功率更高。',
        prepare: '学会写“计划/检查点”，并把任务拆成可验收小块。'
      },
      {
        id: 'memory',
        label: '更好记忆',
        desc: '长期记住偏好、事实与项目状态，跨任务复用。',
        impact: '更像长期同事：越用越懂你，重复工作更少。',
        prepare: '设计记忆结构：短期/长期/工作记忆，并做好隐私与脱敏。'
      },
      {
        id: 'multi',
        label: '多 Agent 协作',
        desc: '多个角色并行处理，再由协调者合并输出。',
        impact: '大任务并行化，质量更稳（研究/实现/评审分工）。',
        prepare: '先把“角色边界”和“交付格式”定义清楚。'
      },
      {
        id: 'safety',
        label: '更强安全护栏',
        desc: '更细的权限、确认与审计，降低工具滥用风险。',
        impact: '更容易上线到真实业务场景，减少事故。',
        prepare: '默认开启：最大步数、预算上限、危险操作确认、沙箱。'
      }
    ]
  },
  memory: {
    title: '💾 Agent 的记忆系统',
    reset: '🔄 重置',
    chat: '💬 对话',
    emptyChat: '点击上方按钮开始对话',
    shortTerm: '⏱️ 短期记忆',
    working: '📝 工作记忆',
    longTerm: '🗄️ 长期记忆',
    empty: '空',
    tipShort: '短期',
    tipWorking: '工作',
    tipLong: '长期',
    tip: '=当前对话，',
    tip2: '=临时变量，',
    tip3: '=跨会话知识',
    fallbackReply: '收到',
    quickActions: ['我叫张三', '我喜欢 Python', '推荐编程书', '我叫什么？'],
    responses: {
      我叫张三: {
        reply: '好的，我记住了你叫张三。',
        op: { icon: '💾', text: '长期记忆: 姓名=张三' },
        longTerm: { category: '身份', content: '姓名: 张三' }
      },
      '我喜欢 Python': {
        reply: '收到！记录了你偏好 Python。',
        op: { icon: '💾', text: '工作记忆: 偏好=Python | 长期记忆: 技术偏好' },
        workingKey: '偏好',
        workingValue: 'Python',
        longTerm: { category: '偏好', content: '编程语言: Python' }
      },
      推荐编程书: {
        reply: '基于你偏好 Python，推荐《流畅的Python》。',
        op: { icon: '🔍', text: '检索工作记忆: 偏好=Python → 生成推荐' }
      },
      '我叫什么？': {
        reply: '你叫张三。',
        op: { icon: '🔍', text: '检索长期记忆: 姓名=张三' }
      }
    }
  },
  planningDemo: {
    title: '📋 Agent 的规划能力',
    logTitle: '📝 执行日志',
    running: '执行中',
    completed: '已完成',
    emptyLog: '点击"开始执行"查看过程',
    thinking: '🧠 正在思考',
    start: '▶ 开始执行',
    executing: '⏳ 执行中...',
    reset: '🔄 重置',
    stepsUnit: '{count} 步骤',
    callsUnit: '{count} 调用',
    tipPrefix: '规划核心：将复杂任务分解为',
    atomic: '原子操作',
    tipMiddle: '，根据上一步结果',
    dynamic: '动态调整',
    tipSuffix: '后续计划',
    timeLocale: 'zh-CN',
    tasks: [
      {
        id: 'simple',
        icon: '🌤️',
        name: '查天气',
        complexity: 'easy',
        complexityLabel: '简单',
        goal: '查询北京今天的天气',
        steps: [
          { name: '调用天气 API', tool: 'weather_api' },
          { name: '格式化结果', tool: 'formatter' }
        ],
        logs: [
          { type: 'think', icon: '🧠', message: '需要查询北京天气' },
          { type: 'action', icon: '🔧', message: 'weather_api(city="北京")' },
          { type: 'result', icon: '📥', message: '晴, 25°C, 空气质量良' },
          { type: 'complete', icon: '✅', message: '北京今天天气晴朗' }
        ]
      },
      {
        id: 'medium',
        icon: '📊',
        name: '数据分析',
        complexity: 'medium',
        complexityLabel: '中等',
        goal: '分析销售 CSV，找出销售额最高月份',
        steps: [
          { name: '读取 CSV', tool: 'file_reader' },
          { name: '解析数据', tool: 'data_parser' },
          { name: '聚合计算', tool: 'calculator' },
          { name: '生成报告', tool: 'report_generator' }
        ],
        logs: [
          { type: 'think', icon: '🧠', message: '读取销售数据文件' },
          {
            type: 'action',
            icon: '🔧',
            message: 'file_reader(path="sales.csv")'
          },
          { type: 'result', icon: '📥', message: '读取 1200 行数据' },
          { type: 'think', icon: '🧠', message: '解析数据结构' },
          { type: 'action', icon: '🔧', message: 'data_parser(data)' },
          { type: 'result', icon: '📥', message: '解析完成' },
          { type: 'think', icon: '🧠', message: '按月份聚合销售额' },
          {
            type: 'action',
            icon: '🔧',
            message: 'calculator.aggregate(by="month")'
          },
          { type: 'result', icon: '📥', message: '11月销售额最高 ¥320K' },
          { type: 'complete', icon: '✅', message: '分析完成' }
        ]
      },
      {
        id: 'complex',
        icon: '🔬',
        name: '研究报告',
        complexity: 'hard',
        complexityLabel: '复杂',
        goal: '调研 AI Agent 进展，撰写完整报告',
        steps: [
          { name: '搜索资讯', tool: 'web_search' },
          { name: '阅读文章', tool: 'web_reader' },
          { name: '提取信息', tool: 'extractor' },
          { name: '搜索厂商', tool: 'web_search' },
          { name: '生成大纲', tool: 'planner' },
          { name: '撰写报告', tool: 'writer' }
        ],
        logs: [
          { type: 'think', icon: '🧠', message: '搜索最新 AI Agent 资讯' },
          {
            type: 'action',
            icon: '🔧',
            message: 'web_search("AI Agent 2024")'
          },
          { type: 'result', icon: '📥', message: '找到 15 篇文章' },
          { type: 'action', icon: '🔧', message: 'web_reader(urls=[...])' },
          { type: 'result', icon: '📥', message: '成功读取内容' },
          { type: 'action', icon: '🔧', message: 'extractor(fields=[...])' },
          { type: 'result', icon: '📥', message: '提取 45 个数据点' },
          {
            type: 'action',
            icon: '🔧',
            message: 'web_search("AI Agent companies")'
          },
          {
            type: 'result',
            icon: '📥',
            message: 'OpenAI, Anthropic, Microsoft...'
          },
          { type: 'action', icon: '🔧', message: 'planner.generate_outline()' },
          { type: 'result', icon: '📥', message: '大纲生成完成' },
          { type: 'action', icon: '🔧', message: 'writer.generate_content()' },
          { type: 'complete', icon: '✅', message: '报告生成完成，2500字' }
        ]
      }
    ]
  },
  quickStart: {
    title: '🤖 Agent 初体验：从"能说"到"能做"',
    subtitle: '体验 Agent 如何自动调用工具完成任务',
    llmLabel: '普通 LLM',
    agentLabel: 'Agent 智能体',
    thinkingTitle: '🧠 思考过程',
    toolsTitle: '🔧 工具调用 ({count}个)',
    finalResponseTitle: '💬 最终回复',
    execute: '▶ 让 Agent 执行',
    reset: '🔄 重置对话',
    insightLabel: '💡 核心区别：',
    scenarios: [
      {
        id: 'weather',
        icon: '🌤️',
        name: '查天气',
        query: '北京今天天气怎么样？适合穿什么衣服？',
        llmResponse:
          '我无法获取实时天气信息。北京一般在春季比较温和，建议穿薄外套。',
        thinking:
          '用户想知道北京今天的天气和穿衣建议。我需要：1) 查询实时天气 2) 根据温度给出穿衣建议',
        tools: [
          {
            name: 'weather_api',
            params: '{"city": "北京", "date": "today"}',
            result: '☀️ 晴，15-25°C，空气质量良'
          }
        ],
        agentResponse:
          '北京今天天气晴朗，15-25°C，空气质量良。建议穿薄外套或长袖T恤，早晚温差较大，可以带件薄外套。',
        insight: 'Agent 调用天气 API 获取实时数据，LLM 只能基于训练数据推测。'
      },
      {
        id: 'calculate',
        icon: '🧮',
        name: '复杂计算',
        query:
          '帮我算一下：如果贷款100万，年利率4.2%，30年等额本息，每月还多少？总利息多少？',
        llmResponse:
          '根据公式计算，月供大约5000元左右，总利息约80万。这只是估算，建议用专业计算器。',
        thinking:
          '这是房贷计算问题，需要用到等额本息公式。月供 = 贷款本金 × 月利率 × (1+月利率)^还款月数 / [(1+月利率)^还款月数 - 1]',
        tools: [
          {
            name: 'calculator',
            params: '{"principal": 1000000, "rate": 0.042, "years": 30}',
            result: '月供: ¥4,890.19, 总利息: ¥760,468.40'
          }
        ],
        agentResponse:
          '计算结果：\n• 每月还款：¥4,890.19\n• 还款总额：¥1,760,468.40\n• 总利息：¥760,468.40\n\n30年下来利息约占本金的76%。',
        insight: 'Agent 调用计算器确保 100% 准确，LLM 心算可能出错。'
      },
      {
        id: 'stock',
        icon: '📈',
        name: '股票分析',
        query: '分析一下特斯拉股票最近的表现，并预测明天走势',
        llmResponse:
          '我无法获取实时股票数据。特斯拉是知名电动车公司，股价波动较大，建议查看专业财经网站。',
        thinking:
          '用户需要特斯拉股票的近期表现分析和预测。我需要：1) 获取最新股价 2) 获取历史数据 3) 进行技术分析',
        tools: [
          {
            name: 'stock_api',
            params: '{"symbol": "TSLA", "period": "1mo"}',
            result: '当前价: $248.50, 月涨幅: +12.3%, 成交量: 1.2亿'
          },
          {
            name: 'news_search',
            params: '{"query": "Tesla stock news", "limit": 5}',
            result: '找到5条相关新闻：财报超预期、新车型发布...'
          },
          {
            name: 'technical_analysis',
            params: '{"data": "TSLA_price_data", "indicators": ["MA", "RSI"]}',
            result: 'RSI: 68(接近超买), MA20: $235, 趋势: 上升'
          }
        ],
        agentResponse:
          '特斯拉(TSLA)最近表现：\n📈 月涨幅 +12.3%，现报 $248.50\n📊 技术指标：RSI 68(接近超买)，站上20日均线\n📰 消息面：财报超预期、新车型发布利好\n\n预测：短期可能回调，中长期看好。',
        insight: 'Agent 串联多个工具（股价+新闻+技术分析）完成复杂分析任务。'
      },
      {
        id: 'travel',
        icon: '✈️',
        name: '旅行规划',
        query:
          '帮我规划一个3天2晚的东京旅行，预算1万人民币，包含机票、酒店、景点',
        llmResponse:
          '东京是个好地方！我可以给你一些建议：浅草寺、东京塔、银座购物区都很值得去。预算1万可能有点紧张，建议提前预订。',
        thinking:
          '用户需要完整的东京3天2晚旅行规划。我需要：1) 查询机票价格 2) 搜索酒店 3) 推荐景点 4) 规划路线 5) 计算总预算',
        tools: [
          {
            name: 'flight_search',
            params:
              '{"from": "上海", "to": "东京", "depart": "2024-03-15", "return": "2024-03-17"}',
            result: '往返机票: ¥3,200 (春秋航空)'
          },
          {
            name: 'hotel_search',
            params:
              '{"city": "东京", "checkin": "2024-03-15", "nights": 2, "budget": 3000}',
            result: '新宿华盛顿酒店: ¥1,200/晚, 评分4.5'
          },
          {
            name: 'attractions_search',
            params: '{"city": "东京", "days": 3}',
            result: '推荐景点: 浅草寺、东京塔、涩谷十字路口、明治神宫、秋叶原'
          },
          {
            name: 'route_planner',
            params:
              '{"spots": ["浅草寺", "东京塔", "涩谷", "秋叶原"], "days": 3}',
            result:
              'Day1: 浅草寺→东京塔, Day2: 涩谷→明治神宫, Day3: 秋叶原→银座'
          },
          {
            name: 'budget_calculator',
            params:
              '{"flight": 3200, "hotel": 2400, "food": 1500, "transport": 500, "tickets": 800}',
            result: '总预算: ¥8,400 (剩余¥1,600用于购物)'
          }
        ],
        agentResponse:
          '✈️ 东京3天2晚行程规划\n\n📅 Day1: 浅草寺→东京塔\n📅 Day2: 涩谷→明治神宫\n📅 Day3: 秋叶原→银座\n\n💰 预算明细：\n• 往返机票: ¥3,200\n• 酒店2晚: ¥2,400\n• 餐饮: ¥1,500\n• 交通: ¥500\n• 门票: ¥800\n• 总计: ¥8,400 (剩余¥1,600购物)',
        insight: 'Agent 调用5个工具完成机票、酒店、景点、路线、预算的完整规划。'
      },
      {
        id: 'shopping',
        icon: '🛒',
        name: '智能购物',
        query:
          '我想买一台5000元左右的笔记本电脑，主要用于编程和轻度游戏，推荐几款并对比',
        llmResponse:
          '5000元预算可以买到不错的笔记本。推荐联想小新Pro、华为MateBook、小米RedmiBook。具体配置建议16GB内存、512GB SSD。',
        thinking:
          '用户需要5000元价位的编程+游戏笔记本推荐。我需要：1) 搜索当前热门机型 2) 获取详细规格参数 3) 查询实时价格 4) 查看用户评价 5) 进行性能对比',
        tools: [
          {
            name: 'product_search',
            params:
              '{"category": "laptop", "budget": 5000, "usage": "programming,gaming"}',
            result:
              '找到6款: 联想小新Pro16、ThinkBook14+、华为MateBook14、RedmiBook Pro15、荣耀MagicBook14、机械革命极光Pro'
          },
          {
            name: 'specs_query',
            params:
              '{"products": ["联想小新Pro16", "ThinkBook14+", "华为MateBook14"]}',
            result:
              '小新Pro16: R7-7840HS/16G/1TB/2.5K; ThinkBook14+: i5-13500H/16G/512G/2.8K; MateBook14: i5-1340P/16G/512G/2K触控'
          },
          {
            name: 'price_compare',
            params:
              '{"products": ["联想小新Pro16", "ThinkBook14+", "华为MateBook14"]}',
            result:
              '小新Pro16: ¥4,999; ThinkBook14+: ¥5,299; MateBook14: ¥5,499'
          },
          {
            name: 'reviews_search',
            params:
              '{"products": ["联想小新Pro16", "ThinkBook14+"], "source": "jd,tmall"}',
            result:
              '小新Pro16: 好评率96%,  praised for screen and performance; ThinkBook14+: 好评率94%, praised for build quality'
          },
          {
            name: 'benchmark_compare',
            params:
              '{"products": ["联想小新Pro16", "ThinkBook14+"], "tests": ["cpu", "gpu", "battery"]}',
            result:
              'CPU: 小新Pro16(R7) > ThinkBook14+(i5); GPU: 两者均为核显; 续航: ThinkBook14+ 8h > 小新Pro16 6.5h'
          }
        ],
        agentResponse:
          '💻 5000元笔记本推荐对比\n\n🥇 首选: 联想小新Pro16\n• 配置: R7-7840HS/16G/1TB/2.5K 120Hz\n• 价格: ¥4,999\n• 优势: 性能强、屏幕好、存储大\n• 适合: 编程+轻度游戏\n\n🥈 备选: ThinkBook14+\n• 配置: i5-13500H/16G/512G/2.8K\n• 价格: ¥5,299\n• 优势: 做工好、续航长、接口全\n• 适合: 商务办公+编程',
        insight:
          'Agent 调用5个工具完成搜索、查规格、比价格、看评价、跑分对比的完整购物决策。'
      },
      {
        id: 'report',
        icon: '📊',
        name: '研究报告',
        query:
          '帮我生成一份2024年新能源汽车行业分析报告，包含市场规模、主要玩家、技术趋势',
        llmResponse:
          '新能源汽车行业正在快速发展。特斯拉、比亚迪是行业领导者。市场规模预计持续增长，电池技术是关键。建议查阅专业行业报告获取详细数据。',
        thinking:
          '用户需要一份完整的新能源汽车行业分析报告。我需要：1) 查询最新市场数据 2) 搜索主要厂商信息 3) 获取技术发展趋势 4) 查找政策法规 5) 生成数据可视化 6) 整理成报告格式',
        tools: [
          {
            name: 'market_data',
            params:
              '{"industry": "NEV", "year": 2024, "metrics": ["size", "growth", "penetration"]}',
            result:
              '2024年全球NEV销量: 1,700万辆(+35%), 中国占比60%, 渗透率: 全球18%, 中国35%'
          },
          {
            name: 'company_search',
            params: '{"industry": "NEV", "ranking": "top10"}',
            result:
              'TOP5: 比亚迪(302万辆)、特斯拉(181万辆)、大众(77万辆)、吉利(68万辆)、上汽(63万辆)'
          },
          {
            name: 'tech_trends',
            params:
              '{"field": "NEV", "technologies": ["battery", "autonomous", "charging"]}',
            result:
              '电池: 固态电池量产在即, 能量密度>400Wh/kg; 智驾: L2+普及率>50%, L4开始商用; 充电: 800V高压平台普及, 5分钟补能200km'
          },
          {
            name: 'policy_search',
            params: '{"region": "global", "topic": "NEV_policy", "year": 2024}',
            result:
              '中国: 购置税减免延续至2027年; 欧盟: 2035年禁售燃油车; 美国: IRA法案补贴本土化生产'
          },
          {
            name: 'data_visualization',
            params:
              '{"type": "chart", "data": "NEV_market_share", "chart_type": "pie"}',
            result: '生成市场份额饼图: 比亚迪35%, 特斯拉21%, 其他44%'
          },
          {
            name: 'report_generator',
            params:
              '{"title": "2024新能源汽车行业分析报告", "sections": ["market", "players", "tech", "policy"], "format": "markdown"}',
            result: '报告已生成: 12页, 包含6个图表, 3个数据表格'
          }
        ],
        agentResponse:
          '📊 2024新能源汽车行业分析报告\n\n📈 市场规模\n• 全球销量: 1,700万辆 (+35%)\n• 中国市场占比: 60%\n• 全球渗透率: 18% (中国35%)\n\n🏆 主要玩家\n1. 比亚迪: 302万辆 (35%)\n2. 特斯拉: 181万辆 (21%)\n3. 大众: 77万辆\n\n🔋 技术趋势\n• 固态电池能量密度>400Wh/kg\n• L2+智驾普及率超50%\n• 800V高压快充普及\n\n📋 报告已生成: 12页完整分析',
        insight:
          'Agent 调用6个工具完成数据收集、分析、可视化和报告生成的完整研究流程。'
      },
      {
        id: 'code-run',
        icon: '💻',
        name: '代码执行',
        query: '生成一个1-100的随机数列表，找出其中的质数，并计算平均值',
        llmResponse:
          '我可以写出代码，但无法实际执行。质数是指只能被1和自身整除的数，比如2,3,5,7...',
        thinking:
          '用户需要：1) 生成随机数列表 2) 筛选质数 3) 计算平均值。我需要在沙箱中执行Python代码',
        tools: [
          {
            name: 'python_executor',
            params:
              '{"code": "import random; nums = [random.randint(1,100) for _ in range(20)]; primes = [n for n in nums if all(n%i!=0 for i in range(2,int(n**0.5)+1)) and n>1]; print(f\\"随机数: {nums}\\"); print(f\\"质数: {primes}\\"); print(f\\"平均值: {sum(nums)/len(nums):.2f}\\")"}',
            result:
              '随机数: [42, 17, 89, 23, 56, 71, 34, 91, 13, 67...]\n质数: [17, 89, 23, 71, 13, 67, 47, 79]\n平均值: 52.35'
          }
        ],
        agentResponse:
          '执行结果：\n🎲 生成20个随机数：42, 17, 89, 23, 56, 71...\n🔢 其中质数：17, 89, 23, 71, 13, 67, 47, 79 (共8个)\n📊 所有数平均值：52.35',
        insight: 'Agent 在沙箱中实际执行代码，LLM 只能推理无法验证结果。'
      },
      {
        id: 'data-analysis',
        icon: '📉',
        name: '数据分析',
        query: '分析一下我们公司上季度的销售数据，找出增长最快的产品线和地区',
        llmResponse:
          '我无法访问您公司的内部销售数据。建议您使用Excel或专业BI工具进行分析，关注同比和环比增长率。',
        thinking:
          '用户需要分析公司销售数据。我需要：1) 连接数据库获取销售数据 2) 按产品线分组统计 3) 按地区分组统计 4) 计算增长率 5) 生成可视化图表 6) 输出分析报告',
        tools: [
          {
            name: 'database_query',
            params:
              '{"table": "sales", "period": "Q4_2023", "fields": ["product", "region", "amount", "quantity"]}',
            result: '获取Q4销售记录: 15,230条, 涵盖12个产品线, 8个地区'
          },
          {
            name: 'data_groupby',
            params:
              '{"data": "sales_q4", "group": "product", "agg": ["sum", "count", "avg"]}',
            result:
              '产品线统计: 电子产品¥2.1M(+45%), 服装¥1.8M(+12%), 家居¥1.2M(+28%)...'
          },
          {
            name: 'data_groupby',
            params:
              '{"data": "sales_q4", "group": "region", "agg": ["sum", "growth"]}',
            result:
              '地区统计: 华东¥3.2M(+38%), 华南¥2.1M(+52%), 华北¥1.5M(+15%)...'
          },
          {
            name: 'growth_calculator',
            params:
              '{"current": "Q4_2023", "previous": "Q3_2023", "dimensions": ["product", "region"]}',
            result: '增长最快产品线: 电子产品+45%; 增长最快地区: 华南+52%'
          },
          {
            name: 'chart_generator',
            params:
              '{"type": "bar", "data": "product_growth", "title": "产品线增长率对比"}',
            result: '生成柱状图: 电子产品45%, 家居28%, 服装12%'
          },
          {
            name: 'chart_generator',
            params:
              '{"type": "map", "data": "region_sales", "title": "地区销售热力图"}',
            result: '生成中国地图热力图: 华东、华南为深色高值区'
          }
        ],
        agentResponse:
          '📊 Q4销售数据分析报告\n\n🏆 增长最快产品线\n1. 电子产品: +45% (¥2.1M)\n2. 家居用品: +28% (¥1.2M)\n3. 服装: +12% (¥1.8M)\n\n🌍 增长最快地区\n1. 华南: +52% (¥2.1M)\n2. 华东: +38% (¥3.2M)\n3. 西南: +22% (¥0.8M)\n\n💡 建议: 加大电子产品投入，重点拓展华南市场',
        insight:
          'Agent 调用6个工具完成数据查询、分组统计、增长率计算、可视化的完整分析流程。'
      }
    ]
  },
  toolUse: {
    title: '🔧 揭秘：Agent 如何调用工具？',
    steps: {
      analyze: '分析需求',
      choose: '选择工具',
      params: '构造参数',
      execute: '执行返回'
    },
    labels: {
      userWants: '用户想要：',
      extracted: '提取信息：',
      result: '结果',
      response: '💬 回复：'
    },
    buttons: {
      start: '▶ 开始演示',
      next: '下一步 →',
      reset: '🔄 重置'
    },
    tip: 'Tool Calling 本质：LLM 生成结构化文本（JSON），外部系统执行后返回结果',
    scenarios: [
      {
        id: 'weather',
        icon: '🌤️',
        name: '查天气',
        userInput: '明天上海需要带伞吗？',
        intent: {
          type: '天气查询',
          entities: ['明天', '上海'],
          confidence: 95
        },
        availableTools: [
          {
            name: 'weather_api',
            icon: '🌤️',
            description: '获取天气',
            selected: true,
            score: 95
          },
          {
            name: 'calculator',
            icon: '🧮',
            description: '数学计算',
            selected: false,
            score: 10
          }
        ],
        selectedTool: 'weather_api',
        finalParams: {
          tool: 'weather_api',
          params: { city: '上海', date: 'tomorrow' }
        },
        finalResponse: '明天上海有小雨，建议带伞。气温 8-15°C。'
      },
      {
        id: 'calculate',
        icon: '🧮',
        name: '计算',
        userInput: '1250 除以 25 乘以 8 等于多少',
        intent: {
          type: '数学计算',
          entities: ['1250', '25', '8'],
          confidence: 98
        },
        availableTools: [
          {
            name: 'weather_api',
            icon: '🌤️',
            description: '获取天气',
            selected: false,
            score: 5
          },
          {
            name: 'calculator',
            icon: '🧮',
            description: '数学计算',
            selected: true,
            score: 98
          }
        ],
        selectedTool: 'calculator',
        finalParams: {
          tool: 'calculator',
          params: { expression: '(1250/25)*8' }
        },
        finalResponse: '计算结果：400。'
      },
      {
        id: 'search',
        icon: '🔍',
        name: '搜索',
        userInput: '搜索最近关于人工智能的新闻',
        intent: { type: '信息检索', entities: ['AI', '新闻'], confidence: 92 },
        availableTools: [
          {
            name: 'web_search',
            icon: '🔍',
            description: '网络搜索',
            selected: true,
            score: 92
          },
          {
            name: 'calculator',
            icon: '🧮',
            description: '数学计算',
            selected: false,
            score: 5
          }
        ],
        selectedTool: 'web_search',
        finalParams: {
          tool: 'web_search',
          params: { query: 'AI news', max: 5 }
        },
        finalResponse: '为您找到 5 条最新 AI 新闻...'
      }
    ]
  }
}
