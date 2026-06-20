export default {
  protocolComparison: {
    subtitle: 'AI Agent 两大协议的定位差异',
    introBefore: '想象你在一个',
    introHighlight: '大型商场',
    introAfter:
      '：MCP 就像商场的"统一插座标准"，让各种电器（工具）都能插上使用；A2A 就像商场的"内部对讲系统"，让不同店铺（Agent）之间可以协作。',
    labels: {
      initiator: '发起方',
      release: '发布时间',
      architecture: '架构',
      format: '数据格式',
      analogy: '类比'
    },
    cards: [
      {
        key: 'mcp',
        title: 'MCP',
        badge: '工具连接',
        fullname: 'Model Context Protocol',
        desc: 'AI 与外部工具、数据源的连接协议，让工具开发者写一次代码，所有 AI 应用都能用',
        initiator: 'Anthropic',
        release: '2024.11',
        architecture: 'Client-Server',
        format: 'JSON-RPC 2.0',
        analogy: 'USB-C 接口 —— 统一各种设备的充电方式'
      },
      {
        key: 'a2a',
        title: 'A2A',
        badge: 'Agent协作',
        fullname: 'Agent-to-Agent Protocol',
        desc: 'Agent 之间的通信协议，让不同厂商、不同框架的 Agent 能够无缝协作',
        initiator: 'Google',
        release: '2025.04',
        architecture: 'Peer-to-Peer',
        format: 'HTTP + JSON',
        analogy: '企业微信 —— 让同事之间可以发任务、聊天'
      }
    ],
    infoPrefix: '核心思想：',
    infoText:
      'MCP 和 A2A 不是竞争关系，而是互补关系。MCP 解决"AI 如何获取外部能力"，A2A 解决"多个 AI 如何协作"。'
  },
  mcpVisual: {
    title: 'MCP 是什么？',
    introBefore:
      'MCP（Model Context Protocol）是 Anthropic 于 2024 年 11 月推出的',
    introStrong: 'AI 与外部工具连接的统一标准',
    introAfter:
      '。它让 AI 应用可以调用外部工具、读取资源数据、使用预定义提示，就像给 AI 装上了"手"和"眼睛"。',
    capabilityTitle: '三大核心能力',
    tableHeaders: ['能力', '英文', '作用', '示例'],
    capabilities: [
      {
        name: '工具',
        english: 'Tools',
        role: 'AI 可以调用的功能',
        example: '查询天气、发送邮件、调用 API'
      },
      {
        name: '资源',
        english: 'Resources',
        role: 'AI 可以读取的数据',
        example: '文件内容、数据库记录、配置信息'
      },
      {
        name: '提示',
        english: 'Prompts',
        role: '预定义的提示模板',
        example: '代码审查模板、写作模板'
      }
    ],
    useCaseTitle: '什么时候用 MCP？',
    useCases: [
      {
        title: '当 AI 需要执行实际操作时',
        desc: 'AI 不仅要回答问题，还要真正做事：发送邮件、操作文件、调用第三方 API'
      },
      {
        title: '当 AI 需要访问私有数据时',
        desc: '读取本地文件、查询数据库、访问企业内部系统'
      },
      {
        title: '当需要标准化工具接入时',
        desc: '一次开发，多个 AI 应用可用（Claude、Cursor、Windsurf 等）'
      }
    ],
    usageTitle: '如何使用 MCP？',
    steps: [
      {
        title: '开发 MCP Server',
        desc: '按 MCP 规范实现 Server，提供 tools/resources/prompts'
      },
      {
        title: '配置 AI 应用连接',
        desc: '在 AI 应用中添加 MCP Server 配置（本地或远程）'
      },
      {
        title: 'AI 自动调用',
        desc: 'AI 根据任务需求，自动发现并调用合适的工具或读取资源'
      }
    ]
  },
  a2aVisual: {
    title: 'A2A 是什么？',
    introBefore:
      'A2A（Agent-to-Agent Protocol）是 Google 于 2025 年 4 月推出的',
    introStrong: 'Agent 之间相互协作的通信标准',
    introAfter:
      '。它让不同厂商、不同框架的 Agent 能够相互发现、分配任务、交换信息，就像给 AI 世界装上了"对讲机"。',
    conceptTitle: '核心概念',
    concepts: [
      {
        title: 'Agent Card（Agent 名片）',
        desc: '每个 Agent 公开的元数据，包括能力描述、版本号、端点地址等，相当于人的"名片"'
      },
      {
        title: 'Task（任务）',
        desc: 'Agent 之间传递的工作单元，可以包含多轮对话、文件附件等'
      },
      {
        title: 'Message（消息）',
        desc: 'Agent 之间的通信内容，支持文本、文件、语音等多模态'
      },
      {
        title: 'SSE（Server-Sent Events）',
        desc: '服务器推送技术，用于实时任务进度更新'
      }
    ],
    useCaseTitle: '什么时候用 A2A？',
    useCases: [
      {
        title: '当需要多个 Agent 协作完成复杂任务时',
        desc: '一个 Agent 负责需求分析，一个负责写代码，一个负责测试，各自发挥专长'
      },
      {
        title: '当需要集成不同厂商的 Agent 时',
        desc: 'Google 的 Agent、Anthropic 的 Agent、OpenAI 的 Agent 需要相互协作'
      },
      {
        title: '当需要任务委托和进度追踪时',
        desc: '主 Agent 分配任务给专家 Agent，并实时接收进度更新'
      }
    ],
    usageTitle: '如何使用 A2A？',
    steps: [
      {
        title: '发布 Agent Card',
        desc: '在 /.well-known/agent.json 路径暴露 Agent 的能力描述'
      },
      {
        title: '发现 Agent',
        desc: '通过 agents/get API 获取其他 Agent 的名片，了解其能力'
      },
      {
        title: '发送任务',
        desc: '通过 tasks/send API 发送任务，支持 SSE 接收进度更新'
      },
      {
        title: '获取结果',
        desc: '任务完成后，通过 tasks/get API 获取最终结果'
      }
    ]
  },
  mcpDetailed: {
    title: 'MCP 内部实现',
    subtitle: '客户端-服务器架构的通信细节',
    introTitle: '为什么 MCP 这么火？',
    introText:
      'MCP 之前，AI 只能"看"和"说"，有了 MCP，AI 终于可以"动手"了。它让 AI 可以操纵各种程序，真正帮你干活。',
    popularUses: [
      {
        title: 'Cursor / Claude 等 AI 编辑器',
        desc: '直接读写文件、执行代码、操作 Git'
      },
      { title: '浏览器自动化', desc: 'AI 自动打开网页、点击按钮、填表单' },
      { title: '数据库查询', desc: '直接查询/写入数据库，无需手动导出' },
      { title: 'AI 操作电脑', desc: 'Windows-MCP 让 AI 直接操控鼠标键盘' },
      { title: '自动化部署', desc: 'Vercel-MCP 一键部署网站到线上' },
      { title: '设计稿转代码', desc: 'Figma-MCP 读取设计稿自动生成网页' }
    ],
    usageTitle: '如何使用 MCP？',
    usageIntro:
      '使用 MCP 非常简单，只需要配置一个 mcp.json 文件，就可以在你的 IDE 里使用各种 MCP 工具。',
    usageSteps: [
      {
        title: '找到 MCP Server',
        desc: '从 MCP 资源站或 GitHub 找到你需要的 MCP Server',
        resources: [
          {
            name: '官方 Server 列表',
            href: 'https://github.com/modelcontextprotocol/servers',
            label: 'github.com/modelcontextprotocol/servers'
          },
          { name: 'MCP.so（中文）', href: 'https://mcp.so', label: 'mcp.so' },
          {
            name: 'Pulse MCP（英文）',
            href: 'https://www.pulsemcp.com',
            label: 'pulsemcp.com'
          },
          {
            name: 'Smithery（英文）',
            href: 'https://smithery.ai',
            label: 'smithery.ai'
          }
        ]
      },
      {
        title: '配置 mcp.json',
        desc: '在你的 AI 编辑器（Cursor / Claude Desktop 等）中找到 MCP 配置文件位置，添加 Server 配置',
        codeKey: 'mcpConfigExample'
      },
      {
        title: '重启 IDE 即可使用',
        desc: '重启后，AI 会自动发现并加载 MCP 工具，你就可以直接让 AI 使用这些工具了'
      }
    ],
    skillsTitle: 'Skills 正在替代 MCP？',
    skillsText:
      '随着 Skills 的普及，越来越多的场景开始使用 Skills 替代 MCP 协议。Skills 更轻量、更易编写，适合大多数常见任务。MCP 更适合需要复杂工具集成、多客户端复用的场景。如果你只是想让 AI 做一些简单操作，建议优先考虑 Skills。',
    configTitle: '常见 IDE 的 mcp.json 位置',
    configLocations: [
      { name: 'Cursor', path: '~/.cursor/mcp.json' },
      {
        name: 'Claude Desktop',
        path: '~/Library/Application Support/Claude/claude_desktop_config.json (macOS)'
      },
      { name: 'Windsurf', path: '~/.windsurf/mcp.json' }
    ],
    implementTitle: '如何实现一个 MCP Server？',
    implementIntro:
      '假设你有一个天气 API，想把它封装成 MCP Server 让 AI 可以调用。下面以 Node.js 为例演示：',
    transportCompareTitle: 'stdio vs HTTP+SSE 传输方式',
    transportCompare: [
      {
        name: 'stdio（本地进程）',
        points: [
          'MCP Server 作为子进程运行，通过标准输入输出通信',
          '优点：简单、安全、适合本地工具',
          '缺点：只能本地使用，不支持远程'
        ]
      },
      {
        name: 'HTTP + SSE（远程服务）',
        points: [
          'MCP Server 作为 HTTP 服务运行，支持 SSE 推送',
          '优点：支持远程访问、多客户端共享',
          '缺点：需要部署服务器、配置认证'
        ]
      }
    ],
    flowTitle: '通信流程（4 步）',
    techJsonRpcTitle: '技术深究：JSON-RPC 2.0 消息格式',
    requestTitle: '请求消息结构',
    responseTitle: '响应消息结构',
    jsonRpcNote:
      'JSON-RPC 2.0 是无状态协议，每个请求都需要包含 id 用于匹配响应',
    techTransportTitle: '技术深究：两种传输方式',
    transportCards: [
      {
        name: 'stdio（本地进程）',
        desc: '适用于本地工具，通过标准输入输出通信',
        codeKey: 'stdioExample'
      },
      {
        name: 'HTTP + SSE（远程）',
        desc: '适用于远程服务，支持长连接推送',
        codeKey: 'httpExample'
      }
    ],
    techApiTitle: '技术深究：MCP 核心 API',
    flowSteps: [
      {
        name: '握手（initialize）',
        desc: 'MCP Server 启动时向 Client 发送握手请求，声明自己的协议版本和能力',
        example: {
          title: 'Server → Client',
          code: `// Server 发送 initialize 请求
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "capabilities": {
      "tools": {},
      "resources": {},
      "prompts": {}
    },
    "serverInfo": {
      "name": "filesystem",
      "version": "1.0.0"
    }
  }
}`
        }
      },
      {
        name: '列工具（tools/list）',
        desc: 'Client 向 Server 请求可用工具列表，AI 知道能调用哪些功能',
        example: {
          title: 'Client → Server',
          code: `// Client 请求工具列表
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/list",
  "params": {}
}

// Server 返回工具列表
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "tools": [
      {
        "name": "read_file",
        "description": "读取文件内容",
        "inputSchema": {
          "type": "object",
          "properties": {
            "path": { "type": "string" }
          },
          "required": ["path"]
        }
      },
      {
        "name": "write_file",
        "description": "写入文件内容",
        "inputSchema": { ... }
      }
    ]
  }
}`
        }
      },
      {
        name: '调工具（tools/call）',
        desc: 'AI 决定调用工具时，Client 发送调用请求，Server 执行后返回结果',
        example: {
          title: 'Client → Server',
          code: `// Client 调用工具
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "read_file",
    "arguments": {
      "path": "/home/user/project/README.md"
    }
  }
}

// Server 返回结果
{
  "jsonrpc": "2.0",
  "id": 3,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "# My Project\\n\\nHello World"
      }
    ]
  }
}`
        }
      },
      {
        name: '返回结果',
        desc: 'Server 执行完成后把结果发回给 Client，Client 将结果返回给 AI',
        example: {
          title: '结果流向',
          code: `Server 执行 → 返回 JSON-RPC 响应 → Client 解析 →
       → 将结果注入 AI 上下文 → AI 继续处理`
        }
      }
    ],
    codeExamples: {
      jsonRpcRequest: `{
  "jsonrpc": "2.0",           // 协议版本
  "id": 1,                     // 请求 ID，用于匹配响应
  "method": "tools/call",      // 方法名
  "params": { ... }            // 参数对象
}`,
      jsonRpcResponse: `// 成功响应
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": { ... }
}

// 错误响应
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32600,
    "message": "Invalid Request"
  }
}`,
      stdioExample: `// 启动 MCP Server 作为子进程
npx @modelcontextprotocol/server-filesystem ./project

// 通过 stdio 通信
// stdin: 接收请求
// stdout: 发送响应`,
      httpExample: `// HTTP 传输（Server-Sent Events）
POST /mcp HTTP/1.1
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": { ... }
}

// SSE 长连接用于推送
GET /mcp/sse HTTP/1.1
// 持续接收服务器推送的更新`,
      mcpConfigExample: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/home/user/projects"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token-here"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost/db"
      }
    }
  }
}`,
      weatherMcpCode: `import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'

// 1. 创建 MCP Server
const server = new Server({
  name: 'weather-server',
  version: '1.0.0'
}, {
  capabilities: { tools: {} }
})

// 2. 定义工具列表
server.setRequestHandler('tools/list', async () => ({
  tools: [{
    name: 'get_weather',
    description: '获取指定城市的天气信息',
    inputSchema: {
      type: 'object',
      properties: {
        city: { type: 'string', description: '城市名称' }
      },
      required: ['city']
    }
  }]
}))

// 3. 实现工具调用逻辑
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params

  if (name === 'get_weather') {
    // 调用你的天气 API
    const response = await fetch(
      \`https://api.weather.com/v1/current?city=\${args.city}\`
    )
    const data = await response.json()

    return {
      content: [{
        type: 'text',
        text: JSON.stringify(data)
      }]
    }
  }
})

// 4. 启动服务（stdio 方式）
const transport = new StdioServerTransport()
await server.connect(transport)`
    },
    apis: [
      {
        method: 'initialize',
        name: '初始化',
        desc: 'Server 向 Client 声明协议版本和能力'
      },
      {
        method: 'tools/list',
        name: '工具列表',
        desc: '获取 Server 提供所有可用工具'
      },
      {
        method: 'tools/call',
        name: '调用工具',
        desc: '实际调用某个工具并获取结果'
      },
      {
        method: 'resources/list',
        name: '资源列表',
        desc: '获取可访问的资源（如文件、数据库）'
      },
      {
        method: 'resources/read',
        name: '读取资源',
        desc: '读取某个资源的内容'
      },
      { method: 'prompts/list', name: '提示模板', desc: '获取预定义的提示模板' }
    ]
  },
  a2aDetailed: {
    title: 'A2A 内部实现',
    subtitle: '对等网络架构的通信细节',
    introTitle: 'A2A 可以做什么？',
    introText:
      'A2A 让多个 AI Agent 可以相互协作，不再是单打独斗。一个复杂任务可以分配给多个专业 Agent，每个 Agent 做自己擅长的事。',
    popularUses: [
      {
        title: '软件开发流水线',
        desc: '需求分析 Agent → 代码 Agent → 测试 Agent → 部署 Agent'
      },
      {
        title: '多厂商 Agent 集成',
        desc: 'Google、Anthropic、OpenAI 的 Agent 可以相互调用'
      },
      {
        title: '企业工作流',
        desc: 'HR Agent、财务 Agent、审批 Agent 协同处理业务流程'
      },
      {
        title: '智能客服升级',
        desc: '接待 Agent → 业务 Agent → 人工 Agent 逐级转接'
      },
      {
        title: '科研协作',
        desc: '文献 Agent → 实验 Agent → 分析 Agent → 报告 Agent'
      },
      {
        title: '自动化运维',
        desc: '监控 Agent → 诊断 Agent → 修复 Agent → 通知 Agent'
      }
    ],
    usageTitle: '如何使用 A2A？',
    usageIntro:
      'A2A 目前还在早期阶段，主要由 Google 推动。如果你想尝试 A2A，需要开发支持 A2A 协议的 Agent 服务。',
    usageSteps: [
      {
        title: '实现 Agent Card 端点',
        desc: '在你的 Agent 服务中暴露 /.well-known/agent.json，声明 Agent 的能力和版本'
      },
      {
        title: '实现 A2A API',
        desc: '实现 agents/get、tasks/send、tasks/get 等核心 API'
      },
      {
        title: '部署并注册 Agent',
        desc: '将 Agent 部署到服务器，并在 Agent 注册表中登记，让其他 Agent 可以发现它'
      }
    ],
    statusTitle: '当前状态',
    statusTextBefore:
      'A2A 协议于 2025 年 4 月发布，目前还在快速发展中。Google 提供了参考实现，但生态还在建设中。建议关注 ',
    statusLinkText: '官方文档',
    statusTextAfter: ' 获取最新进展。',
    flowTitle: '通信流程（5 步）',
    techAgentCardTitle: '技术深究：Agent Card 名片格式',
    agentCardIntro:
      'Agent Card 是一个 JSON 文件，通常放在 /.well-known/agent.json 路径',
    agentCardExampleTitle: 'Agent Card 示例',
    agentCardNote:
      '通过 Agent Card，Agent 之间可以相互发现，了解对方的能力和版本，实现互操作',
    techHttpTitle: '技术深究：HTTP + SSE 通信',
    taskSendTitle: '任务发送（HTTP POST）',
    sseTitle: '实时推送（SSE）',
    sseNote:
      'SSE（Server-Sent Events）允许服务器主动推送消息，适合长时任务的状态更新',
    techApiTitle: '技术深究：A2A 核心 API',
    techAuthTitle: '技术深究：认证机制',
    authCards: [
      {
        name: 'API Key',
        desc: '简单的认证方式，适合内部 Agent 通信',
        codeKey: 'apiKeyExample'
      },
      {
        name: 'OAuth 2.0',
        desc: '企业级认证，支持令牌刷新和权限控制',
        codeKey: 'oauthExample'
      }
    ],
    flowSteps: [
      {
        name: '发现（agents/get）',
        desc: 'Agent 之间通过 HTTP 请求获取对方的 Agent Card，了解对方的能力和版本',
        example: {
          title: 'HTTP 请求',
          code: `// Agent A 获取 Agent B 的 Agent Card
GET /.well-known/agent.json HTTP/1.1
Host: agent-b.company.com

// 响应
{
  "name": "Code Agent",
  "description": "专业代码生成 Agent",
  "url": "https://agent-b.company.com",
  "version": "1.0.0",
  "capabilities": {
    "streaming": true,
    "pushNotifications": true
  },
  "skills": [
    {"id": "code-gen", "name": "代码生成"},
    {"id": "code-review", "name": "代码审查"}
  ]
}`
        }
      },
      {
        name: '发任务（tasks/send）',
        desc: 'Agent A 调用 tasks/send 向 Agent B 发送任务，包含任务ID、描述、上下文等',
        example: {
          title: 'HTTP POST',
          code: `// Agent A 发送任务给 Agent B
POST /tasks/send HTTP/1.1
Content-Type: application/json
Authorization: Bearer xxx

{
  "id": "task-12345",
  "sessionId": "session-001",
  "message": {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "请帮我写一个登录 API"
      },
      {
        "type": "resource",
        "resource": "file:///specs/login.yaml"
      }
    ]
  }
}`
        }
      },
      {
        name: '执行（Task Processing）',
        desc: 'Agent B 接收任务后，可能调用自己的 LLM 或 MCP 工具来执行任务',
        example: {
          title: 'Agent B 内部处理',
          code: `// Agent B 内部处理流程
1. 解析任务请求
2. 分析需要的技能（从 skills 中匹配）
3. 调用内部 LLM 生成代码
4. 可选：通过 MCP 调用外部工具验证代码
5. 生成最终结果

// 整个过程可能耗时较长，通过 SSE 推送进度`
        }
      },
      {
        name: '推送（SSE）',
        desc: 'Agent B 通过 SSE（Server-Sent Events）实时推送任务进度和中间结果',
        example: {
          title: 'SSE 推送',
          code: `// 服务器持续推送
event: taskProgress
data: {
  "taskId": "task-12345",
  "status": "processing",
  "progress": 30,
  "message": "正在生成登录逻辑..."
}

event: taskProgress
data: {
  "taskId": "task-12345",
  "status": "processing",
  "progress": 60,
  "message": "正在生成数据库操作..."
}

event: taskCompleted
data: {
  "taskId": "task-12345",
  "status": "completed",
  "result": { ... }
}`
        }
      },
      {
        name: '返回结果（tasks/get）',
        desc: '任务完成后，Agent A 可以通过 tasks/get 获取最终结果',
        example: {
          title: 'HTTP GET',
          code: `// Agent A 获取任务结果
GET /tasks/task-12345 HTTP/1.1
Authorization: Bearer xxx

// 响应
{
  "id": "task-12345",
  "status": "completed",
  "result": {
    "message": {
      "role": "agent",
      "parts": [
        {
          "type": "text",
          "text": "登录 API 已生成..."
        },
        {
          "type": "file",
          "file": {
            "name": "login.py",
            "mimeType": "text/plain",
            "uri": "file:///generated/login.py"
          }
        }
      ]
    }
  }
}`
        }
      }
    ],
    codeExamples: {
      agentCardExample: `{
  "name": "代码生成 Agent",
  "description": "专业的前后端代码生成 Agent",
  "url": "https://code-agent.company.com",
  "version": "1.0.0",
  "capabilities": {
    "streaming": true,
    "pushNotifications": true
  },
  "skills": [
    {
      "id": "frontend",
      "name": "前端开发",
      "description": "React/Vue/Angular"
    },
    {
      "id": "backend",
      "name": "后端开发",
      "description": "Node/Python/Go"
    }
  ],
  "authentication": {
    "schemes": ["Bearer", "OAuth2"]
  }
}`,
      taskSendExample: `POST /tasks/send HTTP/1.1
Host: agent-b.company.com
Content-Type: application/json
Authorization: Bearer {token}

{
  "id": "task-001",
  "message": {
    "role": "user",
    "parts": [{ "type": "text", "text": "写一个登录接口" }]
  }
}`,
      sseExample: `GET /tasks/task-001/sse HTTP/1.1
Authorization: Bearer {token}

event: progress
data: {"status": "processing", "progress": 50}

event: completed
data: {"status": "completed", "result": {...}}`,
      apiKeyExample: `Authorization: Bearer sk-xxxxx
# 或
Authorization: ApiKey sk-xxxxx`,
      oauthExample: `Authorization: Bearer {access_token}
# 支持刷新令牌
POST /oauth/token
{
  "grant_type": "refresh_token",
  "refresh_token": "xxx"
}`
    },
    apis: [
      {
        method: 'GET',
        name: 'agents/get',
        desc: '获取指定 Agent 的 Agent Card，了解其能力'
      },
      {
        method: 'POST',
        name: 'tasks/send',
        desc: '发送任务给目标 Agent，同步等待结果'
      },
      {
        method: 'POST',
        name: 'tasks/sendSubscribe',
        desc: '发送任务并订阅 SSE 推送，实时获取进度'
      },
      {
        method: 'GET',
        name: 'tasks/get',
        desc: '根据任务 ID 获取任务状态和结果'
      },
      { method: 'GET', name: 'tasks/cancel', desc: '取消正在执行的任务' }
    ]
  }
}
