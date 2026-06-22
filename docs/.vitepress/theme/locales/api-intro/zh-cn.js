export default {
  apiTypes: {
    labels: {
      target: '调用对象',
      comm: '通信方式',
      latency: '延迟',
      scenarios: '典型场景',
      example: '{name} 示例'
    },
    types: [
      {
        id: 'function',
        icon: '📦',
        name: '函数 API',
        target: '本地代码库',
        comm: '函数调用',
        latency: '纳秒级',
        scenarios: '数据处理、文件操作',
        example: `len("hello")           # 返回 5
max([1, 5, 3])         # 返回 5
open("file.txt").read() # 读取文件`
      },
      {
        id: 'system',
        icon: '⚙️',
        name: '操作系统 API',
        target: '操作系统内核',
        comm: '系统调用',
        latency: '微秒级',
        scenarios: '文件操作、进程管理',
        example: `with open("file.txt", "r") as f:
    content = f.read()

subprocess.run(["ls", "-l"])`
      },
      {
        id: 'web',
        icon: '🌐',
        name: 'Web API',
        target: '远程服务器',
        comm: 'HTTP 请求',
        latency: '毫秒级',
        scenarios: 'AI 调用、数据获取',
        example: `requests.post(
    "https://api.deepseek.com/v1/chat/completions",
    json={"model": "deepseek-chat", "messages": [...]}
)`
      }
    ]
  },
  statusCategories: {
    memoryTitle: '记忆技巧:',
    tip2: '2️⃣ 成功',
    tip3: '3️⃣ 重定向',
    tip4: '4️⃣ 客户端错',
    tip5: '5️⃣ 服务器错',
    categories: [
      {
        id: 'success',
        code: '2',
        name: '成功',
        desc: '请求被成功接收、理解并处理',
        examples: ['200 OK', '201 Created', '204 No Content']
      },
      {
        id: 'redirect',
        code: '3',
        name: '重定向',
        desc: '需要进一步操作才能完成请求',
        examples: ['301 永久移动', '304 未修改', '307 临时重定向']
      },
      {
        id: 'client-error',
        code: '4',
        name: '客户端错误',
        desc: '请求包含错误或无法完成',
        examples: ['400 参数错误', '401 未认证', '403 无权限', '404 不存在']
      },
      {
        id: 'server-error',
        code: '5',
        name: '服务器错误',
        desc: '服务器无法处理有效请求',
        examples: ['500 内部错误', '502 网关错误', '503 服务不可用']
      }
    ]
  },
  httpMethods: {
    idempotent: '幂等',
    notIdempotent: '不幂等',
    analogy: '餐厅类比:',
    methods: [
      {
        id: 'get',
        name: '获取',
        use: '查询数据',
        idempotent: true,
        desc: '从服务器获取资源,不会修改任何数据',
        analogy: '"服务员,菜单给我看看"',
        example: `GET /api/users           # 获取用户列表
GET /api/users/123       # 获取单个用户
GET /api/products?cat=phone  # 查询手机商品`
      },
      {
        id: 'post',
        name: '创建',
        use: '新增数据',
        idempotent: false,
        desc: '向服务器提交数据,创建新资源',
        analogy: '"给我来份宫保鸡丁"',
        example: `POST /api/users
Body: {"name": "张三", "email": "zhang@example.com"}

POST /api/orders
Body: {"items": [{"id": 1, "qty": 2}]}`
      },
      {
        id: 'put',
        name: '全量更新',
        use: '替换资源',
        idempotent: true,
        desc: '用新数据完整替换旧资源',
        analogy: '"把宫保鸡丁改成糖醋里脊"',
        example: `PUT /api/users/123
Body: {"name": "李四", "email": "li@example.com", "age": 25}
# 注意:必须提供所有字段`
      },
      {
        id: 'patch',
        name: '部分更新',
        use: '修改字段',
        idempotent: false,
        desc: '只修改资源的部分字段',
        analogy: '"宫保鸡丁不要放花生"',
        example: `PATCH /api/users/123
Body: {"name": "王五"}
# 只修改 name,其他字段保持不变`
      },
      {
        id: 'delete',
        name: '删除',
        use: '删除资源',
        idempotent: true,
        desc: '从服务器删除资源',
        analogy: '"算了,那道菜不要了"',
        example: `DELETE /api/users/123       # 删除指定用户
DELETE /api/orders/456      # 取消订单`
      }
    ]
  },
  apiDocument: {
    title: 'API 文档翻译机',
    bodyParams: 'Body 参数',
    required: '必填',
    optional: '可选',
    modelDesc: '模型名称',
    messagesDesc: '对话消息',
    temperatureDesc: '0-2，默认1',
    resultTitle: '翻译成代码',
    coreTitle: '核心思想：',
    coreText:
      '看文档找三样：地址（Base URL）、鉴权（Authorization）、参数（Parameters）。',
    userGreeting: '你好'
  },
  apiPlayground: {
    title: 'API 练手场',
    subtitle: '随便玩，坏了算我的',
    method: '方法',
    send: '🚀 发送',
    sending: '发送中...',
    empty: '点击发送查看结果',
    quickActions: '快速尝试：',
    errors: {
      missingApiKey: '缺少 API Key',
      notFound: '接口不存在',
      tooManyRequests: '请求太频繁'
    },
    users: [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' }
    ],
    explanations: {
      unauthorized: '服务器不认识你，需要提供有效的身份证明',
      success: '成功！服务器返回了用户列表',
      notFound: '这个地址没有对应的 API，检查一下路径',
      rateLimited: '你请求太快了，服务器让你歇会儿'
    }
  },
  functionVsHttp: {
    title: '📚 函数 API vs HTTP API',
    subtitle: '本地调用 vs 网络请求，文档怎么看？',
    tabs: [
      { id: 'compare', name: '核心区别', icon: '🔍' },
      { id: 'docs', name: '文档对比', icon: '📚' },
      { id: 'quick', name: '快速判断', icon: '⚡' }
    ],
    featureLabels: {
      call: '调用方式',
      params: '参数传递',
      result: '返回值',
      errors: '错误处理'
    },
    compareCards: [
      {
        id: 'function',
        icon: '📦',
        title: '函数 API',
        headerClass: 'function',
        features: {
          call: '直接函数调用',
          params: '括号内传参',
          result: '直接获得结果',
          errors: '异常/返回值'
        },
        codeLabel: 'Python 示例',
        code: `# 调用内置函数
length = len("hello")      # 返回 5

# 调用库函数
import math
result = math.sqrt(16)     # 返回 4.0

# 调用自定义函数
def add(a, b):
    return a + b
sum = add(3, 5)            # 返回 8`
      },
      {
        id: 'http',
        icon: '🌐',
        title: 'HTTP API',
        headerClass: 'http',
        features: {
          call: '网络请求',
          params: 'URL/Body/Header',
          result: 'JSON/XML 响应',
          errors: '状态码判断'
        },
        codeLabel: 'HTTP 请求示例',
        code: `POST /v1/chat/completions HTTP/1.1
Host: api.deepseek.com
Authorization: Bearer sk-xxx
Content-Type: application/json

{
  "model": "deepseek-chat",
  "messages": [
    {"role": "user", "content": "你好"}
  ]
}`
      }
    ],
    docFocusTitle: '🔍 关注重点',
    docCards: [
      {
        icon: '📖',
        title: '函数文档怎么看',
        points: [
          { label: '函数签名', text: '函数名和参数列表' },
          { label: '参数类型', text: '每个参数要什么类型' },
          { label: '返回值', text: '函数返回什么' },
          { label: '异常说明', text: '可能抛出什么错误' }
        ],
        codeLabel: 'Python 文档示例',
        code: `def open(file: str, mode: str = 'r') -> TextIO:
    """
    打开文件并返回文件对象
    
    Args:
        file: 文件路径
        mode: 打开模式 ('r', 'w', 'a')
    
    Returns:
        文件对象
    
    Raises:
        FileNotFoundError: 文件不存在
    """`
      },
      {
        icon: '📡',
        title: 'HTTP API 文档怎么看',
        points: [
          { label: 'Endpoint', text: 'URL 路径和 HTTP 方法' },
          { label: '认证方式', text: 'API Key / Token 怎么传' },
          { label: '请求参数', text: 'Body / Query / Header' },
          { label: '响应格式', text: '成功和错误返回什么' }
        ],
        codeLabel: 'API 文档示例',
        code: `POST /v1/chat/completions

Headers:
  Authorization: Bearer {api_key}
  Content-Type: application/json

Body:
{
  "model": "deepseek-chat",
  "messages": [...],
  "temperature": 0.7
}

Response:
{
  "choices": [{
    "message": {"content": "..."}
  }]
}`
      }
    ],
    quickGuideTitle: '快速判断指南',
    decisionItems: [
      {
        question: '看到代码里有 () 调用？',
        answer: '这是函数 API',
        example: '如：len(), print(), requests.get()'
      },
      {
        question: '看到 URL 和 HTTP 方法？',
        answer: '这是 HTTP API',
        example: '如：POST /api/users, GET https://...'
      },
      {
        question: '看到 SDK/Client 对象？',
        answer: '这是封装后的 HTTP API',
        example: '如：client.chat.completions.create()'
      }
    ],
    scenarioTitle: '使用场景对比',
    scenarioHeaders: ['场景', '推荐方式', '原因'],
    scenarios: [
      {
        scenario: '本地数据处理',
        mode: '函数 API',
        badgeClass: 'function',
        reason: '快速、无需网络'
      },
      {
        scenario: '调用 AI 模型',
        mode: 'HTTP API',
        badgeClass: 'http',
        reason: '模型在远程服务器'
      },
      {
        scenario: '获取天气数据',
        mode: 'HTTP API',
        badgeClass: 'http',
        reason: '数据在服务商那里'
      },
      {
        scenario: '文件读写操作',
        mode: '函数 API',
        badgeClass: 'function',
        reason: '直接操作本地文件'
      }
    ],
    infoTitle: '核心要点：',
    infoText:
      '函数 API 是"本地办事"，HTTP API 是"远程通信"。看文档时，函数关注参数和返回值，HTTP API 关注 Endpoint、认证和请求/响应格式。'
  },
  documentTypes: {
    title: '📋 不同文档类型怎么看',
    subtitle: '函数文档、REST API 文档、SDK 文档，各有侧重点',
    infoLabels: {
      type: '文档类型',
      scenario: '适用场景',
      difficulty: '阅读难度'
    },
    keyPointsTitle: '🔍 看文档时重点关注',
    exampleTitle: '文档示例',
    tipsTitle: '阅读技巧',
    summaryTitle: '三种文档快速对比',
    summaryHeaders: ['对比项', '函数文档', 'REST API 文档', 'SDK 文档'],
    summaryRows: [
      ['核心关注', '参数、返回值', 'Endpoint、请求体', '初始化、方法链'],
      ['代码示例', '函数调用', 'HTTP 请求', '对象方法'],
      ['错误处理', '异常/返回值', '状态码', '异常对象'],
      ['先看什么', '函数签名', 'Base URL + Auth', 'Quick Start']
    ],
    infoTitle: '阅读建议：',
    infoText:
      '函数文档看签名，API 文档看请求格式，SDK 文档看示例。遇到不会的，先找「Quick Start」或「Getting Started」章节。',
    docTypes: [
      {
        id: 'function',
        icon: '📦',
        name: '函数文档',
        scenario: '使用标准库/第三方库函数',
        difficulty: '⭐⭐',
        keyPoints: ['函数签名', '参数类型', '返回值', '异常说明', '示例代码'],
        example: `### json.loads(s, *, cls=None, object_hook=None...)

将 JSON 字符串解析为 Python 对象

**参数：**
- s (str): 要解析的 JSON 字符串
- cls (JSONDecoder): 自定义解码器类
- object_hook (callable): 可选的转换函数

**返回值：**
- dict | list: 解析后的 Python 对象

**异常：**
- JSONDecodeError: 字符串格式非法

**示例：**
>>> import json
>>> json.loads('{"name": "Alice"}')
{'name': 'Alice'}`,
        tips: [
          '先看函数签名，了解需要什么参数',
          '注意参数的类型和是否必填',
          '查看返回值类型，方便后续处理',
          '关注可能抛出的异常，做好错误处理'
        ]
      },
      {
        id: 'rest',
        icon: '🌐',
        name: 'REST API 文档',
        scenario: '调用远程 HTTP 接口',
        difficulty: '⭐⭐⭐',
        keyPoints: [
          'Base URL',
          '认证方式',
          'Endpoint',
          '请求参数',
          '响应格式',
          '错误码'
        ],
        example: `## POST /v1/chat/completions

创建聊天完成请求

### 认证
Authorization: Bearer {api_key}

### 请求参数
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| model | string | 是 | 模型名称 |
| messages | array | 是 | 消息列表 |
| temperature | float | 否 | 采样温度 (0-2) |

### 请求示例
{
  "model": "deepseek-chat",
  "messages": [
    {"role": "user", "content": "Hello"}
  ],
  "temperature": 0.7
}

### 响应示例
{
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you?"
    }
  }]
}`,
        tips: [
          '先找到 Base URL 和认证方式（通常是 API Key）',
          '确认 HTTP 方法（GET/POST/PUT/DELETE）',
          '看清参数是放在 URL、Header 还是 Body 里',
          '注意必填参数和可选参数的区别',
          '查看错误码列表，了解各种异常情况'
        ]
      },
      {
        id: 'sdk',
        icon: '📚',
        name: 'SDK 文档',
        scenario: '使用官方封装好的开发工具包',
        difficulty: '⭐⭐',
        keyPoints: [
          '安装方式',
          '初始化',
          '核心类/方法',
          '配置选项',
          '最佳实践'
        ],
        example: `## OpenAI Python SDK

### 安装
pip install openai

### 初始化客户端
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.deepseek.com/v1"
)

### 创建聊天完成
response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "user", "content": "Hello!"}
    ],
    temperature=0.7,
    max_tokens=1000
)

print(response.choices[0].message.content)

### 流式响应
stream = client.chat.completions.create(
    model="deepseek-chat",
    messages=[...],
    stream=True
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`,
        tips: [
          '先看 Quick Start / Getting Started 章节',
          '了解如何初始化和配置客户端',
          '关注核心类和方法的使用方式',
          '查看高级配置选项（如超时、重试）',
          '参考官方示例代码，理解最佳实践'
        ]
      },
      {
        id: 'websocket',
        icon: '🔌',
        name: 'WebSocket 文档',
        scenario: '实时双向通信',
        difficulty: '⭐⭐⭐⭐',
        keyPoints: [
          '连接地址',
          '连接建立',
          '消息格式',
          '事件处理',
          '心跳机制',
          '断开重连'
        ],
        example: `## WebSocket API

### 连接地址
wss://api.example.com/v1/stream

### 连接流程

1. **建立连接**
   - 发送握手请求
   - 服务端返回连接确认

2. **发送消息**
   {
     "type": "subscribe",
     "channel": "price_updates",
     "symbol": "BTC-USD"
   }

3. **接收推送**
   {
     "type": "update",
     "data": {
       "symbol": "BTC-USD",
       "price": "45000.00",
       "timestamp": 1703001600
     }
   }

### 心跳机制
客户端每 30 秒发送 ping：
{"type": "ping"}

服务端返回 pong：
{"type": "pong"}`,
        tips: [
          '注意 ws:// 和 wss:// 的区别（是否加密）',
          '了解连接建立和关闭的时机',
          '明确消息的数据格式和类型',
          '实现心跳检测，保持连接活跃',
          '处理好断线重连逻辑',
          '关注并发连接数限制'
        ]
      }
    ]
  }
}
