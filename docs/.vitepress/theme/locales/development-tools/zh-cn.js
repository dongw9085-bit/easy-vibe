export default {
  envVarOverview: {
    title: '环境变量浏览器',
    subtitle: '点击任意变量行，在终端中查看它的值和作用',
    headers: ['变量名', '示例值'],
    hint: '← 点击左侧任意变量行来查看它',
    infoStrong: '核心概念：',
    info: '环境变量是每个进程持有的一组「键=值」配置。程序启动时自动从父进程继承一份，可随时通过 echo $变量名 查看，用 export KEY=value 设置。',
    vars: [
      {
        key: 'HOME',
        value: '/Users/alice',
        desc: '当前用户的主目录路径。cd ~ 本质上就是跳到 $HOME。很多程序把配置文件存在这里。'
      },
      {
        key: 'USER',
        value: 'alice',
        desc: '当前登录的用户名。服务器程序常用它做权限判断或日志记录。'
      },
      {
        key: 'SHELL',
        value: '/bin/zsh',
        desc: '当前使用的 Shell 程序路径。决定了你输入命令后由哪个程序来解释执行。'
      },
      {
        key: 'PATH',
        value: '/usr/local/bin:/usr/bin:/bin',
        desc: '最重要的环境变量！Shell 查找可执行文件时，依次在这些目录里搜索，用冒号分隔。见下方演示。'
      },
      {
        key: 'PWD',
        value: '/Users/alice/projects',
        desc: '当前工作目录（Print Working Directory）。就是你现在"站在"的那个目录。'
      },
      {
        key: 'LANG',
        value: 'zh_CN.UTF-8',
        desc: '系统语言和字符编码。影响程序的错误提示语言、日期格式、排序规则等。'
      },
      {
        key: 'NODE_ENV',
        value: 'development',
        desc: '开发者自定义变量。告诉 Node.js 应用当前是开发（development）还是生产（production）环境，影响日志、错误显示等行为。'
      },
      {
        key: 'OPENAI_API_KEY',
        value: 'sk-••••••••••••••••',
        desc: '开发者自定义变量，存储 API 密钥。把密钥放在环境变量里（而非写死在代码里）是重要的安全最佳实践。'
      }
    ]
  },
  pathSearch: {
    title: 'PATH 搜索过程',
    subtitle: '输入命令名，看 Shell 是如何逐目录查找的',
    chooseCommand: '选择命令：',
    searchingButton: '搜索中...',
    startButton: '▶ 开始搜索',
    resetButton: '重置',
    pathLabel: '当前 PATH：',
    searchingStatus: '查找 {command}...',
    foundStatus: '✓ 找到了！',
    notFoundStatus: '✗ 没有',
    idleStatus: '待查找',
    successTitle: '命令找到了！',
    successDetail: '在 {path}/{command} 找到可执行文件，搜索停止。',
    errorDetail:
      '已搜索 PATH 中所有 {count} 个目录，均未找到。需要先安装该程序，或将其所在目录加入 PATH。',
    infoStrong: '核心机制：',
    info: 'Shell 拿到命令名后，按 PATH 里目录的顺序依次查找。找到第一个匹配就立即使用，停止继续搜索。所以 PATH 中目录的顺序非常重要——先出现的目录优先级更高。',
    presets: [
      { name: 'git', foundAt: 1, desc: 'Git 版本控制工具' },
      { name: 'python3', foundAt: 2, desc: 'Python 解释器' },
      {
        name: 'node',
        foundAt: 0,
        desc: 'Node.js 运行时（通常安装在 /usr/local/bin）'
      },
      { name: 'ls', foundAt: 2, desc: '列出目录内容的内置命令' },
      { name: 'foobar', foundAt: -1, desc: '一个不存在的命令' }
    ]
  },
  envScope: {
    title: '环境变量的三个层级',
    subtitle: '变量从外到内单向传递，子进程继承父进程的副本',
    inheritedLabel: '▼ 子进程继承父进程环境',
    startChildLabel: '▼ 启动子进程（如 node app.js）',
    addedBadge: '你加的',
    infoStrong: '单向传递：',
    info: '变量只能向下继承，子进程修改变量值不会影响父进程。关闭终端后，直接 export 的变量也会消失。',
    layers: {
      system: {
        title: '系统级',
        code: '/etc/environment',
        desc: '所有用户、所有进程都能看到，由管理员配置'
      },
      user: {
        title: '用户级',
        code: '~/.zshrc',
        desc: '只影响当前用户，登录 Shell 启动时自动加载'
      },
      process: {
        title: '进程级（当前运行的程序）',
        desc: '继承所有上层变量，退出后消失，修改不影响父进程'
      }
    }
  },
  envExport: {
    title: 'export 决定子进程能不能"看见"变量',
    subtitle: '切换开关，观察子进程是否能读到父进程设置的变量',
    toggleLabel: '使用',
    parentTitle: '父进程（Shell）',
    childTitle: '子进程（bash -c ...）',
    arrowLabel: '启动子进程',
    inherited: '变量已继承',
    notInherited: '变量未继承',
    emptyOutput: '（空，什么都没有）',
    childCannotMutate: '子进程无法修改父进程的变量',
    withExportStrong: '有 export：',
    withoutExportStrong: '没有 export：',
    withExportInfo: '变量被标记为"可导出"，子进程启动时自动继承一份副本。',
    withoutExportInfo: '变量只存在于当前 Shell，子进程读到的是空字符串。'
  },
  apiKeyDanger: {
    title: '硬编码密钥 vs 用环境变量',
    subtitle: '同样的功能，两种写法，安全性天壤之别',
    badTitle: '危险写法：密钥写在代码里',
    goodTitle: '正确写法：从环境变量读取',
    ruleStrong: '黄金法则：',
    rule: '代码里出现密钥字符串 = 密钥已泄露。GitHub 的 Secret Scanner 会在推送后秒级扫描，发现 sk- 等前缀就通知厂商吊销。即使立刻删除提交，Git 历史里仍然保存着。',
    badConsequences: [
      'git push 后，密钥就公开在 GitHub 上',
      '爬虫秒级扫描，密钥被盗用并产生费用',
      'GitHub Secret Scanner 自动吊销密钥',
      '删除提交也没用，Git 历史仍保留'
    ],
    goodConsequences: [
      '代码里没有任何密钥信息，可以安全开源',
      '不同环境（开发/测试/生产）用不同密钥',
      '密钥泄露时只需重新生成，不用改代码',
      '团队成员各用各的密钥，互不影响'
    ]
  },
  dotEnv: {
    title: '.env 文件 + 代码读取',
    subtitle: '左边写配置，右边读取——两者之间只有变量名这一条线',
    noCommit: '不提交 Git',
    canCommit: '可以提交 Git',
    emptyValue: '（值留空）',
    resultTitle: '程序实际读到的值',
    workflowStrong: '工作流程：',
    workflow:
      "load_dotenv() / import 'dotenv/config' 在启动时读取 .env 文件，把里面的键值注入到进程环境变量中，代码里再用 os.environ 或 process.env 读取，两端只靠变量名连接。",
    langs: [
      { id: 'python', label: 'Python' },
      { id: 'node', label: 'Node.js' }
    ],
    envLines: [
      { type: 'comment', text: '# 本地开发配置，不提交到 Git' },
      { key: 'OPENAI_API_KEY', value: 'sk-proj-abc123...' },
      { key: 'DATABASE_URL', value: 'postgresql://localhost/dev' },
      { key: 'PORT', value: '3000' },
      { key: 'NODE_ENV', value: 'development' }
    ],
    exampleLines: [
      { type: 'comment', text: '# 复制为 .env，填入真实值' },
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
        text: 'load_dotenv()  <span class="comment-inline"># 读取 .env 文件</span>'
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
        text: 'import \'dotenv/config\'  <span class="comment-inline">// 读取 .env 文件</span>'
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
    title: '生产环境如何注入密钥',
    subtitle: '.env 是开发工具，服务器上不能靠它',
    principleStrong: '原则：',
    principle:
      '.env 文件是本地开发便利工具，生产环境应由运行平台负责注入环境变量——代码完全不感知密钥存在哪、怎么来的。',
    scenarios: [
      { id: 'systemd', icon: '🖥️', label: '服务器 (systemd)' },
      { id: 'cloud', icon: '☁️', label: '云平台 (Vercel 等)' },
      { id: 'docker', icon: '🐳', label: 'Docker' }
    ],
    scenarioData: {
      systemd: {
        codeTitle: '/etc/systemd/system/myapp.service',
        lines: [
          { type: 'comment', text: '# 推荐：用独立密钥文件，权限可控' },
          { type: 'normal', text: '[Service]' },
          { type: 'highlight', text: 'EnvironmentFile=/etc/myapp/secrets.env' },
          { type: 'normal', text: 'ExecStart=/usr/bin/node /app/index.js' },
          { type: 'normal', text: '' },
          { type: 'comment', text: '# 设置文件权限：只有所有者可读' },
          { type: 'good', text: 'sudo chmod 600 /etc/myapp/secrets.env' },
          {
            type: 'good',
            text: 'sudo chown deploy:deploy /etc/myapp/secrets.env'
          },
          { type: 'normal', text: '' },
          { type: 'comment', text: '# 应用配置后重启服务' },
          { type: 'normal', text: 'sudo systemctl daemon-reload' },
          { type: 'normal', text: 'sudo systemctl restart myapp' }
        ],
        tips: [
          {
            level: 'safe',
            text: '密钥文件 chmod 600 后，只有 deploy 用户可读，其他账号无法访问'
          },
          {
            level: 'safe',
            text: '密钥和代码完全分离，更新密钥不需要重新部署代码'
          },
          {
            level: 'warn',
            text: '不要直接在 systemd 文件里写 Environment="KEY=val"——改动需要 reload，且明文在配置里'
          }
        ]
      },
      cloud: {
        codeTitle: '云平台控制台（Vercel / Railway / Render / Netlify）',
        lines: [
          { type: 'comment', text: '# 在平台控制台界面操作，无需写配置文件' },
          { type: 'normal', text: '' },
          { type: 'comment', text: '# 平台会自动将变量注入到运行时环境' },
          { type: 'normal', text: '# 代码不变，照常读取：' },
          { type: 'highlight', text: 'const key = process.env.OPENAI_API_KEY' },
          {
            type: 'highlight',
            text: 'api_key = os.environ.get("OPENAI_API_KEY")'
          },
          { type: 'normal', text: '' },
          { type: 'comment', text: '# 通常支持按环境设置不同的值：' },
          { type: 'normal', text: '# Preview  → OPENAI_API_KEY = sk-test-...' },
          {
            type: 'normal',
            text: '# Production → OPENAI_API_KEY = sk-prod-...'
          }
        ],
        tips: [
          {
            level: 'safe',
            text: '平台加密存储密钥，你自己都不能再次查看原始值（只能重新生成）'
          },
          {
            level: 'safe',
            text: '支持 Preview / Production 分环境设置，测试和生产用不同密钥'
          },
          {
            level: 'info',
            text: '不要把 .env 文件提交到 Git 再让平台读取——这样密钥就进代码仓库了'
          }
        ]
      },
      docker: {
        codeTitle: 'docker run / docker-compose.yml',
        lines: [
          {
            type: 'comment',
            text: '# ❌ 错误：写在 Dockerfile ENV 里会固化到镜像层'
          },
          {
            type: 'bad',
            text: 'ENV OPENAI_API_KEY=sk-xxx  <span class="warn-inline">← 任何人都能 docker inspect 取到</span>'
          },
          { type: 'normal', text: '' },
          { type: 'comment', text: '# ✅ 正确：运行时从宿主机环境注入' },
          { type: 'highlight', text: 'docker run \\' },
          {
            type: 'highlight',
            text: '  -e OPENAI_API_KEY="$OPENAI_API_KEY" \\'
          },
          { type: 'highlight', text: '  -e DATABASE_URL="$DATABASE_URL" \\' },
          { type: 'highlight', text: '  myapp:latest' },
          { type: 'normal', text: '' },
          { type: 'comment', text: '# 或用 --env-file（文件不进 Git）' },
          { type: 'good', text: 'docker run --env-file .env myapp:latest' }
        ],
        tips: [
          {
            level: 'safe',
            text: '镜像本身不含任何密钥，可以安全上传到公开 Registry'
          },
          {
            level: 'safe',
            text: '--env-file 在运行时读取，文件不需要进入镜像'
          },
          {
            level: 'warn',
            text: 'docker history 可以查看所有镜像层内容——写在 Dockerfile ENV 里就永远泄露了'
          }
        ]
      }
    }
  },
  packageInstall: {
    title: 'npm install 全过程模拟',
    subtitle: '观察一个包从命令行到磁盘的完整安装旅程',
    installing: '安装中…',
    run: '运行',
    reset: '重置',
    logTitle: '📟 安装日志',
    fileTreeTitle: '📁 文件结构变化',
    packageJsonTitle: '📄 package.json',
    waiting: '等待运行…',
    infoStrong: '核心机制：',
    info: '安装时先解析依赖树 → 去注册表下载 → 解压到 node_modules → 写入锁文件，锁文件确保团队所有人安装完全一致的版本。',
    phases: [
      {
        id: 'resolve',
        name: '依赖解析',
        desc: '分析所有需要的包',
        status: 'pending'
      },
      {
        id: 'fetch',
        name: '下载 & 解压',
        desc: '从 registry 拉取 tarball',
        status: 'pending'
      },
      {
        id: 'link',
        name: '链接模块',
        desc: '写入 node_modules/',
        status: 'pending'
      },
      {
        id: 'lockfile',
        name: '写锁文件',
        desc: '固化精确版本',
        status: 'pending'
      }
    ],
    logs: {
      resolving: '正在解析 {name}@{version} 的依赖…',
      foundDep: '  找到依赖: {name}@{version}',
      total: '共需安装 {count} 个包',
      download: '↓ 下载 {name}-{version}.tgz',
      extract: '📂 解压 → node_modules/{name}/',
      writeLock: '✏️ 写入 package-lock.json',
      done: '✅ 完成！新增 {name}@{version}'
    }
  },
  dependencyTree: {
    title: '依赖树 & 版本语义',
    subtitle: '理解语义化版本号与依赖关系图',
    versionSuffix: '版本',
    exampleLabel: '示例：',
    hoverHint: '← 鼠标悬停数字查看含义',
    rangesTitle: '常用版本范围符号',
    accepted: '✓ 接受',
    rejected: '✗ 拒绝',
    rootBadge: '你的项目',
    conflictBadge: '⚠ 冲突',
    packageJsonTitle: '📄 package.json（声明意图）',
    packageJsonNote: '用范围符号声明「可以接受哪些版本」',
    lockfileTitle: '🔒 package-lock.json（固定现实）',
    lockfileNote: '锁定实际安装的精确版本，团队共享',
    goldenStrong: '黄金法则：',
    golden: {
      semver:
        '语义化版本 = MAJOR.MINOR.PATCH，MAJOR 变说明有破坏性改动，升级需谨慎。',
      tree: '依赖的依赖也是依赖，一个包可以间接引入几十个包，这就是"依赖树"。',
      lockfile:
        '把锁文件提交到 Git，保证团队每个人、每次 CI 安装的包版本完全一致。'
    },
    tabs: [
      { id: 'semver', label: '语义化版本' },
      { id: 'tree', label: '依赖树' },
      { id: 'lockfile', label: '锁文件' }
    ],
    versionParts: [
      {
        id: 'major',
        num: '2',
        label: 'MAJOR',
        color: '#ef4444',
        desc: '主版本号。有破坏性 API 变更时递增，通常不向后兼容。升级前必须看 CHANGELOG。',
        example: 'React 16 → 17 → 18，每次都有较大改动'
      },
      {
        id: 'minor',
        num: '8',
        label: 'MINOR',
        color: '#f59e0b',
        desc: '次版本号。新增功能但向后兼容时递增，可以放心升级。',
        example: 'axios 1.5.0 → 1.6.0，新增了功能但不影响老用法'
      },
      {
        id: 'patch',
        num: '3',
        label: 'PATCH',
        color: '#22c55e',
        desc: '补丁版本号。只修复 bug，完全向后兼容，建议及时升级。',
        example: 'lodash 4.17.20 → 4.17.21，修复安全漏洞'
      }
    ],
    ranges: [
      {
        sym: '^2.8.3',
        name: '兼容范围（推荐）',
        desc: '允许 MINOR 和 PATCH 升级，锁定 MAJOR',
        examples: [
          { v: '2.8.3', ok: true },
          { v: '2.9.0', ok: true },
          { v: '3.0.0', ok: false },
          { v: '2.8.2', ok: false }
        ]
      },
      {
        sym: '~2.8.3',
        name: '近似范围（保守）',
        desc: '只允许 PATCH 升级，锁定 MAJOR 和 MINOR',
        examples: [
          { v: '2.8.3', ok: true },
          { v: '2.8.9', ok: true },
          { v: '2.9.0', ok: false },
          { v: '3.0.0', ok: false }
        ]
      },
      {
        sym: '2.8.3',
        name: '精确版本（严格）',
        desc: '只接受这一个版本，完全锁定',
        examples: [
          { v: '2.8.3', ok: true },
          { v: '2.8.4', ok: false },
          { v: '2.9.0', ok: false },
          { v: '2.8.2', ok: false }
        ]
      },
      {
        sym: '*',
        name: '任意版本（危险）',
        desc: '接受任何版本，包括主版本升级，生产环境禁止',
        examples: [
          { v: '1.0.0', ok: true },
          { v: '2.8.3', ok: true },
          { v: '99.0.0', ok: true },
          { v: '0.0.1', ok: true }
        ]
      }
    ],
    scenarios: [
      { id: 'normal', label: '正常依赖' },
      { id: 'shared', label: '共享依赖' },
      { id: 'conflict', label: '版本冲突' }
    ],
    allScenarios: {
      normal: {
        root: 'my-app',
        type: 'success',
        icon: '✅',
        description:
          '正常情况：直接依赖 axios 和 lodash，它们各自有少量子依赖，无冲突。',
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
          '共享依赖：react-dom 和 react-router 都依赖同一个 react，npm 会自动复用，不重复安装。',
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
          '版本冲突：pkg-a 需要 lodash@^3.0.0，pkg-b 需要 lodash@^4.0.0，MAJOR 不同无法共享，npm 会安装两份，导致包体积膨胀。',
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
        title: '必须提交到 Git',
        desc: '锁文件是团队契约，让所有成员、CI/CD 安装完全相同的版本。'
      },
      {
        icon: '🚫',
        title: '不要手动编辑',
        desc: '锁文件由包管理器自动维护，手动修改极易引入错误。'
      },
      {
        icon: '🔄',
        title: 'npm install 会更新它',
        desc: '每次 install/update 后，锁文件会自动更新到最新解析结果。'
      },
      {
        icon: '🧪',
        title: 'npm ci 严格遵守它',
        desc: 'CI 环境用 npm ci 而非 npm install，保证精确复现锁文件记录的版本。'
      }
    ]
  },
  sshAuth: {
    title: 'SSH 密钥认证：你的数字身份证',
    subtitle: '对称加密 vs 非对称加密 · 密钥对生成 · 认证流程',
    passwordTitle: '密码登录',
    keyTitle: '密钥登录',
    passwordVerdict: '密码在网络上传输，可能被截获',
    keyVerdict: '私钥永远不离开你的电脑',
    generating: '生成中...',
    generate: '生成密钥对',
    privateKey: '私钥 (Private Key)',
    publicKey: '公钥 (Public Key)',
    privateRule: '绝不外泄 · 留在本机',
    publicRule: '可以给任何人 · 放到服务器',
    relation: '数学关联',
    analogyStrong: '生活类比：',
    analogy:
      '公钥 = 锁（可以随便装）· 私钥 = 钥匙（只有你有）· 用锁锁住的东西，只有对应的钥匙能打开',
    startAuth: '开始认证',
    restart: '重新演示',
    authenticating: '认证中...',
    clientName: '你的电脑',
    clientHas: '持有：私钥',
    serverName: '远程服务器',
    serverHas: '持有：公钥',
    configTitle: '~/.ssh/config 快捷配置',
    configResult: '配置后：',
    configSuffix: '即可一键连接',
    coreStrong: '核心思想：',
    core: {
      compare:
        'SSH 密钥登录比密码更安全，因为私钥从不在网络上传输，无法被中间人窃取。',
      keygen:
        '一次 ssh-keygen 生成一对密钥：私钥自己保管，公钥放到目标服务器或平台。',
      auth: '认证过程基于"挑战-响应"机制：服务器出题，你的私钥签名作答，公钥验证答案。全程私钥不离开本机。',
      uses: 'SSH 密钥不仅用于服务器登录，也是 Git (GitHub/GitLab) 等开发工具的标准身份认证方式。'
    },
    scenarios: [
      { id: 'compare', label: '密码 vs 密钥' },
      { id: 'keygen', label: '生成密钥对' },
      { id: 'auth', label: '认证流程' },
      { id: 'uses', label: '常见用途' }
    ],
    passwordFlow: [
      '输入用户名和密码',
      '密码通过网络发送到服务器',
      '服务器比对密码是否正确',
      '每次都要输密码'
    ],
    keyFlow: [
      '事先把公钥放到服务器',
      '连接时发送身份标识（不发私钥）',
      '服务器用公钥出"数学题"',
      '你的私钥在本地"答题"，只发答案'
    ],
    waitingPrivate:
      '-----BEGIN OPENSSH PRIVATE KEY-----\n（等待生成...）\n-----END OPENSSH PRIVATE KEY-----',
    waitingPublic: '（等待生成...）',
    generatedPrivate:
      '-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAA...\n（2048 位密钥，绝不外传）\n-----END OPENSSH PRIVATE KEY-----',
    generatedPublic:
      'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA\nIGx...kF your@email.com',
    authMessages: [
      { label: '① 请求连接', detail: '"我要用密钥登录"' },
      {
        label: '② 发送随机挑战',
        detail: '"请证明你有私钥：用它签名这段随机数据"'
      },
      { label: '③ 返回签名', detail: '"用私钥签名后的结果（私钥本身不发送）"' },
      { label: '④ 用公钥验证', detail: '"用存储的公钥验证签名 → 匹配！"' },
      {
        label: '⑤ 认证成功',
        detail: '"欢迎登录！从始至终，私钥没离开过你的电脑"'
      }
    ],
    commonUses: [
      {
        icon: '🖥️',
        name: '远程服务器',
        command: 'ssh user@server',
        desc: '免密码登录 Linux/Mac 服务器'
      },
      {
        icon: '🐙',
        name: 'GitHub',
        command: 'git push origin main',
        desc: '用 SSH 协议推送代码'
      },
      {
        icon: '🦊',
        name: 'GitLab',
        command: 'git clone git@gitlab.com:...',
        desc: '克隆私有仓库'
      },
      {
        icon: '📦',
        name: 'SCP 传文件',
        command: 'scp file.txt user@server:~/',
        desc: '安全复制文件到远程'
      },
      {
        icon: '🚇',
        name: 'SSH 隧道',
        command: 'ssh -L 8080:localhost:3000 server',
        desc: '将远程端口映射到本地'
      },
      {
        icon: '🐳',
        name: '部署服务',
        command: 'ssh deploy@prod "docker pull..."',
        desc: '远程执行部署命令'
      }
    ]
  },
  regex: {
    title: '正则表达式：文本的搜索引擎',
    subtitle: '模式匹配 · 分组捕获 · 实时预览',
    patternLabel: '正则表达式',
    patternPlaceholder: '输入正则...',
    textLabel: '测试文本',
    textPlaceholder: '输入要匹配的文本...',
    resultsTitle: '匹配结果',
    matchCount: '{count} 个匹配',
    presetLabel: '试试预设：',
    pass: '✓ 匹配',
    fail: '✗ 不匹配',
    visualTitle: '正则解剖：拆解一个邮箱匹配模式',
    flowTitle: '正则引擎的工作过程',
    coreStrong: '核心思想：',
    core: {
      playground:
        '正则表达式是一种用特殊符号描述文本模式的语言，在搜索、替换、数据验证中无处不在。',
      cheatsheet:
        '记住几个核心符号（. * + ? \\d \\w [] ()）就能覆盖 80% 的使用场景。点击任意符号可直接试验。',
      patterns:
        '不需要自己从零写正则——常见场景（邮箱、手机号、URL）都有成熟的模式可以直接复用。',
      visual:
        '正则引擎从左到右逐字符匹配，遇到量词会"贪婪"地尽量多匹配，失败时"回溯"尝试其他路径。'
    },
    modes: [
      { id: 'playground', label: '实时试验' },
      { id: 'cheatsheet', label: '速查表' },
      { id: 'patterns', label: '常用模式' },
      { id: 'visual', label: '可视化解析' }
    ],
    defaultText:
      '我的手机号是 13812345678，座机是 010-12345678，邮箱是 test@example.com',
    presets: [
      {
        name: '找数字',
        pattern: '\\d+',
        flags: 'g',
        text: '价格是 99 元，优惠 20 元，共 79 元'
      },
      {
        name: '找邮箱',
        pattern: '[\\w.+-]+@[\\w-]+\\.[\\w.]+',
        flags: 'g',
        text: 'admin@test.com 和 user@example.org 是有效邮箱'
      },
      {
        name: '找手机号',
        pattern: '1[3-9]\\d{9}',
        flags: 'g',
        text: '联系我：13812345678 或 15099887766'
      },
      {
        name: '找 URL',
        pattern: 'https?://[^\\s]+',
        flags: 'g',
        text: '访问 https://github.com 或 http://example.com/path'
      },
      {
        name: '找中文',
        pattern: '[\\u4e00-\\u9fa5]+',
        flags: 'g',
        text: 'Hello世界，你好World！'
      }
    ],
    cheatsheet: [
      {
        category: '字符类',
        items: [
          {
            pattern: '.',
            desc: '任意字符（除换行）',
            example: 'a.c → abc, a1c'
          },
          { pattern: '\\d', desc: '数字 [0-9]', example: '\\d → 3, 7' },
          { pattern: '\\w', desc: '字母数字下划线', example: '\\w → a, 5, _' },
          { pattern: '\\s', desc: '空白字符', example: '空格、Tab、换行' },
          { pattern: '[abc]', desc: '字符集合', example: '[aeiou] → 元音' },
          { pattern: '[^abc]', desc: '否定集合', example: '[^0-9] → 非数字' }
        ]
      },
      {
        category: '量词',
        items: [
          { pattern: '*', desc: '0 或多次', example: 'ab* → a, ab, abb' },
          { pattern: '+', desc: '1 或多次', example: 'ab+ → ab, abb' },
          {
            pattern: '?',
            desc: '0 或 1 次',
            example: 'colou?r → color, colour'
          },
          { pattern: '{n}', desc: '恰好 n 次', example: '\\d{4} → 2024' },
          { pattern: '{n,m}', desc: 'n 到 m 次', example: '\\d{2,4} → 12, 123' }
        ]
      },
      {
        category: '位置',
        items: [
          { pattern: '^', desc: '行首', example: '^Hello → 以 Hello 开头' },
          { pattern: '$', desc: '行尾', example: 'end$ → 以 end 结尾' },
          {
            pattern: '\\b',
            desc: '单词边界',
            example: '\\bcat\\b → cat（不匹配 catch）'
          }
        ]
      },
      {
        category: '分组与引用',
        items: [
          {
            pattern: '(abc)',
            desc: '捕获组',
            example: '(\\d+)-(\\d+) → 分别捕获'
          },
          { pattern: 'a|b', desc: '或', example: 'cat|dog → cat 或 dog' },
          { pattern: '(?:abc)', desc: '非捕获组', example: '(?:ab)+ → abab' }
        ]
      }
    ],
    commonPatterns: [
      {
        name: '邮箱',
        regex: '^[\\w.+-]+@[\\w-]+\\.[\\w.]+$',
        examples: [
          { text: 'user@example.com', match: true },
          { text: 'a.b+c@test.org', match: true },
          { text: 'invalid@', match: false },
          { text: '@no-user.com', match: false }
        ]
      },
      {
        name: '手机号（中国）',
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
        name: 'IPv4 地址',
        regex: '^(\\d{1,3}\\.){3}\\d{1,3}$',
        examples: [
          { text: '192.168.1.1', match: true },
          { text: '10.0.0.255', match: true },
          { text: '999.999.999.999', match: true },
          { text: '1.2.3', match: false }
        ]
      },
      {
        name: '日期 (YYYY-MM-DD)',
        regex: '^\\d{4}-\\d{2}-\\d{2}$',
        examples: [
          { text: '2024-01-15', match: true },
          { text: '2023-12-31', match: true },
          { text: '24-1-5', match: false },
          { text: '2024/01/15', match: false }
        ]
      },
      {
        name: '强密码',
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
      { text: '[', type: 'bracket', desc: '字符集合开始' },
      { text: '\\w', type: 'char-class', desc: '字母、数字或下划线' },
      { text: '.+-', type: 'literal', desc: '点号、加号、横杠（字面量）' },
      { text: ']', type: 'bracket', desc: '字符集合结束' },
      { text: '+', type: 'quantifier', desc: '一个或多个（贪婪匹配）' },
      { text: '@', type: 'literal', desc: '字面量 @ 符号' },
      { text: '[', type: 'bracket', desc: '字符集合开始' },
      { text: '\\w', type: 'char-class', desc: '字母、数字或下划线' },
      { text: '-', type: 'literal', desc: '横杠（字面量）' },
      { text: ']', type: 'bracket', desc: '字符集合结束' },
      { text: '+', type: 'quantifier', desc: '一个或多个' },
      { text: '\\.', type: 'escape', desc: '转义的点号（匹配字面量 .）' },
      { text: '[', type: 'bracket', desc: '字符集合开始' },
      { text: '\\w', type: 'char-class', desc: '字母、数字或下划线' },
      { text: '.', type: 'literal', desc: '点号（在字符集中是字面量）' },
      { text: ']', type: 'bracket', desc: '字符集合结束' },
      { text: '+', type: 'quantifier', desc: '一个或多个' }
    ],
    legend: [
      { type: 'char-class', label: '字符类' },
      { type: 'quantifier', label: '量词' },
      { type: 'literal', label: '字面量' },
      { type: 'bracket', label: '集合边界' },
      { type: 'escape', label: '转义字符' }
    ],
    engineSteps: [
      {
        action: '从左到右扫描',
        detail: '正则引擎从文本第一个字符开始，逐个尝试匹配'
      },
      { action: '贪婪匹配', detail: '遇到 * + 等量词时，尽量多匹配字符' },
      { action: '回溯', detail: '如果贪婪匹配失败，退回一步尝试更少的字符' },
      { action: '捕获分组', detail: '遇到 () 时，记录匹配的子串供后续引用' },
      { action: '返回结果', detail: '全部匹配完成，返回所有匹配项和捕获组' }
    ]
  },
  packageManager: {
    title: '包管理器生态地图',
    subtitle: '选择一个语言生态，探索它的包管理工具',
    installCommand: '安装命令',
    configFiles: '配置文件',
    features: '核心特点',
    placeholder: '← 点击上方卡片查看详情',
    infoStrong: '核心思想：',
    info: '包管理器 = 应用商店，帮你下载、安装、管理别人写好的代码（库/包），并自动处理版本兼容问题。',
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
          tagline: '最广泛使用，Node.js 自带',
          color: '#cc3534',
          commands: [
            { op: '安装依赖', cmd: 'npm install lodash' },
            { op: '安装开发依赖', cmd: 'npm install -D typescript' },
            { op: '运行脚本', cmd: 'npm run build' },
            { op: '查看已安装', cmd: 'npm list --depth=0' }
          ],
          files: [
            { name: 'package.json', desc: '项目声明文件，记录依赖和脚本' },
            { name: 'package-lock.json', desc: '锁定精确版本，保证环境一致' },
            { name: 'node_modules/', desc: '实际安装的包存放目录' }
          ],
          features: [
            'Node.js 内置',
            '最大生态(200万+包)',
            '支持 workspaces',
            'npx 直接运行'
          ]
        },
        {
          id: 'yarn',
          name: 'Yarn',
          fullName: 'Yet Another Resource Negotiator',
          tagline: "并行下载快，Plug'n'Play 免 node_modules",
          color: '#2c8ebb',
          commands: [
            { op: '安装依赖', cmd: 'yarn add lodash' },
            { op: '安装开发依赖', cmd: 'yarn add -D typescript' },
            { op: '运行脚本', cmd: 'yarn build' },
            { op: '查看已安装', cmd: 'yarn list --depth=0' }
          ],
          files: [
            { name: 'package.json', desc: '与 npm 兼容的项目声明文件' },
            { name: 'yarn.lock', desc: 'Yarn 专属锁文件，格式更易读' },
            { name: '.yarnrc.yml', desc: 'Yarn Berry 配置文件' }
          ],
          features: [
            '并行安装更快',
            "Plug'n'Play 零 node_modules",
            'Workspace 原生支持',
            '离线缓存'
          ]
        },
        {
          id: 'pnpm',
          name: 'pnpm',
          fullName: 'Performant npm',
          tagline: '硬链接共享，节省磁盘，速度最快',
          color: '#f9ad00',
          commands: [
            { op: '安装依赖', cmd: 'pnpm add lodash' },
            { op: '安装开发依赖', cmd: 'pnpm add -D typescript' },
            { op: '运行脚本', cmd: 'pnpm run build' },
            { op: '查看已安装', cmd: 'pnpm list --depth=0' }
          ],
          files: [
            { name: 'package.json', desc: '与 npm 兼容的项目声明文件' },
            { name: 'pnpm-lock.yaml', desc: 'pnpm 专属锁文件' },
            { name: '.pnpm-store/', desc: '全局内容寻址存储，跨项目共享' }
          ],
          features: [
            '磁盘空间最省',
            '安装速度最快',
            '严格隔离防幽灵依赖',
            'Monorepo 友好'
          ]
        }
      ],
      python: [
        {
          id: 'pip',
          name: 'pip',
          fullName: 'Pip Installs Packages',
          tagline: 'Python 官方标准，简单直接',
          color: '#3776ab',
          commands: [
            { op: '安装包', cmd: 'pip install requests' },
            { op: '安装指定版本', cmd: 'pip install requests==2.28.0' },
            { op: '导出依赖', cmd: 'pip freeze > requirements.txt' },
            { op: '批量安装', cmd: 'pip install -r requirements.txt' }
          ],
          files: [
            { name: 'requirements.txt', desc: '依赖列表，每行一个包和版本' },
            { name: 'setup.py / pyproject.toml', desc: '项目元数据和打包配置' }
          ],
          features: [
            'Python 内置',
            '使用最广泛',
            '配合 venv 隔离环境',
            '简单直接'
          ]
        },
        {
          id: 'conda',
          name: 'conda',
          fullName: 'Conda Package Manager',
          tagline: '科学计算利器，同时管理 Python 版本',
          color: '#44a833',
          commands: [
            { op: '创建环境', cmd: 'conda create -n myenv python=3.11' },
            { op: '激活环境', cmd: 'conda activate myenv' },
            { op: '安装包', cmd: 'conda install numpy' },
            { op: '导出环境', cmd: 'conda env export > env.yml' }
          ],
          files: [
            { name: 'environment.yml', desc: '完整环境配置，包含 Python 版本' },
            { name: '.condarc', desc: 'conda 全局配置文件' }
          ],
          features: [
            '管理 Python 版本',
            '支持非 Python 包(CUDA等)',
            '科学计算首选',
            '跨平台环境复现'
          ]
        },
        {
          id: 'uv',
          name: 'uv',
          fullName: 'Ultra-fast Python Package Manager',
          tagline: 'Rust 编写，比 pip 快 10-100 倍',
          color: '#7c3aed',
          commands: [
            { op: '安装包', cmd: 'uv pip install requests' },
            { op: '创建虚拟环境', cmd: 'uv venv' },
            { op: '同步依赖', cmd: 'uv pip sync requirements.txt' },
            { op: '运行脚本', cmd: 'uv run python script.py' }
          ],
          files: [
            { name: 'requirements.txt', desc: '与 pip 完全兼容的依赖文件' },
            { name: 'pyproject.toml', desc: '现代 Python 项目配置标准' }
          ],
          features: [
            'Rust 编写极速',
            '与 pip 完全兼容',
            '内置虚拟环境管理',
            '2024年新秀'
          ]
        }
      ],
      rust: [
        {
          id: 'cargo',
          name: 'Cargo',
          fullName: "Rust's Package Manager & Build System",
          tagline: 'Rust 官方工具，集构建/测试/发布于一体',
          color: '#dea584',
          commands: [
            { op: '添加依赖', cmd: 'cargo add serde' },
            { op: '构建项目', cmd: 'cargo build --release' },
            { op: '运行项目', cmd: 'cargo run' },
            { op: '运行测试', cmd: 'cargo test' }
          ],
          files: [
            { name: 'Cargo.toml', desc: '项目清单，声明依赖和元数据' },
            { name: 'Cargo.lock', desc: '精确锁定版本，应用项目必须提交' }
          ],
          features: [
            '官方唯一标准',
            '内置构建系统',
            '包 = Crate',
            'crates.io 生态'
          ]
        }
      ],
      go: [
        {
          id: 'gomod',
          name: 'Go Modules',
          fullName: 'Go 官方模块系统（go mod）',
          tagline: '内置于 Go 工具链，无需额外安装',
          color: '#00acd7',
          commands: [
            { op: '初始化模块', cmd: 'go mod init github.com/user/project' },
            { op: '添加依赖', cmd: 'go get github.com/gin-gonic/gin' },
            { op: '整理依赖', cmd: 'go mod tidy' },
            { op: '下载到本地', cmd: 'go mod download' }
          ],
          files: [
            { name: 'go.mod', desc: '模块声明文件，记录依赖路径和版本' },
            { name: 'go.sum', desc: '哈希校验文件，防止依赖被篡改' }
          ],
          features: [
            'Go 工具链内置',
            '路径即包名',
            '自动校验完整性',
            'pkg.go.dev 生态'
          ]
        }
      ],
      mac: [
        {
          id: 'brew',
          name: 'Homebrew',
          fullName: 'The Missing Package Manager for macOS',
          tagline: 'macOS/Linux 必备，安装开发工具首选',
          color: '#fbb040',
          commands: [
            { op: '安装软件', cmd: 'brew install git' },
            { op: '更新所有', cmd: 'brew upgrade' },
            { op: '搜索软件', cmd: 'brew search node' },
            { op: '查看已安装', cmd: 'brew list' }
          ],
          files: [{ name: 'Brewfile', desc: '批量安装清单，可版本控制' }],
          features: [
            'macOS/Linux 通用',
            '管理系统级工具',
            'Cask 安装 GUI 应用',
            '社区驱动'
          ]
        },
        {
          id: 'apt',
          name: 'apt',
          fullName: 'Advanced Package Tool',
          tagline: 'Ubuntu/Debian 系统包管理器',
          color: '#e95420',
          commands: [
            { op: '更新列表', cmd: 'sudo apt update' },
            { op: '安装软件', cmd: 'sudo apt install nginx' },
            { op: '更新系统', cmd: 'sudo apt upgrade' },
            { op: '卸载软件', cmd: 'sudo apt remove nginx' }
          ],
          files: [{ name: '/etc/apt/sources.list', desc: '软件源配置文件' }],
          features: [
            'Ubuntu/Debian 官方',
            '系统级权限',
            '依赖自动解析',
            '服务器运维必备'
          ]
        },
        {
          id: 'dnf',
          name: 'dnf / yum',
          fullName: 'Dandified YUM（Fedora / RHEL / CentOS）',
          tagline: 'Red Hat 系 Linux 的系统包管理器',
          color: '#e00',
          commands: [
            { op: '安装软件', cmd: 'sudo dnf install git' },
            { op: '更新系统', cmd: 'sudo dnf upgrade' },
            { op: '搜索软件', cmd: 'dnf search nginx' },
            { op: '卸载软件', cmd: 'sudo dnf remove nginx' }
          ],
          files: [{ name: '/etc/dnf/dnf.conf', desc: 'dnf 全局配置文件' }],
          features: [
            'Fedora/RHEL/CentOS 官方',
            '支持模块流',
            'DNF5 大幅提速',
            '企业级 Linux 首选'
          ]
        }
      ],
      windows: [
        {
          id: 'winget',
          name: 'winget',
          fullName: 'Windows Package Manager',
          tagline: 'Microsoft 官方出品，Win 10/11 内置',
          color: '#0078d4',
          commands: [
            { op: '安装软件', cmd: 'winget install Git.Git' },
            { op: '更新所有', cmd: 'winget upgrade --all' },
            { op: '搜索软件', cmd: 'winget search nodejs' },
            { op: '卸载软件', cmd: 'winget uninstall Git.Git' }
          ],
          files: [
            {
              name: 'winget-packages.json',
              desc: '导出的软件清单，可用于批量恢复'
            }
          ],
          features: [
            'Windows 10/11 内置',
            'Microsoft Store 集成',
            '软件包签名验证',
            '官方持续更新中'
          ]
        },
        {
          id: 'choco',
          name: 'Chocolatey',
          fullName: 'Chocolatey Package Manager',
          tagline: 'Windows 最成熟的第三方包管理器',
          color: '#4a154b',
          commands: [
            { op: '安装软件', cmd: 'choco install git' },
            { op: '更新所有', cmd: 'choco upgrade all' },
            { op: '搜索软件', cmd: 'choco search nodejs' },
            { op: '卸载软件', cmd: 'choco uninstall git' }
          ],
          files: [
            { name: 'packages.config', desc: 'XML 格式的软件清单，批量安装用' }
          ],
          features: [
            '生态最成熟(10000+包)',
            '企业版商业支持',
            'PowerShell 集成',
            '支持无人值守安装'
          ]
        },
        {
          id: 'scoop',
          name: 'Scoop',
          fullName: 'Scoop — A command-line installer for Windows',
          tagline: '无需管理员权限，专为开发者设计',
          color: '#1a73e8',
          commands: [
            { op: '安装软件', cmd: 'scoop install git' },
            { op: '更新所有', cmd: 'scoop update *' },
            { op: '搜索软件', cmd: 'scoop search nodejs' },
            { op: '卸载软件', cmd: 'scoop uninstall git' }
          ],
          files: [
            { name: 'Scoopfile / apps.json', desc: '应用清单，用于环境还原' }
          ],
          features: [
            '无需管理员权限',
            '安装到用户目录',
            '版本共存切换',
            '开发者工具首选'
          ]
        }
      ]
    }
  }
}
