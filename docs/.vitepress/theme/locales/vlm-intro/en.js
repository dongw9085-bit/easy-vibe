export default {
  linearProjection: {
    patchLabel: '1. Patch (16×16×3) (toy example)',
    patchDesc: '16×16 pixels × 3 channels = 768 scalar values',
    flattenLabel: '2. Flatten',
    flattenDesc: 'Get a 1×768 vector',
    embeddingLabel: '3. Embedding',
    embeddingDesc: 'Map to D dimensions (toy D=8; common D=768)'
  },
  positionalEmbedding: {
    featureTitle: 'Feature Vectors',
    positionTitle: 'Position Embeddings',
    resultTitle: 'Input to Transformer',
    caption:
      'Position embeddings are learnable vectors that are directly <b>added</b> to image features.'
  },
  projector: {
    linearDesc: 'Direct mapping (1:1)',
    qformerDesc: 'Query extraction (N:M)',
    linearCount: '256 Tokens (keeps all details)',
    qformerCount: '32 Tokens (keeps key information only)',
    linearStrong: 'Linear Projector:',
    linearExplanation:
      'Simple and efficient. It acts like a direct translator and preserves all visual information. It uses more tokens, but keeps fine details better.',
    qformerStrong: 'Q-Former:',
    qformerExplanation:
      'More refined. It uses query vectors to actively extract text-relevant information from the image, greatly reducing token count so the LLM runs faster.'
  },
  trainingPipeline: {
    stage1: 'Stage 1: Feature alignment',
    stage2: 'Stage 2: Instruction tuning',
    frozen: '❄️ Frozen',
    train: '🔥 Train',
    lossCalculation: 'Loss Calculation',
    textGeneration: 'Text Generation',
    dataTitle: 'Current training data example:',
    stage1Code: '<Image: 🐱>, <Text: "a cat">',
    stage1Task: 'Task: make the image vector closer to the text vector.',
    stage2Code:
      'User: <Image: 🐱> What is this cat doing?<br>Assistant: It is sleeping.',
    stage2Task: 'Task: generate an answer from the image and question.'
  },
  featureAlignment: {
    title: 'Stage 1: Feature Alignment / Pre-training',
    desc: 'Goal: teach the Projector to translate visual language.<br>Method: freeze ViT and LLM, and train only the Projector.',
    imageLabel: 'Image<br>(cat)',
    textLabel: 'Caption<br>("a cat")',
    frozen: '❄️ Frozen',
    train: '🔥 Train',
    vectorV: 'Vector V',
    vectorT: 'Vector T',
    buttons: [
      'Start training demo',
      'Next: calculate Loss',
      'Next: backpropagation',
      'Finish and reset'
    ],
    fallbackButton: 'Start',
    descriptions: [
      'Ready. Click the button to simulate one training iteration.',
      'Forward pass: the image goes through ViT (frozen) and Projector (trainable) to produce vector V; text goes through LLM (frozen) to produce vector T.',
      'Calculate Loss: compare the similarity between vector V and vector T. The goal is to make them as close as possible.',
      'Backpropagation: update Projector parameters from the Loss. ViT and LLM are not updated.'
    ]
  },
  patchify: {
    prev: '⬅ Previous',
    next: 'Next ➡',
    done: 'Done',
    sequenceLabel:
      'Token Sequence: 196×D (each token is a D-dimensional vector)',
    stepDescriptions: [
      '1. Original Image: the raw input seen by the computer.',
      '2. Digitization: an image is essentially a numeric matrix (H x W x C).',
      '3. Patchify: a common setup cuts 224×224 into 14×14 = 196 patches of 16×16.',
      '4. Serialize: flatten the two-dimensional patch layout into a one-dimensional sequence, like a string of visual words for a Transformer.'
    ]
  },
  vlmInference: {
    question: 'What is this cat doing?',
    observing: 'Observing the image...',
    thinking: 'Thinking...',
    send: 'Send',
    generating: 'Generating...',
    answer: 'It is lying on the windowsill in the sun and looks very relaxed.'
  },
  attention: {
    subtitle: 'Self-attention: global information exchange',
    placeholder: 'Hover over any patch<br>to see what it attends to',
    currentPatch: 'Current Patch:',
    weightsTitle: 'Attention Weights',
    items: [
      { icon: '🌿', label: 'Grass' },
      { icon: '🌿', label: 'Grass' },
      { icon: '🦋', label: 'Butterfly' },
      { icon: '🌿', label: 'Grass' },
      { icon: '🐱', label: 'Cat head' },
      { icon: '🌿', label: 'Grass' },
      { icon: '🧶', label: 'Yarn' },
      { icon: '🐾', label: 'Cat paw' },
      { icon: '🌿', label: 'Grass' }
    ],
    insights: {
      catHead: 'The cat head attends most to the paw and butterfly.',
      paws: 'The paw attends strongly to the yarn and cat head.',
      butterfly:
        'The butterfly attends to the cat, possibly because it is a threat.',
      grass:
        'Grass patches mostly attend to nearby grass to confirm background texture.',
      yarn: 'The yarn and cat paw have a strong interaction.',
      fallback: 'Self-attention lets every part find contextual relationships.'
    }
  },
  modelArchitecture: {
    pureLlm: 'Pure LLM',
    vlm: 'Multimodal VLM',
    vlmDesc: 'Tokens from vision are translated and placed before text tokens.',
    llmDesc: 'Text-only tokens flow into the LLM.',
    visionPath: 'Vision Path',
    image: 'Image',
    vit: 'ViT',
    projector: 'Projector',
    visionTokens: 'Vision Tokens',
    textPath: 'Text Path',
    prompt: 'Prompt',
    embed: 'Embed',
    textTokens: 'Text Tokens',
    tokenSequence: 'Token Sequence',
    visionTag: 'Vision',
    textTag: 'Text',
    concatHint: 'Concat: [Vision Tokens] + [Text Tokens]',
    onlyTextHint: 'Only [Text Tokens]',
    backbone: 'LLM Backbone',
    response: 'Response',
    standardTitle: 'Standard LLM Flow',
    standardFlow: 'Prompt → Embedding → Token Sequence → LLM → Response.',
    vlmTitle: 'VLM = LLM + Vision Encoder',
    principles: [
      {
        strong: 'ViT (The Eye):',
        text: 'encodes the image into visual features.'
      },
      {
        strong: 'Projector (The Translator):',
        text: 'maps visual features into the LLM token space.'
      },
      {
        strong: 'Concatenation:',
        text: 'puts visual tokens before text tokens as one input sequence.'
      }
    ]
  },
  vitOutput: {
    gridLabel: '1. Patch Tokens (shown as grid)',
    reshapeLabel: 'Reshape for View: Grid ⇄ Sequence',
    sequenceLabel: '2. Output Token Sequence (N×D)',
    typeLabel: 'Type: {type}',
    vectorValue: 'Vector Value:',
    semanticStrong: '🤖 What ViT sees (Semantic):',
    placeholder:
      'Hover over a patch or vector to inspect the semantic features produced by ViT',
    items: [
      {
        icon: '🌲',
        label: 'Background',
        type: 'Environment',
        color: '#4caf50',
        desc: 'Recognized as outdoor nature elements (Trees/Greenery). Low relevance to main subject.'
      },
      {
        icon: '🌲',
        label: 'Background',
        type: 'Environment',
        color: '#4caf50',
        desc: 'Redundant background info. Contextualizes the scene as "Outdoors".'
      },
      {
        icon: '☁️',
        label: 'Sky',
        type: 'Environment',
        color: '#2196f3',
        desc: 'Spatial context: Upper region, open area.'
      },
      {
        icon: '👂',
        label: 'Cat Ear',
        type: 'Subject Part',
        color: '#ff9800',
        desc: 'High Importance. Identified as "Feline Feature". Strongly linked to "Cat Face".'
      },
      {
        icon: '😼',
        label: 'Cat Face',
        type: 'Subject Core',
        color: '#ff5722',
        desc: 'Global Focus Center. Contains "Eyes", "Whiskers". Aggregates info from surrounding patches.'
      },
      {
        icon: '🌲',
        label: 'Background',
        type: 'Environment',
        color: '#4caf50',
        desc: 'Background noise.'
      },
      {
        icon: '🐾',
        label: 'Cat Paw',
        type: 'Subject Part',
        color: '#ff9800',
        desc: 'Action component. Suggests "Standing" or "Walking" posture.'
      },
      {
        icon: '🧶',
        label: 'Yarn',
        type: 'Object',
        color: '#e91e63',
        desc: 'Interacting Object. Semantically linked to "Play" or "Toy".'
      },
      {
        icon: '🌱',
        label: 'Grass',
        type: 'Environment',
        color: '#8bc34a',
        desc: 'Ground context. Confirms "Ground level" view.'
      }
    ]
  },
  quickStart: {
    title: '👁️ First VLM Experience: More Than Image Captioning',
    subtitle:
      'Choose different scenarios to experience multimodal capabilities.',
    upload: 'Upload image (simulated)',
    safetySign: '⚠️ Safety Production',
    ready: 'Image is ready. Choose an instruction.',
    needUpload: 'Upload an image first',
    thinking: 'AI is observing the image and thinking...',
    waitingUpload: 'Waiting for image upload...',
    fallbackAnswer: 'I am still learning this task...',
    scenarios: [
      { id: 'chat', name: 'General chat' },
      { id: 'detection', name: 'Object detection' },
      { id: 'ocr', name: 'OCR extraction' },
      { id: 'analysis', name: 'Risk analysis' }
    ],
    questions: {
      chat: [
        { id: 'place', text: 'Where is this?' },
        { id: 'weather', text: 'Describe the weather' },
        { id: 'poem', text: 'Write a poem about this mountain' }
      ],
      detection: [
        { id: 'fruits', text: 'Detect the fruits' },
        { id: 'appleCount', text: 'How many apples are there?' },
        { id: 'boxes', text: 'Output bounding box coordinates' }
      ],
      ocr: [
        { id: 'extractText', text: 'Extract all text' },
        { id: 'total', text: 'What is the total amount?' },
        { id: 'date', text: 'What is the purchase date?' }
      ],
      analysis: [
        { id: 'helmet', text: 'Is the worker wearing a helmet?' },
        { id: 'hazards', text: 'Detect safety hazards' },
        { id: 'riskReport', text: 'Output a risk assessment report' }
      ]
    },
    answers: {
      chat: {
        place:
          'This is a mountain landscape. Snow-covered peaks rise in the distance, with dense pine forest near the base.',
        weather:
          'The weather looks clear and sunny, with high visibility and blue sky. It would be a good day for hiking or skiing.',
        poem: '🏔️ Snow peaks touch the sky,\n🌲 Pines whisper in bright air.\n☀️ Sun warms the silent ridge,\n🏞️ The wide view settles there.'
      },
      detection: {
        fruits: {
          type: 'json',
          text: '{\n  "objects": [\n    "apple",\n    "banana",\n    "grape"\n  ],\n  "count": 3\n}',
          action: 'showBox'
        },
        appleCount: 'The image contains 1 apple (🍎).',
        boxes: {
          type: 'json',
          text: '{\n  "objects": [\n    {\n      "label": "apple",\n      "box": [15, 15, 85, 85]\n    },\n    {\n      "label": "banana",\n      "box": [95, 15, 165, 85]\n    }\n  ]\n}',
          action: 'showBox'
        }
      },
      ocr: {
        extractText: {
          type: 'json',
          text: '{\n  "lines": [\n    "RECEIPT",\n    "Coffee $4.50",\n    "Bagel $3.00",\n    "TOTAL $7.50",\n    "2023-10-24"\n  ]\n}'
        },
        total: 'The total amount on this receipt is $7.50.',
        date: 'The purchase date is 2023-10-24.'
      },
      analysis: {
        helmet:
          'The image shows one worker (👷) correctly wearing a red safety helmet (⛑️).',
        hazards: {
          type: 'json',
          text: '{\n  "hazards": [],\n  "safety_score": 100,\n  "status": "SAFE"\n}'
        },
        riskReport:
          '✅ **Safety compliant**\n- Personnel: 1\n- Protective equipment: complete\n- Machinery: operating normally\n- Risk level: low'
      }
    },
    imageLabels: {
      chat: 'Uploaded: snowy-mountain.jpg',
      detection: 'Uploaded: fruit-plate.jpg',
      ocr: 'Uploaded: receipt.jpg',
      analysis: 'Uploaded: workshop-camera.jpg'
    }
  }
}
