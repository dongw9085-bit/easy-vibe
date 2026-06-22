export default {
  request: {
    terminalTitle: 'API Request Demo',
    reset: 'Reset',
    initialLine: '// Click a command below to simulate API requests',
    initialHint:
      'Click a command button to observe a complete API request-response flow.',
    client: { title: 'Client', desc: 'Sends request' },
    server: { title: 'Server', desc: 'Handles request' },
    response: { title: 'Response', desc: 'Returns result' },
    emptyRequest: 'Waiting for request...',
    emptyServer: 'Waiting...',
    emptyResponse: 'Waiting for response...',
    ops: [
      {
        id: 'get-users',
        cmd: 'GET /api/users',
        output: [
          { kind: 'dim', text: '// Fetch user list' },
          { kind: 'grn', text: 'HTTP/1.1 200 OK' },
          { kind: 'dim', text: 'Content-Type: application/json' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 0, "data": { "items": [...] } }' }
        ],
        hint: 'GET succeeded. Status 200 means the request was handled normally and the server returned the user list.',
        request: { method: 'GET', url: '/api/users' },
        serverSteps: [
          { icon: '&#x26A1;', text: 'Querying database...' },
          { icon: '&#x2713;', text: 'Done' }
        ],
        response: {
          status: '200 OK',
          statusClass: 'success',
          body: '{\n  "code": 0,\n  "data": {\n    "items": [\n      {"id": 1, "name": "Alice"},\n      {"id": 2, "name": "Bob"}\n    ]\n  }\n}'
        }
      },
      {
        id: 'post-user',
        cmd: 'POST /api/users',
        output: [
          { kind: 'dim', text: '// Create a user' },
          { kind: 'grn', text: 'HTTP/1.1 201 Created' },
          { kind: 'dim', text: 'Location: /api/users/3' },
          { kind: 'dim', text: '' },
          {
            kind: 'grn',
            text: '{ "code": 0, "data": { "id": 3, "name": "Carol" } }'
          }
        ],
        hint: 'POST created the resource. Status 201 means a new resource was created and Location points to it.',
        request: {
          method: 'POST',
          url: '/api/users',
          body: '{\n  "name": "Carol",\n  "email": "carol@example.com"\n}'
        },
        serverSteps: [
          { icon: '&#x26A1;', text: 'Validating data...' },
          { icon: '&#x26A1;', text: 'Writing database...' },
          { icon: '&#x2713;', text: 'Created' }
        ],
        response: {
          status: '201 Created',
          statusClass: 'success',
          body: '{\n  "code": 0,\n  "data": {\n    "id": 3,\n    "name": "Carol",\n    "email": "carol@example.com"\n  }\n}'
        }
      },
      {
        id: 'get-404',
        cmd: 'GET /api/users/999',
        output: [
          { kind: 'dim', text: '// Fetch a missing user' },
          { kind: 'red', text: 'HTTP/1.1 404 Not Found' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10002, "message": "User not found" }'
          }
        ],
        hint: '404 means the requested resource does not exist. The client should check whether the requested ID is correct.',
        request: { method: 'GET', url: '/api/users/999' },
        serverSteps: [
          { icon: '&#x1F50D;', text: 'Looking up user...' },
          { icon: '&#x2717;', text: 'Not found' }
        ],
        response: {
          status: '404 Not Found',
          statusClass: 'error',
          body: '{\n  "code": 10002,\n  "message": "User not found"\n}'
        }
      },
      {
        id: 'post-401',
        cmd: 'POST /api/orders (no token)',
        output: [
          { kind: 'dim', text: '// Try to place an order while logged out' },
          { kind: 'red', text: 'HTTP/1.1 401 Unauthorized' },
          { kind: 'dim', text: 'WWW-Authenticate: Bearer' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10018, "message": "Please sign in first" }'
          }
        ],
        hint: '401 means authentication is required. The client should ask the user to sign in before retrying.',
        request: {
          method: 'POST',
          url: '/api/orders',
          body: '{\n  "product_id": "P001",\n  "quantity": 2\n}'
        },
        serverSteps: [
          { icon: '&#x1F510;', text: 'Checking identity...' },
          { icon: '&#x2717;', text: 'Unauthorized' }
        ],
        response: {
          status: '401 Unauthorized',
          statusClass: 'error',
          body: '{\n  "code": 10018,\n  "message": "Please sign in first"\n}'
        }
      }
    ]
  },
  style: {
    title: 'Four API Styles Compared',
    exampleLabel: 'Example: fetch user information',
    featuresTitle: 'Key features',
    scenarioLabel: 'Use cases',
    officialLabel: 'Official site',
    compareTitle: '&#x1F4CA; Style quick comparison',
    compareHeaders: ['Feature', 'RPC', 'REST', 'GraphQL', 'gRPC'],
    compareRows: [
      [
        'Core idea',
        'Procedure-oriented',
        'Resource-oriented',
        'Data-oriented',
        'Method-oriented'
      ],
      [
        'URL style',
        'Verb-first',
        'Noun-first',
        'Single endpoint',
        'URL-independent'
      ],
      ['Learning curve', 'Low', 'Medium', 'Medium', 'High'],
      ['Performance', 'Average', 'Average', 'Good', 'Excellent'],
      ['Usage share', '~30%', '~50%', '~15%', '~5%']
    ],
    styles: [
      {
        id: 'rpc',
        icon: '&#x1F4DE;',
        name: 'RPC',
        badge: 'Traditional',
        desc: 'Remote Procedure Call lets a client call a remote service like a local function. It is procedure-oriented, direct, and common for internal APIs.',
        example:
          'GET /getUserInfo?id=123\nPOST /createUser\nPOST /deleteOrder\nGET /queryUserList',
        features: [
          'URLs are often verbs',
          'Mostly uses GET and POST',
          'Simple design with few constraints',
          'Needs detailed documentation'
        ],
        scenarios:
          'Internal APIs, performance-sensitive paths, and business actions that are hard to model as resources',
        official: 'No official standard; conceptual style'
      },
      {
        id: 'rest',
        icon: '&#x1F310;',
        name: 'REST',
        badge: 'Most common',
        desc: 'Representational State Transfer was introduced by Roy Fielding in 2000. It models the system as resources identified by URLs and operated on with HTTP methods.',
        example:
          'GET    /users           # Fetch user list\nGET    /users/123       # Fetch one user\nPOST   /users           # Create user\nPUT    /users/123       # Full update\nPATCH  /users/123       # Partial update\nDELETE /users/123       # Delete user',
        features: [
          'URLs are nouns, not verbs',
          'HTTP methods express actions',
          'Stateless requests carry all needed context',
          'Cacheable and friendly to layered systems'
        ],
        scenarios:
          'Public APIs, CRUD operations, and domains with clear resource boundaries',
        official: 'https://restfulapi.net/'
      },
      {
        id: 'graphql',
        icon: '&#x1F4CA;',
        name: 'GraphQL',
        badge: 'Most flexible',
        desc: 'Open-sourced by Facebook in 2015, GraphQL is a query language where clients request exactly the fields they need to avoid over-fetching and under-fetching.',
        example:
          'query {\n  user(id: "123") {\n    name\n    email\n    orders {\n      id\n      total\n    }\n  }\n}',
        features: [
          'Single /graphql endpoint',
          'Client chooses returned fields',
          'Schema doubles as documentation',
          'Fetches multiple related resources in one request'
        ],
        scenarios:
          'Changing client needs, complex data relationships, and mobile apps',
        official: 'https://graphql.org/'
      },
      {
        id: 'grpc',
        icon: '&#x26A1;',
        name: 'gRPC',
        badge: 'Most efficient',
        desc: 'Open-sourced by Google in 2016, gRPC is a high-performance RPC framework using Protocol Buffers over HTTP/2 with bidirectional streaming.',
        example:
          'service UserService {\n  rpc GetUser(GetUserRequest) returns (User);\n  rpc CreateUser(CreateUserRequest) returns (User);\n}\n\nmessage User {\n  string id = 1;\n  string name = 2;\n}',
        features: [
          'Binary transport with high performance',
          'Strong typing and generated code',
          'HTTP/2 with bidirectional streams',
          'Weak native browser support'
        ],
        scenarios:
          'Internal microservice communication, high-performance systems, and strongly typed contracts',
        official: 'https://grpc.io/'
      }
    ]
  },
  status: {
    terminalTitle: 'HTTP Status Code Demo',
    reset: 'Reset',
    initialLine: '// Click a button to inspect status code meanings',
    initialHint: 'Click a command button to learn common HTTP status codes.',
    sections: {
      success: { icon: '&#x2705;', title: '2xx Success' },
      client: { icon: '&#x26A0;&#xFE0F;', title: '4xx Client errors' },
      server: { icon: '&#x1F534;', title: '5xx Server errors' }
    },
    successCodes: [
      { code: 200, name: 'OK', desc: 'Request succeeded' },
      { code: 201, name: 'Created', desc: 'Resource created' },
      { code: 204, name: 'No Content', desc: 'Succeeded with no response body' }
    ],
    clientCodes: [
      { code: 400, name: 'Bad Request', desc: 'Malformed request' },
      { code: 401, name: 'Unauthorized', desc: 'Not authenticated' },
      { code: 403, name: 'Forbidden', desc: 'No permission' },
      { code: 404, name: 'Not Found', desc: 'Resource missing' },
      { code: 422, name: 'Unprocessable', desc: 'Semantic validation error' },
      { code: 429, name: 'Too Many', desc: 'Too many requests' }
    ],
    serverCodes: [
      { code: 500, name: 'Server Error', desc: 'Internal server error' },
      { code: 502, name: 'Bad Gateway', desc: 'Gateway error' },
      { code: 503, name: 'Unavailable', desc: 'Service unavailable' }
    ],
    ops: [
      {
        id: '200',
        cmd: '200 OK',
        code: 200,
        output: [
          { kind: 'dim', text: '// Most common success code' },
          { kind: 'grn', text: 'HTTP/1.1 200 OK' },
          { kind: 'dim', text: 'Content-Type: application/json' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 0, "data": { ... } }' }
        ],
        hint: '200 means the request was handled successfully. It is common for successful GET, PUT, and PATCH calls.'
      },
      {
        id: '201',
        cmd: '201 Created',
        code: 201,
        output: [
          { kind: 'dim', text: '// Resource created' },
          { kind: 'grn', text: 'HTTP/1.1 201 Created' },
          { kind: 'dim', text: 'Location: /api/users/123' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 0, "data": { "id": 123 } }' }
        ],
        hint: '201 means a resource was created. The Location header points to the new resource.'
      },
      {
        id: '400',
        cmd: '400 Bad Request',
        code: 400,
        output: [
          { kind: 'dim', text: '// Client request is invalid' },
          { kind: 'red', text: 'HTTP/1.1 400 Bad Request' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10001, "message": "Invalid parameter format" }'
          }
        ],
        hint: '400 means the request syntax is wrong, such as invalid JSON or a missing required field.'
      },
      {
        id: '401',
        cmd: '401 Unauthorized',
        code: 401,
        output: [
          { kind: 'dim', text: '// Authentication required' },
          { kind: 'red', text: 'HTTP/1.1 401 Unauthorized' },
          { kind: 'dim', text: 'WWW-Authenticate: Bearer' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10018, "message": "Please sign in first" }'
          }
        ],
        hint: '401 means the user is not authenticated. Expired tokens and logged-out users should be guided to sign in.'
      },
      {
        id: '403',
        cmd: '403 Forbidden',
        code: 403,
        output: [
          { kind: 'dim', text: '// Signed in but not allowed' },
          { kind: 'red', text: 'HTTP/1.1 403 Forbidden' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10021, "message": "Admin permission required" }'
          }
        ],
        hint: '403 means the user is authenticated but does not have permission for this resource.'
      },
      {
        id: '404',
        cmd: '404 Not Found',
        code: 404,
        output: [
          { kind: 'dim', text: '// Resource does not exist' },
          { kind: 'red', text: 'HTTP/1.1 404 Not Found' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10002, "message": "User not found" }'
          }
        ],
        hint: '404 means the requested resource does not exist. The URL may be wrong or the resource may have been deleted.'
      },
      {
        id: '500',
        cmd: '500 Server Error',
        code: 500,
        output: [
          { kind: 'dim', text: '// Internal server error' },
          { kind: 'red', text: 'HTTP/1.1 500 Internal Server Error' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10000, "message": "Server error, contact support" }'
          }
        ],
        hint: '500 means an internal server failure such as a bug or database outage. Do not expose stack traces.'
      }
    ]
  },
  errorHandling: {
    terminalTitle: 'Error Handling Demo',
    reset: 'Reset',
    responseLabel: 'Response structure',
    emptyResponse: 'Click a button above to view an error response example',
    initialLine: '// Compare poor and good error handling',
    initialHint:
      'Click a button to compare poor and good error response design.',
    ops: [
      {
        id: 'bad1',
        cmd: '&#x274C; Bad: every error returns 200',
        output: [
          { kind: 'dim', text: '// HTTP 200 but business failed' },
          { kind: 'yel', text: 'HTTP/1.1 200 OK' },
          { kind: 'dim', text: '' },
          { kind: 'yel', text: '{ "error": "Something went wrong" }' }
        ],
        hint: 'Problem: the HTTP status says success while the business result says failure. Caches and monitoring can miss this.',
        responseStatus: '200 (wrong)',
        responseData: '{\n  "error": "Something went wrong"\n}'
      },
      {
        id: 'bad2',
        cmd: '&#x274C; Bad: vague error message',
        output: [
          { kind: 'dim', text: '// Error message is not actionable' },
          { kind: 'red', text: 'HTTP/1.1 400 Bad Request' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: '{ "message": "Invalid parameter" }' }
        ],
        hint: 'Problem: the client does not know which parameter is wrong or how to fix it.',
        responseStatus: '400',
        responseData: '{\n  "message": "Invalid parameter"\n}'
      },
      {
        id: 'bad3',
        cmd: '&#x274C; Bad: sensitive details leaked',
        output: [
          { kind: 'dim', text: '// 500 leaks stack trace' },
          { kind: 'red', text: 'HTTP/1.1 500 Internal Server Error' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "error": "TypeError: Cannot read property..." }'
          },
          { kind: 'red', text: '{ "stack": "at UserService.login..." }' },
          { kind: 'red', text: '{ "sql": "SELECT * FROM users WHERE..." }' }
        ],
        hint: 'Danger: exposing code structure and database queries gives attackers useful information.',
        responseStatus: '500',
        responseData: `{
  "error": "TypeError: Cannot read property 'id' of undefined",
  "stack": "at UserService.login (src/service.js:45)",
  "sql": "SELECT * FROM users WHERE email='...'"
}`
      },
      {
        id: 'good1',
        cmd: '&#x2705; Good: correct status code',
        output: [
          {
            kind: 'dim',
            text: '// HTTP status accurately describes the error type'
          },
          { kind: 'grn', text: 'HTTP/1.1 404 Not Found' },
          { kind: 'dim', text: '' },
          {
            kind: 'grn',
            text: '{ "code": 10002, "message": "User not found" }'
          }
        ],
        hint: 'Correct: 404 means the resource does not exist, so the client can identify the issue immediately.',
        responseStatus: '404',
        responseData:
          '{\n  "code": 10002,\n  "message": "User not found",\n  "request_id": "req-550e8400"\n}'
      },
      {
        id: 'good2',
        cmd: '&#x2705; Good: detailed error message',
        output: [
          { kind: 'dim', text: '// Details help locate the problem' },
          { kind: 'grn', text: 'HTTP/1.1 422 Unprocessable Entity' },
          { kind: 'dim', text: '' },
          {
            kind: 'grn',
            text: '{ "code": 20003, "message": "Password too weak" }'
          },
          { kind: 'grn', text: '{ "errors": [{ "field": "password", ... }] }' }
        ],
        hint: 'Correct: field-level details let the frontend show precise user guidance.',
        responseStatus: '422',
        responseData:
          '{\n  "code": 20003,\n  "message": "Password too weak",\n  "errors": [\n    {\n      "field": "password",\n      "code": "VALIDATION_ERROR",\n      "message": "Password must include at least one uppercase letter, one lowercase letter, and one number"\n    }\n  ],\n  "request_id": "req-550e8400"\n}'
      },
      {
        id: 'good3',
        cmd: '&#x2705; Good: safe error response',
        output: [
          { kind: 'dim', text: '// 500 returns only an error ID' },
          { kind: 'grn', text: 'HTTP/1.1 500 Internal Server Error' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 10000, "message": "Server error" }' },
          { kind: 'grn', text: '{ "error_id": "err-a1b2c3d4" }' }
        ],
        hint: 'Correct: return an error ID while keeping detailed logs on the server.',
        responseStatus: '500',
        responseData:
          '{\n  "code": 10000,\n  "message": "Internal server error, contact support",\n  "error_id": "err-a1b2c3d4",\n  "request_id": "req-550e8400",\n  "help_url": "https://docs.example.com/errors/10000"\n}'
      }
    ]
  },
  responseStructure: {
    title: 'API Response Structure Design',
    required: 'Required',
    tip: 'Use request_id for troubleshooting. UUID v4 or Snowflake IDs are common choices.',
    tabs: [
      { id: 'why', icon: '&#x2753;', name: 'Why unify' },
      { id: 'fields', icon: '&#x1F4DD;', name: 'Fields' },
      { id: 'codes', icon: '&#x1F522;', name: 'Codes' },
      { id: 'examples', icon: '&#x1F4C4;', name: 'Examples' },
      { id: 'pagination', icon: '&#x1F4D1;', name: 'Pagination' }
    ],
    why: {
      title: 'Why use a unified response format?',
      problemTitle: '&#x274C; Problem: endpoints return inconsistent shapes',
      problemCode:
        '// Endpoint A\n{ "data": { "user": {...} } }\n\n// Endpoint B\n{ "result": { "user": {...} } }\n\n// Endpoint C\n{ "user": {...} }',
      problemDesc:
        'The frontend must handle every endpoint separately, which creates duplicate and fragile code.',
      solutionTitle: '&#x2705; Solution: unified response format',
      solutionCode:
        '{\n  "code": 0,\n  "message": "success",\n  "data": { ... },\n  "request_id": "req-xxx"\n}'
    },
    fieldsTitle: 'Response field guide',
    fields: [
      {
        name: 'code',
        type: 'number',
        required: true,
        desc: 'Business status code. 0 means success.'
      },
      {
        name: 'message',
        type: 'string',
        required: true,
        desc: 'Human-readable status description.'
      },
      {
        name: 'data',
        type: 'any',
        required: false,
        desc: 'Business payload. Can be null on failure.'
      },
      {
        name: 'request_id',
        type: 'string',
        required: true,
        desc: 'Unique request identifier for tracing.'
      },
      {
        name: 'timestamp',
        type: 'string',
        required: false,
        desc: 'Response timestamp in ISO 8601 format.'
      }
    ],
    codesTitle: 'Business status code design',
    codeRanges: [
      { num: '0', label: 'Success' },
      { num: '1xxxx', label: 'Client errors' },
      { num: '2xxxx', label: 'Business errors' },
      { num: '3xxxx', label: 'Auth or permission errors' },
      { num: '5xxxx', label: 'System errors' }
    ],
    codeExamples: [
      { code: 0, message: 'success' },
      { code: 10001, message: 'Parameter error: missing required field' },
      { code: 10002, message: 'Resource not found' },
      { code: 20001, message: 'Insufficient balance' },
      { code: 30001, message: 'Not signed in' },
      { code: 50001, message: 'System busy, try again later' }
    ],
    examplesTitle: 'Response examples by scenario',
    examples: [
      {
        id: 'success',
        name: 'Success - object',
        code: '{\n  "code": 0,\n  "message": "success",\n  "data": {\n    "id": 123,\n    "name": "Alice",\n    "email": "alice@example.com"\n  },\n  "request_id": "req-abc123"\n}',
        note: 'Success response: data contains the business payload.'
      },
      {
        id: 'list',
        name: 'Success - list',
        code: '{\n  "code": 0,\n  "message": "success",\n  "data": {\n    "items": [\n      { "id": 1, "name": "Product A" },\n      { "id": 2, "name": "Product B" }\n    ],\n    "pagination": {\n      "page": 1,\n      "page_size": 20,\n      "total": 156\n    }\n  },\n  "request_id": "req-def456"\n}',
        note: 'List response: items array plus pagination metadata.'
      },
      {
        id: 'error',
        name: 'Business error',
        code: '{\n  "code": 20001,\n  "message": "Insufficient balance: current balance is 50.00",\n  "data": null,\n  "request_id": "req-ghi789"\n}',
        note: 'Business error: non-zero code and message explain the cause.'
      },
      {
        id: 'validate',
        name: 'Validation error',
        code: '{\n  "code": 10001,\n  "message": "Validation failed",\n  "data": {\n    "errors": [\n      { "field": "email", "message": "Invalid email format" },\n      { "field": "password", "message": "Password must be at least 8 characters" }\n    ]\n  },\n  "request_id": "req-jkl012"\n}',
        note: 'Parameter error: data.errors lists all invalid fields.'
      }
    ],
    pagination: {
      title: 'Pagination parameter design',
      requestTitle: 'Request parameters',
      responseTitle: 'Response format',
      params: [
        { code: 'page', desc: 'Page number, starting from 1' },
        { code: 'page_size', desc: 'Items per page, default 20' },
        { code: 'sort', desc: 'Sort order, for example created_desc' }
      ],
      responseCode:
        '"pagination": {\n  "page": 1,\n  "page_size": 20,\n  "total": 156,\n  "total_pages": 8,\n  "has_next": true\n}'
    }
  },
  dataField: {
    title: 'data Field Design Rules',
    tip: 'Follow ISO 8601 for time values and keep JSON field names in snake_case.',
    tabs: [
      { id: 'structure', icon: '&#x1F4D0;', name: 'Structure' },
      { id: 'naming', icon: '&#x1F4DD;', name: 'Naming' },
      { id: 'datetime', icon: '&#x1F550;', name: 'Time format' },
      { id: 'null', icon: '∅', name: 'Null values' },
      { id: 'relation', icon: '&#x1F517;', name: 'Relations' }
    ],
    structure: {
      title: 'Single object vs list',
      singleTitle: 'Single object',
      listTitle: 'List',
      singleCode:
        '{\n  "code": 0,\n  "data": {\n    "id": 123,\n    "name": "Alice"\n  }\n}',
      listCode:
        '{\n  "code": 0,\n  "data": {\n    "items": [...],\n    "pagination": {\n      "page": 1,\n      "total": 100\n    }\n  }\n}',
      note: 'List data should be wrapped in items, with pagination metadata in pagination.'
    },
    namingTitle: 'Field naming rules',
    namingRules: [
      {
        icon: '&#x1F521;',
        name: 'Use snake_case',
        good: 'created_at',
        bad: 'createdAt',
        desc: 'Use underscores consistently for JSON field names.'
      },
      {
        icon: '&#x1F4D6;',
        name: 'Avoid abbreviations',
        good: 'user_id',
        bad: 'uid',
        desc: 'Keep names readable.'
      },
      {
        icon: '&#x2705;',
        name: 'Prefix booleans',
        good: 'is_active, has_permission',
        bad: 'active, permission',
        desc: 'Make boolean fields obvious.'
      },
      {
        icon: '&#x1F4C5;',
        name: 'Suffix timestamps',
        good: 'created_at, expired_at',
        bad: 'created, expired',
        desc: 'Clearly mark time fields.'
      },
      {
        icon: '&#x1F522;',
        name: 'Suffix quantities',
        good: 'total_count, page_size',
        bad: 'total, size',
        desc: 'Clearly mark numeric quantities.'
      }
    ],
    datetime: {
      title: 'Time format design',
      code: '{\n  "created_at": "2024-01-15T09:30:00.000Z",\n  "updated_at": "2024-01-15T10:00:00.000Z",\n  "expired_at": "2025-01-15T00:00:00.000Z"\n}',
      rules: [
        { label: 'Format', value: 'ISO 8601' },
        { label: 'Timezone', value: 'UTC with Z suffix or explicit offset' },
        { label: 'Precision', value: 'Milliseconds .000Z' },
        {
          label: 'Naming',
          value: 'xxx_at for moments, xxx_duration for durations'
        }
      ]
    },
    nulls: {
      title: 'Null value handling',
      goodTitle: '&#x2705; Recommended',
      badTitle: '&#x274C; Not recommended',
      goodCode:
        '{\n  "name": "Alice",\n  "nickname": null,\n  "avatar": null\n}',
      badCode: '{\n  "name": "Alice"\n}',
      goodDesc: 'Return null when a field exists but has no value.',
      badDesc: 'Omitting fields forces the frontend to check field existence.',
      tips: [
        'Return [] for empty arrays',
        'Return {} for empty objects',
        'The frontend can handle responses uniformly without existence checks'
      ]
    },
    relationTitle: 'Related data design',
    relations: [
      {
        id: 'embed',
        name: 'Embed',
        desc: 'Best for small related data that is accessed frequently.',
        code: '{\n  "id": 123,\n  "name": "Alice",\n  "department": {\n    "id": 1,\n    "name": "Engineering"\n  }\n}'
      },
      {
        id: 'foreign',
        name: 'Foreign key',
        desc: 'Best for large related data that should load on demand.',
        code: '{\n  "id": 123,\n  "name": "Alice",\n  "department_id": 1\n}'
      },
      {
        id: 'expand',
        name: 'expand parameter',
        desc: 'Stripe-style opt-in expansion controlled by the client.',
        code: '// GET /users/123?expand=department\n{\n  "id": 123,\n  "name": "Alice",\n  "department": {\n    "id": 1,\n    "name": "Engineering"\n  }\n}'
      }
    ]
  },
  errorResponse: {
    title: 'Advanced Error Response Design',
    tip: 'Error messages should be machine-readable and human-friendly so the frontend can handle them consistently.',
    tabs: [
      { id: 'validate', icon: '&#x1F50D;', name: 'Validation' },
      { id: 'business', icon: '&#x1F4BC;', name: 'Business errors' },
      { id: 'layers', icon: '&#x1F4CA;', name: 'Layering' },
      { id: 'http', icon: '&#x1F310;', name: 'HTTP compare' },
      { id: 'examples', icon: '&#x1F4CB;', name: 'Examples' }
    ],
    validate: {
      title: 'Validation errors',
      code: '{\n  "code": 10001,\n  "message": "Validation failed",\n  "data": {\n    "errors": [\n      {\n        "field": "email",\n        "message": "Invalid email format",\n        "value": "invalid-email"\n      },\n      {\n        "field": "password",\n        "message": "Password must be at least 8 characters",\n        "value": "123"\n      }\n    ]\n  }\n}',
      tips: [
        {
          code: 'field',
          desc: 'Field name, so the frontend can locate the form input'
        },
        { code: 'message', desc: 'User-friendly error description' },
        { code: 'value', desc: 'Submitted value from the client, optional' }
      ]
    },
    business: {
      title: 'Business errors',
      code: '{\n  "code": 20001,\n  "message": "Insufficient balance",\n  "data": {\n    "current_balance": 50.00,\n    "required_amount": 99.00,\n    "shortfall": 49.00,\n    "suggestion": "Recharge and try again"\n  }\n}',
      tips: [
        'Return current state data for display',
        'Provide a suggestion for resolution',
        'Use structured data so the frontend can render flexibly'
      ]
    },
    layersTitle: 'Error code layering',
    layerExampleLabel: 'Example: ',
    layerNote:
      'From outer to inner: system -> service -> business -> auth -> parameter',
    layers: [
      {
        range: '50001-59999',
        name: 'System layer',
        example: '50001 database exception',
        desc: 'Infrastructure problems'
      },
      {
        range: '40001-49999',
        name: 'Service layer',
        example: '40001 third-party timeout',
        desc: 'External dependency problems'
      },
      {
        range: '30001-39999',
        name: 'Auth layer',
        example: '30001 not signed in',
        desc: 'Identity and permission problems'
      },
      {
        range: '20001-29999',
        name: 'Business layer',
        example: '20001 insufficient balance',
        desc: 'Business rule validation'
      },
      {
        range: '10001-19999',
        name: 'Parameter layer',
        example: '10001 missing parameter',
        desc: 'Client input problems'
      }
    ],
    http: {
      title: 'HTTP status code vs business status code',
      httpTitle: 'HTTP status code',
      httpDesc: 'Transport-layer status',
      bizTitle: 'Business status code',
      bizDesc: 'Business-layer status',
      note: 'HTTP 200 plus a business error code is a common industry pattern.',
      httpCodes: [
        { num: '2xx', label: 'Request succeeded' },
        { num: '4xx', label: 'Client error' },
        { num: '5xx', label: 'Server error' }
      ],
      bizCodes: [
        { num: '0', label: 'Business success' },
        { num: '1xxxx', label: 'Parameter error' },
        { num: '2xxxx', label: 'Business error' }
      ]
    },
    examplesTitle: 'Common error code examples',
    examples: [
      {
        id: 'param',
        name: 'Parameter layer',
        items: [
          { code: 10001, message: 'Missing required parameter' },
          { code: 10002, message: 'Invalid parameter format' },
          { code: 10003, message: 'Parameter too long' },
          { code: 10004, message: 'Illegal parameter value' }
        ]
      },
      {
        id: 'auth',
        name: 'Auth layer',
        items: [
          { code: 30001, message: 'Not signed in' },
          { code: 30002, message: 'Session expired' },
          { code: 30003, message: 'No permission' },
          { code: 30004, message: 'Account disabled' }
        ]
      },
      {
        id: 'biz',
        name: 'Business layer',
        items: [
          { code: 20001, message: 'Insufficient balance' },
          { code: 20002, message: 'Product unavailable' },
          { code: 20003, message: 'Order canceled' },
          { code: 20004, message: 'Out of stock' }
        ]
      },
      {
        id: 'sys',
        name: 'System layer',
        items: [
          { code: 50001, message: 'Database exception' },
          { code: 50002, message: 'Cache service exception' },
          { code: 50003, message: 'System busy, try again later' }
        ]
      }
    ]
  }
}
