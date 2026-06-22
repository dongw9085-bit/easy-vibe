export default {
  transistor: {
    label: 'MOSFET 晶体管示意 -- 点击切换 Gate 电压',
    source: '源极',
    sourceEn: 'Source',
    drain: '漏极',
    drainEn: 'Drain',
    onStatus: '导通 -> 输出 1',
    offStatus: '断开 -> 输出 0',
    hint: '点击切换 Gate 电压'
  },
  logicGate: {
    title: '四种基本逻辑门',
    subtitle: '所有数字计算的基础积木',
    operationLabel: '运算：',
    truthTable: '真值表',
    output: '输出',
    coreIdeaLabel: '核心思想：',
    coreIdea:
      '逻辑门把物理电路的"通/断"变成了数学上的"真/假"运算，是硬件实现软件逻辑的桥梁。',
    gates: [
      {
        name: 'AND',
        nameLocalized: '与门',
        formula: 'A ∧ B',
        rule: '两个都为 1，才输出 1',
        intuition: '串联开关：两道门都开才通',
        rows: [
          [0, 0, 0],
          [0, 1, 0],
          [1, 0, 0],
          [1, 1, 1]
        ]
      },
      {
        name: 'OR',
        nameLocalized: '或门',
        formula: 'A ∨ B',
        rule: '有一个为 1，就输出 1',
        intuition: '并联开关：任一道门开就通',
        rows: [
          [0, 0, 0],
          [0, 1, 1],
          [1, 0, 1],
          [1, 1, 1]
        ]
      },
      {
        name: 'NOT',
        nameLocalized: '非门',
        formula: '¬A',
        rule: '输入取反：0 变 1，1 变 0',
        intuition: '反向器：开变关，关变开',
        rows: [
          [0, 1],
          [1, 0]
        ]
      },
      {
        name: 'XOR',
        nameLocalized: '异或门',
        formula: 'A ⊕ B',
        rule: '两个不同，才输出 1',
        intuition: '差异检测器：相异为真',
        rows: [
          [0, 0, 0],
          [0, 1, 1],
          [1, 0, 1],
          [1, 1, 0]
        ]
      }
    ]
  },
  binaryAddition: {
    title: '从手算加法到逻辑门',
    subtitle: '计算机如何只用 0 和 1 做数学题？看看这个规律',
    decimalTitle: '第一步：回顾十进制的"进位"',
    decimalIntro:
      '因为 7 + 5 = 12，这个结果超出了个位能装下的最大数字 (9)。我们把 12 拆成"一个完整的 10"和"剩下的 2"：',
    decimalSum: '留在当前位置的那个 2 被写在个位上，这叫本位 (Sum)。',
    decimalCarry: '"完整的 10"向十位进了一个 1，叫进位 (Carry)。',
    binaryTitle: '第二步：二进制加法的 4 种情况（点点看）',
    explainZero: '0 + 0 = 0。本位写 0，不进位。',
    explainOne: '本位写 1，不进位。',
    explainCarry: '1 + 1 = 10。二进制"满 2 就进 1"。所以本位写 0，向左进位 1。',
    ruleTitle: '第三步：给规律起个名字（电路化）',
    carry: '进位',
    sum: '本位',
    sumRuleTitle: '本位 规律：',
    sumRule:
      '只有当输入是 (0,1) 或 (1,0) 时，本位才是 1。只有两个输入不同，才为 1。',
    sumGate: '这个规律在电路中叫 XOR (异或门)',
    carryRuleTitle: '进位 规律：',
    carryRule:
      '只有当输入是 (1,1) 时，进位才是 1。只有两个输入都是 1，才为 1。',
    carryGate: '这个规律在电路中叫 AND (与门)'
  },
  halfAdder: {
    title: '半加器 (Half Adder) -- 交互演示',
    subtitle: '点击输入 A / B，看看这一位加法的结果',
    carryLabel: '进位：向左边那列借一个 1',
    sumLabel: '本位：这一列写下的数字',
    allCases: '所有可能的情况',
    sumColumn: '写下（本位）',
    carryColumn: '进位',
    patternIntro: '仔细看这张表，你会发现两个规律：',
    patternSum:
      '「写下」列：只有 A 和 B 不一样时才是 1，这个规律叫 XOR（异或）。',
    patternCarry:
      '「进位」列：只有 A 和 B 都是 1 时才是 1，这个规律叫 AND（与）。',
    circuitLabel: '电路是这样连的：',
    xorGate: 'XOR 异或门',
    xorRule: '不同 -> 1',
    andGate: 'AND 与门',
    andRule: '全1 -> 1',
    output: '输出:',
    sumOut: '本位 (Sum)',
    carryOut: '进位 (Carry)',
    explanations: {
      '00': '0 + 0 = 0。这一列写下 0，不需要进位。',
      '01': '0 + 1 = 1。这一列写下 1，不需要进位。',
      10: '1 + 0 = 1。这一列写下 1，不需要进位。',
      11: '1 + 1 = 2。但二进制这一列最多写 1，所以写下 0，并且向左边那列"进一个 1"（进位）。就像十进制的 9+1=10，个位写 0、十位进 1。'
    }
  },
  fullAdder: {
    title: '全加器 (Full Adder) -- 交互演示',
    subtitle: '比半加器多一个输入：来自低位的进位 (Cin)。点击三个输入试试',
    lowCarry: '低位进位',
    carry: '进位',
    sum: '本位',
    vsHalfLabel: '和半加器相比：',
    vsHalf:
      '全加器多了第三个输入「低位进位 (Cin)」。在多位加法中，每一列不仅要加 A 和 B，还要加上右边那一列传来的进位。',
    tableTitle: '所有 8 种情况（3个输入 -> 2³ = 8）',
    structureLabel: '全加器的内部 = 两个半加器串联',
    firstStep: '第一步：半加器 ①',
    firstStepDesc: '先算 A + B',
    secondStep: '第二步：半加器 ②',
    secondStepDesc: '把中间和 + 低位进位',
    thirdStep: '第三步：合并进位',
    thirdStepDesc: '两路进位只要有一个是 1，就向高位进 1',
    intermediateSum: '中间和',
    carryOne: '进位①',
    carryTwo: '进位②',
    finalCarry: '最终进位',
    explanations: {
      total0: '0 + 0 + 0 = 0。本位写 0，不进位。',
      total1: '本位写 1，不进位。',
      total2: '二进制里 2 就是 "10"，所以本位写 0，向左进 1。',
      total3: '二进制里 3 就是 "11"，所以本位写 1，向左进 1。'
    }
  },
  adderChain: {
    title: '行波进位加法器 (Ripple Carry Adder)',
    subtitle: '多个全加器级联，实现多位二进制加法',
    terms: [
      { name: '级联', desc: '低位 Cout 连接高位 Cin' },
      { name: '行波', desc: '进位像波浪一样逐位传递' },
      { name: '溢出', desc: '最高位产生进位，结果超出范围' }
    ],
    bitCountLabel: '位数：',
    bitButton: '{bit} 位',
    overflow: '溢出',
    chainTitle: '加法器级联',
    chainHint: '悬停查看每位计算详情',
    stageBit: '第{bit}位',
    halfAdder: '半加器',
    fullAdder: '全加器',
    bitCalcTitle: '第 {bit} 位计算过程',
    overallCalcTitle: '整体计算过程',
    inputLabel: '输入：',
    sumLabel: '本位：',
    carryLabel: '进位：',
    processLabel: '过程：',
    resultLabel: '结果：',
    processText: '从第 0 位开始，逐位计算本位和进位，进位向高位传递',
    carryGenerated: '产生进位 → 传递给高位',
    noCarry: '无进位',
    oddOnes: '奇数个 1',
    evenOnes: '偶数个 1',
    coreIdeaLabel: '核心思想：',
    coreIdea:
      '进位像波浪一样从最低位逐级传递到最高位，所以叫"行波进位"。位数越多，延迟越大，但电路简单。'
  },
  completeAdder: {
    title: '完整加法器演示',
    subtitle: '从逻辑门到多位加法 -- 层层抽象，逐级封装',
    layers: {
      gates: '逻辑门',
      half: '半加器',
      full: '全加器',
      multi: '多位加法'
    },
    coreIdeaLabel: '核心思想：',
    inputA: '输入 A',
    inputB: '输入 B',
    sum: '本位',
    carry: '进位',
    overflow: '溢出',
    calcTitle: '计算过程',
    inputLabel: '输入：',
    sumLabel: '本位：',
    carryLabel: '进位：',
    middleLabel: '中间：',
    processLabel: '过程：',
    resultLabel: '结果：',
    intermediate: '中间值',
    processText: '从第 0 位开始，逐位计算本位和进位，进位向高位传递',
    different: '不同',
    same: '相同',
    allOne: '全为 1',
    notAllOne: '不全为 1',
    bitLabel: '位{bit}',
    gateNames: {
      and: '与门',
      or: '或门',
      xor: '异或门',
      not: '非门'
    },
    gates: {
      title: '第一层：逻辑门',
      desc: '最基础的运算单元，每个门执行一种布尔运算',
      terms: [
        { name: 'AND (与门)', desc: '全 1 为 1' },
        { name: 'OR (或门)', desc: '有 1 为 1' },
        { name: 'XOR (异或门)', desc: '不同为 1' }
      ],
      items: [
        {
          name: 'AND (与门)',
          symbol: '&',
          formula: 'A AND B',
          truth: [0, 0, 0, 1]
        },
        {
          name: 'OR (或门)',
          symbol: '>=1',
          formula: 'A OR B',
          truth: [0, 1, 1, 1]
        },
        {
          name: 'XOR (异或门)',
          symbol: '=1',
          formula: 'A XOR B',
          truth: [0, 1, 1, 0]
        },
        {
          name: 'NOT (非门)',
          symbol: '1',
          formula: 'NOT A',
          truth: [1, 0]
        }
      ],
      coreIdea:
        '逻辑门把电压高低（0/1）变成布尔运算（真/假），是硬件实现数学的起点。'
    },
    half: {
      title: '第二层：半加器',
      desc: '用 XOR + AND 组合，实现 1 位加法（无进位输入）',
      terms: [
        { name: '本位 (Sum)', desc: '当前位的计算结果，不考虑外部进位' },
        { name: '进位 (Carry)', desc: '当两位都是 1 时，向更高位"借位"' }
      ],
      xorDesc: '不同为 1 -> 本位',
      andDesc: '全 1 为 1 -> 进位',
      coreIdea:
        '半加器用 XOR 算"本位和"，用 AND 算"进位"。它是最小的加法单元，但无法处理来自低位的进位。'
    },
    full: {
      title: '第三层：全加器',
      desc: '用两个半加器 + OR 门，处理进位输入',
      terms: [
        { name: 'Cin (进位输入)', desc: '来自低位的进位信号' },
        { name: 'Sum (本位)', desc: '三位异或的结果' },
        { name: 'Cout (进位输出)', desc: '向高位的进位信号' }
      ],
      coreIdea:
        '全加器 = 两个半加器 + 一个 OR 门。它能处理来自低位的进位，是构建多位加法器的基础。'
    },
    multi: {
      title: '第四层：4 位加法器',
      desc: '4 个全加器级联，实现 0-15 范围的加法',
      terms: [
        { name: '级联', desc: '低位 Cout 连接高位 Cin' },
        { name: '行波', desc: '进位像波浪一样逐位传递' },
        { name: '溢出', desc: '最高位产生进位' }
      ],
      coreIdea:
        '进位从最低位"波纹式"传递到最高位，这就是"行波进位加法器"。位数越多，延迟越大。'
    },
    summaryTitle: '抽象层级总结',
    summaryItems: [
      { icon: '◇', name: '逻辑门' },
      { icon: '⊞', name: '半加器' },
      { icon: '⊞⊞', name: '全加器' },
      { icon: '[]', name: '多位加法器' },
      { icon: 'CPU', name: 'ALU/CPU' }
    ]
  },
  languageMap: {
    title: '编程语言图谱',
    subtitle: '演化历程 · 编程范式 · 类型系统 · 语言对比',
    tabs: [
      { id: 'timeline', label: '演化历程' },
      { id: 'paradigms', label: '编程范式' },
      { id: 'compare', label: '语言对比' },
      { id: 'choose', label: '如何选择' }
    ],
    representativeLanguages: '代表语言：',
    compareIntro: '点击语言名称高亮对比',
    table: {
      language: '语言',
      typeSystem: '类型系统',
      paradigm: '范式',
      runtime: '运行方式',
      usage: '主要用途'
    },
    learningPathTitle: '学习路线建议',
    coreIdeaLabel: '核心思想：',
    coreIdeas: {
      timeline:
        '编程语言从机器语言到现代高级语言，一直在朝着"更接近人类思维"的方向演化。',
      paradigms:
        '编程范式是思考问题的方式--命令式关注"怎么做"，声明式关注"做什么"，选择范式比选语言更重要。',
      compare:
        '没有最好的语言，只有最适合场景的语言。类型系统、运行方式、生态都是选择时的关键考量。',
      choose:
        '初学者先学 Python（简单通用），再学 JavaScript（Web 必备），最后选一门静态语言（TypeScript/Go/Rust）深入。'
    },
    eras: [
      {
        year: '1940s',
        name: '机器语言',
        languages: ['二进制'],
        desc: '直接用 0 和 1 编写指令，计算机可以直接执行。人类极难阅读和维护。',
        milestones: [
          {
            lang: '机器码',
            significance: '最底层的编程方式，一个 0 写成 1 就全错'
          }
        ]
      },
      {
        year: '1950s',
        name: '汇编 & 早期高级语言',
        languages: ['汇编', 'Fortran', 'Lisp', 'COBOL'],
        desc: '用助记符代替 0/1，Fortran 开创高级语言时代，Lisp 奠定函数式编程基础。',
        milestones: [
          { lang: 'Fortran', significance: '第一个高级语言，科学计算之王' },
          { lang: 'Lisp', significance: '函数式编程鼻祖，影响至今' }
        ]
      },
      {
        year: '1970s',
        name: '系统编程时代',
        languages: ['C', 'Pascal', 'Smalltalk'],
        desc: 'C 语言诞生，用它写了 Unix 操作系统，开创了系统编程时代。',
        milestones: [
          { lang: 'C', significance: '影响最深远的语言，Unix/Linux 的基础' },
          { lang: 'Smalltalk', significance: '面向对象编程的先驱' }
        ]
      },
      {
        year: '1980-90s',
        name: 'OOP & 互联网',
        languages: ['C++', 'Java', 'Python', 'JavaScript'],
        desc: '面向对象成为主流，Java"一次编写到处运行"，JavaScript 统治了浏览器。',
        milestones: [
          { lang: 'Java', significance: '跨平台企业应用，JVM 生态' },
          { lang: 'JavaScript', significance: 'Web 前端的唯一选择' },
          { lang: 'Python', significance: '简洁优雅，后来成为 AI 之王' }
        ]
      },
      {
        year: '2000s',
        name: '现代语言',
        languages: ['C#', 'Go', 'Scala', 'Ruby'],
        desc: '语言设计更注重开发效率和安全性，Go 为云原生而生。',
        milestones: [
          { lang: 'Go', significance: '并发友好，Docker/K8s 的实现语言' },
          { lang: 'Ruby', significance: 'Rails 框架带来 Web 开发效率革命' }
        ]
      },
      {
        year: '2010s+',
        name: '新一代语言',
        languages: ['Rust', 'Swift', 'Kotlin', 'TypeScript'],
        desc: '强调内存安全（Rust）、类型安全（TypeScript）和开发体验。',
        milestones: [
          { lang: 'Rust', significance: '无 GC 的内存安全，系统编程新选择' },
          { lang: 'TypeScript', significance: '给 JavaScript 加上类型系统' },
          { lang: 'Kotlin', significance: '取代 Java 成为 Android 首选' }
        ]
      }
    ],
    paradigms: [
      {
        id: 'imperative',
        name: '命令式',
        icon: '📝',
        oneLiner: '告诉计算机"怎么做"',
        desc: '通过一条条语句改变程序状态，按步骤描述解决问题的过程。最接近计算机实际执行方式。',
        languages: ['C', 'Fortran', 'BASIC', 'Go'],
        example: `// 计算数组总和（命令式）
int sum = 0;
for (int i = 0; i < n; i++) {
    sum += arr[i];  // 逐步累加
}`,
        traits: ['关注步骤', '状态可变', '接近底层', '易理解']
      },
      {
        id: 'oop',
        name: '面向对象',
        icon: '📦',
        oneLiner: '把数据和行为封装在对象中',
        desc: '用"类"和"对象"模拟现实世界，通过封装、继承、多态组织代码。适合大型软件。',
        languages: ['Java', 'C++', 'Python', 'C#'],
        example: `class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says woof!")

dog = Dog("Buddy")
dog.bark()  # Buddy says woof!`,
        traits: ['封装', '继承', '多态', '适合大型项目']
      },
      {
        id: 'functional',
        name: '函数式',
        icon: '🔗',
        oneLiner: '用纯函数组合解决问题',
        desc: '将计算视为函数求值，数据不可变，没有副作用。代码更容易测试和推理。',
        languages: ['Haskell', 'Lisp', 'Erlang', 'F#'],
        example: `-- 计算数组总和（函数式）
sum = foldl (+) 0

-- 数据不可变，函数无副作用
map (*2) [1, 2, 3]  -- [2, 4, 6]
filter even [1..10]  -- [2, 4, 6, 8, 10]`,
        traits: ['纯函数', '不可变数据', '无副作用', '易测试']
      },
      {
        id: 'declarative',
        name: '声明式',
        icon: '🎯',
        oneLiner: '只说"做什么"，不管"怎么做"',
        desc: '描述想要的结果，具体执行方式由系统决定。SQL、HTML 都是典型的声明式。',
        languages: ['SQL', 'HTML', 'CSS', 'Prolog'],
        example: `-- 查询所有活跃用户（声明式）
SELECT name, email
FROM users
WHERE active = true
ORDER BY created_at DESC
-- 数据库自己决定怎么查最快`,
        traits: ['描述结果', '系统优化执行', '简洁表达', '领域专用']
      }
    ],
    languageComparison: [
      {
        name: 'Python',
        type: '动态强类型',
        typeClass: 'dynamic-strong',
        paradigm: '多范式',
        runtime: '解释执行',
        usage: 'AI、数据分析、Web 后端'
      },
      {
        name: 'JavaScript',
        type: '动态弱类型',
        typeClass: 'dynamic-weak',
        paradigm: '多范式',
        runtime: 'JIT 编译',
        usage: 'Web 全栈、跨端应用'
      },
      {
        name: 'TypeScript',
        type: '静态强类型',
        typeClass: 'static-strong',
        paradigm: '多范式',
        runtime: '编译为 JS',
        usage: 'Web 前端、Node.js'
      },
      {
        name: 'Java',
        type: '静态强类型',
        typeClass: 'static-strong',
        paradigm: '面向对象',
        runtime: 'JVM',
        usage: '企业应用、Android'
      },
      {
        name: 'C/C++',
        type: '静态弱类型',
        typeClass: 'static-weak',
        paradigm: '多范式',
        runtime: '编译执行',
        usage: '系统、游戏、嵌入式'
      },
      {
        name: 'Rust',
        type: '静态强类型',
        typeClass: 'static-strong',
        paradigm: '多范式',
        runtime: '编译执行',
        usage: '系统编程、WebAssembly'
      },
      {
        name: 'Go',
        type: '静态强类型',
        typeClass: 'static-strong',
        paradigm: '并发导向',
        runtime: '编译执行',
        usage: '云原生、微服务'
      },
      {
        name: 'Swift',
        type: '静态强类型',
        typeClass: 'static-strong',
        paradigm: '多范式',
        runtime: '编译执行',
        usage: 'iOS/macOS 开发'
      },
      {
        name: 'Kotlin',
        type: '静态强类型',
        typeClass: 'static-strong',
        paradigm: '多范式',
        runtime: 'JVM',
        usage: 'Android、后端'
      }
    ],
    recommendations: [
      {
        icon: '🌐',
        scene: 'Web 前端',
        langs: ['JavaScript', 'TypeScript'],
        reason: '浏览器原生支持 JS，TS 是 JS + 类型系统'
      },
      {
        icon: '🖥️',
        scene: 'Web 后端',
        langs: ['Go', 'Java', 'Python', 'Node.js'],
        reason: '生态成熟，框架丰富'
      },
      {
        icon: '📱',
        scene: '移动开发',
        langs: ['Swift', 'Kotlin'],
        reason: 'Apple 和 Google 官方推荐'
      },
      {
        icon: '🤖',
        scene: 'AI / 数据',
        langs: ['Python'],
        reason: 'PyTorch、TensorFlow、Pandas 全在 Python'
      },
      {
        icon: '⚙️',
        scene: '系统编程',
        langs: ['C', 'Rust'],
        reason: '直接操控硬件，性能极致'
      },
      {
        icon: '☁️',
        scene: '云原生',
        langs: ['Go', 'Rust'],
        reason: 'Docker、K8s 都是 Go 写的'
      },
      {
        icon: '🎮',
        scene: '游戏开发',
        langs: ['C++', 'C#'],
        reason: 'Unreal 用 C++，Unity 用 C#'
      },
      {
        icon: '📊',
        scene: 'DevOps 脚本',
        langs: ['Python', 'Bash'],
        reason: '快速编写自动化脚本'
      }
    ],
    learningPath: [
      { lang: 'Python', why: '语法最简单，覆盖面最广（AI、Web、脚本）' },
      { lang: 'JavaScript', why: 'Web 开发必备，前后端通吃（Node.js）' },
      { lang: 'TypeScript', why: '给 JS 加上类型系统，体验静态类型的好处' },
      { lang: 'Go 或 Rust', why: '理解编译型语言和底层概念' }
    ]
  },
  operatingSystems: {
    principleLabel: '💡 原理：',
    osArchitecture: {
      appLayer: '📱 应用程序',
      osLayer: '🖥️ 操作系统',
      hardwareLayer: '💾 硬件',
      requestPacket: '📦 请求',
      instructionPacket: '⚡ 指令',
      memory: '💾 内存',
      disk: '💿 硬盘',
      coreItems: ['调度CPU', '分配内存', '管理文件'],
      statusTexts: [
        '应用程序准备发起请求...',
        '应用程序：我要播放音乐！',
        '请求发送给操作系统...',
        '操作系统正在协调资源...',
        '指令下发到硬件...',
        '硬件开始执行：音乐播放中 🎵'
      ]
    },
    process: {
      title: '⏱️ CPU 在疯狂切换，你感觉不出来',
      timeSlice: '时间片: {time}ms',
      running: '运行中',
      done: '完成',
      waiting: '等待',
      processes: [
        { id: 1, name: '微信', icon: '💬' },
        { id: 2, name: '音乐', icon: '🎵' },
        { id: 3, name: '浏览器', icon: '🌐' }
      ],
      explain:
        'CPU 每 {sliceTime}ms 切换一次进程，因为太快了你感觉是"同时运行"。实际上每个进程都在断断续续地执行。'
    },
    memory: {
      title: '🧠 操作系统给每个程序"画饼"',
      virtualTitle: '📱 程序以为的内存（虚拟）',
      physicalTitle: '💾 真实的内存条（物理）',
      mappingTitle: '操作系统偷偷映射 ↓',
      wechat: '💬 微信',
      game: '🎮 游戏',
      systemLabel: '系统',
      mappingWechat: '微信-{index}',
      mappingGame: '游戏-{index}',
      physicalBlock: '物理-{index}',
      explain:
        '每个程序以为自己独占连续的内存（左），实际上操作系统把数据分散存到真实内存各处（右）。程序看到的地址都是"假"的，操作系统负责翻译。'
    },
    filesystem: {
      title: '📁 你看到的文件 vs 硬盘上的碎片',
      folderView: '📂 你看到的（文件夹）',
      diskView: '💾 硬盘实际存储（数据块）',
      photosFolder: '照片',
      petFile: '宠物.jpg',
      tripFile: '旅游.png',
      reading: '正在读取...',
      blockContents: {
        pet1: '宠-1',
        pet2: '宠-2',
        pet3: '宠-3',
        trip1: '旅-1',
        trip2: '旅-2'
      },
      explain:
        '文件系统把文件切成碎片存在硬盘各处（如宠物.jpg存在第3、7、11块），然后用"账本"记录位置。你看到的整齐文件夹只是账本上的记录。'
    },
    programLaunch: {
      title: '🚀 双击图标后，电脑在忙什么？',
      steps: [
        {
          icon: '👆',
          title: '你双击图标',
          desc: '操作系统收到"启动浏览器"的请求'
        },
        {
          icon: '📋',
          title: '创建进程',
          desc: '建立"户口本"，记录进程ID和状态'
        },
        {
          icon: '🧠',
          title: '分配内存',
          desc: '划分虚拟内存空间，让程序以为独占内存'
        },
        {
          icon: '📁',
          title: '加载文件',
          desc: '从硬盘读取程序代码到内存'
        },
        {
          icon: '▶️',
          title: '开始运行',
          desc: 'CPU开始执行，窗口出现在屏幕上！'
        }
      ],
      vizStates: [
        { icon: '🖱️', text: '点击中...' },
        { icon: '📋', text: '创建进程...' },
        { icon: '💾', text: '分配内存...' },
        { icon: '💿', text: '读取文件...' },
        { icon: '🖥️', text: '运行中！' }
      ]
    }
  },
  register: {
    title: 'CPU 寄存器组',
    subtitle: 'CPU 内部的高速存储单元',
    specialTitle: '专用寄存器 (Special Registers)',
    generalTitle: '通用寄存器 (General Purpose Registers)',
    flagsTitle: '程序状态字 (PSW / FLAGS)',
    registerSuffix: '寄存器',
    comparisonTitle: '寄存器 vs 内存',
    comparisonHeaders: ['特性', '寄存器', '内存 (RAM)'],
    comparisonRows: [
      ['位置', 'CPU 内部', 'CPU 外部'],
      ['访问速度', '最快 (< 1ns)', '较慢 (50-100ns)'],
      ['容量', '极小 (Bytes)', '大 (GB)'],
      ['作用', '暂存指令/操作数/结果', '存储程序和数据']
    ],
    specialRegisters: [
      {
        name: 'PC',
        value: '0x00401000',
        desc: '程序计数器',
        type: '专用寄存器',
        detail:
          'Program Counter，存放下一条要执行的指令地址。每执行一条指令，PC 自动加 4（32位）或 8（64位），指向下一条指令。'
      },
      {
        name: 'IR',
        value: '0x8B450008',
        desc: '指令寄存器',
        type: '专用寄存器',
        detail:
          'Instruction Register，存放当前正在执行的指令。CPU 从内存取指令后，先存入 IR，再送入译码器进行解析。'
      },
      {
        name: 'MAR',
        value: '0x00401000',
        desc: '内存地址寄存器',
        type: '专用寄存器',
        detail:
          'Memory Address Register，存放要访问的内存地址。CPU 通过它向地址总线发送内存位置。'
      },
      {
        name: 'MDR',
        value: '0x00000000',
        desc: '内存数据寄存器',
        type: '专用寄存器',
        detail:
          'Memory Data Register，临时存放要写入或从内存读取的数据。是 CPU 与内存交换数据的桥梁。'
      },
      {
        name: 'ACC',
        value: '0x0000001A',
        desc: '累加器',
        type: '专用寄存器',
        detail:
          'Accumulator，传统 CPU 中最重要的寄存器，用于存放算术运算和逻辑运算的中间结果。'
      }
    ],
    generalRegisters: [
      {
        name: 'RAX',
        value: '0x00000000',
        desc: '返回值',
        type: '通用寄存器',
        detail:
          '64位寄存器，用于存放函数返回值。低32位为 EAX，低16位为 AX，低8位为 AL。'
      },
      {
        name: 'RBX',
        value: '0x00000000',
        desc: '基址寄存器',
        type: '通用寄存器',
        detail: '64位通用寄存器，可用于存放数据或内存地址。'
      },
      {
        name: 'RCX',
        value: '0x00000000',
        desc: '计数寄存器',
        type: '通用寄存器',
        detail: '64位通用寄存器，常用于循环计数。低32位为 ECX。'
      },
      {
        name: 'RDX',
        value: '0x00000000',
        desc: '数据寄存器',
        type: '通用寄存器',
        detail: '64位通用寄存器，用于存放数据，也用于乘除法指令。'
      },
      {
        name: 'RSI',
        value: '0x00000000',
        desc: '源索引',
        type: '通用寄存器',
        detail: 'Source Index，字符串操作中作为源地址指针。'
      },
      {
        name: 'RDI',
        value: '0x00000000',
        desc: '目标索引',
        type: '通用寄存器',
        detail: 'Destination Index，字符串操作中作为目标地址指针。'
      },
      {
        name: 'RBP',
        value: '0x00000000',
        desc: '栈帧指针',
        type: '通用寄存器',
        detail: 'Base Pointer，指向函数栈帧的基址，用于访问局部变量和函数参数。'
      },
      {
        name: 'RSP',
        value: '0x7FFDE000',
        desc: '栈指针',
        type: '通用寄存器',
        detail: 'Stack Pointer，指向当前栈顶位置。Push 操作减 4，Pop 操作加 4。'
      }
    ],
    statusFlags: [
      { name: 'CF', value: 0, desc: '进位标志' },
      { name: 'PF', value: 0, desc: '奇偶标志' },
      { name: 'AF', value: 0, desc: '辅助进位' },
      { name: 'ZF', value: 0, desc: '零标志' },
      { name: 'SF', value: 0, desc: '符号标志' },
      { name: 'OF', value: 0, desc: '溢出标志' }
    ]
  },
  flipFlop: {
    title: '从触发器到寄存器：记忆的闭环机制',
    desc: '试着改变数据并观察，没有时钟信号的允许，输出重新反馈回输入端的"闭环"长久保护了记忆。',
    dataInput: '数据总线 (Data Input)',
    gate: '大门',
    registerState: '4位寄存器 (存储状态)',
    controlCenter: '控制中心',
    clockButton: '发送时钟脉冲 (Clock)',
    statusPulsing: '脉冲到达！突破闭环防线，正并行读入新数据...',
    statusIdle: '尝试改变左侧输入，闭环保护期间寄存器值无法更改。',
    statusReady: '准备写入新数据，请点击"发送时钟脉冲"打破锁死。',
    statusSame: '输入总线与当前存储状态相同。',
    statusPending: '闭环重新生效，但还有未写入的新数据？',
    statusSaved: '脉冲消退。反馈闭环恢复，当前状态被长久稳固保存。'
  },
  functionalUnit: {
    label: '常见功能单元 -- 切换不同模块，查看其实际工作原理',
    tabs: [
      { id: 'mux', name: '多路选择器 (MUX)' },
      { id: 'decoder', name: '译码器 (Decoder)' }
    ],
    mux: {
      desc: '多路选择器 (MUX)：像铁路道岔一样，根据"选择信号"决定让哪一路数据通过。',
      data0: '数据 0 (D0)',
      data1: '数据 1 (D1)',
      select: '选择 (Sel)',
      output: '输出 (Out)',
      explain: '当前选择信号为 {sel}，因此输出等于 数据 {data} 的值：{result}'
    },
    decoder: {
      desc: '译码器 (Decoder)：将二进制输入转换为特定输出线的激活信号（例如 2位输入可以激活 4根输出线中的一根）。',
      highBit: 'A1 (高位)',
      lowBit: 'A0 (低位)',
      chip: '2-to-4\n译码器',
      outputLabels: [
        'Y0 (当输入 00 时)',
        'Y1 (当输入 01 时)',
        'Y2 (当输入 10 时)',
        'Y3 (当输入 11 时)'
      ],
      explain:
        '当前输入为二进制的 {binary} (十进制 {decimal})，因此只有 Y{decimal} 被激活（输出 1）。'
    }
  },
  minCpu: {
    title: 'CPU 内部微架构剖析',
    subtitle: '点击下方各个模块，查看其内部由哪些子电路构成以及工作原理',
    chipTitle: 'CPU 核心 (Central Processing Unit)',
    addressBus: '地址总线 (Address Bus)',
    dataBus: '数据总线 (Data Bus)',
    controlUnit: '控制单元 (Control Unit)',
    programCounter: '程序计数器 (PC)',
    instructionRegister: '指令寄存器 (IR)',
    instructionDecoder: '指令译码器',
    clock: '时钟发生器',
    controlLines: '控制信号线 ↓',
    registerFile: '寄存器组 (Register File)',
    generalRegisters: '通用寄存器 R0-R3',
    accumulator: '累加器 (ACC)',
    alu: '算术逻辑单元 (ALU)',
    adder: '加法器电路',
    flags: '状态标志 (Flags)',
    controlBus: '控制总线 (Control Bus)',
    subCircuitTitle: '底层子电路实现：',
    empty: '点击左侧 CPU 内部结构图的各个模块，深入探索其微观电路实现。',
    modules: {
      alu: {
        title: '算术逻辑单元 (ALU)',
        description:
          'ALU 是 CPU 中负责进行数学运算（加减法）和逻辑运算（与、或、非、异或）的核心引擎。所有的高级数学计算最终都会被分解为 ALU 能够执行的这些基础操作。',
        subCircuit:
          '由海量的逻辑门组成。核心是半加器和全加器的级联（如行波进位加法器或超前进位加法器），并结合多路选择器（MUX）来决定当前是输出加法结果还是某种逻辑运算结果。'
      },
      adder: {
        title: '加法器电路 (Adder)',
        description: '负责执行二进制加法。',
        subCircuit:
          '底层由异或门（XOR）负责本位相加，与门（AND）和或门（OR）负责产生对高位的进位信号。几十个全加器串联即可实现 32/64 位数的加法。'
      },
      flags: {
        title: '状态标志寄存器 (Flags)',
        description:
          '记录上一次 ALU 运算的“副作用”特征，例如结果是否为零（Z）、是否产生进位（C）、符号是正还是负（S）、是否溢出（O）。它是实现 `if/else` 等条件跳转指令的核心物理依据。',
        subCircuit:
          '一组特定的触发器（Flip-Flops），每个触发器通过逻辑门直接连接在 ALU 的输出端电路上。'
      },
      reg: {
        title: '寄存器组 (Register File)',
        description:
          'CPU 内部的高速“草稿本”。由于直接嵌在指令执行的数据通路中，其读写速度和 CPU 主频几乎一致。用来暂存 ALU 需要的输入数据和刚刚算出的输出结果。',
        subCircuit:
          '本质上是由成千上万个 D 型触发器（D Flip-Flop）按位宽（如 64 位）并列组合而成。配合多路选择器和地址译码电路，实现对特定“草稿本”的数据寻址读写。'
      },
      cu: {
        title: '控制单元 (Control Unit, CU)',
        description:
          '整个 CPU 的“大脑和总指挥”。它并不直接参与运算，而是负责从内存读取指令，翻译指令，并像“拉线木偶”一样向全芯片发出各种导通和关断电信号，指挥其余部件开始工作。',
        subCircuit:
          '通常存在有限状态机（FSM）或微程序的实现方式。本质上是一组庞大复杂的逻辑门网络和触发器组合，将输入的二进制指令（如 0x01）映射为激活对应模块的控制电平。'
      },
      pc: {
        title: '程序计数器 (Program Counter, PC)',
        description:
          '永远指向“下一条要执行的指令”在内存中的具体地址。每次成功执行完一条指令，它就会自动递增。当程序发生函数调用或循环跳转时，它的值会被强行改写。',
        subCircuit:
          '一个带有“自增电路（Incrementer）”的寄存器。通过内部的简单半加器加上时钟脉冲边界的触发来同步更新地址值。'
      },
      ir: {
        title: '指令寄存器 (Instruction Register, IR)',
        description:
          '暂存刚刚从内存中读出、当前正在处于“译码”阶段的那条二进制机器指令。',
        subCircuit:
          '同样是一排带写使能（Write-Enable）控制端的触发器（Flip-Flop），在"取指"周期时，写使能为1，锁存进指令数据。'
      },
      decoder: {
        title: '指令译码器 (Instruction Decoder)',
        description:
          '负责破译 IR 中的一长串 0 和 1 到底是什么意思。把二进制的机器码切分成“操作码”（做什么，如做加法）和“操作数”（对谁做，如寻址寄存器）。',
        subCircuit:
          '由大量的与门和非门组成的组合电路网络。比如输入操作码 0010，只有代表“ADD操作”的那根特定输出管脚会被置 1，其他管脚保持 0。'
      },
      clock: {
        title: '时钟发生器 (Clock)',
        description:
          'CPU 的心脏节拍器。发出持续的方波信号，同步全系统各个部件的工作节奏。每一次时钟波形的上升沿，所有的触发器才会统一改变锁存状态（即节拍）。',
        subCircuit:
          '外部主板上的石英晶振产生极准的基础震荡信号，结合 CPU 内部的锁相环（PLL）倍频电路生成极高频率的脉冲方波。'
      },
      address_bus: {
        title: '地址总线 (Address Bus)',
        description:
          '单向传输总线。CPU 通过这组电线，将它想访问的内存单元或 I/O 设备地址发送出去。地址总线的宽度决定了 CPU 最大能寻址多少内存（比如 32 位地址总线最多覆盖 4GB 寻址）。',
        subCircuit:
          '物理上就是一块芯片引出的几十根极其细微的平行导线。通常受到三态门缓冲器（Tri-state Buffer）所驱动。'
      },
      data_bus: {
        title: '数据总线 (Data Bus)',
        description:
          '双向传输总线。在这组电线上，数据可以从 CPU 流向内存，也可以从内存流回 CPU。它的宽度就是我们平常所说的 32位/64位 处理器一次性处理的数据通路宽度。',
        subCircuit:
          '同样是平行的导电线路，但两端接有方向控制引脚的三态门，确保不会由于多方同时施加高低电平导致设备短路。'
      },
      control_bus: {
        title: '控制总线 (Control Bus)',
        description:
          '混合传输总线，承载各种不同类型的核心控制信号：例如“我要读(Read)”、“我要写(Write)”、“外设的中断请求”、“等待反馈”等。',
        subCircuit:
          '每一条线路一般都有单独而明确的功能分配，直接由控制单元（CU）的逻辑组合端引出，连接并支配外部的所有硬件。'
      }
    }
  },
  algorithmThinking: {
    algorithm: {
      title: '算法思维：解决问题的方法',
      subtitle: '不同策略解决不同类型的问题',
      tabs: [
        { id: 'binary', name: '二分查找', desc: '每次排除一半，O(log n)' },
        { id: 'sort', name: '排序', desc: '将无序变有序' },
        { id: 'recursion', name: '递归', desc: '自己调用自己' },
        { id: 'greedy', name: '贪心', desc: '每步选最优' }
      ],
      searchLabel: '在有序数组中查找：',
      numberPlaceholder: '输入数字',
      searchButton: '查找',
      resetArray: '重置数组',
      startSort: '开始排序',
      fibPrefix: '计算斐波那契数列第',
      fibSuffix: '项',
      calculate: '计算',
      recursionTrace: '递归调用过程',
      moreCalls: '... 共 {count} 次调用',
      coinChangeDesc: '硬币找零问题：用最少的硬币凑出指定金额',
      targetAmount: '目标金额：',
      availableCoins: '可用硬币：{coins} 元',
      changePlan: '找零方案：',
      coinUnit: '{value}元',
      coinCount: '共 {count} 枚硬币',
      complexityTitle: '时间复杂度速查',
      coreIdeaLabel: '核心思想：',
      coreIdea:
        '算法是解决问题的方法。好的算法能让程序效率提升几个数量级。理解算法思维，比记住具体算法更重要。',
      searchStep: {
        range: '查找范围 [{left}, {right}]，中间位置 {mid}，值 {value}',
        found: '找到目标 {target} 在位置 {mid}',
        right: '{value} < {target}，在右半部分继续查找',
        left: '{value} > {target}，在左半部分继续查找',
        notFound: '未找到目标 {target}'
      },
      sortStatus: {
        initial: '点击"开始排序"观察冒泡排序过程',
        reset: '数组已重置',
        compare: '比较 {a} 和 {b}',
        swap: '交换 {a} 和 {b}',
        done: '排序完成！'
      },
      complexities: [
        {
          name: 'O(1)',
          value: '常数',
          desc: '最优，如数组访问',
          class: 'good'
        },
        {
          name: 'O(log n)',
          value: '对数',
          desc: '很好，如二分查找',
          class: 'good'
        },
        { name: 'O(n)', value: '线性', desc: '一般，如遍历', class: 'mid' },
        {
          name: 'O(n log n)',
          value: '线性对数',
          desc: '可接受，如快速排序',
          class: 'mid'
        },
        {
          name: 'O(n²)',
          value: '平方',
          desc: '较慢，如冒泡排序',
          class: 'bad'
        },
        { name: 'O(2ⁿ)', value: '指数', desc: '很慢，如暴力递归', class: 'bad' }
      ]
    },
    search: {
      title: '查找算法',
      subtitle: '如何在数据中找到目标',
      linearTab: '顺序查找',
      binaryTab: '二分查找',
      linearTitle: '顺序查找：一个一个找',
      binaryTitle: '二分查找：每次排除一半',
      startSearch: '开始查找',
      reset: '重置',
      targetNumber: '目标数字：',
      timeComplexity: '时间复杂度：{value}',
      linearUse: '适用：无序数组',
      binaryUse: '适用：有序数组',
      range: '查找范围：[{left}, {right}]',
      middle: '中间位置：{mid}',
      nextStep: '下一步',
      comparisonTitle: '性能对比',
      dataSize: '数据量',
      atMostTimes: '最多 {count} 次'
    },
    sorting: {
      title: '排序算法',
      subtitle: '把数据按顺序排列',
      generateArray: '生成新数组',
      bubbleSort: '冒泡排序',
      quickSort: '快速排序',
      timeComplexity: '时间复杂度：{value}',
      comparisonTitle: '算法对比',
      algorithm: '算法',
      averageTime: '平均时间',
      worstTime: '最坏时间',
      space: '空间',
      stable: '稳定',
      initialAlgo: '请选择排序算法',
      initialDesc: '选择一个排序算法开始演示',
      bubbleDesc: '重复遍历数组，比较相邻元素并交换',
      quickDesc: '选择基准，将数组分成小于和大于基准的两部分',
      comparisonRows: [
        {
          name: '冒泡排序',
          average: 'O(n²)',
          worst: 'O(n²)',
          space: 'O(1)',
          stable: '✓'
        },
        {
          name: '快速排序',
          average: 'O(n log n)',
          worst: 'O(n²)',
          space: 'O(log n)',
          stable: '✗'
        },
        {
          name: '归并排序',
          average: 'O(n log n)',
          worst: 'O(n log n)',
          space: 'O(n)',
          stable: '✓'
        },
        {
          name: '插入排序',
          average: 'O(n²)',
          worst: 'O(n²)',
          space: 'O(1)',
          stable: '✓'
        }
      ]
    },
    recursive: {
      title: '递归思维：自己调用自己',
      subtitle: '把大问题分解成相同的小问题',
      analogyTitle: '俄罗斯套娃',
      analogyLine1: '打开一个大娃娃，里面有个小一点的娃娃',
      analogyLine2: '再打开还有更小的...直到最小的一个',
      analogyStrong: '这就是递归！',
      examplesTitle: '递归示例',
      examples: [
        { id: 'factorial', name: '阶乘', icon: '🔢' },
        { id: 'fibonacci', name: '斐波那契', icon: '🐚' },
        { id: 'directory', name: '目录遍历', icon: '📁' }
      ],
      factorialTitle: '阶乘：n! = n × (n-1)!',
      factorialBase: '1! = 1 (基准情况)',
      factorialReturns: [
        '↑ 返回 1',
        '↑ 返回 2 × 1 = 2',
        '↑ 返回 3 × 2 = 6',
        '↑ 返回 4 × 6 = 24',
        '↑ 返回 5 × 24 = 120'
      ],
      fibonacciTitle: '斐波那契数列',
      directoryTitle: '遍历文件目录',
      pseudocodeTitle: '伪代码',
      elementsTitle: '递归的三要素',
      elements: [
        {
          title: '基准情况',
          desc: '什么时候停止递归？必须有一个终止条件',
          example: '例：n! 中 1! = 1'
        },
        {
          title: '递归调用',
          desc: '如何让问题规模变小？调用自己处理更小的规模',
          example: '例：n! 转换成 (n-1)!'
        },
        {
          title: '返回结果',
          desc: '如何利用子问题的结果解决当前问题？',
          example: '例：n × (n-1)! 的结果'
        }
      ],
      prosTitle: '✓ 优点',
      consTitle: '✗ 缺点',
      pros: ['代码简洁优雅', '自然表达递归结构', '适合树和图的遍历'],
      cons: ['可能重复计算', '栈空间消耗大', '调试较困难']
    },
    greedy: {
      title: '贪心算法：每步都选当前最优',
      subtitle: '局部最优 → 全局最优?',
      ideaLine1Prefix: '贪心算法在每一步选择中都采取当前状态下',
      localBest: '最优',
      ideaLine1Suffix: '的选择',
      ideaLine2Prefix: '希望通过一系列局部最优选择达到',
      globalBest: '全局最优',
      scenarioTitle: '经典问题',
      scenarios: [
        { id: 'change', name: '找零钱', icon: '💰' },
        { id: 'activity', name: '活动选择', icon: '📅' },
        { id: 'shortest', name: '最短路径', icon: '🗺️' }
      ],
      changeTitle: '找零钱问题',
      changeAmount: '需要找零：{amount} 元',
      changeStep: '× {count} = {value}元',
      totalCoinsPrefix: '共需要',
      totalCoinsSuffix: '个硬币',
      changeNote1: '✓ 贪心策略：每次选择面值最大的硬币',
      changeNote2: '✓ 适用于人民币、美元等货币系统',
      activityTitle: '活动选择问题',
      activityRulePrefix: '贪心策略：',
      activityRuleStrong: '选择最早结束',
      activityRuleSuffix: '的活动',
      selectedPrefix: '最多可以参加',
      selectedSuffix: '个活动',
      shortestTitle: '最短路径问题 (Dijkstra)',
      startNode: 'A(起点)',
      endNode: 'E(终点)',
      pathStep: '从 A 出发，选择距离最近的节点',
      pathDistance: '总距离：2 + 1 + 2 = 5',
      comparisonTitle: '贪心 vs 动态规划',
      feature: '特点',
      greedyAlgorithm: '贪心算法',
      dynamicProgramming: '动态规划',
      changeSteps: [
        { coin: '20元', count: 1, value: 20 },
        { coin: '10元', count: 1, value: 10 },
        { coin: '5元', count: 1, value: 5 },
        { coin: '1元', count: 2, value: 2 }
      ],
      activities: [
        {
          start: '9:00',
          end: '10:00',
          name: '活动1',
          selected: true,
          conflicting: false
        },
        {
          start: '9:30',
          end: '11:30',
          name: '活动2',
          selected: false,
          conflicting: true
        },
        {
          start: '10:00',
          end: '11:00',
          name: '活动3',
          selected: true,
          conflicting: false
        },
        {
          start: '10:30',
          end: '12:00',
          name: '活动4',
          selected: false,
          conflicting: true
        },
        {
          start: '11:00',
          end: '12:00',
          name: '活动5',
          selected: true,
          conflicting: false
        }
      ],
      comparisonRows: [
        {
          feature: '决策方式',
          greedy: '每步选当前最优',
          dp: '考虑所有可能，选最优'
        },
        {
          feature: '最优性',
          greedy: '可能不是全局最优',
          dp: '保证全局最优'
        },
        {
          feature: '时间复杂度',
          greedy: 'O(n) 或 O(n log n)',
          dp: 'O(n²) 或更高'
        },
        {
          feature: '适用场景',
          greedy: '局部最优 → 全局最优',
          dp: '重叠子问题'
        }
      ],
      prosTitle: '✓ 优点',
      consTitle: '✗ 缺点',
      pros: ['实现简单', '效率高', '空间复杂度低'],
      cons: ['不保证全局最优', '适用范围有限', '需要证明最优性']
    },
    paradigm: {
      title: '算法设计范式',
      subtitle: '解决问题的常用套路',
      introPrefix: '算法设计范式是解决问题的',
      introStrong: '通用策略',
      introSuffix: '，掌握这些套路可以快速找到解题思路',
      coreIdea: '核心思想',
      scenarios: '适用场景',
      classicProblems: '经典问题',
      timeComplexity: '时间复杂度',
      comparisonTitle: '范式对比总结',
      paradigm: '范式',
      strategy: '核心策略',
      optimality: '最优性',
      useCase: '适用场景',
      guideTitle: '如何选择合适的范式？',
      paradigms: [
        {
          id: 'divide',
          name: '分治法',
          icon: '✂️',
          tagline: '分而治之',
          idea: '将大问题分解成多个小问题，递归解决小问题，最后合并结果',
          scenarios: ['数组排序', '矩阵乘法', '大整数运算'],
          problems: ['归并排序', '快速排序', '二分查找', 'Strassen 矩阵乘法'],
          complexity: 'O(n log n)',
          complexityNote: '通常比暴力法快很多'
        },
        {
          id: 'dynamic',
          name: '动态规划',
          icon: '📊',
          tagline: '保存结果避免重复',
          idea: '将问题分解为重叠子问题，保存子问题的解，避免重复计算',
          scenarios: ['最优解问题', '计数问题', '路径问题'],
          problems: ['斐波那契数列', '背包问题', '最长公共子序列', '最短路径'],
          complexity: 'O(n²) 或 O(n³)',
          complexityNote: '用空间换时间，比递归快'
        },
        {
          id: 'greedy',
          name: '贪心法',
          icon: '🎯',
          tagline: '局部最优',
          idea: '在每一步选择中都采取当前状态下最优的选择，希望达到全局最优',
          scenarios: ['优化问题', '调度问题', '图问题'],
          problems: ['找零钱', '活动选择', 'Huffman 编码', '最小生成树'],
          complexity: 'O(n log n)',
          complexityNote: '最快，但不一定最优'
        },
        {
          id: 'backtrack',
          name: '回溯法',
          icon: '🔙',
          tagline: '试错法',
          idea: '系统性地搜索解空间，遇到死路就回退到上一个分岔口',
          scenarios: ['组合问题', '排列问题', '约束满足'],
          problems: ['N 皇后问题', '数独', '全排列', '子集问题'],
          complexity: 'O(2ⁿ) 或 O(n!)',
          complexityNote: '指数级，适合小规模'
        }
      ],
      comparisonData: [
        {
          id: 'divide',
          name: '分治法',
          icon: '✂️',
          strategy: '分解 → 递归 → 合并',
          optimal: '保证最优',
          use: '问题可独立分解'
        },
        {
          id: 'dynamic',
          name: '动态规划',
          icon: '📊',
          strategy: '保存子问题解',
          optimal: '保证最优',
          use: '有重叠子问题'
        },
        {
          id: 'greedy',
          name: '贪心法',
          icon: '🎯',
          strategy: '每次选最优',
          optimal: '不一定最优',
          use: '局部最优 → 全局最优'
        },
        {
          id: 'backtrack',
          name: '回溯法',
          icon: '🔙',
          strategy: '深度优先搜索',
          optimal: '保证最优',
          use: '解空间小，需要穷举'
        }
      ],
      guideSteps: [
        {
          title: '分析问题特征',
          desc: '是否有重叠子问题？是否有最优子结构？'
        },
        {
          title: '判断是否需要最优解',
          desc: '贪心不一定最优，动态规划保证最优'
        },
        {
          title: '考虑数据规模',
          desc: '回溯适合小规模，分治适合大规模'
        }
      ]
    }
  },
  compilers: {
    lexer: {
      title: '🔤 词法分析器：把代码拆成 Token',
      desc: '输入一行代码，实时看到词法分析的结果',
      placeholder: '试试输入: let x = 10 + 5;',
      streamLabel: 'Token 流：',
      type: '类型',
      explanation: '说明',
      presets: [
        'let x = 10 + 5;',
        'if (a > b) { return a; }',
        'function add(a, b) { return a + b; }'
      ],
      tokenTypes: {
        number: { label: '数字', explain: '数值字面量' },
        keyword: { label: '关键字', explain: '语言保留字' },
        identifier: { label: '标识符', explain: '变量/函数名' },
        string: { label: '字符串', explain: '字符串字面量' },
        operatorArithmetic: { label: '运算符', explain: '算术运算' },
        operatorCompare: { label: '运算符', explain: '比较/赋值运算' },
        bracket: { label: '括号', explain: '分组/作用域' },
        punctuation: { label: '分隔符', explain: '语句/参数分隔' },
        unknown: { label: '未知', explain: '无法识别' }
      }
    },
    compileVsInterpret: {
      title: '🔄 编译型 vs 解释型 vs JIT',
      desc: '点击不同执行模式，观察代码从源码到运行的过程',
      examplesLabel: '代表语言：',
      modes: [
        {
          name: '编译型',
          steps: [
            { icon: '📝', name: '源代码', desc: 'main.c' },
            { icon: '⚙️', name: '编译器', desc: '全量编译' },
            { icon: '📦', name: '机器码', desc: '二进制可执行文件' },
            { icon: '🚀', name: '直接执行', desc: 'CPU 直接运行' }
          ],
          metrics: [
            { label: '运行速度', value: 95, text: '极快', color: '#22c55e' },
            {
              label: '启动速度',
              value: 30,
              text: '慢（需编译）',
              color: '#ef4444'
            },
            { label: '跨平台', value: 20, text: '需重新编译', color: '#ef4444' }
          ],
          langs: ['C', 'C++', 'Rust', 'Go']
        },
        {
          name: '解释型',
          steps: [
            { icon: '📝', name: '源代码', desc: 'app.py' },
            { icon: '🔍', name: '解释器', desc: '逐行读取' },
            { icon: '🔄', name: '逐行执行', desc: '边翻译边运行' }
          ],
          metrics: [
            { label: '运行速度', value: 30, text: '较慢', color: '#ef4444' },
            {
              label: '启动速度',
              value: 90,
              text: '快（直接运行）',
              color: '#22c55e'
            },
            { label: '跨平台', value: 90, text: '天然跨平台', color: '#22c55e' }
          ],
          langs: ['Python', 'Ruby', 'PHP', 'Bash']
        },
        {
          name: 'JIT 即时编译',
          steps: [
            { icon: '📝', name: '源代码', desc: 'app.js' },
            { icon: '🔍', name: '解释执行', desc: '先解释运行' },
            { icon: '🔥', name: '热点检测', desc: '发现高频代码' },
            { icon: '⚡', name: 'JIT 编译', desc: '编译为机器码' },
            { icon: '🚀', name: '高速执行', desc: '接近原生速度' }
          ],
          metrics: [
            {
              label: '运行速度',
              value: 75,
              text: '快（热点接近原生）',
              color: '#22c55e'
            },
            {
              label: '启动速度',
              value: 60,
              text: '中等（需预热）',
              color: '#eab308'
            },
            { label: '跨平台', value: 85, text: '跨平台', color: '#22c55e' }
          ],
          langs: ['JavaScript (V8)', 'Java (JVM)', 'C# (.NET)']
        }
      ]
    },
    practice: {
      title: '编译过程实践',
      subtitle: '从代码到可执行文件',
      inputTitle: '输入代码',
      placeholder: '输入 C 语言代码...',
      stepsTitle: '编译步骤',
      outputsTitle: '生成的文件',
      toolsTitle: '常用编译工具',
      steps: [
        {
          name: '预处理',
          command: 'gcc -E hello.c -o hello.i',
          output: '处理 #include，展开宏定义'
        },
        {
          name: '编译',
          command: 'gcc -S hello.i -o hello.s',
          output: '生成汇编代码'
        },
        {
          name: '汇编',
          command: 'gcc -c hello.s -o hello.o',
          output: '生成目标文件'
        },
        {
          name: '链接',
          command: 'gcc hello.o -o hello',
          output: '生成可执行文件'
        }
      ],
      outputFiles: [
        { name: 'hello.c', icon: '📄', desc: '源代码文件' },
        { name: 'hello.i', icon: '📝', desc: '预处理后的文件' },
        { name: 'hello.s', icon: '⚙️', desc: '汇编代码文件' },
        { name: 'hello.o', icon: '📦', desc: '目标文件' },
        { name: 'hello', icon: '🚀', desc: '可执行文件' }
      ],
      tools: [
        { name: 'GCC', desc: 'GNU Compiler Collection' },
        { name: 'Clang', desc: 'LLVM 的 C/C++ 编译器' },
        { name: 'MSVC', desc: 'Microsoft Visual C++' }
      ]
    },
    ast: {
      title: '🌳 AST 可视化：看见代码的"骨架"',
      desc: '选择一个表达式，观察它的抽象语法树结构',
      treeTitle: '语法树',
      explainTitle: '解析说明',
      toolTipPrefix: '💡 试试',
      toolTipSuffix: '— 在线查看任意代码的 AST',
      expressions: [
        {
          code: '1 + 2 * 3',
          tree: {
            type: 'BinaryExpression',
            value: '+',
            children: [
              { type: 'NumericLiteral', value: '1' },
              {
                type: 'BinaryExpression',
                value: '*',
                children: [
                  { type: 'NumericLiteral', value: '2' },
                  { type: 'NumericLiteral', value: '3' }
                ]
              }
            ]
          },
          explains: [
            '* 优先级高于 +，所以 2 * 3 先结合',
            '2 * 3 形成一个 BinaryExpression 子树',
            '1 和这个子树作为 + 的左右操作数',
            '最终 + 是根节点，体现了运算顺序'
          ]
        },
        {
          code: 'let x = 10',
          tree: {
            type: 'VariableDeclaration',
            value: 'let',
            children: [
              {
                type: 'VariableDeclarator',
                value: '',
                children: [
                  { type: 'Identifier', value: 'x' },
                  { type: 'NumericLiteral', value: '10' }
                ]
              }
            ]
          },
          explains: [
            'let 声明创建 VariableDeclaration 节点',
            '内部包含一个 VariableDeclarator（声明器）',
            '声明器左侧是标识符 x，右侧是初始值 10',
            '树结构清晰表达了"把 10 赋给 x"的语义'
          ]
        },
        {
          code: 'add(a, b)',
          tree: {
            type: 'CallExpression',
            value: '',
            children: [
              { type: 'Identifier', value: 'add' },
              {
                type: 'Arguments',
                value: '',
                children: [
                  { type: 'Identifier', value: 'a' },
                  { type: 'Identifier', value: 'b' }
                ]
              }
            ]
          },
          explains: [
            '函数调用创建 CallExpression 节点',
            '被调用的函数名 add 是 Identifier',
            '参数列表 (a, b) 形成 Arguments 节点',
            '每个参数都是独立的 Identifier 子节点'
          ]
        }
      ]
    },
    optimization: {
      title: '⚡ 编译器优化：让代码自动变快',
      desc: '选择一种优化技术，观察编译器如何自动改进你的代码',
      beforeTitle: '📝 优化前',
      afterTitle: '🚀 优化后',
      arrowLabel: '编译器优化',
      principleTitle: '{name}原理',
      gainLabel: '性能提升：',
      optimizations: [
        {
          icon: '🧮',
          name: '常量折叠',
          before: `const width = 10
const height = 20
const area = width * height  // 运行时计算
console.log(area)`,
          after: `const area = 200  // 编译时直接算出结果
console.log(200)`,
          explain:
            '编译器发现 width 和 height 都是常量，在编译阶段就直接计算出 10 * 20 = 200，运行时不再需要做乘法运算。这是最基础也最常见的优化。',
          gain: 30
        },
        {
          icon: '💀',
          name: '死代码消除',
          before: `function process(x) {
  const result = x * 2
  return result

  // 以下代码永远不会执行
  console.log("debug info")
  const unused = x + 1
  return unused
}`,
          after: `function process(x) {
  return x * 2  // 只保留有用的代码
}`,
          explain:
            '编译器分析控制流，发现 return 之后的代码永远不会执行，直接删除。同时发现 result 变量只被赋值后立即返回，于是内联了表达式。',
          gain: 20
        },
        {
          icon: '🔄',
          name: '循环不变量外提',
          before: `const arr = [1, 2, 3, ..., 10000]
for (let i = 0; i < arr.length; i++) {
  // arr.length 每次循环都要读取
  process(arr[i])
}`,
          after: `const arr = [1, 2, 3, ..., 10000]
const len = arr.length  // 提到循环外，只读一次
for (let i = 0; i < len; i++) {
  process(arr[i])
}`,
          explain:
            '循环体内的 arr.length 每次迭代都要访问，但它的值在循环中不会改变。编译器把这个不变的计算提到循环外面，避免了 10000 次重复读取。',
          gain: 45
        },
        {
          icon: '📦',
          name: '函数内联',
          before: `function square(x) {
  return x * x
}

// 调用 10000 次
for (let i = 0; i < 10000; i++) {
  result += square(i)  // 每次都有函数调用开销
}`,
          after: `// 消除函数调用开销
for (let i = 0; i < 10000; i++) {
  result += i * i  // 直接展开，无调用开销
}`,
          explain:
            '函数调用有开销（保存寄存器、跳转、返回）。对于小函数，编译器直接把函数体"粘贴"到调用处，消除调用开销。JIT 编译器（如 V8）特别擅长这个优化。',
          gain: 55
        },
        {
          icon: '🔗',
          name: '常量传播',
          before: `const x = 10
const y = x + 5      // y = 15
const z = y * 2      // z = 30
console.log(z + 1)   // 31`,
          after: `console.log(31)  // 编译时追踪所有常量值
// x, y, z 全部被消除`,
          explain:
            '编译器追踪每个变量的值：x=10 → y=15 → z=30 → z+1=31。当所有中间变量都是常量时，整个计算链在编译时就完成了，运行时只需要输出结果。',
          gain: 40
        }
      ]
    },
    analogy: {
      title: '编译原理：翻译的艺术',
      subtitle: '如何把代码翻译成机器指令',
      introPrefix: '编译器就像',
      introStrong: '翻译官',
      introSuffix: '，把人类能懂的代码翻译成机器能懂的指令',
      processTitle: '代码翻译的完整流程',
      lexicalTitle: '词法分析：分词',
      syntaxTitle: '语法分析：构建树',
      tree: {
        assignment: '赋值语句',
        variable: '变量',
        operator: '运算符',
        number: '数字'
      },
      compareTitle: '编译 vs 解释',
      optimizationTitle: '编译器优化',
      before: '优化前：',
      after: '优化后：',
      optimizationNote: '编译器会自动优化代码，提高运行效率',
      translationSteps: [
        {
          name: '词法分析',
          desc: '将代码分解成一个个单词（token）',
          example: 'int age = 25 → [int, age, =, 25]'
        },
        {
          name: '语法分析',
          desc: '检查代码是否符合语法规则，构建语法树',
          example: '验证语句结构是否正确'
        },
        {
          name: '语义分析',
          desc: '检查代码的含义是否合理',
          example: '检查变量是否定义、类型是否匹配'
        },
        {
          name: '中间代码生成',
          desc: '生成与机器无关的中间表示',
          example: '生成字节码或中间表示'
        },
        {
          name: '优化',
          desc: '改进代码，提高执行效率',
          example: '常量折叠、死代码消除'
        },
        {
          name: '目标代码生成',
          desc: '生成机器码或目标代码',
          example: '生成 x86、ARM 等机器指令'
        }
      ],
      tokens: [
        { type: '关键字', value: 'int' },
        { type: '标识符', value: 'age' },
        { type: '运算符', value: '=' },
        { type: '数字', value: '25' },
        { type: '分隔符', value: ';' }
      ],
      comparisonItems: [
        {
          class: 'compile',
          header: '编译型语言',
          step: '源代码 → 编译器 → 机器码',
          example: 'C, Go, Rust',
          features: ['✓ 执行快', '✓ 一次编译多次运行', '✗ 编译慢']
        },
        {
          class: 'interpret',
          header: '解释型语言',
          step: '源代码 → 解释器 → 逐行执行',
          example: 'Python, JavaScript, PHP',
          features: ['✓ 开发快', '✓ 跨平台', '✗ 执行慢']
        }
      ]
    },
    workflow: {
      title: '编译器的工作流程',
      subtitle: '从源代码到机器码的六步旅程',
      inputLabel: '输入代码：',
      placeholder: '试试输入 int x = 10 + 5;',
      outputLabel: '输出：{output}',
      lexerTitle: '实时词法分析',
      emptyTokens: '输入代码后自动分析',
      execTitle: '三种执行方式对比',
      coreIdeaLabel: '核心思想：',
      coreIdea:
        '编译器像翻译官，把人类能读懂的代码逐步翻译成机器能执行的指令。六个阶段各司其职：识别单词 → 理解语法 → 检查语义 → 生成中间码 → 优化 → 生成机器码。',
      tokenLabels: {
        keyword: '关键字',
        number: '数字',
        operator: '运算符',
        punctuation: '分隔符',
        string: '字符串',
        identifier: '标识符'
      },
      stages: [
        {
          name: '词法分析',
          output: 'Token 流',
          desc: '把源代码拆成一个个"单词"（Token），就像读句子时先认出每个词',
          tasks: [
            '识别关键字',
            '识别标识符',
            '识别数字',
            '识别运算符',
            '过滤空白'
          ],
          example: `int x = 10 + 5;
→ [int] [x] [=] [10] [+] [5] [;]
    关键字 标识符 运算符 数字 运算符 数字 分隔符`
        },
        {
          name: '语法分析',
          output: 'AST 语法树',
          desc: '根据语法规则把 Token 组织成树形结构（AST），确定运算优先级',
          tasks: ['构建语法树', '确定优先级', '检查语法错误'],
          example: `1 + 2 * 3  →  语法树:
       +
      / \\
     1   *       ← * 优先级高，先结合
        / \\
       2   3`
        },
        {
          name: '语义分析',
          output: '带类型的 AST',
          desc: '检查代码的"意思"是否正确——类型对不对、变量有没有声明',
          tasks: ['类型检查', '作用域分析', '构建符号表', '类型推断'],
          example: `int x = "hello";  // ❌ 类型错误：int ≠ string
int y = 10 + 5;   // ✅ 类型正确：int + int = int`
        },
        {
          name: '中间代码生成',
          output: 'IR（中间表示）',
          desc: '生成平台无关的"中间语言"，方便后续优化和跨平台编译',
          tasks: ['生成三地址码', '平台无关', '便于优化'],
          example: `源码: int x = (a + b) * c;
中间码:
  t1 = a + b
  t2 = t1 * c
  x = t2`
        },
        {
          name: '代码优化',
          output: '优化后的 IR',
          desc: '让代码跑得更快——去掉多余计算、提前算好常量',
          tasks: ['常量折叠', '死代码消除', '内联展开', '循环优化'],
          example: `优化前:                优化后:
int x = 10 + 5;   →  int x = 15;   (常量折叠)
int y = x * 2;    →  int y = 30;   (常量传播)
if (false) {...}   →  (删除)        (死代码消除)`
        },
        {
          name: '目标代码生成',
          output: '机器码',
          desc: '最终翻译成 CPU 能直接执行的机器指令',
          tasks: ['指令选择', '寄存器分配', '指令调度'],
          example: `; int x = 15;
mov  eax, 15          ; 把 15 放入 eax 寄存器
mov  dword ptr [x], eax ; 存到变量 x 的内存地址`
        }
      ],
      executionModels: [
        {
          name: '编译型',
          steps: ['源码', '编译器', '机器码', 'CPU 执行'],
          pro: '执行速度快',
          con: '需要编译等待',
          langs: 'C, C++, Rust, Go'
        },
        {
          name: '解释型',
          steps: ['源码', '解释器', '逐行执行'],
          pro: '即写即运行',
          con: '执行速度慢',
          langs: 'Python, Ruby, PHP'
        },
        {
          name: 'JIT 即时编译',
          steps: ['源码', '字节码', 'JIT 热点编译', '执行'],
          pro: '兼顾性能和灵活',
          con: '启动较慢',
          langs: 'Java, JavaScript (V8)'
        }
      ]
    }
  },
  dataStructures: {
    overview: {
      title: '数据结构全景图',
      subtitle: '不同场景选择不同的数据组织方式',
      intro:
        '数据结构就像整理房间的方式：把衣服放进衣柜、书放在书架、杂物放抽屉',
      featuresTitle: '特点',
      scenariosTitle: '适用场景',
      complexityTitle: '操作复杂度',
      operation: '操作',
      averageTime: '平均时间',
      analogyTitle: '生活类比',
      categories: [
        {
          id: 'linear',
          name: '线性结构',
          icon: '📚',
          desc: '数据按顺序排列，像一排书',
          examples: ['数组', '链表', '栈', '队列'],
          features: [
            '数据元素之间一对一关系',
            '有明确的先后顺序',
            '可以是连续存储或链式存储'
          ],
          scenarios: [
            {
              icon: '📝',
              title: '数组：列表数据',
              desc: '存储学生成绩、商品价格等有序数据'
            },
            {
              icon: '🔄',
              title: '栈：撤销操作',
              desc: '文本编辑器的撤销功能，后进先出'
            },
            {
              icon: '🎫',
              title: '队列：任务调度',
              desc: '打印队列、任务队列，先进先出'
            }
          ],
          complexity: [
            { operation: '访问元素', time: 'O(1)' },
            { operation: '插入/删除', time: 'O(n)' }
          ],
          analogy: {
            text: '像一列火车，车厢按顺序连接',
            example: '要找到第 5 节车厢，直接数过去；要插入新车厢，需要断开连接'
          }
        },
        {
          id: 'hash',
          name: '哈希结构',
          icon: '🗂️',
          desc: '通过关键词快速查找',
          examples: ['哈希表', '字典', '集合'],
          features: [
            '通过键值对存储数据',
            '查找速度极快',
            '数据之间没有顺序关系'
          ],
          scenarios: [
            {
              icon: '📖',
              title: '字典：单词查找',
              desc: '根据英文单词快速找到中文释义'
            },
            {
              icon: '👤',
              title: '用户信息：ID 查询',
              desc: '根据用户 ID 快速获取用户资料'
            },
            {
              icon: '🛒',
              title: '购物车：商品管理',
              desc: '记录商品 ID 和数量，快速结算'
            }
          ],
          complexity: [
            { operation: '查找', time: 'O(1)' },
            { operation: '插入/删除', time: 'O(1)' }
          ],
          analogy: {
            text: '像图书馆的索引卡片',
            example: '不用在一排排书架上找，直接查索引就能找到位置'
          }
        },
        {
          id: 'tree',
          name: '树形结构',
          icon: '🌳',
          desc: '层级关系，像家谱',
          examples: ['二叉树', 'B 树', '堆'],
          features: [
            '一对多的层级关系',
            '有明确的根节点',
            '适合表示分类和层级'
          ],
          scenarios: [
            {
              icon: '📁',
              title: '文件系统：目录树',
              desc: '文件夹和文件的层级组织'
            },
            { icon: '🏢', title: '组织架构：管理树', desc: '公司管理层级关系' },
            { icon: '💻', title: 'HTML：DOM 树', desc: '网页元素的嵌套结构' }
          ],
          complexity: [
            { operation: '查找', time: 'O(log n)' },
            { operation: '插入/删除', time: 'O(log n)' }
          ],
          analogy: {
            text: '像家谱树或公司组织架构',
            example: '从根节点（祖先）开始，一层层向下找，路径唯一'
          }
        },
        {
          id: 'graph',
          name: '图结构',
          icon: '🕸️',
          desc: '复杂关系网络',
          examples: ['有向图', '无向图', '网络图'],
          features: [
            '多对多的复杂关系',
            '节点之间可以任意连接',
            '可以表示复杂网络'
          ],
          scenarios: [
            {
              icon: '🗺️',
              title: '地图：路径规划',
              desc: '城市之间的道路连接，导航系统'
            },
            {
              icon: '👥',
              title: '社交网络：好友关系',
              desc: '用户之间的关注、好友关系'
            },
            {
              icon: '🔗',
              title: '网页：链接关系',
              desc: '网页之间的超链接网络'
            }
          ],
          complexity: [
            { operation: '遍历', time: 'O(V + E)' },
            { operation: '最短路径', time: 'O(E + V log V)' }
          ],
          analogy: {
            text: '像地铁线路图或航空网络',
            example: '多个站点，多条线路，站点之间可以有多种连接方式'
          }
        }
      ]
    },
    basic: {
      title: '数据结构：数据的"容器"',
      subtitle: '不同场景选择不同的存储方式',
      structures: [
        { id: 'array', name: '数组', desc: '连续内存，索引访问快' },
        { id: 'linkedlist', name: '链表', desc: '节点相连，插入删除快' },
        { id: 'stack', name: '栈', desc: '后进先出，函数调用用' },
        { id: 'queue', name: '队列', desc: '先进先出，任务调度用' },
        { id: 'hash', name: '哈希表', desc: '键值对，查找最快' },
        { id: 'tree', name: '树', desc: '层次结构，排序搜索' }
      ],
      hints: {
        array: '访问 arr[2] = O(1)，插入/删除 = O(n)',
        linkedlist: '访问第 n 个 = O(n)，插入/删除 = O(1)',
        stack: '后进先出 (LIFO)，操作都是 O(1)',
        queue: '先进先出 (FIFO)，操作都是 O(1)',
        hash: '查找/插入/删除平均 O(1)，最坏 O(n)',
        tree: '查找/插入/删除 O(log n)，遍历 O(n)'
      },
      stackBottom: '栈底',
      push: '入栈 Push',
      pop: '出栈 Pop',
      queueOut: '出 ←',
      queueIn: '← 入',
      enqueue: '入队',
      dequeue: '出队',
      initialQueueItems: ['任务1', '任务2', '任务3'],
      queueItem: '任务{index}',
      tableTitle: '时间复杂度对比',
      tableHeaders: ['操作', '数组', '链表', '哈希表', '树'],
      ops: {
        access: '访问',
        search: '查找',
        insert: '插入',
        delete: '删除'
      },
      coreIdeaLabel: '核心思想：',
      coreIdea:
        '数据结构是数据的"容器"，不同的容器有不同的特点。选择合适的数据结构，能让程序效率提升几个数量级。'
    },
    linear: {
      title: '线性结构的四种形态',
      subtitle: '数组、链表、栈、队列的区别',
      structures: [
        {
          id: 'array',
          name: '数组',
          icon: '📊',
          tagline: '连续内存，编号访问',
          access: 'O(1) 快',
          insert: 'O(n) 慢',
          delete: 'O(n) 慢',
          feature: '大小固定',
          applications: [
            { icon: '📋', name: '列表数据', desc: '学生成绩、商品价格列表' },
            { icon: '🖼️', name: '图像处理', desc: '像素矩阵存储' },
            { icon: '📈', name: '统计图表', desc: '按时间顺序的数据' }
          ]
        },
        {
          id: 'linkedlist',
          name: '链表',
          icon: '🔗',
          tagline: '指针链接，灵活增删',
          access: 'O(n) 慢',
          insert: 'O(1) 快',
          delete: 'O(1) 快',
          feature: '大小可变',
          applications: [
            { icon: '↩️', name: '撤销功能', desc: '操作历史记录' },
            { icon: '🎵', name: '音乐播放', desc: '播放列表' },
            { icon: '📝', name: '文本编辑', desc: '文档内容的动态存储' }
          ]
        },
        {
          id: 'stack',
          name: '栈',
          icon: '🥞',
          tagline: '后进先出',
          access: 'O(n)',
          insert: 'O(1) 快',
          delete: 'O(1) 快',
          feature: '一端操作',
          applications: [
            { icon: '↩️', name: '撤销操作', desc: '编辑器的撤销功能' },
            { icon: '🔙', name: '浏览器历史', desc: '后退按钮实现' },
            { icon: '📞', name: '函数调用', desc: '程序调用栈管理' }
          ]
        },
        {
          id: 'queue',
          name: '队列',
          icon: '🚶',
          tagline: '先进先出',
          access: 'O(n)',
          insert: 'O(1) 快',
          delete: 'O(1) 快',
          feature: '两端操作',
          applications: [
            { icon: '🖨️', name: '打印队列', desc: '文档按顺序打印' },
            { icon: '🎫', name: '任务调度', desc: '操作系统进程调度' },
            { icon: '💬', name: '消息队列', desc: '异步任务处理' }
          ]
        }
      ],
      notes: {
        array: '✓ 连续内存存储 | ✓ 快速访问 (O(1)) | ✗ 插入删除慢 (O(n))',
        linkedlist: '✓ 非连续内存 | ✗ 访问慢 (O(n)) | ✓ 快速插入删除',
        stack: '后进先出 (LIFO) | 应用：撤销操作、函数调用',
        queue: '先进先出 (FIFO) | 应用：任务队列、打印队列'
      },
      stackTop: '栈顶 ↓',
      stackBottom: '栈底',
      push: '入栈 (PUSH)',
      pop: '出栈 (POP)',
      queueFront: '队首 →',
      queueRear: '→ 队尾',
      enqueue: '入队 (ENQUEUE)',
      dequeue: '出队 (DEQUEUE)',
      initialStackItems: ['书5', '书4', '书3', '书2', '书1'],
      initialQueueItems: ['人1', '人2', '人3', '人4'],
      stackItem: '书{index}',
      queueItem: '人{index}',
      tableTitle: '操作对比',
      tableHeaders: ['数据结构', '访问', '插入', '删除', '特点'],
      appTitle: '实际应用场景'
    },
    hash: {
      title: '哈希表：超快的查找',
      subtitle: '通过关键词直接找到数据',
      analogyPrefix: '哈希表就像图书馆的',
      analogyStrong: '索引卡片',
      analogySuffix: '：不用在一排排书架上找，直接查索引就能找到书的位置',
      storageTitle: '存储数据',
      keyPlaceholder: '键 (如: apple)',
      valuePlaceholder: '值 (如: 苹果)',
      add: '添加',
      processTitle: '哈希过程',
      inputKey: '输入键',
      hashFunction: '哈希函数',
      arrayIndex: '数组索引',
      tableTitle: '哈希表',
      empty: '空',
      comparisonTitle: '性能对比',
      appTitle: '常见应用',
      initialData: [
        { key: 'apple', value: '苹果' },
        { key: 'banana', value: '香蕉' },
        { key: 'orange', value: '橙子' }
      ],
      performanceItems: [
        {
          label: '哈希表查找',
          value: 'O(1)',
          class: 'excellent',
          desc: '瞬间找到'
        },
        { label: '数组查找', value: 'O(n)', class: 'good', desc: '需要遍历' },
        {
          label: '二分查找',
          value: 'O(log n)',
          class: 'better',
          desc: '需要排序'
        }
      ],
      applications: [
        { icon: '👤', text: '用户信息表（用户ID → 用户资料）' },
        { icon: '🛒', text: '购物车（商品ID → 数量）' },
        { icon: '📝', text: '缓存系统（URL → 网页内容）' },
        { icon: '🔍', text: '字典（单词 → 释义）' }
      ]
    },
    tree: {
      title: '树形结构：层级关系的表示',
      subtitle: '像家谱一样的组织方式',
      selectorLabel: '选择树的类型：',
      types: [
        { id: 'binary', name: '二叉搜索树', icon: '🌳' },
        { id: 'filesystem', name: '文件系统', icon: '📁' },
        { id: 'dom', name: 'DOM 树', icon: '🌐' }
      ],
      filesystem: {
        root: '📁 根目录 /',
        document: '📄 document.txt',
        photo: '🖼️ photo.jpg'
      },
      dom: {
        htmlTitle: 'HTML 结构',
        treeTitle: 'DOM 树结构',
        headingText: '标题',
        paragraphText: '段落'
      },
      featuresTitle: '树形结构的特点',
      features: [
        { icon: '🌲', title: '层级关系', desc: '节点之间是一对多的父子关系' },
        {
          icon: '🎯',
          title: '单一根节点',
          desc: '除根节点外，每个节点只有一个父节点'
        },
        {
          icon: '🔍',
          title: '高效查找',
          desc: '二叉搜索树的查找时间是 O(log n)'
        },
        { icon: '🔄', title: '多种遍历', desc: '前序、中序、后序、层序遍历' }
      ],
      appTitle: '应用场景',
      applications: [
        { icon: '📁', name: '文件系统', desc: '文件夹和文件的层级组织' },
        { icon: '🌐', name: 'HTML DOM', desc: '网页元素的嵌套结构' },
        { icon: '🏢', name: '组织架构', desc: '公司的管理层级关系' },
        { icon: '🌲', name: '决策树', desc: '机器学习的分类算法' }
      ]
    },
    graph: {
      title: '图结构：复杂关系的表示',
      subtitle: '节点和边的网络',
      types: [
        { id: 'undirected', name: '无向图' },
        { id: 'directed', name: '有向图' },
        { id: 'weighted', name: '带权图' }
      ],
      infoTitle: '图的特点',
      vertices: '节点 (V)',
      edges: '边 (E)',
      degree: '度',
      appTitle: '应用场景',
      applications: [
        { icon: '🗺️', text: '地图导航（最短路径）' },
        { icon: '👥', text: '社交网络（好友关系）' },
        { icon: '🌐', text: '网页链接（PageRank）' },
        { icon: '🔗', text: '依赖关系（包管理）' }
      ]
    },
    selector: {
      title: '如何选择合适的数据结构？',
      subtitle: '根据场景需求做出最佳选择',
      scenarioTitle: '你的使用场景是？',
      recommendation: '推荐使用：{name}',
      reasonTitle: '为什么？',
      exampleTitle: '实际例子',
      referenceTitle: '快速参考表',
      tableHeaders: ['场景需求', '推荐数据结构', '时间复杂度'],
      flowTitle: '选择决策流程',
      flow: {
        yes: '是',
        no: '否',
        fastAccess: '需要快速访问元素？',
        arrayHash: '数组 / 哈希表',
        frequentInsertDelete: '需要频繁插入删除？',
        linkedList: '链表',
        keepOrder: '需要保持顺序？',
        stackQueue: '栈 / 队列',
        treeGraph: '树 / 图'
      },
      scenarios: [
        {
          id: 'lookup',
          icon: '🔍',
          name: '快速查找',
          desc: '根据关键词快速找到对应数据',
          recommendation: '哈希表',
          reasons: [
            '平均查找时间 O(1)，瞬间找到',
            '键值对存储，语义清晰',
            '无需遍历整个数据集'
          ],
          example: '用户 ID 查找用户资料、字典查词、缓存系统'
        },
        {
          id: 'ordered',
          icon: '📊',
          name: '保持顺序',
          desc: '数据需要按插入顺序或特定顺序存储',
          recommendation: '数组 或 链表',
          reasons: [
            '数组支持索引直接访问',
            '链表可以灵活调整大小',
            '按位置访问速度快'
          ],
          example: '学生成绩列表、时间序列数据、排行榜'
        },
        {
          id: 'lifo',
          icon: '🥞',
          name: '后进先出',
          desc: '最后进入的最先处理',
          recommendation: '栈',
          reasons: [
            '只能在栈顶操作',
            '入栈出栈都是 O(1)',
            '适合回溯和撤销操作'
          ],
          example: '浏览器后退、编辑器撤销、函数调用栈'
        },
        {
          id: 'fifo',
          icon: '🚶',
          name: '先进先出',
          desc: '先来的先处理',
          recommendation: '队列',
          reasons: [
            '一端入队，另一端出队',
            '入队出队都是 O(1)',
            '公平的调度方式'
          ],
          example: '打印队列、任务调度、消息队列'
        },
        {
          id: 'hierarchy',
          icon: '🌳',
          name: '层级关系',
          desc: '数据之间有父子层级关系',
          recommendation: '树',
          reasons: [
            '清晰表达层级结构',
            '查找效率 O(log n)',
            '支持多种遍历方式'
          ],
          example: '文件系统、组织架构、HTML DOM'
        },
        {
          id: 'relationship',
          icon: '🕸️',
          name: '复杂关系',
          desc: '数据之间有多对多的复杂连接',
          recommendation: '图',
          reasons: [
            '可以表示任意关系',
            '支持路径搜索算法',
            '适合网络和社交关系'
          ],
          example: '社交网络、地图导航、网页链接'
        }
      ],
      referenceTable: [
        { scenario: '随机访问', structure: '数组', complexity: 'O(1)' },
        { scenario: '快速查找', structure: '哈希表', complexity: 'O(1)' },
        {
          scenario: '有序查找',
          structure: '二叉搜索树',
          complexity: 'O(log n)'
        },
        { scenario: '频繁插入删除', structure: '链表', complexity: 'O(1)' },
        { scenario: '撤销操作', structure: '栈', complexity: 'O(1)' },
        { scenario: '任务调度', structure: '队列', complexity: 'O(1)' }
      ]
    }
  },
  typeSystems: {
    explorer: {
      title: '类型系统探索器',
      subtitle: '静态 vs 动态 · 强类型 vs 弱类型 · 类型推断',
      tabs: [
        { id: 'quadrant', label: '四象限' },
        { id: 'check', label: '类型检查' },
        { id: 'convert', label: '类型转换' },
        { id: 'infer', label: '类型推断' }
      ],
      axes: {
        strong: '强类型',
        weak: '弱类型',
        static: '静态',
        dynamic: '动态'
      },
      checkScenarioTitle: '场景：给变量赋不同类型的值',
      inferIntroPrefix: '现代语言的类型推断：',
      inferIntroStrong: '写着像动态语言，保护像静态语言',
      inferArrow: '↓ 编译器自动推断',
      coreIdeaLabel: '核心思想：',
      coreIdeas: {
        quadrant:
          '类型系统在两个维度上做选择：何时检查（静态/动态）和是否允许隐式转换（强/弱）。没有最好的组合，只有最适合的场景。',
        check:
          '静态类型在编译时就能发现错误，动态类型要到运行时才知道。越早发现 bug，修复成本越低。',
        convert:
          '弱类型语言会猜你的意思做隐式转换（常出错），强类型语言要求你明确表达意图（更安全）。',
        infer:
          '类型推断让你两全其美：代码像动态语言一样简洁，编译器像静态语言一样严格检查。'
      },
      quadrants: [
        {
          id: 'strong-static',
          title: '强 + 静态',
          langs: ['Java', 'Rust', 'Haskell'],
          desc: '编译期严格检查，不允许隐式转换。最安全，IDE 支持最好，但写起来相对“啰嗦”。',
          traits: ['编译期检查', '无隐式转换', '自动补全友好', '重构安全']
        },
        {
          id: 'weak-static',
          title: '弱 + 静态',
          langs: ['C', 'C++'],
          desc: '编译期检查类型，但允许指针强转等隐式转换。性能极高，但容易踩坑。',
          traits: ['编译期检查', '允许指针转换', '性能极高', '需要小心使用']
        },
        {
          id: 'strong-dynamic',
          title: '强 + 动态',
          langs: ['Python', 'Ruby'],
          desc: '运行时检查类型，不允许隐式转换。灵活且安全，但性能较低。',
          traits: ['运行时检查', '拒绝隐式转换', '开发快速', '性能受限']
        },
        {
          id: 'weak-dynamic',
          title: '弱 + 动态',
          langs: ['JavaScript', 'PHP'],
          desc: '运行时检查，允许隐式转换。最灵活但最容易出错，“1” + 1 可能让你抓狂。',
          traits: ['运行时检查', '隐式转换', '灵活自由', '容易出意外']
        }
      ],
      typeChecks: [
        {
          lang: 'Java（静态）',
          code: 'String name = "Alice";\nname = 123; // ❌ 编译错误',
          result: 'error',
          badge: '编译期报错',
          verdict: '还没运行就发现了问题，0 成本修复'
        },
        {
          lang: 'Python（动态强类型）',
          code: 'name = "Alice"\nname = 123  # ✅ 运行正常\nname + " test"  # ❌ 运行时 TypeError',
          result: 'warning',
          badge: '运行时报错',
          verdict: '赋值没问题，但后续操作可能出错'
        },
        {
          lang: 'JavaScript（动态弱类型）',
          code: 'let name = "Alice"\nname = 123  // ✅ 运行正常\nname + " test"  // "123 test" 🤔',
          result: 'success',
          badge: '静默通过',
          verdict: '不报错但结果可能不是你想要的'
        }
      ],
      convertLangs: [
        {
          name: 'JavaScript',
          summary: '弱类型：隐式转换，结果常出人意料',
          summaryClass: 'weak',
          conversions: [
            {
              expr: '"1" + 1',
              result: '"11"',
              explain: '字符串拼接',
              error: false
            },
            {
              expr: '"1" - 1',
              result: '0',
              explain: '自动转数字',
              error: false
            },
            {
              expr: '[] + []',
              result: '""',
              explain: '空数组转空字符串',
              error: false
            },
            {
              expr: '[] + {}',
              result: '"[object Object]"',
              explain: '对象转字符串',
              error: false
            },
            {
              expr: 'true + true',
              result: '2',
              explain: '布尔转数字',
              error: false
            },
            {
              expr: 'null + 1',
              result: '1',
              explain: 'null 变成 0',
              error: false
            }
          ]
        },
        {
          name: 'Python',
          summary: '强类型：拒绝隐式转换，必须显式指定',
          summaryClass: 'strong',
          conversions: [
            {
              expr: '"1" + 1',
              result: 'TypeError',
              explain: '不允许隐式转换',
              error: true
            },
            {
              expr: '"1" + str(1)',
              result: '"11"',
              explain: '显式转换',
              error: false
            },
            {
              expr: 'int("1") + 1',
              result: '2',
              explain: '显式转换',
              error: false
            },
            {
              expr: 'True + True',
              result: '2',
              explain: '布尔是整数子类（特殊）',
              error: false
            },
            {
              expr: '[1] + [2]',
              result: '[1, 2]',
              explain: '列表拼接（同类型操作）',
              error: false
            }
          ]
        },
        {
          name: 'Java',
          summary: '强类型：字符串拼接是特例，其余严格',
          summaryClass: 'strong',
          conversions: [
            {
              expr: '"1" + 1',
              result: '"11"',
              explain: '字符串拼接（特殊规则）',
              error: false
            },
            {
              expr: '(String) 1',
              result: '编译错误',
              explain: '不允许转换',
              error: true
            },
            {
              expr: '(int) 1.5',
              result: '1',
              explain: '强制类型转换（丢精度）',
              error: false
            },
            {
              expr: 'Integer.parseInt("1")',
              result: '1',
              explain: '显式解析',
              error: false
            }
          ]
        },
        {
          name: 'Rust',
          summary: '强类型：类型不匹配就报错，零容忍',
          summaryClass: 'strong',
          conversions: [
            {
              expr: '1_i32 + 1_i64',
              result: '编译错误',
              explain: '类型不匹配',
              error: true
            },
            {
              expr: '1_i32 as i64 + 1_i64',
              result: '2',
              explain: '显式 as 转换',
              error: false
            },
            {
              expr: '"1".parse::<i32>()',
              result: 'Ok(1)',
              explain: '显式解析（返回 Result）',
              error: false
            },
            {
              expr: '1 as f64',
              result: '1.0',
              explain: '显式转换',
              error: false
            }
          ]
        }
      ],
      inferenceExamples: [
        { lang: 'TypeScript', code: 'let x = 1', type: 'number' },
        { lang: 'TypeScript', code: 'let arr = [1, 2, 3]', type: 'number[]' },
        { lang: 'Rust', code: 'let x = 1', type: 'i32' },
        { lang: 'Rust', code: 'let s = "hello"', type: '&str' },
        { lang: 'Kotlin', code: 'val x = 1', type: 'Int' },
        { lang: 'Go', code: 'x := 1', type: 'int' }
      ],
      inferBenefits: [
        '✅ 少写类型声明',
        '✅ 编译器仍然严格检查',
        '✅ IDE 自动补全照样工作',
        '✅ 重构时编译器帮你找错'
      ]
    },
    staticDynamic: {
      title: '🔍 静态类型 vs 动态类型：实时对比',
      desc: '选择一段代码，观察两种类型系统的不同行为',
      staticLabel: '静态类型（TypeScript）',
      dynamicLabel: '动态类型（JavaScript）',
      staticTiming: '⏱ 编译时检查',
      dynamicTiming: '⏱ 运行时检查',
      examples: [
        {
          label: '变量赋值',
          staticCode: 'let name: string = "Alice"\nname = 42  // ❌ 编译错误',
          dynamicCode: 'let name = "Alice"\nname = 42  // ✅ 没问题',
          staticResult: '❌ Type "number" is not assignable to type "string"',
          dynamicResult: '✅ 运行正常，name 变成了 42',
          staticOk: false,
          dynamicOk: true,
          insight:
            '静态类型在你写代码时就发现错误，动态类型要等到运行时才知道。'
        },
        {
          label: '函数参数',
          staticCode:
            'function add(a: number, b: number) {\n  return a + b\n}\nadd("1", 2)  // ❌ 编译错误',
          dynamicCode:
            'function add(a, b) {\n  return a + b\n}\nadd("1", 2)  // ✅ 返回 "12"',
          staticResult:
            '❌ Argument of type "string" is not assignable to parameter of type "number"',
          dynamicResult: '✅ 返回 "12"（字符串拼接，不是数学加法！）',
          staticOk: false,
          dynamicOk: true,
          insight: '动态类型的“灵活”有时是 bug 的温床：你期望 3，却得到 "12"。'
        },
        {
          label: '属性访问',
          staticCode:
            'interface User { name: string }\nlet user: User = { name: "Bob" }\nconsole.log(user.age)  // ❌ 编译错误',
          dynamicCode:
            'let user = { name: "Bob" }\nconsole.log(user.age)  // ✅ 输出 undefined',
          staticResult: '❌ Property "age" does not exist on type "User"',
          dynamicResult: '✅ 输出 undefined（不报错，但可能导致后续逻辑出错）',
          staticOk: false,
          dynamicOk: true,
          insight:
            '静态类型能在编译时捕获拼写错误和属性缺失，动态类型只会默默返回 undefined。'
        }
      ]
    },
    strongWeak: {
      title: '⚡ 强类型 vs 弱类型：隐式转换实验室',
      desc: '输入一个表达式，看看不同语言怎么处理',
      strong: '强类型',
      weak: '弱类型',
      expressions: [
        {
          expr: '"1" + 1',
          langs: [
            {
              name: 'JavaScript',
              strong: false,
              code: '"1" + 1',
              result: '→ "11"（字符串拼接）',
              error: false
            },
            {
              name: 'Python',
              strong: true,
              code: '"1" + 1',
              result: '→ TypeError: can only concatenate str to str',
              error: true
            },
            {
              name: 'Java',
              strong: false,
              code: '"1" + 1',
              result: '→ "11"（字符串拼接）',
              error: false
            },
            {
              name: 'Rust',
              strong: true,
              code: '"1" + 1',
              result: '→ 编译错误：类型不匹配',
              error: true
            }
          ],
          takeaway:
            '强类型语言拒绝猜测你的意图，宁可报错也不悄悄转换。弱类型语言会“好心”帮你转，但结果可能不是你想要的。'
        },
        {
          expr: 'true + 1',
          langs: [
            {
              name: 'JavaScript',
              strong: false,
              code: 'true + 1',
              result: '→ 2（true 被转为 1）',
              error: false
            },
            {
              name: 'Python',
              strong: true,
              code: 'True + 1',
              result: '→ 2（Python 中 bool 是 int 子类）',
              error: false
            },
            {
              name: 'Java',
              strong: false,
              code: 'true + 1',
              result: '→ 编译错误',
              error: true
            },
            {
              name: 'C',
              strong: false,
              code: '1 + 1 // true=1',
              result: '→ 2（C 中没有 bool，用 0/1）',
              error: false
            }
          ],
          takeaway:
            'bool 和数字的关系因语言而异。Python 虽是强类型，但 bool 继承自 int，这是设计选择而非弱类型。'
        },
        {
          expr: '"5" == 5',
          langs: [
            {
              name: 'JavaScript',
              strong: false,
              code: '"5" == 5',
              result: '→ true（隐式转换后比较）',
              error: false
            },
            {
              name: 'Python',
              strong: true,
              code: '"5" == 5',
              result: '→ False（类型不同，直接 False）',
              error: false
            },
            {
              name: 'TypeScript',
              strong: false,
              code: '"5" == 5',
              result: '→ true（但 TSLint 会警告）',
              error: false
            },
            {
              name: 'PHP',
              strong: false,
              code: '"5" == 5',
              result: '→ true（臭名昭著的松散比较）',
              error: false
            }
          ],
          takeaway:
            'JavaScript 的 == 会做隐式转换，这是无数 bug 的来源。所以社区推荐始终使用 === 严格比较。'
        }
      ]
    },
    inference: {
      title: '🧠 类型推断：编译器如何“猜”出类型',
      desc: '点击代码行，看编译器如何一步步推断类型',
      processTitle: '推断过程',
      supportTitle: '各语言的类型推断能力',
      codeLines: [
        {
          code: '<span class="kw">let</span> x = <span class="num">42</span>',
          inferred: 'number',
          steps: [
            '右侧是字面量 42',
            '42 是整数，类型为 number',
            '推断 x 的类型为 number'
          ]
        },
        {
          code: '<span class="kw">let</span> names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>]',
          inferred: 'string[]',
          steps: [
            '右侧是数组字面量 [...]',
            '数组元素 "Alice"、"Bob" 都是 string',
            '推断数组类型为 string[]'
          ]
        },
        {
          code: '<span class="kw">let</span> result = x > 10 ? <span class="str">"big"</span> : <span class="str">"small"</span>',
          inferred: 'string',
          steps: [
            '三元表达式的两个分支都是 string',
            '两个分支类型一致',
            '推断 result 类型为 string'
          ]
        },
        {
          code: '<span class="kw">const</span> add = (a: <span class="type">number</span>, b: <span class="type">number</span>) => a + b',
          inferred: '(a: number, b: number) => number',
          steps: [
            '参数 a 和 b 显式标注为 number',
            'number + number 的结果是 number',
            '推断返回值类型为 number'
          ]
        },
        {
          code: '<span class="kw">let</span> mixed = [<span class="num">1</span>, <span class="str">"two"</span>, <span class="kw">true</span>]',
          inferred: '(number | string | boolean)[]',
          steps: [
            '数组包含 number、string、boolean 三种类型',
            '取所有元素类型的联合类型',
            '推断为 (number | string | boolean)[]'
          ]
        }
      ],
      langs: [
        { name: 'Rust', level: 95, label: '几乎全推断' },
        { name: 'TypeScript', level: 85, label: '大部分可推断' },
        { name: 'Kotlin', level: 80, label: '局部推断强' },
        { name: 'Go', level: 50, label: '仅 := 短声明' },
        { name: 'Java', level: 40, label: 'var 关键字（Java 10+）' },
        { name: 'C', level: 5, label: '几乎不推断' }
      ]
    },
    generic: {
      title: '🧩 泛型：写一次，适用所有类型',
      desc: '点击不同场景，看泛型如何让代码既灵活又安全',
      withoutLabel: '❌ 没有泛型',
      withLabel: '✅ 使用泛型',
      flowTitle: '类型传递过程',
      scenes: [
        {
          label: '通用函数',
          without:
            '// 要为每种类型写一个函数\nfunction getFirstNumber(arr: number[]): number {\n  return arr[0]\n}\nfunction getFirstString(arr: string[]): string {\n  return arr[0]\n}\n// 还有 boolean、object...写不完',
          withGeneric:
            '// 一个泛型函数搞定所有类型\nfunction getFirst<T>(arr: T[]): T {\n  return arr[0]\n}\n\ngetFirst<number>([1, 2, 3])   // → number\ngetFirst<string>(["a", "b"])  // → string',
          problem: '每种类型都要写一遍，代码重复',
          benefit: 'T 是类型参数，调用时自动替换为实际类型',
          flow: ['T = number', 'arr: number[]', '返回值: number']
        },
        {
          label: '类型安全容器',
          without:
            '// 用 any 失去类型安全\nclass Box {\n  value: any\n  get(): any { return this.value }\n}\nconst box = new Box()\nbox.value = 42\nconst v = box.get() // v 是 any，没有类型提示',
          withGeneric:
            '// 泛型类保持类型安全\nclass Box<T> {\n  value: T\n  get(): T { return this.value }\n}\nconst box = new Box<number>()\nbox.value = 42\nconst v = box.get() // v 是 number，有完整提示',
          problem: 'any 类型没有任何类型检查和提示',
          benefit: '泛型类在实例化时确定类型，全程类型安全',
          flow: ['Box<number>', 'value: number', 'get(): number']
        },
        {
          label: '类型约束',
          without:
            '// 没有约束，什么都能传\nfunction getLength<T>(item: T): number {\n  return item.length  // ❌ 编译错误！\n  // T 可能没有 length 属性\n}',
          withGeneric:
            '// 用 extends 约束 T 必须有 length\ninterface HasLength { length: number }\n\nfunction getLength<T extends HasLength>(item: T) {\n  return item.length  // ✅ 安全！\n}\n\ngetLength("hello")     // ✅ string 有 length\ngetLength([1, 2, 3])   // ✅ array 有 length\ngetLength(42)           // ❌ number 没有 length',
          problem: '不加约束，泛型太“自由”，无法安全访问属性',
          benefit: 'extends 约束确保 T 一定有 length 属性',
          flow: ['T extends HasLength', '确保有 .length', '安全访问']
        }
      ]
    },
    safety: {
      title: '🛡️ 类型安全实战：常见陷阱与防御',
      desc: '点击不同的陷阱场景，学习如何用类型系统保护你的代码',
      dangerLabel: '⚠️ 危险代码',
      safeLabel: '✅ 安全代码',
      tipTitle: '🔑 防御策略',
      traps: [
        {
          icon: '💣',
          name: 'null 引用',
          dangerCode:
            'function getLength(str) {\n  return str.length  // 如果 str 是 null？\n}\ngetLength(null)  // 💥 运行时崩溃',
          dangerResult: '💥 TypeError: Cannot read properties of null',
          safeCode:
            'function getLength(str: string | null): number {\n  if (str === null) return 0\n  return str.length  // ✅ 编译器确保此处 str 不为 null\n}',
          safeResult: '✅ 编译器强制你处理 null 的情况',
          tips: [
            '使用 strictNullChecks 编译选项',
            '用联合类型 string | null 显式标注可空',
            '用可选链 ?. 安全访问属性'
          ]
        },
        {
          icon: '🎭',
          name: '类型断言滥用',
          dangerCode:
            'const data = fetchAPI() as any\nconst name = data.user.profile.name\n// 如果 API 返回格式变了？',
          dangerResult: '💥 运行时崩溃，any 绕过了所有类型检查',
          safeCode:
            'interface APIResponse {\n  user: { profile: { name: string } }\n}\nconst data: APIResponse = await fetchAPI()\nconst name = data.user.profile.name',
          safeResult: '✅ 如果 API 格式变了，编译时就能发现',
          tips: [
            '避免使用 any，用 unknown 代替',
            '为 API 响应定义明确的接口',
            '使用 zod 等库做运行时校验'
          ]
        },
        {
          icon: '🔄',
          name: '隐式转换',
          dangerCode:
            'if (userId == 0) {\n  // 当 userId 是 "" 时也会进入！\n  console.log("无效用户")\n}\n// "" == 0 → true（隐式转换）',
          dangerResult: '💥 空字符串被当成 0，逻辑错误',
          safeCode:
            'if (userId === 0) {\n  console.log("无效用户")\n}\n// "" === 0 → false（严格比较）',
          safeResult: '✅ 严格比较不做隐式转换',
          tips: [
            '始终使用 === 而不是 ==',
            '开启 ESLint 的 eqeqeq 规则',
            '用 TypeScript 的严格模式'
          ]
        },
        {
          icon: '📦',
          name: '数组类型不安全',
          dangerCode:
            'const items = []  // any[] 类型\nitems.push(1)\nitems.push("hello")\nitems.push({ x: 1 })\n// 数组里什么都有，取出来用时容易出错',
          dangerResult: '💥 数组元素类型不一致，后续操作可能崩溃',
          safeCode:
            'const items: number[] = []\nitems.push(1)\nitems.push("hello")  // ❌ 编译错误！\n// 编译器确保数组元素类型一致',
          safeResult: '✅ 编译时就阻止了类型不一致的元素',
          tips: [
            '声明数组时指定元素类型',
            '使用 ReadonlyArray 防止意外修改',
            '用元组类型 [string, number] 表示固定结构'
          ]
        }
      ]
    },
    languageModel: {
      title: '编程语言的类型模型',
      subtitle: '不同语言的类型系统差异',
      matrixTitle: '类型系统分类矩阵',
      inferenceTitle: '类型推断',
      inferenceDesc: '现代语言可以自动推断变量类型，无需显式声明',
      dimensions: [
        {
          id: 'static',
          title: '类型检查时机',
          options: [
            { name: '静态类型', langs: 'Java, C++, Rust, Go' },
            { name: '动态类型', langs: 'Python, JavaScript, Ruby' }
          ]
        },
        {
          id: 'strength',
          title: '类型强度',
          options: [
            { name: '强类型', langs: 'Python, Java, Rust' },
            { name: '弱类型', langs: 'JavaScript, C, PHP' }
          ]
        }
      ],
      matrixCells: [
        {
          title: '静态 + 强',
          langs: 'Java, C++, Rust, Go',
          desc: '编译期检查，类型安全'
        },
        { title: '静态 + 弱', langs: 'C', desc: '编译期检查，可随意转换' },
        {
          title: '动态 + 强',
          langs: 'Python, Ruby',
          desc: '运行时检查，类型安全'
        },
        {
          title: '动态 + 弱',
          langs: 'JavaScript, PHP',
          desc: '运行时检查，类型灵活'
        }
      ],
      inferenceExamples: [
        {
          lang: 'TypeScript',
          code: 'let x = 5; // 推断为 number\nlet name = "Alice"; // string'
        },
        {
          lang: 'Rust',
          code: 'let x = 5; // 推断为 i32\nlet name = "Alice"; // &str'
        }
      ]
    }
  },
  powerOnToWeb: {
    controls: {
      prev: '← 上一步',
      start: '开始 →',
      next: '下一步 →',
      restart: '↺ 重新开始'
    },
    powerOn: {
      title: '硬件启动链路',
      steps: [
        { icon: '🔌', name: '电源 PSU', desc: '交流电 → 直流电' },
        { icon: '🧩', name: '主板芯片组', desc: '协调各硬件部件' },
        { icon: '⚙️', name: 'CPU 复位', desc: '清零寄存器，就绪' },
        { icon: '📟', name: 'BIOS/UEFI', desc: '执行第一条指令' }
      ]
    },
    bios: {
      title: 'BIOS/UEFI 工作流程',
      introDesc: '点击开始了解<br>固件启动流程',
      allHardwarePassed: '✓ 所有硬件检测通过',
      initHeader: '初始化硬件配置',
      bootHeader: '寻找启动设备',
      bootOrder: '启动顺序：',
      bootFrom: '🚀 从 {name} 启动',
      beepTitle: '蜂鸣声错误码',
      postItems: [
        { name: '内存检测', icon: '🧠' },
        { name: '显卡检测', icon: '🎮' },
        { name: '键盘/鼠标', icon: '⌨️' },
        { name: '存储设备', icon: '💾' }
      ],
      hardwareItems: [
        { name: 'CPU', icon: '🧠' },
        { name: '内存', icon: '💾' },
        { name: '显卡', icon: '🎮' },
        { name: '网卡', icon: '🌐' },
        { name: '声卡', icon: '🔊' },
        { name: 'USB', icon: '🔌' }
      ],
      bootDevices: [
        { name: '硬盘', icon: '💿' },
        { name: 'U盘', icon: '🔌' },
        { name: '网络', icon: '🌐' }
      ],
      beepCodes: [
        { beeps: '1 短', meaning: '正常启动' },
        { beeps: '1 长 2 短', meaning: '显卡错误' },
        { beeps: '1 长 3 短', meaning: '内存错误' },
        { beeps: '持续长鸣', meaning: '内存未检测' },
        { beeps: '持续短鸣', meaning: '电源异常' }
      ],
      deviceStatus: {
        bootable: '✓ 可启动',
        skipped: '✗ 跳过',
        checking: '检查中...',
        waiting: '等待'
      },
      stages: [
        {
          short: '介绍',
          icon: '📟',
          name: '什么是 BIOS/UEFI？',
          desc: 'BIOS 是电脑启动后第一个运行的程序，存储在主板的只读芯片中。UEFI 是 BIOS 的升级版，更安全、更现代。',
          operations: [
            {
              icon: '💾',
              name: 'BIOS（传统）',
              what: 'Basic Input/Output System，1980年代开始使用的固件接口。',
              details: [
                '存储在主板 ROM 芯片中',
                '16位实模式运行',
                '最大支持 2.2TB 硬盘',
                '蓝色文本界面'
              ]
            },
            {
              icon: '✨',
              name: 'UEFI（现代）',
              what: 'Unified Extensible Firmware Interface，BIOS 的现代化替代品。',
              details: [
                '支持 32/64位模式',
                '支持超过 2.2TB 的大硬盘',
                '图形化设置界面',
                '安全启动（Secure Boot）'
              ]
            }
          ],
          analogy:
            'BIOS/UEFI 就像是电脑的"守门人"：它第一个醒来，检查一切是否正常，然后决定让谁（操作系统）进来。'
        },
        {
          short: 'POST',
          icon: '🔍',
          name: '硬件自检（POST）',
          desc: 'Power-On Self-Test，逐一检测关键硬件，确保它们能正常工作。',
          operations: [
            {
              icon: '🧠',
              name: '内存检测',
              what: '向内存写入测试数据并读回验证，确认每个内存条工作正常。',
              details: [
                '逐字节写入/读取测试',
                '检测内存容量和速度',
                '失败会发出蜂鸣声（1长3短）'
              ]
            },
            {
              icon: '🎮',
              name: '显卡检测',
              what: '初始化显卡，尝试输出画面。如果失败，屏幕会保持黑屏。',
              details: ['加载显卡 BIOS', '设置基本显示模式', '失败蜂鸣：1长2短']
            },
            {
              icon: '⌨️',
              name: '外设检测',
              what: '扫描 USB/PS2 端口，检测键盘、鼠标等输入设备。',
              details: [
                '枚举 USB 设备',
                '检测键盘响应',
                '非关键设备，缺失不影响启动'
              ]
            },
            {
              icon: '💾',
              name: '存储设备检测',
              what: '识别硬盘、SSD、光驱等存储设备，读取设备信息。',
              details: [
                '检测 SATA/NVMe 设备',
                '读取设备型号和容量',
                '为后续启动做准备'
              ]
            }
          ],
          analogy:
            '就像飞机起飞前的安全检查：机长逐项确认引擎、仪表、燃油都正常，有任何问题就不能起飞。'
        },
        {
          short: '初始化',
          icon: '⚙️',
          name: '初始化硬件',
          desc: '自检通过后，配置各硬件的工作参数，建立硬件与软件之间的通信桥梁。',
          operations: [
            {
              icon: '🔧',
              name: '设置工作模式',
              what: '配置 CPU 运行频率、内存时序（CAS Latency）等参数。',
              details: [
                '读取 CMOS 中的用户设置',
                '应用超频配置（如果有）',
                '设置电源管理模式'
              ]
            },
            {
              icon: '📋',
              name: '中断向量表',
              what: '建立中断号与处理程序的映射表，让硬件事件能被正确响应。',
              details: [
                '配置中断控制器（PIC/APIC）',
                '分配 IRQ 中断号',
                '设置中断处理程序入口'
              ]
            },
            {
              icon: '🔌',
              name: 'PCI 设备枚举',
              what: '扫描 PCI/PCIe 总线，为显卡、网卡、声卡分配资源。',
              details: [
                '发现所有 PCI 设备',
                '分配内存映射 I/O 地址',
                '分配中断资源'
              ]
            },
            {
              icon: '🕐',
              name: '时钟初始化',
              what: '读取 CMOS 中的实时时钟（RTC），同步系统时间。',
              details: [
                '读取硬件时钟',
                '校验时间有效性',
                '为操作系统提供初始时间'
              ]
            }
          ],
          analogy:
            '好比乐队演出前的调音：每件乐器（硬件）都要调到正确的音高（工作模式），指挥（中断控制器）要能指挥每个声部。'
        },
        {
          short: '启动',
          icon: '🔎',
          name: '寻找启动设备',
          desc: '按照启动顺序查找可启动设备，读取启动扇区，把控制权交给操作系统。',
          operations: [
            {
              icon: '📑',
              name: '读取启动顺序',
              what: '从 CMOS/NVRAM 中读取用户设定的设备优先级列表。',
              details: [
                '硬盘 → U盘 → 网络（默认顺序）',
                '用户可在 BIOS 设置中修改',
                '保存到非易失性存储器'
              ]
            },
            {
              icon: '💿',
              name: '检查启动扇区',
              what: '读取设备第一个扇区，验证末尾的 0x55AA 魔数签名。',
              details: [
                '读取第 0 扇区（512字节）',
                '检查 510-511 字节是否为 0x55AA',
                '验证引导代码有效性'
              ]
            },
            {
              icon: '🔀',
              name: '多设备尝试',
              what: '第一个设备无法启动时，自动尝试下一个。',
              details: [
                '硬盘无系统 → 尝试 U盘',
                'U盘不存在 → 尝试网络启动',
                '全部失败 → 显示错误信息'
              ]
            },
            {
              icon: '🚀',
              name: '跳转执行',
              what: '将启动扇区代码加载到内存 0x7C00，CPU 跳转到该地址执行。',
              details: [
                '加载 512 字节引导代码',
                '跳转到 0x7C00 执行',
                '控制权交给引导程序'
              ]
            }
          ],
          analogy:
            '就像你早上出门找交通工具：先看车库有没有车（硬盘），没有就看门口有没有共享单车（U盘），再不行就叫网约车（网络启动）。'
        }
      ]
    },
    osBoot: {
      title: '操作系统启动流程',
      introTitle: '操作系统',
      introDesc: '管理硬件和软件资源<br>计算机的"大管家"',
      osComparisonTitle: '常见操作系统',
      osComparisonHeaders: ['系统', '特点', '典型设备'],
      bootFlowTitle: 'Windows vs Linux 启动流程',
      osList: [
        {
          name: 'Windows',
          icon: '🪟',
          feature: '生态丰富，兼容性好',
          device: '桌面电脑、笔记本'
        },
        {
          name: 'macOS',
          icon: '🍎',
          feature: '苹果生态，流畅稳定',
          device: 'Mac 电脑'
        },
        {
          name: 'Linux',
          icon: '🐧',
          feature: '开源免费，服务器首选',
          device: '服务器、嵌入式'
        },
        {
          name: 'Android',
          icon: '🤖',
          feature: '移动端 Linux',
          device: '手机、平板'
        },
        {
          name: 'iOS',
          icon: '📱',
          feature: '苹果移动端',
          device: 'iPhone、iPad'
        }
      ],
      bootloaderSteps: [
        '读取分区表',
        '找到系统分区',
        '加载内核到内存',
        '跳转到内核入口'
      ],
      kernelModules: ['进程管理', '内存管理', '文件系统', '设备驱动'],
      services: [
        { name: '网络服务', icon: '🌐' },
        { name: '音频服务', icon: '🔊' },
        { name: '安全中心', icon: '🛡️' },
        { name: '打印服务', icon: '🖨️' },
        { name: '图形界面', icon: '🎨' },
        { name: '系统日志', icon: '📝' }
      ],
      desktopIcons: [
        { icon: '📁', label: '文件' },
        { icon: '🌐', label: '浏览器' },
        { icon: '📧', label: '邮件' },
        { icon: '⚙️', label: '设置' }
      ],
      windowsFlow: [
        'BIOS',
        'MBR',
        'bootmgr',
        'winload.exe',
        'ntoskrnl.exe',
        '系统服务',
        '桌面'
      ],
      linuxFlow: ['BIOS', 'GRUB', 'vmlinuz', 'systemd', '系统服务', '桌面环境'],
      stages: [
        {
          short: '介绍',
          icon: '🖥️',
          name: '什么是操作系统？',
          desc: '操作系统（OS）是管理计算机硬件和软件资源的程序集合，就像一个"大管家"。',
          operations: [
            {
              icon: '🏢',
              name: '资源管理',
              what: '操作系统负责管理 CPU、内存、硬盘、网络等所有硬件资源。',
              details: [
                '进程管理 - 调度程序运行',
                '内存管理 - 分配和回收内存',
                '文件系统 - 管理文件存储',
                '设备管理 - 控制硬件设备'
              ]
            },
            {
              icon: '🎮',
              name: '提供接口',
              what: '为应用程序提供统一的接口，让程序不需要直接操作硬件。',
              details: [
                '系统调用接口（API）',
                '图形用户界面（GUI）',
                '命令行界面（CLI）',
                '驱动程序接口'
              ]
            },
            {
              icon: '🔒',
              name: '安全保护',
              what: '保护系统资源不被非法访问，确保多用户环境下的隔离。',
              details: [
                '用户权限管理',
                '进程地址空间隔离',
                '文件访问控制',
                '网络安全防护'
              ]
            }
          ],
          analogy:
            '操作系统就像一座大楼的物业管理：负责水电供应（硬件资源）、分配房间（内存）、管理仓库（文件系统）、维护安全（权限控制），让住户（应用程序）可以安心生活。'
        },
        {
          short: '引导程序',
          icon: '🚀',
          name: '引导程序（Bootloader）',
          desc: '硬盘第一个扇区存放着引导程序，它的任务是把操作系统内核加载到内存。',
          operations: [
            {
              icon: '📀',
              name: '读取分区表',
              what: '引导程序首先读取硬盘的分区表，找到操作系统所在的分区。',
              details: [
                '读取 MBR（主引导记录）',
                '解析分区表结构',
                '定位活动分区',
                'Windows: bootmgr / Linux: GRUB'
              ]
            },
            {
              icon: '🔍',
              name: '定位内核',
              what: '在系统分区中找到操作系统内核文件的位置。',
              details: [
                'Windows: 读取 BCD 配置',
                'Linux: 显示系统选择菜单',
                '支持多系统启动',
                '加载文件系统驱动'
              ]
            },
            {
              icon: '💾',
              name: '加载到内存',
              what: '将内核文件从硬盘读取到内存的指定位置。',
              details: [
                '解压压缩的内核镜像',
                '复制到内存 0x100000 以上',
                'Windows: ntoskrnl.exe',
                'Linux: vmlinuz'
              ]
            },
            {
              icon: '➡️',
              name: '跳转执行',
              what: '设置好初始环境后，跳转到内核入口点，把控制权交给内核。',
              details: [
                '设置 CPU 保护模式',
                '初始化页表',
                '跳转至内核入口',
                '内核开始执行'
              ]
            }
          ],
          analogy:
            '引导程序就像剧场的报幕员：他先上台确认场地（检查硬件）、找到剧本（定位内核）、把道具摆好（加载到内存），然后宣布“演出开始”（跳转执行）。'
        },
        {
          short: '内核加载',
          icon: '⚙️',
          name: '操作系统内核（Kernel）',
          desc: '内核是操作系统的核心，负责管理内存、CPU、进程等核心功能。',
          operations: [
            {
              icon: '🧠',
              name: '进程管理',
              what: '创建第一个用户进程，建立进程调度机制。',
              details: [
                '创建 init/systemd 进程',
                '建立进程控制块（PCB）',
                '初始化调度器',
                '设置进程优先级'
              ]
            },
            {
              icon: '💾',
              name: '内存管理',
              what: '建立虚拟内存系统，划分内核空间和用户空间。',
              details: [
                '初始化页表',
                '建立物理内存映射',
                '设置内存保护',
                '启用虚拟内存'
              ]
            },
            {
              icon: '📁',
              name: '文件系统',
              what: '挂载根文件系统，初始化 VFS 层。',
              details: [
                '识别文件系统类型',
                '挂载根分区（/）',
                '初始化 inode 缓存',
                '建立文件描述符表'
              ]
            },
            {
              icon: '🔌',
              name: '设备驱动',
              what: '加载核心设备驱动，初始化硬件抽象层。',
              details: [
                '加载磁盘驱动',
                '初始化显示驱动',
                '加载键盘鼠标驱动',
                '枚举 PCI 设备'
              ]
            }
          ],
          analogy:
            '内核就像公司的 CEO 上任：接管所有部门（硬件），安排人事（进程）、财务（内存）、后勤（设备）各就各位，建立公司的基本运作框架。'
        },
        {
          short: '服务启动',
          icon: '🔧',
          name: '系统服务启动',
          desc: '内核拉起第一个用户进程，按依赖顺序启动各种后台服务。',
          operations: [
            {
              icon: '🚀',
              name: '初始化进程',
              what: '启动第一个用户态进程（PID=1），它是所有其他进程的"祖先"。',
              details: [
                'Linux: systemd 或 init',
                'Windows: smss.exe → csrss.exe',
                '读取服务配置文件',
                '按依赖关系排序'
              ]
            },
            {
              icon: '🌐',
              name: '网络服务',
              what: '初始化网卡驱动，配置网络连接。',
              details: [
                '加载网卡驱动',
                'DHCP 获取 IP 地址',
                '配置 DNS 服务器',
                '启动防火墙'
              ]
            },
            {
              icon: '🔒',
              name: '安全服务',
              what: '启动用户认证和安全监控服务。',
              details: [
                '启动登录管理器',
                '初始化权限系统',
                '启动杀毒软件',
                '配置安全策略'
              ]
            },
            {
              icon: '🔊',
              name: '多媒体服务',
              what: '启动音频、显示等多媒体相关服务。',
              details: [
                '启动音频服务',
                '初始化显示管理器',
                '加载主题和字体',
                '准备用户界面'
              ]
            }
          ],
          analogy:
            '就像商场开门营业前：保安到岗（安全）、空调开启（后台服务）、收银上线（网络），一切就绪迎接顾客（用户）。'
        },
        {
          short: '桌面就绪',
          icon: '🖥️',
          name: '显示桌面',
          desc: '图形界面启动完成，用户熟悉的桌面环境呈现出来。',
          operations: [
            {
              icon: '🎮',
              name: '显卡驱动',
              what: '初始化 GPU，设置屏幕分辨率和色彩。',
              details: [
                '加载显卡驱动',
                '设置分辨率（如 1920×1080）',
                '启用硬件加速',
                '配置多显示器'
              ]
            },
            {
              icon: '🪟',
              name: '窗口系统',
              what: '启动窗口管理器，负责窗口的绘制和交互。',
              details: [
                'Windows: DWM',
                'Linux: X11/Wayland',
                'macOS: WindowServer',
                '管理窗口层叠关系'
              ]
            },
            {
              icon: '🎨',
              name: '桌面环境',
              what: '绘制壁纸、桌面图标、任务栏等界面元素。',
              details: [
                '加载桌面壁纸',
                '显示桌面图标',
                '渲染任务栏',
                '加载系统托盘'
              ]
            },
            {
              icon: '👆',
              name: '用户交互',
              what: '鼠标光标出现，系统进入完全可交互状态。',
              details: [
                '显示鼠标指针',
                '响应键盘输入',
                '加载用户配置',
                '启动自启动程序'
              ]
            }
          ],
          analogy:
            '幕布拉开，灯光亮起：舞台（窗口）搭好，演员（图标）就位，等待观众（你）的第一次操作。'
        }
      ]
    },
    browser: {
      title: '浏览器架构 ── 点击模块查看详情',
      modules: [
        {
          icon: '🎨',
          name: '用户界面',
          desc: '你直接看到和操作的部分：地址栏、标签页、书签、前进/后退按钮',
          tags: ['地址栏', '标签页', '书签栏']
        },
        {
          icon: '🔗',
          name: '浏览器引擎',
          desc: '连接用户界面和渲染引擎的桥梁，负责协调两者之间的通信',
          tags: ['Blink', 'Gecko', 'WebKit']
        },
        {
          icon: '📄',
          name: '渲染引擎',
          desc: '解析 HTML 和 CSS，将代码转换成你看到的网页画面',
          tags: ['HTML 解析', 'CSS 计算', '布局绘制']
        },
        {
          icon: '⚡',
          name: 'JavaScript 引擎',
          desc: '执行网页中的 JavaScript 代码，实现页面的动态交互效果',
          tags: ['V8', 'SpiderMonkey', 'JavaScriptCore']
        },
        {
          icon: '🌐',
          name: '网络模块',
          desc: '负责发送 HTTP 请求、接收服务器响应，是浏览器与外界通信的通道',
          tags: ['HTTP/2', 'HTTP/3', 'WebSocket']
        },
        {
          icon: '💾',
          name: '数据存储',
          desc: '在本地保存网站数据，让你下次访问更快、不用重复登录',
          tags: ['Cookie', 'LocalStorage', 'Cache']
        }
      ]
    },
    url: {
      title: 'URL 访问全流程',
      autoPlay: '▶ 自动演示',
      playing: '播放中...',
      browser: '浏览器',
      server: '服务器',
      steps: [
        {
          name: 'URL 解析',
          dir: 'right',
          detail:
            'https://example.com → 协议: https, 域名: example.com, 路径: /'
        },
        {
          name: 'DNS 解析',
          dir: 'right',
          detail: '向 DNS 服务器查询，将域名翻译为 IP 地址 93.184.216.34'
        },
        {
          name: 'TCP 三次握手',
          dir: 'right',
          detail: 'SYN → SYN-ACK → ACK，建立可靠的传输连接'
        },
        {
          name: 'TLS 握手',
          dir: 'right',
          detail: '交换密钥、验证证书，建立 HTTPS 加密通道'
        },
        {
          name: '发送 HTTP 请求',
          dir: 'right',
          detail: 'GET /index.html HTTP/1.1  Host: example.com'
        },
        {
          name: '服务器处理',
          dir: 'left',
          detail: '解析请求 → 执行业务逻辑 → 查询数据库 → 组装响应'
        },
        {
          name: '返回 HTTP 响应',
          dir: 'left',
          detail: 'HTTP/1.1 200 OK  Content-Type: text/html'
        },
        {
          name: '浏览器渲染',
          dir: 'left',
          detail: 'HTML → DOM 树 → 样式计算 → 布局 → 绘制到屏幕'
        }
      ]
    },
    rendering: {
      title: '浏览器渲染管线',
      stages: [
        {
          name: 'HTML 解析',
          desc: '将 HTML 文本解析为 DOM 树（文档对象模型）'
        },
        {
          name: 'CSS 解析',
          desc: '将 CSS 规则解析为样式表，计算每个元素的最终样式'
        },
        {
          name: '构建渲染树',
          desc: 'DOM 树 + 样式规则 = 渲染树（只包含可见元素）'
        },
        { name: '布局计算', desc: '计算每个元素在页面上的精确位置和大小' },
        {
          name: '绘制',
          desc: '将元素的文字、颜色、图片、边框等绘制到像素缓冲区'
        },
        {
          name: '合成显示',
          desc: '将多个图层合成为最终画面，由 GPU 输出到屏幕'
        }
      ]
    },
    full: {
      title: '从按下电源到看到网页 ── 完整链路',
      phases: [
        {
          icon: '🔌',
          name: '硬件启动',
          color: '#f59e0b',
          steps: '电源 → 主板 → CPU → BIOS'
        },
        {
          icon: '🔍',
          name: '固件自检',
          color: '#ef4444',
          steps: 'POST → 初始化 → 找启动盘'
        },
        {
          icon: '💻',
          name: '系统启动',
          color: '#8b5cf6',
          steps: '引导 → 内核 → 服务 → 桌面'
        },
        {
          icon: '🌐',
          name: '浏览器启动',
          color: '#3b82f6',
          steps: '创建进程 → 加载代码 → 就绪'
        },
        {
          icon: '📡',
          name: '网络请求与渲染',
          color: '#10b981',
          steps: 'DNS → TCP → HTTP → 渲染'
        }
      ]
    }
  },
  cpuArchitecture: {
    title: 'CPU 指令执行周期详细演示',
    cpuLabel: 'CPU',
    controlUnit: '控制单元 CU',
    programCounter: '程序计数器',
    instructionRegister: '指令寄存器',
    memoryAddressRegister: '内存地址寄存器',
    memoryDataRegister: '内存数据寄存器',
    alu: '算术逻辑单元 ALU',
    accumulator: '累加器',
    registerGroup: '通用寄存器组',
    addressBus: '地址总线',
    dataBus: '数据总线',
    controlBus: '控制总线',
    mainMemory: '主存 Memory',
    dataArea: '数据区',
    phases: [
      ['Fetch', '取指'],
      ['Decode', '译码'],
      ['Execute', '执行'],
      ['Write Back', '写回']
    ],
    stepBadge: '步骤 {step} / {total}',
    signalLabel: '信号：',
    clockButton: '⟳ 时钟脉冲 (下一步)',
    autoPause: '⏸ 暂停',
    autoRun: '▶ 自动运行',
    reset: '↺ 重置',
    done: '✅ 程序执行完毕！共执行 {programLength} 条指令，{stepIndex} 个时钟步骤。',
    restart: '重新开始',
    startHint: '点击"时钟脉冲"开始逐步执行，或点击"自动运行"连续播放。',
    aluOps: {
      idle: '—',
      decode: '译码',
      prepare: '准备',
      readMemory: '读内存',
      immediate: '立即数',
      result: '= 结果',
      writeMemory: '写内存',
      writeBack: '写回'
    },
    steps: {
      fetch1:
        '[取指 1/3] PC={pc}，控制单元发出读信号，将 PC 值送入 MAR（内存地址寄存器）',
      fetch2: '[取指 2/3] MAR={pc} 通过地址总线送到主存，主存定位该地址',
      fetch3:
        '[取指 3/3] 主存将指令 "{inst}" 经数据总线送入 MDR，再转存到 IR；PC 自增 → {nextPc}',
      decode1:
        '[译码 1/2] 控制单元解析 IR 中的指令 "{inst}"，识别操作码与操作数',
      decode2:
        '[译码 2/2] 控制单元生成控制信号 "{op}"，激活对应功能部件，准备操作数路径',
      load1: '[执行 1/2] 将操作数地址 {src} 送入 MAR，通过地址总线访问主存',
      load2:
        '[执行 2/2] 主存数据 42 经数据总线送入 MDR，再写入目标寄存器 {dst}',
      loadi: '[执行] 立即数 #{imm} 直接从 IR 中提取，写入寄存器 {dst}',
      add1: '[执行 1/2] ALU 读取 R0 和 R1 的值，开始加法运算',
      add2: '[执行 2/2] ALU 完成加法，结果暂存到累加器 ACC',
      store1:
        '[执行 1/2] 将目标地址 {addr} 送入 MAR，将 {src} 的值送入 MDR，准备写入主存',
      store2: '[执行 2/2] MDR 的值经数据总线写入主存地址 {addr}',
      wbAdd1: '[写回 1/2] 将 ACC 中的运算结果写回目标寄存器 R0',
      wbAdd2:
        '[写回 2/2] 写回完成，PC 已在取指阶段自增，指向下一条指令 {nextPc}',
      wbStore:
        '[写回] STORE 指令结果已在执行阶段写入主存，写回阶段确认完成，PC={nextPc}',
      wbDefault:
        '[写回] 结果已写入目标寄存器，PC 已自增至 {nextPc}，准备执行下一条指令',
      signal: {
        marPc: 'MAR ← PC ({pc})',
        addr: '地址总线: {pc}',
        mdrIrPc: 'MDR ← MEM[{pc}]；IR ← MDR；PC++',
        opcode: 'IR → 操作码: {op}',
        control: '控制信号: {op}',
        load1: 'MAR ← {src}',
        load2: 'MDR ← MEM[{src}]；{dst} ← MDR',
        loadi: '{dst} ← #{imm}',
        add1: 'ALU: R0 + R1',
        add2: 'ACC ← R0 + R1',
        store1: 'MAR ← {addr}；MDR ← {src}',
        store2: 'MEM[{addr}] ← MDR',
        wbAdd: 'R0 ← ACC',
        wbAddPc: 'PC = {nextPc}',
        wbStore: '完成',
        wbDefault: 'PC = {nextPc}'
      }
    }
  },
  computerOrganization: {
    codeToInstruction: {
      title: '🔗 从代码到指令：一行代码的翻译之旅',
      desc: '点击每个阶段，看你写的代码如何一步步变成 CPU 能执行的指令',
      insightTitle: '💡 关键理解',
      insightText:
        '指令集就是 CPU 的「API」——它定义了 CPU 能听懂的所有命令。编译器的工作就是把你写的高级语言「翻译」成这套 API 的调用序列。不同的 CPU（x86、ARM）有不同的指令集，就像不同的服务有不同的 API。',
      examples: [
        {
          code: 'int a = 10 + 5;',
          stages: [
            {
              name: '你写的代码',
              content: 'int a = 10 + 5;',
              explain:
                '这是你在编辑器里写的高级语言代码。对人类来说很好懂，但 CPU 完全看不懂——它不认识 int、也不知道 + 是什么。'
            },
            {
              name: '编译器翻译成汇编',
              content:
                'MOV  R1, #10    ; 把 10 放入寄存器 R1\nMOV  R2, #5     ; 把 5 放入寄存器 R2\nADD  R3, R1, R2 ; R3 = R1 + R2\nSTORE R3, [a]   ; 把结果存到变量 a 的内存地址',
              explain:
                '编译器把一行高级代码拆成了 4 条汇编指令。每条指令只做一件最简单的事：搬数据、做加法、存结果。这就是 CPU 的「能力粒度」。'
            },
            {
              name: '汇编器转成机器码',
              content:
                '0001 0001 0000 1010  → MOV R1, #10\n0001 0010 0000 0101  → MOV R2, #5\n0010 0011 0001 0010  → ADD R3, R1, R2\n0100 0011 1000 0000  → STORE R3, [a]',
              explain:
                '汇编器把每条汇编指令编码成二进制数字。操作码（前几位）告诉 CPU「做什么」，操作数（后面的位）告诉 CPU「对谁做」。这就是 CPU 真正执行的东西。'
            },
            {
              name: 'CPU 逐条执行',
              content:
                '时钟 1: 取指 → 译码 → 执行 MOV R1, #10\n时钟 2: 取指 → 译码 → 执行 MOV R2, #5\n时钟 3: 取指 → 译码 → 执行 ADD R3, R1, R2\n时钟 4: 取指 → 译码 → 执行 STORE R3, [a]',
              explain:
                'CPU 按顺序从内存取出每条指令，译码后执行。每个时钟周期处理一条指令（简化模型）。4 条指令执行完，变量 a 的值就是 15 了。'
            }
          ]
        },
        {
          code: 'if (x > 0) y = 1;',
          stages: [
            {
              name: '你写的代码',
              content: 'if (x > 0) y = 1;',
              explain:
                '一个简单的条件判断。人类一眼就懂，但 CPU 没有「if」的概念——它只会比较和跳转。'
            },
            {
              name: '编译器翻译成汇编',
              content:
                'LOAD R1, [x]     ; 从内存读取 x 的值\nCMP  R1, #0       ; 比较 R1 和 0\nBLE  skip         ; 如果 ≤ 0，跳过下面\nMOV  R2, #1       ; R2 = 1\nSTORE R2, [y]     ; 把 1 存到 y\nskip:             ; 跳转目标',
              explain:
                '编译器把 if 语句拆成了「比较 + 条件跳转」。CMP 指令比较两个值并设置标志位，BLE 根据标志位决定是否跳过赋值代码。这就是 CPU 实现条件逻辑的方式。'
            },
            {
              name: '汇编器转成机器码',
              content:
                '0011 0001 1000 0000  → LOAD R1, [x]\n0101 0001 0000 0000  → CMP R1, #0\n0110 0000 0000 0011  → BLE +3（跳过3条）\n0001 0010 0000 0001  → MOV R2, #1\n0100 0010 1000 0001  → STORE R2, [y]',
              explain:
                '注意 BLE 指令的操作数是「+3」——这是一个相对地址偏移，告诉 CPU 向前跳 3 条指令。这就是「相对寻址」的实际应用。'
            },
            {
              name: 'CPU 逐条执行',
              content:
                '假设 x = 5（大于 0）:\n→ LOAD: 读取 x=5 到 R1\n→ CMP:  比较 5 > 0，设置标志位\n→ BLE:  条件不满足，不跳转\n→ MOV:  R2 = 1\n→ STORE: y = 1 ✅',
              explain:
                '因为 x=5 大于 0，BLE 的条件不满足，所以 CPU 继续执行下面的赋值。如果 x=0，BLE 会跳过赋值，直接到 skip 标签处。'
            }
          ]
        }
      ]
    },
    instructionFormat: {
      title: '机器指令格式',
      subtitle: '操作码 + 操作数 = 机器指令',
      bitLabel: '{bits}位',
      exampleTitle: '示例指令',
      formatExplanationTitle: '{type} 格式说明',
      commonExamples: '常见指令示例',
      opcodeTitle: '常用操作码 (Opcode)',
      formats: [
        {
          id: 'zero',
          type: '零地址',
          fields: [{ name: '操作码', bits: 8 }],
          example: '01101100',
          description: '操作数隐含在栈顶',
          explanation:
            '零地址指令只有操作码，操作数隐含在操作数栈中。常用于堆栈计算机，如 ENTER、EXIT 等。',
          examples: [
            { name: 'POP', desc: '弹出栈顶数据' },
            { name: 'PUSH', desc: '压入数据到栈顶' },
            { name: 'CALL', desc: '调用子程序' }
          ]
        },
        {
          id: 'one',
          type: '一地址',
          fields: [
            { name: '操作码', bits: 8 },
            { name: '地址', bits: 24 }
          ],
          example: '01101100 00000001 00000010 00000011',
          description: '一个操作数地址，另一个隐含',
          explanation:
            '一地址指令有一个操作数在内存/寄存器中，另一个操作数隐含在 ACC（累加器）中。如 INC、DEC 等单操作数指令。',
          examples: [
            { name: 'INC A', desc: 'A = A + 1' },
            { name: 'DEC A', desc: 'A = A - 1' },
            { name: 'NOT A', desc: 'A = ~A' }
          ]
        },
        {
          id: 'two',
          type: '二地址',
          fields: [
            { name: '操作码', bits: 8 },
            { name: '目的地址', bits: 8 },
            { name: '源地址', bits: 8 }
          ],
          example: '01101100 00000001 00000010',
          description: '两个操作数地址，结果存目的地址',
          explanation:
            '最常用的指令格式。两个操作数地址，结果覆盖目的操作数。如 ADD、SUB、MOV 等。',
          examples: [
            { name: 'MOV R1, R2', desc: 'R1 = R2' },
            { name: 'ADD R1, R2', desc: 'R1 = R1 + R2' },
            { name: 'SUB R1, R2', desc: 'R1 = R1 - R2' }
          ]
        },
        {
          id: 'three',
          type: '三地址',
          fields: [
            { name: '操作码', bits: 8 },
            { name: '目的', bits: 8 },
            { name: '源1', bits: 8 },
            { name: '源2', bits: 8 }
          ],
          example: '01101100 00000001 00000010 00000011',
          description: '结果存新地址，不破坏源操作数',
          explanation:
            '三个地址分别指定目的操作数和两个源操作数。结果存入目的地址，不改变源操作数。常见于复杂指令集。',
          examples: [
            { name: 'ADD R1, R2, R3', desc: 'R1 = R2 + R3' },
            { name: 'SUB R1, R2, R3', desc: 'R1 = R2 - R3' },
            { name: 'MUL R1, R2, R3', desc: 'R1 = R2 × R3' }
          ]
        }
      ],
      opcodes: [
        ['00000000', 'NOP', '无操作'],
        ['00000001', 'MOV', '数据传送'],
        ['00000010', 'ADD', '加法'],
        ['00000011', 'SUB', '减法'],
        ['00000100', 'MUL', '乘法'],
        ['00000101', 'DIV', '除法'],
        ['00000110', 'AND', '逻辑与'],
        ['00000111', 'OR', '逻辑或'],
        ['00001000', 'NOT', '逻辑非'],
        ['00001001', 'XOR', '异或'],
        ['00001010', 'SHL', '左移'],
        ['00001011', 'SHR', '右移'],
        ['00001100', 'JMP', '无条件跳转'],
        ['00001101', 'JE', '相等跳转'],
        ['00001110', 'JNE', '不等跳转'],
        ['00001111', 'CALL', '调用子程序'],
        ['00010000', 'RET', '返回'],
        ['00010001', 'PUSH', '压栈'],
        ['00010010', 'POP', '出栈'],
        ['00010011', 'LOAD', '从内存加载'],
        ['00010100', 'STORE', '存入内存']
      ]
    },
    addressingMode: {
      title: '寻址方式',
      subtitle: '如何找到操作数的位置',
      definition: '定义',
      instructionFormat: '指令格式',
      example: '示例',
      executionProcess: '执行过程',
      characteristics: '特点',
      speed: '速度',
      flexibility: '灵活性',
      fast: '快',
      slow: '慢',
      fastest: '最快',
      relativelyFast: '较快',
      comparisonTitle: '寻址方式对比',
      headers: ['寻址方式', '格式', '速度', '用途'],
      modes: [
        {
          id: 'immediate',
          name: '立即数寻址',
          english: 'Immediate Addressing',
          definition: '操作数直接包含在指令中，作为指令的一部分立即可用',
          format: 'MOV R1, #100',
          usage: '常数赋值、初始化',
          fast: true,
          flexibility: '低',
          example: {
            assembly: 'MOV R1, #100  ; R1 = 100',
            description: '立即数 100 直接存在于指令中，无需访问任何寄存器或内存'
          },
          steps: [
            'CPU 从指令中直接读取立即数 100',
            '将立即数写入目标寄存器 R1',
            '执行完成，无需额外内存访问'
          ]
        },
        {
          id: 'register',
          name: '寄存器寻址',
          english: 'Register Addressing',
          definition: '操作数位于 CPU 内部的寄存器中',
          format: 'MOV R1, R2',
          usage: '寄存器间数据传送',
          fast: true,
          flexibility: '中',
          example: {
            assembly: 'MOV R1, R2  ; R1 = R2',
            description: '从源寄存器 R2 读取数据，存入目标寄存器 R1'
          },
          steps: [
            'CPU 从寄存器组中读取 R2 的值',
            '将值写入目标寄存器 R1',
            '执行完成，无需访问内存'
          ]
        },
        {
          id: 'direct',
          name: '直接寻址',
          english: 'Direct Addressing',
          definition: '指令中直接给出操作数的内存地址',
          format: 'MOV R1, [100]',
          usage: '访问全局变量',
          fast: false,
          flexibility: '高',
          example: {
            assembly: 'MOV R1, [0x1000]  ; R1 = M[0x1000]',
            description: '指令中包含内存地址 0x1000，从该地址读取数据'
          },
          steps: [
            'CPU 从指令中解析出地址 0x1000',
            '将地址送入 MAR（内存地址寄存器）',
            '访问内存，从地址 0x1000 读取数据到 MDR',
            '将数据从 MDR 写入目标寄存器 R1'
          ]
        },
        {
          id: 'indirect',
          name: '间接寻址',
          english: 'Indirect Addressing',
          definition: '指令中给出寄存器，寄存器中存放操作数的地址',
          format: 'MOV R1, [R2]',
          usage: '指针操作、数组遍历',
          fast: false,
          flexibility: '高',
          example: {
            assembly: 'MOV R1, [R2]  ; R1 = M[R2]',
            description: 'R2 中存放地址，从该地址读取数据'
          },
          steps: [
            'CPU 从寄存器 R2 中读取地址',
            '将地址送入 MAR',
            '访问内存，读取数据到 MDR',
            '将数据写入目标寄存器 R1'
          ]
        },
        {
          id: 'indexed',
          name: '变址寻址',
          english: 'Indexed Addressing',
          definition: '指令中给出基地址加上变址寄存器的值作为操作数地址',
          format: 'MOV R1, [R2 + R3]',
          usage: '数组访问、循环',
          fast: false,
          flexibility: '高',
          example: {
            assembly: 'MOV R1, [R2 + R3]  ; R1 = M[R2+R3]',
            description: '有效地址 = R2 + R3，用于数组元素访问'
          },
          steps: [
            'CPU 读取基地址寄存器 R2 的值',
            'CPU 读取变址寄存器 R3 的值',
            'ALU 计算有效地址 = R2 + R3',
            '将有效地址送入 MAR',
            '访问内存，读取数据到 MDR',
            '将数据写入目标寄存器 R1'
          ]
        },
        {
          id: 'based',
          name: '基址寻址',
          english: 'Based Addressing',
          definition: '指令中给出基址寄存器加上偏移量作为操作数地址',
          format: 'MOV R1, [R2 + 100]',
          usage: '结构体访问、函数参数',
          fast: false,
          flexibility: '高',
          example: {
            assembly: 'MOV R1, [RBP - 8]  ; 访问栈帧中的局部变量',
            description: '有效地址 = RBP - 8，用于访问函数栈帧中的变量'
          },
          steps: [
            'CPU 读取基址寄存器 RBP 的值',
            '计算有效地址 = RBP - 8',
            '将有效地址送入 MAR',
            '访问内存，读取数据'
          ]
        },
        {
          id: 'relative',
          name: '相对寻址',
          english: 'Relative Addressing',
          definition: '操作数地址是当前指令地址加上一个偏移量',
          format: 'JMP LABEL',
          usage: '循环、条件跳转',
          fast: true,
          flexibility: '高',
          example: {
            assembly: 'JMP LOOP  ; 跳转到 LOOP 标签处',
            description: '跳转目标地址 = PC + 偏移量，用于循环和分支'
          },
          steps: [
            'CPU 计算跳转目标地址 = 当前 PC + 偏移量',
            '将目标地址写入 PC',
            '下一条指令从新地址开始执行'
          ]
        }
      ]
    },
    storageHierarchy: {
      title: '存储层次结构',
      subtitle: '从快到慢，从小到大',
      tableTitle: '详细对比',
      principleTitle: '局部性原理',
      principleTextPrefix: '程序倾向于访问',
      temporalLocality: '最近访问过的位置',
      principleTextMiddle: '（时间局部性）和',
      spatialLocality: '邻近的位置',
      principleTextSuffix: '（空间局部性）',
      principleExample: '利用局部性原理，缓存可以显著提高性能',
      levels: [
        {
          className: 'register',
          name: '寄存器',
          speed: '最快',
          size: '最小 (KB)'
        },
        { className: 'cache', name: '缓存', speed: '很快', size: '小 (MB)' },
        { className: 'ram', name: '内存', speed: '快', size: '中等 (GB)' },
        { className: 'disk', name: '硬盘', speed: '慢', size: '大 (TB)' },
        { className: 'network', name: '网络/云', speed: '最慢', size: '无限' }
      ],
      headers: ['存储层次', '访问时间', '典型容量', '成本'],
      rows: [
        ['寄存器', '< 1 ns', '几 KB', '最高'],
        ['L1 缓存', '~1 ns', '64 KB', '很高'],
        ['L2 缓存', '~3 ns', '256 KB', '高'],
        ['L3 缓存', '~10 ns', '8 MB', '中等'],
        ['内存', '~100 ns', '8-32 GB', '中低'],
        ['SSD', '~100 μs', '256 GB-2 TB', '低'],
        ['HDD', '~10 ms', '1-10 TB', '最低']
      ]
    },
    networkOverview: {
      title: '网络是怎么连接的',
      subtitle: '从发送到接收的完整过程',
      sender: '发送方',
      receiver: '接收方',
      mailApp: '邮件应用',
      packet: '📦 数据包',
      processTitle: '数据封装过程',
      stackTitle: '网络协议栈 (OSI 模型)',
      pathSteps: [
        { icon: '📧', name: '应用层', desc: '邮件软件创建邮件内容' },
        { icon: '🔐', name: '传输层', desc: 'TCP 添加端口号和序号' },
        { icon: '🌐', name: '网络层', desc: 'IP 添加源地址和目标地址' },
        { icon: '🔌', name: '数据链路层', desc: '以太网添加 MAC 地址' },
        { icon: '⚡', name: '物理层', desc: '转换成电信号发送' }
      ],
      encapsulationLayers: [
        { num: '7', name: '应用层', data: '邮件内容: "Hello!"' },
        { num: '6', name: '表示层', data: '数据编码: UTF-8' },
        { num: '5', name: '会话层', data: '会话ID: sess_123' },
        { num: '4', name: '传输层', data: 'TCP 头: 端口 25' },
        {
          num: '3',
          name: '网络层',
          data: 'IP 头: 192.168.1.100 → 192.168.1.200'
        },
        { num: '2', name: '数据链路层', data: '以太网帧: MAC 地址' },
        { num: '1', name: '物理层', data: '比特流: 01010101...' }
      ],
      protocolLayers: [
        '应用层 (HTTP, SMTP)',
        '传输层 (TCP, UDP)',
        '网络层 (IP)',
        '数据链路层 (Ethernet)',
        '物理层 (电信号)'
      ]
    },
    pipeline: {
      title: 'CPU 指令流水线',
      subtitle: '五级流水线：取指 → 译码 → 执行 → 访存 → 写回',
      start: '开始执行',
      step: '单步执行',
      reset: '重置',
      sequential: '顺序执行',
      pipeline: '流水线执行',
      totalCycles: '总周期数',
      completedInstructions: '已完成指令',
      explanationTitle: '流水线原理',
      sequentialText:
        '顺序执行：每条指令执行完才执行下一条，N条指令需要 N × 5 个周期',
      pipelineText: '流水线执行：多条指令同时处于不同阶段，理想情况下 CPI ≈ 1',
      hazardWarning: '⚠️ 流水线冒险：数据冒险、控制冒险、结构冒险',
      stages: ['取指(IF)', '译码(ID)', '执行(EX)', '访存(MEM)', '写回(WB)'],
      instructions: [
        'ADD R1,R2,R3',
        'SUB R4,R1,R5',
        'LOAD R6,[R4]',
        'STORE R6,[R7]',
        'AND R8,R1,R6'
      ]
    },
    busSystem: {
      title: '计算机总线系统',
      subtitle: '地址总线、数据总线、控制总线',
      cpu: 'CPU',
      controlUnit: '控制单元',
      alu: '运算单元',
      mainMemory: '主存',
      addressBus: '地址总线',
      dataBus: '数据总线',
      controlBus: '控制总线',
      bits32: '32位',
      bits64: '64位',
      controlSignal: '控制信号',
      readMemory: '读取内存',
      writeMemory: '写入内存',
      addressPlaceholder: '地址(0-7)',
      dataPlaceholder: '数据',
      logTitle: '操作流程',
      explanationTitle: '总线知识点',
      explanations: [
        { label: '地址总线', desc: 'CPU 发送内存地址，单向传输' },
        { label: '数据总线', desc: '传输实际数据，双向传输' },
        { label: '控制总线', desc: '传输读/写等控制信号' }
      ],
      logs: {
        sendAddress: 'CPU 通过地址总线发送地址 {address}',
        readSignal: '控制总线发送 READ 信号',
        memoryReturn: '主存通过数据总线返回数据 {data}',
        cpuReceive: 'CPU 接收数据到寄存器',
        sendData: 'CPU 通过数据总线发送数据 {data}',
        writeSignal: '控制总线发送 WRITE 信号',
        writeDone: '数据写入主存地址 {address}'
      }
    },
    controller: {
      title: '控制器工作原理',
      subtitle: '控制信号如何协调 CPU 各个部件',
      controlUnit: '控制单元 CU',
      instructionRegister: '指令寄存器 IR',
      decoder: '指令译码器',
      timingGenerator: '时序发生器',
      outputSignals: '输出控制信号：',
      blocks: {
        pc: '程序计数器',
        mar: '地址寄存器',
        memory: '主存',
        mdr: '数据寄存器',
        ir: '指令寄存器',
        decoder: '译码器',
        alu: '算术逻辑单元',
        acc: '累加器'
      },
      buttons: {
        fetch: '执行取指周期',
        add: '执行 ADD 指令',
        load: '执行 LOAD 指令'
      },
      currentMicroinstruction: '当前微指令',
      conceptTitle: '控制器核心概念',
      concepts: [
        {
          label: '控制信号：',
          desc: '由控制器发出的电信号，用于控制数据通路中各个部件的动作'
        },
        {
          label: '时序：',
          desc: 'CPU 操作按时钟节拍进行，每个节拍执行特定微操作'
        },
        {
          label: '硬布线 vs 微程序：',
          desc: '硬布线控制器速度快但设计复杂；微程序控制器灵活但速度稍慢'
        }
      ],
      ops: {
        fetch1: 'PC→MAR: 将PC中的地址送入MAR',
        fetch2: 'MEM→MDR: 从内存读取指令到MDR',
        fetch3: 'MDR→IR: 将指令送入IR',
        fetch4: 'IR→ID: 指令送入译码器',
        add1: '指令译码：识别为ADD指令',
        add2: 'ALU执行加法运算',
        add3: '结果写入ACC',
        load1: '指令译码：识别为LOAD指令',
        load2: 'PC→MAR: 取操作数地址',
        load3: 'MEM→MDR: 读取数据',
        load4: 'MDR→ACC: 数据送入ACC'
      }
    },
    psw: {
      title: '程序状态字 (PSW)',
      subtitle: 'CPU 的"状态指示灯"',
      englishName: '英文名：',
      role: '作用：',
      setCondition: '设置条件：',
      usage: '用途：',
      operationTitle: '运算结果对标志位的影响',
      operandA: '操作数 A：',
      operandB: '操作数 B：',
      resultLabel: '运算结果：',
      usageTitle: '标志位的典型用途',
      flags: [
        [
          'CF',
          '进位标志',
          'Carry Flag',
          0,
          '无符号数运算产生进位或借位时置 1',
          '加法产生进位，或减法产生借位',
          '多位数无符号运算、循环计数'
        ],
        [
          'PF',
          '奇偶标志',
          'Parity Flag',
          0,
          '结果的低 8 位中 1 的个数为偶数时置 1',
          '结果低 8 位有偶数个 1',
          '数据通信中的错误检测'
        ],
        [
          'AF',
          '辅助进位',
          'Auxiliary Carry Flag',
          0,
          '低 4 位产生进位或借位时置 1',
          '第 3 位（低 4 位）产生进位',
          'BCD 码运算调整'
        ],
        [
          'ZF',
          '零标志',
          'Zero Flag',
          0,
          '运算结果为 0 时置 1',
          '结果 = 0',
          '条件跳转、循环控制、比较操作'
        ],
        [
          'SF',
          '符号标志',
          'Sign Flag',
          0,
          '运算结果为负数时置 1（等于结果最高位）',
          '结果最高位 = 1（负数）',
          '有符号数大小比较、负数判断'
        ],
        [
          'TF',
          '陷阱标志',
          'Trap Flag',
          0,
          '置 1 时 CPU 进入单步调试模式',
          '软件设置',
          '程序调试'
        ],
        [
          'IF',
          '中断标志',
          'Interrupt Flag',
          1,
          '置 1 时 CPU 响应可屏蔽中断',
          '软件设置',
          '中断开关'
        ],
        [
          'DF',
          '方向标志',
          'Direction Flag',
          0,
          '置 1 时字符串操作从高地址向低地址',
          '软件设置',
          '字符串操作方向控制'
        ],
        [
          'OF',
          '溢出标志',
          'Overflow Flag',
          0,
          '有符号数运算结果超出表示范围时置 1',
          '正溢出或负溢出',
          '有符号数运算、溢出检测'
        ]
      ],
      usageCards: [
        {
          icon: '🔀',
          name: '条件跳转',
          desc: 'JE (相等跳转)、JNE、JG、JL 等指令根据 ZF、SF、OF 决定是否跳转'
        },
        {
          icon: '➕',
          name: '算术运算',
          desc: '多位数运算需要 CF 判断进位，OF 判断溢出'
        },
        {
          icon: '🔄',
          name: '循环控制',
          desc: '循环指令使用 ZF 判断循环结束条件'
        }
      ]
    },
    cache: {
      title: '缓存 (Cache) 原理',
      subtitle: 'CPU 与内存之间的"桥梁"',
      cpuCore: 'CPU 核心',
      l1: 'L1 缓存',
      l2: 'L2 缓存',
      l3: 'L3 缓存',
      memory: '主存',
      operationTitle: '缓存操作演示',
      logTitle: '操作记录',
      readAddress: '读取地址 {address}',
      localityTitle: '为什么缓存有效？—— 局部性原理',
      temporalLocality: '时间局部性',
      temporalDesc: '刚访问的数据很可能再次被访问',
      temporalExample: '循环中的变量',
      spatialLocality: '空间局部性',
      spatialDesc: '访问某个数据后，附近的数据也可能被访问',
      spatialExample: '数组遍历、顺序执行',
      mappingTitle: '缓存映射方式',
      speed: '速度',
      hitRate: '命中率',
      complexity: '实现复杂度',
      calcTitle: '命中率计算',
      formula: '平均访问时间 = H × Tc + (1-H) × Tm',
      tc: '缓存访问时间 (Tc):',
      tm: '内存访问时间 (Tm):',
      h: '命中率 (H):',
      avgTime: '平均访问时间 = {time} ns',
      mappings: [
        {
          id: 'direct',
          type: '直接映射',
          desc: '每个主存块只能映射到唯一的缓存行',
          speed: '最快',
          hitRate: '较低',
          complexity: '最低'
        },
        {
          id: 'set',
          type: '组相联',
          desc: '每个主存块可以映射到 N 个缓存行（N路组相联）',
          speed: '较快',
          hitRate: '较高',
          complexity: '中等'
        },
        {
          id: 'full',
          type: '全相联',
          desc: '主存块可以放到任意缓存行中',
          speed: '最慢',
          hitRate: '最高',
          complexity: '最高'
        }
      ],
      logs: {
        read: '读取地址 {address}',
        l1Hit: '✓ L1 缓存命中!',
        l1Miss: '✗ L1 缓存未命中',
        l2Miss: '✗ L2 缓存未命中',
        loadMemory: '从主存加载数据',
        storeCache: '数据存入缓存'
      }
    },
    ioMethod: {
      title: 'I/O 方式对比',
      subtitle: '程序查询 · 中断方式 · DMA',
      workflow: '工作流程',
      cpuLevel: 'CPU 参与度',
      speed: '速度',
      complexity: '复杂度',
      comparisonTitle: '三种 I/O 方式对比',
      headers: ['特性', '程序查询', '中断方式', 'DMA'],
      rows: [
        ['CPU 参与度', '全程参与', '仅处理中断', '几乎不参与'],
        ['数据传输', 'CPU 逐字节搬运', 'CPU 逐字搬运', '外设直接到内存'],
        ['优点', '简单、控制灵活', 'CPU 效率高', 'CPU 完全解放'],
        ['缺点', 'CPU 利用率低', '中断开销', '硬件复杂'],
        ['适用场景', '简单外设、低速设备', '中低速设备', '高速批量传输']
      ],
      dmaTitle: 'DMA 传输过程',
      dmaController: 'DMA 控制器',
      memory: '内存',
      dmaStep1: '1. CPU 设置 DMA',
      dmaStep2: '2. DMA 直接访问内存',
      startDma: '开始 DMA 传输',
      reset: '重置',
      interruptTitle: '中断处理流程',
      nextStep: '下一步',
      methods: [
        {
          id: 'programmed',
          name: '程序查询',
          english: 'Programmed I/O',
          cpuLevel: '高',
          cpuLevelClass: 'level-high',
          speed: '慢',
          complexity: '低',
          steps: [
            'CPU 轮询检查 I/O 设备状态',
            '设备忙？继续等待',
            '设备就绪，发送读写命令',
            'CPU 逐字节读取/写入数据',
            '判断是否传输完成',
            '未完成则继续查询'
          ]
        },
        {
          id: 'interrupt',
          name: '中断方式',
          english: 'Interrupt-Driven I/O',
          cpuLevel: '中',
          cpuLevelClass: 'level-medium',
          speed: '中',
          complexity: '中',
          steps: [
            'CPU 启动 I/O 设备',
            'CPU 继续执行其他任务',
            'I/O 完成后发送中断请求',
            'CPU 响应中断，保存现场',
            '执行中断处理程序',
            '恢复现场，继续执行'
          ]
        },
        {
          id: 'dma',
          name: 'DMA',
          english: 'Direct Memory Access',
          cpuLevel: '低',
          cpuLevelClass: 'level-low',
          speed: '快',
          complexity: '高',
          steps: [
            'CPU 设置 DMA 控制器',
            '告诉 DMA 源地址、目标地址、传输长度',
            'CPU 去执行其他任务',
            'DMA 控制器直接与内存交换数据',
            '传输完成，DMA 发送中断通知 CPU'
          ]
        }
      ],
      interruptFlow: [
        { title: '中断请求', desc: 'I/O 设备向 CPU 发送中断请求信号' },
        { title: '中断响应', desc: 'CPU 完成当前指令后响应中断' },
        { title: '保存现场', desc: '保存 PC、寄存器等当前状态到栈' },
        { title: '中断处理', desc: '执行中断服务程序 ISR' },
        { title: '恢复现场', desc: '恢复保存的寄存器值' },
        { title: '返回执行', desc: '返回被中断的程序继续执行' }
      ]
    },
    vibeCodingFullstack: {
      flow: {
        traditionalLabel: '传统开发流程',
        vibeLabel: 'Vibe Coding 流程',
        traditionalLoop: '↑ 反复循环 ↓',
        vibeLoop: '↑ 快速迭代 ↓',
        traditionalSteps: [
          '你',
          '学习语法',
          '写代码',
          '调试',
          '查文档',
          '修改',
          '运行'
        ],
        vibeSteps: [
          { text: '你', highlight: false },
          { text: '用自然语言描述需求', highlight: true },
          { text: 'AI 生成代码', highlight: true },
          { text: '你审核修改', highlight: false },
          { text: '运行', highlight: false }
        ]
      },
      skillShift: {
        title: '能力重要性变化',
        subtitle: 'AI 时代，哪些能力更重要了？',
        beforeTitle: '传统时代更重要',
        afterTitle: 'AI 时代更重要',
        insightLabel: '关键洞察：',
        insight:
          'AI 能帮你写代码，但判断力、架构思维、领域知识、调试能力是 AI 替代不了的。',
        beforeSkills: [
          { name: '语法记忆', level: 90, desc: '熟记 API 和语法细节' },
          { name: '手写代码速度', level: 85, desc: '快速敲代码的能力' },
          { name: '查文档能力', level: 80, desc: '快速找到 API 用法' }
        ],
        afterSkills: [
          { name: '需求描述能力', level: 95, desc: '用自然语言准确描述需求' },
          { name: '代码审核能力', level: 90, desc: '判断 AI 生成代码的对错' },
          { name: '架构设计能力', level: 85, desc: '设计系统整体结构' },
          { name: '问题定位能力', level: 80, desc: '出问题时知道从哪排查' }
        ]
      },
      fieldMap: {
        title: '计算机领域全景图',
        subtitle: '点击查看详情',
        adviceLabel: '建议：',
        advice:
          '不要试图一次学完所有方向。先选一个方向深入，建立"根据地"，再横向扩展。',
        fields: [
          {
            name: '前端',
            desc: '用户能看到、能交互的一切',
            techs: ['HTML/CSS', 'JavaScript', 'React/Vue']
          },
          {
            name: '后端',
            desc: '服务器端的业务逻辑和数据处理',
            techs: ['Node.js', 'Go', 'Java', 'Python']
          },
          {
            name: '移动端',
            desc: '手机上的应用体验',
            techs: ['Swift', 'Kotlin', 'Flutter']
          },
          {
            name: 'AI/算法',
            desc: '让系统变"聪明"',
            techs: ['PyTorch', 'TensorFlow', '机器学习']
          },
          {
            name: '运维/DevOps',
            desc: '保证系统稳定运行',
            techs: ['Docker', 'K8s', 'CI/CD']
          },
          {
            name: '数据工程',
            desc: '数据采集、存储、分析',
            techs: ['SQL', 'Spark', '数据仓库']
          }
        ]
      },
      frontendTriad: {
        title: '前端三件套',
        subtitle: '网页开发的三大基石',
        relationshipLabel: '协作关系：',
        relationship:
          'HTML 搭骨架，CSS 穿衣服，JavaScript 让它动起来。三者缺一不可。',
        triad: [
          {
            name: 'HTML',
            role: '结构层',
            analogy: '房子的骨架：墙、门、窗',
            examples: ['div', 'span', 'form', 'input']
          },
          {
            name: 'CSS',
            role: '表现层',
            analogy: '房子的装修：颜色、位置、大小',
            examples: ['color', 'flex', 'grid', 'animation']
          },
          {
            name: 'JavaScript',
            role: '行为层',
            analogy: '房子的智能：开关灯、开门',
            examples: ['事件', 'DOM操作', '网络请求']
          }
        ]
      },
      frontendFramework: {
        title: '前端框架演进',
        subtitle: '从 jQuery 到现代框架',
        essenceLabel: '框架的本质：',
        essence:
          '解决"数据变化后如何高效更新 UI"的问题。现代框架让你只需关注"数据是什么"，框架自动处理"UI 怎么变"。',
        eras: [
          {
            name: '原生时代',
            time: '1990s',
            desc: '直接用代码操控页面元素，一切从零开始',
            techs: ['HTML', 'CSS', 'JavaScript']
          },
          {
            name: 'jQuery 时代',
            time: '2006-2015',
            desc: '简化页面操控，跨浏览器兼容',
            techs: ['jQuery', 'Bootstrap']
          },
          {
            name: 'MVVM 时代',
            time: '2010-2015',
            desc: '数据驱动视图，双向绑定',
            techs: ['Angular.js', 'Knockout']
          },
          {
            name: '组件化时代',
            time: '2013-至今',
            desc: '声明式、组件化，框架自动更新页面',
            techs: ['React', 'Vue', 'Angular']
          },
          {
            name: '新时代',
            time: '2020-至今',
            desc: '编译时优化，更少运行时开销',
            techs: ['Svelte', 'Solid']
          }
        ]
      },
      backendCore: {
        title: '后端核心概念',
        subtitle: '服务器端的核心职责',
        flowTitle: '请求处理流程',
        valueLabel: '后端的核心价值：',
        value:
          '不是写代码，而是设计系统。如何让系统稳定、安全、高效、可扩展，才是后端工程师的真正能力。',
        coreConcepts: [
          {
            name: 'API 设计',
            desc: '定义客户端如何与服务端交互',
            examples: ['RESTful', 'GraphQL']
          },
          {
            name: '业务逻辑',
            desc: '处理核心业务规则和流程',
            examples: ['订单处理', '支付流程']
          },
          {
            name: '数据存储',
            desc: '数据的持久化和查询',
            examples: ['MySQL', 'Redis']
          },
          {
            name: '认证授权',
            desc: '用户身份验证和权限控制',
            examples: ['JWT', 'OAuth']
          },
          {
            name: '性能优化',
            desc: '缓存、异步、并发处理',
            examples: ['缓存', '消息队列']
          },
          {
            name: '安全防护',
            desc: '防止攻击和数据泄露',
            examples: ['SQL注入防护', 'HTTPS']
          }
        ],
        flowSteps: ['接收请求', '路由解析', '业务处理', '数据操作', '返回响应']
      },
      languageMap: {
        title: '编程语言分类',
        subtitle: '不同维度看语言',
        adviceLabel: '选择建议：',
        advice: '先学一门主流语言深入，理解编程思想，再学其他语言会容易很多。',
        tabs: [
          { key: 'type', label: '按类型系统' },
          { key: 'level', label: '按抽象层级' },
          { key: 'paradigm', label: '按编程范式' }
        ],
        classifications: {
          type: [
            {
              name: '静态类型',
              desc: '变量类型在编译时确定',
              examples: ['Java', 'C++', 'Go', 'TypeScript']
            },
            {
              name: '动态类型',
              desc: '变量类型在运行时确定',
              examples: ['Python', 'JavaScript', 'Ruby']
            }
          ],
          level: [
            {
              name: '低级语言',
              desc: '接近硬件，执行效率高',
              examples: ['C', '汇编']
            },
            {
              name: '高级语言',
              desc: '接近人类语言，开发效率高',
              examples: ['Python', 'Java', 'JavaScript']
            }
          ],
          paradigm: [
            {
              name: '面向对象',
              desc: '以对象为中心组织代码',
              examples: ['Java', 'C++', 'Python']
            },
            {
              name: '函数式',
              desc: '以函数为中心，强调不可变',
              examples: ['Haskell', 'Elixir', 'Clojure']
            },
            {
              name: '多范式',
              desc: '支持多种编程风格',
              examples: ['Python', 'JavaScript', 'Rust']
            }
          ]
        }
      },
      languageSelection: {
        title: '语言选择指南',
        subtitle: '根据目标选语言',
        recommend: '推荐：',
        principleLabel: '核心原则：',
        principle:
          '语言只是工具，重要的是解决问题的能力。先精通一门，再触类旁通。',
        selections: [
          {
            goal: 'Web 前端',
            desc: '网页、小程序、H5',
            langs: ['JavaScript', 'TypeScript']
          },
          {
            goal: 'Web 后端',
            desc: 'API 服务、业务系统',
            langs: ['Node.js', 'Go', 'Java', 'Python']
          },
          {
            goal: '移动端',
            desc: 'iOS / Android 应用',
            langs: ['Swift', 'Kotlin', 'Flutter']
          },
          {
            goal: 'AI / 数据科学',
            desc: '机器学习、数据分析',
            langs: ['Python']
          },
          {
            goal: '系统编程',
            desc: '操作系统、嵌入式',
            langs: ['C', 'C++', 'Rust']
          },
          {
            goal: '快速原型',
            desc: '脚本、自动化、小工具',
            langs: ['Python', 'Shell']
          }
        ]
      },
      fullstackSkill: {
        title: '全栈技能树',
        subtitle: '前后端通吃的核心能力',
        frontendTitle: '前端能力',
        bridgeTitle: '全栈核心',
        backendTitle: '后端能力',
        noteLabel: '全栈不等于全部精通：',
        note: '核心是打通前后端，能独立完成一个完整功能。不需要在每个领域都达到专家级别。',
        frontendSkills: ['HTML/CSS', 'JavaScript', '框架使用', '响应式设计'],
        backendSkills: ['API 设计', '数据库操作', '业务逻辑', '服务器部署'],
        bridgeSkills: ['HTTP 协议', 'Git 协作', '调试能力', '系统设计']
      },
      aiVsTraditional: {
        title: 'AI 工程师 vs 传统工程师',
        subtitle: '工作方式的差异',
        traditional: '传统工程师',
        ai: 'AI 工程师',
        codingTime: '编码时间占比',
        thinkingTime: '思考时间占比',
        shiftTitle: '能力重心转移',
        down: '重要性下降',
        up: '重要性上升',
        competitivenessLabel: 'AI 时代的核心竞争力：',
        competitiveness:
          '不是"会写代码"，而是"会描述需求、会判断对错、会设计方案"。AI 是你的编程助手，但决策者永远是你。',
        traditionalSteps: [
          '理解需求',
          '查阅文档学习语法',
          '手写代码实现',
          '调试修复 Bug',
          '优化代码性能',
          '编写测试用例'
        ],
        aiSteps: [
          '理解需求',
          '用自然语言描述给 AI',
          '审核 AI 生成的代码',
          '判断是否符合预期',
          '调整需求重新生成',
          '整合到项目中'
        ],
        skillShift: [
          { from: '语法记忆', to: '需求描述能力' },
          { from: '手写代码速度', to: '代码审核能力' },
          { from: '查文档能力', to: '架构设计能力' },
          { from: '调试技巧', to: '问题定位能力' }
        ]
      },
      careerPath: {
        title: '工程师成长路径',
        subtitle: '从入门到精通的技能演进',
        skillLabel: '核心技能：',
        outputLabel: '典型产出：',
        keyLabel: '成长关键点：',
        key: '前 1-2 年打基础，建立独立完成任务的能力；2-3 年选方向，建立深度；3-5 年横向扩展，培养架构思维；5 年+ 技术决策与团队影响力。',
        stages: [
          {
            name: '入门期',
            icon: '🌱',
            time: '0-1 年',
            desc: '学习基础语法和工具，能完成简单任务',
            skills: ['一门语言基础', 'Git 使用', '调试技巧', '阅读文档'],
            output: '能独立完成小功能、修复简单 Bug'
          },
          {
            name: '成长期',
            icon: '🌿',
            time: '1-2 年',
            desc: '熟悉常用框架和最佳实践，能独立负责模块',
            skills: ['框架熟练', '代码规范', '单元测试', 'API 设计'],
            output: '独立负责一个功能模块，代码质量稳定'
          },
          {
            name: '进阶期',
            icon: '🌳',
            time: '2-3 年',
            desc: '深入某个领域，开始有技术选型能力',
            skills: ['领域深入', '性能优化', '架构设计', '技术选型'],
            output: '主导技术方案设计，解决复杂问题'
          },
          {
            name: '成熟期',
            icon: '🌲',
            time: '3-5 年',
            desc: '全栈能力或领域专家，能带领小团队',
            skills: ['全栈能力', '团队协作', '技术分享', '项目管理'],
            output: '负责核心系统，指导新人成长'
          },
          {
            name: '专家期',
            icon: '🏔️',
            time: '5 年+',
            desc: '技术决策者，有行业影响力',
            skills: ['技术战略', '团队建设', '行业洞察', '创新引领'],
            output: '技术方向决策，培养技术团队'
          }
        ]
      },
      learningStrategy: {
        title: 'Vibe Coding 学习策略',
        subtitle: 'AI 时代怎么学更高效',
        principleLabel: '核心原则：',
        principle:
          'AI 是你的编程助手，但决策者永远是你。学会提问、学会判断、学会整合，比学会写代码更重要。',
        strategies: [
          {
            title: '先理解，再让 AI 写',
            desc: '不要一上来就让 AI 写代码。先理解问题是什么，想清楚解决方案，再用 AI 加速实现。'
          },
          {
            title: '把 AI 当结对编程伙伴',
            desc: '遇到不懂的概念，问 AI 解释。遇到复杂问题，和 AI 讨论方案。AI 是你的知识渊博的同事。'
          },
          {
            title: '学会审核 AI 的输出',
            desc: 'AI 生成的代码不一定对。你需要有能力判断：逻辑对不对？有没有安全隐患？性能如何？'
          },
          {
            title: '建立自己的知识体系',
            desc: 'AI 能帮你查漏补缺，但核心知识框架要自己建立。知道"有什么"，才能问出"怎么用"。'
          },
          {
            title: '在实践中学习',
            desc: '做真实的项目，解决真实的问题。AI 帮你扫清语法障碍，你专注于解决业务问题。'
          }
        ]
      }
    },
    ciscRisc: {
      title: '⚔️ 两种设计哲学：CISC vs RISC',
      desc: '点击对比维度，看两种指令集架构的核心差异',
      compare: '对比',
      philosophyLabel: '设计哲学：',
      analogyLabel: '类比：',
      productsLabel: '代表产品：',
      realWorldTitle: '🌍 现实中的选择',
      dimensions: [
        {
          label: '指令数量',
          cisc: '上千条复杂指令',
          risc: '几十到几百条精简指令'
        },
        { label: '单条指令', cisc: '一条能做很多事', risc: '一条只做一件事' },
        {
          label: '指令长度',
          cisc: '变长（1-15字节）',
          risc: '定长（通常4字节）'
        },
        { label: '执行速度', cisc: '复杂指令多周期', risc: '大多数单周期完成' },
        { label: '功耗', cisc: '较高', risc: '较低' },
        {
          label: '流水线',
          cisc: '难优化（指令长度不一）',
          risc: '易优化（指令整齐）'
        },
        {
          label: '编译器负担',
          cisc: '轻（硬件做更多）',
          risc: '重（软件做更多优化）'
        }
      ],
      archData: {
        cisc: {
          name: 'CISC',
          full: 'Complex Instruction Set Computer',
          philosophy: '让硬件尽可能强大，一条指令完成复杂操作，减轻编译器负担',
          analogy: '像一把瑞士军刀——功能多，但每个功能不一定最好用',
          exampleTitle: '用一条指令完成「内存加法」',
          example:
            'ADD [0x1000], R1\n; 一条指令完成：读内存 → 加法 → 写回内存\n; CPU 内部拆成多个微操作执行',
          exampleNote:
            'CISC 允许指令直接操作内存，一条指令背后可能是 5-6 个微操作',
          products: ['Intel Core', 'AMD Ryzen', 'x86 服务器']
        },
        risc: {
          name: 'RISC',
          full: 'Reduced Instruction Set Computer',
          philosophy:
            '让每条指令尽可能简单快速，复杂操作由多条简单指令组合完成',
          analogy: '像一套专业工具——每个工具只做一件事，但做得又快又好',
          exampleTitle: '用三条指令完成同样的「内存加法」',
          example:
            'LOAD  R2, [0x1000]  ; 第1步：从内存读数据到寄存器\nADD   R2, R2, R1    ; 第2步：寄存器之间做加法\nSTORE R2, [0x1000]  ; 第3步：把结果写回内存',
          exampleNote:
            'RISC 要求数据先加载到寄存器，运算只在寄存器间进行，结果再存回内存',
          products: ['Apple M 系列', '高通骁龙', 'AWS Graviton', 'RISC-V']
        }
      },
      realWorld: [
        {
          device: '💻 你的电脑',
          arch: 'x86 (CISC)',
          why: '兼容几十年的软件生态'
        },
        {
          device: '📱 你的手机',
          arch: 'ARM (RISC)',
          why: '低功耗，电池续航更久'
        },
        {
          device: '🍎 Apple Silicon',
          arch: 'ARM (RISC)',
          why: '高性能低功耗，颠覆了笔记本市场'
        },
        {
          device: '🔬 RISC-V 开发板',
          arch: 'RISC-V (RISC)',
          why: '开源免费，IoT 和教育领域崛起'
        }
      ]
    }
  }
}
