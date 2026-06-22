export default {
  workflow: {
    title: 'Try it first: an Agent is not chat, it is an action loop',
    subtitle: 'It repeats: observe → plan → use tools → check results.',
    reset: 'Reset',
    nextRound: 'Next round ({round}/3)',
    taskTitle: 'Task',
    task: 'Find 3 beginner articles about “Agent” and output: title + one-sentence summary.',
    roundTitle: 'What happened in this round?',
    logTitle: 'Agent run log (example)',
    steps: [
      { id: 'observe', name: 'Observe', icon: '👀' },
      { id: 'plan', name: 'Plan', icon: '🧩' },
      { id: 'act', name: 'Act', icon: '🔧' },
      { id: 'check', name: 'Check', icon: '✅' }
    ],
    scenarios: [
      {
        observe: 'Saw the user goal: 3 beginner articles plus short summaries.',
        plan: 'Plan: 1) search keywords 2) open top results 3) extract titles and key points.',
        act: 'Call tool: web_search(query="agent introduction").',
        check:
          'Check: 3 usable links found, but one-sentence summaries are still missing.'
      },
      {
        observe:
          'Got the link list and will open each page to extract key points.',
        plan: 'Plan: run read_page 3 times and compress each page into one sentence.',
        act: 'Call tool: read_page(url=...) × 3.',
        check:
          'Check: enough information, but title formats need normalization.'
      },
      {
        observe:
          'Materials are ready: titles and article points have been extracted.',
        plan: 'Plan: normalize the format and output a Markdown list.',
        act: 'Compose output: each item as “title - one-sentence summary”.',
        check: 'Done: 3 items, one-sentence summaries, directly copyable.'
      }
    ]
  },
  levels: {
    title: 'Agent Capability Levels: from chat to collaboration',
    subtitle:
      'Drag the slider: higher levels feel more like an independent coworker.',
    current: 'Current: {name}',
    can: 'What it can do',
    risk: 'Common problems',
    example: 'Typical task',
    levels: [
      {
        name: 'L0: pure chat',
        can: ['Answer questions', 'Write text/code without executing it'],
        risk: ['Can only talk, not act', 'You must split steps manually'],
        example: 'Explain a concept or write copy'
      },
      {
        name: 'L1: single tool',
        can: ['Call one fixed tool', 'Explain the result'],
        risk: ['Wrong tool parameters', 'No complex planning'],
        example: 'Run one search or one code execution'
      },
      {
        name: 'L2: multiple tools',
        can: ['Choose among tools', 'Combine calls as needed'],
        risk: [
          'Tool choice may be unstable',
          'Permissions and safety need control'
        ],
        example: 'Search + open web page + summarize'
      },
      {
        name: 'L3: multi-step execution',
        can: [
          'Plan before acting',
          'Complete a chain of steps',
          'Record intermediate results'
        ],
        risk: ['Missing or misordered steps', 'Higher cost from more calls'],
        example: 'Read code → edit code → run tests → report'
      },
      {
        name: 'L4: self-correction',
        can: [
          'Change strategy after failure',
          'Use checkpoints to stay on track'
        ],
        risk: [
          'May retry repeatedly without limits',
          'Depends more on monitoring and logs'
        ],
        example: 'Locate and try to fix failing tests automatically'
      },
      {
        name: 'L5: multi-agent collaboration',
        can: [
          'Split roles across agents',
          'Process tasks in parallel',
          'Merge results'
        ],
        risk: [
          'Coordination cost is higher',
          'Requires clear protocols and arbitration'
        ],
        example:
          'Researcher gathers sources + engineer implements + editor summarizes'
      }
    ]
  },
  architecture: {
    title: 'What modules make up an Agent?',
    subtitle: 'Click a module to see what it is responsible for.',
    pipe: 'User goal → plan → tool call → result → re-plan…',
    pipeSmall: '(Memory runs through the whole process)',
    input: 'Typical input',
    output: 'Typical output',
    modules: [
      {
        id: 'llm',
        icon: '🧠',
        name: 'LLM (brain)',
        desc: 'Understands goals, generates plans, chooses actions, and writes final responses.',
        input: 'User goal + current state + available tool list',
        output: 'Next-step plan / tool call arguments / final answer'
      },
      {
        id: 'tools',
        icon: '🔧',
        name: 'Tools (hands)',
        desc: 'Do the real work: search, read/write files, call APIs, and run commands.',
        input: 'tool_name + input_schema arguments',
        output: 'Tool result: text, data, or file changes'
      },
      {
        id: 'memory',
        icon: '💾',
        name: 'Memory',
        desc: 'Stores what has been done and what results were obtained to avoid repetition and drift.',
        input: 'Conversation history / tool results / current task state',
        output: 'Retrievable context: short-term, long-term, and working memory'
      },
      {
        id: 'planner',
        icon: '🧩',
        name: 'Planning',
        desc: 'Breaks large goals into smaller steps and changes the plan after failure.',
        input: 'Goal + constraints such as budget, time, safety + progress',
        output: 'Step list / next action / stop condition'
      },
      {
        id: 'guard',
        icon: '🛡️',
        name: 'Guardrails',
        desc: 'Limits risk with allowlists, budgets, confirmations, and sandbox execution.',
        input: 'Requested action + safety policy',
        output: 'Allow / reject / require confirmation + audit log'
      }
    ]
  },
  frameworkComparison: {
    title: 'Mainstream framework comparison: start with fit',
    subtitle: 'Choose your priority first, then read the recommendation.',
    headers: ['Framework', 'Learning', 'Control', 'Multi-Agent', 'Best for'],
    recommend: 'Recommended now: {name}',
    focuses: [
      { id: 'start', label: 'Quick start' },
      { id: 'control', label: 'Control/debugging' },
      { id: 'team', label: 'Multi-Agent collaboration' }
    ],
    frameworks: [
      {
        name: 'LangChain / LangGraph',
        learn: 'Medium',
        control: 'High',
        multi: 'Medium',
        use: 'Controllable tool calls, workflows, and enterprise integration'
      },
      {
        name: 'AutoGen',
        learn: 'Medium',
        control: 'Medium',
        multi: 'High',
        use: 'Multi-agent conversation, programming, and analysis assistants'
      },
      {
        name: 'CrewAI',
        learn: 'Low',
        control: 'Medium',
        multi: 'High',
        use: 'Team tasks with clear role division'
      }
    ],
    reasons: {
      start:
        'The role + task model is intuitive and good for getting a minimal team running.',
      team: 'Multi-agent conversation and collaboration are its strengths.',
      control:
        'Representing flows as graphs or steps makes debugging, launch, and maintenance easier.'
    }
  },
  challenges: {
    title: 'Agent challenges: without guardrails, things go off track',
    subtitle: 'Turn on these guardrails and the risk drops visibly.',
    score: 'Risk score: {score}/100',
    toggles: {
      maxSteps: 'Max iterations (avoid infinite loops)',
      budget: 'Budget limit (avoid runaway cost)',
      confirm: 'Second confirmation for dangerous actions',
      sandbox: 'Sandbox execution (isolate the system)'
    },
    risksTitle: 'Common risks',
    risks: [
      'Repeated attempts → infinite loop',
      'Wrong tool use → accidental deletion or sending',
      'External prompt injection → task drift',
      'Too many calls → cost out of control'
    ],
    enabledTitle: 'What is enabled now?',
    note: 'Recommendation: at least use “max steps + confirmation”.',
    adviceTitle: 'One-line advice',
    enabledNames: {
      maxSteps: 'max steps',
      budget: 'budget limit',
      confirm: 'second confirmation',
      sandbox: 'sandbox'
    },
    noneEnabled: '(none enabled)',
    joiner: ', ',
    advice: {
      baseline:
        'Add “max steps” and “second confirmation” first. They are the lowest-cost safety baseline.',
      good: 'Stable enough: you can try more complex tasks, but keep logs and monitoring.',
      mid: 'Decent: add a budget or sandbox to handle edge cases.',
      bad: 'Risk is high: add guardrails before letting the Agent execute for real.'
    }
  },
  future: {
    title: 'The future of Agents: steadier, stronger, more collaborative',
    subtitle: 'Choose a trend to see what it means.',
    impact: 'What will it change?',
    prepare: 'What can you prepare now?',
    trends: [
      {
        id: 'planning',
        label: 'Stronger planning',
        desc: 'Break large goals into better subtasks and adjust plans dynamically.',
        impact:
          'Less drift, fewer missed steps, and higher success rates on complex tasks.',
        prepare:
          'Learn to write plans and checkpoints, and split tasks into verifiable chunks.'
      },
      {
        id: 'memory',
        label: 'Better memory',
        desc: 'Remember preferences, facts, and project state across tasks.',
        impact:
          'More like a long-term coworker: it understands you better and repeats less work.',
        prepare:
          'Design short-term, long-term, and working memory with privacy controls.'
      },
      {
        id: 'multi',
        label: 'Multi-Agent collaboration',
        desc: 'Multiple roles work in parallel, then a coordinator merges outputs.',
        impact:
          'Large tasks become parallel and more stable through research/implementation/review roles.',
        prepare: 'Define role boundaries and delivery formats clearly.'
      },
      {
        id: 'safety',
        label: 'Stronger guardrails',
        desc: 'Finer permissions, confirmations, and audits reduce tool misuse risk.',
        impact:
          'Easier to deploy in real business scenarios with fewer incidents.',
        prepare:
          'Enable max steps, budget limits, dangerous-action confirmation, and sandboxing by default.'
      }
    ]
  },
  memory: {
    title: '💾 Agent Memory System',
    reset: '🔄 Reset',
    chat: '💬 Conversation',
    emptyChat: 'Click a button above to start the conversation',
    shortTerm: '⏱️ Short-term memory',
    working: '📝 Working memory',
    longTerm: '🗄️ Long-term memory',
    empty: 'Empty',
    tipShort: 'Short-term',
    tipWorking: 'working',
    tipLong: 'long-term',
    tip: '=current conversation, ',
    tip2: '=temporary variables, ',
    tip3: '=cross-session knowledge',
    fallbackReply: 'Got it',
    quickActions: [
      'My name is Zhang San',
      'I like Python',
      'Recommend a programming book',
      'What is my name?'
    ],
    responses: {
      'My name is Zhang San': {
        reply: 'OK, I remembered that your name is Zhang San.',
        op: { icon: '💾', text: 'Long-term memory: name=Zhang San' },
        longTerm: { category: 'Identity', content: 'Name: Zhang San' }
      },
      'I like Python': {
        reply: 'Got it. I recorded your Python preference.',
        op: {
          icon: '💾',
          text: 'Working memory: preference=Python | Long-term memory: technical preference'
        },
        workingKey: 'Preference',
        workingValue: 'Python',
        longTerm: {
          category: 'Preference',
          content: 'Programming language: Python'
        }
      },
      'Recommend a programming book': {
        reply: 'Based on your Python preference, I recommend Fluent Python.',
        op: {
          icon: '🔍',
          text: 'Retrieve working memory: preference=Python → generate recommendation'
        }
      },
      'What is my name?': {
        reply: 'Your name is Zhang San.',
        op: { icon: '🔍', text: 'Retrieve long-term memory: name=Zhang San' }
      }
    }
  },
  planningDemo: {
    title: '📋 Agent Planning Ability',
    logTitle: '📝 Execution log',
    running: 'Running',
    completed: 'Completed',
    emptyLog: 'Click “Start execution” to see the process',
    thinking: '🧠 Thinking now',
    start: '▶ Start execution',
    executing: '⏳ Running...',
    reset: '🔄 Reset',
    stepsUnit: '{count} steps',
    callsUnit: '{count} calls',
    tipPrefix: 'Planning means splitting complex tasks into ',
    atomic: 'atomic operations',
    tipMiddle: ', then ',
    dynamic: 'dynamically adjusting',
    tipSuffix: ' later steps based on previous results',
    timeLocale: 'en-US',
    tasks: [
      {
        id: 'simple',
        icon: '🌤️',
        name: 'Check weather',
        complexity: 'easy',
        complexityLabel: 'Easy',
        goal: 'Check today’s weather in Beijing',
        steps: [
          { name: 'Call weather API', tool: 'weather_api' },
          { name: 'Format result', tool: 'formatter' }
        ],
        logs: [
          {
            type: 'think',
            icon: '🧠',
            message: 'Need to query Beijing weather'
          },
          {
            type: 'action',
            icon: '🔧',
            message: 'weather_api(city="Beijing")'
          },
          {
            type: 'result',
            icon: '📥',
            message: 'Sunny, 25°C, good air quality'
          },
          { type: 'complete', icon: '✅', message: 'Beijing is sunny today' }
        ]
      },
      {
        id: 'medium',
        icon: '📊',
        name: 'Data analysis',
        complexity: 'medium',
        complexityLabel: 'Medium',
        goal: 'Analyze a sales CSV and find the month with the highest sales',
        steps: [
          { name: 'Read CSV', tool: 'file_reader' },
          { name: 'Parse data', tool: 'data_parser' },
          { name: 'Aggregate values', tool: 'calculator' },
          { name: 'Generate report', tool: 'report_generator' }
        ],
        logs: [
          { type: 'think', icon: '🧠', message: 'Read the sales data file' },
          {
            type: 'action',
            icon: '🔧',
            message: 'file_reader(path="sales.csv")'
          },
          { type: 'result', icon: '📥', message: 'Read 1200 rows' },
          { type: 'think', icon: '🧠', message: 'Parse the data structure' },
          { type: 'action', icon: '🔧', message: 'data_parser(data)' },
          { type: 'result', icon: '📥', message: 'Parsing completed' },
          { type: 'think', icon: '🧠', message: 'Aggregate sales by month' },
          {
            type: 'action',
            icon: '🔧',
            message: 'calculator.aggregate(by="month")'
          },
          {
            type: 'result',
            icon: '📥',
            message: 'November has the highest sales: ¥320K'
          },
          { type: 'complete', icon: '✅', message: 'Analysis completed' }
        ]
      },
      {
        id: 'complex',
        icon: '🔬',
        name: 'Research report',
        complexity: 'hard',
        complexityLabel: 'Complex',
        goal: 'Research AI Agent progress and write a complete report',
        steps: [
          { name: 'Search news', tool: 'web_search' },
          { name: 'Read articles', tool: 'web_reader' },
          { name: 'Extract information', tool: 'extractor' },
          { name: 'Search companies', tool: 'web_search' },
          { name: 'Generate outline', tool: 'planner' },
          { name: 'Write report', tool: 'writer' }
        ],
        logs: [
          {
            type: 'think',
            icon: '🧠',
            message: 'Search for the latest AI Agent news'
          },
          {
            type: 'action',
            icon: '🔧',
            message: 'web_search("AI Agent 2024")'
          },
          { type: 'result', icon: '📥', message: 'Found 15 articles' },
          { type: 'action', icon: '🔧', message: 'web_reader(urls=[...])' },
          { type: 'result', icon: '📥', message: 'Content read successfully' },
          { type: 'action', icon: '🔧', message: 'extractor(fields=[...])' },
          { type: 'result', icon: '📥', message: 'Extracted 45 data points' },
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
          { type: 'result', icon: '📥', message: 'Outline generated' },
          { type: 'action', icon: '🔧', message: 'writer.generate_content()' },
          {
            type: 'complete',
            icon: '✅',
            message: 'Report generated, 2500 words'
          }
        ]
      }
    ]
  },
  quickStart: {
    title: '🤖 Agent first experience: from “can say” to “can do”',
    subtitle: 'See how an Agent automatically calls tools to complete tasks',
    llmLabel: 'Plain LLM',
    agentLabel: 'Agent',
    thinkingTitle: '🧠 Thinking process',
    toolsTitle: '🔧 Tool calls ({count})',
    finalResponseTitle: '💬 Final response',
    execute: '▶ Let the Agent run',
    reset: '🔄 Reset conversation',
    insightLabel: '💡 Core difference:',
    scenarios: [
      {
        id: 'weather',
        icon: '🌤️',
        name: 'Weather',
        query: 'What is the weather in Beijing today? What should I wear?',
        llmResponse:
          'I cannot fetch live weather. Beijing is usually mild in spring, so a light jacket is a reasonable guess.',
        thinking:
          'The user wants today’s Beijing weather and clothing advice. I need to: 1) query live weather 2) give clothing advice based on temperature.',
        tools: [
          {
            name: 'weather_api',
            params: '{"city": "Beijing", "date": "today"}',
            result: '☀️ Sunny, 15-25°C, good air quality'
          }
        ],
        agentResponse:
          'Beijing is sunny today, 15-25°C, with good air quality. Wear a light jacket or long-sleeve T-shirt. The morning and evening temperature gap is noticeable, so carrying a thin jacket is useful.',
        insight:
          'The Agent calls a weather API for live data, while the LLM can only infer from training data.'
      },
      {
        id: 'calculate',
        icon: '🧮',
        name: 'Calculation',
        query:
          'Help me calculate: for a 1,000,000 loan at 4.2% annual interest over 30 years with equal principal and interest, what is the monthly payment and total interest?',
        llmResponse:
          'Using the formula, the monthly payment is roughly around ¥5,000 and total interest around ¥800,000. This is only an estimate; use a professional calculator.',
        thinking:
          'This is a mortgage calculation. I need the equal-payment formula: monthly payment = principal × monthly rate × (1+monthly rate)^months / [(1+monthly rate)^months - 1].',
        tools: [
          {
            name: 'calculator',
            params: '{"principal": 1000000, "rate": 0.042, "years": 30}',
            result: 'Monthly payment: ¥4,890.19, total interest: ¥760,468.40'
          }
        ],
        agentResponse:
          'Calculation result:\n• Monthly payment: ¥4,890.19\n• Total repayment: ¥1,760,468.40\n• Total interest: ¥760,468.40\n\nOver 30 years, interest is about 76% of the principal.',
        insight:
          'The Agent uses a calculator for exact results; mental math by an LLM may be wrong.'
      },
      {
        id: 'stock',
        icon: '📈',
        name: 'Stock analysis',
        query:
          'Analyze Tesla stock performance recently and predict tomorrow’s trend.',
        llmResponse:
          'I cannot access live stock data. Tesla is a major EV company and its stock is volatile. Check professional finance sites for current data.',
        thinking:
          'The user needs recent Tesla performance and a short-term view. I need: 1) latest price 2) historical data 3) technical analysis.',
        tools: [
          {
            name: 'stock_api',
            params: '{"symbol": "TSLA", "period": "1mo"}',
            result:
              'Current price: $248.50, monthly change: +12.3%, volume: 120M'
          },
          {
            name: 'news_search',
            params: '{"query": "Tesla stock news", "limit": 5}',
            result:
              'Found 5 related news items: earnings beat expectations, new model release...'
          },
          {
            name: 'technical_analysis',
            params: '{"data": "TSLA_price_data", "indicators": ["MA", "RSI"]}',
            result: 'RSI: 68 (near overbought), MA20: $235, trend: upward'
          }
        ],
        agentResponse:
          'Tesla (TSLA) recent performance:\n📈 Monthly change +12.3%, now at $248.50\n📊 Technicals: RSI 68 (near overbought), above the 20-day moving average\n📰 News: earnings beat expectations and new model release are positive signals\n\nView: short-term pullback is possible; medium-to-long term outlook remains positive.',
        insight:
          'The Agent chains stock price, news, and technical-analysis tools to complete a more complex analysis.'
      },
      {
        id: 'travel',
        icon: '✈️',
        name: 'Travel plan',
        query:
          'Plan a 3-day, 2-night Tokyo trip with a ¥10,000 budget, including flights, hotel, and attractions.',
        llmResponse:
          'Tokyo is a great destination. Senso-ji, Tokyo Tower, and Ginza are worth visiting. A ¥10,000 budget may be tight, so book early.',
        thinking:
          'The user needs a full Tokyo itinerary. I need: 1) flight prices 2) hotel options 3) attractions 4) route plan 5) total budget.',
        tools: [
          {
            name: 'flight_search',
            params:
              '{"from": "Shanghai", "to": "Tokyo", "depart": "2024-03-15", "return": "2024-03-17"}',
            result: 'Round-trip flight: ¥3,200 (Spring Airlines)'
          },
          {
            name: 'hotel_search',
            params:
              '{"city": "Tokyo", "checkin": "2024-03-15", "nights": 2, "budget": 3000}',
            result: 'Shinjuku Washington Hotel: ¥1,200/night, rating 4.5'
          },
          {
            name: 'attractions_search',
            params: '{"city": "Tokyo", "days": 3}',
            result:
              'Recommended: Senso-ji, Tokyo Tower, Shibuya Crossing, Meiji Shrine, Akihabara'
          },
          {
            name: 'route_planner',
            params:
              '{"spots": ["Senso-ji", "Tokyo Tower", "Shibuya", "Akihabara"], "days": 3}',
            result:
              'Day1: Senso-ji → Tokyo Tower, Day2: Shibuya → Meiji Shrine, Day3: Akihabara → Ginza'
          },
          {
            name: 'budget_calculator',
            params:
              '{"flight": 3200, "hotel": 2400, "food": 1500, "transport": 500, "tickets": 800}',
            result: 'Total budget: ¥8,400 (¥1,600 left for shopping)'
          }
        ],
        agentResponse:
          '✈️ Tokyo 3-day itinerary\n\n📅 Day 1: Senso-ji → Tokyo Tower\n📅 Day 2: Shibuya → Meiji Shrine\n📅 Day 3: Akihabara → Ginza\n\n💰 Budget:\n• Round-trip flight: ¥3,200\n• Hotel for 2 nights: ¥2,400\n• Food: ¥1,500\n• Transport: ¥500\n• Tickets: ¥800\n• Total: ¥8,400 (¥1,600 left for shopping)',
        insight:
          'The Agent uses 5 tools to plan flights, hotel, attractions, routes, and budget together.'
      },
      {
        id: 'shopping',
        icon: '🛒',
        name: 'Shopping',
        query:
          'I want a laptop around ¥5,000 for programming and light gaming. Recommend a few and compare them.',
        llmResponse:
          'A ¥5,000 budget can buy a good laptop. Consider Lenovo Xiaoxin Pro, Huawei MateBook, or Xiaomi RedmiBook. Look for 16GB RAM and a 512GB SSD.',
        thinking:
          'The user needs a ¥5,000 laptop for programming and light gaming. I need: 1) search current models 2) fetch specs 3) compare real-time prices 4) review feedback 5) compare performance.',
        tools: [
          {
            name: 'product_search',
            params:
              '{"category": "laptop", "budget": 5000, "usage": "programming,gaming"}',
            result:
              'Found 6 models: Lenovo Xiaoxin Pro 16, ThinkBook 14+, Huawei MateBook 14, RedmiBook Pro 15, Honor MagicBook 14, Mechrevo Aurora Pro'
          },
          {
            name: 'specs_query',
            params:
              '{"products": ["Lenovo Xiaoxin Pro 16", "ThinkBook 14+", "Huawei MateBook 14"]}',
            result:
              'Xiaoxin Pro 16: R7-7840HS/16G/1TB/2.5K; ThinkBook 14+: i5-13500H/16G/512G/2.8K; MateBook 14: i5-1340P/16G/512G/2K touch'
          },
          {
            name: 'price_compare',
            params:
              '{"products": ["Lenovo Xiaoxin Pro 16", "ThinkBook 14+", "Huawei MateBook 14"]}',
            result:
              'Xiaoxin Pro 16: ¥4,999; ThinkBook 14+: ¥5,299; MateBook 14: ¥5,499'
          },
          {
            name: 'reviews_search',
            params:
              '{"products": ["Lenovo Xiaoxin Pro 16", "ThinkBook 14+"], "source": "jd,tmall"}',
            result:
              'Xiaoxin Pro 16: 96% positive, praised for screen and performance; ThinkBook 14+: 94% positive, praised for build quality'
          },
          {
            name: 'benchmark_compare',
            params:
              '{"products": ["Lenovo Xiaoxin Pro 16", "ThinkBook 14+"], "tests": ["cpu", "gpu", "battery"]}',
            result:
              'CPU: Xiaoxin Pro 16 (R7) > ThinkBook 14+ (i5); GPU: both integrated; battery: ThinkBook 14+ 8h > Xiaoxin Pro 16 6.5h'
          }
        ],
        agentResponse:
          '💻 ¥5,000 laptop recommendation\n\n🥇 Top pick: Lenovo Xiaoxin Pro 16\n• Specs: R7-7840HS/16G/1TB/2.5K 120Hz\n• Price: ¥4,999\n• Pros: strong performance, good screen, large storage\n• Best for: programming + light gaming\n\n🥈 Alternative: ThinkBook 14+\n• Specs: i5-13500H/16G/512G/2.8K\n• Price: ¥5,299\n• Pros: better build, longer battery, rich ports\n• Best for: business work + programming',
        insight:
          'The Agent uses search, specs, price comparison, reviews, and benchmarks to support a shopping decision.'
      },
      {
        id: 'report',
        icon: '📊',
        name: 'Research report',
        query:
          'Generate a 2024 new energy vehicle industry analysis report covering market size, main players, and technology trends.',
        llmResponse:
          'The new energy vehicle industry is growing quickly. Tesla and BYD are leading players. Market size should keep growing, and battery technology is key. Use professional reports for detailed data.',
        thinking:
          'The user needs a complete NEV industry report. I need: 1) latest market data 2) major companies 3) technology trends 4) policies 5) data visualization 6) report formatting.',
        tools: [
          {
            name: 'market_data',
            params:
              '{"industry": "NEV", "year": 2024, "metrics": ["size", "growth", "penetration"]}',
            result:
              '2024 global NEV sales: 17M (+35%), China share: 60%, penetration: global 18%, China 35%'
          },
          {
            name: 'company_search',
            params: '{"industry": "NEV", "ranking": "top10"}',
            result:
              'Top 5: BYD (3.02M), Tesla (1.81M), Volkswagen (0.77M), Geely (0.68M), SAIC (0.63M)'
          },
          {
            name: 'tech_trends',
            params:
              '{"field": "NEV", "technologies": ["battery", "autonomous", "charging"]}',
            result:
              'Battery: solid-state production approaching, density >400Wh/kg; ADAS: L2+ adoption >50%, L4 starts commercial use; charging: 800V platforms popular, 200km in 5 minutes'
          },
          {
            name: 'policy_search',
            params: '{"region": "global", "topic": "NEV_policy", "year": 2024}',
            result:
              'China: purchase-tax relief extended to 2027; EU: ICE sales ban in 2035; US: IRA subsidies favor local production'
          },
          {
            name: 'data_visualization',
            params:
              '{"type": "chart", "data": "NEV_market_share", "chart_type": "pie"}',
            result:
              'Generated market-share pie chart: BYD 35%, Tesla 21%, others 44%'
          },
          {
            name: 'report_generator',
            params:
              '{"title": "2024 NEV Industry Analysis Report", "sections": ["market", "players", "tech", "policy"], "format": "markdown"}',
            result: 'Report generated: 12 pages, 6 charts, 3 data tables'
          }
        ],
        agentResponse:
          '📊 2024 NEV Industry Analysis Report\n\n📈 Market size\n• Global sales: 17M (+35%)\n• China share: 60%\n• Global penetration: 18% (China 35%)\n\n🏆 Main players\n1. BYD: 3.02M units (35%)\n2. Tesla: 1.81M units (21%)\n3. Volkswagen: 0.77M units\n\n🔋 Technology trends\n• Solid-state battery density >400Wh/kg\n• L2+ driver assistance adoption above 50%\n• 800V fast-charging platforms becoming common\n\n📋 Report generated: complete 12-page analysis',
        insight:
          'The Agent uses 6 tools to collect data, analyze it, visualize it, and generate the report.'
      },
      {
        id: 'code-run',
        icon: '💻',
        name: 'Code run',
        query:
          'Generate a list of random numbers from 1 to 100, find the prime numbers, and calculate the average.',
        llmResponse:
          'I can write the code, but I cannot execute it. Prime numbers are divisible only by 1 and themselves, such as 2, 3, 5, 7...',
        thinking:
          'The user needs: 1) generate random numbers 2) filter primes 3) calculate the average. I need to execute Python code in a sandbox.',
        tools: [
          {
            name: 'python_executor',
            params:
              '{"code": "import random; nums = [random.randint(1,100) for _ in range(20)]; primes = [n for n in nums if all(n%i!=0 for i in range(2,int(n**0.5)+1)) and n>1]; print(f\\"numbers: {nums}\\"); print(f\\"primes: {primes}\\"); print(f\\"average: {sum(nums)/len(nums):.2f}\\")"}',
            result:
              'Numbers: [42, 17, 89, 23, 56, 71, 34, 91, 13, 67...]\nPrimes: [17, 89, 23, 71, 13, 67, 47, 79]\nAverage: 52.35'
          }
        ],
        agentResponse:
          'Execution result:\n🎲 Generated 20 random numbers: 42, 17, 89, 23, 56, 71...\n🔢 Prime numbers: 17, 89, 23, 71, 13, 67, 47, 79 (8 total)\n📊 Average of all numbers: 52.35',
        insight:
          'The Agent actually runs code in a sandbox; the LLM alone can only reason without verifying the result.'
      },
      {
        id: 'data-analysis',
        icon: '📉',
        name: 'Data analysis',
        query:
          'Analyze our company’s sales data from last quarter and find the fastest-growing product line and region.',
        llmResponse:
          'I cannot access your internal sales data. Use Excel or a BI tool and focus on year-over-year and quarter-over-quarter growth.',
        thinking:
          'The user needs company sales analysis. I need to: 1) query the database 2) group by product line 3) group by region 4) calculate growth 5) generate charts 6) output an analysis report.',
        tools: [
          {
            name: 'database_query',
            params:
              '{"table": "sales", "period": "Q4_2023", "fields": ["product", "region", "amount", "quantity"]}',
            result:
              'Fetched Q4 sales records: 15,230 rows, 12 product lines, 8 regions'
          },
          {
            name: 'data_groupby',
            params:
              '{"data": "sales_q4", "group": "product", "agg": ["sum", "count", "avg"]}',
            result:
              'Product stats: electronics ¥2.1M (+45%), apparel ¥1.8M (+12%), home goods ¥1.2M (+28%)...'
          },
          {
            name: 'data_groupby',
            params:
              '{"data": "sales_q4", "group": "region", "agg": ["sum", "growth"]}',
            result:
              'Region stats: East China ¥3.2M (+38%), South China ¥2.1M (+52%), North China ¥1.5M (+15%)...'
          },
          {
            name: 'growth_calculator',
            params:
              '{"current": "Q4_2023", "previous": "Q3_2023", "dimensions": ["product", "region"]}',
            result:
              'Fastest-growing product line: electronics +45%; fastest-growing region: South China +52%'
          },
          {
            name: 'chart_generator',
            params:
              '{"type": "bar", "data": "product_growth", "title": "Product line growth comparison"}',
            result:
              'Generated bar chart: electronics 45%, home goods 28%, apparel 12%'
          },
          {
            name: 'chart_generator',
            params:
              '{"type": "map", "data": "region_sales", "title": "Regional sales heatmap"}',
            result:
              'Generated China heatmap: East China and South China are high-value areas'
          }
        ],
        agentResponse:
          '📊 Q4 Sales Data Analysis\n\n🏆 Fastest-growing product lines\n1. Electronics: +45% (¥2.1M)\n2. Home goods: +28% (¥1.2M)\n3. Apparel: +12% (¥1.8M)\n\n🌍 Fastest-growing regions\n1. South China: +52% (¥2.1M)\n2. East China: +38% (¥3.2M)\n3. Southwest China: +22% (¥0.8M)\n\n💡 Recommendation: invest more in electronics and expand South China.',
        insight:
          'The Agent uses 6 tools for database query, grouping, growth calculation, visualization, and reporting.'
      }
    ]
  },
  toolUse: {
    title: '🔧 How does an Agent call tools?',
    steps: {
      analyze: 'Analyze need',
      choose: 'Choose tool',
      params: 'Build parameters',
      execute: 'Execute and return'
    },
    labels: {
      userWants: 'User wants:',
      extracted: 'Extracted:',
      result: 'Result',
      response: '💬 Response:'
    },
    buttons: {
      start: '▶ Start demo',
      next: 'Next step →',
      reset: '🔄 Reset'
    },
    tip: 'Tool Calling means the LLM generates structured text (JSON), then an external system executes it and returns the result.',
    scenarios: [
      {
        id: 'weather',
        icon: '🌤️',
        name: 'Check weather',
        userInput: 'Will I need an umbrella in Shanghai tomorrow?',
        intent: {
          type: 'Weather query',
          entities: ['tomorrow', 'Shanghai'],
          confidence: 95
        },
        availableTools: [
          {
            name: 'weather_api',
            icon: '🌤️',
            description: 'Get weather',
            selected: true,
            score: 95
          },
          {
            name: 'calculator',
            icon: '🧮',
            description: 'Math calculation',
            selected: false,
            score: 10
          }
        ],
        selectedTool: 'weather_api',
        finalParams: {
          tool: 'weather_api',
          params: { city: 'Shanghai', date: 'tomorrow' }
        },
        finalResponse:
          'Light rain is expected in Shanghai tomorrow. Bring an umbrella. Temperature: 8-15°C.'
      },
      {
        id: 'calculate',
        icon: '🧮',
        name: 'Calculate',
        userInput: 'What is 1250 divided by 25 and multiplied by 8?',
        intent: {
          type: 'Math calculation',
          entities: ['1250', '25', '8'],
          confidence: 98
        },
        availableTools: [
          {
            name: 'weather_api',
            icon: '🌤️',
            description: 'Get weather',
            selected: false,
            score: 5
          },
          {
            name: 'calculator',
            icon: '🧮',
            description: 'Math calculation',
            selected: true,
            score: 98
          }
        ],
        selectedTool: 'calculator',
        finalParams: {
          tool: 'calculator',
          params: { expression: '(1250/25)*8' }
        },
        finalResponse: 'Calculation result: 400.'
      },
      {
        id: 'search',
        icon: '🔍',
        name: 'Search',
        userInput: 'Search for recent news about artificial intelligence',
        intent: {
          type: 'Information retrieval',
          entities: ['AI', 'news'],
          confidence: 92
        },
        availableTools: [
          {
            name: 'web_search',
            icon: '🔍',
            description: 'Web search',
            selected: true,
            score: 92
          },
          {
            name: 'calculator',
            icon: '🧮',
            description: 'Math calculation',
            selected: false,
            score: 5
          }
        ],
        selectedTool: 'web_search',
        finalParams: {
          tool: 'web_search',
          params: { query: 'AI news', max: 5 }
        },
        finalResponse: 'Found 5 recent AI news items for you...'
      }
    ]
  }
}
