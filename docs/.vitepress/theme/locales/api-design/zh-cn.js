export default {
  request: {
    terminalTitle: 'API 请求演示',
    reset: '重置',
    initialLine: '// 点击下方按钮，模拟不同的 API 请求',
    initialHint: '点击命令按钮，观察一次完整的 API 请求-响应流程。',
    client: { title: '客户端', desc: '发起请求' },
    server: { title: '服务器', desc: '处理请求' },
    response: { title: '响应', desc: '返回结果' },
    emptyRequest: '等待请求...',
    emptyServer: '等待中...',
    emptyResponse: '等待响应...',
    ops: [
      {
        id: 'get-users',
        cmd: 'GET /api/users',
        output: [
          { kind: 'dim', text: '// 获取用户列表' },
          { kind: 'grn', text: 'HTTP/1.1 200 OK' },
          { kind: 'dim', text: 'Content-Type: application/json' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 0, "data": { "items": [...] } }' }
        ],
        hint: 'GET 请求成功！状态码 200 表示请求正常。服务器返回了用户列表数据。',
        request: { method: 'GET', url: '/api/users' },
        serverSteps: [
          { icon: '&#x26A1;', text: '查询数据库...' },
          { icon: '&#x2713;', text: '处理完成' }
        ],
        response: {
          status: '200 OK',
          statusClass: 'success',
          body: '{\n  "code": 0,\n  "data": {\n    "items": [\n      {"id": 1, "name": "张三"},\n      {"id": 2, "name": "李四"}\n    ]\n  }\n}'
        }
      },
      {
        id: 'post-user',
        cmd: 'POST /api/users',
        output: [
          { kind: 'dim', text: '// 创建新用户' },
          { kind: 'grn', text: 'HTTP/1.1 201 Created' },
          { kind: 'dim', text: 'Location: /api/users/3' },
          { kind: 'dim', text: '' },
          {
            kind: 'grn',
            text: '{ "code": 0, "data": { "id": 3, "name": "王五" } }'
          }
        ],
        hint: 'POST 创建成功！状态码 201 表示资源已创建，响应头 Location 指向新资源地址。',
        request: {
          method: 'POST',
          url: '/api/users',
          body: '{\n  "name": "王五",\n  "email": "wangwu@example.com"\n}'
        },
        serverSteps: [
          { icon: '&#x26A1;', text: '验证数据...' },
          { icon: '&#x26A1;', text: '写入数据库...' },
          { icon: '&#x2713;', text: '创建成功' }
        ],
        response: {
          status: '201 Created',
          statusClass: 'success',
          body: '{\n  "code": 0,\n  "data": {\n    "id": 3,\n    "name": "王五",\n    "email": "wangwu@example.com"\n  }\n}'
        }
      },
      {
        id: 'get-404',
        cmd: 'GET /api/users/999',
        output: [
          { kind: 'dim', text: '// 获取不存在的用户' },
          { kind: 'red', text: 'HTTP/1.1 404 Not Found' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: '{ "code": 10002, "message": "用户不存在" }' }
        ],
        hint: '404 错误！请求的资源不存在。客户端应该检查请求的 ID 是否正确。',
        request: { method: 'GET', url: '/api/users/999' },
        serverSteps: [
          { icon: '&#x1F50D;', text: '查找用户...' },
          { icon: '&#x2717;', text: '未找到' }
        ],
        response: {
          status: '404 Not Found',
          statusClass: 'error',
          body: '{\n  "code": 10002,\n  "message": "用户不存在"\n}'
        }
      },
      {
        id: 'post-401',
        cmd: 'POST /api/orders (无Token)',
        output: [
          { kind: 'dim', text: '// 未登录尝试下单' },
          { kind: 'red', text: 'HTTP/1.1 401 Unauthorized' },
          { kind: 'dim', text: 'WWW-Authenticate: Bearer' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: '{ "code": 10018, "message": "请先登录" }' }
        ],
        hint: '401 错误！需要身份认证。客户端应该引导用户登录后再重试。',
        request: {
          method: 'POST',
          url: '/api/orders',
          body: '{\n  "product_id": "P001",\n  "quantity": 2\n}'
        },
        serverSteps: [
          { icon: '&#x1F510;', text: '验证身份...' },
          { icon: '&#x2717;', text: '未授权' }
        ],
        response: {
          status: '401 Unauthorized',
          statusClass: 'error',
          body: '{\n  "code": 10018,\n  "message": "请先登录"\n}'
        }
      }
    ]
  },
  style: {
    title: '四种 API 风格对比',
    exampleLabel: '示例：获取用户信息',
    featuresTitle: '核心特点',
    scenarioLabel: '适用场景',
    officialLabel: '官方地址',
    compareTitle: '&#x1F4CA; 风格速览对比',
    compareHeaders: ['特性', 'RPC', 'REST', 'GraphQL', 'gRPC'],
    compareRows: [
      ['核心理念', '面向过程', '面向资源', '面向数据', '面向方法'],
      ['URL 风格', '动词为主', '名词为主', '单一端点', '不依赖URL'],
      ['学习曲线', '低', '中', '中', '高'],
      ['性能', '一般', '一般', '较好', '优秀'],
      ['使用占比', '~30%', '~50%', '~15%', '~5%']
    ],
    styles: [
      {
        id: 'rpc',
        icon: '&#x1F4DE;',
        name: 'RPC',
        badge: '最传统',
        desc: 'Remote Procedure Call，远程过程调用。像调用本地方法一样调用远程服务，面向过程，简单直接。超过 50% 的内部 API 采用这种风格。',
        example:
          'GET /getUserInfo?id=123\nPOST /createUser\nPOST /deleteOrder\nGET /queryUserList',
        features: [
          'URL 命名往往是动词',
          'HTTP 方法基本只用 GET/POST',
          '设计简单，几乎无约束',
          '需要详细文档说明'
        ],
        scenarios: '内部 API、性能敏感场景、难以抽象为资源的业务',
        official: '无官方规范（概念性风格）'
      },
      {
        id: 'rest',
        icon: '&#x1F310;',
        name: 'REST',
        badge: '最常用',
        desc: 'Representational State Transfer，表述性状态转移。由 Roy Fielding 于 2000 年在其博士论文中提出。面向资源，用 URL 标识资源，用 HTTP 方法操作资源。',
        example:
          'GET    /users           # 获取用户列表\nGET    /users/123       # 获取单个用户\nPOST   /users           # 创建用户\nPUT    /users/123       # 全量更新\nPATCH  /users/123       # 部分更新\nDELETE /users/123       # 删除用户',
        features: [
          'URL 是名词，不是动词',
          '使用 HTTP 方法表达操作',
          '无状态，请求包含所有信息',
          '可缓存，支持分层系统'
        ],
        scenarios: '公开 API、CRUD 操作、资源边界清晰的业务',
        official: 'https://restfulapi.net/'
      },
      {
        id: 'graphql',
        icon: '&#x1F4CA;',
        name: 'GraphQL',
        badge: '最灵活',
        desc: '由 Facebook 于 2015 年开源。一种查询语言，客户端可以精确指定需要的数据字段，避免过度获取或获取不足。',
        example:
          'query {\n  user(id: "123") {\n    name\n    email\n    orders {\n      id\n      total\n    }\n  }\n}',
        features: [
          '单一端点（/graphql）',
          '客户端决定返回字段',
          'Schema 即文档',
          '一次请求获取多资源'
        ],
        scenarios: '客户端需求多变、数据关系复杂、移动端 App',
        official: 'https://graphql.org/'
      },
      {
        id: 'grpc',
        icon: '&#x26A1;',
        name: 'gRPC',
        badge: '最高效',
        desc: '由 Google 于 2016 年开源。高性能 RPC 框架，使用 Protocol Buffers 序列化，基于 HTTP/2，支持双向流通信。',
        example:
          'service UserService {\n  rpc GetUser(GetUserRequest) returns (User);\n  rpc CreateUser(CreateUserRequest) returns (User);\n}\n\nmessage User {\n  string id = 1;\n  string name = 2;\n}',
        features: [
          '二进制传输，性能极高',
          '强类型，代码自动生成',
          '基于 HTTP/2，双向流',
          '浏览器支持差'
        ],
        scenarios: '微服务内部通信、高性能场景、强类型需求',
        official: 'https://grpc.io/'
      }
    ]
  },
  status: {
    terminalTitle: 'HTTP 状态码演示',
    reset: '重置',
    initialLine: '// 点击按钮查看不同状态码的含义',
    initialHint: '点击命令按钮，了解常见的 HTTP 状态码。',
    sections: {
      success: { icon: '&#x2705;', title: '2xx 成功' },
      client: { icon: '&#x26A0;&#xFE0F;', title: '4xx 客户端错误' },
      server: { icon: '&#x1F534;', title: '5xx 服务端错误' }
    },
    successCodes: [
      { code: 200, name: 'OK', desc: '请求成功' },
      { code: 201, name: 'Created', desc: '创建成功' },
      { code: 204, name: 'No Content', desc: '成功但无返回内容' }
    ],
    clientCodes: [
      { code: 400, name: 'Bad Request', desc: '请求格式错误' },
      { code: 401, name: 'Unauthorized', desc: '未认证' },
      { code: 403, name: 'Forbidden', desc: '无权限' },
      { code: 404, name: 'Not Found', desc: '资源不存在' },
      { code: 422, name: 'Unprocessable', desc: '语义错误' },
      { code: 429, name: 'Too Many', desc: '请求过多' }
    ],
    serverCodes: [
      { code: 500, name: 'Server Error', desc: '服务器内部错误' },
      { code: 502, name: 'Bad Gateway', desc: '网关错误' },
      { code: 503, name: 'Unavailable', desc: '服务不可用' }
    ],
    ops: [
      {
        id: '200',
        cmd: '200 OK',
        code: 200,
        output: [
          { kind: 'dim', text: '// 最常用的成功状态码' },
          { kind: 'grn', text: 'HTTP/1.1 200 OK' },
          { kind: 'dim', text: 'Content-Type: application/json' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 0, "data": { ... } }' }
        ],
        hint: '200 表示请求成功处理。GET 查询、PUT/PATCH 更新成功时常用。'
      },
      {
        id: '201',
        cmd: '201 Created',
        code: 201,
        output: [
          { kind: 'dim', text: '// 创建资源成功' },
          { kind: 'grn', text: 'HTTP/1.1 201 Created' },
          { kind: 'dim', text: 'Location: /api/users/123' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 0, "data": { "id": 123 } }' }
        ],
        hint: '201 表示资源创建成功。响应头 Location 指向新资源的地址。'
      },
      {
        id: '400',
        cmd: '400 Bad Request',
        code: 400,
        output: [
          { kind: 'dim', text: '// 客户端请求有问题' },
          { kind: 'red', text: 'HTTP/1.1 400 Bad Request' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: '{ "code": 10001, "message": "参数格式错误" }' }
        ],
        hint: '400 表示请求语法错误。比如 JSON 格式不对、缺少必填参数。'
      },
      {
        id: '401',
        cmd: '401 Unauthorized',
        code: 401,
        output: [
          { kind: 'dim', text: '// 需要登录认证' },
          { kind: 'red', text: 'HTTP/1.1 401 Unauthorized' },
          { kind: 'dim', text: 'WWW-Authenticate: Bearer' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: '{ "code": 10018, "message": "请先登录" }' }
        ],
        hint: '401 表示未认证。Token 过期、未登录时返回，客户端应引导用户登录。'
      },
      {
        id: '403',
        cmd: '403 Forbidden',
        code: 403,
        output: [
          { kind: 'dim', text: '// 已登录但无权限' },
          { kind: 'red', text: 'HTTP/1.1 403 Forbidden' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10021, "message": "需要管理员权限" }'
          }
        ],
        hint: '403 表示已认证但无权限。普通用户访问管理员接口时返回。'
      },
      {
        id: '404',
        cmd: '404 Not Found',
        code: 404,
        output: [
          { kind: 'dim', text: '// 资源不存在' },
          { kind: 'red', text: 'HTTP/1.1 404 Not Found' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: '{ "code": 10002, "message": "用户不存在" }' }
        ],
        hint: '404 表示请求的资源不存在。URL 错误或资源已被删除。'
      },
      {
        id: '500',
        cmd: '500 Server Error',
        code: 500,
        output: [
          { kind: 'dim', text: '// 服务器内部错误' },
          { kind: 'red', text: 'HTTP/1.1 500 Internal Server Error' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "code": 10000, "message": "服务器错误，请联系管理员" }'
          }
        ],
        hint: '500 表示服务器内部错误。代码 bug、数据库连接失败等，不要暴露堆栈信息！'
      }
    ]
  },
  errorHandling: {
    terminalTitle: '错误处理演示',
    reset: '重置',
    responseLabel: '响应结构',
    emptyResponse: '点击上方按钮查看错误响应示例',
    initialLine: '// 对比好的和差的错误处理方式',
    initialHint: '点击按钮，对比"好的"和"差的"错误响应设计。',
    ops: [
      {
        id: 'bad1',
        cmd: '&#x274C; 差: 所有错误都 200',
        output: [
          { kind: 'dim', text: '// HTTP 200 但业务失败' },
          { kind: 'yel', text: 'HTTP/1.1 200 OK' },
          { kind: 'dim', text: '' },
          { kind: 'yel', text: '{ "error": "出错了" }' }
        ],
        hint: '问题：HTTP 状态码说"成功"，但业务说"出错"。缓存层会缓存这个"成功"响应，监控系统也发现不了问题。',
        responseStatus: '200 (错误)',
        responseData: '{\n  "error": "出错了"\n}'
      },
      {
        id: 'bad2',
        cmd: '&#x274C; 差: 错误信息太笼统',
        output: [
          { kind: 'dim', text: '// 错误信息没有帮助' },
          { kind: 'red', text: 'HTTP/1.1 400 Bad Request' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: '{ "message": "参数错误" }' }
        ],
        hint: '问题：客户端不知道哪个参数错了、为什么错。用户只能看到"参数错误"，无法修正。',
        responseStatus: '400',
        responseData: '{\n  "message": "参数错误"\n}'
      },
      {
        id: 'bad3',
        cmd: '&#x274C; 差: 暴露敏感信息',
        output: [
          { kind: 'dim', text: '// 500 错误暴露堆栈' },
          { kind: 'red', text: 'HTTP/1.1 500 Internal Server Error' },
          { kind: 'dim', text: '' },
          {
            kind: 'red',
            text: '{ "error": "TypeError: Cannot read property..." }'
          },
          { kind: 'red', text: '{ "stack": "at UserService.login..." }' },
          { kind: 'red', text: '{ "sql": "SELECT * FROM users WHERE..." }' }
        ],
        hint: '危险！暴露了代码结构、数据库查询。攻击者可以利用这些信息进行攻击。',
        responseStatus: '500',
        responseData: `{
  "error": "TypeError: Cannot read property 'id' of undefined",
  "stack": "at UserService.login (src/service.js:45)",
  "sql": "SELECT * FROM users WHERE email='...'"
}`
      },
      {
        id: 'good1',
        cmd: '&#x2705; 好: 正确的状态码',
        output: [
          { kind: 'dim', text: '// HTTP 状态码准确表达错误类型' },
          { kind: 'grn', text: 'HTTP/1.1 404 Not Found' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 10002, "message": "用户不存在" }' }
        ],
        hint: '正确！404 表示资源不存在，客户端一看就知道问题所在。',
        responseStatus: '404',
        responseData:
          '{\n  "code": 10002,\n  "message": "用户不存在",\n  "request_id": "req-550e8400"\n}'
      },
      {
        id: 'good2',
        cmd: '&#x2705; 好: 详细的错误信息',
        output: [
          { kind: 'dim', text: '// 错误信息帮助定位问题' },
          { kind: 'grn', text: 'HTTP/1.1 422 Unprocessable Entity' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 20003, "message": "密码强度不足" }' },
          { kind: 'grn', text: '{ "errors": [{ "field": "password", ... }] }' }
        ],
        hint: '正确！提供了错误码、字段级别的错误详情，前端可以精确提示用户。',
        responseStatus: '422',
        responseData:
          '{\n  "code": 20003,\n  "message": "密码强度不足",\n  "errors": [\n    {\n      "field": "password",\n      "code": "VALIDATION_ERROR",\n      "message": "密码必须包含至少 1 个大写字母、1 个小写字母、1 个数字"\n    }\n  ],\n  "request_id": "req-550e8400"\n}'
      },
      {
        id: 'good3',
        cmd: '&#x2705; 好: 安全的错误响应',
        output: [
          { kind: 'dim', text: '// 500 只返回错误 ID' },
          { kind: 'grn', text: 'HTTP/1.1 500 Internal Server Error' },
          { kind: 'dim', text: '' },
          { kind: 'grn', text: '{ "code": 10000, "message": "服务器错误" }' },
          { kind: 'grn', text: '{ "error_id": "err-a1b2c3d4" }' }
        ],
        hint: '正确！只返回错误 ID，详细日志记录在服务器。用户反馈错误 ID，技术人员可以快速定位。',
        responseStatus: '500',
        responseData:
          '{\n  "code": 10000,\n  "message": "服务器内部错误，请联系管理员",\n  "error_id": "err-a1b2c3d4",\n  "request_id": "req-550e8400",\n  "help_url": "https://docs.example.com/errors/10000"\n}'
      }
    ]
  },
  responseStructure: {
    title: 'API 响应结构设计',
    required: '必填',
    tip: 'request_id 用于问题追踪，建议使用 UUID v4 或雪花算法生成',
    tabs: [
      { id: 'why', icon: '&#x2753;', name: '为什么统一' },
      { id: 'fields', icon: '&#x1F4DD;', name: '字段说明' },
      { id: 'codes', icon: '&#x1F522;', name: '状态码' },
      { id: 'examples', icon: '&#x1F4C4;', name: '示例' },
      { id: 'pagination', icon: '&#x1F4D1;', name: '分页' }
    ],
    why: {
      title: '为什么要统一响应格式？',
      problemTitle: '&#x274C; 问题：不同接口返回格式不一致',
      problemCode:
        '// 接口 A\n{ "data": { "user": {...} } }\n\n// 接口 B\n{ "result": { "user": {...} } }\n\n// 接口 C\n{ "user": {...} }',
      problemDesc: '前端需要针对每个接口单独处理，代码冗余，容易出错',
      solutionTitle: '&#x2705; 解决：统一响应格式',
      solutionCode:
        '{\n  "code": 0,\n  "message": "success",\n  "data": { ... },\n  "request_id": "req-xxx"\n}'
    },
    fieldsTitle: '响应字段说明',
    fields: [
      {
        name: 'code',
        type: 'number',
        required: true,
        desc: '业务状态码，0 表示成功'
      },
      { name: 'message', type: 'string', required: true, desc: '状态描述信息' },
      {
        name: 'data',
        type: 'any',
        required: false,
        desc: '业务数据，失败时可为 null'
      },
      {
        name: 'request_id',
        type: 'string',
        required: true,
        desc: '请求唯一标识，用于追踪'
      },
      {
        name: 'timestamp',
        type: 'string',
        required: false,
        desc: '响应时间戳，ISO 8601 格式'
      }
    ],
    codesTitle: '业务状态码设计',
    codeRanges: [
      { num: '0', label: '成功' },
      { num: '1xxxx', label: '客户端错误' },
      { num: '2xxxx', label: '业务错误' },
      { num: '3xxxx', label: '认证/权限错误' },
      { num: '5xxxx', label: '系统错误' }
    ],
    codeExamples: [
      { code: 0, message: 'success - 成功' },
      { code: 10001, message: '参数错误：缺少必填字段' },
      { code: 10002, message: '资源不存在' },
      { code: 20001, message: '余额不足' },
      { code: 30001, message: '未登录' },
      { code: 50001, message: '系统繁忙，请稍后重试' }
    ],
    examplesTitle: '不同场景响应示例',
    examples: [
      {
        id: 'success',
        name: '成功-单对象',
        code: '{\n  "code": 0,\n  "message": "success",\n  "data": {\n    "id": 123,\n    "name": "张三",\n    "email": "zhangsan@example.com"\n  },\n  "request_id": "req-abc123"\n}',
        note: '成功响应：data 包含具体业务数据'
      },
      {
        id: 'list',
        name: '成功-列表',
        code: '{\n  "code": 0,\n  "message": "success",\n  "data": {\n    "items": [\n      { "id": 1, "name": "商品A" },\n      { "id": 2, "name": "商品B" }\n    ],\n    "pagination": {\n      "page": 1,\n      "page_size": 20,\n      "total": 156\n    }\n  },\n  "request_id": "req-def456"\n}',
        note: '列表响应：items 数组 + pagination 分页信息'
      },
      {
        id: 'error',
        name: '业务错误',
        code: '{\n  "code": 20001,\n  "message": "余额不足，当前余额 50.00 元",\n  "data": null,\n  "request_id": "req-ghi789"\n}',
        note: '业务错误：code 非 0，message 说明原因'
      },
      {
        id: 'validate',
        name: '参数校验',
        code: '{\n  "code": 10001,\n  "message": "参数校验失败",\n  "data": {\n    "errors": [\n      { "field": "email", "message": "邮箱格式不正确" },\n      { "field": "password", "message": "密码长度至少 8 位" }\n    ]\n  },\n  "request_id": "req-jkl012"\n}',
        note: '参数错误：data.errors 列出所有错误字段'
      }
    ],
    pagination: {
      title: '分页参数设计',
      requestTitle: '请求参数',
      responseTitle: '响应格式',
      params: [
        { code: 'page', desc: '页码，从 1 开始' },
        { code: 'page_size', desc: '每页数量，默认 20' },
        { code: 'sort', desc: '排序，如 created_desc' }
      ],
      responseCode:
        '"pagination": {\n  "page": 1,\n  "page_size": 20,\n  "total": 156,\n  "total_pages": 8,\n  "has_next": true\n}'
    }
  },
  dataField: {
    title: 'data 字段设计规范',
    tip: '参考 ISO 8601 时间标准，字段命名保持 snake_case 风格',
    tabs: [
      { id: 'structure', icon: '&#x1F4D0;', name: '结构设计' },
      { id: 'naming', icon: '&#x1F4DD;', name: '命名规范' },
      { id: 'datetime', icon: '&#x1F550;', name: '时间格式' },
      { id: 'null', icon: '∅', name: '空值处理' },
      { id: 'relation', icon: '&#x1F517;', name: '关联数据' }
    ],
    structure: {
      title: '单对象 vs 列表',
      singleTitle: '单对象',
      listTitle: '列表',
      singleCode:
        '{\n  "code": 0,\n  "data": {\n    "id": 123,\n    "name": "张三"\n  }\n}',
      listCode:
        '{\n  "code": 0,\n  "data": {\n    "items": [...],\n    "pagination": {\n      "page": 1,\n      "total": 100\n    }\n  }\n}',
      note: '列表数据包裹在 items 数组中，分页信息放在 pagination 对象'
    },
    namingTitle: '字段命名规范',
    namingRules: [
      {
        icon: '&#x1F521;',
        name: '使用 snake_case',
        good: 'created_at',
        bad: 'createdAt',
        desc: 'JSON 字段名统一用下划线'
      },
      {
        icon: '&#x1F4D6;',
        name: '避免缩写',
        good: 'user_id',
        bad: 'uid',
        desc: '保持可读性'
      },
      {
        icon: '&#x2705;',
        name: '布尔值加前缀',
        good: 'is_active, has_permission',
        bad: 'active, permission',
        desc: '一眼识别布尔类型'
      },
      {
        icon: '&#x1F4C5;',
        name: '时间带后缀',
        good: 'created_at, expired_at',
        bad: 'created, expired',
        desc: '明确是时间字段'
      },
      {
        icon: '&#x1F522;',
        name: '数量带后缀',
        good: 'total_count, page_size',
        bad: 'total, size',
        desc: '明确是数值类型'
      }
    ],
    datetime: {
      title: '时间格式设计',
      code: '{\n  "created_at": "2024-01-15T09:30:00.000Z",\n  "updated_at": "2024-01-15T10:00:00.000Z",\n  "expired_at": "2025-01-15T00:00:00.000Z"\n}',
      rules: [
        { label: '格式', value: 'ISO 8601' },
        { label: '时区', value: 'UTC（Z 后缀）或明确偏移量' },
        { label: '精度', value: '毫秒 .000Z' },
        { label: '命名', value: 'xxx_at 表示时间点，xxx_duration 表示时长' }
      ]
    },
    nulls: {
      title: '空值处理',
      goodTitle: '&#x2705; 推荐',
      badTitle: '&#x274C; 不推荐',
      goodCode:
        '{\n  "name": "张三",\n  "nickname": null,\n  "avatar": null\n}',
      badCode: '{\n  "name": "张三"\n}',
      goodDesc: '字段存在但无值时返回 null',
      badDesc: '省略字段，前端需判断是否存在',
      tips: [
        '空数组返回 []',
        '空对象返回 {}',
        '前端可统一处理，无需判断字段是否存在'
      ]
    },
    relationTitle: '关联数据设计',
    relations: [
      {
        id: 'embed',
        name: '内嵌',
        desc: '适合数据量小、频繁访问的关联数据',
        code: '{\n  "id": 123,\n  "name": "张三",\n  "department": {\n    "id": 1,\n    "name": "技术部"\n  }\n}'
      },
      {
        id: 'foreign',
        name: '外键',
        desc: '适合数据量大、按需加载的关联数据',
        code: '{\n  "id": 123,\n  "name": "张三",\n  "department_id": 1\n}'
      },
      {
        id: 'expand',
        name: 'expand 参数',
        desc: 'Stripe 风格，客户端按需展开',
        code: '// GET /users/123?expand=department\n{\n  "id": 123,\n  "name": "张三",\n  "department": {\n    "id": 1,\n    "name": "技术部"\n  }\n}'
      }
    ]
  },
  errorResponse: {
    title: '错误响应设计进阶',
    tip: '错误信息要"机器可读 + 人类友好"，便于前端统一处理',
    tabs: [
      { id: 'validate', icon: '&#x1F50D;', name: '参数校验' },
      { id: 'business', icon: '&#x1F4BC;', name: '业务错误' },
      { id: 'layers', icon: '&#x1F4CA;', name: '分层设计' },
      { id: 'http', icon: '&#x1F310;', name: 'HTTP对比' },
      { id: 'examples', icon: '&#x1F4CB;', name: '常见示例' }
    ],
    validate: {
      title: '参数校验错误',
      code: '{\n  "code": 10001,\n  "message": "参数校验失败",\n  "data": {\n    "errors": [\n      {\n        "field": "email",\n        "message": "邮箱格式不正确",\n        "value": "invalid-email"\n      },\n      {\n        "field": "password",\n        "message": "密码长度至少 8 位",\n        "value": "123"\n      }\n    ]\n  }\n}',
      tips: [
        { code: 'field', desc: '出错字段名，前端可定位表单' },
        { code: 'message', desc: '用户友好的错误描述' },
        { code: 'value', desc: '客户端提交的值（可选）' }
      ]
    },
    business: {
      title: '业务错误',
      code: '{\n  "code": 20001,\n  "message": "余额不足",\n  "data": {\n    "current_balance": 50.00,\n    "required_amount": 99.00,\n    "shortfall": 49.00,\n    "suggestion": "请充值后重试"\n  }\n}',
      tips: [
        '返回当前状态数据，便于前端展示',
        '提供 suggestion 给出解决建议',
        '数据结构化，前端可灵活展示'
      ]
    },
    layersTitle: '错误码分层设计',
    layerExampleLabel: '示例：',
    layerNote: '错误码从外到内：系统 -> 服务 -> 业务 -> 认证 -> 参数',
    layers: [
      {
        range: '50001-59999',
        name: '系统层',
        example: '50001 数据库异常',
        desc: '基础设施问题'
      },
      {
        range: '40001-49999',
        name: '服务层',
        example: '40001 第三方服务超时',
        desc: '外部依赖问题'
      },
      {
        range: '30001-39999',
        name: '认证层',
        example: '30001 未登录',
        desc: '身份权限问题'
      },
      {
        range: '20001-29999',
        name: '业务层',
        example: '20001 余额不足',
        desc: '业务规则校验'
      },
      {
        range: '10001-19999',
        name: '参数层',
        example: '10001 参数缺失',
        desc: '客户端输入问题'
      }
    ],
    http: {
      title: 'HTTP 状态码 vs 业务状态码',
      httpTitle: 'HTTP 状态码',
      httpDesc: '传输层状态',
      bizTitle: '业务状态码',
      bizDesc: '业务层状态',
      note: 'HTTP 200 + 业务错误码 是业界主流做法',
      httpCodes: [
        { num: '2xx', label: '请求成功' },
        { num: '4xx', label: '客户端错误' },
        { num: '5xx', label: '服务端错误' }
      ],
      bizCodes: [
        { num: '0', label: '业务成功' },
        { num: '1xxxx', label: '参数错误' },
        { num: '2xxxx', label: '业务错误' }
      ]
    },
    examplesTitle: '常见错误码示例',
    examples: [
      {
        id: 'param',
        name: '参数层',
        items: [
          { code: 10001, message: '缺少必填参数' },
          { code: 10002, message: '参数格式错误' },
          { code: 10003, message: '参数长度超限' },
          { code: 10004, message: '参数值非法' }
        ]
      },
      {
        id: 'auth',
        name: '认证层',
        items: [
          { code: 30001, message: '未登录' },
          { code: 30002, message: '登录已过期' },
          { code: 30003, message: '无权限访问' },
          { code: 30004, message: '账号已被禁用' }
        ]
      },
      {
        id: 'biz',
        name: '业务层',
        items: [
          { code: 20001, message: '余额不足' },
          { code: 20002, message: '商品已下架' },
          { code: 20003, message: '订单已取消' },
          { code: 20004, message: '库存不足' }
        ]
      },
      {
        id: 'sys',
        name: '系统层',
        items: [
          { code: 50001, message: '数据库异常' },
          { code: 50002, message: '缓存服务异常' },
          { code: 50003, message: '系统繁忙，请稍后重试' }
        ]
      }
    ]
  }
}
