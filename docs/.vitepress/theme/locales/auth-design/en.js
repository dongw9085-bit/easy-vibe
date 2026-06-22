export default {
  basics: {
    title: '🧰 Four Common Authentication Credentials',
    subtitle:
      'Choose a method to see what the request looks like, where it fits, and the common pitfalls.',
    requestShape: 'What the request looks like',
    usageTitle: 'When to use it, and when not to',
    suitable: '✅ Good fit',
    risk: '⚠️ Poor fit / risks',
    mantraTitle: 'Rule of thumb',
    mantra:
      'Authenticate first, then authorize. Credentials only prove identity; authorization must always be enforced on the server.',
    methods: [
      {
        id: 'basic',
        name: 'HTTP Basic',
        bestFor: 'Internal tools',
        example: `GET /api/profile
Authorization: Basic <base64(username:password)>`,
        note: 'Base64 is not encryption. Use HTTPS, and avoid it for public production systems.',
        pros: [
          'Very simple and supported by every client',
          'Useful for internal or temporary debugging tools'
        ],
        cons: [
          'Sends the password on every request, which is risky',
          'No real logout unless the server changes the password',
          'Not a good fit for modern product systems'
        ]
      },
      {
        id: 'cookie',
        name: 'Session + Cookie',
        bestFor: 'Traditional Web',
        example: `POST /login
→ 200 OK
Set-Cookie: session_id=abc; HttpOnly; Secure; SameSite=Lax

GET /api/profile
Cookie: session_id=abc`,
        note: 'Browsers attach cookies automatically, so CSRF protection is required, such as SameSite or CSRF tokens.',
        pros: [
          'Server-controlled and can be revoked',
          'Good for SSR and same-origin Web apps',
          'Straightforward to understand'
        ],
        cons: [
          'Server-side state requires shared sessions',
          'Cross-origin flows are more complex',
          'Vulnerable to CSRF without defenses'
        ]
      },
      {
        id: 'jwt',
        name: 'JWT Bearer',
        bestFor: 'APIs / mobile',
        example: `POST /login
→ { "access_token": "..." }

GET /api/profile
Authorization: Bearer <access_token>`,
        note: 'JWT payloads are decodable. Do not store sensitive data. Prefer short access tokens plus refresh tokens.',
        pros: [
          'Stateless and easy to scale',
          'Works well across origins',
          'Common in mobile and multi-service systems'
        ],
        cons: [
          'Hard to revoke globally without extra mechanisms',
          'Tokens can become large and are sent every time',
          'Poor design can lead to authorization mistakes'
        ]
      },
      {
        id: 'apikey',
        name: 'API Key',
        bestFor: 'Service to service',
        example: `GET /api/metrics
X-API-Key: <your_api_key>`,
        note: 'An API key is more like an access card. Pair it with rate limits, IP allowlists, rotation, and least privilege.',
        pros: [
          'Simple to implement',
          'Good for service or script access',
          'Easy to rotate when designed well'
        ],
        cons: [
          'Usually lacks user context',
          'High impact if leaked',
          'Needs permissioning, rotation, and auditing'
        ]
      }
    ]
  },
  jwtWorkflow: {
    title: '🎫 JWT: Generate → Send → Verify → Decode',
    subtitle:
      'This demo advances manually by default so the walkthrough is not confused with a real security boundary.',
    start: 'Start',
    prev: 'Previous',
    next: 'Next',
    reset: 'Reset',
    progress: 'Step {step} / {maxStep} · {title}',
    payloadTitle: 'User claims (payload example)',
    payloadHint:
      'Remember: a JWT payload is only Base64Url encoded. Anyone can decode it, so do not put passwords, phone numbers, or other sensitive data inside.',
    tokenTitle: 'JWT token (illustration)',
    fullToken: 'Full token',
    copied: 'Copied',
    copyToken: 'Copy token',
    requestHeader: 'Request header example',
    fallbackTitle: 'Workflow notes',
    warning: 'Note',
    steps: [
      {
        title: '1) Generate Header',
        desc: 'The header describes the algorithm and token type, such as JWT.'
      },
      {
        title: '2) Generate Payload',
        desc: 'The payload stores business claims. It can be decoded, so do not put sensitive information there.'
      },
      {
        title: '3) Generate Signature',
        desc: 'The signature signs header.payload with a secret key to prevent tampering.',
        warn: 'Only signature verification proves the payload was not changed. Base64 is not encryption.'
      },
      {
        title: '4) Assemble Token',
        desc: 'Join the three parts with dots: header.payload.signature.'
      },
      {
        title: '5) Client Sends Request',
        desc: 'The token is usually sent as Authorization: Bearer <token>.'
      },
      {
        title: '6) Server Verifies and Authorizes',
        desc: 'The server checks the signature and expiration time, then authorizes based on role or permissions.',
        warn: 'JWTs cannot be globally revoked immediately by default. Common designs use short access tokens, refresh tokens, and a denylist or token version.'
      }
    ]
  },
  sessionJwt: {
    title: '🧩 Session vs JWT: How Do You Choose?',
    subtitle:
      'Pick your constraints and get a recommendation with reasons. This is more useful than memorizing a rule.',
    scenarioTitle: 'Your scenario',
    clientLabel: 'Main client',
    revokeLabel: 'Do you need immediate logout or forced sign-out?',
    corsLabel:
      'Do you need cross-origin access, such as separate frontend and backend domains?',
    scaleLabel:
      'Will the service scale horizontally across multiple instances?',
    yes: 'Yes',
    no: 'No',
    recommendationTitle: 'Recommendation',
    why: 'Why',
    tipsTitle: 'Implementation tips',
    pitfallsTitle: 'Common misconceptions',
    clients: [
      { id: 'web', label: 'Browser Web' },
      { id: 'mobile', label: 'Mobile app' },
      { id: 'server', label: 'Service to service' }
    ],
    sessionRecommendation: {
      title: 'Session + Cookie',
      desc: 'The safest default for traditional Web apps',
      reasonSameSite:
        'Same-site Web plus immediate logout needs are easier to control with sessions.',
      reasonScale:
        'For multiple instances, use a shared session store such as Redis.',
      tips: [
        'Cookie: HttpOnly + Secure + SameSite=Lax/Strict depending on the product',
        'CSRF: SameSite plus CSRF token for layered defense',
        'Session store: Redis + TTL + renewal strategy such as sliding expiration'
      ]
    },
    tokenRecommendation: {
      title: 'JWT Access Token with Refresh Token',
      desc: 'A common setup for modern APIs and mobile apps',
      reasonToken:
        'Cross-origin, mobile, and multi-service scenarios usually fit token-based Authorization headers better.',
      reasonRevoke:
        'For active logout, use short access tokens, refresh tokens, and a denylist or version field.',
      reasonNoRevoke:
        'When immediate logout is not required, JWT statelessness becomes more valuable.',
      tips: [
        'Access token: short expiration such as 15m. Refresh token: store separately and rotate when possible.',
        'Storage: avoid localStorage on Web when possible; prefer HttpOnly cookies or memory plus refresh, depending on the product.',
        'Authorization: enforce RBAC/ABAC on the server. Do not put roles into JWTs and assume they never change.'
      ]
    },
    pitfalls: [
      {
        strong: 'JWT is not automatically more secure:',
        text: 'JWT is only stateless. Security depends on keys, expiration, storage, and authorization design.'
      },
      {
        strong: 'Cookie does not automatically mean CSRF:',
        text: 'SameSite plus CSRF tokens can significantly reduce risk.'
      },
      {
        strong: 'Do not treat third-party OAuth tokens as your system tokens:',
        text: 'They have different purposes.'
      }
    ]
  },
  oauth2: {
    title: '🔑 OAuth2: Third-Party Login with Authorization Code Flow',
    subtitle:
      'Walk through the common Authorization Code Flow, preferably with PKCE. The demo advances manually.',
    start: 'Start',
    prev: 'Previous',
    next: 'Next',
    reset: 'Reset',
    copied: 'Copied',
    copyCommand: 'Copy command',
    progress: 'Step {step} / {maxStep} · {title}',
    rolesTitle: 'Roles',
    roleDesc:
      'The core idea of OAuth2: your app no longer stores the user password for the third-party service. It receives an authorization code or token and uses that to fetch user information.',
    stepTitle: 'What to do in this step',
    startHint: 'Click start',
    warning: 'Note',
    commandTitle: 'Request / command example',
    commandPlaceholder: '(shown after you click start)',
    commandHint:
      'This is an example request, not a real request sent from your computer. Replace parameters such as client_id and redirect_uri with your own values.',
    rememberTitle: 'Four things to remember',
    userConsentCommand: '(The user clicks “Allow” on the authorization page)',
    backendCommand: `Your backend:
1) Read userinfo and get the third-party user_id
2) Create or bind the user in your own system
3) Return your own session cookie or JWT`,
    roles: [
      'Client (your app)',
      'Authorization Server (WeChat, Google, etc.)',
      'Resource Server (your API)'
    ],
    steps: [
      {
        title: '1) Redirect to Authorization Page',
        desc: 'Your app redirects the user to the authorization server so the user can sign in and grant access.',
        warn: 'redirect_uri must be allowlisted, and state is used to prevent CSRF.'
      },
      {
        title: '2) User Grants Access',
        desc: 'The user confirms that this app may read basic information. This happens on the third-party page.'
      },
      {
        title: '3) Callback with Code',
        desc: 'The authorization server redirects the user back to redirect_uri with a one-time authorization code.'
      },
      {
        title: '4) Exchange Code for Token',
        desc: 'Your backend, or a mobile app with PKCE, calls the token endpoint to exchange the code for an access token.'
      },
      {
        title: '5) Fetch User Information',
        desc: 'Send the access token to userinfo, or to your own resource service.'
      },
      {
        title: '6) Create Your Own Login Session',
        desc: 'OAuth2 only handles third-party authorization. Your system still creates its own session or JWT and enforces authorization.',
        warn: 'Do not use a third-party access token as the permission token for your own system. They have different purposes.'
      }
    ],
    remembers: [
      {
        strong: 'redirect_uri must be allowlisted:',
        text: 'This prevents attackers from stealing the code through their own site.'
      },
      {
        strong: 'state must be verified:',
        text: 'It protects against CSRF, including login CSRF.'
      },
      {
        strong: 'code is one-time and expires quickly:',
        text: 'This limits the impact of leakage.'
      },
      {
        strong:
          'access tokens should be short-lived and refresh tokens protected:',
        text: 'A refresh token is more like a long-term key.'
      }
    ]
  },
  authnAuthz: {
    title: '🪪 AuthN vs 🛂 AuthZ: What Happens to a Request?',
    subtitle:
      'Choose who is making the request and what they want to do to see where authentication and authorization apply.',
    requestTitle: 'Choose request',
    identityLabel: 'Identity (AuthN: who are you?)',
    actionLabel: 'Action (AuthZ: what can you do?)',
    hint: 'In a real system, authentication happens first by parsing a cookie or JWT, while authorization happens in routing or business logic with RBAC/ABAC.',
    resultTitle: 'Simulation result',
    authnLabel: 'AuthN (authentication)',
    authzLabel: 'AuthZ (authorization)',
    pass: 'Pass',
    fail: 'Fail',
    allow: 'Allow',
    deny: 'Deny',
    keyPointsTitle: 'Key points',
    missingCredential: 'Missing valid credential such as cookie or JWT',
    identifiedAs: 'Identified as {id}',
    authnFailed: 'Authentication failed, so authorization cannot be evaluated',
    adminDeleteAllowed: 'admin is allowed to delete users',
    adminOnlyDelete: 'Only admin can delete users',
    loggedInAllowed: 'This action is open to signed-in users',
    users: [
      { id: 'anon', name: 'Anonymous user' },
      { id: 'user', name: 'Regular user' },
      { id: 'admin', name: 'Admin' }
    ],
    actions: [
      { id: 'view_profile', name: 'View profile (/api/me)' },
      { id: 'create_post', name: 'Create post (POST /posts)' },
      { id: 'delete_user', name: 'Delete user (DELETE /users/:id)' }
    ],
    keyPoints: [
      {
        strong: 'Authentication failure:',
        text: 'the system does not know who you are, so it usually returns 401.'
      },
      {
        strong: 'Authenticated but unauthorized:',
        text: 'the system knows who you are, but you cannot perform the action, so it usually returns 403.'
      },
      {
        strong: 'Authorization rules belong on the server:',
        text: 'do not trust whether the frontend shows a button; that is only UX.'
      }
    ]
  },
  sessionCookie: {
    title: '🍪 Session + Cookie: Stateful Login',
    subtitle:
      'The demo advances manually so each state is visible before the next step.',
    start: 'Start',
    prev: 'Previous',
    next: 'Next',
    reset: 'Reset',
    progress: 'Step {step} / {maxStep} · {title}',
    browserTitle: 'Browser (client)',
    noCookie: 'No cookie yet',
    requestTitle: 'Request in this step',
    serverTitle: 'Server',
    noSession: 'No session yet',
    responseTitle: 'Response in this step',
    fallbackTitle: 'Workflow notes',
    warning: 'Note',
    clickStart: '(click start)',
    waitCookie: '(waiting for server response and cookie write)',
    steps: [
      {
        title: '1) Login Request (POST /login)',
        desc: 'The user submits username and password. After validation, the server creates a session.'
      },
      {
        title: '2) Server Sends Set-Cookie',
        desc: 'The server returns Set-Cookie: session_id=..., and the browser stores the cookie.',
        warn: 'Cookies should use HttpOnly, Secure, and SameSite where possible. CSRF protection still matters.'
      },
      {
        title: '3) Later Requests Attach Cookie Automatically',
        desc: 'For same-origin requests, the browser attaches the cookie automatically. The server uses session_id to look up the session.'
      },
      {
        title: '4) Authorization Check (role/permissions)',
        desc: 'After authentication identifies who you are, authorization still decides what you can do, such as whether only admin can access management APIs.'
      },
      {
        title: '5) Logout',
        desc: 'The server deletes or expires the session and asks the browser to clear the cookie.'
      }
    ]
  },
  passwordHashing: {
    title: '🔐 Password Storage: Hash + Salt + Slow',
    subtitle:
      'See how PBKDF2, used here as a slow-hash demo, resists rainbow tables and brute force. Real projects usually choose bcrypt or Argon2.',
    inputTitle: 'Input',
    passwordLabel: 'Password',
    placeholder: 'Example: 123456',
    iterationsLabel: 'iterations:',
    iterationsHint:
      'Higher values are slower and raise brute-force cost, but also slow down login.',
    enableSalt: 'Enable salt',
    regenSalt: 'Generate new salt',
    outputTitle: 'Output (simulation)',
    emptyHash: '(enter a password)',
    conclusionTitle: 'Conclusion',
    conclusion:
      'Do not store plaintext passwords. Do not use fast unsalted hashes such as MD5, SHA1, or direct SHA256 for passwords. Use a dedicated password hash or KDF with cost and salt.',
    rainbowTitle:
      '🌈 Why Rainbow Tables Fail: Same Password + Different Salt → Different Result',
    rainbowHint:
      'Rainbow tables rely on precomputation. If the same password always produced the same hash, attackers could look it up quickly. Salt makes precomputation explode in cost.'
  },
  evolution: {
    title: '🧭 Authentication Evolution: From Basic to OAuth2',
    subtitle:
      'Click a card to build intuition for which scenario fits which approach.',
    suitable: '✅ Good fit',
    risks: '⚠️ Main risks',
    stages: [
      {
        id: 'basic',
        icon: '🪪',
        name: 'HTTP Basic',
        when: 'Internal tools / debugging',
        desc: 'An early approach where every request carries a username and password or equivalent credential.',
        pros: ['Simplest to implement', 'No additional storage required'],
        cons: [
          'Sends high-value credentials every time',
          'Poor fit for public production systems',
          'Hard to support fine-grained authorization'
        ],
        example: `GET /api/profile
Authorization: Basic <base64(username:password)>`
      },
      {
        id: 'session',
        icon: '🍪',
        name: 'Session + Cookie',
        when: 'Traditional Web / SSR',
        desc: 'The server stores the session, and the browser stores a session_id cookie. Later requests attach the cookie automatically.',
        pros: [
          'Server can actively revoke sessions',
          'Excellent fit for same-origin SSR',
          'Mature operational model'
        ],
        cons: [
          'Server-side state must be shared or scaled',
          'Higher CSRF risk without defenses',
          'Cross-origin flows are more complex'
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
        when: 'APIs / mobile / multi-service',
        desc: 'The server avoids session state by encoding claims into a token, and requests carry Authorization: Bearer.',
        pros: [
          'Stateless and easy to scale',
          'Cross-origin friendly',
          'Common for multi-service systems'
        ],
        cons: [
          'Global revocation needs extra mechanisms',
          'Tokens can become large',
          'Payload is readable, so do not store sensitive data'
        ],
        example: `GET /api/profile
Authorization: Bearer <access_token>`
      },
      {
        id: 'oauth2',
        icon: '🔑',
        name: 'OAuth2 / OIDC',
        when: 'Third-party login / authorization',
        desc: 'Solves third-party authorization and login so the app does not store third-party account passwords.',
        pros: [
          'Good user experience with QR or one-click login',
          'Clearer security boundary',
          'Can extend to OIDC for login'
        ],
        cons: [
          'More complex integration',
          'redirect_uri and state must be handled correctly',
          'Token lifecycle design is critical'
        ],
        example: `GET /authorize?response_type=code&client_id=...&redirect_uri=...&state=...`
      }
    ]
  },
  interactiveLogin: {
    title: '🔐 Authentication Flow Demo',
    subtitle:
      'Simulate login to understand the difference between authentication and authorization.',
    modeLabel: 'Choose auth method:',
    formTitle: 'Login form',
    username: 'Username',
    password: 'Password',
    usernamePlaceholder: 'Enter username',
    passwordPlaceholder: 'Enter password',
    startDemo: 'Start demo',
    hintTitle: '💡 Tip',
    hintText: 'Try username',
    hintPassword: 'password',
    currentStep: 'Current step: {step} / {maxStep}',
    manualHint: '(manual steps avoid auto-advance confusion)',
    prev: 'Previous',
    next: 'Next',
    reset: 'Reset',
    flowTitle: '📊 Data Flow Visualization',
    stageLoginRequest: '1. Client sends login request',
    stageVerify: '2. Server verifies identity',
    queryUser: 'Query user database',
    verifyHash: 'Verify password hash',
    generate: 'Generate',
    stageResponse: '3. Server returns authentication result',
    loginSuccess: '✅ Login successful',
    cookieSetting: '🍪 Cookie setting',
    tokenStorage: '🎫 Token storage',
    stageSubsequent: '4. Later requests carry authentication automatically',
    workingPrinciple: '📖 How {mode} works',
    sessionPrinciple:
      'Session mode: the server creates a Session in memory or Redis and stores user information. The server returns session_id to the client, and later requests carry this ID in a Cookie automatically. The server looks up the Session by ID to identify the user.',
    jwtPrinciple:
      'JWT mode: the server encodes user information into a JWT Token and returns it to the client. The client stores the Token in localStorage and sends it in the Authorization header on later requests. The server verifies the token signature to identify the user without storing session state.',
    replay: '🔄 Replay demo'
  },
  csrf: {
    title: '🛡️ CSRF: Why Can Automatically Sent Cookies Be Dangerous?',
    subtitle:
      'Step through a minimal attack chain, then compare three common defenses: SameSite, CSRF Token, and double-submit cookies.',
    start: 'Start',
    prev: 'Previous',
    next: 'Next',
    reset: 'Reset',
    progress: 'Step {step} / {maxStep} · {title}',
    scenarioTitle: 'Scenario',
    scenario:
      'Assume you are logged in to bank.com and the Cookie already exists. You open a malicious site, evil.com, and it secretly starts a transfer request.',
    cookieTitle: 'Your Cookie, attached automatically by the browser',
    requestTitle: 'Request in this step',
    defenseTitle: 'How to choose defenses, in priority order',
    warning: 'Note',
    warningText:
      'CSRF mainly targets situations where Cookies are sent automatically. If you use Authorization: Bearer and it is not sent automatically, CSRF risk drops significantly, but XSS and token leakage still matter.',
    clickStart: '(click start)',
    cookieOnlyResult:
      '(if the server only checks Cookie, it may return 200 OK and execute the transfer)',
    steps: [
      {
        title: '1) Malicious Site Starts a Cross-Site Request',
        desc: 'evil.com tricks you into clicking a button, loading an image, or submitting a form targeting the bank.com transfer API.'
      },
      {
        title: '2) Browser Automatically Attaches the bank.com Cookie',
        desc: 'Key point: Cookies are attached by domain automatically. evil.com does not need to know your session_id.'
      },
      {
        title: '3) Server May Mistake the Request for Your Own Action',
        desc: 'If bank.com has no CSRF protection, the transfer may be executed.'
      },
      {
        title: '4) CSRF Defense Rejects the Request',
        desc: 'SameSite, CSRF Token, and related defenses can block this kind of cross-site forged request.'
      }
    ],
    defenses: [
      {
        strong: 'SameSite Cookie:',
        text: 'very effective against most cross-site form or image requests when using Lax or Strict.'
      },
      {
        strong: 'CSRF Token:',
        text: 'include a token in forms or headers and verify it on the server. This is robust for complex cases.'
      },
      {
        strong: 'Double-submit Cookie:',
        text: 'send a token in both Cookie and Header, then compare them on the server.'
      }
    ]
  }
}
