export default {
  envVarOverview: {
    title: 'Environment Variable Browser',
    subtitle:
      'Click any variable row to inspect its value and purpose in the terminal',
    headers: ['Variable', 'Example value'],
    hint: '← Click any variable on the left to inspect it',
    infoStrong: 'Core concept:',
    info: 'Environment variables are key=value configuration owned by each process. A program inherits a copy from its parent process at startup. You can inspect them with echo $VARIABLE and set them with export KEY=value.',
    vars: [
      {
        key: 'HOME',
        value: '/Users/alice',
        desc: 'The current user home directory. cd ~ is effectively a jump to $HOME. Many programs store configuration files here.'
      },
      {
        key: 'USER',
        value: 'alice',
        desc: 'The current login user name. Server programs often use it for permission checks or logging.'
      },
      {
        key: 'SHELL',
        value: '/bin/zsh',
        desc: 'The shell executable currently in use. It decides which program interprets commands you type.'
      },
      {
        key: 'PATH',
        value: '/usr/local/bin:/usr/bin:/bin',
        desc: 'The most important environment variable. The shell searches these directories in order when looking for executables. They are separated by colons.'
      },
      {
        key: 'PWD',
        value: '/Users/alice/projects',
        desc: 'The current working directory. It is the folder you are currently standing in.'
      },
      {
        key: 'LANG',
        value: 'en_US.UTF-8',
        desc: 'System language and character encoding. It affects error language, date format, sorting rules, and more.'
      },
      {
        key: 'NODE_ENV',
        value: 'development',
        desc: 'A developer-defined variable. It tells a Node.js app whether it is running in development or production, which can affect logs and error output.'
      },
      {
        key: 'OPENAI_API_KEY',
        value: 'sk-••••••••••••••••',
        desc: 'A developer-defined variable for storing an API key. Keeping secrets in environment variables instead of hard-coding them is an important security practice.'
      }
    ]
  },
  pathSearch: {
    title: 'PATH Search Process',
    subtitle: 'Enter a command name and see how the shell searches directories',
    chooseCommand: 'Choose command:',
    searchingButton: 'Searching...',
    startButton: '▶ Start search',
    resetButton: 'Reset',
    pathLabel: 'Current PATH:',
    searchingStatus: 'Searching for {command}...',
    foundStatus: '✓ Found!',
    notFoundStatus: '✗ Not here',
    idleStatus: 'Waiting',
    successTitle: 'Command found!',
    successDetail:
      'Found the executable at {path}/{command}. The search stops here.',
    errorDetail:
      'Searched all {count} directories in PATH and found nothing. Install the program first or add its directory to PATH.',
    infoStrong: 'Core mechanism:',
    info: 'After the shell receives a command name, it searches directories in PATH order. The first match wins and the search stops. That makes PATH order important: earlier directories have higher priority.',
    presets: [
      { name: 'git', foundAt: 1, desc: 'Git version control tool' },
      { name: 'python3', foundAt: 2, desc: 'Python interpreter' },
      {
        name: 'node',
        foundAt: 0,
        desc: 'Node.js runtime, often installed in /usr/local/bin'
      },
      {
        name: 'ls',
        foundAt: 2,
        desc: 'Command for listing directory contents'
      },
      { name: 'foobar', foundAt: -1, desc: 'A command that does not exist' }
    ]
  },
  envScope: {
    title: 'Three Levels of Environment Variables',
    subtitle:
      'Variables flow one way from outer scopes to inner scopes; child processes inherit a copy from parents',
    inheritedLabel: '▼ Child process inherits the parent environment',
    startChildLabel: '▼ Start a child process, such as node app.js',
    addedBadge: 'Added',
    infoStrong: 'One-way flow:',
    info: 'Variables are inherited downward only. Changing a variable in a child process does not affect its parent. Variables set with export in a terminal also disappear when that terminal closes.',
    layers: {
      system: {
        title: 'System level',
        code: '/etc/environment',
        desc: 'Visible to all users and processes; configured by an administrator'
      },
      user: {
        title: 'User level',
        code: '~/.zshrc',
        desc: 'Affects only the current user and is loaded when the login shell starts'
      },
      process: {
        title: 'Process level (currently running program)',
        desc: 'Inherits variables from upper levels, disappears on exit, and does not modify the parent process'
      }
    }
  },
  envExport: {
    title: 'export Decides Whether Child Processes Can See a Variable',
    subtitle:
      'Toggle the switch and observe whether the child process can read a variable set by the parent',
    toggleLabel: 'Use',
    parentTitle: 'Parent process (Shell)',
    childTitle: 'Child process (bash -c ...)',
    arrowLabel: 'Start child process',
    inherited: 'Variable inherited',
    notInherited: 'Variable not inherited',
    emptyOutput: '(empty output)',
    childCannotMutate: 'A child process cannot modify parent variables',
    withExportStrong: 'With export:',
    withoutExportStrong: 'Without export:',
    withExportInfo:
      'The variable is marked as exportable, so a child process receives a copy when it starts.',
    withoutExportInfo:
      'The variable exists only in the current shell, so the child process reads an empty string.'
  },
  apiKeyDanger: {
    title: 'Hard-coded Keys vs Environment Variables',
    subtitle:
      'The same feature, two implementations, completely different security outcomes',
    badTitle: 'Dangerous: key written in code',
    goodTitle: 'Correct: read from environment variable',
    ruleStrong: 'Golden rule:',
    rule: 'A secret string in code means the secret is already leaked. GitHub Secret Scanner can detect prefixes such as sk- shortly after a push and notify providers to revoke them. Even if you delete the commit, Git history still contains it.',
    badConsequences: [
      'After git push, the key is public on GitHub',
      'Crawlers can find it quickly and generate costs',
      'GitHub Secret Scanner may revoke the key automatically',
      'Deleting the commit is not enough because Git history keeps it'
    ],
    goodConsequences: [
      'The code contains no secret and can be open-sourced safely',
      'Development, testing, and production can use different keys',
      'If a key leaks, regenerate it without changing code',
      'Team members can use separate keys without affecting each other'
    ]
  },
  dotEnv: {
    title: '.env File + Code Reading',
    subtitle:
      'Configuration on the left, code on the right; the variable name is the only link',
    noCommit: 'Do not commit',
    canCommit: 'Can commit',
    emptyValue: '(leave empty)',
    resultTitle: 'Values actually read by the program',
    workflowStrong: 'Workflow:',
    workflow:
      "load_dotenv() / import 'dotenv/config' reads the .env file at startup, injects its key-value pairs into the process environment, and the code reads them with os.environ or process.env. The two sides are connected only by variable names.",
    langs: [
      { id: 'python', label: 'Python' },
      { id: 'node', label: 'Node.js' }
    ],
    envLines: [
      {
        type: 'comment',
        text: '# Local development config, do not commit to Git'
      },
      { key: 'OPENAI_API_KEY', value: 'sk-proj-abc123...' },
      { key: 'DATABASE_URL', value: 'postgresql://localhost/dev' },
      { key: 'PORT', value: '3000' },
      { key: 'NODE_ENV', value: 'development' }
    ],
    exampleLines: [
      { type: 'comment', text: '# Copy to .env and fill in real values' },
      { key: 'OPENAI_API_KEY', value: '' },
      { key: 'DATABASE_URL', value: '' },
      { key: 'PORT', value: '' },
      { key: 'NODE_ENV', value: '' }
    ],
    pythonLines: [
      { type: 'comment', text: '# pip install python-dotenv openai' },
      { type: 'normal', text: 'from dotenv import load_dotenv' },
      { type: 'normal', text: 'import os, openai' },
      { type: 'normal', text: '&nbsp;' },
      {
        type: 'highlight',
        text: 'load_dotenv()  <span class="comment-inline"># Read .env file</span>'
      },
      { type: 'normal', text: '&nbsp;' },
      { type: 'normal', text: 'client = openai.OpenAI(' },
      {
        type: 'highlight',
        text: '  api_key=os.environ.get(<span class="key-ref">"OPENAI_API_KEY"</span>)'
      },
      { type: 'normal', text: ')' },
      { type: 'normal', text: '&nbsp;' },
      {
        type: 'normal',
        text: 'db = os.environ.get(<span class="key-ref">"DATABASE_URL"</span>)'
      },
      {
        type: 'normal',
        text: 'port = int(os.environ.get(<span class="key-ref">"PORT"</span>, 8000))'
      }
    ],
    nodeLines: [
      { type: 'comment', text: '# npm install dotenv openai' },
      {
        type: 'highlight',
        text: 'import \'dotenv/config\'  <span class="comment-inline">// Read .env file</span>'
      },
      { type: 'normal', text: "import OpenAI from 'openai'" },
      { type: 'normal', text: '&nbsp;' },
      { type: 'normal', text: 'const client = new OpenAI({' },
      {
        type: 'highlight',
        text: '  apiKey: process.env.<span class="key-ref">OPENAI_API_KEY</span>'
      },
      { type: 'normal', text: '})' },
      { type: 'normal', text: '&nbsp;' },
      {
        type: 'normal',
        text: 'const db = process.env.<span class="key-ref">DATABASE_URL</span>'
      },
      {
        type: 'normal',
        text: 'const port = process.env.<span class="key-ref">PORT</span> ?? 8000'
      }
    ],
    readResults: [
      { key: 'OPENAI_API_KEY', value: 'sk-proj-abc123...' },
      { key: 'DATABASE_URL', value: 'postgresql://localhost/dev' },
      { key: 'PORT', value: '3000' }
    ]
  },
  serverSecret: {
    title: 'How Production Injects Secrets',
    subtitle:
      '.env is a development convenience; servers should not rely on it',
    principleStrong: 'Principle:',
    principle:
      '.env files are convenient for local development. In production, the runtime platform should inject environment variables, while application code stays unaware of where secrets live or how they arrived.',
    scenarios: [
      { id: 'systemd', icon: '🖥️', label: 'Server (systemd)' },
      { id: 'cloud', icon: '☁️', label: 'Cloud platform (Vercel, etc.)' },
      { id: 'docker', icon: '🐳', label: 'Docker' }
    ],
    scenarioData: {
      systemd: {
        codeTitle: '/etc/systemd/system/myapp.service',
        lines: [
          {
            type: 'comment',
            text: '# Recommended: use a separate secret file with controlled permissions'
          },
          { type: 'normal', text: '[Service]' },
          { type: 'highlight', text: 'EnvironmentFile=/etc/myapp/secrets.env' },
          { type: 'normal', text: 'ExecStart=/usr/bin/node /app/index.js' },
          { type: 'normal', text: '' },
          {
            type: 'comment',
            text: '# Set file permissions so only the owner can read it'
          },
          { type: 'good', text: 'sudo chmod 600 /etc/myapp/secrets.env' },
          {
            type: 'good',
            text: 'sudo chown deploy:deploy /etc/myapp/secrets.env'
          },
          { type: 'normal', text: '' },
          {
            type: 'comment',
            text: '# Reload configuration and restart the service'
          },
          { type: 'normal', text: 'sudo systemctl daemon-reload' },
          { type: 'normal', text: 'sudo systemctl restart myapp' }
        ],
        tips: [
          {
            level: 'safe',
            text: 'After chmod 600, only the deploy user can read the secret file; other accounts cannot access it'
          },
          {
            level: 'safe',
            text: 'Secrets are separated from code, so rotating a key does not require redeploying code'
          },
          {
            level: 'warn',
            text: 'Avoid writing Environment="KEY=val" directly in the systemd file; it requires reloads and leaves plaintext in config'
          }
        ]
      },
      cloud: {
        codeTitle:
          'Cloud platform console (Vercel / Railway / Render / Netlify)',
        lines: [
          {
            type: 'comment',
            text: '# Configure this in the platform UI; no config file needed'
          },
          { type: 'normal', text: '' },
          {
            type: 'comment',
            text: '# The platform injects variables into the runtime environment'
          },
          { type: 'normal', text: '# Code stays the same and reads normally:' },
          { type: 'highlight', text: 'const key = process.env.OPENAI_API_KEY' },
          {
            type: 'highlight',
            text: 'api_key = os.environ.get("OPENAI_API_KEY")'
          },
          { type: 'normal', text: '' },
          {
            type: 'comment',
            text: '# Most platforms support different values by environment:'
          },
          { type: 'normal', text: '# Preview  → OPENAI_API_KEY = sk-test-...' },
          {
            type: 'normal',
            text: '# Production → OPENAI_API_KEY = sk-prod-...'
          }
        ],
        tips: [
          {
            level: 'safe',
            text: 'The platform stores secrets encrypted; even you usually cannot view the original value again'
          },
          {
            level: 'safe',
            text: 'Preview and Production can use separate keys for testing and live traffic'
          },
          {
            level: 'info',
            text: 'Do not commit .env to Git and ask the platform to read it; that puts secrets in the repository'
          }
        ]
      },
      docker: {
        codeTitle: 'docker run / docker-compose.yml',
        lines: [
          {
            type: 'comment',
            text: '# Incorrect: Dockerfile ENV bakes the key into an image layer'
          },
          {
            type: 'bad',
            text: 'ENV OPENAI_API_KEY=sk-xxx  <span class="warn-inline">← anyone can recover it with docker inspect</span>'
          },
          { type: 'normal', text: '' },
          {
            type: 'comment',
            text: '# Correct: inject from the host environment at runtime'
          },
          { type: 'highlight', text: 'docker run \\' },
          {
            type: 'highlight',
            text: '  -e OPENAI_API_KEY="$OPENAI_API_KEY" \\'
          },
          { type: 'highlight', text: '  -e DATABASE_URL="$DATABASE_URL" \\' },
          { type: 'highlight', text: '  myapp:latest' },
          { type: 'normal', text: '' },
          {
            type: 'comment',
            text: '# Or use --env-file, while keeping the file out of Git'
          },
          { type: 'good', text: 'docker run --env-file .env myapp:latest' }
        ],
        tips: [
          {
            level: 'safe',
            text: 'The image itself contains no secrets and can be pushed safely to a public registry'
          },
          {
            level: 'safe',
            text: '--env-file reads values at runtime; the file does not need to enter the image'
          },
          {
            level: 'warn',
            text: 'docker history can reveal image layer contents; Dockerfile ENV leaks forever'
          }
        ]
      }
    }
  },
  packageInstall: {
    title: 'Full npm install Simulation',
    subtitle: 'Watch a package travel from the command line to disk',
    installing: 'Installing...',
    run: 'Run',
    reset: 'Reset',
    logTitle: '📟 Install log',
    fileTreeTitle: '📁 File tree changes',
    packageJsonTitle: '📄 package.json',
    waiting: 'Waiting to run...',
    infoStrong: 'Core mechanism:',
    info: 'Installation first resolves the dependency tree, downloads from the registry, extracts packages into node_modules, and writes a lockfile. The lockfile ensures everyone on the team installs the exact same versions.',
    phases: [
      {
        id: 'resolve',
        name: 'Resolve deps',
        desc: 'Analyze required packages',
        status: 'pending'
      },
      {
        id: 'fetch',
        name: 'Fetch & extract',
        desc: 'Download tarballs from registry',
        status: 'pending'
      },
      {
        id: 'link',
        name: 'Link modules',
        desc: 'Write node_modules/',
        status: 'pending'
      },
      {
        id: 'lockfile',
        name: 'Write lockfile',
        desc: 'Pin exact versions',
        status: 'pending'
      }
    ],
    logs: {
      resolving: 'Resolving dependencies for {name}@{version}...',
      foundDep: '  Found dependency: {name}@{version}',
      total: 'Need to install {count} package(s)',
      download: '↓ Download {name}-{version}.tgz',
      extract: '📂 Extract → node_modules/{name}/',
      writeLock: '✏️ Write package-lock.json',
      done: '✅ Done. Added {name}@{version}'
    }
  },
  dependencyTree: {
    title: 'Dependency Tree & Version Semantics',
    subtitle: 'Understand semantic versions and dependency graphs',
    versionSuffix: 'version',
    exampleLabel: 'Example:',
    hoverHint: '← Hover over a number to inspect its meaning',
    rangesTitle: 'Common version range symbols',
    accepted: '✓ Accept',
    rejected: '✗ Reject',
    rootBadge: 'Your project',
    conflictBadge: '⚠ Conflict',
    packageJsonTitle: '📄 package.json (declared intent)',
    packageJsonNote: 'Uses range symbols to declare acceptable versions',
    lockfileTitle: '🔒 package-lock.json (fixed reality)',
    lockfileNote: 'Pins exact installed versions and is shared by the team',
    goldenStrong: 'Golden rule:',
    golden: {
      semver:
        'Semantic versioning = MAJOR.MINOR.PATCH. A MAJOR change means breaking changes, so upgrade carefully.',
      tree: 'Dependencies of dependencies are still dependencies. One package can indirectly bring in dozens of packages; that is the dependency tree.',
      lockfile:
        'Commit the lockfile to Git so every teammate and every CI run installs the exact same versions.'
    },
    tabs: [
      { id: 'semver', label: 'SemVer' },
      { id: 'tree', label: 'Dependency tree' },
      { id: 'lockfile', label: 'Lockfile' }
    ],
    versionParts: [
      {
        id: 'major',
        num: '2',
        label: 'MAJOR',
        color: '#ef4444',
        desc: 'Major version. It increases for breaking API changes and is often not backward compatible. Read the changelog before upgrading.',
        example: 'React 16 → 17 → 18, each with meaningful changes'
      },
      {
        id: 'minor',
        num: '8',
        label: 'MINOR',
        color: '#f59e0b',
        desc: 'Minor version. It increases for backward-compatible new features and is usually safe to upgrade.',
        example: 'axios 1.5.0 → 1.6.0 adds features without breaking old usage'
      },
      {
        id: 'patch',
        num: '3',
        label: 'PATCH',
        color: '#22c55e',
        desc: 'Patch version. It only fixes bugs and remains backward compatible, so upgrading promptly is recommended.',
        example: 'lodash 4.17.20 → 4.17.21 fixes a security issue'
      }
    ],
    ranges: [
      {
        sym: '^2.8.3',
        name: 'Compatible range (recommended)',
        desc: 'Allow MINOR and PATCH upgrades, lock MAJOR',
        examples: [
          { v: '2.8.3', ok: true },
          { v: '2.9.0', ok: true },
          { v: '3.0.0', ok: false },
          { v: '2.8.2', ok: false }
        ]
      },
      {
        sym: '~2.8.3',
        name: 'Approximate range (conservative)',
        desc: 'Allow only PATCH upgrades, lock MAJOR and MINOR',
        examples: [
          { v: '2.8.3', ok: true },
          { v: '2.8.9', ok: true },
          { v: '2.9.0', ok: false },
          { v: '3.0.0', ok: false }
        ]
      },
      {
        sym: '2.8.3',
        name: 'Exact version (strict)',
        desc: 'Accept only this one version',
        examples: [
          { v: '2.8.3', ok: true },
          { v: '2.8.4', ok: false },
          { v: '2.9.0', ok: false },
          { v: '2.8.2', ok: false }
        ]
      },
      {
        sym: '*',
        name: 'Any version (dangerous)',
        desc: 'Accept any version, including major upgrades; avoid in production',
        examples: [
          { v: '1.0.0', ok: true },
          { v: '2.8.3', ok: true },
          { v: '99.0.0', ok: true },
          { v: '0.0.1', ok: true }
        ]
      }
    ],
    scenarios: [
      { id: 'normal', label: 'Normal deps' },
      { id: 'shared', label: 'Shared dep' },
      { id: 'conflict', label: 'Version conflict' }
    ],
    allScenarios: {
      normal: {
        root: 'my-app',
        type: 'success',
        icon: '✅',
        description:
          'Normal case: the project directly depends on axios and lodash. Each has a small number of sub-dependencies and no conflicts.',
        direct: [
          {
            name: 'axios',
            version: '^1.6.8',
            children: [
              { name: 'follow-redirects', version: '^1.15.6' },
              { name: 'form-data', version: '^4.0.0' }
            ]
          },
          { name: 'lodash', version: '^4.17.21', children: [] }
        ]
      },
      shared: {
        root: 'my-app',
        type: 'info',
        icon: '📌',
        description:
          'Shared dependency: react-dom and react-router both depend on react. npm can reuse the same package instead of installing duplicates.',
        direct: [
          {
            name: 'react-dom',
            version: '^18.2.0',
            children: [{ name: 'react', version: '^18.2.0' }]
          },
          {
            name: 'react-router',
            version: '^6.22.0',
            children: [{ name: 'react', version: '^18.2.0' }]
          }
        ]
      },
      conflict: {
        root: 'my-app',
        type: 'warning',
        icon: '⚠️',
        description:
          'Version conflict: pkg-a needs lodash@^3.0.0 while pkg-b needs lodash@^4.0.0. Different MAJOR versions cannot be shared, so npm installs both and bundle size grows.',
        direct: [
          {
            name: 'pkg-a',
            version: '^1.0.0',
            children: [{ name: 'lodash', version: '^3.10.1', conflict: true }]
          },
          {
            name: 'pkg-b',
            version: '^2.0.0',
            children: [{ name: 'lodash', version: '^4.17.21', conflict: true }]
          }
        ]
      }
    },
    lockfileRules: [
      {
        icon: '📌',
        title: 'Commit it to Git',
        desc: 'The lockfile is a team contract that makes every member and CI/CD install the exact same versions.'
      },
      {
        icon: '🚫',
        title: 'Do not edit manually',
        desc: 'Package managers maintain lockfiles automatically. Manual edits easily introduce errors.'
      },
      {
        icon: '🔄',
        title: 'npm install updates it',
        desc: 'After every install or update, the lockfile is updated to the latest resolved result.'
      },
      {
        icon: '🧪',
        title: 'npm ci follows it strictly',
        desc: 'Use npm ci instead of npm install in CI to reproduce the exact versions recorded in the lockfile.'
      }
    ]
  },
  sshAuth: {
    title: 'SSH Key Authentication: Your Digital ID',
    subtitle:
      'Symmetric vs asymmetric encryption · key pair generation · authentication flow',
    passwordTitle: 'Password login',
    keyTitle: 'Key login',
    passwordVerdict:
      'The password travels over the network and may be intercepted',
    keyVerdict: 'The private key never leaves your computer',
    generating: 'Generating...',
    generate: 'Generate key pair',
    privateKey: 'Private Key',
    publicKey: 'Public Key',
    privateRule: 'Never share it · keep it local',
    publicRule: 'Safe to share · place it on servers',
    relation: 'Mathematical link',
    analogyStrong: 'Analogy:',
    analogy:
      'Public key = lock that anyone can install · private key = key that only you hold · only the matching key can open what the lock protects',
    startAuth: 'Start auth',
    restart: 'Replay',
    authenticating: 'Authenticating...',
    clientName: 'Your computer',
    clientHas: 'Has: private key',
    serverName: 'Remote server',
    serverHas: 'Has: public key',
    configTitle: '~/.ssh/config shortcut',
    configResult: 'After config:',
    configSuffix: 'connects in one command',
    coreStrong: 'Core idea:',
    core: {
      compare:
        'SSH key login is safer than passwords because the private key never travels over the network and cannot be stolen by a man-in-the-middle.',
      keygen:
        'One ssh-keygen command creates a pair: keep the private key yourself and put the public key on the target server or platform.',
      auth: 'Authentication uses a challenge-response flow: the server asks a question, your private key signs the answer, and the public key verifies it. The private key never leaves your machine.',
      uses: 'SSH keys are used not only for server login, but also as the standard identity mechanism for developer tools such as GitHub and GitLab.'
    },
    scenarios: [
      { id: 'compare', label: 'Password vs key' },
      { id: 'keygen', label: 'Generate keys' },
      { id: 'auth', label: 'Auth flow' },
      { id: 'uses', label: 'Common uses' }
    ],
    passwordFlow: [
      'Enter username and password',
      'Password is sent to the server over the network',
      'Server checks whether the password is correct',
      'You must enter the password every time'
    ],
    keyFlow: [
      'Put the public key on the server in advance',
      'Send identity when connecting, without sending the private key',
      'Server asks a mathematical challenge with the public key',
      'Your private key answers locally and only sends the answer'
    ],
    waitingPrivate:
      '-----BEGIN OPENSSH PRIVATE KEY-----\n(waiting for generation...)\n-----END OPENSSH PRIVATE KEY-----',
    waitingPublic: '(waiting for generation...)',
    generatedPrivate:
      '-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAA...\n(2048-bit key, never share)\n-----END OPENSSH PRIVATE KEY-----',
    generatedPublic:
      'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA\nIGx...kF your@email.com',
    authMessages: [
      {
        label: '① Request connection',
        detail: '"I want to log in with a key"'
      },
      {
        label: '② Send random challenge',
        detail: '"Prove you have the private key: sign this random data"'
      },
      {
        label: '③ Return signature',
        detail:
          '"Signature made by the private key, without sending the key itself"'
      },
      {
        label: '④ Verify with public key',
        detail: '"Use the stored public key to verify the signature → match!"'
      },
      {
        label: '⑤ Auth success',
        detail: '"Welcome. The private key never left your computer."'
      }
    ],
    commonUses: [
      {
        icon: '🖥️',
        name: 'Remote server',
        command: 'ssh user@server',
        desc: 'Passwordless login to Linux/Mac servers'
      },
      {
        icon: '🐙',
        name: 'GitHub',
        command: 'git push origin main',
        desc: 'Push code over the SSH protocol'
      },
      {
        icon: '🦊',
        name: 'GitLab',
        command: 'git clone git@gitlab.com:...',
        desc: 'Clone private repositories'
      },
      {
        icon: '📦',
        name: 'SCP file copy',
        command: 'scp file.txt user@server:~/',
        desc: 'Securely copy files to a remote machine'
      },
      {
        icon: '🚇',
        name: 'SSH tunnel',
        command: 'ssh -L 8080:localhost:3000 server',
        desc: 'Map a remote port to your local machine'
      },
      {
        icon: '🐳',
        name: 'Deploy service',
        command: 'ssh deploy@prod "docker pull..."',
        desc: 'Run deployment commands remotely'
      }
    ]
  },
  regex: {
    title: 'Regular Expressions: Search Engine for Text',
    subtitle: 'Pattern matching · capture groups · live preview',
    patternLabel: 'Regular expression',
    patternPlaceholder: 'Enter regex...',
    textLabel: 'Test text',
    textPlaceholder: 'Enter text to match...',
    resultsTitle: 'Match results',
    matchCount: '{count} match(es)',
    presetLabel: 'Try presets:',
    pass: '✓ Match',
    fail: '✗ No match',
    visualTitle: 'Regex anatomy: breaking down an email pattern',
    flowTitle: 'How a regex engine works',
    coreStrong: 'Core idea:',
    core: {
      playground:
        'A regular expression is a small language for describing text patterns with special symbols. It appears everywhere in search, replacement, and validation.',
      cheatsheet:
        'A few core symbols (. * + ? \\d \\w [] ()) cover most everyday use cases. Click any symbol to try it directly.',
      patterns:
        'You do not need to write every regex from scratch. Common cases such as email, phone numbers, and URLs have mature reusable patterns.',
      visual:
        'A regex engine scans from left to right. Quantifiers match greedily, then backtrack when a later match fails.'
    },
    modes: [
      { id: 'playground', label: 'Live playground' },
      { id: 'cheatsheet', label: 'Cheat sheet' },
      { id: 'patterns', label: 'Common patterns' },
      { id: 'visual', label: 'Visual breakdown' }
    ],
    defaultText:
      'My phone is 13812345678, landline is 010-12345678, and email is test@example.com',
    presets: [
      {
        name: 'Find numbers',
        pattern: '\\d+',
        flags: 'g',
        text: 'Price is 99, discount is 20, total is 79'
      },
      {
        name: 'Find email',
        pattern: '[\\w.+-]+@[\\w-]+\\.[\\w.]+',
        flags: 'g',
        text: 'admin@test.com and user@example.org are valid emails'
      },
      {
        name: 'Find phone',
        pattern: '1[3-9]\\d{9}',
        flags: 'g',
        text: 'Contact: 13812345678 or 15099887766'
      },
      {
        name: 'Find URL',
        pattern: 'https?://[^\\s]+',
        flags: 'g',
        text: 'Visit https://github.com or http://example.com/path'
      },
      {
        name: 'Find Chinese',
        pattern: '[\\u4e00-\\u9fa5]+',
        flags: 'g',
        text: 'Hello世界, 你好World!'
      }
    ],
    cheatsheet: [
      {
        category: 'Character classes',
        items: [
          {
            pattern: '.',
            desc: 'Any character except newline',
            example: 'a.c → abc, a1c'
          },
          { pattern: '\\d', desc: 'Digit [0-9]', example: '\\d → 3, 7' },
          {
            pattern: '\\w',
            desc: 'Letter, digit, or underscore',
            example: '\\w → a, 5, _'
          },
          {
            pattern: '\\s',
            desc: 'Whitespace character',
            example: 'space, tab, newline'
          },
          {
            pattern: '[abc]',
            desc: 'Character set',
            example: '[aeiou] → vowels'
          },
          {
            pattern: '[^abc]',
            desc: 'Negated set',
            example: '[^0-9] → non-digit'
          }
        ]
      },
      {
        category: 'Quantifiers',
        items: [
          { pattern: '*', desc: '0 or more', example: 'ab* → a, ab, abb' },
          { pattern: '+', desc: '1 or more', example: 'ab+ → ab, abb' },
          { pattern: '?', desc: '0 or 1', example: 'colou?r → color, colour' },
          { pattern: '{n}', desc: 'Exactly n times', example: '\\d{4} → 2024' },
          {
            pattern: '{n,m}',
            desc: 'n to m times',
            example: '\\d{2,4} → 12, 123'
          }
        ]
      },
      {
        category: 'Positions',
        items: [
          {
            pattern: '^',
            desc: 'Start of line',
            example: '^Hello → starts with Hello'
          },
          {
            pattern: '$',
            desc: 'End of line',
            example: 'end$ → ends with end'
          },
          {
            pattern: '\\b',
            desc: 'Word boundary',
            example: '\\bcat\\b → cat, not catch'
          }
        ]
      },
      {
        category: 'Groups and alternation',
        items: [
          {
            pattern: '(abc)',
            desc: 'Capture group',
            example: '(\\d+)-(\\d+) → capture separately'
          },
          {
            pattern: 'a|b',
            desc: 'Either/or',
            example: 'cat|dog → cat or dog'
          },
          {
            pattern: '(?:abc)',
            desc: 'Non-capturing group',
            example: '(?:ab)+ → abab'
          }
        ]
      }
    ],
    commonPatterns: [
      {
        name: 'Email',
        regex: '^[\\w.+-]+@[\\w-]+\\.[\\w.]+$',
        examples: [
          { text: 'user@example.com', match: true },
          { text: 'a.b+c@test.org', match: true },
          { text: 'invalid@', match: false },
          { text: '@no-user.com', match: false }
        ]
      },
      {
        name: 'Phone number (China)',
        regex: '^1[3-9]\\d{9}$',
        examples: [
          { text: '13812345678', match: true },
          { text: '15099887766', match: true },
          { text: '12345678901', match: false },
          { text: '1381234567', match: false }
        ]
      },
      {
        name: 'URL',
        regex: '^https?://[^\\s]+$',
        examples: [
          { text: 'https://github.com', match: true },
          { text: 'http://example.com/path?q=1', match: true },
          { text: 'ftp://not-http.com', match: false },
          { text: 'just-text', match: false }
        ]
      },
      {
        name: 'IPv4 address',
        regex: '^(\\d{1,3}\\.){3}\\d{1,3}$',
        examples: [
          { text: '192.168.1.1', match: true },
          { text: '10.0.0.255', match: true },
          { text: '999.999.999.999', match: true },
          { text: '1.2.3', match: false }
        ]
      },
      {
        name: 'Date (YYYY-MM-DD)',
        regex: '^\\d{4}-\\d{2}-\\d{2}$',
        examples: [
          { text: '2024-01-15', match: true },
          { text: '2023-12-31', match: true },
          { text: '24-1-5', match: false },
          { text: '2024/01/15', match: false }
        ]
      },
      {
        name: 'Strong password',
        regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$',
        examples: [
          { text: 'Passw0rd', match: true },
          { text: 'MyP@ss123', match: true },
          { text: 'password', match: false },
          { text: 'SHORT1a', match: false }
        ]
      }
    ],
    regexParts: [
      { text: '[', type: 'bracket', desc: 'Character set starts' },
      { text: '\\w', type: 'char-class', desc: 'Letter, digit, or underscore' },
      {
        text: '.+-',
        type: 'literal',
        desc: 'Dot, plus, and hyphen as literals'
      },
      { text: ']', type: 'bracket', desc: 'Character set ends' },
      { text: '+', type: 'quantifier', desc: 'One or more, greedy' },
      { text: '@', type: 'literal', desc: 'Literal @ symbol' },
      { text: '[', type: 'bracket', desc: 'Character set starts' },
      { text: '\\w', type: 'char-class', desc: 'Letter, digit, or underscore' },
      { text: '-', type: 'literal', desc: 'Literal hyphen' },
      { text: ']', type: 'bracket', desc: 'Character set ends' },
      { text: '+', type: 'quantifier', desc: 'One or more' },
      { text: '\\.', type: 'escape', desc: 'Escaped dot, matching literal .' },
      { text: '[', type: 'bracket', desc: 'Character set starts' },
      { text: '\\w', type: 'char-class', desc: 'Letter, digit, or underscore' },
      {
        text: '.',
        type: 'literal',
        desc: 'Dot is literal inside a character set'
      },
      { text: ']', type: 'bracket', desc: 'Character set ends' },
      { text: '+', type: 'quantifier', desc: 'One or more' }
    ],
    legend: [
      { type: 'char-class', label: 'Character class' },
      { type: 'quantifier', label: 'Quantifier' },
      { type: 'literal', label: 'Literal' },
      { type: 'bracket', label: 'Set boundary' },
      { type: 'escape', label: 'Escape' }
    ],
    engineSteps: [
      {
        action: 'Scan left to right',
        detail:
          'The engine starts at the first character and tries to match step by step'
      },
      {
        action: 'Greedy match',
        detail:
          'When it sees quantifiers such as * or +, it matches as many characters as possible'
      },
      {
        action: 'Backtrack',
        detail:
          'If the greedy match fails later, it steps back and tries fewer characters'
      },
      {
        action: 'Capture groups',
        detail:
          'When it sees (), it records the matched substring for later reference'
      },
      {
        action: 'Return result',
        detail:
          'After all matching is complete, it returns matches and captured groups'
      }
    ]
  },
  packageManager: {
    title: 'Package Manager Ecosystem Map',
    subtitle:
      'Choose a language ecosystem and explore its package management tools',
    installCommand: 'Install commands',
    configFiles: 'Config files',
    features: 'Core features',
    placeholder: '← Click a card above to view details',
    infoStrong: 'Core idea:',
    info: 'A package manager is like an app store for code. It downloads, installs, and manages libraries written by others while automatically handling version compatibility.',
    ecosystems: [
      { id: 'js', icon: '🟨', name: 'JavaScript' },
      { id: 'python', icon: '🐍', name: 'Python' },
      { id: 'rust', icon: '🦀', name: 'Rust' },
      { id: 'go', icon: '🐹', name: 'Go' },
      { id: 'mac', icon: '🍎', name: 'macOS/Linux' },
      { id: 'windows', icon: '🪟', name: 'Windows' }
    ],
    allManagers: {
      js: [
        {
          id: 'npm',
          name: 'npm',
          fullName: 'Node Package Manager',
          tagline: 'Most widely used and bundled with Node.js',
          color: '#cc3534',
          commands: [
            { op: 'Install dependency', cmd: 'npm install lodash' },
            { op: 'Install dev dependency', cmd: 'npm install -D typescript' },
            { op: 'Run script', cmd: 'npm run build' },
            { op: 'List installed', cmd: 'npm list --depth=0' }
          ],
          files: [
            {
              name: 'package.json',
              desc: 'Project manifest that records dependencies and scripts'
            },
            {
              name: 'package-lock.json',
              desc: 'Pins exact versions for consistent environments'
            },
            {
              name: 'node_modules/',
              desc: 'Directory where installed packages live'
            }
          ],
          features: [
            'Built into Node.js',
            'Largest ecosystem, 2M+ packages',
            'Supports workspaces',
            'Run directly with npx'
          ]
        },
        {
          id: 'yarn',
          name: 'Yarn',
          fullName: 'Yet Another Resource Negotiator',
          tagline:
            "Fast parallel downloads; Plug'n'Play can avoid node_modules",
          color: '#2c8ebb',
          commands: [
            { op: 'Install dependency', cmd: 'yarn add lodash' },
            { op: 'Install dev dependency', cmd: 'yarn add -D typescript' },
            { op: 'Run script', cmd: 'yarn build' },
            { op: 'List installed', cmd: 'yarn list --depth=0' }
          ],
          files: [
            {
              name: 'package.json',
              desc: 'Project manifest compatible with npm'
            },
            { name: 'yarn.lock', desc: 'Yarn lockfile with a readable format' },
            { name: '.yarnrc.yml', desc: 'Yarn Berry configuration file' }
          ],
          features: [
            'Faster parallel install',
            "Plug'n'Play without node_modules",
            'Native workspace support',
            'Offline cache'
          ]
        },
        {
          id: 'pnpm',
          name: 'pnpm',
          fullName: 'Performant npm',
          tagline: 'Shared hard links save disk space and make installs fast',
          color: '#f9ad00',
          commands: [
            { op: 'Install dependency', cmd: 'pnpm add lodash' },
            { op: 'Install dev dependency', cmd: 'pnpm add -D typescript' },
            { op: 'Run script', cmd: 'pnpm run build' },
            { op: 'List installed', cmd: 'pnpm list --depth=0' }
          ],
          files: [
            {
              name: 'package.json',
              desc: 'Project manifest compatible with npm'
            },
            { name: 'pnpm-lock.yaml', desc: 'pnpm-specific lockfile' },
            {
              name: '.pnpm-store/',
              desc: 'Global content-addressed store shared across projects'
            }
          ],
          features: [
            'Best disk usage',
            'Very fast installs',
            'Strict isolation prevents phantom deps',
            'Monorepo friendly'
          ]
        }
      ],
      python: [
        {
          id: 'pip',
          name: 'pip',
          fullName: 'Pip Installs Packages',
          tagline: 'Official Python standard, simple and direct',
          color: '#3776ab',
          commands: [
            { op: 'Install package', cmd: 'pip install requests' },
            {
              op: 'Install exact version',
              cmd: 'pip install requests==2.28.0'
            },
            { op: 'Export deps', cmd: 'pip freeze > requirements.txt' },
            { op: 'Install in batch', cmd: 'pip install -r requirements.txt' }
          ],
          files: [
            {
              name: 'requirements.txt',
              desc: 'Dependency list, one package and version per line'
            },
            {
              name: 'setup.py / pyproject.toml',
              desc: 'Project metadata and packaging configuration'
            }
          ],
          features: [
            'Built into Python',
            'Most widely used',
            'Works with venv isolation',
            'Simple and direct'
          ]
        },
        {
          id: 'conda',
          name: 'conda',
          fullName: 'Conda Package Manager',
          tagline:
            'Great for scientific computing and Python version management',
          color: '#44a833',
          commands: [
            {
              op: 'Create environment',
              cmd: 'conda create -n myenv python=3.11'
            },
            { op: 'Activate environment', cmd: 'conda activate myenv' },
            { op: 'Install package', cmd: 'conda install numpy' },
            { op: 'Export environment', cmd: 'conda env export > env.yml' }
          ],
          files: [
            {
              name: 'environment.yml',
              desc: 'Full environment config including Python version'
            },
            { name: '.condarc', desc: 'Global conda configuration file' }
          ],
          features: [
            'Manages Python versions',
            'Supports non-Python packages such as CUDA',
            'Preferred for scientific computing',
            'Reproducible cross-platform environments'
          ]
        },
        {
          id: 'uv',
          name: 'uv',
          fullName: 'Ultra-fast Python Package Manager',
          tagline: 'Written in Rust and much faster than pip',
          color: '#7c3aed',
          commands: [
            { op: 'Install package', cmd: 'uv pip install requests' },
            { op: 'Create virtual env', cmd: 'uv venv' },
            { op: 'Sync deps', cmd: 'uv pip sync requirements.txt' },
            { op: 'Run script', cmd: 'uv run python script.py' }
          ],
          files: [
            {
              name: 'requirements.txt',
              desc: 'Dependency file fully compatible with pip'
            },
            {
              name: 'pyproject.toml',
              desc: 'Modern Python project configuration standard'
            }
          ],
          features: [
            'Very fast Rust implementation',
            'Fully compatible with pip',
            'Built-in virtual env management',
            'Modern Python tooling'
          ]
        }
      ],
      rust: [
        {
          id: 'cargo',
          name: 'Cargo',
          fullName: "Rust's Package Manager & Build System",
          tagline: 'Official Rust tool for build, test, and publish workflows',
          color: '#dea584',
          commands: [
            { op: 'Add dependency', cmd: 'cargo add serde' },
            { op: 'Build project', cmd: 'cargo build --release' },
            { op: 'Run project', cmd: 'cargo run' },
            { op: 'Run tests', cmd: 'cargo test' }
          ],
          files: [
            {
              name: 'Cargo.toml',
              desc: 'Project manifest declaring dependencies and metadata'
            },
            {
              name: 'Cargo.lock',
              desc: 'Pins exact versions; applications should commit it'
            }
          ],
          features: [
            'Official standard',
            'Built-in build system',
            'Package = crate',
            'crates.io ecosystem'
          ]
        }
      ],
      go: [
        {
          id: 'gomod',
          name: 'Go Modules',
          fullName: 'Official Go module system (go mod)',
          tagline: 'Built into the Go toolchain with no extra install',
          color: '#00acd7',
          commands: [
            {
              op: 'Initialize module',
              cmd: 'go mod init github.com/user/project'
            },
            { op: 'Add dependency', cmd: 'go get github.com/gin-gonic/gin' },
            { op: 'Tidy deps', cmd: 'go mod tidy' },
            { op: 'Download locally', cmd: 'go mod download' }
          ],
          files: [
            {
              name: 'go.mod',
              desc: 'Module manifest with dependency paths and versions'
            },
            {
              name: 'go.sum',
              desc: 'Checksum file that prevents dependency tampering'
            }
          ],
          features: [
            'Built into Go toolchain',
            'Path is package name',
            'Automatic integrity checks',
            'pkg.go.dev ecosystem'
          ]
        }
      ],
      mac: [
        {
          id: 'brew',
          name: 'Homebrew',
          fullName: 'The Missing Package Manager for macOS',
          tagline: 'Essential for macOS/Linux and popular for developer tools',
          color: '#fbb040',
          commands: [
            { op: 'Install software', cmd: 'brew install git' },
            { op: 'Upgrade all', cmd: 'brew upgrade' },
            { op: 'Search package', cmd: 'brew search node' },
            { op: 'List installed', cmd: 'brew list' }
          ],
          files: [
            {
              name: 'Brewfile',
              desc: 'Batch install manifest that can be version controlled'
            }
          ],
          features: [
            'Works on macOS/Linux',
            'Manages system-level tools',
            'Cask installs GUI apps',
            'Community driven'
          ]
        },
        {
          id: 'apt',
          name: 'apt',
          fullName: 'Advanced Package Tool',
          tagline: 'System package manager for Ubuntu and Debian',
          color: '#e95420',
          commands: [
            { op: 'Update index', cmd: 'sudo apt update' },
            { op: 'Install software', cmd: 'sudo apt install nginx' },
            { op: 'Upgrade system', cmd: 'sudo apt upgrade' },
            { op: 'Remove software', cmd: 'sudo apt remove nginx' }
          ],
          files: [
            {
              name: '/etc/apt/sources.list',
              desc: 'Package source configuration file'
            }
          ],
          features: [
            'Official for Ubuntu/Debian',
            'System-level permissions',
            'Automatic dependency resolution',
            'Essential for server operations'
          ]
        },
        {
          id: 'dnf',
          name: 'dnf / yum',
          fullName: 'Dandified YUM (Fedora / RHEL / CentOS)',
          tagline: 'System package manager for Red Hat style Linux',
          color: '#e00',
          commands: [
            { op: 'Install software', cmd: 'sudo dnf install git' },
            { op: 'Upgrade system', cmd: 'sudo dnf upgrade' },
            { op: 'Search package', cmd: 'dnf search nginx' },
            { op: 'Remove software', cmd: 'sudo dnf remove nginx' }
          ],
          files: [
            { name: '/etc/dnf/dnf.conf', desc: 'Global dnf configuration file' }
          ],
          features: [
            'Official for Fedora/RHEL/CentOS',
            'Supports module streams',
            'DNF5 is much faster',
            'Common in enterprise Linux'
          ]
        }
      ],
      windows: [
        {
          id: 'winget',
          name: 'winget',
          fullName: 'Windows Package Manager',
          tagline: 'Official Microsoft tool built into Windows 10/11',
          color: '#0078d4',
          commands: [
            { op: 'Install software', cmd: 'winget install Git.Git' },
            { op: 'Upgrade all', cmd: 'winget upgrade --all' },
            { op: 'Search package', cmd: 'winget search nodejs' },
            { op: 'Remove software', cmd: 'winget uninstall Git.Git' }
          ],
          files: [
            {
              name: 'winget-packages.json',
              desc: 'Exported software manifest for batch restore'
            }
          ],
          features: [
            'Built into Windows 10/11',
            'Microsoft Store integration',
            'Package signature verification',
            'Official ongoing updates'
          ]
        },
        {
          id: 'choco',
          name: 'Chocolatey',
          fullName: 'Chocolatey Package Manager',
          tagline: 'The most mature third-party package manager for Windows',
          color: '#4a154b',
          commands: [
            { op: 'Install software', cmd: 'choco install git' },
            { op: 'Upgrade all', cmd: 'choco upgrade all' },
            { op: 'Search package', cmd: 'choco search nodejs' },
            { op: 'Remove software', cmd: 'choco uninstall git' }
          ],
          files: [
            {
              name: 'packages.config',
              desc: 'XML software manifest for batch installs'
            }
          ],
          features: [
            'Mature ecosystem, 10k+ packages',
            'Commercial enterprise support',
            'PowerShell integration',
            'Supports unattended installs'
          ]
        },
        {
          id: 'scoop',
          name: 'Scoop',
          fullName: 'Scoop — A command-line installer for Windows',
          tagline: 'Developer-focused and does not require admin rights',
          color: '#1a73e8',
          commands: [
            { op: 'Install software', cmd: 'scoop install git' },
            { op: 'Upgrade all', cmd: 'scoop update *' },
            { op: 'Search package', cmd: 'scoop search nodejs' },
            { op: 'Remove software', cmd: 'scoop uninstall git' }
          ],
          files: [
            {
              name: 'Scoopfile / apps.json',
              desc: 'Application manifest for environment restoration'
            }
          ],
          features: [
            'No admin rights required',
            'Installs into user directory',
            'Switch between versions',
            'Good for developer tools'
          ]
        }
      ]
    }
  }
}
