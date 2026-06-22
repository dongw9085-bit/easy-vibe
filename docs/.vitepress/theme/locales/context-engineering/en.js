export default {
  introPrs: {
    columns: [
      {
        title: 'Problem',
        items: [
          {
            strong: 'Context is hard to keep consistent',
            text: 'As conversations grow, earlier and later meaning can drift apart.'
          },
          {
            strong: 'Key facts are easy to lose',
            text: 'Information given early can be hard to reference accurately later.'
          },
          {
            strong: 'Call cost keeps rising',
            text: 'Every round has to process a large amount of history again.'
          }
        ]
      },
      {
        title: 'Likely causes',
        items: [
          {
            strong: 'The model only sees the current call',
            text: 'It can only rely on the context provided in this round.'
          },
          {
            strong: 'Information is not structured',
            text: 'Important facts and minor details are mixed together, making stable memory hard.'
          },
          {
            strong: 'History is recomputed repeatedly',
            text: 'Large fixed prefixes are processed again and again across turns.'
          }
        ]
      },
      {
        title: 'Impact',
        items: [
          {
            strong: 'Answer quality becomes unstable',
            text: 'Longer conversations make consistency and traceability harder.'
          },
          {
            strong: 'Cost is hard to estimate',
            text: 'Context size fluctuates heavily from turn to turn.'
          },
          {
            strong: 'Production systems become hard to maintain',
            text: 'Without a clear context strategy, systems are hard to operate and extend.'
          }
        ]
      }
    ]
  },
  agentContextFlow: {
    currentRound: 'Current round',
    tokenUsage: 'Token usage',
    currentCost: 'Current cost',
    overflow:
      'Overflow truncation: the first {count} round(s) have been forgotten.',
    safe: 'Memory intact',
    limit: 'Context Window Limit ({limit})',
    systemPrompt: 'System Prompt ({tokens})',
    history: 'History ({count} rounds)',
    newInput: 'New Input',
    sliderHint: 'Drag the slider to add conversation rounds:',
    firstRound: 'Round 1',
    maxRound: 'Round {round}',
    normalStrong: 'Everything is normal',
    normal:
      'The current token count ({total}) is still within the window. The model can recall all conversation details.',
    warningStrong: 'Forgetting happened',
    warning:
      'Total tokens ({total}) exceed the window limit ({limit}). To fit the new turn, the system had to drop the earliest {count} history round(s).'
  },
  contextWindow: {
    usedLabel: 'Tokens written so far',
    maxLabel: 'Maximum tokens on the board',
    header: 'The small board the model can see (context window)',
    overflow: '⚠️ Context limit reached (truncated)',
    inputLabel: 'Input content',
    shortButton: 'Fill short text',
    longButton: 'Fill the board',
    clearButton: 'Clear',
    placeholder: 'Type a few sentences here and watch the board fill up...',
    infoStrong: 'Note:',
    info: 'The context window is like a small board for the model. The board has limited space, so old content must be erased before new content can fit. Once it overflows, the earliest content disappears from the model view.',
    defaultText:
      'Context Engineering means optimizing the information provided to a large language model.',
    words: [
      'AI',
      'deep learning',
      'neural network',
      'large model',
      'Transformer',
      'attention',
      'context window',
      'Token',
      'Embedding',
      'fine-tuning',
      'pretraining',
      'inference',
      'generation',
      'RAG'
    ]
  },
  kvCache: {
    toggle: 'Enable prefix reuse / KV Cache',
    generating: 'Generating...',
    send: 'Send new request',
    systemTitle: 'Fixed opening prompt (System Prompt)',
    cached: 'Cached',
    systemContent: 'You are a helpful AI assistant... (about 500 tokens)',
    calculating: 'Calculating...',
    historyTitle: 'Recent chat history',
    historyContent: 'User: hello... (about 200 tokens)',
    queryTitle: 'New question for this turn',
    queryTokens: '(about 50 tokens)',
    ttft: 'Time to first token (TTFT)',
    saved: 'Saved {time}ms',
    processed: 'Tokens processed this time',
    cost: 'Approximate compute cost',
    hitStrong: 'What happens on a cache hit:',
    hit: 'The fixed opening prompt is not recomputed. The model directly reuses the previous cached result, making it faster and cheaper.',
    missStrong: 'Without cache:',
    miss: 'Every request recomputes attention from the beginning, like rereading a textbook from page one every time.',
    queryA: 'Write a Python snippet for me',
    queryB: 'How do I run this code?'
  },
  slidingWindow: {
    maxLabel: 'Maximum remembered messages',
    maxValue: 'Up to {count}',
    autoPlay: '▶ Auto demo',
    reset: '↺ Restart',
    forgottenTitle: 'Forgotten content',
    noForgotten: 'Nothing has been pushed out yet',
    outside: '⬆ Outside the window, invisible to the model',
    inside: '⬇ Inside the window, still visible to the model',
    activeTitle: 'Conversation still in memory',
    emptyActive: 'Start chatting here and watch old messages get pushed out',
    placeholder: 'Type a message here, then send',
    send: 'Send message',
    infoStrong: 'Note:',
    info: 'A sliding window is the simplest memory strategy: new content enters and old content leaves. It never overfills the context, but once content slides out, the model forgets it completely.',
    aiReply: 'I heard you say "{text}". Interesting!',
    script: [
      'Hi, I am Zhang San.',
      'Hello, I am your AI assistant.',
      'I am tired today. Please help me track my tasks.',
      'Sure. Send the tasks one by one.',
      'First task: email the client.',
      'Got it, I wrote that down.',
      'Second task: buy groceries tonight.',
      'Received. I will remember that too.',
      'Third task: remember to buy flowers.',
      'I put that on the small board as well.',
      'Do you still remember what I said first?',
      'I can only see the few messages inside the window. The earliest one has been pushed out.'
    ]
  },
  lostInMiddle: {
    positionLabel: 'Where is the key fact in the full context: {position}%',
    start: 'Start (System)',
    end: 'End (Query)',
    needle: 'Key fact',
    yAxis: 'Recall probability',
    xAxis: 'Position in context',
    retrieval: 'Retrieval success',
    description: 'Position description',
    front: 'Near the beginning',
    back: 'Near the end',
    middle: 'Middle area, highest risk',
    observationStrong: 'Observation:',
    observation:
      'When a key fact is hidden in the middle of a long context, the model is most likely to miss it.',
    advice:
      'The reliable approach is to place important instructions at the very front in the System Prompt or at the end in the latest user query.'
  },
  selectiveContext: {
    totalLabel: 'Messages remembered now',
    maxLabel: 'Maximum messages on the board',
    pinnedTitle: 'Pinned area for important information',
    count: '{count} now',
    unpinTitle: 'Unpin',
    locked: '🔒 System information stays fixed',
    unpin: '📌 Unpin',
    scrollingTitle: 'Regular FIFO conversation',
    pinTitle: 'Pin this message',
    pin: '📌 Pin this',
    empty: 'The regular conversation area is empty for now',
    placeholder: 'Enter a new fact, such as "my name is Alice"',
    add: 'Add to board',
    presetName: 'User: my name is Alice',
    presetNameText: 'My name is Alice.',
    presetPassword: 'User: system password is 1234',
    presetPasswordText: 'The system password is 1234.',
    infoStrong: 'Note:',
    info: 'Selective retention means pinning important information to the board while ordinary messages slide away. System prompts are usually pinned permanently, and key user facts such as names, accounts, or preferences can be pinned through memory modules or RAG.',
    fullAlert: 'Context window full of pinned messages! Unpin something first.'
  },
  ragSimulation: {
    defaultQuery: 'How do I reset my password?',
    inputStep: 'User Query',
    placeholder: 'Enter a question...',
    searching: 'Searching...',
    search: '🚀 Start retrieval',
    retrievalStep: 'Library retrieval',
    scanning: 'Scanning...',
    hitCount: '{count} hit(s)',
    relevance: '{score}% relevant',
    copyPaste: '✂️ Copy into context',
    finalPrompt: 'Final Prompt',
    systemPrompt:
      'You are a professional AI assistant. Answer the user question using the retrieved materials below.',
    retrievedTitle: '📚 Retrieved materials (Context)',
    noDocs: '(No relevant materials found)',
    waiting: 'Waiting for a question...',
    documents: [
      {
        id: 1,
        title: 'Password reset guide',
        content:
          'Users can reset their password by clicking the "Forgot password" link on the settings page. The system sends a verification email.',
        score: 0
      },
      {
        id: 2,
        title: 'Pricing policy',
        content:
          'Basic is $10 per month, Pro is $29 per month. Enterprise customers should contact sales for a quote.',
        score: 0
      },
      {
        id: 3,
        title: 'API documentation',
        content:
          'All API requests must include a Bearer Token in the Header for authentication.',
        score: 0
      },
      {
        id: 4,
        title: 'Account security',
        content:
          'For account security, enable two-factor authentication and change passwords regularly.',
        score: 0
      }
    ],
    keywords: {
      password: 'password',
      security: 'security',
      price: 'price',
      priceShort: '$',
      api: 'API'
    }
  },
  contextCompression: {
    originalText:
      'Context Engineering means optimizing the prompt and information provided to a large language model so it has what it needs to generate accurate and relevant responses. One major challenge is the limited context window, which restricts how much text a model can process at once. Developers use techniques such as summarization to condense long documents while preserving key information. Retrieval-augmented generation fetches only the most relevant snippets for a user query. Converting unstructured text into structured data such as JSON can also reduce redundancy and increase information density.',
    chooseStrategy: '1. Choose compression strategy',
    originalLabel: 'Original text',
    placeholder: 'Enter long text here...',
    compressedLabel: 'Compressed',
    compressing: 'Compressing...',
    startHint: 'Click a button above to start compression',
    savedSpace: 'Saved space',
    strategies: [
      { id: 'summary', label: '📝 Summarize', desc: 'Keep the gist' },
      { id: 'extract', label: '🔑 Keywords', desc: 'Extract points' },
      { id: 'json', label: '⚙️ Structure', desc: 'To JSON' }
    ],
    results: {
      summary:
        'Context Engineering optimizes LLM prompts under context-window limits. Common techniques include summarization, RAG for on-demand retrieval, and structured data conversion for higher information density.',
      extract:
        '- Goal: optimize LLM prompts\n- Challenge: limited context window\n- Solution 1: summarization\n- Solution 2: retrieval-augmented generation (RAG)\n- Solution 3: structured data (JSON)'
    }
  },
  memoryPalace: {
    empty: '🚧 Empty lot: click the button below to build the memory palace',
    progress: 'Progress: {current}/4',
    reset: '🔄 Reset build',
    start: '🏗️ Start building',
    next: '➕ Add next layer',
    why: 'Why this design?',
    steps: [
      {
        id: 'base',
        title: 'Layer 1: Foundation (System)',
        desc: 'System identity, role, and principles',
        detail: '✅ Never changes; KV Cache makes it nearly free to reuse',
        color: 'var(--vp-c-brand)',
        icon: '🏛️'
      },
      {
        id: 'task',
        title: 'Layer 2: Pillar (Task)',
        desc: 'Current task goal and user profile',
        detail: '📌 Pinned during the task so direction stays stable',
        color: '#8e44ad',
        icon: '📌'
      },
      {
        id: 'chat',
        title: 'Layer 3: Living Room (Chat)',
        desc: 'Most recent 5-10 conversation turns',
        detail: '🔄 Sliding window; old turns automatically make room',
        color: '#e67e22',
        icon: '💬'
      },
      {
        id: 'rag',
        title: 'Layer 4: Library (RAG)',
        desc: 'Knowledge retrieved on demand',
        detail: '📚 Does not occupy memory until needed and can scale outward',
        color: '#27ae60',
        icon: '🔍'
      }
    ],
    explanations: [
      '**Stable foundation**: put the System Prompt first and let KV Cache reuse it, so later requests are faster and cheaper.',
      '**Clear direction**: no matter how lively the chat gets, the task goal stays pinned so the AI does not drift.',
      '**Fresh conversation**: recent dialogue matters most, so a sliding window keeps the latest turns and lets old ones leave.',
      '**External memory**: when knowledge is needed, query the library instead of guessing. Use it, then release it.'
    ]
  },
  memoryPalaceAction: {
    chatHeader: '📱 User view (Chat)',
    stepInfo: 'Step {current} / {total}',
    previous: '⬅️ Previous',
    restart: '🔄 Replay',
    next: 'Next ➡️',
    aiHeader: '🧠 AI view (Context Construction)',
    layerBase: 'Layer 1: Foundation (System)',
    layerTask: 'Layer 2: Pillar (Task)',
    layerChat: 'Layer 3: Living Room (Chat)',
    layerRag: 'Layer 4: Library (RAG)',
    noChat: '(No chat history yet)',
    noRag: '(No retrieval needed now)',
    whatHappened: '💡 What happened in this step:',
    scenarios: {
      coding: {
        name: '👨‍💻 Coding assistant scenario',
        steps: [
          {
            user: 'Help me write a Python snake game',
            action: 'Initialize',
            layers: {
              base: 'System: You are a senior Python engineer...',
              task: 'Task: Build a snake game with Pygame...',
              chat: [],
              rag: []
            },
            desc: 'Initialize: load the foundation (System) and task. Layers 1 and 2 are established.'
          },
          {
            user: null,
            ai_thinking:
              'Need to look up the latest Pygame initialization code...',
            action: 'Retrieve',
            layers: {
              base: 'System: You are a senior Python engineer...',
              task: 'Task: Build a snake game with Pygame...',
              chat: [],
              rag: [
                'Docs: Pygame.init() usage...',
                'Docs: Game loop pattern...'
              ]
            },
            desc: 'Think and retrieve: missing knowledge is fetched temporarily into Layer 4.'
          },
          {
            user: null,
            ai: 'Sure. Here is a basic snake implementation using Pygame...',
            action: 'Generate',
            layers: {
              base: 'System: You are a senior Python engineer...',
              task: 'Task: Build a snake game with Pygame...',
              chat: ['User: write snake game', 'AI: [Code Block]'],
              rag: []
            },
            desc: 'Generate answer: RAG material is discarded after use to save space, and the conversation enters Layer 3.'
          },
          {
            user: 'The snake moves too fast. How can I slow it down?',
            action: 'Follow-up',
            layers: {
              base: 'System: You are a senior Python engineer...',
              task: 'Task: Build a snake game with Pygame...',
              chat: [
                'User: write snake game',
                'AI: [Code Block]',
                'User: slow it down'
              ],
              rag: []
            },
            desc: 'User follow-up: the new turn is appended to Layer 3. Layers 1 and 2 stay unchanged.'
          },
          {
            user: null,
            ai: 'You can adjust the value in clock.tick(15)...',
            action: 'Reply',
            layers: {
              base: 'System: You are a senior Python engineer...',
              task: 'Task: Build a snake game with Pygame...',
              chat: [
                'User: write snake game',
                'AI: [Code Block]',
                'User: slow it down',
                'AI: adjust tick value...'
              ],
              rag: []
            },
            desc: 'Ongoing chat: Layer 3 grows. If it gets too long, the earliest turns slide out.'
          }
        ]
      },
      support: {
        name: '👩‍💼 Customer support scenario',
        steps: [
          {
            user: 'Has my order shipped? Order number 12345',
            action: 'Receive',
            layers: {
              base: 'System: You are a warm e-commerce support agent...',
              task: 'Task: Handle an order status request...',
              chat: [],
              rag: []
            },
            desc: 'Receive message: load the foundation (System).'
          },
          {
            user: null,
            ai_thinking: 'Querying the order system API...',
            action: 'Tool call',
            layers: {
              base: 'System: You are a warm e-commerce support agent...',
              task: 'Task: Handle an order status request...',
              chat: ['User: order 12345'],
              rag: ['API_Result: {id:12345, status:"shipped", loc:"Beijing"}']
            },
            desc: 'Tool/RAG call: fetch live order status and place it into Layer 4.'
          },
          {
            user: null,
            ai: 'I found it. Your package is now in transit through Beijing.',
            action: 'Reply',
            layers: {
              base: 'System: You are a warm e-commerce support agent...',
              task: 'Task: Handle an order status request...',
              chat: ['User: order 12345', 'AI: in transit through Beijing'],
              rag: []
            },
            desc: 'Finish reply: Layer 4 is cleared, and the conversation remains in Layer 3.'
          }
        ]
      }
    }
  }
}
