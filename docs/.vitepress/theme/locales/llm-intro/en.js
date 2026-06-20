export default {
  quickStart: {
    title: '🤖 LLM First Look: From Chat to Business Workflows',
    subtitle:
      'Large models are not just chatbots. Try how they handle these practical requests:',
    empty: 'Choose a business scenario to begin.',
    generating: 'Thinking through the workflow and generating tokens...',
    fallback: 'Thinking...',
    questions: [
      {
        icon: '🤔',
        text: 'Give me a reason to ask for leave',
        type: 'casual',
        isCode: false,
        answer:
          'Manager, I feel unwell today. I may have overheated my brain by coding too intensely yesterday, so my body needs one day to reboot.'
      },
      {
        icon: '🐍',
        text: 'Write a Python web scraper',
        type: 'code',
        isCode: true,
        answer: `import requests
from bs4 import BeautifulSoup

def fetch_titles(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract all h1 tags
    titles = [tag.text.strip() for tag in soup.find_all('h1')]
    return titles

# Usage example
url = "https://example.com"
print(f"Fetching titles from {url}...")
# titles = fetch_titles(url)
# print(titles)`
      },
      {
        icon: '🎩',
        text: 'Compliment me in a literary tone',
        type: 'casual',
        isCode: false,
        answer:
          'Your code has structure, restraint, and a certain clarity of intent. It reads like someone who knows both the problem and the reader.'
      },
      {
        icon: '📊',
        text: 'Analyze this sales trend',
        type: 'analysis',
        isCode: false,
        answer:
          'Based on the data, I see three key trends:\n\n1. 📈 **Overall growth**: Q3 sales grew 25% year over year, mainly from online channels.\n2. ⚠️ **Inventory warning**: The top category has only 5 days of stock turnover left, so replenish soon.\n3. 💡 **Growth market**: South-region conversion is significantly above average; consider increasing ad spend there.'
      },
      {
        icon: '📝',
        text: 'Write social copy for this coffee cup',
        type: 'marketing',
        isCode: false,
        answer:
          '☕️ **The workday coffee cup I actually keep using**\n\nClean cream-white finish, easy to carry, and it keeps iced coffee cold through a long afternoon.\n\n✨ Looks good on a desk\n🌡️ Keeps drinks at the right temperature\n🔒 Seals well in a bag\n\nA small daily object that makes the morning routine feel less rushed.'
      }
    ]
  },
  tokenization: {
    labels: {
      input: 'Input Text',
      algorithm: 'Algorithm',
      characters: 'Characters',
      note: 'Note:',
      tokenId: 'ID',
      tokenType: 'Type'
    },
    placeholder: 'Type something to see how AI reads it...',
    sampleText:
      'The quick brown fox jumps over the lazy dog. \nToday is a nice day!',
    note: 'LLMs do not directly process words. They process numbers, called token IDs. In English, one token is usually a word or part of a word such as "ing"; in Chinese, one token is often a character or short phrase.'
  },
  embedding: {
    modes: [
      {
        id: 'cluster',
        label: 'Semantic clusters',
        desc: 'Words with similar meaning appear closer together in vector space.'
      },
      {
        id: 'analogy',
        label: 'Vector arithmetic',
        desc: 'King - Man + Woman ≈ Queen (parallel direction)'
      }
    ]
  },
  matrix: {
    inputPlaceholder: 'Enter a short text...',
    prev: '← Previous',
    next: 'Next →',
    sampleText: 'I love AI',
    steps: [
      {
        title: 'Step 1: Tokenization',
        desc: 'The computer first splits text into small semantic units called tokens.',
        note: 'This demo simplifies tokenization. Real models often use BPE, so a phrase may become one token.'
      },
      {
        title: 'Step 2: ID Mapping',
        desc: 'Each token is looked up in the vocabulary and mapped to a unique numeric ID.'
      },
      {
        title: 'Step 3: Embedding Lookup',
        desc: 'Each ID points to a pretrained high-dimensional vector, simplified here as 4 dimensions.'
      },
      {
        title: 'Step 4: Matrix Construction',
        desc: 'Vectors are stacked into an input matrix with shape [Batch, Seq_Len, Dim]. This is what the LLM actually sees.'
      }
    ]
  },
  thinking: {
    modes: {
      fast: '⚡️ Fast thinking (System 1)',
      slow: '🧠 Deep thinking (System 2)'
    },
    questionLabel: 'User question:',
    question: 'Which is larger, 9.11 or 9.9?',
    thoughtTitle: '💭 Reasoning process (Chain of Thought)',
    generating: 'Generating...',
    start: 'Start generation',
    metrics: {
      tokens: 'Token usage:',
      time: 'Time:',
      accuracy: 'Accuracy:',
      wrong: '❌ Wrong',
      correct: '✅ Correct'
    },
    fastOutput: '9.11 is larger than 9.9.',
    slowThoughts: `First compare the integer parts: both are 9.
Now compare the decimal parts.
9.11 has decimal part 0.11.
9.9 has decimal part 0.9.
Compare the first decimal digit: 1 < 9.
So 0.11 is less than 0.9.
Conclusion: 9.11 is less than 9.9.`,
    slowOutput: '9.11 is smaller than 9.9.'
  },
  rnnTransformer: {
    rnnDesc:
      'RNN reads from left to right one word at a time. Watch Memory (h): as the sentence gets longer, early information such as "The" can fade, causing the long-range dependency problem.',
    hoverTip: '👆 Hover over any word to see what it attends to.',
    transformerDescPrefix:
      'Transformer sees the whole sentence at once in parallel. Self-attention lets every word directly look at other words, no matter how far apart they are.',
    transformerExample:
      'For example, hover over "it" and you will see strong attention to "animal", because "it" refers to that word.'
  },
  linearAttention: {
    modes: {
      standard: 'Standard Attention (mesh connections)',
      linear: 'Linear Attention (relay passing)'
    },
    participantCount: 'Participants (N): {n}',
    operations: 'Connections / operations',
    standardDesc:
      'Everyone checks everyone else. When N={n}, the connection count reaches {count}.',
    linearDesc:
      'Each person passes state only to the next one. When N={n}, the operation count is only {count}.',
    title: '💡 Core difference: do we look back?',
    standardTitle: 'Retrospective mode:',
    standardBody:
      'Imagine taking an exam. For each new question, you re-check every previous question to see whether it is related. The more questions there are, the more checking dominates the work.',
    linearTitle: 'Recurrent state mode:',
    linearBody:
      'Imagine running. You do not remember where every previous step landed; you only keep current speed and position as state. Step 1000 is no harder than step 1 because you do not look back.'
  },
  moe: {
    modes: {
      dense: 'Dense (traditional model)',
      moe: 'MoE (mixture of experts)'
    },
    descriptions: {
      dense:
        'All-round model: every token activates all neurons (100% active).',
      moe: 'Expert team: each token is routed to specific experts (token-level routing).'
    },
    labels: {
      selectInput: '1. Select Input',
      currentToken: 'Current Token:',
      processing: '2. Model Processing',
      generating: 'Generating...',
      activation: '🔥 Activation: 100% (All Parameters)',
      router: 'Router (Token dispatch)',
      output: '3. Output Stream',
      placeholder: 'Click run to see the generation process...',
      generatingButton: 'Generating...',
      runButton: '▶️ Run Generation'
    },
    tasks: [
      { label: 'Python code example', icon: '🐍' },
      { label: 'Sci-fi story fragment', icon: '🚀' }
    ]
  },
  training: {
    tabs: [
      { id: 'completion', label: '1. Instinct: Completion', icon: '✍️' },
      { id: 'chat', label: '2. Trick: Chat', icon: '🎭' },
      { id: 'train', label: '3. Principle: Training', icon: '🧠' },
      { id: 'rlhf', label: '4. Advanced: Alignment', icon: '🛡️' }
    ],
    completionDescTitle: 'An LLM’s instinct is completion',
    completionDesc:
      ': it does not naturally understand chat; it predicts the next word from context.',
    promptLabel: 'Prompt:',
    probability: '💡 The model is estimating probability:',
    chatDescTitle: 'How do we make it chat?',
    chatDesc:
      'We wrap input in a dialogue script, so the model thinks it is continuing a conversation.',
    chatUiLabel: 'What users see (Chat UI)',
    assistantGreeting: 'I am an AI assistant. Hello!',
    transform: '➡️ Transform ➡️',
    rawPromptLabel: 'What the model sees (Raw Prompt)',
    trainDescTitle: 'Training',
    trainDesc:
      'The model trains on many fill-in-the-blank examples. It compares prediction with target, computes loss, and adjusts parameters to reduce loss.',
    inputStage: '1. Input',
    startPlaceholder: 'Click the button below to start training',
    rlhfDescTitle: 'From nonsense to helpful assistant',
    rlhfDesc:
      ': RLHF uses human feedback to teach the model politeness and safety.',
    modelState: 'Model state:',
    baseModel: 'Base Model (not aligned)',
    alignedModel: 'Aligned Model',
    harmfulQuery: 'User: "How can I create chaos?"',
    baseResponse:
      'Sure, chaos is easy! You could yell in the street, or... (long unsafe rambling omitted) ...that sounds fun!',
    alignedResponse:
      'Sorry, I cannot help with that. As an AI assistant, I follow safety guidelines and cannot provide harmful advice.',
    buttons: {
      start: 'Start Training',
      restart: 'Restart',
      next: 'Next Step'
    },
    trainDataset: [
      { input: 'The sky is', target: 'blue' },
      { input: 'I like', target: 'apples' },
      { input: 'Today feels', target: 'nice' },
      { input: 'Machine', target: 'Learning' }
    ],
    randomWords: [
      'cat',
      'fly',
      'run',
      'red',
      'table',
      'what',
      'bad',
      'unknown',
      'noise',
      'error'
    ]
  }
}
