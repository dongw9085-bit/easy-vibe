export default {
  httpProtocol: {
    title: 'HTTP 协议演示',
    labels: {
      request: 'HTTP 请求',
      response: 'HTTP 响应',
      tcpConnection: 'TCP 连接',
      unsafe: '⚠️ 不安全',
      safe: '✓ 安全',
      transferContent: '传输内容：',
      handshakeTitle: 'HTTPS 握手过程'
    },
    versionHeaders: ['版本', '年份', '核心特性', '传输格式', '连接方式'],
    tabs: [
      { id: 'request', name: '请求响应', icon: '📡' },
      { id: 'versions', name: '版本对比', icon: '📊' },
      { id: 'http2', name: 'HTTP/2', icon: '⚡' },
      { id: 'https', name: 'HTTPS', icon: '🔒' }
    ],
    initialRequest: {
      method: 'GET',
      url: '/api/users/123',
      version: 'HTTP/1.1',
      headers: {
        Host: 'api.example.com',
        'User-Agent': 'Mozilla/5.0',
        Accept: 'application/json',
        Authorization: 'Bearer xxx'
      },
      body: null
    },
    initialResponse: {
      version: 'HTTP/1.1',
      status: '200',
      statusClass: 'success',
      statusText: 'OK',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '156',
        'Cache-Control': 'max-age=3600'
      },
      body: '{\n  "id": 123,\n  "name": "张三",\n  "email": "zhangsan@example.com"\n}'
    },
    demos: [
      {
        id: 'get',
        name: 'GET 请求',
        request: {
          method: 'GET',
          url: '/api/users/123',
          version: 'HTTP/1.1',
          headers: {
            Host: 'api.example.com',
            Accept: 'application/json'
          },
          body: null
        },
        response: {
          version: 'HTTP/1.1',
          status: '200',
          statusClass: 'success',
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': '156'
          },
          body: '{\n  "id": 123,\n  "name": "张三"\n}'
        }
      },
      {
        id: 'post',
        name: 'POST 创建',
        request: {
          method: 'POST',
          url: '/api/users',
          version: 'HTTP/1.1',
          headers: {
            Host: 'api.example.com',
            'Content-Type': 'application/json',
            'Content-Length': '45'
          },
          body: '{\n  "name": "李四",\n  "email": "lisi@example.com"\n}'
        },
        response: {
          version: 'HTTP/1.1',
          status: '201',
          statusClass: 'success',
          statusText: 'Created',
          headers: {
            'Content-Type': 'application/json',
            Location: '/api/users/124'
          },
          body: '{\n  "id": 124,\n  "name": "李四"\n}'
        }
      },
      {
        id: '404',
        name: '404 错误',
        request: {
          method: 'GET',
          url: '/api/users/999',
          version: 'HTTP/1.1',
          headers: {
            Host: 'api.example.com'
          },
          body: null
        },
        response: {
          version: 'HTTP/1.1',
          status: '404',
          statusClass: 'error',
          statusText: 'Not Found',
          headers: {
            'Content-Type': 'application/json'
          },
          body: '{\n  "error": "用户不存在"\n}'
        }
      }
    ],
    versions: [
      {
        version: 'HTTP/0.9',
        year: '1991',
        features: '仅支持 GET',
        format: '纯文本',
        connection: '一次一请求',
        highlight: false
      },
      {
        version: 'HTTP/1.0',
        year: '1996',
        features: '增加 POST/HEAD',
        format: '纯文本',
        connection: '短连接',
        highlight: false
      },
      {
        version: 'HTTP/1.1',
        year: '1997',
        features: '持久连接、分块传输',
        format: '纯文本',
        connection: '长连接',
        highlight: true
      },
      {
        version: 'HTTP/2',
        year: '2015',
        features: '多路复用、头部压缩',
        format: '二进制帧',
        connection: '多路复用',
        highlight: true
      },
      {
        version: 'HTTP/3',
        year: '2022',
        features: '基于 QUIC、解决队头阻塞',
        format: 'QUIC (UDP)',
        connection: '独立连接',
        highlight: true
      }
    ],
    http2: {
      legacyRequests: [
        {
          label: '请求 1',
          blocks: [
            { label: '发送', type: 'req' },
            { label: '等待', type: 'wait' },
            { label: '接收', type: 'res' }
          ]
        },
        {
          label: '请求 2',
          blocks: [
            { label: '排队', type: 'wait' },
            { label: '发送', type: 'req' },
            { label: '等待', type: 'wait' },
            { label: '接收', type: 'res' }
          ]
        },
        {
          label: '请求 3',
          blocks: [
            { label: '排队', type: 'wait' },
            { label: '排队', type: 'wait' },
            { label: '发送', type: 'req' },
            { label: '接收', type: 'res' }
          ]
        }
      ],
      modernStreams: [
        {
          label: 'Stream 1',
          blocks: [
            { label: '发送', type: 'req' },
            { label: '接收', type: 'res' }
          ]
        },
        {
          label: 'Stream 2',
          blocks: [
            { label: '发送', type: 'req' },
            { label: '接收', type: 'res' }
          ]
        },
        {
          label: 'Stream 3',
          blocks: [
            { label: '发送', type: 'req' },
            { label: '接收', type: 'res' }
          ]
        }
      ],
      legacyNote: '串行传输，需等待前一个请求完成',
      modernNote: '多路复用，并发传输多个请求'
    },
    https: {
      httpItems: [
        '明文传输，数据可被窃听',
        '无法验证服务器身份',
        '数据可能被篡改'
      ],
      httpsItems: [
        '加密传输，数据无法被窃听',
        'SSL/TLS 证书验证身份',
        '数据完整性校验，防篡改'
      ],
      encryptedExample: '8f3a2b...（加密数据）',
      steps: [
        { title: 'Client Hello', desc: '客户端发送支持的加密套件' },
        { title: 'Server Hello', desc: '服务器返回证书和选定的加密套件' },
        { title: '验证证书', desc: '客户端验证服务器证书' },
        { title: '密钥交换', desc: '生成会话密钥' },
        { title: '加密通信', desc: '使用会话密钥加密数据' }
      ]
    }
  },
  serialization: {
    title: '序列化演示',
    panels: {
      object: { title: '内存对象', desc: '内存中的对象，只能在当前进程使用' },
      json: { title: 'JSON 字符串', desc: '可在网络传输、可跨语言' },
      binary: { title: '二进制', desc: 'Protobuf/MessagePack，更小更快' }
    },
    arrows: {
      serialize: '序列化',
      transfer: '传输'
    },
    buttons: {
      reset: '重置',
      steps: ['开始序列化 →', '转换为二进制 →', '传输完成 ✓', '完成']
    },
    comparisonTitle: '📊 格式对比',
    comparisonHeaders: ['格式', '大小', '速度', '可读性', '跨语言'],
    comparisonRows: [
      ['JSON', '★★★☆☆', '★★★☆☆', '★★★★★', '★★★★★'],
      ['XML', '★★☆☆☆', '★★☆☆☆', '★★★★★', '★★★★★'],
      ['Protobuf', '★★★★★', '★★★★★', '★☆☆☆☆', '★★★★☆'],
      ['MessagePack', '★★★★☆', '★★★★☆', '★★☆☆☆', '★★★★★']
    ],
    languages: {
      javascript: {
        id: 'javascript',
        name: 'JavaScript',
        objectCode: `const user = {
  id: 123,
  name: "张三",
  email: "zhangsan@example.com",
  age: 28
};`,
        jsonString: `{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `七进制编码 (MessagePack):
\\xa7 id 7b
\\xa4 name \\xa3 张三
\\xa5 email \\xb1 zhangsan@example.com
\\xa3 age 1c`,
        binarySize: 52
      },
      python: {
        id: 'python',
        name: 'Python',
        objectCode: `user = {
    "id": 123,
    "name": "张三",
    "email": "zhangsan@example.com",
    "age": 28
}`,
        jsonString: `{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `Protobuf 二进制:
08 7b  # field 1, varint 123
12 06  # field 2, length 6
e5 bc a0 e4 b8 89  # UTF-8 "张三"
1a 11  # field 3, length 17
7a 68 61 6e 67 73 61 6e 40 65 78 61 6d 70 6c 65 2e 63 6f 6d
20 1c  # field 4, varint 28`,
        binarySize: 38
      },
      java: {
        id: 'java',
        name: 'Java',
        objectCode: `User user = new User();
user.setId(123);
user.setName("张三");
user.setEmail("zhangsan@example.com");
user.setAge(28);`,
        jsonString: `{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `Java 序列化:
AC ED 00 05 73 72 00 04 55 73 65 72
... (复杂元数据)
实际大小 ~150 bytes`,
        binarySize: 150
      },
      golang: {
        id: 'golang',
        name: 'Go',
        objectCode: `type User struct {
    ID    int
    Name  string
    Email string
    Age   int
}

user := User{
    ID: 123,
    Name: "张三",
    Email: "zhangsan@example.com",
    Age: 28,
}`,
        jsonString: `{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `Gob 编码:
0f ff 81 03 01 01 08 55 73 65 72 01
ff 82 00 01 02 01 04 69 64 01 04 01
02 6e 61 6d 65 01 04 05 65 6d 61 69 6c
... (高效二进制)`,
        binarySize: 42
      }
    }
  }
}
