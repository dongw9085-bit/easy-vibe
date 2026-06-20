export default {
  basics: {
    title: '🧰 鉴权的 4 种常见“凭证”',
    subtitle: '选一个方案，看看请求长什么样、优缺点是什么、最常见坑是什么。',
    requestShape: '请求长什么样',
    usageTitle: '什么时候用 / 不用',
    suitable: '✅ 适合',
    risk: '⚠️ 不适合 / 风险',
    mantraTitle: '一句话口诀',
    mantra:
      '先认证（你是谁），再授权（你能做什么）。凭证只是“证明身份的方式”，授权永远要在服务端执行。',
    methods: [
      {
        id: 'basic',
        name: 'HTTP Basic',
        bestFor: '内部工具',
        example: `GET /api/profile
Authorization: Basic <base64(username:password)>`,
        note: 'Base64 不是加密；必须配合 HTTPS，且不建议用于公网生产。',
        pros: ['最简单，所有客户端都支持', '适合内部/临时调试工具'],
        cons: [
          '每次请求都带密码（风险大）',
          '无法“注销”（除非服务端改密码）',
          '不适合现代业务'
        ]
      },
      {
        id: 'cookie',
        name: 'Session + Cookie',
        bestFor: '传统 Web',
        example: `POST /login
→ 200 OK
Set-Cookie: session_id=abc; HttpOnly; Secure; SameSite=Lax

GET /api/profile
Cookie: session_id=abc`,
        note: '浏览器会自动带 Cookie；因此一定要做 CSRF 防护（SameSite / CSRF Token）。',
        pros: ['服务端可控（可主动注销）', '适合 SSR/同域 Web', '实现直观'],
        cons: [
          '服务端有状态（需要共享 session）',
          '跨域复杂',
          '容易被 CSRF 影响'
        ]
      },
      {
        id: 'jwt',
        name: 'JWT Bearer',
        bestFor: 'API/移动端',
        example: `POST /login
→ { "access_token": "..." }

GET /api/profile
Authorization: Bearer <access_token>`,
        note: 'JWT payload 可解码；不要放敏感信息。建议短 access token + refresh token。',
        pros: ['无状态，易扩展', '跨域友好', '移动端/多服务常用'],
        cons: [
          '难以全局注销（需要额外机制）',
          'token 变大，每次都要带',
          '设计不好会导致权限失控'
        ]
      },
      {
        id: 'apikey',
        name: 'API Key',
        bestFor: '服务到服务',
        example: `GET /api/metrics
X-API-Key: <your_api_key>`,
        note: 'API Key 更像“门禁卡”，要配合限流、IP 白名单、轮换、最小权限。',
        pros: ['实现简单', '适合服务间/脚本访问', '易于轮换（如果设计得当）'],
        cons: ['通常缺少用户上下文', '泄露后影响大', '需要做权限/轮换/审计']
      }
    ]
  },
  jwtWorkflow: {
    title: '🎫 JWT：生成 → 发送 → 验证 → 解析',
    subtitle:
      '默认“手动推进”，不自动下一步；避免把演示误当成真实系统的安全边界。',
    start: '开始',
    prev: '上一步',
    next: '下一步',
    reset: '重置',
    progress: 'Step {step} / {maxStep} · {title}',
    payloadTitle: '用户声明（Payload 示例）',
    payloadHint:
      '注意：JWT 的 payload 只是 Base64Url 编码，任何人都能解码，所以不要放密码、手机号等敏感数据。',
    tokenTitle: 'JWT Token（示意）',
    fullToken: '完整 Token',
    copied: '已复制',
    copyToken: '复制 Token',
    requestHeader: '请求头示例',
    fallbackTitle: '流程说明',
    warning: '注意',
    steps: [
      {
        title: '1) 生成 Header',
        desc: 'Header 描述使用的算法与 token 类型（JWT）。'
      },
      {
        title: '2) 生成 Payload',
        desc: 'Payload 放业务声明（claims）。它可被解码，所以不要放敏感信息。'
      },
      {
        title: '3) 生成 Signature',
        desc: 'Signature 用密钥对 header.payload 做签名，用来防篡改。',
        warn: '只有“签名校验”能保证 payload 未被改过；Base64 不是加密。'
      },
      {
        title: '4) 拼接 Token',
        desc: '把三段用 “.” 连接：header.payload.signature。'
      },
      {
        title: '5) 客户端发送请求',
        desc: '通常放在 Authorization: Bearer <token>。'
      },
      {
        title: '6) 服务端验证与授权',
        desc: '服务端校验签名与过期时间，再按 role/权限做授权判断。',
        warn: 'JWT 无法“立刻全局注销”：常用解法是短 access token + refresh token + 黑名单/版本号。'
      }
    ]
  },
  sessionJwt: {
    title: '🧩 Session vs JWT：怎么选？',
    subtitle:
      '选你的约束条件，得到推荐方案（并解释原因）。这比“背结论”更好用。',
    scenarioTitle: '你的场景',
    clientLabel: '主要客户端',
    revokeLabel: '是否强需求“立刻注销/踢下线”',
    corsLabel: '是否需要跨域（前后端分离，多域名）',
    scaleLabel: '服务是否会水平扩容（多实例）',
    yes: '是',
    no: '否',
    recommendationTitle: '推荐',
    why: '为什么',
    tipsTitle: '落地建议',
    pitfallsTitle: '常见误区',
    clients: [
      { id: 'web', label: '浏览器 Web' },
      { id: 'mobile', label: '移动端 App' },
      { id: 'server', label: '服务到服务' }
    ],
    sessionRecommendation: {
      title: 'Session + Cookie',
      desc: '传统 Web 的最稳妥方案',
      reasonSameSite: '同域 Web + 需要“立刻注销/踢下线” → Session 更直观可控。',
      reasonScale: '多实例时用 Redis 等共享 Session 存储即可。',
      tips: [
        'Cookie: HttpOnly + Secure + SameSite=Lax/Strict（视业务）',
        'CSRF：SameSite + CSRF Token（双重保险）',
        'Session Store：Redis + TTL + 续期策略（滑动过期）'
      ]
    },
    tokenRecommendation: {
      title: 'JWT Access Token（配合 Refresh）',
      desc: '现代 API/移动端常用组合',
      reasonToken:
        '跨域/移动端/多服务场景更偏向 Token（Authorization Header）。',
      reasonRevoke:
        '需要主动注销：用短 access token + refresh token + 黑名单/版本号。',
      reasonNoRevoke: '不强求“立刻注销”时，JWT 的无状态优势更明显。',
      tips: [
        'Access Token：短过期（如 15m），Refresh Token：单独存/可轮换',
        '存储：Web 尽量避免 localStorage；更推荐 HttpOnly Cookie 或内存 + 刷新机制（看业务）',
        '授权：服务端做 RBAC/ABAC；不要把 role 全塞 JWT 然后永不变更'
      ]
    },
    pitfalls: [
      {
        strong: 'JWT ≠ 更安全：',
        text: 'JWT 只是“无状态”。安全取决于密钥、过期策略、存储方式、授权设计。'
      },
      {
        strong: 'Cookie ≠ 一定 CSRF：',
        text: 'SameSite + CSRF token 可以显著降低风险。'
      },
      {
        strong: '别把第三方 OAuth token 当你系统 token：',
        text: '用途不同。'
      }
    ]
  },
  oauth2: {
    title: '🔑 OAuth2：第三方登录（授权码流程）',
    subtitle:
      '用最常见的 Authorization Code Flow（建议配合 PKCE）。默认手动推进，不自动下一步。',
    start: '开始',
    prev: '上一步',
    next: '下一步',
    reset: '重置',
    copied: '已复制',
    copyCommand: '复制命令',
    progress: 'Step {step} / {maxStep} · {title}',
    rolesTitle: '角色',
    roleDesc:
      'OAuth2 的核心：你的应用不再保存用户在第三方的密码，而是拿到授权码/令牌后去换取用户信息。',
    stepTitle: '本步要做什么',
    startHint: '点击开始',
    warning: '注意',
    commandTitle: '请求/命令示例（可照抄）',
    commandPlaceholder: '（点击开始后显示）',
    commandHint:
      '这是“示例请求”，不是你电脑上真实发出去的请求；你可以把参数替换成自己的 client_id / redirect_uri。',
    rememberTitle: '你真正需要记住的 4 件事',
    userConsentCommand: '（用户在授权页点击“同意/授权”）',
    backendCommand: `你的后端：
1) 读取 userinfo（拿到第三方 user_id）
2) 在你系统里创建/绑定用户
3) 返回你自己的 session cookie 或 JWT`,
    roles: [
      'Client（你的应用）',
      'Authorization Server（微信/Google 等）',
      'Resource Server（你的 API）'
    ],
    steps: [
      {
        title: '1) 跳转到授权页',
        desc: '你的应用把用户重定向到授权服务器，让用户登录并授权。',
        warn: 'redirect_uri 必须白名单；state 用于防 CSRF。'
      },
      {
        title: '2) 用户授权',
        desc: '用户在第三方确认“允许此应用读取基本信息”。（这一步发生在第三方页面）'
      },
      {
        title: '3) 带 code 回调',
        desc: '授权服务器把用户带回 redirect_uri，并附上一次性的授权码 code。'
      },
      {
        title: '4) 用 code 换 token',
        desc: '你的后端（或移动端 + PKCE）调用 token endpoint，把 code 换成 access token。'
      },
      {
        title: '5) 用 token 拉取用户信息',
        desc: '携带 access token 请求 userinfo（或你自己业务的资源服务）。'
      },
      {
        title: '6) 建立你自己的登录态',
        desc: 'OAuth2 只解决“第三方授权”，你的系统还要创建自己的 session/JWT（并做授权）。',
        warn: '不要把第三方 access token 当作你系统的权限 token；两者用途不同。'
      }
    ],
    remembers: [
      {
        strong: 'redirect_uri 必须白名单：',
        text: '避免被人把 code 劫持到自己的站。'
      },
      {
        strong: 'state 必须校验：',
        text: '防 CSRF（登录也会被 CSRF）。'
      },
      {
        strong: 'code 只能用一次且很快过期：',
        text: '泄露影响有限。'
      },
      {
        strong: 'access token 要短 + refresh token 要保护：',
        text: 'refresh token 更像“长期钥匙”。'
      }
    ]
  },
  authnAuthz: {
    title: '🪪 AuthN vs 🛂 AuthZ：一个请求到底会经历什么？',
    subtitle: '选择“谁在请求”与“要做什么”，看看认证/授权分别在哪一步起作用。',
    requestTitle: '选择请求',
    identityLabel: '身份（AuthN：你是谁）',
    actionLabel: '操作（AuthZ：你能做什么）',
    hint: '真实系统里：认证先发生（解析 cookie/JWT），授权发生在路由/业务逻辑层（RBAC/ABAC）。',
    resultTitle: '模拟结果',
    authnLabel: 'AuthN（认证）',
    authzLabel: 'AuthZ（授权）',
    pass: '通过',
    fail: '失败',
    allow: '允许',
    deny: '拒绝',
    keyPointsTitle: '关键点',
    missingCredential: '缺少有效凭证（cookie/JWT）',
    identifiedAs: '识别为 {id}',
    authnFailed: '认证未通过，无法做授权判断',
    adminDeleteAllowed: 'admin 允许删除用户',
    adminOnlyDelete: '只有 admin 才能删除用户',
    loggedInAllowed: '此操作对已登录用户开放',
    users: [
      { id: 'anon', name: '匿名用户' },
      { id: 'user', name: '普通用户' },
      { id: 'admin', name: '管理员' }
    ],
    actions: [
      { id: 'view_profile', name: '查看个人资料（/api/me）' },
      { id: 'create_post', name: '发帖（POST /posts）' },
      { id: 'delete_user', name: '删除用户（DELETE /users/:id）' }
    ],
    keyPoints: [
      { strong: '认证失败：', text: '你是谁都不确定 → 通常返回 401。' },
      {
        strong: '认证通过但没权限：',
        text: '你是谁确定了，但不能做 → 通常返回 403。'
      },
      {
        strong: '授权规则要在服务端：',
        text: '别相信前端的“是否显示按钮”，那只是 UX。'
      }
    ]
  },
  sessionCookie: {
    title: '🍪 Session + Cookie：有状态登录',
    subtitle:
      '默认手动推进：先看清楚状态再进入下一步（避免“自动下一步”误解）。',
    start: '开始',
    prev: '上一步',
    next: '下一步',
    reset: '重置',
    progress: 'Step {step} / {maxStep} · {title}',
    browserTitle: '浏览器（客户端）',
    noCookie: '暂无 Cookie',
    requestTitle: '本步请求',
    serverTitle: '服务器',
    noSession: '暂无 Session',
    responseTitle: '本步响应',
    fallbackTitle: '流程说明',
    warning: '注意',
    clickStart: '（点击开始）',
    waitCookie: '（等待服务器响应并写入 Cookie）',
    steps: [
      {
        title: '1) 登录请求（POST /login）',
        desc: '用户提交用户名/密码，服务器验证成功后创建 Session。'
      },
      {
        title: '2) 服务器 Set-Cookie',
        desc: '服务器返回 Set-Cookie: session_id=...；浏览器保存 Cookie。',
        warn: 'Cookie 建议加 HttpOnly + Secure + SameSite；同时要考虑 CSRF 防护。'
      },
      {
        title: '3) 后续请求自动带 Cookie',
        desc: '浏览器对同域请求会自动带上 Cookie，服务器用 session_id 查 Session。'
      },
      {
        title: '4) 授权判断（role/权限）',
        desc: '认证（你是谁）之后，仍需要授权（你能做什么）。比如 admin 才能访问管理接口。'
      },
      {
        title: '5) 注销',
        desc: '服务器删除 Session（或让其过期），并让浏览器清理 Cookie。'
      }
    ]
  },
  passwordHashing: {
    title: '🔐 密码存储：哈希 + 盐 + 慢',
    subtitle:
      '演示 PBKDF2（模拟慢哈希）如何抵抗彩虹表/暴力破解；真实项目通常选 bcrypt/Argon2。',
    inputTitle: '输入',
    passwordLabel: '密码',
    placeholder: '例如：123456',
    iterationsLabel: 'iterations（迭代次数）：',
    iterationsHint: '越大越慢，暴力破解成本越高（但登录也更慢）。',
    enableSalt: '启用盐（salt）',
    regenSalt: '生成新盐',
    outputTitle: '输出（模拟）',
    emptyHash: '（请输入密码）',
    conclusionTitle: '结论',
    conclusion:
      '不要存明文；不要用无盐的快速哈希（MD5/SHA1/SHA256 直接 hash 密码）。应使用“专门的密码哈希/KDF（慢 + 盐）”，并设置合理成本。',
    rainbowTitle: '🌈 彩虹表为什么会失效？（同一密码 + 不同盐 → 不同结果）',
    rainbowHint:
      '彩虹表依赖“预计算”：同一个密码如果总产生同一个哈希，攻击者就能快速反查。盐让预计算成本爆炸。'
  },
  evolution: {
    title: '🧭 鉴权方案演进：从 Basic 到 OAuth2',
    subtitle: '点击卡片，快速建立“场景 → 方案”的直觉。',
    suitable: '✅ 适合',
    risks: '⚠️ 主要风险',
    stages: [
      {
        id: 'basic',
        icon: '🪪',
        name: 'HTTP Basic',
        when: '内部工具/调试',
        desc: '最早期的方案：每次请求都带 username/password（或等价凭证）。',
        pros: ['实现最简单', '不需要额外存储'],
        cons: [
          '每次请求都带“高价值凭证”',
          '不适合公网生产',
          '很难做细粒度授权'
        ],
        example: `GET /api/profile
Authorization: Basic <base64(username:password)>`
      },
      {
        id: 'session',
        icon: '🍪',
        name: 'Session + Cookie',
        when: '传统 Web / SSR',
        desc: '服务端存 Session，浏览器存 cookie(session_id)。后续请求自动带 Cookie。',
        pros: ['服务端可主动注销', '很适合同域 SSR', '工程落地成熟'],
        cons: [
          '服务端有状态，需要共享/扩展',
          'CSRF 风险更高（必须防）',
          '跨域更麻烦'
        ],
        example: `POST /login
→ Set-Cookie: session_id=abc; HttpOnly; Secure; SameSite=Lax

GET /api/profile
Cookie: session_id=abc`
      },
      {
        id: 'jwt',
        icon: '🎫',
        name: 'JWT Access Token',
        when: 'API / 移动端 / 多服务',
        desc: '服务端不存状态，把声明编码为 token；请求携带 Authorization: Bearer。',
        pros: ['无状态易扩展', '跨域友好', '多服务常用'],
        cons: [
          '难以全局注销（要额外机制）',
          'token 体积大',
          'payload 可读（别放敏感信息）'
        ],
        example: `GET /api/profile
Authorization: Bearer <access_token>`
      },
      {
        id: 'oauth2',
        icon: '🔑',
        name: 'OAuth2 / OIDC',
        when: '第三方登录/授权',
        desc: '解决“第三方授权/登录”，让应用无需保存第三方账号密码。',
        pros: [
          '用户体验好（扫码/一键登录）',
          '安全边界更清晰',
          '可扩展到 OIDC（登录）'
        ],
        cons: [
          '接入复杂度更高',
          '必须正确处理 redirect_uri/state',
          'token 生命周期设计很关键'
        ],
        example: `GET /authorize?response_type=code&client_id=...&redirect_uri=...&state=...`
      }
    ]
  },
  interactiveLogin: {
    title: '🔐 认证流程演示',
    subtitle: '模拟登录过程，理解认证与授权的区别',
    modeLabel: '选择鉴权方式：',
    formTitle: '登录表单',
    username: '用户名',
    password: '密码',
    usernamePlaceholder: '输入用户名',
    passwordPlaceholder: '输入密码',
    startDemo: '开始演示',
    hintTitle: '💡 提示',
    hintText: '试试用户名',
    hintPassword: '密码',
    currentStep: '当前步骤：{step} / {maxStep}',
    manualHint: '（手动推进，避免“自动下一步”误解）',
    prev: '上一步',
    next: '下一步',
    reset: '重置',
    flowTitle: '📊 数据流可视化',
    stageLoginRequest: '1. 客户端发送登录请求',
    stageVerify: '2. 服务器验证身份',
    queryUser: '查询用户数据库',
    verifyHash: '验证密码哈希',
    generate: '生成',
    stageResponse: '3. 服务器返回认证结果',
    loginSuccess: '✅ 登录成功',
    cookieSetting: '🍪 Cookie 设置',
    tokenStorage: '🎫 Token 存储',
    stageSubsequent: '4. 后续请求自动携带认证信息',
    workingPrinciple: '📖 {mode} 工作原理',
    sessionPrinciple:
      'Session 模式：服务器在内存或 Redis 中创建一个 Session，存储用户信息。服务器返回一个 session_id 给客户端，客户端后续请求会自动在 Cookie 中携带这个 ID。服务器根据 ID 查找对应的 Session，从而识别用户身份。',
    jwtPrinciple:
      'JWT 模式：服务器将用户信息编码成 JWT Token，直接返回给客户端。客户端将 Token 存储在 localStorage，后续请求在 Authorization Header 中携带。服务器验证 Token 的签名即可识别用户，无需存储状态。',
    replay: '🔄 重新演示'
  },
  csrf: {
    title: '🛡️ CSRF：为什么“自动带 Cookie”会出事？',
    subtitle:
      '手动推进一个最小攻击链，再看 3 个最常用防护手段（SameSite / CSRF Token / 双重提交）。',
    start: '开始',
    prev: '上一步',
    next: '下一步',
    reset: '重置',
    progress: 'Step {step} / {maxStep} · {title}',
    scenarioTitle: '场景',
    scenario:
      '假设你登录了 bank.com（Cookie 已存在）。你又打开了一个恶意网站 evil.com，它偷偷发起转账请求。',
    cookieTitle: '你的 Cookie（浏览器会自动带）',
    requestTitle: '本步请求',
    defenseTitle: '防护怎么选？（优先顺序）',
    warning: '注意',
    warningText:
      'CSRF 主要针对“Cookie 自动携带”的场景。若你用 Authorization: Bearer（不自动发送），CSRF 风险会显著降低，但仍要考虑 XSS/Token 泄露等问题。',
    clickStart: '（点击开始）',
    cookieOnlyResult: '（如果服务端只校验 Cookie：可能返回 200 OK 并执行转账）',
    steps: [
      {
        title: '1) 恶意站点发起跨站请求',
        desc: 'evil.com 诱导你点击按钮/加载图片/提交表单，目标是 bank.com 的转账接口。'
      },
      {
        title: '2) 浏览器自动带上 bank.com 的 Cookie',
        desc: '关键点：Cookie 是“按域名自动携带”的，evil.com 不需要知道你的 session_id。'
      },
      {
        title: '3) 服务端如果只靠 Cookie 识别用户，会误以为是你本人操作',
        desc: '如果 bank.com 没做 CSRF 防护，转账可能被执行。'
      },
      {
        title: '4) 加上 CSRF 防护后，请求会被拒绝',
        desc: 'SameSite/CSRF Token 等会阻断这类跨站伪造请求。'
      }
    ],
    defenses: [
      {
        strong: 'SameSite Cookie：',
        text: '对大多数“跨站表单/图片”请求非常有效（Lax/Strict）。'
      },
      {
        strong: 'CSRF Token：',
        text: '在表单/请求头里带 token，服务端校验（对复杂场景最稳）。'
      },
      {
        strong: '双重提交 Cookie：',
        text: 'Cookie + Header 同时带 token（服务端比较一致性）。'
      }
    ]
  }
}
