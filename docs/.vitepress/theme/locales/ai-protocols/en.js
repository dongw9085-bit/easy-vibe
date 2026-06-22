export default {
  protocolComparison: {
    subtitle: 'Positioning differences between two major AI Agent protocols',
    introBefore: 'Imagine a ',
    introHighlight: 'large shopping mall',
    introAfter:
      ': MCP is like a unified outlet standard, so every tool can plug in; A2A is like an internal intercom system, so different agents can coordinate with each other.',
    labels: {
      initiator: 'Initiator',
      release: 'Released',
      architecture: 'Architecture',
      format: 'Data format',
      analogy: 'Analogy'
    },
    cards: [
      {
        key: 'mcp',
        title: 'MCP',
        badge: 'Tool connection',
        fullname: 'Model Context Protocol',
        desc: 'A protocol that connects AI applications with external tools and data sources, so tool builders can write once and support many AI apps.',
        initiator: 'Anthropic',
        release: '2024.11',
        architecture: 'Client-Server',
        format: 'JSON-RPC 2.0',
        analogy: 'USB-C: one interface for many devices'
      },
      {
        key: 'a2a',
        title: 'A2A',
        badge: 'Agent collaboration',
        fullname: 'Agent-to-Agent Protocol',
        desc: 'A communication protocol that lets agents from different vendors and frameworks collaborate smoothly.',
        initiator: 'Google',
        release: '2025.04',
        architecture: 'Peer-to-Peer',
        format: 'HTTP + JSON',
        analogy: 'Work chat: coworkers can assign tasks and talk'
      }
    ],
    infoPrefix: 'Core idea:',
    infoText:
      'MCP and A2A are complementary, not competing. MCP answers "how can AI access external capabilities"; A2A answers "how can multiple AI agents collaborate".'
  },
  mcpVisual: {
    title: 'What is MCP?',
    introBefore:
      'MCP (Model Context Protocol) is a unified standard introduced by Anthropic in November 2024 for ',
    introStrong: 'connecting AI with external tools',
    introAfter:
      '. It lets AI applications call tools, read resources, and use predefined prompts, giving AI practical "hands" and "eyes".',
    capabilityTitle: 'Three Core Capabilities',
    tableHeaders: ['Capability', 'English', 'Role', 'Example'],
    capabilities: [
      {
        name: 'Tools',
        english: 'Tools',
        role: 'Functions AI can call',
        example: 'Check weather, send email, call APIs'
      },
      {
        name: 'Resources',
        english: 'Resources',
        role: 'Data AI can read',
        example: 'File content, database records, configuration'
      },
      {
        name: 'Prompts',
        english: 'Prompts',
        role: 'Predefined prompt templates',
        example: 'Code review templates, writing templates'
      }
    ],
    useCaseTitle: 'When should you use MCP?',
    useCases: [
      {
        title: 'When AI needs to perform real actions',
        desc: 'AI should not only answer questions, but also send emails, operate files, and call third-party APIs.'
      },
      {
        title: 'When AI needs access to private data',
        desc: 'Read local files, query databases, or access internal business systems.'
      },
      {
        title: 'When tool integration should be standardized',
        desc: 'Build once and reuse across AI applications such as Claude, Cursor, and Windsurf.'
      }
    ],
    usageTitle: 'How do you use MCP?',
    steps: [
      {
        title: 'Develop an MCP Server',
        desc: 'Implement a server that provides tools, resources, and prompts according to the MCP spec.'
      },
      {
        title: 'Configure the AI app connection',
        desc: 'Add the MCP Server configuration to your AI app, either local or remote.'
      },
      {
        title: 'Let AI call it automatically',
        desc: 'AI discovers and calls suitable tools or reads resources based on the task.'
      }
    ]
  },
  a2aVisual: {
    title: 'What is A2A?',
    introBefore:
      'A2A (Agent-to-Agent Protocol) is a communication standard introduced by Google in April 2025 for ',
    introStrong: 'collaboration between agents',
    introAfter:
      '. It lets agents from different vendors and frameworks discover each other, assign tasks, and exchange information, like an intercom for the AI world.',
    conceptTitle: 'Core Concepts',
    concepts: [
      {
        title: 'Agent Card',
        desc: 'Public metadata for each agent, including capability descriptions, version, and endpoint.'
      },
      {
        title: 'Task',
        desc: 'A work unit passed between agents. It can include multi-turn dialogue and file attachments.'
      },
      {
        title: 'Message',
        desc: 'Communication content between agents, supporting text, files, audio, and other modalities.'
      },
      {
        title: 'SSE (Server-Sent Events)',
        desc: 'A server push mechanism used for real-time task progress updates.'
      }
    ],
    useCaseTitle: 'When should you use A2A?',
    useCases: [
      {
        title: 'When multiple agents need to complete a complex task',
        desc: 'One agent analyzes requirements, another writes code, and another tests the result.'
      },
      {
        title: 'When integrating agents from different vendors',
        desc: 'Agents from Google, Anthropic, OpenAI, and others need to collaborate.'
      },
      {
        title: 'When task delegation and progress tracking are needed',
        desc: 'A main agent assigns work to expert agents and receives live progress updates.'
      }
    ],
    usageTitle: 'How do you use A2A?',
    steps: [
      {
        title: 'Publish an Agent Card',
        desc: 'Expose the agent capability description at /.well-known/agent.json.'
      },
      {
        title: 'Discover agents',
        desc: 'Use the agents/get API to fetch another agent card and inspect capabilities.'
      },
      {
        title: 'Send a task',
        desc: 'Use the tasks/send API to send work, optionally receiving progress through SSE.'
      },
      {
        title: 'Fetch the result',
        desc: 'After completion, use the tasks/get API to retrieve the final result.'
      }
    ]
  },
  mcpDetailed: {
    title: 'MCP Internals',
    subtitle: 'Communication details of the client-server architecture',
    introTitle: 'Why is MCP so popular?',
    introText:
      'Before MCP, AI could only read and respond. With MCP, AI can finally take action by operating programs and helping with real work.',
    popularUses: [
      {
        title: 'AI editors such as Cursor and Claude',
        desc: 'Read and write files, execute code, and operate Git directly.'
      },
      {
        title: 'Browser automation',
        desc: 'AI opens pages, clicks buttons, and fills forms automatically.'
      },
      {
        title: 'Database queries',
        desc: 'Query and write databases directly without manual exports.'
      },
      {
        title: 'Computer control by AI',
        desc: 'Windows-MCP lets AI control the mouse and keyboard directly.'
      },
      {
        title: 'Automated deployment',
        desc: 'Vercel-MCP deploys websites online in one flow.'
      },
      {
        title: 'Design to code',
        desc: 'Figma-MCP reads designs and generates web pages automatically.'
      }
    ],
    usageTitle: 'How do you use MCP?',
    usageIntro:
      'Using MCP is simple: configure an mcp.json file, then your IDE can use MCP tools.',
    usageSteps: [
      {
        title: 'Find an MCP Server',
        desc: 'Find the MCP Server you need from an MCP directory or GitHub.',
        resources: [
          {
            name: 'Official server list',
            href: 'https://github.com/modelcontextprotocol/servers',
            label: 'github.com/modelcontextprotocol/servers'
          },
          { name: 'MCP.so', href: 'https://mcp.so', label: 'mcp.so' },
          {
            name: 'Pulse MCP',
            href: 'https://www.pulsemcp.com',
            label: 'pulsemcp.com'
          },
          {
            name: 'Smithery',
            href: 'https://smithery.ai',
            label: 'smithery.ai'
          }
        ]
      },
      {
        title: 'Configure mcp.json',
        desc: 'Find the MCP config location in your AI editor, such as Cursor or Claude Desktop, and add the server configuration.',
        codeKey: 'mcpConfigExample'
      },
      {
        title: 'Restart the IDE',
        desc: 'After restart, AI discovers and loads MCP tools automatically, so you can ask it to use them.'
      }
    ],
    skillsTitle: 'Are Skills replacing MCP?',
    skillsText:
      'As Skills become more common, many scenarios are starting to use Skills instead of the MCP protocol. Skills are lighter and easier to write for common tasks. MCP remains better for complex tool integrations and reuse across multiple clients. For simple operations, consider Skills first.',
    configTitle: 'Common mcp.json locations',
    configLocations: [
      { name: 'Cursor', path: '~/.cursor/mcp.json' },
      {
        name: 'Claude Desktop',
        path: '~/Library/Application Support/Claude/claude_desktop_config.json (macOS)'
      },
      { name: 'Windsurf', path: '~/.windsurf/mcp.json' }
    ],
    implementTitle: 'How do you implement an MCP Server?',
    implementIntro:
      'Suppose you have a weather API and want to wrap it as an MCP Server that AI can call. This Node.js example shows the shape:',
    transportCompareTitle: 'stdio vs HTTP+SSE transport',
    transportCompare: [
      {
        name: 'stdio (local process)',
        points: [
          'The MCP Server runs as a child process and communicates through standard input and output.',
          'Pros: simple, secure, and suitable for local tools.',
          'Cons: local only; no remote access.'
        ]
      },
      {
        name: 'HTTP + SSE (remote service)',
        points: [
          'The MCP Server runs as an HTTP service and supports SSE pushes.',
          'Pros: remote access and sharing across multiple clients.',
          'Cons: requires server deployment and authentication.'
        ]
      }
    ],
    flowTitle: 'Communication Flow (4 Steps)',
    techJsonRpcTitle: 'Deep Dive: JSON-RPC 2.0 Message Format',
    requestTitle: 'Request Message Structure',
    responseTitle: 'Response Message Structure',
    jsonRpcNote:
      'JSON-RPC 2.0 is stateless. Every request includes an id so the client can match the response.',
    techTransportTitle: 'Deep Dive: Two Transport Modes',
    transportCards: [
      {
        name: 'stdio (local process)',
        desc: 'Used for local tools through standard input and output.',
        codeKey: 'stdioExample'
      },
      {
        name: 'HTTP + SSE (remote)',
        desc: 'Used for remote services with long-lived push connections.',
        codeKey: 'httpExample'
      }
    ],
    techApiTitle: 'Deep Dive: MCP Core APIs',
    flowSteps: [
      {
        name: 'Handshake (initialize)',
        desc: 'When the MCP Server starts, it sends an initialize request to the client and declares protocol version and capabilities.',
        example: {
          title: 'Server → Client',
          code: `// Server sends an initialize request
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
        name: 'List tools (tools/list)',
        desc: 'The client asks the server for available tools, so AI knows what functions it can call.',
        example: {
          title: 'Client → Server',
          code: `// Client requests the tool list
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/list",
  "params": {}
}

// Server returns available tools
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "tools": [
      {
        "name": "read_file",
        "description": "Read file content",
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
        "description": "Write file content",
        "inputSchema": { ... }
      }
    ]
  }
}`
        }
      },
      {
        name: 'Call tool (tools/call)',
        desc: 'When AI decides to call a tool, the client sends a call request and the server returns the result.',
        example: {
          title: 'Client → Server',
          code: `// Client calls a tool
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

// Server returns the result
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
        name: 'Return result',
        desc: 'After the server finishes, it sends the result back to the client, and the client returns it to AI.',
        example: {
          title: 'Result flow',
          code: `Server executes → returns JSON-RPC response → client parses →
       → injects result into AI context → AI continues`
        }
      }
    ],
    codeExamples: {
      jsonRpcRequest: `{
  "jsonrpc": "2.0",           // protocol version
  "id": 1,                     // request ID used to match response
  "method": "tools/call",      // method name
  "params": { ... }            // parameter object
}`,
      jsonRpcResponse: `// Successful response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": { ... }
}

// Error response
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32600,
    "message": "Invalid Request"
  }
}`,
      stdioExample: `// Start MCP Server as a child process
npx @modelcontextprotocol/server-filesystem ./project

// Communicate through stdio
// stdin: receive requests
// stdout: send responses`,
      httpExample: `// HTTP transport with Server-Sent Events
POST /mcp HTTP/1.1
Content-Type: application/json

{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": { ... }
}

// SSE long connection for push updates
GET /mcp/sse HTTP/1.1
// Continuously receive server updates`,
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

// 1. Create MCP Server
const server = new Server({
  name: 'weather-server',
  version: '1.0.0'
}, {
  capabilities: { tools: {} }
})

// 2. Define tool list
server.setRequestHandler('tools/list', async () => ({
  tools: [{
    name: 'get_weather',
    description: 'Get weather for a city',
    inputSchema: {
      type: 'object',
      properties: {
        city: { type: 'string', description: 'City name' }
      },
      required: ['city']
    }
  }]
}))

// 3. Implement tool call logic
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params

  if (name === 'get_weather') {
    // Call your weather API
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

// 4. Start service through stdio
const transport = new StdioServerTransport()
await server.connect(transport)`
    },
    apis: [
      {
        method: 'initialize',
        name: 'Initialize',
        desc: 'Server declares protocol version and capabilities to the client.'
      },
      {
        method: 'tools/list',
        name: 'Tool list',
        desc: 'Get all available tools provided by the server.'
      },
      {
        method: 'tools/call',
        name: 'Call tool',
        desc: 'Call a specific tool and receive the result.'
      },
      {
        method: 'resources/list',
        name: 'Resource list',
        desc: 'Get accessible resources such as files and databases.'
      },
      {
        method: 'resources/read',
        name: 'Read resource',
        desc: 'Read content from a specific resource.'
      },
      {
        method: 'prompts/list',
        name: 'Prompt templates',
        desc: 'Get predefined prompt templates.'
      }
    ]
  },
  a2aDetailed: {
    title: 'A2A Internals',
    subtitle: 'Communication details of the peer-to-peer architecture',
    introTitle: 'What can A2A do?',
    introText:
      'A2A lets multiple AI agents collaborate instead of working alone. A complex task can be assigned to specialized agents, each doing what it is best at.',
    popularUses: [
      {
        title: 'Software development pipeline',
        desc: 'Requirements agent → code agent → test agent → deployment agent'
      },
      {
        title: 'Multi-vendor agent integration',
        desc: 'Agents from Google, Anthropic, and OpenAI can call each other.'
      },
      {
        title: 'Enterprise workflows',
        desc: 'HR, finance, and approval agents coordinate business processes.'
      },
      {
        title: 'Customer support escalation',
        desc: 'Reception agent → business agent → human agent handoff'
      },
      {
        title: 'Research collaboration',
        desc: 'Literature agent → experiment agent → analysis agent → report agent'
      },
      {
        title: 'Automated operations',
        desc: 'Monitoring agent → diagnosis agent → repair agent → notification agent'
      }
    ],
    usageTitle: 'How do you use A2A?',
    usageIntro:
      'A2A is still early and mainly driven by Google. To try it, you need to develop an agent service that supports the A2A protocol.',
    usageSteps: [
      {
        title: 'Implement the Agent Card endpoint',
        desc: 'Expose /.well-known/agent.json in your agent service and declare capabilities and version.'
      },
      {
        title: 'Implement A2A APIs',
        desc: 'Implement core APIs such as agents/get, tasks/send, and tasks/get.'
      },
      {
        title: 'Deploy and register the agent',
        desc: 'Deploy the agent to a server and register it so other agents can discover it.'
      }
    ],
    statusTitle: 'Current Status',
    statusTextBefore:
      'A2A was released in April 2025 and is still evolving quickly. Google provides reference implementations, while the ecosystem is still being built. Follow the ',
    statusLinkText: 'official docs',
    statusTextAfter: ' for current progress.',
    flowTitle: 'Communication Flow (5 Steps)',
    techAgentCardTitle: 'Deep Dive: Agent Card Format',
    agentCardIntro:
      'An Agent Card is a JSON file, usually hosted at /.well-known/agent.json.',
    agentCardExampleTitle: 'Agent Card Example',
    agentCardNote:
      'With Agent Cards, agents can discover each other, understand capabilities and versions, and interoperate.',
    techHttpTitle: 'Deep Dive: HTTP + SSE Communication',
    taskSendTitle: 'Task Send (HTTP POST)',
    sseTitle: 'Real-time Push (SSE)',
    sseNote:
      'SSE (Server-Sent Events) lets the server push messages, which works well for long-running task status updates.',
    techApiTitle: 'Deep Dive: A2A Core APIs',
    techAuthTitle: 'Deep Dive: Authentication',
    authCards: [
      {
        name: 'API Key',
        desc: 'Simple authentication for internal agent communication.',
        codeKey: 'apiKeyExample'
      },
      {
        name: 'OAuth 2.0',
        desc: 'Enterprise authentication with token refresh and permission control.',
        codeKey: 'oauthExample'
      }
    ],
    flowSteps: [
      {
        name: 'Discovery (agents/get)',
        desc: 'Agents fetch each other Agent Cards over HTTP to understand capabilities and versions.',
        example: {
          title: 'HTTP request',
          code: `// Agent A fetches Agent B's Agent Card
GET /.well-known/agent.json HTTP/1.1
Host: agent-b.company.com

// Response
{
  "name": "Code Agent",
  "description": "Professional code generation agent",
  "url": "https://agent-b.company.com",
  "version": "1.0.0",
  "capabilities": {
    "streaming": true,
    "pushNotifications": true
  },
  "skills": [
    {"id": "code-gen", "name": "Code generation"},
    {"id": "code-review", "name": "Code review"}
  ]
}`
        }
      },
      {
        name: 'Send task (tasks/send)',
        desc: 'Agent A calls tasks/send to send a task to Agent B, including task ID, description, and context.',
        example: {
          title: 'HTTP POST',
          code: `// Agent A sends a task to Agent B
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
        "text": "Please write a login API"
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
        name: 'Process task',
        desc: 'After receiving the task, Agent B may call its own LLM or MCP tools to execute it.',
        example: {
          title: 'Agent B internal processing',
          code: `// Agent B internal processing flow
1. Parse task request
2. Analyze required skills by matching skills metadata
3. Call internal LLM to generate code
4. Optionally call external tools through MCP to validate code
5. Generate final result

// The process may take time, so progress is pushed through SSE`
        }
      },
      {
        name: 'Push updates (SSE)',
        desc: 'Agent B uses SSE to push task progress and intermediate results in real time.',
        example: {
          title: 'SSE push',
          code: `// Server continuously pushes updates
event: taskProgress
data: {
  "taskId": "task-12345",
  "status": "processing",
  "progress": 30,
  "message": "Generating login logic..."
}

event: taskProgress
data: {
  "taskId": "task-12345",
  "status": "processing",
  "progress": 60,
  "message": "Generating database operations..."
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
        name: 'Return result (tasks/get)',
        desc: 'After completion, Agent A can use tasks/get to fetch the final result.',
        example: {
          title: 'HTTP GET',
          code: `// Agent A gets task result
GET /tasks/task-12345 HTTP/1.1
Authorization: Bearer xxx

// Response
{
  "id": "task-12345",
  "status": "completed",
  "result": {
    "message": {
      "role": "agent",
      "parts": [
        {
          "type": "text",
          "text": "Login API has been generated..."
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
  "name": "Code Generation Agent",
  "description": "Professional frontend and backend code generation agent",
  "url": "https://code-agent.company.com",
  "version": "1.0.0",
  "capabilities": {
    "streaming": true,
    "pushNotifications": true
  },
  "skills": [
    {
      "id": "frontend",
      "name": "Frontend development",
      "description": "React/Vue/Angular"
    },
    {
      "id": "backend",
      "name": "Backend development",
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
    "parts": [{ "type": "text", "text": "Write a login endpoint" }]
  }
}`,
      sseExample: `GET /tasks/task-001/sse HTTP/1.1
Authorization: Bearer {token}

event: progress
data: {"status": "processing", "progress": 50}

event: completed
data: {"status": "completed", "result": {...}}`,
      apiKeyExample: `Authorization: Bearer sk-xxxxx
# or
Authorization: ApiKey sk-xxxxx`,
      oauthExample: `Authorization: Bearer {access_token}
# refresh token supported
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
        desc: 'Fetch the target agent Agent Card and inspect capabilities.'
      },
      {
        method: 'POST',
        name: 'tasks/send',
        desc: 'Send a task to the target agent and wait synchronously for the result.'
      },
      {
        method: 'POST',
        name: 'tasks/sendSubscribe',
        desc: 'Send a task and subscribe to SSE progress updates.'
      },
      {
        method: 'GET',
        name: 'tasks/get',
        desc: 'Fetch task status and result by task ID.'
      },
      { method: 'GET', name: 'tasks/cancel', desc: 'Cancel a running task.' }
    ]
  }
}
