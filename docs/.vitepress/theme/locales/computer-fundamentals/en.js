export default {
  transistor: {
    label: 'MOSFET transistor diagram -- click to toggle Gate voltage',
    source: 'Source',
    sourceEn: 'Source',
    drain: 'Drain',
    drainEn: 'Drain',
    onStatus: 'Conducting -> output 1',
    offStatus: 'Open -> output 0',
    hint: 'Click to toggle Gate voltage'
  },
  logicGate: {
    title: 'Four Basic Logic Gates',
    subtitle: 'The building blocks of all digital computing',
    operationLabel: 'Operation:',
    truthTable: 'Truth table',
    output: 'Output',
    coreIdeaLabel: 'Core idea:',
    coreIdea:
      'Logic gates turn physical circuit on/off states into mathematical true/false operations. They are the bridge from hardware to software logic.',
    gates: [
      {
        name: 'AND',
        nameLocalized: 'AND gate',
        formula: 'A ∧ B',
        rule: 'Outputs 1 only when both inputs are 1',
        intuition: 'Series switches: both switches must be closed',
        rows: [
          [0, 0, 0],
          [0, 1, 0],
          [1, 0, 0],
          [1, 1, 1]
        ]
      },
      {
        name: 'OR',
        nameLocalized: 'OR gate',
        formula: 'A ∨ B',
        rule: 'Outputs 1 when at least one input is 1',
        intuition: 'Parallel switches: either switch can close the circuit',
        rows: [
          [0, 0, 0],
          [0, 1, 1],
          [1, 0, 1],
          [1, 1, 1]
        ]
      },
      {
        name: 'NOT',
        nameLocalized: 'NOT gate',
        formula: '¬A',
        rule: 'Inverts the input: 0 becomes 1, 1 becomes 0',
        intuition: 'Inverter: on becomes off, off becomes on',
        rows: [
          [0, 1],
          [1, 0]
        ]
      },
      {
        name: 'XOR',
        nameLocalized: 'XOR gate',
        formula: 'A ⊕ B',
        rule: 'Outputs 1 only when the two inputs are different',
        intuition: 'Difference detector: different means true',
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
    title: 'From Hand Addition to Logic Gates',
    subtitle:
      'How can computers do math with only 0 and 1? Follow the pattern.',
    decimalTitle: 'Step 1: Recall carrying in decimal addition',
    decimalIntro:
      'Because 7 + 5 = 12, the result is larger than the largest single digit (9). We split 12 into "one full 10" and "the remaining 2":',
    decimalSum:
      'The remaining 2 stays in the current column. This is the sum bit.',
    decimalCarry:
      'The full 10 carries a 1 into the tens column. This is the carry.',
    binaryTitle: 'Step 2: The four binary addition cases',
    explainZero: '0 + 0 = 0. Write 0 in this column, with no carry.',
    explainOne: 'Write 1 in this column, with no carry.',
    explainCarry:
      '1 + 1 = 10. In binary, reaching 2 carries 1, so this column writes 0 and carries 1 to the left.',
    ruleTitle: 'Step 3: Name the patterns as circuits',
    carry: 'Carry',
    sum: 'Sum',
    sumRuleTitle: 'Sum pattern:',
    sumRule:
      'The sum is 1 only for inputs (0,1) or (1,0). It is 1 only when the two inputs are different.',
    sumGate: 'In circuits, this pattern is called XOR.',
    carryRuleTitle: 'Carry pattern:',
    carryRule:
      'The carry is 1 only for inputs (1,1). It is 1 only when both inputs are 1.',
    carryGate: 'In circuits, this pattern is called AND.'
  },
  halfAdder: {
    title: 'Half Adder -- Interactive Demo',
    subtitle: 'Click inputs A and B to see the result for one binary column',
    carryLabel: 'Carry: pass a 1 to the column on the left',
    sumLabel: 'Sum: the digit written in this column',
    allCases: 'All possible cases',
    sumColumn: 'Write (sum)',
    carryColumn: 'Carry',
    patternIntro: 'Look closely at the table and two patterns appear:',
    patternSum:
      'The sum column is 1 only when A and B are different. This is XOR.',
    patternCarry:
      'The carry column is 1 only when A and B are both 1. This is AND.',
    circuitLabel: 'The circuit is connected like this:',
    xorGate: 'XOR gate',
    xorRule: 'Different -> 1',
    andGate: 'AND gate',
    andRule: 'All 1 -> 1',
    output: 'Output:',
    sumOut: 'Sum',
    carryOut: 'Carry',
    explanations: {
      '00': '0 + 0 = 0. Write 0 in this column, with no carry.',
      '01': '0 + 1 = 1. Write 1 in this column, with no carry.',
      10: '1 + 0 = 1. Write 1 in this column, with no carry.',
      11: '1 + 1 = 2. A binary column can only write 0 or 1, so it writes 0 here and carries 1 to the column on the left.'
    }
  },
  fullAdder: {
    title: 'Full Adder -- Interactive Demo',
    subtitle:
      'A full adder adds one more input: carry-in (Cin) from the lower bit. Click the three inputs to try it.',
    lowCarry: 'Carry-in',
    carry: 'Carry',
    sum: 'Sum',
    vsHalfLabel: 'Compared with a half adder:',
    vsHalf:
      'A full adder adds a third input: carry-in (Cin). In multi-bit addition, each column adds A, B, and the carry from the column on the right.',
    tableTitle: 'All 8 cases (3 inputs -> 2³ = 8)',
    structureLabel: 'Inside a full adder = two half adders in series',
    firstStep: 'Step 1: Half adder 1',
    firstStepDesc: 'First calculate A + B',
    secondStep: 'Step 2: Half adder 2',
    secondStepDesc: 'Add the intermediate sum and carry-in',
    thirdStep: 'Step 3: Merge carries',
    thirdStepDesc:
      'If either carry path is 1, carry 1 into the next higher bit.',
    intermediateSum: 'Intermediate sum',
    carryOne: 'Carry 1',
    carryTwo: 'Carry 2',
    finalCarry: 'Final carry',
    explanations: {
      total0: '0 + 0 + 0 = 0. Write 0 in this column, with no carry.',
      total1: 'Write 1 in this column, with no carry.',
      total2: 'In binary, 2 is "10", so write 0 here and carry 1 left.',
      total3: 'In binary, 3 is "11", so write 1 here and carry 1 left.'
    }
  },
  adderChain: {
    title: 'Ripple Carry Adder',
    subtitle:
      'Cascade multiple full adders to perform multi-bit binary addition',
    terms: [
      { name: 'Cascade', desc: 'Lower-bit Cout connects to higher-bit Cin' },
      { name: 'Ripple', desc: 'Carry propagates bit by bit like a wave' },
      {
        name: 'Overflow',
        desc: 'The highest bit produces a carry beyond the range'
      }
    ],
    bitCountLabel: 'Bits:',
    bitButton: '{bit} bits',
    overflow: 'Overflow',
    chainTitle: 'Adder cascade',
    chainHint: 'Hover to inspect each bit calculation',
    stageBit: 'Bit {bit}',
    halfAdder: 'Half adder',
    fullAdder: 'Full adder',
    bitCalcTitle: 'Bit {bit} calculation',
    overallCalcTitle: 'Overall calculation',
    inputLabel: 'Input:',
    sumLabel: 'Sum:',
    carryLabel: 'Carry:',
    processLabel: 'Process:',
    resultLabel: 'Result:',
    processText:
      'Start at bit 0, compute each sum and carry, and propagate carries toward higher bits.',
    carryGenerated: 'Carry generated -> propagate to the higher bit',
    noCarry: 'No carry',
    oddOnes: 'Odd number of 1s',
    evenOnes: 'Even number of 1s',
    coreIdeaLabel: 'Core idea:',
    coreIdea:
      'Carry ripples from the lowest bit to the highest bit, which is why this circuit is called a ripple carry adder. More bits increase delay, but the circuit stays simple.'
  },
  completeAdder: {
    title: 'Complete Adder Demo',
    subtitle:
      'From logic gates to multi-bit addition -- abstraction layer by layer',
    layers: {
      gates: 'Logic gates',
      half: 'Half adder',
      full: 'Full adder',
      multi: 'Multi-bit addition'
    },
    coreIdeaLabel: 'Core idea:',
    inputA: 'Input A',
    inputB: 'Input B',
    sum: 'Sum',
    carry: 'Carry',
    overflow: 'Overflow',
    calcTitle: 'Calculation',
    inputLabel: 'Input:',
    sumLabel: 'Sum:',
    carryLabel: 'Carry:',
    middleLabel: 'Middle:',
    processLabel: 'Process:',
    resultLabel: 'Result:',
    intermediate: 'Intermediate value',
    processText:
      'Start at bit 0, compute each sum and carry, and propagate carries toward higher bits.',
    different: 'different',
    same: 'same',
    allOne: 'all 1',
    notAllOne: 'not all 1',
    bitLabel: 'Bit {bit}',
    gateNames: {
      and: 'AND gate',
      or: 'OR gate',
      xor: 'XOR gate',
      not: 'NOT gate'
    },
    gates: {
      title: 'Layer 1: Logic gates',
      desc: 'The basic operation units. Each gate performs one Boolean operation.',
      terms: [
        { name: 'AND gate', desc: 'Outputs 1 only when all inputs are 1' },
        { name: 'OR gate', desc: 'Outputs 1 when any input is 1' },
        { name: 'XOR gate', desc: 'Outputs 1 when inputs differ' }
      ],
      items: [
        {
          name: 'AND gate',
          symbol: '&',
          formula: 'A AND B',
          truth: [0, 0, 0, 1]
        },
        {
          name: 'OR gate',
          symbol: '>=1',
          formula: 'A OR B',
          truth: [0, 1, 1, 1]
        },
        {
          name: 'XOR gate',
          symbol: '=1',
          formula: 'A XOR B',
          truth: [0, 1, 1, 0]
        },
        {
          name: 'NOT gate',
          symbol: '1',
          formula: 'NOT A',
          truth: [1, 0]
        }
      ],
      coreIdea:
        'Logic gates turn voltage levels (0/1) into Boolean operations (false/true). They are where hardware starts implementing math.'
    },
    half: {
      title: 'Layer 2: Half adder',
      desc: 'Combine XOR and AND to add one bit without carry-in',
      terms: [
        {
          name: 'Sum',
          desc: 'The result for the current bit, excluding external carry-in'
        },
        {
          name: 'Carry',
          desc: 'When both bits are 1, send a carry to the higher bit'
        }
      ],
      xorDesc: 'Different -> Sum',
      andDesc: 'All 1 -> Carry',
      coreIdea:
        'A half adder uses XOR for the sum bit and AND for the carry. It is the smallest addition unit, but it cannot handle carry-in from a lower bit.'
    },
    full: {
      title: 'Layer 3: Full adder',
      desc: 'Use two half adders plus an OR gate to handle carry-in',
      terms: [
        { name: 'Cin', desc: 'Carry-in signal from the lower bit' },
        { name: 'Sum', desc: 'The XOR result of three input bits' },
        { name: 'Cout', desc: 'Carry-out signal to the higher bit' }
      ],
      coreIdea:
        'A full adder is two half adders plus one OR gate. It handles carry-in from the lower bit and becomes the building block for multi-bit adders.'
    },
    multi: {
      title: 'Layer 4: 4-bit adder',
      desc: 'Cascade four full adders to add values from 0 to 15',
      terms: [
        { name: 'Cascade', desc: 'Lower-bit Cout connects to higher-bit Cin' },
        { name: 'Ripple', desc: 'Carry propagates bit by bit like a wave' },
        { name: 'Overflow', desc: 'The highest bit produces a carry' }
      ],
      coreIdea:
        'Carry ripples from the lowest bit to the highest bit. More bits increase delay.'
    },
    summaryTitle: 'Abstraction layers',
    summaryItems: [
      { icon: '◇', name: 'Logic gates' },
      { icon: '⊞', name: 'Half adder' },
      { icon: '⊞⊞', name: 'Full adder' },
      { icon: '[]', name: 'Multi-bit adder' },
      { icon: 'CPU', name: 'ALU/CPU' }
    ]
  },
  languageMap: {
    title: 'Programming Language Map',
    subtitle: 'Evolution · paradigms · type systems · language comparison',
    tabs: [
      { id: 'timeline', label: 'Evolution' },
      { id: 'paradigms', label: 'Paradigms' },
      { id: 'compare', label: 'Compare languages' },
      { id: 'choose', label: 'How to choose' }
    ],
    representativeLanguages: 'Representative languages:',
    compareIntro: 'Click a language name to highlight it',
    table: {
      language: 'Language',
      typeSystem: 'Type system',
      paradigm: 'Paradigm',
      runtime: 'Runtime',
      usage: 'Main uses'
    },
    learningPathTitle: 'Suggested learning path',
    coreIdeaLabel: 'Core idea:',
    coreIdeas: {
      timeline:
        'Programming languages have evolved from machine code to modern high-level languages, steadily moving closer to human thinking.',
      paradigms:
        'A programming paradigm is a way to think about problems: imperative style focuses on how to do it, while declarative style focuses on what should be true.',
      compare:
        'There is no best language, only the language that best fits the scenario. Type system, runtime model, and ecosystem all matter.',
      choose:
        'Beginners can start with Python, then learn JavaScript for the Web, and finally go deeper with a static language such as TypeScript, Go, or Rust.'
    },
    eras: [
      {
        year: '1940s',
        name: 'Machine language',
        languages: ['Binary'],
        desc: 'Instructions were written directly as 0s and 1s. Computers could execute them, but humans could barely read or maintain them.',
        milestones: [
          {
            lang: 'Machine code',
            significance:
              'The lowest-level programming style. One wrong bit could break everything.'
          }
        ]
      },
      {
        year: '1950s',
        name: 'Assembly and early high-level languages',
        languages: ['Assembly', 'Fortran', 'Lisp', 'COBOL'],
        desc: 'Mnemonics replaced raw 0/1 instructions. Fortran opened the high-level language era, and Lisp laid the foundation for functional programming.',
        milestones: [
          {
            lang: 'Fortran',
            significance:
              'The first major high-level language for scientific computing'
          },
          {
            lang: 'Lisp',
            significance:
              'A pioneer of functional programming that still influences languages today'
          }
        ]
      },
      {
        year: '1970s',
        name: 'Systems programming era',
        languages: ['C', 'Pascal', 'Smalltalk'],
        desc: 'C appeared and was used to build Unix, starting the modern systems programming era.',
        milestones: [
          {
            lang: 'C',
            significance:
              'One of the most influential languages and the basis of Unix/Linux'
          },
          {
            lang: 'Smalltalk',
            significance: 'A pioneer of object-oriented programming'
          }
        ]
      },
      {
        year: '1980s-90s',
        name: 'OOP and the Internet',
        languages: ['C++', 'Java', 'Python', 'JavaScript'],
        desc: 'Object-oriented programming became mainstream. Java promised write once, run anywhere, and JavaScript took over the browser.',
        milestones: [
          {
            lang: 'Java',
            significance:
              'Cross-platform enterprise applications and the JVM ecosystem'
          },
          {
            lang: 'JavaScript',
            significance: 'The native language of the Web browser'
          },
          {
            lang: 'Python',
            significance: 'Simple and expressive, later dominant in AI'
          }
        ]
      },
      {
        year: '2000s',
        name: 'Modern languages',
        languages: ['C#', 'Go', 'Scala', 'Ruby'],
        desc: 'Language design focused more on developer productivity and safety. Go was created for cloud-native infrastructure.',
        milestones: [
          {
            lang: 'Go',
            significance:
              'Concurrency-friendly and used to build Docker and Kubernetes'
          },
          {
            lang: 'Ruby',
            significance:
              'Rails brought a major productivity boost to Web development'
          }
        ]
      },
      {
        year: '2010s+',
        name: 'Next-generation languages',
        languages: ['Rust', 'Swift', 'Kotlin', 'TypeScript'],
        desc: 'Newer languages emphasized memory safety, type safety, and developer experience.',
        milestones: [
          {
            lang: 'Rust',
            significance: 'Memory safety without a garbage collector'
          },
          { lang: 'TypeScript', significance: 'A type system for JavaScript' },
          {
            lang: 'Kotlin',
            significance: 'A preferred Android language alongside Java'
          }
        ]
      }
    ],
    paradigms: [
      {
        id: 'imperative',
        name: 'Imperative',
        icon: '📝',
        oneLiner: 'Tell the computer how to do it',
        desc: 'Describe the solution step by step by changing program state. This style is close to how computers execute instructions.',
        languages: ['C', 'Fortran', 'BASIC', 'Go'],
        example: `// Sum an array imperatively
int sum = 0;
for (int i = 0; i < n; i++) {
    sum += arr[i];  // accumulate step by step
}`,
        traits: [
          'Step oriented',
          'Mutable state',
          'Close to hardware',
          'Easy to understand'
        ]
      },
      {
        id: 'oop',
        name: 'Object-oriented',
        icon: '📦',
        oneLiner: 'Package data and behavior into objects',
        desc: 'Model the world with classes and objects, organizing code through encapsulation, inheritance, and polymorphism.',
        languages: ['Java', 'C++', 'Python', 'C#'],
        example: `class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says woof!")

dog = Dog("Buddy")
dog.bark()  # Buddy says woof!`,
        traits: [
          'Encapsulation',
          'Inheritance',
          'Polymorphism',
          'Large projects'
        ]
      },
      {
        id: 'functional',
        name: 'Functional',
        icon: '🔗',
        oneLiner: 'Compose pure functions',
        desc: 'Treat computation as function evaluation. Data is immutable and side effects are minimized, making code easier to test and reason about.',
        languages: ['Haskell', 'Lisp', 'Erlang', 'F#'],
        example: `-- Sum an array functionally
sum = foldl (+) 0

-- Immutable data, no side effects
map (*2) [1, 2, 3]  -- [2, 4, 6]
filter even [1..10]  -- [2, 4, 6, 8, 10]`,
        traits: [
          'Pure functions',
          'Immutable data',
          'No side effects',
          'Easy to test'
        ]
      },
      {
        id: 'declarative',
        name: 'Declarative',
        icon: '🎯',
        oneLiner: 'Say what you want, not how to do it',
        desc: 'Describe the desired result and let the system decide how to execute it. SQL and HTML are common declarative examples.',
        languages: ['SQL', 'HTML', 'CSS', 'Prolog'],
        example: `-- Query all active users declaratively
SELECT name, email
FROM users
WHERE active = true
ORDER BY created_at DESC
-- The database decides the fastest query plan`,
        traits: [
          'Describe results',
          'System optimized',
          'Concise',
          'Domain specific'
        ]
      }
    ],
    languageComparison: [
      {
        name: 'Python',
        type: 'Dynamic strong',
        typeClass: 'dynamic-strong',
        paradigm: 'Multi-paradigm',
        runtime: 'Interpreted',
        usage: 'AI, data analysis, Web backends'
      },
      {
        name: 'JavaScript',
        type: 'Dynamic weak',
        typeClass: 'dynamic-weak',
        paradigm: 'Multi-paradigm',
        runtime: 'JIT compiled',
        usage: 'Full-stack Web, cross-platform apps'
      },
      {
        name: 'TypeScript',
        type: 'Static strong',
        typeClass: 'static-strong',
        paradigm: 'Multi-paradigm',
        runtime: 'Compiles to JS',
        usage: 'Web frontends, Node.js'
      },
      {
        name: 'Java',
        type: 'Static strong',
        typeClass: 'static-strong',
        paradigm: 'Object-oriented',
        runtime: 'JVM',
        usage: 'Enterprise apps, Android'
      },
      {
        name: 'C/C++',
        type: 'Static weak',
        typeClass: 'static-weak',
        paradigm: 'Multi-paradigm',
        runtime: 'Compiled',
        usage: 'Systems, games, embedded'
      },
      {
        name: 'Rust',
        type: 'Static strong',
        typeClass: 'static-strong',
        paradigm: 'Multi-paradigm',
        runtime: 'Compiled',
        usage: 'Systems programming, WebAssembly'
      },
      {
        name: 'Go',
        type: 'Static strong',
        typeClass: 'static-strong',
        paradigm: 'Concurrency oriented',
        runtime: 'Compiled',
        usage: 'Cloud native, microservices'
      },
      {
        name: 'Swift',
        type: 'Static strong',
        typeClass: 'static-strong',
        paradigm: 'Multi-paradigm',
        runtime: 'Compiled',
        usage: 'iOS/macOS development'
      },
      {
        name: 'Kotlin',
        type: 'Static strong',
        typeClass: 'static-strong',
        paradigm: 'Multi-paradigm',
        runtime: 'JVM',
        usage: 'Android, backends'
      }
    ],
    recommendations: [
      {
        icon: '🌐',
        scene: 'Web frontend',
        langs: ['JavaScript', 'TypeScript'],
        reason: 'Browsers support JavaScript natively; TypeScript adds types.'
      },
      {
        icon: '🖥️',
        scene: 'Web backend',
        langs: ['Go', 'Java', 'Python', 'Node.js'],
        reason: 'Mature ecosystems and rich frameworks'
      },
      {
        icon: '📱',
        scene: 'Mobile development',
        langs: ['Swift', 'Kotlin'],
        reason: 'Officially recommended by Apple and Google'
      },
      {
        icon: '🤖',
        scene: 'AI / data',
        langs: ['Python'],
        reason: 'PyTorch, TensorFlow, and Pandas all center on Python'
      },
      {
        icon: '⚙️',
        scene: 'Systems programming',
        langs: ['C', 'Rust'],
        reason: 'Direct hardware control and maximum performance'
      },
      {
        icon: '☁️',
        scene: 'Cloud native',
        langs: ['Go', 'Rust'],
        reason: 'Docker and Kubernetes are written in Go'
      },
      {
        icon: '🎮',
        scene: 'Game development',
        langs: ['C++', 'C#'],
        reason: 'Unreal uses C++, while Unity uses C#'
      },
      {
        icon: '📊',
        scene: 'DevOps scripts',
        langs: ['Python', 'Bash'],
        reason: 'Fast automation scripting'
      }
    ],
    learningPath: [
      {
        lang: 'Python',
        why: 'Simple syntax and broad coverage across AI, Web, and scripts'
      },
      {
        lang: 'JavaScript',
        why: 'Essential for Web development and usable on both frontend and backend'
      },
      {
        lang: 'TypeScript',
        why: 'Adds a type system to JavaScript and introduces static typing benefits'
      },
      {
        lang: 'Go or Rust',
        why: 'Build intuition for compiled languages and lower-level concepts'
      }
    ]
  },
  operatingSystems: {
    principleLabel: '💡 Principle:',
    osArchitecture: {
      appLayer: '📱 Applications',
      osLayer: '🖥️ Operating System',
      hardwareLayer: '💾 Hardware',
      requestPacket: '📦 Request',
      instructionPacket: '⚡ Instruction',
      memory: '💾 Memory',
      disk: '💿 Disk',
      coreItems: ['Schedule CPU', 'Allocate memory', 'Manage files'],
      statusTexts: [
        'The application is ready to send a request...',
        'Application: I want to play music!',
        'The request is sent to the operating system...',
        'The operating system is coordinating resources...',
        'Instructions are sent down to hardware...',
        'Hardware starts executing: music is playing 🎵'
      ]
    },
    process: {
      title: '⏱️ The CPU switches tasks so fast you cannot feel it',
      timeSlice: 'Time slice: {time}ms',
      running: 'Running',
      done: 'Done',
      waiting: 'Waiting',
      processes: [
        { id: 1, name: 'Chat', icon: '💬' },
        { id: 2, name: 'Music', icon: '🎵' },
        { id: 3, name: 'Browser', icon: '🌐' }
      ],
      explain:
        'The CPU switches processes every {sliceTime}ms. It happens so quickly that it feels like everything runs at the same time, even though each process is actually executing in slices.'
    },
    memory: {
      title: '🧠 The operating system gives each program an illusion of memory',
      virtualTitle: '📱 Memory as the program sees it (virtual)',
      physicalTitle: '💾 Real memory chips (physical)',
      mappingTitle: 'The operating system maps addresses ↓',
      wechat: '💬 Chat',
      game: '🎮 Game',
      systemLabel: 'OS',
      mappingWechat: 'Chat-{index}',
      mappingGame: 'Game-{index}',
      physicalBlock: 'Physical-{index}',
      explain:
        'Each program thinks it owns a continuous block of memory on the left. In reality, the operating system spreads data across real memory on the right. The addresses a program sees are virtual, and the OS translates them.'
    },
    filesystem: {
      title: '📁 The file you see vs fragments on disk',
      folderView: '📂 What you see (folder)',
      diskView: '💾 Real disk storage (data blocks)',
      photosFolder: 'Photos',
      petFile: 'pet.jpg',
      tripFile: 'trip.png',
      reading: 'Reading...',
      blockContents: {
        pet1: 'Pet-1',
        pet2: 'Pet-2',
        pet3: 'Pet-3',
        trip1: 'Trip-1',
        trip2: 'Trip-2'
      },
      explain:
        'The file system splits a file into fragments stored in different disk blocks, then keeps a table of their locations. The tidy folder you see is a view built from that table.'
    },
    programLaunch: {
      title: '🚀 What is the computer doing after you double-click an icon?',
      steps: [
        {
          icon: '👆',
          title: 'You double-click the icon',
          desc: 'The operating system receives a request to start the browser'
        },
        {
          icon: '📋',
          title: 'Create a process',
          desc: 'Create a process record with an ID and state'
        },
        {
          icon: '🧠',
          title: 'Allocate memory',
          desc: 'Set up virtual memory so the program feels isolated'
        },
        {
          icon: '📁',
          title: 'Load files',
          desc: 'Read program code from disk into memory'
        },
        {
          icon: '▶️',
          title: 'Start running',
          desc: 'The CPU starts executing and the window appears'
        }
      ],
      vizStates: [
        { icon: '🖱️', text: 'Clicking...' },
        { icon: '📋', text: 'Creating process...' },
        { icon: '💾', text: 'Allocating memory...' },
        { icon: '💿', text: 'Reading files...' },
        { icon: '🖥️', text: 'Running!' }
      ]
    }
  },
  register: {
    title: 'CPU Register File',
    subtitle: 'High-speed storage inside the CPU',
    specialTitle: 'Special Registers',
    generalTitle: 'General Purpose Registers',
    flagsTitle: 'Program Status Word (PSW / FLAGS)',
    registerSuffix: 'register',
    comparisonTitle: 'Registers vs Memory',
    comparisonHeaders: ['Feature', 'Register', 'Memory (RAM)'],
    comparisonRows: [
      ['Location', 'Inside the CPU', 'Outside the CPU'],
      ['Access speed', 'Fastest (< 1ns)', 'Slower (50-100ns)'],
      ['Capacity', 'Tiny (bytes)', 'Large (GB)'],
      [
        'Role',
        'Hold instructions, operands, and results',
        'Store programs and data'
      ]
    ],
    specialRegisters: [
      {
        name: 'PC',
        value: '0x00401000',
        desc: 'Program counter',
        type: 'Special register',
        detail:
          'Program Counter stores the address of the next instruction. After each instruction, PC advances to point to the next one.'
      },
      {
        name: 'IR',
        value: '0x8B450008',
        desc: 'Instruction register',
        type: 'Special register',
        detail:
          'Instruction Register stores the instruction currently being executed. The CPU fetches it from memory, stores it in IR, then sends it to the decoder.'
      },
      {
        name: 'MAR',
        value: '0x00401000',
        desc: 'Memory address register',
        type: 'Special register',
        detail:
          'Memory Address Register stores the memory address being accessed. The CPU uses it to send a location onto the address bus.'
      },
      {
        name: 'MDR',
        value: '0x00000000',
        desc: 'Memory data register',
        type: 'Special register',
        detail:
          'Memory Data Register temporarily holds data being written to or read from memory. It bridges the CPU and memory data path.'
      },
      {
        name: 'ACC',
        value: '0x0000001A',
        desc: 'Accumulator',
        type: 'Special register',
        detail:
          'Accumulator is a classic CPU register used to store intermediate results of arithmetic and logic operations.'
      }
    ],
    generalRegisters: [
      {
        name: 'RAX',
        value: '0x00000000',
        desc: 'Return value',
        type: 'General purpose register',
        detail:
          'A 64-bit register often used to store function return values. Its lower parts are EAX, AX, and AL.'
      },
      {
        name: 'RBX',
        value: '0x00000000',
        desc: 'Base register',
        type: 'General purpose register',
        detail: 'A 64-bit general register for data or memory addresses.'
      },
      {
        name: 'RCX',
        value: '0x00000000',
        desc: 'Counter register',
        type: 'General purpose register',
        detail: 'A 64-bit general register often used for loop counters.'
      },
      {
        name: 'RDX',
        value: '0x00000000',
        desc: 'Data register',
        type: 'General purpose register',
        detail:
          'A 64-bit general register for data, also used by multiply and divide instructions.'
      },
      {
        name: 'RSI',
        value: '0x00000000',
        desc: 'Source index',
        type: 'General purpose register',
        detail:
          'Source Index is used as the source pointer in string operations.'
      },
      {
        name: 'RDI',
        value: '0x00000000',
        desc: 'Destination index',
        type: 'General purpose register',
        detail:
          'Destination Index is used as the destination pointer in string operations.'
      },
      {
        name: 'RBP',
        value: '0x00000000',
        desc: 'Base pointer',
        type: 'General purpose register',
        detail: 'Base Pointer points to the base of the current stack frame.'
      },
      {
        name: 'RSP',
        value: '0x7FFDE000',
        desc: 'Stack pointer',
        type: 'General purpose register',
        detail: 'Stack Pointer points to the current top of the stack.'
      }
    ],
    statusFlags: [
      { name: 'CF', value: 0, desc: 'Carry flag' },
      { name: 'PF', value: 0, desc: 'Parity flag' },
      { name: 'AF', value: 0, desc: 'Auxiliary carry' },
      { name: 'ZF', value: 0, desc: 'Zero flag' },
      { name: 'SF', value: 0, desc: 'Sign flag' },
      { name: 'OF', value: 0, desc: 'Overflow flag' }
    ]
  },
  flipFlop: {
    title: 'From Flip-Flops to Registers: The Feedback Loop of Memory',
    desc: 'Change the data and observe it: without a clock signal, the output feeds back to the input and the closed loop preserves memory.',
    dataInput: 'Data Bus (Data Input)',
    gate: 'Gate',
    registerState: '4-bit Register (Stored State)',
    controlCenter: 'Control Center',
    clockButton: 'Send Clock Pulse',
    statusPulsing:
      'Pulse arrived. The gate opens and new data is being written in parallel.',
    statusIdle:
      'Try changing the left-side input. The register value is locked while the feedback loop is closed.',
    statusReady:
      'New data is ready. Click "Send Clock Pulse" to unlock and write it.',
    statusSame: 'The input bus matches the current stored state.',
    statusPending: 'The loop is closed again, but new data is still pending.',
    statusSaved:
      'The pulse faded. Feedback is restored and the current state is held.'
  },
  functionalUnit: {
    label: 'Common Functional Units -- switch modules to see how they work',
    tabs: [
      { id: 'mux', name: 'Multiplexer (MUX)' },
      { id: 'decoder', name: 'Decoder' }
    ],
    mux: {
      desc: 'Multiplexer (MUX): like a railway switch, it uses the select signal to decide which data input passes through.',
      data0: 'Data 0 (D0)',
      data1: 'Data 1 (D1)',
      select: 'Select (Sel)',
      output: 'Output (Out)',
      explain:
        'The select signal is {sel}, so the output equals data {data}: {result}'
    },
    decoder: {
      desc: 'Decoder: converts a binary input into one active output line. For example, a 2-bit input can activate one of four output lines.',
      highBit: 'A1 (high bit)',
      lowBit: 'A0 (low bit)',
      chip: '2-to-4\nDecoder',
      outputLabels: [
        'Y0 (input 00)',
        'Y1 (input 01)',
        'Y2 (input 10)',
        'Y3 (input 11)'
      ],
      explain:
        'The current input is binary {binary} (decimal {decimal}), so only Y{decimal} is active (output 1).'
    }
  },
  minCpu: {
    title: 'CPU Internal Microarchitecture',
    subtitle: 'Click a module to see its subcircuits and how it works',
    chipTitle: 'CPU Core (Central Processing Unit)',
    addressBus: 'Address Bus',
    dataBus: 'Data Bus',
    controlUnit: 'Control Unit',
    programCounter: 'Program Counter (PC)',
    instructionRegister: 'Instruction Register (IR)',
    instructionDecoder: 'Instruction Decoder',
    clock: 'Clock Generator',
    controlLines: 'Control signals ↓',
    registerFile: 'Register File',
    generalRegisters: 'General Registers R0-R3',
    accumulator: 'Accumulator (ACC)',
    alu: 'Arithmetic Logic Unit (ALU)',
    adder: 'Adder Circuit',
    flags: 'Status Flags',
    controlBus: 'Control Bus',
    subCircuitTitle: 'Underlying subcircuit:',
    empty:
      'Click a module in the CPU diagram to explore its circuit-level implementation.',
    modules: {
      alu: {
        title: 'Arithmetic Logic Unit (ALU)',
        description:
          'The ALU is the CPU engine for arithmetic and logic operations such as addition, subtraction, AND, OR, NOT, and XOR.',
        subCircuit:
          'It is built from many logic gates. Adders are made by chaining half adders and full adders, while multiplexers select between arithmetic and logic results.'
      },
      adder: {
        title: 'Adder Circuit',
        description: 'Performs binary addition.',
        subCircuit:
          'XOR gates compute the sum bit, while AND and OR gates produce carry signals. Chaining full adders creates 32-bit or 64-bit addition.'
      },
      flags: {
        title: 'Status Flags Register',
        description:
          'Records side effects of the previous ALU operation, such as zero, carry, sign, and overflow. These flags drive conditional branches.',
        subCircuit: 'A group of flip-flops connected to ALU output logic.'
      },
      reg: {
        title: 'Register File',
        description:
          'High-speed scratch storage inside the CPU. It holds ALU inputs and recent results close to the execution datapath.',
        subCircuit:
          'Made from many D flip-flops arranged by word width, with multiplexers and decoders selecting which register to read or write.'
      },
      cu: {
        title: 'Control Unit (CU)',
        description:
          'The CPU coordinator. It fetches instructions, decodes them, and emits control signals that turn other modules on and off.',
        subCircuit:
          'Often implemented as a finite-state machine or microprogrammed controller that maps binary instructions to control levels.'
      },
      pc: {
        title: 'Program Counter (PC)',
        description:
          'Points to the address of the next instruction. It increments after normal execution and changes on jumps or calls.',
        subCircuit: 'A register with an incrementer, updated on clock edges.'
      },
      ir: {
        title: 'Instruction Register (IR)',
        description:
          'Temporarily holds the machine instruction currently being decoded.',
        subCircuit:
          'A row of write-enabled flip-flops that latch instruction bits during fetch.'
      },
      decoder: {
        title: 'Instruction Decoder',
        description:
          'Interprets the bits in IR by splitting them into opcode and operands.',
        subCircuit:
          'A combinational network of AND and NOT gates. For example, one opcode activates only the ADD output line.'
      },
      clock: {
        title: 'Clock Generator',
        description:
          'The CPU timing source. Its square-wave signal synchronizes when flip-flops update state.',
        subCircuit:
          'A motherboard crystal oscillator and CPU PLL generate high-frequency clock pulses.'
      },
      address_bus: {
        title: 'Address Bus',
        description:
          'A one-way bus used by the CPU to send memory or I/O addresses. Its width limits the addressable memory range.',
        subCircuit:
          'Physically, a set of parallel wires driven by tri-state buffers.'
      },
      data_bus: {
        title: 'Data Bus',
        description:
          'A bidirectional bus that carries data between CPU and memory. Its width corresponds to the processor data path width.',
        subCircuit:
          'Parallel conductors with direction-controlled tri-state gates to avoid electrical conflicts.'
      },
      control_bus: {
        title: 'Control Bus',
        description:
          'Carries control signals such as read, write, interrupt request, and wait feedback.',
        subCircuit:
          'Each line has a specific role and is driven by control-unit logic.'
      }
    }
  },
  algorithmThinking: {
    algorithm: {
      title: 'Algorithmic Thinking: Ways to Solve Problems',
      subtitle: 'Different strategies fit different kinds of problems',
      tabs: [
        {
          id: 'binary',
          name: 'Binary search',
          desc: 'Eliminate half each time, O(log n)'
        },
        {
          id: 'sort',
          name: 'Sorting',
          desc: 'Turn unordered data into ordered data'
        },
        { id: 'recursion', name: 'Recursion', desc: 'A function calls itself' },
        {
          id: 'greedy',
          name: 'Greedy',
          desc: 'Choose the best local move each step'
        }
      ],
      searchLabel: 'Search in a sorted array:',
      numberPlaceholder: 'Enter a number',
      searchButton: 'Search',
      resetArray: 'Reset array',
      startSort: 'Start sorting',
      fibPrefix: 'Calculate Fibonacci term',
      fibSuffix: '',
      calculate: 'Calculate',
      recursionTrace: 'Recursive calls',
      moreCalls: '... {count} calls in total',
      coinChangeDesc:
        'Coin change: use the fewest coins to make the target amount',
      targetAmount: 'Target amount:',
      availableCoins: 'Available coins: {coins}',
      changePlan: 'Change plan:',
      coinUnit: '{value}',
      coinCount: '{count} coins total',
      complexityTitle: 'Time Complexity Quick Reference',
      coreIdeaLabel: 'Core idea:',
      coreIdea:
        'Algorithms are methods for solving problems. A good algorithm can improve efficiency by orders of magnitude. Understanding algorithmic thinking matters more than memorizing individual algorithms.',
      searchStep: {
        range:
          'Search range [{left}, {right}], middle index {mid}, value {value}',
        found: 'Found target {target} at index {mid}',
        right: '{value} < {target}; continue in the right half',
        left: '{value} > {target}; continue in the left half',
        notFound: 'Target {target} not found'
      },
      sortStatus: {
        initial: 'Click "Start sorting" to watch bubble sort',
        reset: 'Array reset',
        compare: 'Compare {a} and {b}',
        swap: 'Swap {a} and {b}',
        done: 'Sorting complete!'
      },
      complexities: [
        {
          name: 'O(1)',
          value: 'Constant',
          desc: 'Best, such as array access',
          class: 'good'
        },
        {
          name: 'O(log n)',
          value: 'Logarithmic',
          desc: 'Very good, such as binary search',
          class: 'good'
        },
        {
          name: 'O(n)',
          value: 'Linear',
          desc: 'Common, such as traversal',
          class: 'mid'
        },
        {
          name: 'O(n log n)',
          value: 'Linearithmic',
          desc: 'Acceptable, such as quicksort',
          class: 'mid'
        },
        {
          name: 'O(n²)',
          value: 'Quadratic',
          desc: 'Slow, such as bubble sort',
          class: 'bad'
        },
        {
          name: 'O(2ⁿ)',
          value: 'Exponential',
          desc: 'Very slow, such as brute-force recursion',
          class: 'bad'
        }
      ]
    },
    search: {
      title: 'Search Algorithms',
      subtitle: 'How to find a target in data',
      linearTab: 'Linear search',
      binaryTab: 'Binary search',
      linearTitle: 'Linear search: check items one by one',
      binaryTitle: 'Binary search: eliminate half each time',
      startSearch: 'Start search',
      reset: 'Reset',
      targetNumber: 'Target number:',
      timeComplexity: 'Time complexity: {value}',
      linearUse: 'Use case: unordered arrays',
      binaryUse: 'Use case: sorted arrays',
      range: 'Search range: [{left}, {right}]',
      middle: 'Middle index: {mid}',
      nextStep: 'Next step',
      comparisonTitle: 'Performance Comparison',
      dataSize: 'Data size',
      atMostTimes: 'At most {count} steps'
    },
    sorting: {
      title: 'Sorting Algorithms',
      subtitle: 'Put data into order',
      generateArray: 'Generate new array',
      bubbleSort: 'Bubble sort',
      quickSort: 'Quick sort',
      timeComplexity: 'Time complexity: {value}',
      comparisonTitle: 'Algorithm Comparison',
      algorithm: 'Algorithm',
      averageTime: 'Average time',
      worstTime: 'Worst time',
      space: 'Space',
      stable: 'Stable',
      initialAlgo: 'Choose a sorting algorithm',
      initialDesc: 'Select a sorting algorithm to start the demo',
      bubbleDesc:
        'Repeatedly scan the array, compare adjacent items, and swap them',
      quickDesc:
        'Choose a pivot and split the array into values below and above it',
      comparisonRows: [
        {
          name: 'Bubble sort',
          average: 'O(n²)',
          worst: 'O(n²)',
          space: 'O(1)',
          stable: '✓'
        },
        {
          name: 'Quick sort',
          average: 'O(n log n)',
          worst: 'O(n²)',
          space: 'O(log n)',
          stable: '✗'
        },
        {
          name: 'Merge sort',
          average: 'O(n log n)',
          worst: 'O(n log n)',
          space: 'O(n)',
          stable: '✓'
        },
        {
          name: 'Insertion sort',
          average: 'O(n²)',
          worst: 'O(n²)',
          space: 'O(1)',
          stable: '✓'
        }
      ]
    },
    recursive: {
      title: 'Recursive Thinking: A Function Calls Itself',
      subtitle: 'Break a large problem into smaller problems of the same kind',
      analogyTitle: 'Nested dolls',
      analogyLine1: 'Open a large doll and there is a smaller doll inside',
      analogyLine2:
        'Open that one and there is an even smaller one, until the smallest case',
      analogyStrong: 'That is recursion.',
      examplesTitle: 'Recursive examples',
      examples: [
        { id: 'factorial', name: 'Factorial', icon: '🔢' },
        { id: 'fibonacci', name: 'Fibonacci', icon: '🐚' },
        { id: 'directory', name: 'Directory traversal', icon: '📁' }
      ],
      factorialTitle: 'Factorial: n! = n × (n-1)!',
      factorialBase: '1! = 1 (base case)',
      factorialReturns: [
        '↑ return 1',
        '↑ return 2 × 1 = 2',
        '↑ return 3 × 2 = 6',
        '↑ return 4 × 6 = 24',
        '↑ return 5 × 24 = 120'
      ],
      fibonacciTitle: 'Fibonacci sequence',
      directoryTitle: 'Traverse a file directory',
      pseudocodeTitle: 'Pseudocode',
      elementsTitle: 'Three Elements of Recursion',
      elements: [
        {
          title: 'Base case',
          desc: 'When should recursion stop? There must be a termination condition.',
          example: 'Example: 1! = 1'
        },
        {
          title: 'Recursive call',
          desc: 'How does the problem get smaller? Call the same function on a smaller case.',
          example: 'Example: turn n! into (n-1)!'
        },
        {
          title: 'Return result',
          desc: 'How does the current problem use the result of the subproblem?',
          example: 'Example: the result of n × (n-1)!'
        }
      ],
      prosTitle: '✓ Pros',
      consTitle: '✗ Cons',
      pros: [
        'Concise code',
        'Naturally expresses recursive structures',
        'Good for tree and graph traversal'
      ],
      cons: ['May repeat work', 'Uses stack space', 'Can be harder to debug']
    },
    greedy: {
      title: 'Greedy Algorithms: Choose the Best Current Move',
      subtitle: 'Local optimum → global optimum?',
      ideaLine1Prefix: 'A greedy algorithm chooses the ',
      localBest: 'best',
      ideaLine1Suffix: ' option available at each step',
      ideaLine2Prefix: 'It hopes a series of local choices reaches a ',
      globalBest: 'global optimum',
      scenarioTitle: 'Classic problems',
      scenarios: [
        { id: 'change', name: 'Coin change', icon: '💰' },
        { id: 'activity', name: 'Activity selection', icon: '📅' },
        { id: 'shortest', name: 'Shortest path', icon: '🗺️' }
      ],
      changeTitle: 'Coin Change Problem',
      changeAmount: 'Change needed: {amount}',
      changeStep: '× {count} = {value}',
      totalCoinsPrefix: 'Needs',
      totalCoinsSuffix: 'coins total',
      changeNote1: '✓ Greedy strategy: choose the largest coin each time',
      changeNote2: '✓ Works for currencies such as RMB and USD',
      activityTitle: 'Activity Selection Problem',
      activityRulePrefix: 'Greedy strategy: ',
      activityRuleStrong: 'choose the activity that ends earliest',
      activityRuleSuffix: '',
      selectedPrefix: 'Can attend at most',
      selectedSuffix: 'activities',
      shortestTitle: 'Shortest Path Problem (Dijkstra)',
      startNode: 'A(start)',
      endNode: 'E(end)',
      pathStep: 'Start from A and choose the nearest node',
      pathDistance: 'Total distance: 2 + 1 + 2 = 5',
      comparisonTitle: 'Greedy vs Dynamic Programming',
      feature: 'Feature',
      greedyAlgorithm: 'Greedy algorithm',
      dynamicProgramming: 'Dynamic programming',
      changeSteps: [
        { coin: '20', count: 1, value: 20 },
        { coin: '10', count: 1, value: 10 },
        { coin: '5', count: 1, value: 5 },
        { coin: '1', count: 2, value: 2 }
      ],
      activities: [
        {
          start: '9:00',
          end: '10:00',
          name: 'Activity 1',
          selected: true,
          conflicting: false
        },
        {
          start: '9:30',
          end: '11:30',
          name: 'Activity 2',
          selected: false,
          conflicting: true
        },
        {
          start: '10:00',
          end: '11:00',
          name: 'Activity 3',
          selected: true,
          conflicting: false
        },
        {
          start: '10:30',
          end: '12:00',
          name: 'Activity 4',
          selected: false,
          conflicting: true
        },
        {
          start: '11:00',
          end: '12:00',
          name: 'Activity 5',
          selected: true,
          conflicting: false
        }
      ],
      comparisonRows: [
        {
          feature: 'Decision style',
          greedy: 'Choose the current best each step',
          dp: 'Consider all possibilities and choose the best'
        },
        {
          feature: 'Optimality',
          greedy: 'May not be globally optimal',
          dp: 'Guarantees a global optimum'
        },
        {
          feature: 'Time complexity',
          greedy: 'O(n) or O(n log n)',
          dp: 'O(n²) or higher'
        },
        {
          feature: 'Best fit',
          greedy: 'Local optimum → global optimum',
          dp: 'Overlapping subproblems'
        }
      ],
      prosTitle: '✓ Pros',
      consTitle: '✗ Cons',
      pros: ['Simple to implement', 'Efficient', 'Low space complexity'],
      cons: [
        'Does not always guarantee a global optimum',
        'Limited applicability',
        'Requires an optimality proof'
      ]
    },
    paradigm: {
      title: 'Algorithm Design Paradigms',
      subtitle: 'Common patterns for solving problems',
      introPrefix: 'Algorithm design paradigms are ',
      introStrong: 'general strategies',
      introSuffix:
        ' for solving problems. Learning them helps you find solution ideas quickly.',
      coreIdea: 'Core idea',
      scenarios: 'Use cases',
      classicProblems: 'Classic problems',
      timeComplexity: 'Time complexity',
      comparisonTitle: 'Paradigm Comparison',
      paradigm: 'Paradigm',
      strategy: 'Core strategy',
      optimality: 'Optimality',
      useCase: 'Use case',
      guideTitle: 'How to choose the right paradigm?',
      paradigms: [
        {
          id: 'divide',
          name: 'Divide and conquer',
          icon: '✂️',
          tagline: 'Divide, solve, combine',
          idea: 'Split a large problem into smaller independent problems, solve them recursively, then combine the results.',
          scenarios: [
            'Array sorting',
            'Matrix multiplication',
            'Large integer arithmetic'
          ],
          problems: [
            'Merge sort',
            'Quick sort',
            'Binary search',
            'Strassen matrix multiplication'
          ],
          complexity: 'O(n log n)',
          complexityNote: 'Often much faster than brute force'
        },
        {
          id: 'dynamic',
          name: 'Dynamic programming',
          icon: '📊',
          tagline: 'Store results to avoid repetition',
          idea: 'Break the problem into overlapping subproblems, save their answers, and avoid recomputation.',
          scenarios: [
            'Optimization problems',
            'Counting problems',
            'Path problems'
          ],
          problems: [
            'Fibonacci sequence',
            'Knapsack problem',
            'Longest common subsequence',
            'Shortest path'
          ],
          complexity: 'O(n²) or O(n³)',
          complexityNote:
            'Trades space for time and is faster than naive recursion'
        },
        {
          id: 'greedy',
          name: 'Greedy',
          icon: '🎯',
          tagline: 'Local optimum',
          idea: 'Choose the best available option at each step, hoping the sequence of choices reaches a global optimum.',
          scenarios: [
            'Optimization problems',
            'Scheduling problems',
            'Graph problems'
          ],
          problems: [
            'Coin change',
            'Activity selection',
            'Huffman coding',
            'Minimum spanning tree'
          ],
          complexity: 'O(n log n)',
          complexityNote: 'Fastest, but not always optimal'
        },
        {
          id: 'backtrack',
          name: 'Backtracking',
          icon: '🔙',
          tagline: 'Try and retreat',
          idea: 'Systematically search the solution space and retreat to the previous branch when a path fails.',
          scenarios: [
            'Combination problems',
            'Permutation problems',
            'Constraint satisfaction'
          ],
          problems: [
            'N queens',
            'Sudoku',
            'All permutations',
            'Subset problems'
          ],
          complexity: 'O(2ⁿ) or O(n!)',
          complexityNote: 'Exponential, suitable for small inputs'
        }
      ],
      comparisonData: [
        {
          id: 'divide',
          name: 'Divide and conquer',
          icon: '✂️',
          strategy: 'Split → recurse → combine',
          optimal: 'Guarantees optimum',
          use: 'Problems that split independently'
        },
        {
          id: 'dynamic',
          name: 'Dynamic programming',
          icon: '📊',
          strategy: 'Store subproblem answers',
          optimal: 'Guarantees optimum',
          use: 'Overlapping subproblems'
        },
        {
          id: 'greedy',
          name: 'Greedy',
          icon: '🎯',
          strategy: 'Choose the best each time',
          optimal: 'Not always optimal',
          use: 'Local optimum → global optimum'
        },
        {
          id: 'backtrack',
          name: 'Backtracking',
          icon: '🔙',
          strategy: 'Depth-first search',
          optimal: 'Guarantees optimum',
          use: 'Small search spaces that need enumeration'
        }
      ],
      guideSteps: [
        {
          title: 'Analyze problem features',
          desc: 'Are there overlapping subproblems? Is there optimal substructure?'
        },
        {
          title: 'Decide whether an optimum is required',
          desc: 'Greedy is not always optimal; dynamic programming guarantees an optimum.'
        },
        {
          title: 'Consider input size',
          desc: 'Backtracking fits small inputs, while divide and conquer fits larger inputs.'
        }
      ]
    }
  },
  compilers: {
    lexer: {
      title: '🔤 Lexer: Split Code into Tokens',
      desc: 'Enter a line of code and see lexical analysis results in real time',
      placeholder: 'Try: let x = 10 + 5;',
      streamLabel: 'Token stream:',
      type: 'Type',
      explanation: 'Explanation',
      presets: [
        'let x = 10 + 5;',
        'if (a > b) { return a; }',
        'function add(a, b) { return a + b; }'
      ],
      tokenTypes: {
        number: { label: 'Number', explain: 'Numeric literal' },
        keyword: { label: 'Keyword', explain: 'Reserved word' },
        identifier: {
          label: 'Identifier',
          explain: 'Variable or function name'
        },
        string: { label: 'String', explain: 'String literal' },
        operatorArithmetic: {
          label: 'Operator',
          explain: 'Arithmetic operation'
        },
        operatorCompare: {
          label: 'Operator',
          explain: 'Comparison or assignment operation'
        },
        bracket: { label: 'Bracket', explain: 'Grouping or scope' },
        punctuation: {
          label: 'Punctuation',
          explain: 'Statement or argument separator'
        },
        unknown: { label: 'Unknown', explain: 'Unrecognized token' }
      }
    },
    compileVsInterpret: {
      title: '🔄 Compiled vs Interpreted vs JIT',
      desc: 'Click an execution mode to see how code moves from source to running program',
      examplesLabel: 'Representative languages:',
      modes: [
        {
          name: 'Compiled',
          steps: [
            { icon: '📝', name: 'Source code', desc: 'main.c' },
            { icon: '⚙️', name: 'Compiler', desc: 'Full compilation' },
            { icon: '📦', name: 'Machine code', desc: 'Binary executable' },
            { icon: '🚀', name: 'Run directly', desc: 'CPU runs it directly' }
          ],
          metrics: [
            {
              label: 'Run speed',
              value: 95,
              text: 'Very fast',
              color: '#22c55e'
            },
            {
              label: 'Startup',
              value: 30,
              text: 'Slow; compile first',
              color: '#ef4444'
            },
            {
              label: 'Portability',
              value: 20,
              text: 'Recompile required',
              color: '#ef4444'
            }
          ],
          langs: ['C', 'C++', 'Rust', 'Go']
        },
        {
          name: 'Interpreted',
          steps: [
            { icon: '📝', name: 'Source code', desc: 'app.py' },
            { icon: '🔍', name: 'Interpreter', desc: 'Read line by line' },
            {
              icon: '🔄',
              name: 'Execute line by line',
              desc: 'Translate while running'
            }
          ],
          metrics: [
            { label: 'Run speed', value: 30, text: 'Slower', color: '#ef4444' },
            {
              label: 'Startup',
              value: 90,
              text: 'Fast; run directly',
              color: '#22c55e'
            },
            {
              label: 'Portability',
              value: 90,
              text: 'Naturally portable',
              color: '#22c55e'
            }
          ],
          langs: ['Python', 'Ruby', 'PHP', 'Bash']
        },
        {
          name: 'JIT',
          steps: [
            { icon: '📝', name: 'Source code', desc: 'app.js' },
            {
              icon: '🔍',
              name: 'Interpret first',
              desc: 'Start by interpreting'
            },
            {
              icon: '🔥',
              name: 'Hot path detection',
              desc: 'Find frequently run code'
            },
            {
              icon: '⚡',
              name: 'JIT compile',
              desc: 'Compile to machine code'
            },
            {
              icon: '🚀',
              name: 'Fast execution',
              desc: 'Close to native speed'
            }
          ],
          metrics: [
            {
              label: 'Run speed',
              value: 75,
              text: 'Fast after warmup',
              color: '#22c55e'
            },
            {
              label: 'Startup',
              value: 60,
              text: 'Medium; needs warmup',
              color: '#eab308'
            },
            {
              label: 'Portability',
              value: 85,
              text: 'Portable',
              color: '#22c55e'
            }
          ],
          langs: ['JavaScript (V8)', 'Java (JVM)', 'C# (.NET)']
        }
      ]
    },
    practice: {
      title: 'Compilation Practice',
      subtitle: 'From code to executable file',
      inputTitle: 'Input code',
      placeholder: 'Enter C code...',
      stepsTitle: 'Compilation steps',
      outputsTitle: 'Generated files',
      toolsTitle: 'Common compiler tools',
      steps: [
        {
          name: 'Preprocess',
          command: 'gcc -E hello.c -o hello.i',
          output: 'Process #include and expand macros'
        },
        {
          name: 'Compile',
          command: 'gcc -S hello.i -o hello.s',
          output: 'Generate assembly code'
        },
        {
          name: 'Assemble',
          command: 'gcc -c hello.s -o hello.o',
          output: 'Generate object file'
        },
        {
          name: 'Link',
          command: 'gcc hello.o -o hello',
          output: 'Generate executable file'
        }
      ],
      outputFiles: [
        { name: 'hello.c', icon: '📄', desc: 'Source code file' },
        { name: 'hello.i', icon: '📝', desc: 'Preprocessed file' },
        { name: 'hello.s', icon: '⚙️', desc: 'Assembly code file' },
        { name: 'hello.o', icon: '📦', desc: 'Object file' },
        { name: 'hello', icon: '🚀', desc: 'Executable file' }
      ],
      tools: [
        { name: 'GCC', desc: 'GNU Compiler Collection' },
        { name: 'Clang', desc: 'LLVM C/C++ compiler' },
        { name: 'MSVC', desc: 'Microsoft Visual C++' }
      ]
    },
    ast: {
      title: '🌳 AST Visualizer: See the Skeleton of Code',
      desc: 'Choose an expression and inspect its abstract syntax tree',
      treeTitle: 'Syntax tree',
      explainTitle: 'Parse notes',
      toolTipPrefix: '💡 Try',
      toolTipSuffix: '— inspect ASTs for arbitrary code online',
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
            '* has higher precedence than +, so 2 * 3 groups first',
            '2 * 3 forms a BinaryExpression subtree',
            '1 and that subtree become the left and right operands of +',
            'The final + node is the root, showing the evaluation order'
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
            'The let statement creates a VariableDeclaration node',
            'It contains a VariableDeclarator',
            'The declarator has identifier x on the left and initial value 10 on the right',
            'The tree clearly expresses the meaning: assign 10 to x'
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
            'A function call creates a CallExpression node',
            'The called function name add is an Identifier',
            'The argument list (a, b) forms an Arguments node',
            'Each argument is an independent Identifier child node'
          ]
        }
      ]
    },
    optimization: {
      title: '⚡ Compiler Optimization: Make Code Faster Automatically',
      desc: 'Choose an optimization technique and see how the compiler improves code',
      beforeTitle: '📝 Before optimization',
      afterTitle: '🚀 After optimization',
      arrowLabel: 'Compiler optimization',
      principleTitle: 'How {name} works',
      gainLabel: 'Performance gain:',
      optimizations: [
        {
          icon: '🧮',
          name: 'Constant folding',
          before: `const width = 10
const height = 20
const area = width * height  // computed at runtime
console.log(area)`,
          after: `const area = 200  // computed during compilation
console.log(200)`,
          explain:
            'The compiler sees that width and height are constants, so it computes 10 * 20 = 200 during compilation. Runtime no longer needs a multiplication.',
          gain: 30
        },
        {
          icon: '💀',
          name: 'Dead code elimination',
          before: `function process(x) {
  const result = x * 2
  return result

  // This code can never run
  console.log("debug info")
  const unused = x + 1
  return unused
}`,
          after: `function process(x) {
  return x * 2  // keep only useful code
}`,
          explain:
            'The compiler analyzes control flow, sees that code after return is unreachable, and removes it. It can also inline the returned expression.',
          gain: 20
        },
        {
          icon: '🔄',
          name: 'Loop-invariant code motion',
          before: `const arr = [1, 2, 3, ..., 10000]
for (let i = 0; i < arr.length; i++) {
  // arr.length is read every iteration
  process(arr[i])
}`,
          after: `const arr = [1, 2, 3, ..., 10000]
const len = arr.length  // read once outside the loop
for (let i = 0; i < len; i++) {
  process(arr[i])
}`,
          explain:
            'arr.length does not change inside the loop. The compiler moves that invariant read outside the loop and avoids repeated work.',
          gain: 45
        },
        {
          icon: '📦',
          name: 'Function inlining',
          before: `function square(x) {
  return x * x
}

// Called 10000 times
for (let i = 0; i < 10000; i++) {
  result += square(i)  // function call overhead every time
}`,
          after: `// Remove function call overhead
for (let i = 0; i < 10000; i++) {
  result += i * i  // expanded directly
}`,
          explain:
            'Function calls have overhead. For small functions, the compiler can paste the function body at the call site and remove the call.',
          gain: 55
        },
        {
          icon: '🔗',
          name: 'Constant propagation',
          before: `const x = 10
const y = x + 5      // y = 15
const z = y * 2      // z = 30
console.log(z + 1)   // 31`,
          after: `console.log(31)  // all constant values tracked at compile time
// x, y, and z are eliminated`,
          explain:
            'The compiler tracks values through the chain: x=10, y=15, z=30, z+1=31. When every intermediate value is constant, it can finish the computation during compilation.',
          gain: 40
        }
      ]
    },
    analogy: {
      title: 'Compiler Principles: The Art of Translation',
      subtitle: 'How code becomes machine instructions',
      introPrefix: 'A compiler is like a ',
      introStrong: 'translator',
      introSuffix:
        ', turning human-readable code into machine-readable instructions',
      processTitle: 'The Complete Code Translation Pipeline',
      lexicalTitle: 'Lexical analysis: tokenization',
      syntaxTitle: 'Syntax analysis: build a tree',
      tree: {
        assignment: 'Assignment statement',
        variable: 'Variable',
        operator: 'Operator',
        number: 'Number'
      },
      compareTitle: 'Compilation vs Interpretation',
      optimizationTitle: 'Compiler Optimization',
      before: 'Before:',
      after: 'After:',
      optimizationNote:
        'The compiler can optimize code automatically and improve runtime efficiency',
      translationSteps: [
        {
          name: 'Lexical analysis',
          desc: 'Break code into individual words called tokens',
          example: 'int age = 25 → [int, age, =, 25]'
        },
        {
          name: 'Syntax analysis',
          desc: 'Check grammar rules and build a syntax tree',
          example: 'Validate whether statement structure is correct'
        },
        {
          name: 'Semantic analysis',
          desc: 'Check whether the meaning of the code is valid',
          example: 'Check variable definitions and type compatibility'
        },
        {
          name: 'Intermediate code generation',
          desc: 'Generate a machine-independent intermediate representation',
          example: 'Generate bytecode or intermediate representation'
        },
        {
          name: 'Optimization',
          desc: 'Improve code so it runs more efficiently',
          example: 'Constant folding and dead-code elimination'
        },
        {
          name: 'Target code generation',
          desc: 'Generate machine code or target code',
          example: 'Generate x86 or ARM machine instructions'
        }
      ],
      tokens: [
        { type: 'Keyword', value: 'int' },
        { type: 'Identifier', value: 'age' },
        { type: 'Operator', value: '=' },
        { type: 'Number', value: '25' },
        { type: 'Separator', value: ';' }
      ],
      comparisonItems: [
        {
          class: 'compile',
          header: 'Compiled languages',
          step: 'Source code → Compiler → Machine code',
          example: 'C, Go, Rust',
          features: [
            '✓ Fast execution',
            '✓ Compile once, run many times',
            '✗ Slow compile step'
          ]
        },
        {
          class: 'interpret',
          header: 'Interpreted languages',
          step: 'Source code → Interpreter → Line-by-line execution',
          example: 'Python, JavaScript, PHP',
          features: [
            '✓ Fast development',
            '✓ Cross-platform',
            '✗ Slower execution'
          ]
        }
      ]
    },
    workflow: {
      title: 'How a Compiler Works',
      subtitle: 'A six-step journey from source code to machine code',
      inputLabel: 'Input code:',
      placeholder: 'Try typing int x = 10 + 5;',
      outputLabel: 'Output: {output}',
      lexerTitle: 'Live lexical analysis',
      emptyTokens: 'Enter code to analyze it automatically',
      execTitle: 'Three Execution Models Compared',
      coreIdeaLabel: 'Core idea:',
      coreIdea:
        'A compiler is like a translator: it gradually turns human-readable code into instructions the machine can run. The six stages each do one job: identify words → understand syntax → check meaning → generate IR → optimize → generate machine code.',
      tokenLabels: {
        keyword: 'Keyword',
        number: 'Number',
        operator: 'Operator',
        punctuation: 'Separator',
        string: 'String',
        identifier: 'Identifier'
      },
      stages: [
        {
          name: 'Lexical analysis',
          output: 'Token stream',
          desc: 'Split source code into individual words called tokens, like recognizing each word in a sentence.',
          tasks: [
            'Recognize keywords',
            'Recognize identifiers',
            'Recognize numbers',
            'Recognize operators',
            'Filter whitespace'
          ],
          example: `int x = 10 + 5;
→ [int] [x] [=] [10] [+] [5] [;]
    keyword identifier operator number operator number separator`
        },
        {
          name: 'Syntax analysis',
          output: 'AST syntax tree',
          desc: 'Organize tokens into a tree structure according to grammar rules and determine precedence.',
          tasks: [
            'Build syntax tree',
            'Determine precedence',
            'Check syntax errors'
          ],
          example: `1 + 2 * 3  →  syntax tree:
       +
      / \\
     1   *       ← * has higher precedence
        / \\
       2   3`
        },
        {
          name: 'Semantic analysis',
          output: 'Typed AST',
          desc: 'Check whether the code meaning is valid, including types and declared variables.',
          tasks: [
            'Type checking',
            'Scope analysis',
            'Build symbol table',
            'Type inference'
          ],
          example: `int x = "hello";  // ❌ type error: int ≠ string
int y = 10 + 5;   // ✅ valid: int + int = int`
        },
        {
          name: 'Intermediate code generation',
          output: 'IR (intermediate representation)',
          desc: 'Generate a platform-independent intermediate language for optimization and cross-platform compilation.',
          tasks: [
            'Generate three-address code',
            'Stay platform-independent',
            'Enable optimization'
          ],
          example: `source: int x = (a + b) * c;
IR:
  t1 = a + b
  t2 = t1 * c
  x = t2`
        },
        {
          name: 'Code optimization',
          output: 'Optimized IR',
          desc: 'Make code run faster by removing redundant work and precomputing constants.',
          tasks: [
            'Constant folding',
            'Dead-code elimination',
            'Inlining',
            'Loop optimization'
          ],
          example: `before:                 after:
int x = 10 + 5;   →  int x = 15;   (constant folding)
int y = x * 2;    →  int y = 30;   (constant propagation)
if (false) {...}   →  (delete)      (dead-code elimination)`
        },
        {
          name: 'Target code generation',
          output: 'Machine code',
          desc: 'Finally translate the program into machine instructions the CPU can run directly.',
          tasks: [
            'Instruction selection',
            'Register allocation',
            'Instruction scheduling'
          ],
          example: `; int x = 15;
mov  eax, 15          ; put 15 into eax register
mov  dword ptr [x], eax ; store it at variable x address`
        }
      ],
      executionModels: [
        {
          name: 'Compiled',
          steps: ['Source', 'Compiler', 'Machine code', 'CPU execution'],
          pro: 'Fast execution',
          con: 'Must wait for compilation',
          langs: 'C, C++, Rust, Go'
        },
        {
          name: 'Interpreted',
          steps: ['Source', 'Interpreter', 'Line-by-line execution'],
          pro: 'Run immediately while writing',
          con: 'Slower execution',
          langs: 'Python, Ruby, PHP'
        },
        {
          name: 'JIT',
          steps: [
            'Source',
            'Bytecode',
            'JIT hot path compilation',
            'Execution'
          ],
          pro: 'Balances performance and flexibility',
          con: 'Slower startup',
          langs: 'Java, JavaScript (V8)'
        }
      ]
    }
  },
  dataStructures: {
    overview: {
      title: 'Data Structure Overview',
      subtitle: 'Choose a data organization model for each scenario',
      intro:
        'Data structures are like ways to organize a room: clothes in a wardrobe, books on shelves, and small items in drawers.',
      featuresTitle: 'Features',
      scenariosTitle: 'Use Cases',
      complexityTitle: 'Operation Complexity',
      operation: 'Operation',
      averageTime: 'Average time',
      analogyTitle: 'Everyday Analogy',
      categories: [
        {
          id: 'linear',
          name: 'Linear structures',
          icon: '📚',
          desc: 'Data arranged in order, like a row of books',
          examples: ['Array', 'Linked list', 'Stack', 'Queue'],
          features: [
            'One-to-one relationship between elements',
            'A clear before-and-after order',
            'Can use contiguous storage or linked storage'
          ],
          scenarios: [
            {
              icon: '📝',
              title: 'Arrays: list data',
              desc: 'Store ordered data such as student scores or product prices'
            },
            {
              icon: '🔄',
              title: 'Stacks: undo operations',
              desc: 'Text editor undo history, last in first out'
            },
            {
              icon: '🎫',
              title: 'Queues: task scheduling',
              desc: 'Print queues and task queues, first in first out'
            }
          ],
          complexity: [
            { operation: 'Access element', time: 'O(1)' },
            { operation: 'Insert/delete', time: 'O(n)' }
          ],
          analogy: {
            text: 'Like train cars connected in order',
            example:
              'To find car 5, count directly to it; to insert a new car, you need to break and reconnect links.'
          }
        },
        {
          id: 'hash',
          name: 'Hash structures',
          icon: '🗂️',
          desc: 'Fast lookup through a key',
          examples: ['Hash table', 'Dictionary', 'Set'],
          features: [
            'Store data as key-value pairs',
            'Very fast lookup',
            'No inherent order between items'
          ],
          scenarios: [
            {
              icon: '📖',
              title: 'Dictionary: word lookup',
              desc: 'Quickly find a definition from a word'
            },
            {
              icon: '👤',
              title: 'User info: ID lookup',
              desc: 'Fetch a profile quickly from a user ID'
            },
            {
              icon: '🛒',
              title: 'Cart: product management',
              desc: 'Track product IDs and quantities for checkout'
            }
          ],
          complexity: [
            { operation: 'Lookup', time: 'O(1)' },
            { operation: 'Insert/delete', time: 'O(1)' }
          ],
          analogy: {
            text: 'Like library index cards',
            example:
              'Instead of scanning shelf by shelf, use the index to find the location directly.'
          }
        },
        {
          id: 'tree',
          name: 'Tree structures',
          icon: '🌳',
          desc: 'Hierarchy, like a family tree',
          examples: ['Binary tree', 'B-tree', 'Heap'],
          features: [
            'One-to-many hierarchy',
            'A clear root node',
            'Good for categories and levels'
          ],
          scenarios: [
            {
              icon: '📁',
              title: 'File systems: directory trees',
              desc: 'Hierarchical organization of folders and files'
            },
            {
              icon: '🏢',
              title: 'Organizations: management trees',
              desc: 'Company reporting relationships'
            },
            {
              icon: '💻',
              title: 'HTML: DOM tree',
              desc: 'Nested structure of web page elements'
            }
          ],
          complexity: [
            { operation: 'Lookup', time: 'O(log n)' },
            { operation: 'Insert/delete', time: 'O(log n)' }
          ],
          analogy: {
            text: 'Like a family tree or company org chart',
            example:
              'Start from the root and move down level by level; each path is unique.'
          }
        },
        {
          id: 'graph',
          name: 'Graph structures',
          icon: '🕸️',
          desc: 'Complex relationship networks',
          examples: ['Directed graph', 'Undirected graph', 'Network graph'],
          features: [
            'Many-to-many relationships',
            'Nodes can connect freely',
            'Represents complex networks'
          ],
          scenarios: [
            {
              icon: '🗺️',
              title: 'Maps: route planning',
              desc: 'Road connections between cities and navigation systems'
            },
            {
              icon: '👥',
              title: 'Social networks: friendships',
              desc: 'Follow and friend relationships between users'
            },
            {
              icon: '🔗',
              title: 'Web pages: links',
              desc: 'Hyperlink networks between pages'
            }
          ],
          complexity: [
            { operation: 'Traversal', time: 'O(V + E)' },
            { operation: 'Shortest path', time: 'O(E + V log V)' }
          ],
          analogy: {
            text: 'Like a subway map or airline network',
            example:
              'Many stations, many lines, and multiple possible connections between stations.'
          }
        }
      ]
    },
    basic: {
      title: 'Data Structures: Containers for Data',
      subtitle: 'Choose different storage models for different scenarios',
      structures: [
        {
          id: 'array',
          name: 'Array',
          desc: 'Contiguous memory and fast indexed access'
        },
        {
          id: 'linkedlist',
          name: 'Linked list',
          desc: 'Connected nodes with fast insertion and deletion'
        },
        {
          id: 'stack',
          name: 'Stack',
          desc: 'Last in, first out; used by function calls'
        },
        {
          id: 'queue',
          name: 'Queue',
          desc: 'First in, first out; used for scheduling'
        },
        {
          id: 'hash',
          name: 'Hash table',
          desc: 'Key-value storage with the fastest lookup'
        },
        {
          id: 'tree',
          name: 'Tree',
          desc: 'Hierarchical structure for search and sorting'
        }
      ],
      hints: {
        array: 'Access arr[2] = O(1), insert/delete = O(n)',
        linkedlist: 'Access the nth item = O(n), insert/delete = O(1)',
        stack: 'Last in, first out (LIFO); operations are O(1)',
        queue: 'First in, first out (FIFO); operations are O(1)',
        hash: 'Average lookup/insert/delete is O(1), worst case O(n)',
        tree: 'Lookup/insert/delete O(log n), traversal O(n)'
      },
      stackBottom: 'Stack bottom',
      push: 'Push',
      pop: 'Pop',
      queueOut: 'Out ←',
      queueIn: '← In',
      enqueue: 'Enqueue',
      dequeue: 'Dequeue',
      initialQueueItems: ['Task 1', 'Task 2', 'Task 3'],
      queueItem: 'Task {index}',
      tableTitle: 'Time Complexity Comparison',
      tableHeaders: ['Operation', 'Array', 'Linked list', 'Hash table', 'Tree'],
      ops: {
        access: 'Access',
        search: 'Search',
        insert: 'Insert',
        delete: 'Delete'
      },
      coreIdeaLabel: 'Core idea:',
      coreIdea:
        'Data structures are containers for data. Different containers have different tradeoffs. Choosing the right data structure can improve program efficiency by orders of magnitude.'
    },
    linear: {
      title: 'Four Forms of Linear Structures',
      subtitle: 'How arrays, linked lists, stacks, and queues differ',
      structures: [
        {
          id: 'array',
          name: 'Array',
          icon: '📊',
          tagline: 'Contiguous memory, indexed access',
          access: 'O(1) fast',
          insert: 'O(n) slow',
          delete: 'O(n) slow',
          feature: 'Fixed size',
          applications: [
            {
              icon: '📋',
              name: 'List data',
              desc: 'Student scores or product price lists'
            },
            {
              icon: '🖼️',
              name: 'Image processing',
              desc: 'Pixel matrix storage'
            },
            { icon: '📈', name: 'Charts', desc: 'Data ordered by time' }
          ]
        },
        {
          id: 'linkedlist',
          name: 'Linked list',
          icon: '🔗',
          tagline: 'Pointer links, flexible updates',
          access: 'O(n) slow',
          insert: 'O(1) fast',
          delete: 'O(1) fast',
          feature: 'Variable size',
          applications: [
            { icon: '↩️', name: 'Undo', desc: 'Operation history' },
            { icon: '🎵', name: 'Music playback', desc: 'Playlists' },
            {
              icon: '📝',
              name: 'Text editing',
              desc: 'Dynamic document storage'
            }
          ]
        },
        {
          id: 'stack',
          name: 'Stack',
          icon: '🥞',
          tagline: 'Last in, first out',
          access: 'O(n)',
          insert: 'O(1) fast',
          delete: 'O(1) fast',
          feature: 'One-end operations',
          applications: [
            { icon: '↩️', name: 'Undo operation', desc: 'Editor undo history' },
            {
              icon: '🔙',
              name: 'Browser history',
              desc: 'Back button implementation'
            },
            {
              icon: '📞',
              name: 'Function calls',
              desc: 'Program call stack management'
            }
          ]
        },
        {
          id: 'queue',
          name: 'Queue',
          icon: '🚶',
          tagline: 'First in, first out',
          access: 'O(n)',
          insert: 'O(1) fast',
          delete: 'O(1) fast',
          feature: 'Two-end operations',
          applications: [
            {
              icon: '🖨️',
              name: 'Print queue',
              desc: 'Print documents in order'
            },
            {
              icon: '🎫',
              name: 'Task scheduling',
              desc: 'Operating system process scheduling'
            },
            {
              icon: '💬',
              name: 'Message queue',
              desc: 'Asynchronous task handling'
            }
          ]
        }
      ],
      notes: {
        array:
          '✓ Contiguous memory | ✓ Fast access (O(1)) | ✗ Slow insert/delete (O(n))',
        linkedlist:
          '✓ Non-contiguous memory | ✗ Slow access (O(n)) | ✓ Fast insert/delete',
        stack: 'Last in, first out (LIFO) | Uses: undo and function calls',
        queue: 'First in, first out (FIFO) | Uses: task queues and print queues'
      },
      stackTop: 'Top ↓',
      stackBottom: 'Bottom',
      push: 'Push',
      pop: 'Pop',
      queueFront: 'Front →',
      queueRear: '→ Rear',
      enqueue: 'Enqueue',
      dequeue: 'Dequeue',
      initialStackItems: ['Book 5', 'Book 4', 'Book 3', 'Book 2', 'Book 1'],
      initialQueueItems: ['Person 1', 'Person 2', 'Person 3', 'Person 4'],
      stackItem: 'Book {index}',
      queueItem: 'Person {index}',
      tableTitle: 'Operation Comparison',
      tableHeaders: ['Data structure', 'Access', 'Insert', 'Delete', 'Feature'],
      appTitle: 'Real-World Uses'
    },
    hash: {
      title: 'Hash Tables: Super-Fast Lookup',
      subtitle: 'Find data directly through a key',
      analogyPrefix: 'A hash table is like a library ',
      analogyStrong: 'index card',
      analogySuffix:
        ': instead of searching shelf by shelf, you use the index to find the book location directly.',
      storageTitle: 'Store data',
      keyPlaceholder: 'Key (for example: apple)',
      valuePlaceholder: 'Value (for example: apple)',
      add: 'Add',
      processTitle: 'Hashing process',
      inputKey: 'Input key',
      hashFunction: 'Hash function',
      arrayIndex: 'Array index',
      tableTitle: 'Hash table',
      empty: 'Empty',
      comparisonTitle: 'Performance Comparison',
      appTitle: 'Common Uses',
      initialData: [
        { key: 'apple', value: 'apple' },
        { key: 'banana', value: 'banana' },
        { key: 'orange', value: 'orange' }
      ],
      performanceItems: [
        {
          label: 'Hash table lookup',
          value: 'O(1)',
          class: 'excellent',
          desc: 'Found instantly'
        },
        {
          label: 'Array lookup',
          value: 'O(n)',
          class: 'good',
          desc: 'Requires traversal'
        },
        {
          label: 'Binary search',
          value: 'O(log n)',
          class: 'better',
          desc: 'Requires sorted data'
        }
      ],
      applications: [
        { icon: '👤', text: 'User table (user ID → profile)' },
        { icon: '🛒', text: 'Shopping cart (product ID → quantity)' },
        { icon: '📝', text: 'Cache system (URL → page content)' },
        { icon: '🔍', text: 'Dictionary (word → definition)' }
      ]
    },
    tree: {
      title: 'Tree Structures: Representing Hierarchies',
      subtitle: 'An organization model like a family tree',
      selectorLabel: 'Choose a tree type:',
      types: [
        { id: 'binary', name: 'Binary search tree', icon: '🌳' },
        { id: 'filesystem', name: 'File system', icon: '📁' },
        { id: 'dom', name: 'DOM tree', icon: '🌐' }
      ],
      filesystem: {
        root: '📁 Root /',
        document: '📄 document.txt',
        photo: '🖼️ photo.jpg'
      },
      dom: {
        htmlTitle: 'HTML Structure',
        treeTitle: 'DOM Tree Structure',
        headingText: 'Title',
        paragraphText: 'Paragraph'
      },
      featuresTitle: 'Tree Structure Features',
      features: [
        {
          icon: '🌲',
          title: 'Hierarchy',
          desc: 'Nodes have one-to-many parent-child relationships'
        },
        {
          icon: '🎯',
          title: 'Single root node',
          desc: 'Except for the root, each node has exactly one parent'
        },
        {
          icon: '🔍',
          title: 'Efficient lookup',
          desc: 'Binary search tree lookup is O(log n)'
        },
        {
          icon: '🔄',
          title: 'Multiple traversals',
          desc: 'Preorder, inorder, postorder, and level-order traversal'
        }
      ],
      appTitle: 'Use Cases',
      applications: [
        {
          icon: '📁',
          name: 'File systems',
          desc: 'Hierarchical organization of folders and files'
        },
        {
          icon: '🌐',
          name: 'HTML DOM',
          desc: 'Nested structure of web page elements'
        },
        {
          icon: '🏢',
          name: 'Organization charts',
          desc: 'Company management hierarchy'
        },
        {
          icon: '🌲',
          name: 'Decision trees',
          desc: 'Classification algorithms in machine learning'
        }
      ]
    },
    graph: {
      title: 'Graph Structures: Representing Complex Relationships',
      subtitle: 'A network of nodes and edges',
      types: [
        { id: 'undirected', name: 'Undirected graph' },
        { id: 'directed', name: 'Directed graph' },
        { id: 'weighted', name: 'Weighted graph' }
      ],
      infoTitle: 'Graph properties',
      vertices: 'Vertices (V)',
      edges: 'Edges (E)',
      degree: 'Degree',
      appTitle: 'Use Cases',
      applications: [
        { icon: '🗺️', text: 'Map navigation (shortest path)' },
        { icon: '👥', text: 'Social networks (friend relationships)' },
        { icon: '🌐', text: 'Web links (PageRank)' },
        { icon: '🔗', text: 'Dependencies (package management)' }
      ]
    },
    selector: {
      title: 'How Do You Choose the Right Data Structure?',
      subtitle: 'Make the best choice based on scenario needs',
      scenarioTitle: 'What is your use case?',
      recommendation: 'Recommended: {name}',
      reasonTitle: 'Why?',
      exampleTitle: 'Real examples',
      referenceTitle: 'Quick Reference',
      tableHeaders: [
        'Scenario need',
        'Recommended structure',
        'Time complexity'
      ],
      flowTitle: 'Decision Flow',
      flow: {
        yes: 'Yes',
        no: 'No',
        fastAccess: 'Need fast element access?',
        arrayHash: 'Array / Hash table',
        frequentInsertDelete: 'Need frequent insertion and deletion?',
        linkedList: 'Linked list',
        keepOrder: 'Need to preserve order?',
        stackQueue: 'Stack / Queue',
        treeGraph: 'Tree / Graph'
      },
      scenarios: [
        {
          id: 'lookup',
          icon: '🔍',
          name: 'Fast lookup',
          desc: 'Find matching data quickly by key',
          recommendation: 'Hash table',
          reasons: [
            'Average lookup time is O(1)',
            'Key-value storage is semantically clear',
            'No need to scan the whole dataset'
          ],
          example:
            'Find user profiles by user ID, dictionary lookup, cache systems'
        },
        {
          id: 'ordered',
          icon: '📊',
          name: 'Preserve order',
          desc: 'Data must stay in insertion order or a specific order',
          recommendation: 'Array or linked list',
          reasons: [
            'Arrays support direct indexed access',
            'Linked lists can resize flexibly',
            'Position-based access is straightforward'
          ],
          example: 'Student score lists, time-series data, rankings'
        },
        {
          id: 'lifo',
          icon: '🥞',
          name: 'Last in, first out',
          desc: 'The most recent item is processed first',
          recommendation: 'Stack',
          reasons: [
            'Operate only at the top',
            'Push and pop are O(1)',
            'Good for backtracking and undo'
          ],
          example: 'Browser back, editor undo, function call stack'
        },
        {
          id: 'fifo',
          icon: '🚶',
          name: 'First in, first out',
          desc: 'Earlier items are processed first',
          recommendation: 'Queue',
          reasons: [
            'Enqueue at one end and dequeue at the other',
            'Enqueue and dequeue are O(1)',
            'A fair scheduling model'
          ],
          example: 'Print queues, task scheduling, message queues'
        },
        {
          id: 'hierarchy',
          icon: '🌳',
          name: 'Hierarchy',
          desc: 'Data has parent-child relationships',
          recommendation: 'Tree',
          reasons: [
            'Clearly expresses hierarchy',
            'Lookup can be O(log n)',
            'Supports several traversal orders'
          ],
          example: 'File systems, organization charts, HTML DOM'
        },
        {
          id: 'relationship',
          icon: '🕸️',
          name: 'Complex relationships',
          desc: 'Data has many-to-many connections',
          recommendation: 'Graph',
          reasons: [
            'Can represent arbitrary relationships',
            'Supports path-search algorithms',
            'Fits networks and social relations'
          ],
          example: 'Social networks, map navigation, web links'
        }
      ],
      referenceTable: [
        { scenario: 'Random access', structure: 'Array', complexity: 'O(1)' },
        {
          scenario: 'Fast lookup',
          structure: 'Hash table',
          complexity: 'O(1)'
        },
        {
          scenario: 'Ordered lookup',
          structure: 'Binary search tree',
          complexity: 'O(log n)'
        },
        {
          scenario: 'Frequent insertion/deletion',
          structure: 'Linked list',
          complexity: 'O(1)'
        },
        { scenario: 'Undo operations', structure: 'Stack', complexity: 'O(1)' },
        { scenario: 'Task scheduling', structure: 'Queue', complexity: 'O(1)' }
      ]
    }
  },
  typeSystems: {
    explorer: {
      title: 'Type System Explorer',
      subtitle: 'Static vs dynamic · strong vs weak typing · type inference',
      tabs: [
        { id: 'quadrant', label: 'Quadrants' },
        { id: 'check', label: 'Type checking' },
        { id: 'convert', label: 'Conversion' },
        { id: 'infer', label: 'Inference' }
      ],
      axes: {
        strong: 'Strong',
        weak: 'Weak',
        static: 'Static',
        dynamic: 'Dynamic'
      },
      checkScenarioTitle:
        'Scenario: assign values of different types to a variable',
      inferIntroPrefix: 'Type inference in modern languages: ',
      inferIntroStrong:
        'write like a dynamic language, stay protected like a static one',
      inferArrow: '↓ Compiler infers automatically',
      coreIdeaLabel: 'Core idea:',
      coreIdeas: {
        quadrant:
          'Type systems choose along two dimensions: when checks happen (static/dynamic) and whether implicit conversion is allowed (strong/weak). There is no best combination, only the best fit for a scenario.',
        check:
          'Static typing finds errors at compile time. Dynamic typing discovers them at runtime. The earlier you find a bug, the cheaper it is to fix.',
        convert:
          'Weakly typed languages may guess your intent through implicit conversion, often with surprises. Strongly typed languages require explicit intent, which is safer.',
        infer:
          'Type inference gives you both: concise code like a dynamic language and strict compiler checks like a static language.'
      },
      quadrants: [
        {
          id: 'strong-static',
          title: 'Strong + static',
          langs: ['Java', 'Rust', 'Haskell'],
          desc: 'Strict compile-time checking with no implicit conversion. Very safe and IDE-friendly, but more verbose.',
          traits: [
            'Compile-time checks',
            'No implicit conversion',
            'Autocomplete-friendly',
            'Safe refactoring'
          ]
        },
        {
          id: 'weak-static',
          title: 'Weak + static',
          langs: ['C', 'C++'],
          desc: 'Types are checked at compile time, but casts and conversions can bypass safety. Very fast, but easy to misuse.',
          traits: [
            'Compile-time checks',
            'Pointer casts allowed',
            'Very high performance',
            'Use carefully'
          ]
        },
        {
          id: 'strong-dynamic',
          title: 'Strong + dynamic',
          langs: ['Python', 'Ruby'],
          desc: 'Types are checked at runtime and implicit conversion is rejected. Flexible and safe, but slower.',
          traits: [
            'Runtime checks',
            'Rejects implicit conversion',
            'Fast development',
            'Performance limits'
          ]
        },
        {
          id: 'weak-dynamic',
          title: 'Weak + dynamic',
          langs: ['JavaScript', 'PHP'],
          desc: 'Runtime checking with implicit conversion. Very flexible, but the easiest to surprise you.',
          traits: [
            'Runtime checks',
            'Implicit conversion',
            'Very flexible',
            'Surprise-prone'
          ]
        }
      ],
      typeChecks: [
        {
          lang: 'Java (static)',
          code: 'String name = "Alice";\nname = 123; // ❌ compile error',
          result: 'error',
          badge: 'Compile-time error',
          verdict: 'The problem is found before the program runs.'
        },
        {
          lang: 'Python (dynamic strong)',
          code: 'name = "Alice"\nname = 123  # ✅ OK\nname + " test"  # ❌ runtime TypeError',
          result: 'warning',
          badge: 'Runtime error',
          verdict: 'Assignment is fine, but later operations may fail.'
        },
        {
          lang: 'JavaScript (dynamic weak)',
          code: 'let name = "Alice"\nname = 123  // ✅ OK\nname + " test"  // "123 test" 🤔',
          result: 'success',
          badge: 'Silent pass',
          verdict: 'It does not fail, but the result may not be what you meant.'
        }
      ],
      convertLangs: [
        {
          name: 'JavaScript',
          summary:
            'Weak typing: implicit conversion can produce surprising results',
          summaryClass: 'weak',
          conversions: [
            {
              expr: '"1" + 1',
              result: '"11"',
              explain: 'String concatenation',
              error: false
            },
            {
              expr: '"1" - 1',
              result: '0',
              explain: 'Automatically converts to number',
              error: false
            },
            {
              expr: '[] + []',
              result: '""',
              explain: 'Empty arrays become empty strings',
              error: false
            },
            {
              expr: '[] + {}',
              result: '"[object Object]"',
              explain: 'Object converted to string',
              error: false
            },
            {
              expr: 'true + true',
              result: '2',
              explain: 'Booleans become numbers',
              error: false
            },
            {
              expr: 'null + 1',
              result: '1',
              explain: 'null becomes 0',
              error: false
            }
          ]
        },
        {
          name: 'Python',
          summary:
            'Strong typing: implicit conversion is rejected; be explicit',
          summaryClass: 'strong',
          conversions: [
            {
              expr: '"1" + 1',
              result: 'TypeError',
              explain: 'Implicit conversion not allowed',
              error: true
            },
            {
              expr: '"1" + str(1)',
              result: '"11"',
              explain: 'Explicit conversion',
              error: false
            },
            {
              expr: 'int("1") + 1',
              result: '2',
              explain: 'Explicit conversion',
              error: false
            },
            {
              expr: 'True + True',
              result: '2',
              explain: 'bool is a subclass of int',
              error: false
            },
            {
              expr: '[1] + [2]',
              result: '[1, 2]',
              explain: 'List concatenation',
              error: false
            }
          ]
        },
        {
          name: 'Java',
          summary:
            'Strong typing: string concatenation is special; most conversions are strict',
          summaryClass: 'strong',
          conversions: [
            {
              expr: '"1" + 1',
              result: '"11"',
              explain: 'String concatenation special case',
              error: false
            },
            {
              expr: '(String) 1',
              result: 'Compile error',
              explain: 'Conversion not allowed',
              error: true
            },
            {
              expr: '(int) 1.5',
              result: '1',
              explain: 'Explicit cast loses precision',
              error: false
            },
            {
              expr: 'Integer.parseInt("1")',
              result: '1',
              explain: 'Explicit parsing',
              error: false
            }
          ]
        },
        {
          name: 'Rust',
          summary: 'Strong typing: mismatched types are rejected',
          summaryClass: 'strong',
          conversions: [
            {
              expr: '1_i32 + 1_i64',
              result: 'Compile error',
              explain: 'Type mismatch',
              error: true
            },
            {
              expr: '1_i32 as i64 + 1_i64',
              result: '2',
              explain: 'Explicit as conversion',
              error: false
            },
            {
              expr: '"1".parse::<i32>()',
              result: 'Ok(1)',
              explain: 'Explicit parse returns Result',
              error: false
            },
            {
              expr: '1 as f64',
              result: '1.0',
              explain: 'Explicit conversion',
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
        '✅ Fewer type annotations',
        '✅ Compiler still checks strictly',
        '✅ IDE autocomplete still works',
        '✅ Compiler catches refactor mistakes'
      ]
    },
    staticDynamic: {
      title: '🔍 Static vs Dynamic Typing: Live Comparison',
      desc: 'Choose a code sample and compare how the two type systems behave',
      staticLabel: 'Static typing (TypeScript)',
      dynamicLabel: 'Dynamic typing (JavaScript)',
      staticTiming: '⏱ Checked at compile time',
      dynamicTiming: '⏱ Checked at runtime',
      examples: [
        {
          label: 'Variable assignment',
          staticCode:
            'let name: string = "Alice"\nname = 42  // ❌ compile error',
          dynamicCode: 'let name = "Alice"\nname = 42  // ✅ OK',
          staticResult: '❌ Type "number" is not assignable to type "string"',
          dynamicResult: '✅ Runs normally; name becomes 42',
          staticOk: false,
          dynamicOk: true,
          insight:
            'Static typing catches the error while you write code. Dynamic typing waits until runtime.'
        },
        {
          label: 'Function arguments',
          staticCode:
            'function add(a: number, b: number) {\n  return a + b\n}\nadd("1", 2)  // ❌ compile error',
          dynamicCode:
            'function add(a, b) {\n  return a + b\n}\nadd("1", 2)  // ✅ returns "12"',
          staticResult:
            '❌ Argument of type "string" is not assignable to parameter of type "number"',
          dynamicResult: '✅ Returns "12" (string concatenation, not math)',
          staticOk: false,
          dynamicOk: true,
          insight:
            'Dynamic flexibility can become a bug source: you expected 3 but got "12".'
        },
        {
          label: 'Property access',
          staticCode:
            'interface User { name: string }\nlet user: User = { name: "Bob" }\nconsole.log(user.age)  // ❌ compile error',
          dynamicCode:
            'let user = { name: "Bob" }\nconsole.log(user.age)  // ✅ prints undefined',
          staticResult: '❌ Property "age" does not exist on type "User"',
          dynamicResult: '✅ Prints undefined, which may break later logic',
          staticOk: false,
          dynamicOk: true,
          insight:
            'Static typing catches typos and missing properties at compile time. Dynamic typing silently returns undefined.'
        }
      ]
    },
    strongWeak: {
      title: '⚡ Strong vs Weak Typing: Implicit Conversion Lab',
      desc: 'Choose an expression and see how different languages handle it',
      strong: 'Strong',
      weak: 'Weak',
      expressions: [
        {
          expr: '"1" + 1',
          langs: [
            {
              name: 'JavaScript',
              strong: false,
              code: '"1" + 1',
              result: '→ "11" (string concatenation)',
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
              result: '→ "11" (string concatenation)',
              error: false
            },
            {
              name: 'Rust',
              strong: true,
              code: '"1" + 1',
              result: '→ compile error: type mismatch',
              error: true
            }
          ],
          takeaway:
            'Strongly typed languages refuse to guess your intent. Weakly typed languages may helpfully convert, but the result may be wrong.'
        },
        {
          expr: 'true + 1',
          langs: [
            {
              name: 'JavaScript',
              strong: false,
              code: 'true + 1',
              result: '→ 2 (true becomes 1)',
              error: false
            },
            {
              name: 'Python',
              strong: true,
              code: 'True + 1',
              result: '→ 2 (bool is a subclass of int)',
              error: false
            },
            {
              name: 'Java',
              strong: false,
              code: 'true + 1',
              result: '→ compile error',
              error: true
            },
            {
              name: 'C',
              strong: false,
              code: '1 + 1 // true=1',
              result: '→ 2 (C uses 0/1)',
              error: false
            }
          ],
          takeaway:
            'The relationship between booleans and numbers differs by language. Python is strong, but bool inheriting from int is a design choice.'
        },
        {
          expr: '"5" == 5',
          langs: [
            {
              name: 'JavaScript',
              strong: false,
              code: '"5" == 5',
              result: '→ true (after implicit conversion)',
              error: false
            },
            {
              name: 'Python',
              strong: true,
              code: '"5" == 5',
              result: '→ False (different types)',
              error: false
            },
            {
              name: 'TypeScript',
              strong: false,
              code: '"5" == 5',
              result: '→ true (linters warn)',
              error: false
            },
            {
              name: 'PHP',
              strong: false,
              code: '"5" == 5',
              result: '→ true (loose comparison)',
              error: false
            }
          ],
          takeaway:
            'JavaScript == performs implicit conversion and causes many bugs. The community recommends === for strict comparison.'
        }
      ]
    },
    inference: {
      title: '🧠 Type Inference: How the Compiler Guesses Types',
      desc: 'Click a code line to see how the compiler infers the type step by step',
      processTitle: 'Inference process',
      supportTitle: 'Type Inference Capability by Language',
      codeLines: [
        {
          code: '<span class="kw">let</span> x = <span class="num">42</span>',
          inferred: 'number',
          steps: [
            'The right side is literal 42',
            '42 is an integer-like number',
            'Infer x as number'
          ]
        },
        {
          code: '<span class="kw">let</span> names = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>]',
          inferred: 'string[]',
          steps: [
            'The right side is an array literal',
            'Both elements are strings',
            'Infer the array as string[]'
          ]
        },
        {
          code: '<span class="kw">let</span> result = x > 10 ? <span class="str">"big"</span> : <span class="str">"small"</span>',
          inferred: 'string',
          steps: [
            'Both ternary branches are strings',
            'Branch types match',
            'Infer result as string'
          ]
        },
        {
          code: '<span class="kw">const</span> add = (a: <span class="type">number</span>, b: <span class="type">number</span>) => a + b',
          inferred: '(a: number, b: number) => number',
          steps: [
            'Parameters a and b are annotated as number',
            'number + number returns number',
            'Infer return type as number'
          ]
        },
        {
          code: '<span class="kw">let</span> mixed = [<span class="num">1</span>, <span class="str">"two"</span>, <span class="kw">true</span>]',
          inferred: '(number | string | boolean)[]',
          steps: [
            'The array contains number, string, and boolean',
            'Take the union of element types',
            'Infer (number | string | boolean)[]'
          ]
        }
      ],
      langs: [
        { name: 'Rust', level: 95, label: 'Almost fully inferred' },
        { name: 'TypeScript', level: 85, label: 'Most types inferred' },
        { name: 'Kotlin', level: 80, label: 'Strong local inference' },
        { name: 'Go', level: 50, label: 'Mainly := short declarations' },
        { name: 'Java', level: 40, label: 'var keyword (Java 10+)' },
        { name: 'C', level: 5, label: 'Almost none' }
      ]
    },
    generic: {
      title: '🧩 Generics: Write Once, Use with Any Type',
      desc: 'Choose a scenario and see how generics keep code flexible and safe',
      withoutLabel: '❌ Without generics',
      withLabel: '✅ With generics',
      flowTitle: 'Type flow',
      scenes: [
        {
          label: 'Reusable function',
          without:
            '// Need one function per type\nfunction getFirstNumber(arr: number[]): number {\n  return arr[0]\n}\nfunction getFirstString(arr: string[]): string {\n  return arr[0]\n}\n// boolean, object... it never ends',
          withGeneric:
            '// One generic function handles all types\nfunction getFirst<T>(arr: T[]): T {\n  return arr[0]\n}\n\ngetFirst<number>([1, 2, 3])   // → number\ngetFirst<string>(["a", "b"])  // → string',
          problem: 'You repeat the same code for every type.',
          benefit:
            'T is a type parameter and is replaced by the actual type at call time.',
          flow: ['T = number', 'arr: number[]', 'return: number']
        },
        {
          label: 'Type-safe container',
          without:
            '// any loses type safety\nclass Box {\n  value: any\n  get(): any { return this.value }\n}\nconst box = new Box()\nbox.value = 42\nconst v = box.get() // v is any, no type help',
          withGeneric:
            '// Generic class keeps type safety\nclass Box<T> {\n  value: T\n  get(): T { return this.value }\n}\nconst box = new Box<number>()\nbox.value = 42\nconst v = box.get() // v is number, with full hints',
          problem: 'any removes type checking and hints.',
          benefit:
            'A generic class fixes the type when instantiated and stays safe throughout.',
          flow: ['Box<number>', 'value: number', 'get(): number']
        },
        {
          label: 'Type constraints',
          without:
            '// No constraint, so anything can be passed\nfunction getLength<T>(item: T): number {\n  return item.length  // ❌ compile error!\n  // T may not have length\n}',
          withGeneric:
            '// extends requires T to have length\ninterface HasLength { length: number }\n\nfunction getLength<T extends HasLength>(item: T) {\n  return item.length  // ✅ safe!\n}\n\ngetLength("hello")     // ✅ string has length\ngetLength([1, 2, 3])   // ✅ array has length\ngetLength(42)           // ❌ number has no length',
          problem:
            'Without a constraint, the generic is too free to access properties safely.',
          benefit: 'extends guarantees that T has a length property.',
          flow: ['T extends HasLength', 'has .length', 'safe access']
        }
      ]
    },
    safety: {
      title: '🛡️ Type Safety in Practice: Traps and Defenses',
      desc: 'Choose a common trap and learn how the type system protects code',
      dangerLabel: '⚠️ Dangerous code',
      safeLabel: '✅ Safe code',
      tipTitle: '🔑 Defense strategy',
      traps: [
        {
          icon: '💣',
          name: 'null reference',
          dangerCode:
            'function getLength(str) {\n  return str.length  // what if str is null?\n}\ngetLength(null)  // 💥 runtime crash',
          dangerResult: '💥 TypeError: Cannot read properties of null',
          safeCode:
            'function getLength(str: string | null): number {\n  if (str === null) return 0\n  return str.length  // ✅ compiler knows str is not null here\n}',
          safeResult: '✅ The compiler forces you to handle null',
          tips: [
            'Enable strictNullChecks',
            'Use string | null to mark nullable values explicitly',
            'Use optional chaining ?. for safe access'
          ]
        },
        {
          icon: '🎭',
          name: 'Overusing assertions',
          dangerCode:
            'const data = fetchAPI() as any\nconst name = data.user.profile.name\n// What if the API shape changed?',
          dangerResult: '💥 Runtime crash; any bypassed all type checks',
          safeCode:
            'interface APIResponse {\n  user: { profile: { name: string } }\n}\nconst data: APIResponse = await fetchAPI()\nconst name = data.user.profile.name',
          safeResult:
            '✅ If the API shape changes, compile-time checks can catch it',
          tips: [
            'Avoid any; prefer unknown',
            'Define explicit interfaces for API responses',
            'Use libraries such as zod for runtime validation'
          ]
        },
        {
          icon: '🔄',
          name: 'Implicit conversion',
          dangerCode:
            'if (userId == 0) {\n  // userId === "" also enters!\n  console.log("invalid user")\n}\n// "" == 0 → true',
          dangerResult: '💥 Empty string is treated as 0, causing logic errors',
          safeCode:
            'if (userId === 0) {\n  console.log("invalid user")\n}\n// "" === 0 → false',
          safeResult: '✅ Strict comparison avoids implicit conversion',
          tips: [
            'Always use === instead of ==',
            'Enable ESLint eqeqeq',
            'Use TypeScript strict mode'
          ]
        },
        {
          icon: '📦',
          name: 'Unsafe array types',
          dangerCode:
            'const items = []  // any[]\nitems.push(1)\nitems.push("hello")\nitems.push({ x: 1 })\n// Mixed values make later usage fragile',
          dangerResult:
            '💥 Inconsistent element types can crash later operations',
          safeCode:
            'const items: number[] = []\nitems.push(1)\nitems.push("hello")  // ❌ compile error!\n// Compiler keeps element types consistent',
          safeResult: '✅ Type mismatch is blocked at compile time',
          tips: [
            'Specify element types when declaring arrays',
            'Use ReadonlyArray to prevent accidental mutation',
            'Use tuples such as [string, number] for fixed structures'
          ]
        }
      ]
    },
    languageModel: {
      title: 'Programming Language Type Models',
      subtitle: 'How type systems differ across languages',
      matrixTitle: 'Type System Classification Matrix',
      inferenceTitle: 'Type Inference',
      inferenceDesc:
        'Modern languages can infer variable types automatically without explicit declarations.',
      dimensions: [
        {
          id: 'static',
          title: 'When types are checked',
          options: [
            { name: 'Static typing', langs: 'Java, C++, Rust, Go' },
            { name: 'Dynamic typing', langs: 'Python, JavaScript, Ruby' }
          ]
        },
        {
          id: 'strength',
          title: 'Type strength',
          options: [
            { name: 'Strong typing', langs: 'Python, Java, Rust' },
            { name: 'Weak typing', langs: 'JavaScript, C, PHP' }
          ]
        }
      ],
      matrixCells: [
        {
          title: 'Static + strong',
          langs: 'Java, C++, Rust, Go',
          desc: 'Compile-time checks with type safety'
        },
        {
          title: 'Static + weak',
          langs: 'C',
          desc: 'Compile-time checks with flexible conversion'
        },
        {
          title: 'Dynamic + strong',
          langs: 'Python, Ruby',
          desc: 'Runtime checks with type safety'
        },
        {
          title: 'Dynamic + weak',
          langs: 'JavaScript, PHP',
          desc: 'Runtime checks with flexible typing'
        }
      ],
      inferenceExamples: [
        {
          lang: 'TypeScript',
          code: 'let x = 5; // inferred as number\nlet name = "Alice"; // string'
        },
        {
          lang: 'Rust',
          code: 'let x = 5; // inferred as i32\nlet name = "Alice"; // &str'
        }
      ]
    }
  },
  powerOnToWeb: {
    controls: {
      prev: '← Previous',
      start: 'Start →',
      next: 'Next →',
      restart: '↺ Restart'
    },
    powerOn: {
      title: 'Hardware Startup Chain',
      steps: [
        { icon: '🔌', name: 'Power supply', desc: 'AC power → DC power' },
        {
          icon: '🧩',
          name: 'Motherboard chipset',
          desc: 'Coordinates hardware components'
        },
        {
          icon: '⚙️',
          name: 'CPU reset',
          desc: 'Clear registers and become ready'
        },
        { icon: '📟', name: 'BIOS/UEFI', desc: 'Run the first instruction' }
      ]
    },
    bios: {
      title: 'BIOS/UEFI Workflow',
      introDesc: 'Click start to explore<br>the firmware boot flow',
      allHardwarePassed: '✓ All hardware checks passed',
      initHeader: 'Initialize hardware configuration',
      bootHeader: 'Find boot device',
      bootOrder: 'Boot order:',
      bootFrom: '🚀 Booting from {name}',
      beepTitle: 'Beep Error Codes',
      postItems: [
        { name: 'Memory check', icon: '🧠' },
        { name: 'GPU check', icon: '🎮' },
        { name: 'Keyboard/mouse', icon: '⌨️' },
        { name: 'Storage devices', icon: '💾' }
      ],
      hardwareItems: [
        { name: 'CPU', icon: '🧠' },
        { name: 'Memory', icon: '💾' },
        { name: 'GPU', icon: '🎮' },
        { name: 'Network card', icon: '🌐' },
        { name: 'Audio card', icon: '🔊' },
        { name: 'USB', icon: '🔌' }
      ],
      bootDevices: [
        { name: 'Disk', icon: '💿' },
        { name: 'USB drive', icon: '🔌' },
        { name: 'Network', icon: '🌐' }
      ],
      beepCodes: [
        { beeps: '1 short', meaning: 'Normal startup' },
        { beeps: '1 long 2 short', meaning: 'Graphics error' },
        { beeps: '1 long 3 short', meaning: 'Memory error' },
        { beeps: 'Continuous long', meaning: 'Memory not detected' },
        { beeps: 'Continuous short', meaning: 'Power problem' }
      ],
      deviceStatus: {
        bootable: '✓ Bootable',
        skipped: '✗ Skipped',
        checking: 'Checking...',
        waiting: 'Waiting'
      },
      stages: [
        {
          short: 'Intro',
          icon: '📟',
          name: 'What are BIOS and UEFI?',
          desc: 'BIOS is the first program that runs after power-on and lives in a read-only chip on the motherboard. UEFI is the modern, safer successor to BIOS.',
          operations: [
            {
              icon: '💾',
              name: 'BIOS (traditional)',
              what: 'Basic Input/Output System, a firmware interface used since the 1980s.',
              details: [
                'Stored in motherboard ROM',
                'Runs in 16-bit real mode',
                'Supports disks up to 2.2 TB',
                'Blue text interface'
              ]
            },
            {
              icon: '✨',
              name: 'UEFI (modern)',
              what: 'Unified Extensible Firmware Interface, the modern replacement for BIOS.',
              details: [
                'Supports 32/64-bit modes',
                'Supports disks larger than 2.2 TB',
                'Graphical settings interface',
                'Secure Boot support'
              ]
            }
          ],
          analogy:
            'BIOS/UEFI is like the computer gatekeeper: it wakes up first, checks that everything is healthy, and decides who, the operating system, can enter.'
        },
        {
          short: 'POST',
          icon: '🔍',
          name: 'Power-On Self-Test (POST)',
          desc: 'POST checks key hardware one by one to make sure it can work normally.',
          operations: [
            {
              icon: '🧠',
              name: 'Memory check',
              what: 'Write test data to memory and read it back to verify each memory module.',
              details: [
                'Byte-by-byte write/read tests',
                'Check memory capacity and speed',
                'Failure emits a beep code'
              ]
            },
            {
              icon: '🎮',
              name: 'GPU check',
              what: 'Initialize the graphics card and try to output an image. If it fails, the screen stays black.',
              details: [
                'Load graphics BIOS',
                'Set a basic display mode',
                'Failure beep: 1 long 2 short'
              ]
            },
            {
              icon: '⌨️',
              name: 'Peripheral check',
              what: 'Scan USB/PS2 ports and detect input devices such as keyboard and mouse.',
              details: [
                'Enumerate USB devices',
                'Check keyboard response',
                'Non-critical devices do not block boot'
              ]
            },
            {
              icon: '💾',
              name: 'Storage check',
              what: 'Identify disks, SSDs, and optical drives, then read device information.',
              details: [
                'Detect SATA/NVMe devices',
                'Read model and capacity',
                'Prepare for the boot search'
              ]
            }
          ],
          analogy:
            'Like a pre-flight safety checklist: the pilot confirms engines, instruments, and fuel before takeoff.'
        },
        {
          short: 'Init',
          icon: '⚙️',
          name: 'Initialize hardware',
          desc: 'After self-test passes, firmware configures hardware parameters and creates the bridge between hardware and software.',
          operations: [
            {
              icon: '🔧',
              name: 'Set operating modes',
              what: 'Configure CPU frequency, memory timings such as CAS latency, and related parameters.',
              details: [
                'Read user settings from CMOS',
                'Apply overclock settings if present',
                'Set power management mode'
              ]
            },
            {
              icon: '📋',
              name: 'Interrupt vector table',
              what: 'Map interrupt numbers to handlers so hardware events can be handled correctly.',
              details: [
                'Configure PIC/APIC',
                'Assign IRQ numbers',
                'Set interrupt handler entries'
              ]
            },
            {
              icon: '🔌',
              name: 'PCI device enumeration',
              what: 'Scan PCI/PCIe buses and allocate resources for GPU, network card, audio card, and more.',
              details: [
                'Discover all PCI devices',
                'Allocate memory-mapped I/O addresses',
                'Assign interrupt resources'
              ]
            },
            {
              icon: '🕐',
              name: 'Clock initialization',
              what: 'Read the real-time clock from CMOS and synchronize system time.',
              details: [
                'Read hardware clock',
                'Validate time',
                'Provide initial time to the operating system'
              ]
            }
          ],
          analogy:
            'Like tuning before a concert: every instrument, the hardware, must be set correctly before the conductor can coordinate the performance.'
        },
        {
          short: 'Boot',
          icon: '🔎',
          name: 'Find a boot device',
          desc: 'Firmware follows the boot order, reads a boot sector, and hands control to the operating system.',
          operations: [
            {
              icon: '📑',
              name: 'Read boot order',
              what: 'Read the user-configured device priority list from CMOS/NVRAM.',
              details: [
                'Disk → USB → network by default',
                'Users can change it in BIOS settings',
                'Saved in non-volatile storage'
              ]
            },
            {
              icon: '💿',
              name: 'Check boot sector',
              what: 'Read the first sector of the device and verify the 0x55AA signature at the end.',
              details: [
                'Read sector 0 (512 bytes)',
                'Check bytes 510-511 for 0x55AA',
                'Validate boot code'
              ]
            },
            {
              icon: '🔀',
              name: 'Try multiple devices',
              what: 'If the first device cannot boot, automatically try the next one.',
              details: [
                'No OS on disk → try USB',
                'No USB → try network boot',
                'All fail → show an error'
              ]
            },
            {
              icon: '🚀',
              name: 'Jump and execute',
              what: 'Load boot-sector code into memory at 0x7C00 and make the CPU jump there.',
              details: [
                'Load 512 bytes of boot code',
                'Jump to 0x7C00',
                'Hand control to the bootloader'
              ]
            }
          ],
          analogy:
            'Like choosing transportation in the morning: first check your car, then a shared bike, then a ride-hailing service.'
        }
      ]
    },
    osBoot: {
      title: 'Operating System Boot Flow',
      introTitle: 'Operating System',
      introDesc:
        'Manages hardware and software resources<br>the computer steward',
      osComparisonTitle: 'Common Operating Systems',
      osComparisonHeaders: ['System', 'Features', 'Typical devices'],
      bootFlowTitle: 'Windows vs Linux Boot Flow',
      osList: [
        {
          name: 'Windows',
          icon: '🪟',
          feature: 'Rich ecosystem and broad compatibility',
          device: 'Desktops and laptops'
        },
        {
          name: 'macOS',
          icon: '🍎',
          feature: 'Apple ecosystem, smooth and stable',
          device: 'Mac computers'
        },
        {
          name: 'Linux',
          icon: '🐧',
          feature: 'Open source and server-friendly',
          device: 'Servers and embedded devices'
        },
        {
          name: 'Android',
          icon: '🤖',
          feature: 'Mobile Linux platform',
          device: 'Phones and tablets'
        },
        {
          name: 'iOS',
          icon: '📱',
          feature: 'Apple mobile platform',
          device: 'iPhone and iPad'
        }
      ],
      bootloaderSteps: [
        'Read partition table',
        'Find system partition',
        'Load kernel into memory',
        'Jump to kernel entry'
      ],
      kernelModules: [
        'Process management',
        'Memory management',
        'File system',
        'Device drivers'
      ],
      services: [
        { name: 'Network service', icon: '🌐' },
        { name: 'Audio service', icon: '🔊' },
        { name: 'Security center', icon: '🛡️' },
        { name: 'Print service', icon: '🖨️' },
        { name: 'Graphical shell', icon: '🎨' },
        { name: 'System log', icon: '📝' }
      ],
      desktopIcons: [
        { icon: '📁', label: 'Files' },
        { icon: '🌐', label: 'Browser' },
        { icon: '📧', label: 'Mail' },
        { icon: '⚙️', label: 'Settings' }
      ],
      windowsFlow: [
        'BIOS',
        'MBR',
        'bootmgr',
        'winload.exe',
        'ntoskrnl.exe',
        'System services',
        'Desktop'
      ],
      linuxFlow: [
        'BIOS',
        'GRUB',
        'vmlinuz',
        'systemd',
        'System services',
        'Desktop environment'
      ],
      stages: [
        {
          short: 'Intro',
          icon: '🖥️',
          name: 'What is an operating system?',
          desc: 'An operating system is the software layer that manages hardware and software resources.',
          operations: [
            {
              icon: '🏢',
              name: 'Resource management',
              what: 'The OS manages CPU, memory, disk, network, and other hardware resources.',
              details: [
                'Process management - schedule programs',
                'Memory management - allocate and reclaim memory',
                'File system - manage file storage',
                'Device management - control hardware'
              ]
            },
            {
              icon: '🎮',
              name: 'Provide interfaces',
              what: 'It gives applications a unified interface so they do not need to operate hardware directly.',
              details: [
                'System call API',
                'Graphical user interface',
                'Command-line interface',
                'Driver interface'
              ]
            },
            {
              icon: '🔒',
              name: 'Security protection',
              what: 'It protects resources from unauthorized access and isolates users and processes.',
              details: [
                'User permission management',
                'Process address-space isolation',
                'File access control',
                'Network security protection'
              ]
            }
          ],
          analogy:
            'The OS is like building management: it supplies utilities, assigns rooms, manages storage, and keeps security so residents, the applications, can live safely.'
        },
        {
          short: 'Bootloader',
          icon: '🚀',
          name: 'Bootloader',
          desc: 'The first disk sector contains a bootloader whose job is to load the OS kernel into memory.',
          operations: [
            {
              icon: '📀',
              name: 'Read partition table',
              what: 'The bootloader reads the disk partition table and finds the partition containing the OS.',
              details: [
                'Read MBR',
                'Parse partition table structure',
                'Locate active partition',
                'Windows: bootmgr / Linux: GRUB'
              ]
            },
            {
              icon: '🔍',
              name: 'Locate kernel',
              what: 'Find the operating system kernel file in the system partition.',
              details: [
                'Windows: read BCD configuration',
                'Linux: show system selection menu',
                'Support multi-boot',
                'Load file-system driver'
              ]
            },
            {
              icon: '💾',
              name: 'Load into memory',
              what: 'Read the kernel file from disk into a specific memory location.',
              details: [
                'Decompress kernel image',
                'Copy above memory 0x100000',
                'Windows: ntoskrnl.exe',
                'Linux: vmlinuz'
              ]
            },
            {
              icon: '➡️',
              name: 'Jump and execute',
              what: 'Set the initial environment and jump to the kernel entry point.',
              details: [
                'Set CPU protected mode',
                'Initialize page tables',
                'Jump to kernel entry',
                'Kernel starts running'
              ]
            }
          ],
          analogy:
            'The bootloader is like a stage announcer: it checks the venue, finds the script, places the props, then announces that the show begins.'
        },
        {
          short: 'Kernel',
          icon: '⚙️',
          name: 'Operating system kernel',
          desc: 'The kernel is the OS core and manages memory, CPU, processes, and other core functions.',
          operations: [
            {
              icon: '🧠',
              name: 'Process management',
              what: 'Create the first user process and set up scheduling.',
              details: [
                'Create init/systemd process',
                'Create process control blocks',
                'Initialize scheduler',
                'Set process priorities'
              ]
            },
            {
              icon: '💾',
              name: 'Memory management',
              what: 'Set up virtual memory and separate kernel space from user space.',
              details: [
                'Initialize page tables',
                'Map physical memory',
                'Set memory protection',
                'Enable virtual memory'
              ]
            },
            {
              icon: '📁',
              name: 'File system',
              what: 'Mount the root file system and initialize the VFS layer.',
              details: [
                'Identify file-system type',
                'Mount root partition',
                'Initialize inode cache',
                'Create file descriptor table'
              ]
            },
            {
              icon: '🔌',
              name: 'Device drivers',
              what: 'Load core device drivers and initialize hardware abstraction.',
              details: [
                'Load disk driver',
                'Initialize display driver',
                'Load keyboard and mouse drivers',
                'Enumerate PCI devices'
              ]
            }
          ],
          analogy:
            'The kernel is like a newly appointed CEO: it takes over departments, assigns responsibilities, and establishes the company operating model.'
        },
        {
          short: 'Services',
          icon: '🔧',
          name: 'System services startup',
          desc: 'The kernel starts the first user process and then starts background services by dependency order.',
          operations: [
            {
              icon: '🚀',
              name: 'Init process',
              what: 'Start the first user-space process (PID 1), the ancestor of all other processes.',
              details: [
                'Linux: systemd or init',
                'Windows: smss.exe → csrss.exe',
                'Read service configuration files',
                'Sort by dependencies'
              ]
            },
            {
              icon: '🌐',
              name: 'Network service',
              what: 'Initialize network drivers and configure connectivity.',
              details: [
                'Load network driver',
                'Obtain IP address with DHCP',
                'Configure DNS servers',
                'Start firewall'
              ]
            },
            {
              icon: '🔒',
              name: 'Security service',
              what: 'Start authentication and security monitoring services.',
              details: [
                'Start login manager',
                'Initialize permission system',
                'Start antivirus',
                'Configure security policies'
              ]
            },
            {
              icon: '🔊',
              name: 'Multimedia service',
              what: 'Start audio, display, and other multimedia-related services.',
              details: [
                'Start audio service',
                'Initialize display manager',
                'Load themes and fonts',
                'Prepare user interface'
              ]
            }
          ],
          analogy:
            'Like a mall before opening: security arrives, climate control starts, checkout systems go online, and everything gets ready for customers.'
        },
        {
          short: 'Desktop',
          icon: '🖥️',
          name: 'Show desktop',
          desc: 'The graphical interface is ready and the familiar desktop appears.',
          operations: [
            {
              icon: '🎮',
              name: 'Graphics driver',
              what: 'Initialize the GPU and set screen resolution and color.',
              details: [
                'Load graphics driver',
                'Set resolution such as 1920×1080',
                'Enable hardware acceleration',
                'Configure multiple displays'
              ]
            },
            {
              icon: '🪟',
              name: 'Window system',
              what: 'Start the window manager responsible for drawing and interaction.',
              details: [
                'Windows: DWM',
                'Linux: X11/Wayland',
                'macOS: WindowServer',
                'Manage window stacking'
              ]
            },
            {
              icon: '🎨',
              name: 'Desktop environment',
              what: 'Draw wallpaper, desktop icons, taskbar, and other interface elements.',
              details: [
                'Load wallpaper',
                'Show desktop icons',
                'Render taskbar',
                'Load system tray'
              ]
            },
            {
              icon: '👆',
              name: 'User interaction',
              what: 'The cursor appears and the system becomes fully interactive.',
              details: [
                'Show mouse pointer',
                'Respond to keyboard input',
                'Load user settings',
                'Start startup programs'
              ]
            }
          ],
          analogy:
            'The curtain opens and the lights turn on: the stage is set, icons are in place, and the system waits for your first action.'
        }
      ]
    },
    browser: {
      title: 'Browser Architecture -- Click a Module for Details',
      modules: [
        {
          icon: '🎨',
          name: 'User interface',
          desc: 'The part you see and operate directly: address bar, tabs, bookmarks, and back/forward buttons.',
          tags: ['Address bar', 'Tabs', 'Bookmarks']
        },
        {
          icon: '🔗',
          name: 'Browser engine',
          desc: 'The bridge between the user interface and rendering engine, coordinating communication between them.',
          tags: ['Blink', 'Gecko', 'WebKit']
        },
        {
          icon: '📄',
          name: 'Rendering engine',
          desc: 'Parses HTML and CSS and turns code into the web page you see.',
          tags: ['HTML parsing', 'CSS calculation', 'Layout and paint']
        },
        {
          icon: '⚡',
          name: 'JavaScript engine',
          desc: 'Executes JavaScript in the page to power dynamic interactions.',
          tags: ['V8', 'SpiderMonkey', 'JavaScriptCore']
        },
        {
          icon: '🌐',
          name: 'Network module',
          desc: 'Sends HTTP requests and receives server responses, connecting the browser to the outside world.',
          tags: ['HTTP/2', 'HTTP/3', 'WebSocket']
        },
        {
          icon: '💾',
          name: 'Data storage',
          desc: 'Stores site data locally so future visits are faster and logins can persist.',
          tags: ['Cookie', 'LocalStorage', 'Cache']
        }
      ]
    },
    url: {
      title: 'Full URL Access Flow',
      autoPlay: '▶ Auto demo',
      playing: 'Playing...',
      browser: 'Browser',
      server: 'Server',
      steps: [
        {
          name: 'URL parsing',
          dir: 'right',
          detail:
            'https://example.com → protocol: https, domain: example.com, path: /'
        },
        {
          name: 'DNS lookup',
          dir: 'right',
          detail:
            'Ask DNS servers to translate the domain into IP address 93.184.216.34'
        },
        {
          name: 'TCP three-way handshake',
          dir: 'right',
          detail:
            'SYN → SYN-ACK → ACK, establishing a reliable transport connection'
        },
        {
          name: 'TLS handshake',
          dir: 'right',
          detail:
            'Exchange keys, verify certificates, and create an HTTPS encrypted channel'
        },
        {
          name: 'Send HTTP request',
          dir: 'right',
          detail: 'GET /index.html HTTP/1.1  Host: example.com'
        },
        {
          name: 'Server processing',
          dir: 'left',
          detail:
            'Parse request → run business logic → query database → assemble response'
        },
        {
          name: 'Return HTTP response',
          dir: 'left',
          detail: 'HTTP/1.1 200 OK  Content-Type: text/html'
        },
        {
          name: 'Browser rendering',
          dir: 'left',
          detail:
            'HTML → DOM tree → style calculation → layout → paint to screen'
        }
      ]
    },
    rendering: {
      title: 'Browser Rendering Pipeline',
      stages: [
        {
          name: 'HTML parsing',
          desc: 'Parse HTML text into the DOM tree, the document object model'
        },
        {
          name: 'CSS parsing',
          desc: 'Parse CSS rules into stylesheets and compute final styles for each element'
        },
        {
          name: 'Build render tree',
          desc: 'DOM tree + style rules = render tree containing visible elements'
        },
        {
          name: 'Layout calculation',
          desc: 'Compute the exact position and size of each element on the page'
        },
        {
          name: 'Paint',
          desc: 'Draw text, colors, images, borders, and other pixels into buffers'
        },
        {
          name: 'Composite and display',
          desc: 'Combine layers into the final frame and send it to the screen through the GPU'
        }
      ]
    },
    full: {
      title: 'From Pressing Power to Seeing a Web Page -- Full Chain',
      phases: [
        {
          icon: '🔌',
          name: 'Hardware startup',
          color: '#f59e0b',
          steps: 'Power → motherboard → CPU → BIOS'
        },
        {
          icon: '🔍',
          name: 'Firmware self-test',
          color: '#ef4444',
          steps: 'POST → initialize → find boot disk'
        },
        {
          icon: '💻',
          name: 'System boot',
          color: '#8b5cf6',
          steps: 'Bootloader → kernel → services → desktop'
        },
        {
          icon: '🌐',
          name: 'Browser startup',
          color: '#3b82f6',
          steps: 'Create process → load code → ready'
        },
        {
          icon: '📡',
          name: 'Network request and rendering',
          color: '#10b981',
          steps: 'DNS → TCP → HTTP → render'
        }
      ]
    }
  },
  cpuArchitecture: {
    title: 'Detailed CPU Instruction Cycle Demo',
    cpuLabel: 'CPU',
    controlUnit: 'Control Unit CU',
    programCounter: 'Program Counter',
    instructionRegister: 'Instruction Register',
    memoryAddressRegister: 'Memory Address Register',
    memoryDataRegister: 'Memory Data Register',
    alu: 'Arithmetic Logic Unit ALU',
    accumulator: 'Accumulator',
    registerGroup: 'General Register File',
    addressBus: 'Address Bus',
    dataBus: 'Data Bus',
    controlBus: 'Control Bus',
    mainMemory: 'Main Memory',
    dataArea: 'Data Area',
    phases: [
      ['Fetch', 'Fetch'],
      ['Decode', 'Decode'],
      ['Execute', 'Execute'],
      ['Write Back', 'Write Back']
    ],
    stepBadge: 'Step {step} / {total}',
    signalLabel: 'Signal:',
    clockButton: '⟳ Clock Pulse (Next Step)',
    autoPause: '⏸ Pause',
    autoRun: '▶ Auto Run',
    reset: '↺ Reset',
    done: '✅ Program complete! Executed {programLength} instructions in {stepIndex} clock steps.',
    restart: 'Restart',
    startHint:
      'Click "Clock Pulse" to step through execution, or "Auto Run" to play continuously.',
    aluOps: {
      idle: '—',
      decode: 'Decode',
      prepare: 'Prepare',
      readMemory: 'Read memory',
      immediate: 'Immediate',
      result: '= Result',
      writeMemory: 'Write memory',
      writeBack: 'Write back'
    },
    steps: {
      fetch1:
        '[Fetch 1/3] PC={pc}; the control unit issues a read signal and sends the PC value into MAR (Memory Address Register)',
      fetch2:
        '[Fetch 2/3] MAR={pc} is sent over the address bus to memory, which locates that address',
      fetch3:
        '[Fetch 3/3] Memory sends instruction "{inst}" via the data bus into MDR, then IR; PC increments → {nextPc}',
      decode1:
        '[Decode 1/2] The control unit parses instruction "{inst}" in IR and identifies opcode and operands',
      decode2:
        '[Decode 2/2] The control unit emits control signal "{op}", activates the target hardware, and prepares the operand path',
      load1:
        '[Execute 1/2] Send operand address {src} into MAR and access memory through the address bus',
      load2:
        '[Execute 2/2] Memory data 42 travels through the data bus into MDR, then into target register {dst}',
      loadi:
        '[Execute] Immediate #{imm} is extracted from IR and written into register {dst}',
      add1: '[Execute 1/2] ALU reads R0 and R1 and starts the addition',
      add2: '[Execute 2/2] ALU completes the addition and stores the result in ACC',
      store1:
        '[Execute 1/2] Put target address {addr} into MAR and move {src} into MDR, ready to write memory',
      store2:
        '[Execute 2/2] MDR value is written through the data bus to memory address {addr}',
      wbAdd1:
        '[Write Back 1/2] Write the result in ACC back to target register R0',
      wbAdd2:
        '[Write Back 2/2] Write-back is done. PC was already incremented during fetch and now points to {nextPc}',
      wbStore:
        '[Write Back] The STORE result was written during execute; write-back confirms completion, PC={nextPc}',
      wbDefault:
        '[Write Back] The result has been written to the target register. PC has advanced to {nextPc} and the next instruction is ready',
      signal: {
        marPc: 'MAR ← PC ({pc})',
        addr: 'Address bus: {pc}',
        mdrIrPc: 'MDR ← MEM[{pc}]; IR ← MDR; PC++',
        opcode: 'IR → opcode: {op}',
        control: 'Control signal: {op}',
        load1: 'MAR ← {src}',
        load2: 'MDR ← MEM[{src}]; {dst} ← MDR',
        loadi: '{dst} ← #{imm}',
        add1: 'ALU: R0 + R1',
        add2: 'ACC ← R0 + R1',
        store1: 'MAR ← {addr}; MDR ← {src}',
        store2: 'MEM[{addr}] ← MDR',
        wbAdd: 'R0 ← ACC',
        wbAddPc: 'PC = {nextPc}',
        wbStore: 'Done',
        wbDefault: 'PC = {nextPc}'
      }
    }
  },
  computerOrganization: {
    codeToInstruction: {
      title:
        '🔗 From Code to Instructions: One Line Through the Translation Pipeline',
      desc: 'Click each stage to see how source code becomes CPU-executable instructions',
      insightTitle: '💡 Key idea',
      insightText:
        'An instruction set is the CPU API: it defines every command the CPU understands. A compiler translates your high-level language into calls to that API. Different CPUs, such as x86 and ARM, have different instruction sets, just as different services expose different APIs.',
      examples: [
        {
          code: 'int a = 10 + 5;',
          stages: [
            {
              name: 'Source code',
              content: 'int a = 10 + 5;',
              explain:
                'This is high-level code written in an editor. It is easy for humans to read, but the CPU does not understand int or the + operator directly.'
            },
            {
              name: 'Compiler emits assembly',
              content:
                'MOV  R1, #10    ; put 10 into register R1\nMOV  R2, #5     ; put 5 into register R2\nADD  R3, R1, R2 ; R3 = R1 + R2\nSTORE R3, [a]   ; store the result at variable a',
              explain:
                'The compiler breaks one high-level line into four assembly instructions. Each instruction does one simple thing: move data, add values, or store a result.'
            },
            {
              name: 'Assembler emits machine code',
              content:
                '0001 0001 0000 1010  → MOV R1, #10\n0001 0010 0000 0101  → MOV R2, #5\n0010 0011 0001 0010  → ADD R3, R1, R2\n0100 0011 1000 0000  → STORE R3, [a]',
              explain:
                'The assembler encodes each assembly instruction as binary. The opcode bits say what to do, and the operand bits say what to do it to.'
            },
            {
              name: 'CPU executes instructions',
              content:
                'Clock 1: fetch → decode → execute MOV R1, #10\nClock 2: fetch → decode → execute MOV R2, #5\nClock 3: fetch → decode → execute ADD R3, R1, R2\nClock 4: fetch → decode → execute STORE R3, [a]',
              explain:
                'The CPU fetches instructions from memory in order, decodes them, then executes them. In this simplified model, four instructions leave variable a with value 15.'
            }
          ]
        },
        {
          code: 'if (x > 0) y = 1;',
          stages: [
            {
              name: 'Source code',
              content: 'if (x > 0) y = 1;',
              explain:
                'A simple conditional is obvious to humans, but the CPU has no direct idea of if. It compares values and jumps.'
            },
            {
              name: 'Compiler emits assembly',
              content:
                'LOAD R1, [x]     ; read x from memory\nCMP  R1, #0       ; compare R1 with 0\nBLE  skip         ; if <= 0, skip below\nMOV  R2, #1       ; R2 = 1\nSTORE R2, [y]     ; store 1 into y\nskip:             ; jump target',
              explain:
                'The compiler turns the if statement into compare plus conditional branch. CMP sets flags, and BLE uses those flags to decide whether to skip the assignment.'
            },
            {
              name: 'Assembler emits machine code',
              content:
                '0011 0001 1000 0000  → LOAD R1, [x]\n0101 0001 0000 0000  → CMP R1, #0\n0110 0000 0000 0011  → BLE +3 (skip 3 instructions)\n0001 0010 0000 0001  → MOV R2, #1\n0100 0010 1000 0001  → STORE R2, [y]',
              explain:
                'The BLE operand is +3, a relative offset that tells the CPU to jump forward three instructions. This is relative addressing in practice.'
            },
            {
              name: 'CPU executes instructions',
              content:
                'Assume x = 5 (> 0):\n→ LOAD: read x=5 into R1\n→ CMP: compare 5 > 0 and set flags\n→ BLE: condition is false, do not jump\n→ MOV: R2 = 1\n→ STORE: y = 1 ✅',
              explain:
                'Because x=5 is greater than 0, the BLE condition is false and the CPU continues into the assignment. If x were 0, BLE would skip to the label.'
            }
          ]
        }
      ]
    },
    instructionFormat: {
      title: 'Machine Instruction Format',
      subtitle: 'Opcode + operands = machine instruction',
      bitLabel: '{bits} bits',
      exampleTitle: 'Example instruction',
      formatExplanationTitle: '{type} format',
      commonExamples: 'Common examples',
      opcodeTitle: 'Common opcodes',
      formats: [
        {
          id: 'zero',
          type: 'Zero-address',
          fields: [{ name: 'Opcode', bits: 8 }],
          example: '01101100',
          description: 'Operands are implied on the stack top',
          explanation:
            'A zero-address instruction contains only an opcode; operands are implied by the operand stack. It is common in stack machines and instructions such as ENTER or EXIT.',
          examples: [
            { name: 'POP', desc: 'Pop data from the stack top' },
            { name: 'PUSH', desc: 'Push data onto the stack top' },
            { name: 'CALL', desc: 'Call a subroutine' }
          ]
        },
        {
          id: 'one',
          type: 'One-address',
          fields: [
            { name: 'Opcode', bits: 8 },
            { name: 'Address', bits: 24 }
          ],
          example: '01101100 00000001 00000010 00000011',
          description: 'One operand address; the other is implied',
          explanation:
            'A one-address instruction names one operand in memory or a register while the other operand is implied, often ACC. INC and DEC are typical single-operand instructions.',
          examples: [
            { name: 'INC A', desc: 'A = A + 1' },
            { name: 'DEC A', desc: 'A = A - 1' },
            { name: 'NOT A', desc: 'A = ~A' }
          ]
        },
        {
          id: 'two',
          type: 'Two-address',
          fields: [
            { name: 'Opcode', bits: 8 },
            { name: 'Destination', bits: 8 },
            { name: 'Source', bits: 8 }
          ],
          example: '01101100 00000001 00000010',
          description: 'Two operand addresses; result overwrites destination',
          explanation:
            'This common format names two operands and overwrites the destination with the result. MOV, ADD, and SUB often use this style.',
          examples: [
            { name: 'MOV R1, R2', desc: 'R1 = R2' },
            { name: 'ADD R1, R2', desc: 'R1 = R1 + R2' },
            { name: 'SUB R1, R2', desc: 'R1 = R1 - R2' }
          ]
        },
        {
          id: 'three',
          type: 'Three-address',
          fields: [
            { name: 'Opcode', bits: 8 },
            { name: 'Destination', bits: 8 },
            { name: 'Source 1', bits: 8 },
            { name: 'Source 2', bits: 8 }
          ],
          example: '01101100 00000001 00000010 00000011',
          description:
            'Result goes to a new destination without changing sources',
          explanation:
            'Three addresses identify the destination and two source operands separately. The result goes into the destination without modifying the sources.',
          examples: [
            { name: 'ADD R1, R2, R3', desc: 'R1 = R2 + R3' },
            { name: 'SUB R1, R2, R3', desc: 'R1 = R2 - R3' },
            { name: 'MUL R1, R2, R3', desc: 'R1 = R2 × R3' }
          ]
        }
      ],
      opcodes: [
        ['00000000', 'NOP', 'No operation'],
        ['00000001', 'MOV', 'Move data'],
        ['00000010', 'ADD', 'Addition'],
        ['00000011', 'SUB', 'Subtraction'],
        ['00000100', 'MUL', 'Multiplication'],
        ['00000101', 'DIV', 'Division'],
        ['00000110', 'AND', 'Logical AND'],
        ['00000111', 'OR', 'Logical OR'],
        ['00001000', 'NOT', 'Logical NOT'],
        ['00001001', 'XOR', 'Exclusive OR'],
        ['00001010', 'SHL', 'Shift left'],
        ['00001011', 'SHR', 'Shift right'],
        ['00001100', 'JMP', 'Unconditional jump'],
        ['00001101', 'JE', 'Jump if equal'],
        ['00001110', 'JNE', 'Jump if not equal'],
        ['00001111', 'CALL', 'Call subroutine'],
        ['00010000', 'RET', 'Return'],
        ['00010001', 'PUSH', 'Push stack'],
        ['00010010', 'POP', 'Pop stack'],
        ['00010011', 'LOAD', 'Load from memory'],
        ['00010100', 'STORE', 'Store to memory']
      ]
    },
    addressingMode: {
      title: 'Addressing Modes',
      subtitle: 'How an instruction finds operand locations',
      definition: 'Definition',
      instructionFormat: 'Instruction format',
      example: 'Example',
      executionProcess: 'Execution process',
      characteristics: 'Characteristics',
      speed: 'Speed',
      flexibility: 'Flexibility',
      fast: 'Fast',
      slow: 'Slow',
      fastest: 'Fastest',
      relativelyFast: 'Relatively fast',
      comparisonTitle: 'Addressing mode comparison',
      headers: ['Addressing mode', 'Format', 'Speed', 'Use case'],
      modes: [
        {
          id: 'immediate',
          name: 'Immediate addressing',
          english: 'Immediate Addressing',
          definition:
            'The operand is embedded directly in the instruction and is immediately available.',
          format: 'MOV R1, #100',
          usage: 'Constant assignment and initialization',
          fast: true,
          flexibility: 'Low',
          example: {
            assembly: 'MOV R1, #100  ; R1 = 100',
            description:
              'Immediate value 100 is stored directly in the instruction, so no register or memory lookup is needed.'
          },
          steps: [
            'CPU reads immediate value 100 directly from the instruction',
            'Write the immediate value into target register R1',
            'Execution completes without extra memory access'
          ]
        },
        {
          id: 'register',
          name: 'Register addressing',
          english: 'Register Addressing',
          definition: 'The operand is stored in an internal CPU register.',
          format: 'MOV R1, R2',
          usage: 'Register-to-register data transfer',
          fast: true,
          flexibility: 'Medium',
          example: {
            assembly: 'MOV R1, R2  ; R1 = R2',
            description:
              'Read data from source register R2 and write it into target register R1.'
          },
          steps: [
            'CPU reads the value of R2 from the register file',
            'Write the value into target register R1',
            'Execution completes without memory access'
          ]
        },
        {
          id: 'direct',
          name: 'Direct addressing',
          english: 'Direct Addressing',
          definition:
            'The instruction directly contains the memory address of the operand.',
          format: 'MOV R1, [100]',
          usage: 'Accessing global variables',
          fast: false,
          flexibility: 'High',
          example: {
            assembly: 'MOV R1, [0x1000]  ; R1 = M[0x1000]',
            description:
              'The instruction contains memory address 0x1000, and data is read from that address.'
          },
          steps: [
            'CPU parses address 0x1000 from the instruction',
            'Send the address into MAR (Memory Address Register)',
            'Access memory and read data from 0x1000 into MDR',
            'Write the data from MDR into target register R1'
          ]
        },
        {
          id: 'indirect',
          name: 'Indirect addressing',
          english: 'Indirect Addressing',
          definition:
            'The instruction names a register that contains the operand address.',
          format: 'MOV R1, [R2]',
          usage: 'Pointers and array traversal',
          fast: false,
          flexibility: 'High',
          example: {
            assembly: 'MOV R1, [R2]  ; R1 = M[R2]',
            description:
              'R2 stores an address, and data is read from that address.'
          },
          steps: [
            'CPU reads an address from register R2',
            'Send the address into MAR',
            'Access memory and read data into MDR',
            'Write the data into target register R1'
          ]
        },
        {
          id: 'indexed',
          name: 'Indexed addressing',
          english: 'Indexed Addressing',
          definition:
            'The operand address is a base address plus the value in an index register.',
          format: 'MOV R1, [R2 + R3]',
          usage: 'Array access and loops',
          fast: false,
          flexibility: 'High',
          example: {
            assembly: 'MOV R1, [R2 + R3]  ; R1 = M[R2+R3]',
            description:
              'Effective address = R2 + R3, commonly used to access array elements.'
          },
          steps: [
            'CPU reads the base address register R2',
            'CPU reads the index register R3',
            'ALU computes effective address = R2 + R3',
            'Send the effective address into MAR',
            'Access memory and read data into MDR',
            'Write the data into target register R1'
          ]
        },
        {
          id: 'based',
          name: 'Based addressing',
          english: 'Based Addressing',
          definition: 'The operand address is a base register plus an offset.',
          format: 'MOV R1, [R2 + 100]',
          usage: 'Struct fields and function parameters',
          fast: false,
          flexibility: 'High',
          example: {
            assembly:
              'MOV R1, [RBP - 8]  ; access a local variable in the stack frame',
            description:
              'Effective address = RBP - 8, used to access variables inside a function stack frame.'
          },
          steps: [
            'CPU reads the value of base register RBP',
            'Compute effective address = RBP - 8',
            'Send the effective address into MAR',
            'Access memory and read data'
          ]
        },
        {
          id: 'relative',
          name: 'Relative addressing',
          english: 'Relative Addressing',
          definition:
            'The operand address is the current instruction address plus an offset.',
          format: 'JMP LABEL',
          usage: 'Loops and conditional branches',
          fast: true,
          flexibility: 'High',
          example: {
            assembly: 'JMP LOOP  ; jump to label LOOP',
            description:
              'Target address = PC + offset, used for loops and branches.'
          },
          steps: [
            'CPU computes target address = current PC + offset',
            'Write the target address into PC',
            'Next instruction begins at the new address'
          ]
        }
      ]
    },
    storageHierarchy: {
      title: 'Storage Hierarchy',
      subtitle: 'From fastest to slowest, smallest to largest',
      tableTitle: 'Detailed comparison',
      principleTitle: 'Locality principle',
      principleTextPrefix: 'Programs tend to access',
      temporalLocality: 'recently accessed locations',
      principleTextMiddle: '(temporal locality) and',
      spatialLocality: 'nearby locations',
      principleTextSuffix: '(spatial locality)',
      principleExample:
        'By exploiting locality, caches can significantly improve performance.',
      levels: [
        {
          className: 'register',
          name: 'Registers',
          speed: 'Fastest',
          size: 'Smallest (KB)'
        },
        {
          className: 'cache',
          name: 'Cache',
          speed: 'Very fast',
          size: 'Small (MB)'
        },
        {
          className: 'ram',
          name: 'Memory',
          speed: 'Fast',
          size: 'Medium (GB)'
        },
        { className: 'disk', name: 'Disk', speed: 'Slow', size: 'Large (TB)' },
        {
          className: 'network',
          name: 'Network/Cloud',
          speed: 'Slowest',
          size: 'Unlimited'
        }
      ],
      headers: ['Storage level', 'Access time', 'Typical capacity', 'Cost'],
      rows: [
        ['Registers', '< 1 ns', 'A few KB', 'Highest'],
        ['L1 cache', '~1 ns', '64 KB', 'Very high'],
        ['L2 cache', '~3 ns', '256 KB', 'High'],
        ['L3 cache', '~10 ns', '8 MB', 'Medium'],
        ['Memory', '~100 ns', '8-32 GB', 'Medium-low'],
        ['SSD', '~100 μs', '256 GB-2 TB', 'Low'],
        ['HDD', '~10 ms', '1-10 TB', 'Lowest']
      ]
    },
    networkOverview: {
      title: 'How Networks Connect',
      subtitle: 'The complete path from sending to receiving',
      sender: 'Sender',
      receiver: 'Receiver',
      mailApp: 'Mail app',
      packet: '📦 Packet',
      processTitle: 'Data encapsulation process',
      stackTitle: 'Network protocol stack (OSI model)',
      pathSteps: [
        {
          icon: '📧',
          name: 'Application layer',
          desc: 'Mail software creates the message content'
        },
        {
          icon: '🔐',
          name: 'Transport layer',
          desc: 'TCP adds port numbers and sequence numbers'
        },
        {
          icon: '🌐',
          name: 'Network layer',
          desc: 'IP adds source and destination addresses'
        },
        {
          icon: '🔌',
          name: 'Data link layer',
          desc: 'Ethernet adds MAC addresses'
        },
        {
          icon: '⚡',
          name: 'Physical layer',
          desc: 'Convert to electrical signals and send'
        }
      ],
      encapsulationLayers: [
        {
          num: '7',
          name: 'Application layer',
          data: 'Message content: "Hello!"'
        },
        { num: '6', name: 'Presentation layer', data: 'Encoding: UTF-8' },
        { num: '5', name: 'Session layer', data: 'Session ID: sess_123' },
        { num: '4', name: 'Transport layer', data: 'TCP header: port 25' },
        {
          num: '3',
          name: 'Network layer',
          data: 'IP header: 192.168.1.100 → 192.168.1.200'
        },
        {
          num: '2',
          name: 'Data link layer',
          data: 'Ethernet frame: MAC address'
        },
        { num: '1', name: 'Physical layer', data: 'Bitstream: 01010101...' }
      ],
      protocolLayers: [
        'Application layer (HTTP, SMTP)',
        'Transport layer (TCP, UDP)',
        'Network layer (IP)',
        'Data link layer (Ethernet)',
        'Physical layer (electrical signals)'
      ]
    },
    pipeline: {
      title: 'CPU Instruction Pipeline',
      subtitle: 'Five stages: Fetch → Decode → Execute → Memory → Write Back',
      start: 'Start',
      step: 'Step',
      reset: 'Reset',
      sequential: 'Sequential execution',
      pipeline: 'Pipeline execution',
      totalCycles: 'Total cycles',
      completedInstructions: 'Completed instructions',
      explanationTitle: 'Pipeline principle',
      sequentialText:
        'Sequential execution: each instruction finishes before the next starts, so N instructions require N × 5 cycles.',
      pipelineText:
        'Pipeline execution: multiple instructions occupy different stages at once; ideally CPI ≈ 1.',
      hazardWarning:
        '⚠️ Pipeline hazards: data hazards, control hazards, structural hazards',
      stages: [
        'Fetch(IF)',
        'Decode(ID)',
        'Execute(EX)',
        'Memory(MEM)',
        'Write Back(WB)'
      ],
      instructions: [
        'ADD R1,R2,R3',
        'SUB R4,R1,R5',
        'LOAD R6,[R4]',
        'STORE R6,[R7]',
        'AND R8,R1,R6'
      ]
    },
    busSystem: {
      title: 'Computer Bus System',
      subtitle: 'Address bus, data bus, and control bus',
      cpu: 'CPU',
      controlUnit: 'Control unit',
      alu: 'ALU',
      mainMemory: 'Main memory',
      addressBus: 'Address bus',
      dataBus: 'Data bus',
      controlBus: 'Control bus',
      bits32: '32 bits',
      bits64: '64 bits',
      controlSignal: 'Control signal',
      readMemory: 'Read memory',
      writeMemory: 'Write memory',
      addressPlaceholder: 'Address (0-7)',
      dataPlaceholder: 'Data',
      logTitle: 'Operation flow',
      explanationTitle: 'Bus concepts',
      explanations: [
        {
          label: 'Address bus',
          desc: 'CPU sends memory addresses over a one-way path.'
        },
        {
          label: 'Data bus',
          desc: 'Transfers actual data in both directions.'
        },
        {
          label: 'Control bus',
          desc: 'Transfers read/write and other control signals.'
        }
      ],
      logs: {
        sendAddress: 'CPU sends address {address} over the address bus',
        readSignal: 'Control bus sends READ signal',
        memoryReturn: 'Main memory returns data {data} over the data bus',
        cpuReceive: 'CPU receives data into a register',
        sendData: 'CPU sends data {data} over the data bus',
        writeSignal: 'Control bus sends WRITE signal',
        writeDone: 'Data is written to main memory address {address}'
      }
    },
    controller: {
      title: 'How the Controller Works',
      subtitle: 'How control signals coordinate CPU components',
      controlUnit: 'Control Unit CU',
      instructionRegister: 'Instruction Register IR',
      decoder: 'Instruction Decoder',
      timingGenerator: 'Timing Generator',
      outputSignals: 'Output control signals:',
      blocks: {
        pc: 'Program Counter',
        mar: 'Address Register',
        memory: 'Main Memory',
        mdr: 'Data Register',
        ir: 'Instruction Register',
        decoder: 'Decoder',
        alu: 'Arithmetic Logic Unit',
        acc: 'Accumulator'
      },
      buttons: {
        fetch: 'Run Fetch Cycle',
        add: 'Run ADD Instruction',
        load: 'Run LOAD Instruction'
      },
      currentMicroinstruction: 'Current microinstruction',
      conceptTitle: 'Core controller concepts',
      concepts: [
        {
          label: 'Control signals:',
          desc: 'Electrical signals emitted by the controller to control each component on the data path.'
        },
        {
          label: 'Timing:',
          desc: 'CPU operations advance by clock ticks; each tick performs specific micro-operations.'
        },
        {
          label: 'Hardwired vs microprogrammed:',
          desc: 'Hardwired controllers are fast but complex; microprogrammed controllers are flexible but slightly slower.'
        }
      ],
      ops: {
        fetch1: 'PC→MAR: send the address in PC into MAR',
        fetch2: 'MEM→MDR: read the instruction from memory into MDR',
        fetch3: 'MDR→IR: move the instruction into IR',
        fetch4: 'IR→ID: send the instruction to the decoder',
        add1: 'Instruction decode: identify an ADD instruction',
        add2: 'ALU performs addition',
        add3: 'Write result into ACC',
        load1: 'Instruction decode: identify a LOAD instruction',
        load2: 'PC→MAR: fetch operand address',
        load3: 'MEM→MDR: read data',
        load4: 'MDR→ACC: move data into ACC'
      }
    },
    psw: {
      title: 'Program Status Word (PSW)',
      subtitle: 'The CPU status indicators',
      englishName: 'English name:',
      role: 'Role:',
      setCondition: 'Set condition:',
      usage: 'Usage:',
      operationTitle: 'How operation results affect flags',
      operandA: 'Operand A:',
      operandB: 'Operand B:',
      resultLabel: 'Result:',
      usageTitle: 'Typical flag uses',
      flags: [
        [
          'CF',
          'Carry flag',
          'Carry Flag',
          0,
          'Set when unsigned arithmetic produces carry or borrow',
          'Addition carries or subtraction borrows',
          'Multi-word unsigned arithmetic and loop counting'
        ],
        [
          'PF',
          'Parity flag',
          'Parity Flag',
          0,
          'Set when the low 8 bits contain an even number of 1 bits',
          'Low 8 bits have even parity',
          'Error detection in data communication'
        ],
        [
          'AF',
          'Auxiliary carry',
          'Auxiliary Carry Flag',
          0,
          'Set when the low 4 bits produce carry or borrow',
          'Carry from bit 3 in the low nibble',
          'BCD arithmetic adjustment'
        ],
        [
          'ZF',
          'Zero flag',
          'Zero Flag',
          0,
          'Set when the operation result is 0',
          'Result = 0',
          'Conditional jumps, loop control, comparisons'
        ],
        [
          'SF',
          'Sign flag',
          'Sign Flag',
          0,
          'Set when the operation result is negative',
          'Most significant bit of result = 1',
          'Signed comparisons and negative checks'
        ],
        [
          'TF',
          'Trap flag',
          'Trap Flag',
          0,
          'When set, CPU enters single-step debug mode',
          'Set by software',
          'Program debugging'
        ],
        [
          'IF',
          'Interrupt flag',
          'Interrupt Flag',
          1,
          'When set, CPU responds to maskable interrupts',
          'Set by software',
          'Interrupt enable switch'
        ],
        [
          'DF',
          'Direction flag',
          'Direction Flag',
          0,
          'When set, string operations proceed from high to low addresses',
          'Set by software',
          'String operation direction control'
        ],
        [
          'OF',
          'Overflow flag',
          'Overflow Flag',
          0,
          'Set when signed arithmetic exceeds representable range',
          'Positive or negative overflow',
          'Signed arithmetic and overflow detection'
        ]
      ],
      usageCards: [
        {
          icon: '🔀',
          name: 'Conditional jumps',
          desc: 'JE, JNE, JG, JL and similar instructions decide jumps based on ZF, SF, and OF.'
        },
        {
          icon: '➕',
          name: 'Arithmetic',
          desc: 'Multi-word arithmetic uses CF for carry and OF for signed overflow.'
        },
        {
          icon: '🔄',
          name: 'Loop control',
          desc: 'Loop instructions often use ZF to detect the loop ending condition.'
        }
      ]
    },
    cache: {
      title: 'Cache Principles',
      subtitle: 'The bridge between CPU and memory',
      cpuCore: 'CPU core',
      l1: 'L1 cache',
      l2: 'L2 cache',
      l3: 'L3 cache',
      memory: 'Main memory',
      operationTitle: 'Cache operation demo',
      logTitle: 'Operation log',
      readAddress: 'Read address {address}',
      localityTitle: 'Why does cache work? Locality principle',
      temporalLocality: 'Temporal locality',
      temporalDesc: 'Recently accessed data is likely to be accessed again.',
      temporalExample: 'Variables inside loops',
      spatialLocality: 'Spatial locality',
      spatialDesc:
        'After one item is accessed, nearby data is likely to be accessed.',
      spatialExample: 'Array traversal and sequential execution',
      mappingTitle: 'Cache mapping methods',
      speed: 'Speed',
      hitRate: 'Hit rate',
      complexity: 'Implementation complexity',
      calcTitle: 'Hit-rate calculation',
      formula: 'Average access time = H × Tc + (1-H) × Tm',
      tc: 'Cache access time (Tc):',
      tm: 'Memory access time (Tm):',
      h: 'Hit rate (H):',
      avgTime: 'Average access time = {time} ns',
      mappings: [
        {
          id: 'direct',
          type: 'Direct mapping',
          desc: 'Each memory block maps to exactly one cache line.',
          speed: 'Fastest',
          hitRate: 'Lower',
          complexity: 'Lowest'
        },
        {
          id: 'set',
          type: 'Set associative',
          desc: 'Each memory block can map to N cache lines within a set.',
          speed: 'Relatively fast',
          hitRate: 'Higher',
          complexity: 'Medium'
        },
        {
          id: 'full',
          type: 'Fully associative',
          desc: 'A memory block can be placed in any cache line.',
          speed: 'Slowest',
          hitRate: 'Highest',
          complexity: 'Highest'
        }
      ],
      logs: {
        read: 'Read address {address}',
        l1Hit: '✓ L1 cache hit!',
        l1Miss: '✗ L1 cache miss',
        l2Miss: '✗ L2 cache miss',
        loadMemory: 'Load data from main memory',
        storeCache: 'Store data into cache'
      }
    },
    ioMethod: {
      title: 'I/O Method Comparison',
      subtitle: 'Programmed I/O · Interrupt-driven I/O · DMA',
      workflow: 'Workflow',
      cpuLevel: 'CPU involvement',
      speed: 'Speed',
      complexity: 'Complexity',
      comparisonTitle: 'Three I/O methods compared',
      headers: ['Feature', 'Programmed I/O', 'Interrupt-driven I/O', 'DMA'],
      rows: [
        [
          'CPU involvement',
          'Involved throughout',
          'Only handles interrupts',
          'Almost uninvolved'
        ],
        [
          'Data transfer',
          'CPU moves each byte',
          'CPU moves each word',
          'Device transfers directly to memory'
        ],
        [
          'Pros',
          'Simple and flexible control',
          'High CPU efficiency',
          'CPU is fully freed'
        ],
        [
          'Cons',
          'Low CPU utilization',
          'Interrupt overhead',
          'Complex hardware'
        ],
        [
          'Best for',
          'Simple or low-speed devices',
          'Low/medium-speed devices',
          'High-speed bulk transfer'
        ]
      ],
      dmaTitle: 'DMA transfer process',
      dmaController: 'DMA controller',
      memory: 'Memory',
      dmaStep1: '1. CPU configures DMA',
      dmaStep2: '2. DMA accesses memory directly',
      startDma: 'Start DMA transfer',
      reset: 'Reset',
      interruptTitle: 'Interrupt handling flow',
      nextStep: 'Next step',
      methods: [
        {
          id: 'programmed',
          name: 'Programmed I/O',
          english: 'Programmed I/O',
          cpuLevel: 'High',
          cpuLevelClass: 'level-high',
          speed: 'Slow',
          complexity: 'Low',
          steps: [
            'CPU polls the I/O device status',
            'Device busy? Keep waiting',
            'Device ready, send read/write command',
            'CPU reads or writes data byte by byte',
            'Check whether transfer is complete',
            'If incomplete, keep polling'
          ]
        },
        {
          id: 'interrupt',
          name: 'Interrupt-driven I/O',
          english: 'Interrupt-Driven I/O',
          cpuLevel: 'Medium',
          cpuLevelClass: 'level-medium',
          speed: 'Medium',
          complexity: 'Medium',
          steps: [
            'CPU starts the I/O device',
            'CPU continues other work',
            'I/O device sends an interrupt when finished',
            'CPU responds and saves context',
            'Run interrupt service routine',
            'Restore context and continue'
          ]
        },
        {
          id: 'dma',
          name: 'DMA',
          english: 'Direct Memory Access',
          cpuLevel: 'Low',
          cpuLevelClass: 'level-low',
          speed: 'Fast',
          complexity: 'High',
          steps: [
            'CPU configures the DMA controller',
            'Tell DMA the source, destination, and length',
            'CPU runs other tasks',
            'DMA controller exchanges data directly with memory',
            'When done, DMA interrupts the CPU'
          ]
        }
      ],
      interruptFlow: [
        {
          title: 'Interrupt request',
          desc: 'The I/O device sends an interrupt request signal to the CPU.'
        },
        {
          title: 'Interrupt response',
          desc: 'CPU responds after completing the current instruction.'
        },
        {
          title: 'Save context',
          desc: 'Save PC, registers, and current state on the stack.'
        },
        {
          title: 'Handle interrupt',
          desc: 'Execute the interrupt service routine (ISR).'
        },
        { title: 'Restore context', desc: 'Restore saved register values.' },
        {
          title: 'Return',
          desc: 'Return to the interrupted program and continue execution.'
        }
      ]
    },
    vibeCodingFullstack: {
      flow: {
        traditionalLabel: 'Traditional development flow',
        vibeLabel: 'Vibe Coding flow',
        traditionalLoop: '↑ Repeated loop ↓',
        vibeLoop: '↑ Fast iteration ↓',
        traditionalSteps: [
          'You',
          'Learn syntax',
          'Write code',
          'Debug',
          'Read docs',
          'Modify',
          'Run'
        ],
        vibeSteps: [
          { text: 'You', highlight: false },
          {
            text: 'Describe requirements in natural language',
            highlight: true
          },
          { text: 'AI generates code', highlight: true },
          { text: 'You review and adjust', highlight: false },
          { text: 'Run', highlight: false }
        ]
      },
      skillShift: {
        title: 'Changing Skill Importance',
        subtitle: 'Which skills matter more in the AI era?',
        beforeTitle: 'More important before AI',
        afterTitle: 'More important in the AI era',
        insightLabel: 'Key insight:',
        insight:
          'AI can help you write code, but judgment, architecture thinking, domain knowledge, and debugging ability cannot be replaced by AI.',
        beforeSkills: [
          {
            name: 'Syntax memory',
            level: 90,
            desc: 'Remember APIs and syntax details'
          },
          { name: 'Manual coding speed', level: 85, desc: 'Type code quickly' },
          {
            name: 'Documentation search',
            level: 80,
            desc: 'Find API usage quickly'
          }
        ],
        afterSkills: [
          {
            name: 'Requirement description',
            level: 95,
            desc: 'Describe needs accurately in natural language'
          },
          {
            name: 'Code review ability',
            level: 90,
            desc: 'Judge whether AI-generated code is correct'
          },
          {
            name: 'Architecture design',
            level: 85,
            desc: 'Design the overall system structure'
          },
          {
            name: 'Problem diagnosis',
            level: 80,
            desc: 'Know where to investigate when issues appear'
          }
        ]
      },
      fieldMap: {
        title: 'Computer Field Map',
        subtitle: 'Click to inspect details',
        adviceLabel: 'Advice:',
        advice:
          'Do not try to learn every field at once. Pick one direction first, build a strong base, then expand horizontally.',
        fields: [
          {
            name: 'Frontend',
            desc: 'Everything users can see and interact with',
            techs: ['HTML/CSS', 'JavaScript', 'React/Vue']
          },
          {
            name: 'Backend',
            desc: 'Server-side business logic and data processing',
            techs: ['Node.js', 'Go', 'Java', 'Python']
          },
          {
            name: 'Mobile',
            desc: 'Application experience on phones',
            techs: ['Swift', 'Kotlin', 'Flutter']
          },
          {
            name: 'AI/Algorithms',
            desc: 'Make systems smarter',
            techs: ['PyTorch', 'TensorFlow', 'Machine learning']
          },
          {
            name: 'DevOps',
            desc: 'Keep systems running reliably',
            techs: ['Docker', 'K8s', 'CI/CD']
          },
          {
            name: 'Data engineering',
            desc: 'Data collection, storage, and analysis',
            techs: ['SQL', 'Spark', 'Data warehouse']
          }
        ]
      },
      frontendTriad: {
        title: 'Frontend Triad',
        subtitle: 'The three foundations of web development',
        relationshipLabel: 'How they work together:',
        relationship:
          'HTML builds the skeleton, CSS dresses it, and JavaScript makes it move. All three are necessary.',
        triad: [
          {
            name: 'HTML',
            role: 'Structure layer',
            analogy: 'House skeleton: walls, doors, windows',
            examples: ['div', 'span', 'form', 'input']
          },
          {
            name: 'CSS',
            role: 'Presentation layer',
            analogy: 'House decoration: color, position, size',
            examples: ['color', 'flex', 'grid', 'animation']
          },
          {
            name: 'JavaScript',
            role: 'Behavior layer',
            analogy: 'House automation: lights and doors',
            examples: ['Events', 'DOM operations', 'Network requests']
          }
        ]
      },
      frontendFramework: {
        title: 'Frontend Framework Evolution',
        subtitle: 'From jQuery to modern frameworks',
        essenceLabel: 'What frameworks solve:',
        essence:
          'They solve how to update UI efficiently when data changes. Modern frameworks let you focus on what the data is while they handle how the UI changes.',
        eras: [
          {
            name: 'Native era',
            time: '1990s',
            desc: 'Manipulate page elements directly; build everything from scratch',
            techs: ['HTML', 'CSS', 'JavaScript']
          },
          {
            name: 'jQuery era',
            time: '2006-2015',
            desc: 'Simplified page manipulation and cross-browser compatibility',
            techs: ['jQuery', 'Bootstrap']
          },
          {
            name: 'MVVM era',
            time: '2010-2015',
            desc: 'Data-driven views and two-way binding',
            techs: ['Angular.js', 'Knockout']
          },
          {
            name: 'Component era',
            time: '2013-present',
            desc: 'Declarative components with automatic UI updates',
            techs: ['React', 'Vue', 'Angular']
          },
          {
            name: 'New era',
            time: '2020-present',
            desc: 'Compile-time optimization and less runtime overhead',
            techs: ['Svelte', 'Solid']
          }
        ]
      },
      backendCore: {
        title: 'Backend Core Concepts',
        subtitle: 'Core server-side responsibilities',
        flowTitle: 'Request handling flow',
        valueLabel: 'Backend core value:',
        value:
          'It is not just writing code; it is designing systems. Making systems stable, secure, efficient, and scalable is the real backend engineering capability.',
        coreConcepts: [
          {
            name: 'API design',
            desc: 'Define how clients interact with servers',
            examples: ['RESTful', 'GraphQL']
          },
          {
            name: 'Business logic',
            desc: 'Handle core business rules and workflows',
            examples: ['Order handling', 'Payment flow']
          },
          {
            name: 'Data storage',
            desc: 'Persist and query data',
            examples: ['MySQL', 'Redis']
          },
          {
            name: 'Auth',
            desc: 'Verify identity and control permissions',
            examples: ['JWT', 'OAuth']
          },
          {
            name: 'Performance',
            desc: 'Caching, async work, and concurrency',
            examples: ['Cache', 'Message queue']
          },
          {
            name: 'Security',
            desc: 'Prevent attacks and data leaks',
            examples: ['SQL injection defense', 'HTTPS']
          }
        ],
        flowSteps: [
          'Receive request',
          'Resolve route',
          'Run business logic',
          'Operate on data',
          'Return response'
        ]
      },
      languageMap: {
        title: 'Programming Language Classification',
        subtitle: 'View languages from different dimensions',
        adviceLabel: 'Selection advice:',
        advice:
          'Go deep in one mainstream language first and understand programming ideas; learning other languages becomes much easier afterward.',
        tabs: [
          { key: 'type', label: 'By type system' },
          { key: 'level', label: 'By abstraction level' },
          { key: 'paradigm', label: 'By paradigm' }
        ],
        classifications: {
          type: [
            {
              name: 'Static typing',
              desc: 'Variable types are determined at compile time',
              examples: ['Java', 'C++', 'Go', 'TypeScript']
            },
            {
              name: 'Dynamic typing',
              desc: 'Variable types are determined at runtime',
              examples: ['Python', 'JavaScript', 'Ruby']
            }
          ],
          level: [
            {
              name: 'Low-level languages',
              desc: 'Close to hardware with high execution efficiency',
              examples: ['C', 'Assembly']
            },
            {
              name: 'High-level languages',
              desc: 'Closer to human language with high development efficiency',
              examples: ['Python', 'Java', 'JavaScript']
            }
          ],
          paradigm: [
            {
              name: 'Object-oriented',
              desc: 'Organize code around objects',
              examples: ['Java', 'C++', 'Python']
            },
            {
              name: 'Functional',
              desc: 'Organize code around functions and immutability',
              examples: ['Haskell', 'Elixir', 'Clojure']
            },
            {
              name: 'Multi-paradigm',
              desc: 'Support multiple programming styles',
              examples: ['Python', 'JavaScript', 'Rust']
            }
          ]
        }
      },
      languageSelection: {
        title: 'Language Selection Guide',
        subtitle: 'Choose a language based on your goal',
        recommend: 'Recommended:',
        principleLabel: 'Core principle:',
        principle:
          'A language is only a tool; problem-solving ability matters more. Master one first, then transfer the ideas.',
        selections: [
          {
            goal: 'Web frontend',
            desc: 'Web pages, mini apps, H5',
            langs: ['JavaScript', 'TypeScript']
          },
          {
            goal: 'Web backend',
            desc: 'API services and business systems',
            langs: ['Node.js', 'Go', 'Java', 'Python']
          },
          {
            goal: 'Mobile',
            desc: 'iOS / Android apps',
            langs: ['Swift', 'Kotlin', 'Flutter']
          },
          {
            goal: 'AI / Data science',
            desc: 'Machine learning and data analysis',
            langs: ['Python']
          },
          {
            goal: 'Systems programming',
            desc: 'Operating systems and embedded work',
            langs: ['C', 'C++', 'Rust']
          },
          {
            goal: 'Rapid prototyping',
            desc: 'Scripts, automation, small tools',
            langs: ['Python', 'Shell']
          }
        ]
      },
      fullstackSkill: {
        title: 'Fullstack Skill Tree',
        subtitle: 'Core abilities across frontend and backend',
        frontendTitle: 'Frontend skills',
        bridgeTitle: 'Fullstack core',
        backendTitle: 'Backend skills',
        noteLabel: 'Fullstack does not mean expert at everything:',
        note: 'The core is connecting frontend and backend and independently delivering a complete feature. You do not need expert depth in every domain.',
        frontendSkills: [
          'HTML/CSS',
          'JavaScript',
          'Framework usage',
          'Responsive design'
        ],
        backendSkills: [
          'API design',
          'Database operations',
          'Business logic',
          'Server deployment'
        ],
        bridgeSkills: [
          'HTTP protocol',
          'Git collaboration',
          'Debugging ability',
          'System design'
        ]
      },
      aiVsTraditional: {
        title: 'AI Engineer vs Traditional Engineer',
        subtitle: 'Differences in working style',
        traditional: 'Traditional engineer',
        ai: 'AI engineer',
        codingTime: 'Coding time share',
        thinkingTime: 'Thinking time share',
        shiftTitle: 'Skill focus shift',
        down: 'Importance down',
        up: 'Importance up',
        competitivenessLabel: 'Core competitiveness in the AI era:',
        competitiveness:
          'It is not "can write code"; it is "can describe requirements, judge correctness, and design solutions." AI is your programming assistant, but you remain the decision-maker.',
        traditionalSteps: [
          'Understand requirements',
          'Read docs and learn syntax',
          'Write code by hand',
          'Debug and fix bugs',
          'Optimize performance',
          'Write tests'
        ],
        aiSteps: [
          'Understand requirements',
          'Describe them to AI in natural language',
          'Review AI-generated code',
          'Judge whether it meets expectations',
          'Adjust requirements and regenerate',
          'Integrate into the project'
        ],
        skillShift: [
          { from: 'Syntax memory', to: 'Requirement description' },
          { from: 'Manual coding speed', to: 'Code review ability' },
          { from: 'Documentation lookup', to: 'Architecture design' },
          { from: 'Debugging tricks', to: 'Problem diagnosis' }
        ]
      },
      careerPath: {
        title: 'Engineer Growth Path',
        subtitle: 'Skill evolution from beginner to expert',
        skillLabel: 'Core skills:',
        outputLabel: 'Typical output:',
        keyLabel: 'Growth key:',
        key: 'Build fundamentals and independent task ability in the first 1-2 years; choose a direction and develop depth in years 2-3; expand horizontally and build architecture thinking in years 3-5; after 5+ years, focus on technical decisions and team influence.',
        stages: [
          {
            name: 'Beginner',
            icon: '🌱',
            time: '0-1 year',
            desc: 'Learn basic syntax and tools; complete simple tasks',
            skills: [
              'One language basics',
              'Git usage',
              'Debugging',
              'Reading docs'
            ],
            output:
              'Can independently complete small features and fix simple bugs'
          },
          {
            name: 'Growing',
            icon: '🌿',
            time: '1-2 years',
            desc: 'Use common frameworks and best practices; own modules independently',
            skills: [
              'Framework fluency',
              'Code standards',
              'Unit tests',
              'API design'
            ],
            output: 'Own a feature module with stable code quality'
          },
          {
            name: 'Advanced',
            icon: '🌳',
            time: '2-3 years',
            desc: 'Go deep in one field and begin making technical choices',
            skills: [
              'Domain depth',
              'Performance optimization',
              'Architecture design',
              'Technology selection'
            ],
            output: 'Lead technical solution design and solve complex problems'
          },
          {
            name: 'Mature',
            icon: '🌲',
            time: '3-5 years',
            desc: 'Become fullstack or a domain expert and lead a small team',
            skills: [
              'Fullstack ability',
              'Team collaboration',
              'Technical sharing',
              'Project management'
            ],
            output: 'Own core systems and mentor newcomers'
          },
          {
            name: 'Expert',
            icon: '🏔️',
            time: '5+ years',
            desc: 'Make technical decisions and build industry influence',
            skills: [
              'Technology strategy',
              'Team building',
              'Industry insight',
              'Innovation leadership'
            ],
            output: 'Decide technical direction and grow technical teams'
          }
        ]
      },
      learningStrategy: {
        title: 'Vibe Coding Learning Strategy',
        subtitle: 'How to learn efficiently in the AI era',
        principleLabel: 'Core principle:',
        principle:
          'AI is your programming assistant, but you are always the decision-maker. Learning to ask, judge, and integrate matters more than learning to type code.',
        strategies: [
          {
            title: 'Understand first, then ask AI to write',
            desc: 'Do not ask AI to code immediately. First understand the problem and solution, then use AI to accelerate implementation.'
          },
          {
            title: 'Treat AI as a pair-programming partner',
            desc: 'Ask AI to explain unfamiliar concepts. Discuss complex solutions with it. AI is a knowledgeable colleague.'
          },
          {
            title: 'Learn to review AI output',
            desc: 'AI-generated code is not always correct. You need to judge logic, security risks, and performance.'
          },
          {
            title: 'Build your own knowledge system',
            desc: 'AI can fill gaps, but the core mental model is yours. Knowing what exists lets you ask how to use it.'
          },
          {
            title: 'Learn through practice',
            desc: 'Build real projects and solve real problems. Let AI remove syntax friction while you focus on business problems.'
          }
        ]
      }
    },
    ciscRisc: {
      title: '⚔️ Two Design Philosophies: CISC vs RISC',
      desc: 'Click a comparison dimension to see the core differences between instruction set styles',
      compare: 'Compare',
      philosophyLabel: 'Design philosophy:',
      analogyLabel: 'Analogy:',
      productsLabel: 'Representative products:',
      realWorldTitle: '🌍 Real-world choices',
      dimensions: [
        {
          label: 'Instruction count',
          cisc: 'Thousands of complex instructions',
          risc: 'Tens to hundreds of streamlined instructions'
        },
        {
          label: 'Single instruction',
          cisc: 'One instruction can do many things',
          risc: 'One instruction does one thing'
        },
        {
          label: 'Instruction length',
          cisc: 'Variable length (1-15 bytes)',
          risc: 'Fixed length, often 4 bytes'
        },
        {
          label: 'Execution speed',
          cisc: 'Complex instructions take multiple cycles',
          risc: 'Most instructions complete in one cycle'
        },
        { label: 'Power use', cisc: 'Higher', risc: 'Lower' },
        {
          label: 'Pipeline',
          cisc: 'Harder to optimize because lengths vary',
          risc: 'Easier to optimize because instructions are regular'
        },
        {
          label: 'Compiler burden',
          cisc: 'Lighter because hardware does more',
          risc: 'Heavier because software optimizes more'
        }
      ],
      archData: {
        cisc: {
          name: 'CISC',
          full: 'Complex Instruction Set Computer',
          philosophy:
            'Make hardware powerful enough that one instruction can perform complex work and reduce compiler burden.',
          analogy:
            'Like a multi-tool: many functions, though each one is not always the best dedicated tool.',
          exampleTitle: 'Do memory addition with one instruction',
          example:
            'ADD [0x1000], R1\n; one instruction: read memory → add → write memory\n; internally split into multiple micro-operations',
          exampleNote:
            'CISC instructions may operate directly on memory; one instruction can hide five or six micro-operations.',
          products: ['Intel Core', 'AMD Ryzen', 'x86 servers']
        },
        risc: {
          name: 'RISC',
          full: 'Reduced Instruction Set Computer',
          philosophy:
            'Keep each instruction simple and fast; compose complex behavior from simple instructions.',
          analogy:
            'Like a set of dedicated tools: each tool does one job and does it quickly.',
          exampleTitle: 'Do the same memory addition with three instructions',
          example:
            'LOAD  R2, [0x1000]  ; step 1: read memory into a register\nADD   R2, R2, R1    ; step 2: add between registers\nSTORE R2, [0x1000]  ; step 3: write the result back',
          exampleNote:
            'RISC usually loads data into registers first, computes between registers, then stores back to memory.',
          products: [
            'Apple M series',
            'Qualcomm Snapdragon',
            'AWS Graviton',
            'RISC-V'
          ]
        }
      },
      realWorld: [
        {
          device: '💻 Your computer',
          arch: 'x86 (CISC)',
          why: 'Compatible with decades of software'
        },
        {
          device: '📱 Your phone',
          arch: 'ARM (RISC)',
          why: 'Low power consumption and longer battery life'
        },
        {
          device: '🍎 Apple Silicon',
          arch: 'ARM (RISC)',
          why: 'High performance per watt reshaped laptops'
        },
        {
          device: '🔬 RISC-V board',
          arch: 'RISC-V (RISC)',
          why: 'Open and royalty-free for IoT and education'
        }
      ]
    }
  }
}
