export default {
  apiTypes: {
    labels: {
      target: 'Target',
      comm: 'Communication',
      latency: 'Latency',
      scenarios: 'Typical scenarios',
      example: '{name} example'
    },
    types: [
      {
        id: 'function',
        icon: '📦',
        name: 'Function API',
        target: 'Local code library',
        comm: 'Function call',
        latency: 'Nanoseconds',
        scenarios: 'Data processing, file operations',
        example: `len("hello")           # returns 5
max([1, 5, 3])         # returns 5
open("file.txt").read() # reads a file`
      },
      {
        id: 'system',
        icon: '⚙️',
        name: 'Operating System API',
        target: 'OS kernel',
        comm: 'System call',
        latency: 'Microseconds',
        scenarios: 'File operations, process management',
        example: `with open("file.txt", "r") as f:
    content = f.read()

subprocess.run(["ls", "-l"])`
      },
      {
        id: 'web',
        icon: '🌐',
        name: 'Web API',
        target: 'Remote server',
        comm: 'HTTP request',
        latency: 'Milliseconds',
        scenarios: 'AI calls, data retrieval',
        example: `requests.post(
    "https://api.deepseek.com/v1/chat/completions",
    json={"model": "deepseek-chat", "messages": [...]}
)`
      }
    ]
  },
  statusCategories: {
    memoryTitle: 'Memory tip:',
    tip2: '2️⃣ Success',
    tip3: '3️⃣ Redirect',
    tip4: '4️⃣ Client error',
    tip5: '5️⃣ Server error',
    categories: [
      {
        id: 'success',
        code: '2',
        name: 'Success',
        desc: 'The request was received, understood, and processed successfully',
        examples: ['200 OK', '201 Created', '204 No Content']
      },
      {
        id: 'redirect',
        code: '3',
        name: 'Redirect',
        desc: 'More action is needed to complete the request',
        examples: [
          '301 Moved Permanently',
          '304 Not Modified',
          '307 Temporary Redirect'
        ]
      },
      {
        id: 'client-error',
        code: '4',
        name: 'Client error',
        desc: 'The request has an error or cannot be completed',
        examples: [
          '400 Bad Request',
          '401 Unauthorized',
          '403 Forbidden',
          '404 Not Found'
        ]
      },
      {
        id: 'server-error',
        code: '5',
        name: 'Server error',
        desc: 'The server failed to handle a valid request',
        examples: ['500 Internal Error', '502 Bad Gateway', '503 Unavailable']
      }
    ]
  },
  httpMethods: {
    idempotent: 'Idempotent',
    notIdempotent: 'Not idempotent',
    analogy: 'Restaurant analogy:',
    methods: [
      {
        id: 'get',
        name: 'Read',
        use: 'Query data',
        idempotent: true,
        desc: 'Fetch resources from the server without changing data',
        analogy: '"Waiter, show me the menu"',
        example: `GET /api/users           # fetch user list
GET /api/users/123       # fetch one user
GET /api/products?cat=phone  # query phone products`
      },
      {
        id: 'post',
        name: 'Create',
        use: 'Add data',
        idempotent: false,
        desc: 'Submit data to the server and create a new resource',
        analogy: '"I would like kung pao chicken"',
        example: `POST /api/users
Body: {"name": "Alice", "email": "alice@example.com"}

POST /api/orders
Body: {"items": [{"id": 1, "qty": 2}]}`
      },
      {
        id: 'put',
        name: 'Full update',
        use: 'Replace resource',
        idempotent: true,
        desc: 'Replace the old resource completely with new data',
        analogy: '"Change kung pao chicken to sweet-and-sour pork"',
        example: `PUT /api/users/123
Body: {"name": "Bob", "email": "bob@example.com", "age": 25}
# Note: provide all fields`
      },
      {
        id: 'patch',
        name: 'Partial update',
        use: 'Modify fields',
        idempotent: false,
        desc: 'Modify only part of a resource',
        analogy: '"No peanuts in the kung pao chicken"',
        example: `PATCH /api/users/123
Body: {"name": "Carol"}
# Only name changes; other fields stay the same`
      },
      {
        id: 'delete',
        name: 'Delete',
        use: 'Remove resource',
        idempotent: true,
        desc: 'Delete a resource from the server',
        analogy: '"Never mind, cancel that dish"',
        example: `DELETE /api/users/123       # delete a user
DELETE /api/orders/456      # cancel an order`
      }
    ]
  },
  apiDocument: {
    title: 'API Document Translator',
    bodyParams: 'Body parameters',
    required: 'Required',
    optional: 'Optional',
    modelDesc: 'Model name',
    messagesDesc: 'Conversation messages',
    temperatureDesc: '0-2, default 1',
    resultTitle: 'Translate into code',
    coreTitle: 'Core idea:',
    coreText:
      'When reading docs, find three things: address (Base URL), authentication (Authorization), and parameters.',
    userGreeting: 'Hello'
  },
  apiPlayground: {
    title: 'API Playground',
    subtitle: 'Try calls without touching a real server',
    method: 'Method',
    send: '🚀 Send',
    sending: 'Sending...',
    empty: 'Send a request to see the response',
    quickActions: 'Quick tries:',
    errors: {
      missingApiKey: 'Missing API key',
      notFound: 'Endpoint not found',
      tooManyRequests: 'Too many requests'
    },
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ],
    explanations: {
      unauthorized:
        'The server does not know who you are, so you need valid credentials.',
      success: 'Success. The server returned a user list.',
      notFound: 'No API is attached to this address. Check the path.',
      rateLimited:
        'You sent requests too quickly, so the server asked you to slow down.'
    }
  },
  functionVsHttp: {
    title: '📚 Function API vs HTTP API',
    subtitle: 'Local calls vs network requests: how should you read the docs?',
    tabs: [
      { id: 'compare', name: 'Core differences', icon: '🔍' },
      { id: 'docs', name: 'Docs comparison', icon: '📚' },
      { id: 'quick', name: 'Quick check', icon: '⚡' }
    ],
    featureLabels: {
      call: 'Call style',
      params: 'Parameters',
      result: 'Return value',
      errors: 'Error handling'
    },
    compareCards: [
      {
        id: 'function',
        icon: '📦',
        title: 'Function API',
        headerClass: 'function',
        features: {
          call: 'Direct function call',
          params: 'Arguments inside parentheses',
          result: 'Return value directly',
          errors: 'Exception or return value'
        },
        codeLabel: 'Python example',
        code: `# Call a built-in function
length = len("hello")      # returns 5

# Call a library function
import math
result = math.sqrt(16)     # returns 4.0

# Call a custom function
def add(a, b):
    return a + b
sum = add(3, 5)            # returns 8`
      },
      {
        id: 'http',
        icon: '🌐',
        title: 'HTTP API',
        headerClass: 'http',
        features: {
          call: 'Network request',
          params: 'URL / body / headers',
          result: 'JSON/XML response',
          errors: 'Status code checks'
        },
        codeLabel: 'HTTP request example',
        code: `POST /v1/chat/completions HTTP/1.1
Host: api.deepseek.com
Authorization: Bearer sk-xxx
Content-Type: application/json

{
  "model": "deepseek-chat",
  "messages": [
    {"role": "user", "content": "Hello"}
  ]
}`
      }
    ],
    docFocusTitle: '🔍 What to focus on',
    docCards: [
      {
        icon: '📖',
        title: 'How to read function docs',
        points: [
          {
            label: 'Function signature',
            text: 'The function name and parameter list'
          },
          {
            label: 'Parameter types',
            text: 'The expected type of each parameter'
          },
          { label: 'Return value', text: 'What the function returns' },
          { label: 'Exceptions', text: 'What errors may be thrown' }
        ],
        codeLabel: 'Python docs example',
        code: `def open(file: str, mode: str = 'r') -> TextIO:
    """
    Open a file and return a file object.
    
    Args:
        file: File path
        mode: Open mode ('r', 'w', 'a')
    
    Returns:
        File object
    
    Raises:
        FileNotFoundError: File does not exist
    """`
      },
      {
        icon: '📡',
        title: 'How to read HTTP API docs',
        points: [
          { label: 'Endpoint', text: 'URL path and HTTP method' },
          { label: 'Authentication', text: 'How to pass an API key or token' },
          { label: 'Request parameters', text: 'Body, query, and headers' },
          {
            label: 'Response format',
            text: 'What success and error responses return'
          }
        ],
        codeLabel: 'API docs example',
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
    quickGuideTitle: 'Quick decision guide',
    decisionItems: [
      {
        question: 'Do you see a () call in code?',
        answer: 'This is a function API',
        example: 'For example: len(), print(), requests.get()'
      },
      {
        question: 'Do you see a URL and HTTP method?',
        answer: 'This is an HTTP API',
        example: 'For example: POST /api/users, GET https://...'
      },
      {
        question: 'Do you see an SDK or client object?',
        answer: 'This is a wrapped HTTP API',
        example: 'For example: client.chat.completions.create()'
      }
    ],
    scenarioTitle: 'Scenario comparison',
    scenarioHeaders: ['Scenario', 'Recommended style', 'Reason'],
    scenarios: [
      {
        scenario: 'Local data processing',
        mode: 'Function API',
        badgeClass: 'function',
        reason: 'Fast and no network needed'
      },
      {
        scenario: 'Calling an AI model',
        mode: 'HTTP API',
        badgeClass: 'http',
        reason: 'The model runs on a remote server'
      },
      {
        scenario: 'Fetching weather data',
        mode: 'HTTP API',
        badgeClass: 'http',
        reason: 'The data lives at the provider'
      },
      {
        scenario: 'Reading and writing files',
        mode: 'Function API',
        badgeClass: 'function',
        reason: 'Operate on local files directly'
      }
    ],
    infoTitle: 'Core point:',
    infoText:
      'A function API works locally; an HTTP API communicates remotely. Function docs focus on parameters and return values, while HTTP API docs focus on endpoint, authentication, and request/response formats.'
  },
  documentTypes: {
    title: '📋 How to Read Different Doc Types',
    subtitle:
      'Function docs, REST API docs, and SDK docs each emphasize different things',
    infoLabels: {
      type: 'Doc type',
      scenario: 'Best for',
      difficulty: 'Difficulty'
    },
    keyPointsTitle: '🔍 What to focus on',
    exampleTitle: 'Doc example',
    tipsTitle: 'Reading tips',
    summaryTitle: 'Quick comparison of three doc types',
    summaryHeaders: ['Item', 'Function docs', 'REST API docs', 'SDK docs'],
    summaryRows: [
      [
        'Core focus',
        'Parameters, return values',
        'Endpoint, request body',
        'Initialization, method chain'
      ],
      ['Code example', 'Function call', 'HTTP request', 'Object method'],
      [
        'Error handling',
        'Exceptions/return values',
        'Status codes',
        'Exception objects'
      ],
      ['Read first', 'Function signature', 'Base URL + Auth', 'Quick Start']
    ],
    infoTitle: 'Reading advice:',
    infoText:
      'For function docs, read the signature. For API docs, read the request format. For SDK docs, read examples first. When stuck, look for Quick Start or Getting Started.',
    docTypes: [
      {
        id: 'function',
        icon: '📦',
        name: 'Function docs',
        scenario: 'Using standard library or third-party functions',
        difficulty: '⭐⭐',
        keyPoints: [
          'Function signature',
          'Parameter types',
          'Return value',
          'Exceptions',
          'Example code'
        ],
        example: `### json.loads(s, *, cls=None, object_hook=None...)

Parse a JSON string into a Python object.

**Parameters:**
- s (str): JSON string to parse
- cls (JSONDecoder): Custom decoder class
- object_hook (callable): Optional conversion function

**Returns:**
- dict | list: Parsed Python object

**Raises:**
- JSONDecodeError: The string is invalid JSON

**Example:**
>>> import json
>>> json.loads('{"name": "Alice"}')
{'name': 'Alice'}`,
        tips: [
          'Read the function signature first to see what parameters are needed.',
          'Check parameter types and whether each parameter is required.',
          'Check the return type so later code can handle it correctly.',
          'Notice possible exceptions and prepare error handling.'
        ]
      },
      {
        id: 'rest',
        icon: '🌐',
        name: 'REST API docs',
        scenario: 'Calling remote HTTP endpoints',
        difficulty: '⭐⭐⭐',
        keyPoints: [
          'Base URL',
          'Authentication',
          'Endpoint',
          'Request parameters',
          'Response format',
          'Error codes'
        ],
        example: `## POST /v1/chat/completions

Create a chat completion request.

### Authentication
Authorization: Bearer {api_key}

### Request parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| model | string | Yes | Model name |
| messages | array | Yes | Message list |
| temperature | float | No | Sampling temperature (0-2) |

### Request example
{
  "model": "deepseek-chat",
  "messages": [
    {"role": "user", "content": "Hello"}
  ],
  "temperature": 0.7
}

### Response example
{
  "choices": [{
    "message": {
      "role": "assistant",
      "content": "Hello! How can I help you?"
    }
  }]
}`,
        tips: [
          'Find the Base URL and authentication method first, usually an API key.',
          'Confirm the HTTP method: GET, POST, PUT, or DELETE.',
          'Check whether parameters go in the URL, headers, or body.',
          'Separate required parameters from optional ones.',
          'Read the error code list to understand failure cases.'
        ]
      },
      {
        id: 'sdk',
        icon: '📚',
        name: 'SDK docs',
        scenario: 'Using an official packaged developer toolkit',
        difficulty: '⭐⭐',
        keyPoints: [
          'Installation',
          'Initialization',
          'Core classes/methods',
          'Configuration options',
          'Best practices'
        ],
        example: `## OpenAI Python SDK

### Install
pip install openai

### Initialize client
from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://api.deepseek.com/v1"
)

### Create a chat completion
response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "user", "content": "Hello!"}
    ],
    temperature=0.7,
    max_tokens=1000
)

print(response.choices[0].message.content)

### Streaming response
stream = client.chat.completions.create(
    model="deepseek-chat",
    messages=[...],
    stream=True
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")`,
        tips: [
          'Start with the Quick Start or Getting Started section.',
          'Understand how to initialize and configure the client.',
          'Focus on the core classes and methods.',
          'Review advanced options such as timeout and retries.',
          'Use official examples to understand best practices.'
        ]
      },
      {
        id: 'websocket',
        icon: '🔌',
        name: 'WebSocket docs',
        scenario: 'Real-time bidirectional communication',
        difficulty: '⭐⭐⭐⭐',
        keyPoints: [
          'Connection URL',
          'Connection setup',
          'Message format',
          'Event handling',
          'Heartbeat',
          'Reconnect'
        ],
        example: `## WebSocket API

### Connection URL
wss://api.example.com/v1/stream

### Connection flow

1. **Open connection**
   - Send handshake request
   - Server confirms the connection

2. **Send message**
   {
     "type": "subscribe",
     "channel": "price_updates",
     "symbol": "BTC-USD"
   }

3. **Receive pushes**
   {
     "type": "update",
     "data": {
       "symbol": "BTC-USD",
       "price": "45000.00",
       "timestamp": 1703001600
     }
   }

### Heartbeat
Client sends ping every 30 seconds:
{"type": "ping"}

Server returns pong:
{"type": "pong"}`,
        tips: [
          'Notice the difference between ws:// and wss://.',
          'Understand when the connection opens and closes.',
          'Clarify the message data format and message types.',
          'Implement heartbeat checks to keep the connection alive.',
          'Handle reconnect logic after disconnects.',
          'Watch concurrent connection limits.'
        ]
      }
    ]
  }
}
