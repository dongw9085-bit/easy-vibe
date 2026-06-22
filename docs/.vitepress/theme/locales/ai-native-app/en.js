export default {
  common: {
    reset: 'Reset',
    replay: 'Replay'
  },
  flow: {
    title: 'AI Application Request Flow',
    subtitle:
      'Click "Send request" to observe the full lifecycle of an AI request',
    send: 'Send request',
    running: 'Processing...',
    inputLabel: 'Input',
    outputLabel: 'Output',
    latencyLabel: 'Latency',
    insightLabel: 'Key insight:',
    insight:
      'An AI application request chain is longer than a traditional application request chain. Model inference usually accounts for 60-80% of total latency. Optimization focuses on prompt caching, streaming output, and asynchronous processing.',
    steps: [
      {
        id: 'input',
        icon: '👤',
        name: 'User input',
        en: 'User Input',
        detail:
          'The user enters a request in natural language. The system may need to handle text, transcribed speech, image descriptions, and other open-ended unstructured input.',
        input: '"Summarize the key points of this article"',
        output: '{ text: "Summarize...", type: "text", lang: "en" }',
        latency: '~0ms',
        latencyPct: 2
      },
      {
        id: 'preprocess',
        icon: '🔧',
        name: 'Preprocessing',
        en: 'Preprocessing',
        detail:
          'The system cleans and enriches input: intent detection, keyword extraction, context stitching, RAG retrieval, and prompt construction. This step determines how much useful information the model receives.',
        input: '{ text: "Summarize...", context: [...history] }',
        output:
          '{ system_prompt: "You are...", user_prompt: "...", retrieved_docs: [...] }',
        latency: '~200ms',
        latencyPct: 15
      },
      {
        id: 'model',
        icon: '🧠',
        name: 'Model inference',
        en: 'Model Inference',
        detail:
          'The constructed prompt is sent to the language model. This is usually the slowest step. The model generates an answer from instructions, context, and retrieved knowledge.',
        input: '{ messages: [...], model: "gpt-4", temperature: 0.7 }',
        output:
          '{ content: "The article has three key points...", tokens: 256 }',
        latency: '~2-8s',
        latencyPct: 75
      },
      {
        id: 'postprocess',
        icon: '🛡️',
        name: 'Post-processing',
        en: 'Post-processing',
        detail:
          'The model output is checked and formatted: moderation, hallucination checks, Markdown rendering, citation attachment, and sensitive information redaction.',
        input: '{ raw_output: "The article has three key points..." }',
        output:
          '{ safe: true, formatted: "## Key points\\n1. ...", sources: [...] }',
        latency: '~100ms',
        latencyPct: 8
      },
      {
        id: 'response',
        icon: '💬',
        name: 'Response',
        en: 'Response',
        detail:
          'The processed result is streamed back to the user. The frontend renders Markdown progressively while showing sources and confidence. The user can interrupt or ask follow-up questions.',
        input: '{ formatted: "## Key points\\n1. ...", stream: true }',
        output: 'User sees a streamed answer plus cited sources',
        latency: '~50ms (first byte)',
        latencyPct: 5
      }
    ]
  },
  principles: {
    title: 'AI-Native Design Principles',
    subtitle: 'Click a card to inspect each design principle',
    exampleTitle: 'Practice comparison',
    badLabel: 'Anti-pattern',
    goodLabel: 'Recommended approach',
    checklistTitle: 'Checklist',
    items: [
      {
        id: 'graceful',
        icon: '🛡️',
        name: 'Graceful degradation',
        brief: 'The system remains usable when AI fails',
        detail:
          'Models may time out, return errors, or hallucinate. Graceful degradation means the system has a fallback path instead of crashing when AI is unavailable.',
        bad: 'After the model API times out, the page shows a blank error state and the user can only refresh.',
        good: 'After timeout, show a cached answer or related documents while retrying in the background.',
        checklist: [
          'Set a reasonable API timeout, usually 30-60s',
          'Prepare fallbacks such as cache, rules, or human handoff',
          'Show the current state clearly to users',
          'Log failures for later improvement'
        ]
      },
      {
        id: 'human',
        icon: '🤝',
        name: 'Human collaboration',
        brief: 'Humans confirm critical decisions',
        detail:
          'AI is good at drafting and suggesting, but it should not make high-risk decisions autonomously. Human-in-the-loop design lets AI draft and recommend while humans review and confirm.',
        bad: 'AI sends an email to a customer automatically without human review, spreading incorrect information.',
        good: 'AI drafts the email and highlights uncertain parts; the user edits and sends it manually.',
        checklist: [
          'Identify high-risk actions such as sending, deleting, and paying',
          'Require confirmation before high-risk actions',
          'Show confidence and require review for low-confidence output',
          'Provide efficient editing and correction UI'
        ]
      },
      {
        id: 'transparent',
        icon: '🔍',
        name: 'Transparent and explainable',
        brief: 'Help users understand AI reasoning',
        detail:
          'AI should not feel like a magic black box. Users need to know why an answer was given, what evidence was used, and how confident the system is.',
        bad: 'AI gives a conclusion without explanation or sources, so users cannot judge reliability.',
        good: 'The answer includes reasoning, source links, and confidence indicators so users can verify it.',
        checklist: [
          'Show reasoning or workflow where appropriate',
          'Attach sources and citations',
          'Display confidence or uncertainty',
          'Provide an entry point for "why this answer"'
        ]
      },
      {
        id: 'feedback',
        icon: '🔄',
        name: 'Feedback loop',
        brief: 'User feedback drives improvement',
        detail:
          'Every interaction is an opportunity to improve. Collect ratings, edits, and follow-up patterns to improve prompts, retrieval, and models.',
        bad: 'After a wrong AI answer, there is no feedback channel and the same mistake repeats.',
        good: 'Users can mark bad answers, and the system uses that data to improve prompts and retrieval.',
        checklist: [
          'Provide simple feedback controls',
          'Record edits and follow-ups as implicit feedback',
          'Analyze feedback regularly to improve prompt templates',
          'Use A/B tests to validate improvements'
        ]
      }
    ]
  },
  architecture: {
    title: 'Traditional Apps vs AI-Native Apps',
    subtitle: 'Switch views to compare the core architectural differences',
    traditionalButton: 'Traditional app',
    aiNativeButton: 'AI-native app',
    techLabel: 'Typical technologies',
    placeholder: 'Click a layer on the left to inspect details',
    differenceLabel: 'Core difference:',
    difference: {
      traditional:
        'Traditional application logic is hardcoded by developers with if/else rules, so behavior is deterministic.',
      aiNative:
        'AI-native application logic is model-driven and probabilistic, so it needs a different design mindset.'
    },
    architectures: {
      traditional: {
        label: 'Traditional application architecture',
        layers: [
          {
            icon: '🖥️',
            name: 'Frontend UI',
            color: '#3b82f6',
            brief: 'User interface and interaction',
            detail:
              'Deterministic forms, buttons, and routes. User actions trigger fixed business flows defined during development.',
            techs: ['React', 'Vue', 'HTML/CSS']
          },
          {
            icon: '⚙️',
            name: 'Business logic layer',
            color: '#8b5cf6',
            brief: 'Hardcoded rule engine',
            detail:
              'Developers encode rules with if/else and switch/case. Every path must be predefined manually.',
            techs: ['Node.js', 'Java', 'Python']
          },
          {
            icon: '🗄️',
            name: 'Data storage',
            color: '#06b6d4',
            brief: 'Structured data management',
            detail:
              'Relational databases store structured data with fixed schema. Reads and writes follow strict CRUD patterns.',
            techs: ['MySQL', 'PostgreSQL', 'Redis']
          },
          {
            icon: '🔌',
            name: 'API interface',
            color: '#10b981',
            brief: 'Fixed request and response',
            detail:
              'Each API endpoint returns deterministic results. The same input always produces the same output.',
            techs: ['REST', 'GraphQL', 'gRPC']
          }
        ]
      },
      'ai-native': {
        label: 'AI-native application architecture',
        layers: [
          {
            icon: '💬',
            name: 'Natural language interaction',
            color: '#f59e0b',
            brief: 'Conversational and streaming output',
            detail:
              'Users express intent in natural language, and the system streams generated responses progressively. Interaction shifts from fixed forms to open-ended conversation.',
            techs: ['Streaming UI', 'Markdown rendering', 'SSE']
          },
          {
            icon: '🧠',
            name: 'Model inference layer',
            color: '#ef4444',
            brief: 'LLM-driven decision engine',
            detail:
              'Core logic is driven by the language model using prompts and context, not hardcoded if/else rules. Output is probabilistic.',
            techs: ['GPT-4', 'Claude', 'Prompt engineering']
          },
          {
            icon: '🔗',
            name: 'Orchestration and tools',
            color: '#8b5cf6',
            brief: 'Agent orchestration and tool calls',
            detail:
              'Models can call tools such as search, databases, and APIs. The orchestration layer manages multi-step reasoning and result integration.',
            techs: ['LangChain', 'Function Calling', 'RAG']
          },
          {
            icon: '📦',
            name: 'Context management',
            color: '#06b6d4',
            brief: 'Vector database and memory',
            detail:
              'Vector databases store and retrieve unstructured knowledge. Embeddings convert text into semantic vectors for meaning-based search.',
            techs: ['Pinecone', 'ChromaDB', 'Embedding']
          },
          {
            icon: '🛡️',
            name: 'Safety and guardrails',
            color: '#10b981',
            brief: 'Output filtering and hallucination checks',
            detail:
              'AI output cannot be fully trusted. Guardrails include content filtering, fact checks, hallucination detection, and redaction.',
            techs: ['Guardrails', 'Moderation', 'Fact checking']
          }
        ]
      }
    }
  },
  ux: {
    title: 'AI-Native Interaction Patterns',
    subtitle: 'Click a card to experience each AI interaction pattern',
    demoSuffix: 'demo',
    notes: {
      streaming:
        'Token-by-token output lets users avoid waiting for the full response',
      loading: 'Show staged progress instead of a single generic loading state',
      confidence: 'Show how certain the AI is about each answer',
      fallback:
        'When AI is uncertain, degrade gracefully instead of forcing an answer'
    },
    fallbackFlow: [
      'AI tries to answer...',
      'Uncertainty detected',
      'Warn the user that the answer may be inaccurate',
      'Offer alternatives',
      'Human handoff / recommended docs / rephrase the question'
    ],
    detailLabel: 'Design points',
    patterns: [
      {
        id: 'streaming',
        icon: '💬',
        name: 'Streaming output',
        brief: 'Generate progressively with immediate feedback',
        detail:
          'Streaming output shows partial results while AI is still working, reducing perceived wait time. It is usually implemented with SSE or WebSocket and rendered progressively on the frontend.'
      },
      {
        id: 'loading',
        icon: '⏳',
        name: 'Smart loading states',
        brief: 'Show progress in stages',
        detail:
          'AI requests often take several seconds. Smart loading states break the process into visible steps, making waiting more predictable.'
      },
      {
        id: 'confidence',
        icon: '📊',
        name: 'Confidence indicators',
        brief: 'Show how certain AI is',
        detail:
          'AI output is probabilistic. Confidence indicators help users decide what can be accepted directly and what needs verification.'
      },
      {
        id: 'fallback',
        icon: '🛡️',
        name: 'Graceful fallback',
        brief: 'Fallback strategy when uncertain',
        detail:
          'When AI cannot answer reliably, it should acknowledge uncertainty, provide alternate sources, hand off to humans, or guide the user to rephrase.'
      }
    ],
    fullText:
      'React is a JavaScript library for building user interfaces. It uses a component-based development model so complex UIs can be split into independent reusable pieces.',
    loadingStages: [
      'Understand user intent...',
      'Retrieve relevant knowledge...',
      'Organize answer content...',
      'Generate final response'
    ],
    confidenceItems: [
      {
        text: 'React is developed by Meta',
        score: 98,
        level: 'High confidence',
        color: '#10b981'
      },
      {
        text: 'About 40% of websites use React worldwide',
        score: 72,
        level: 'Medium confidence',
        color: '#f59e0b'
      },
      {
        text: 'React 19 will ship next month',
        score: 35,
        level: 'Low confidence',
        color: '#ef4444'
      }
    ]
  },
  prompt: {
    title: 'Prompt Engineering Lab',
    subtitle: 'Modify prompt structure and observe how output quality changes',
    systemLabel: 'System Prompt',
    userLabel: 'User Prompt',
    systemPlaceholder: 'Set the AI role and behavior rules...',
    userPlaceholder: 'Enter the user question or instruction...',
    run: 'Simulate generation',
    outputLabel: 'Simulated output',
    generating: 'Generating...',
    placeholder: 'Click "Simulate generation" to see the result',
    qualityLabel: 'Output quality assessment',
    tipsLabel: 'Prompt tip:',
    templates: [
      { id: 'bad', icon: '❌', name: 'Vague question' },
      { id: 'basic', icon: '📝', name: 'Basic structure' },
      { id: 'good', icon: '✅', name: 'Best practice' }
    ],
    data: {
      bad: {
        system: '',
        user: 'Write an introduction for me',
        output:
          'Sure, here is an introduction:\n\nHello everyone, I am a person and I like many things. Life is interesting. Thank you.\n\n(The output is vague, unfocused, and not useful.)',
        quality: [
          { name: 'Relevance', score: 20, color: '#ef4444' },
          { name: 'Specificity', score: 10, color: '#ef4444' },
          { name: 'Usability', score: 15, color: '#ef4444' }
        ],
        tip: 'No system prompt, no context, and a vague question. AI can only guess your intent.'
      },
      basic: {
        system: 'You are a technical documentation writer.',
        user: 'Write a roughly 100-word introduction to React.',
        output:
          'React is an open-source JavaScript library developed by Meta, formerly Facebook, for building user interfaces. It uses component-based development and a virtual DOM to update and render pages efficiently. React’s declarative style helps developers describe UI state more clearly and is widely used in modern web development.',
        quality: [
          { name: 'Relevance', score: 70, color: '#f59e0b' },
          { name: 'Specificity', score: 65, color: '#f59e0b' },
          { name: 'Usability', score: 60, color: '#f59e0b' }
        ],
        tip: 'Role and basic constraints improve the output, but audience and format are still missing.'
      },
      good: {
        system:
          'You are a senior frontend blogger. Style: concise and professional, with analogies. Audience: programming beginners. Format: one-sentence summary, explanation, then a real-life analogy.',
        user: 'Explain what React is and why it is popular in under 150 words.',
        output:
          'One-sentence summary: React is a JavaScript toolkit for building web interfaces efficiently.\n\nExplanation: Developed by Meta, React’s core idea is components: split a complex page into small independent building blocks, each with its own state and appearance. Its virtual DOM calculates minimal updates and avoids unnecessary redraws.\n\nAnalogy: If a web page is a wall of building blocks, React is a standardized block system. You can replace one block without rebuilding the whole wall.',
        quality: [
          { name: 'Relevance', score: 95, color: '#10b981' },
          { name: 'Specificity', score: 90, color: '#10b981' },
          { name: 'Usability', score: 95, color: '#10b981' }
        ],
        tip: 'Role + style + audience + format + constraints = high-quality output. A good prompt is a good requirements document.'
      }
    }
  }
}
