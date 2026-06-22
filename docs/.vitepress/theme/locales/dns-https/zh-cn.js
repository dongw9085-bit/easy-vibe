export default {
  resolution: {
    title: '🔍 DNS 解析过程模拟器',
    placeholder: '输入域名，如 www.example.com',
    resolving: '解析中...',
    start: '开始解析',
    reset: '重置',
    completed: '✅ 解析完成',
    totalTime: '总耗时：约 {time}ms（模拟）',
    infoPrefix: '解析流程说明：',
    infoText:
      '浏览器访问网站时，需要先将域名翻译成 IP 地址。这个过程会依次查询多级缓存和服务器，直到找到对应的 IP。',
    foundRecord: '找到记录！IP = {ip}',
    steps: [
      { icon: '🌐', label: '浏览器缓存', result: '未命中，继续查询...' },
      { icon: '💻', label: '操作系统缓存', result: '未命中，继续查询...' },
      { icon: '🔄', label: '递归解析器', result: '向根服务器发起查询...' },
      { icon: '🌍', label: '根域名服务器', result: '返回 .com TLD 服务器地址' },
      { icon: '📂', label: 'TLD 服务器', result: '返回权威服务器地址' },
      { icon: '🏠', label: '权威 DNS 服务器', result: '' }
    ]
  },
  records: {
    title: '📋 DNS 记录类型速查',
    exampleTitle: '示例记录',
    usageTitle: '常见用途',
    tipPrefix: '小贴士：',
    tipText:
      'DNS 不只是把域名翻译成 IP，它还承载了邮件路由、域名验证、负载均衡等多种功能，全靠不同的记录类型来实现。',
    items: [
      {
        type: 'A',
        name: 'Address 记录',
        desc: '将域名映射到一个 IPv4 地址。这是最常见的 DNS 记录类型，浏览器访问网站时最终需要的就是这条记录。',
        example: 'example.com.  IN  A  93.184.216.34',
        usages: [
          '网站域名指向服务器 IP',
          '子域名指向不同的服务器',
          '配合负载均衡返回多个 IP'
        ]
      },
      {
        type: 'AAAA',
        name: 'IPv6 Address 记录',
        desc: '将域名映射到一个 IPv6 地址。随着 IPv4 地址耗尽，AAAA 记录变得越来越重要。',
        example: 'example.com.  IN  AAAA  2606:2800:220:1:248:1893:25c8:1946',
        usages: [
          '支持 IPv6 网络的设备访问',
          '双栈部署（同时配置 A 和 AAAA）',
          '面向未来的网络架构'
        ]
      },
      {
        type: 'CNAME',
        name: 'Canonical Name 记录',
        desc: '将一个域名指向另一个域名（别名）。浏览器会继续解析目标域名，直到找到 A 记录。',
        example: 'www.example.com.  IN  CNAME  example.com.',
        usages: [
          'www 子域名指向主域名',
          'CDN 加速（指向 CDN 提供商域名）',
          '多个域名指向同一服务'
        ]
      },
      {
        type: 'MX',
        name: 'Mail Exchange 记录',
        desc: '指定负责接收该域名邮件的邮件服务器地址和优先级。数字越小优先级越高。',
        example: 'example.com.  IN  MX  10 mail.example.com.',
        usages: [
          '配置企业邮箱（如 Gmail、Outlook）',
          '设置邮件服务器优先级',
          '邮件备份和容灾'
        ]
      },
      {
        type: 'TXT',
        name: 'Text 记录',
        desc: '存储任意文本信息。常用于域名所有权验证、邮件安全策略（SPF/DKIM/DMARC）等场景。',
        example: 'example.com.  IN  TXT  "v=spf1 include:_spf.google.com ~all"',
        usages: [
          'SPF 记录防止邮件伪造',
          'SSL 证书申请时的域名验证',
          '第三方服务的域名所有权确认'
        ]
      },
      {
        type: 'NS',
        name: 'Name Server 记录',
        desc: '指定该域名由哪些 DNS 服务器负责解析。这是 DNS 委派机制的核心。',
        example: 'example.com.  IN  NS  ns1.exampledns.com.',
        usages: [
          '将域名托管到指定 DNS 服务商',
          '子域名委派给不同团队管理',
          'DNS 服务迁移'
        ]
      }
    ]
  },
  comparison: {
    title: '🔐 HTTP vs HTTPS 数据传输对比',
    httpMode: 'HTTP（明文）',
    httpsMode: 'HTTPS（加密）',
    sending: '传输中...',
    send: '发送数据',
    browser: '浏览器',
    server: '服务器',
    originalDataTitle: '原始数据',
    receivedDataTitle: '收到数据',
    plainTransmission: '🔓 明文传输',
    encryptedTransmission: '🔒 加密传输',
    hackerPlain: '中间人可窃听',
    hackerEncrypted: '中间人无法解密',
    encryptedData: 'a7f2c9...3b8e1d（密文）',
    headers: ['对比项', 'HTTP', 'HTTPS'],
    rows: [
      { label: '端口', http: '80', https: '443' },
      { label: '数据加密', http: '无（明文传输）', https: 'TLS 对称加密' },
      { label: '身份验证', http: '无', https: 'CA 证书验证服务器身份' },
      { label: '数据完整性', http: '无保障', https: 'MAC 校验防篡改' },
      { label: 'SEO 影响', http: '搜索引擎降权', https: '搜索引擎优先收录' },
      { label: '性能开销', http: '无额外开销', https: 'TLS 握手增加约 1-2 RTT' }
    ]
  },
  handshake: {
    title: '🤝 TLS 握手过程演示',
    running: '握手进行中...',
    start: '开始 TLS 握手',
    reset: '重置',
    client: '客户端（浏览器）',
    server: '服务器',
    success:
      '✅ TLS 握手完成！后续所有 HTTP 数据都将通过对称加密传输，第三方无法窃听。',
    messages: [
      {
        name: 'Client Hello',
        direction: 'right',
        desc: '发送支持的 TLS 版本、加密套件列表、随机数',
        detail:
          '浏览器向服务器发起连接请求，告知自己支持的 TLS 版本（如 TLS 1.3）、可用的加密算法列表（如 AES-256-GCM）以及一个客户端随机数（Client Random）。这就像自我介绍："我会这些加密方式，你选一个吧。"'
      },
      {
        name: 'Server Hello',
        direction: 'left',
        desc: '选定 TLS 版本、加密套件、服务器随机数',
        detail:
          '服务器从客户端提供的列表中选择一个最优的加密套件，并返回自己的随机数（Server Random）。相当于回应："好的，我们就用 TLS 1.3 + AES-256-GCM 来通信。"'
      },
      {
        name: 'Certificate',
        direction: 'left',
        desc: '服务器发送数字证书（含公钥）',
        detail:
          '服务器将自己的数字证书发送给浏览器。证书中包含服务器的公钥、域名信息以及 CA 的签名。浏览器会验证证书是否由受信任的 CA 签发、是否过期、域名是否匹配。'
      },
      {
        name: 'Key Exchange',
        direction: 'right',
        desc: '双方协商生成会话密钥',
        detail:
          '在 TLS 1.3 中，客户端和服务器通过 ECDHE（椭圆曲线 Diffie-Hellman）算法交换密钥材料。双方各自生成临时密钥对，交换公钥后独立计算出相同的"预主密钥"，再结合之前的随机数推导出最终的对称会话密钥。'
      },
      {
        name: 'Finished',
        direction: 'right',
        desc: '双方确认握手成功，开始加密通信',
        detail:
          '双方各自发送 Finished 消息，其中包含之前所有握手消息的摘要（用刚协商好的密钥加密）。如果对方能正确解密并验证，说明密钥协商成功，后续所有数据都将使用对称加密传输。'
      }
    ]
  },
  certificate: {
    title: '🔗 证书信任链可视化',
    intro: '点击每一层证书，查看它的详细信息和在信任链中的角色。',
    issuedBy: '签发',
    verifyTitle: '🔍 浏览器验证流程',
    certs: [
      {
        icon: '🏛️',
        title: '根证书（Root CA）',
        subtitle: '信任的起点',
        color: '#c62828',
        explain:
          '根证书是整个信任链的锚点。它由根证书颁发机构自签名，预装在操作系统和浏览器中。全球只有少数几十个根 CA，它们的安全性由严格的审计和物理安全措施保障。根 CA 的私钥通常存储在离线的硬件安全模块（HSM）中。',
        details: [
          { label: '签发者', value: 'DigiCert Global Root G2（自签名）' },
          { label: '有效期', value: '25 年（2013 - 2038）' },
          { label: '密钥长度', value: 'RSA 2048 位' },
          { label: '存储位置', value: '操作系统 / 浏览器内置信任库' },
          { label: '数量级', value: '全球约 150 个受信根证书' }
        ]
      },
      {
        icon: '🏢',
        title: '中间证书（Intermediate CA）',
        subtitle: '信任的桥梁',
        color: '#e65100',
        explain:
          '中间证书由根 CA 签发，作为根证书和服务器证书之间的桥梁。这种分层设计的好处是：即使中间证书被泄露，也可以单独吊销它而不影响根证书。中间 CA 负责日常的证书签发工作，根 CA 的私钥因此可以保持离线状态。',
        details: [
          { label: '签发者', value: 'DigiCert Global Root G2' },
          {
            label: '持有者',
            value: 'DigiCert SHA2 Extended Validation Server CA'
          },
          { label: '有效期', value: '10 年' },
          { label: '用途', value: '签发终端实体（服务器）证书' },
          { label: '可吊销', value: '是（通过 CRL 或 OCSP）' }
        ]
      },
      {
        icon: '🌐',
        title: '服务器证书（Server Certificate）',
        subtitle: '网站的身份证',
        color: '#1565c0',
        explain:
          '服务器证书是网站向浏览器证明自己身份的凭证。它由中间 CA 签发，包含网站的域名、公钥和有效期等信息。当浏览器收到这张证书后，会沿着信任链向上验证，直到找到一个已经信任的根证书为止。',
        details: [
          {
            label: '签发者',
            value: 'DigiCert SHA2 Extended Validation Server CA'
          },
          { label: '持有者', value: 'www.example.com' },
          { label: '有效期', value: '1 年（行业标准）' },
          { label: '包含公钥', value: 'ECDSA P-256 公钥' },
          { label: '验证级别', value: 'EV（扩展验证）/ DV（域名验证）' }
        ]
      }
    ],
    verifySteps: [
      '浏览器收到服务器证书，读取其签发者信息',
      '找到中间证书，用中间 CA 的公钥验证服务器证书的签名',
      '再用根 CA 的公钥验证中间证书的签名',
      '确认根证书在本地信任库中 → 整条链验证通过'
    ]
  }
}
