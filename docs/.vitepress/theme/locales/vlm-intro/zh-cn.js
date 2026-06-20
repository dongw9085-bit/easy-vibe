export default {
  linearProjection: {
    patchLabel: '1. Patch (16×16×3) (示意 / Toy)',
    patchDesc: '16×16 像素 × 3 通道 = 768 标量值',
    flattenLabel: '2. Flatten',
    flattenDesc: '得到 1×768 向量 (Vector)',
    embeddingLabel: '3. Embedding',
    embeddingDesc: '映射到 D 维 (示意 D=8；常见 D=768)'
  },
  positionalEmbedding: {
    featureTitle: 'Feature Vectors',
    positionTitle: 'Position Embeddings',
    resultTitle: 'Input to Transformer',
    caption:
      '位置编码 (Position Embedding) 是一组可学习的向量，直接<b>加</b>在图像特征上。'
  },
  projector: {
    linearDesc: '直接映射 (1:1)',
    qformerDesc: '查询提取 (N:M)',
    linearCount: '256 Tokens (保留全部细节)',
    qformerCount: '32 Tokens (只保留关键信息)',
    linearStrong: 'Linear Projector:',
    linearExplanation:
      '简单高效。它像一个直译器，保留了所有的视觉信息，虽然 Token 数量多（计算量大），但对细节的把控更好。',
    qformerStrong: 'Q-Former:',
    qformerExplanation:
      '精细优雅。它使用一组“查询向量”主动去图像中提取与文本相关的信息。大大压缩了 Token 数量，让 LLM 跑得更快。'
  },
  trainingPipeline: {
    stage1: '阶段一：特征对齐',
    stage2: '阶段二：指令微调',
    frozen: '❄️ Frozen',
    train: '🔥 Train',
    lossCalculation: 'Loss Calculation',
    textGeneration: 'Text Generation',
    dataTitle: '当前训练数据示例：',
    stage1Code: '<Image: 🐱>, <Text: "一只猫">',
    stage1Task: '任务：让图像向量与文本向量距离变近。',
    stage2Code: 'User: <Image: 🐱> 这只猫在干嘛？<br>Assistant: 它在睡觉。',
    stage2Task: '任务：根据图像和问题生成回答。'
  },
  featureAlignment: {
    title: '阶段一：特征对齐 (Feature Alignment / Pre-training)',
    desc: '目标：让 Projector 学会“翻译”图像语言。<br>做法：冻结 ViT 和 LLM，只训练 Projector。',
    imageLabel: '图片<br>(猫)',
    textLabel: '标题<br>("一只猫")',
    frozen: '❄️ 冻结',
    train: '🔥 训练',
    vectorV: '向量 V',
    vectorT: '向量 T',
    buttons: [
      '开始训练演示',
      '下一步：计算 Loss',
      '下一步：反向传播',
      '完成并重置'
    ],
    fallbackButton: '开始',
    descriptions: [
      '准备就绪。点击按钮开始模拟一次训练迭代。',
      '前向传播：图片经过 ViT (冻结) 和 Projector (训练) 得到向量 V；文本经过 LLM (冻结) 得到向量 T。',
      '计算 Loss：比较向量 V 和向量 T 的相似度。目标是让它们尽可能接近。',
      '反向传播：根据 Loss 更新 Projector 的参数。注意 ViT 和 LLM 不会更新！'
    ]
  },
  patchify: {
    prev: '⬅ 上一步 (Prev)',
    next: '下一步 (Next) ➡',
    done: '完成 (Done)',
    sequenceLabel: 'Token Sequence: 196×D (每个 Token 是 D 维向量)',
    stepDescriptions: [
      '1. 原始图片 (Original Image): 计算机看到的原始输入。',
      '2. 数字化 (Digitization): 图片本质上是一个数字矩阵 (H x W x C)。',
      '3. 切块 (Patchify): 典型设置：224×224 按 16×16 切成 14×14=196 个 Patch（此处等比示意）。',
      '4. 序列化 (Serialize): 将二维分布的 Patch “拍扁”成一维序列 (Spatial Flatten)。现在它看起来就像一串“视觉单词”，可以被 Transformer 逐个读取。'
    ]
  },
  vlmInference: {
    question: '这只猫在做什么？',
    observing: '正在观察图片...',
    thinking: '正在思考...',
    send: '发送 (Send)',
    generating: '生成中...',
    answer: '它正趴在窗台上晒太阳，看起来非常惬意。'
  },
  attention: {
    subtitle: '自注意力机制：全局信息交互',
    placeholder: '把鼠标悬停在任意方块上，<br>观察它在“关注”谁',
    currentPatch: '当前 Patch:',
    weightsTitle: 'Attention Weights (注意力权重)',
    items: [
      { icon: '🌿', label: '草地' },
      { icon: '🌿', label: '草地' },
      { icon: '🦋', label: '蝴蝶' },
      { icon: '🌿', label: '草地' },
      { icon: '🐱', label: '猫头' },
      { icon: '🌿', label: '草地' },
      { icon: '🧶', label: '毛球' },
      { icon: '🐾', label: '猫爪' },
      { icon: '🌿', label: '草地' }
    ],
    insights: {
      catHead: '猫头最关注猫爪（组成身体）和蝴蝶（捕猎目标）。',
      paws: '猫爪最关注毛球（正在玩耍）和猫头。',
      butterfly: '蝴蝶关注到了猫，可能是因为它是个威胁。',
      grass: '草地主要关注周围的草地，确认背景纹理。',
      yarn: '毛球和猫爪有很强的互动关系。',
      fallback: 'Self-Attention 让每个部分找到它的上下文关联。'
    }
  },
  modelArchitecture: {
    pureLlm: 'Pure LLM (纯文本)',
    vlm: 'Multimodal VLM (多模态)',
    vlmDesc:
      'Tokens from vision are translated and placed before text tokens. (视觉信息被翻译成 Token，放在文字 Token 之前。)',
    llmDesc:
      'Text-only tokens flow into the LLM. (只有文字 Token 流入大模型。)',
    visionPath: 'Vision Path (视觉路径)',
    image: 'Image (图片)',
    vit: 'ViT (视觉模型)',
    projector: 'Projector (投影器)',
    visionTokens: 'Vision Tokens (视觉 Token)',
    textPath: 'Text Path (文字路径)',
    prompt: 'Prompt (提示词)',
    embed: 'Embed (向量化)',
    textTokens: 'Text Tokens (文字 Token)',
    tokenSequence: 'Token Sequence (输入序列)',
    visionTag: 'Vision (视觉)',
    textTag: 'Text (文字)',
    concatHint:
      'Concat: [Vision Tokens] + [Text Tokens] (拼接：视觉在前，文字在后)',
    onlyTextHint: 'Only [Text Tokens] (只有文字 Token)',
    backbone: 'LLM Backbone (大模型)',
    response: 'Response (回复)',
    standardTitle: 'Standard LLM Flow (标准大模型流程)',
    standardFlow: 'Prompt → Embedding → Token Sequence → LLM → Response。',
    vlmTitle: 'VLM = LLM + Vision Encoder (视觉大模型原理)',
    principles: [
      { strong: 'ViT (The Eye):', text: '把图片编码成视觉特征。' },
      {
        strong: 'Projector (The Translator):',
        text: '把视觉特征映射到 LLM 的 Token 空间。'
      },
      {
        strong: 'Concatenation (拼接):',
        text: '把视觉 Token 放在文字 Token 之前，作为同一条输入序列。'
      }
    ]
  },
  vitOutput: {
    gridLabel: '1. Patch Tokens (Shown as Grid) (Patch Token 网格示意)',
    reshapeLabel: 'Reshape for View: Grid ⇄ Sequence (重排显示：网格⇄序列)',
    sequenceLabel: '2. Output Token Sequence (N×D) (输出序列)',
    typeLabel: 'Type: {type}',
    vectorValue: 'Vector Value:',
    semanticStrong: '🤖 What ViT sees (Semantic):',
    placeholder: '悬停在上方方块或向量上，查看 ViT 输出的“语义特征”',
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
    title: '👁️ VLM 初体验：不只是看图说话',
    subtitle: '选择不同场景，体验多模态模型的多种能力。',
    upload: '上传图片 (模拟)',
    safetySign: '⚠️ 安全生产',
    ready: '图片已就绪，请选择指令',
    needUpload: '请先上传图片',
    thinking: 'AI 正在观察图片并思考...',
    waitingUpload: '等待图片上传...',
    fallbackAnswer: '我还在学习这个任务...',
    scenarios: [
      { id: 'chat', name: '通用对话' },
      { id: 'detection', name: '目标检测' },
      { id: 'ocr', name: 'OCR 提取' },
      { id: 'analysis', name: '业务风控' }
    ],
    questions: {
      chat: [
        { id: 'place', text: '这里是哪里？' },
        { id: 'weather', text: '描述一下天气' },
        { id: 'poem', text: '写首关于这座山的诗' }
      ],
      detection: [
        { id: 'fruits', text: '检测图中的水果' },
        { id: 'appleCount', text: '数数有几个苹果' },
        { id: 'boxes', text: '输出检测框坐标' }
      ],
      ocr: [
        { id: 'extractText', text: '提取所有文字' },
        { id: 'total', text: '总金额是多少？' },
        { id: 'date', text: '消费日期是哪天？' }
      ],
      analysis: [
        { id: 'helmet', text: '工人是否佩戴安全帽？' },
        { id: 'hazards', text: '检测现场安全隐患' },
        { id: 'riskReport', text: '输出风险评估报告' }
      ]
    },
    answers: {
      chat: {
        place:
          '这是一张高山风景照。远处是覆盖着皑皑白雪的山峰，可能是阿尔卑斯山或喜马拉雅山脉。山脚下有郁郁葱葱的松树林。',
        weather:
          '天气看起来非常晴朗，阳光明媚（☀️），能见度很高。蓝天白云，是一个适合登山或滑雪的好天气。',
        poem: '🏔️ 雪岭插云天，\n🌲 松涛响翠烟。\n☀️ 金阳融冷色，\n🏞️ 壮丽入心田。'
      },
      detection: {
        fruits: {
          type: 'json',
          text: '{\n  "objects": [\n    "apple",\n    "banana",\n    "grape"\n  ],\n  "count": 3\n}',
          action: 'showBox'
        },
        appleCount: '图中检测到 1 个苹果（🍎）。',
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
        total: '这张小票的总金额是 $7.50。',
        date: '消费日期是 2023年10月24日。'
      },
      analysis: {
        helmet: '检测到画面中有一名工人（👷），已正确佩戴红色安全帽（⛑️）。',
        hazards: {
          type: 'json',
          text: '{\n  "hazards": [],\n  "safety_score": 100,\n  "status": "SAFE"\n}'
        },
        riskReport:
          '✅ **安全合规**\n- 人员：1人\n- 防护装备：齐全\n- 机械设备：正常运行中\n- 风险等级：低'
      }
    },
    imageLabels: {
      chat: '已上传：雪山风景.jpg',
      detection: '已上传：水果果盘.jpg',
      ocr: '已上传：购物小票.jpg',
      analysis: '已上传：车间监控.jpg'
    }
  }
}
