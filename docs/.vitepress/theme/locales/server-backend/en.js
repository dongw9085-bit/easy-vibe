export default {
  httpProtocol: {
    title: 'HTTP Protocol Demo',
    labels: {
      request: 'HTTP request',
      response: 'HTTP response',
      tcpConnection: 'TCP connection',
      unsafe: '⚠️ Not secure',
      safe: '✓ Secure',
      transferContent: 'Transferred content:',
      handshakeTitle: 'HTTPS handshake process'
    },
    versionHeaders: [
      'Version',
      'Year',
      'Core features',
      'Transfer format',
      'Connection model'
    ],
    tabs: [
      { id: 'request', name: 'Request/response', icon: '📡' },
      { id: 'versions', name: 'Version comparison', icon: '📊' },
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
      body: '{\n  "id": 123,\n  "name": "Alice",\n  "email": "alice@example.com"\n}'
    },
    demos: [
      {
        id: 'get',
        name: 'GET request',
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
          body: '{\n  "id": 123,\n  "name": "Alice"\n}'
        }
      },
      {
        id: 'post',
        name: 'POST create',
        request: {
          method: 'POST',
          url: '/api/users',
          version: 'HTTP/1.1',
          headers: {
            Host: 'api.example.com',
            'Content-Type': 'application/json',
            'Content-Length': '45'
          },
          body: '{\n  "name": "Bob",\n  "email": "bob@example.com"\n}'
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
          body: '{\n  "id": 124,\n  "name": "Bob"\n}'
        }
      },
      {
        id: '404',
        name: '404 error',
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
          body: '{\n  "error": "User not found"\n}'
        }
      }
    ],
    versions: [
      {
        version: 'HTTP/0.9',
        year: '1991',
        features: 'GET only',
        format: 'Plain text',
        connection: 'One request per connection',
        highlight: false
      },
      {
        version: 'HTTP/1.0',
        year: '1996',
        features: 'POST and HEAD added',
        format: 'Plain text',
        connection: 'Short connections',
        highlight: false
      },
      {
        version: 'HTTP/1.1',
        year: '1997',
        features: 'Persistent connections, chunked transfer',
        format: 'Plain text',
        connection: 'Long-lived connection',
        highlight: true
      },
      {
        version: 'HTTP/2',
        year: '2015',
        features: 'Multiplexing, header compression',
        format: 'Binary frames',
        connection: 'Multiplexed',
        highlight: true
      },
      {
        version: 'HTTP/3',
        year: '2022',
        features: 'Built on QUIC, fixes head-of-line blocking',
        format: 'QUIC (UDP)',
        connection: 'Independent streams',
        highlight: true
      }
    ],
    http2: {
      legacyRequests: [
        {
          label: 'Request 1',
          blocks: [
            { label: 'Send', type: 'req' },
            { label: 'Wait', type: 'wait' },
            { label: 'Receive', type: 'res' }
          ]
        },
        {
          label: 'Request 2',
          blocks: [
            { label: 'Queue', type: 'wait' },
            { label: 'Send', type: 'req' },
            { label: 'Wait', type: 'wait' },
            { label: 'Receive', type: 'res' }
          ]
        },
        {
          label: 'Request 3',
          blocks: [
            { label: 'Queue', type: 'wait' },
            { label: 'Queue', type: 'wait' },
            { label: 'Send', type: 'req' },
            { label: 'Receive', type: 'res' }
          ]
        }
      ],
      modernStreams: [
        {
          label: 'Stream 1',
          blocks: [
            { label: 'Send', type: 'req' },
            { label: 'Receive', type: 'res' }
          ]
        },
        {
          label: 'Stream 2',
          blocks: [
            { label: 'Send', type: 'req' },
            { label: 'Receive', type: 'res' }
          ]
        },
        {
          label: 'Stream 3',
          blocks: [
            { label: 'Send', type: 'req' },
            { label: 'Receive', type: 'res' }
          ]
        }
      ],
      legacyNote: 'Serial transfer waits for the previous request to finish',
      modernNote: 'Multiplexing transfers multiple requests concurrently'
    },
    https: {
      httpItems: [
        'Plain-text transfer can be intercepted',
        'Server identity cannot be verified',
        'Data can be tampered with'
      ],
      httpsItems: [
        'Encrypted transfer prevents eavesdropping',
        'SSL/TLS certificates verify identity',
        'Integrity checks prevent tampering'
      ],
      encryptedExample: '8f3a2b... (encrypted data)',
      steps: [
        {
          title: 'Client Hello',
          desc: 'The client sends supported cipher suites'
        },
        {
          title: 'Server Hello',
          desc: 'The server returns its certificate and selected cipher suite'
        },
        {
          title: 'Verify certificate',
          desc: 'The client verifies the server certificate'
        },
        { title: 'Key exchange', desc: 'A session key is generated' },
        {
          title: 'Encrypted communication',
          desc: 'Data is encrypted with the session key'
        }
      ]
    }
  },
  serialization: {
    title: 'Serialization Demo',
    panels: {
      object: {
        title: 'In-memory object',
        desc: 'An object in memory, usable only by the current process'
      },
      json: {
        title: 'JSON string',
        desc: 'Can be sent over the network and used across languages'
      },
      binary: {
        title: 'Binary',
        desc: 'Protobuf/MessagePack, smaller and faster'
      }
    },
    arrows: {
      serialize: 'Serialize',
      transfer: 'Transfer'
    },
    buttons: {
      reset: 'Reset',
      steps: [
        'Start serialization →',
        'Convert to binary →',
        'Transfer complete ✓',
        'Done'
      ]
    },
    comparisonTitle: '📊 Format comparison',
    comparisonHeaders: [
      'Format',
      'Size',
      'Speed',
      'Readability',
      'Cross-language'
    ],
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
  name: "Alice",
  email: "alice@example.com",
  age: 28
};`,
        jsonString: `{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `Hex encoding (MessagePack):
\\xa7 id 7b
\\xa4 name \\xa5 Alice
\\xa5 email \\xb1 alice@example.com
\\xa3 age 1c`,
        binarySize: 52
      },
      python: {
        id: 'python',
        name: 'Python',
        objectCode: `user = {
    "id": 123,
    "name": "Alice",
    "email": "alice@example.com",
    "age": 28
}`,
        jsonString: `{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `Protobuf binary:
08 7b  # field 1, varint 123
12 05  # field 2, length 5
41 6c 69 63 65  # UTF-8 "Alice"
1a 11  # field 3, length 17
61 6c 69 63 65 40 65 78 61 6d 70 6c 65 2e 63 6f 6d
20 1c  # field 4, varint 28`,
        binarySize: 38
      },
      java: {
        id: 'java',
        name: 'Java',
        objectCode: `User user = new User();
user.setId(123);
user.setName("Alice");
user.setEmail("alice@example.com");
user.setAge(28);`,
        jsonString: `{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `Java serialization:
AC ED 00 05 73 72 00 04 55 73 65 72
... (complex metadata)
actual size ~150 bytes`,
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
    Name: "Alice",
    Email: "alice@example.com",
    Age: 28,
}`,
        jsonString: `{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,
        jsonSize: 68,
        binaryString: `Gob encoding:
0f ff 81 03 01 01 08 55 73 65 72 01
ff 82 00 01 02 01 04 69 64 01 04 01
02 6e 61 6d 65 01 04 05 65 6d 61 69 6c
... (efficient binary)`,
        binarySize: 42
      }
    }
  }
}
