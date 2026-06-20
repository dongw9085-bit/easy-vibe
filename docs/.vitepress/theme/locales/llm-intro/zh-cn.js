export default {
  quickStart: {
    title: '🤖 LLM 初体验：从闲聊到业务实战',
    subtitle:
      '大模型不仅能聊天，更是生产力工具。试试看它如何处理这些业务需求：',
    empty: '请选择一个业务场景开始体验',
    generating: '正在思考业务逻辑并生成 Token...',
    fallback: '正在思考...',
    questions: [
      {
        icon: '🤔',
        text: '给我想一个请假的理由',
        type: 'casual',
        isCode: false,
        answer:
          '老板，我感觉身体不适，可能是昨天写代码太投入，CPU（大脑）过热导致系统（身体）宕机了，申请重启（休息）一天。'
      },
      {
        icon: '🐍',
        text: '帮我写一个 Python 爬虫',
        type: 'code',
        isCode: true,
        answer: `import requests
from bs4 import BeautifulSoup

def fetch_titles(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # 提取所有 h1 标签
    titles = [tag.text.strip() for tag in soup.find_all('h1')]
    return titles

# 使用示例
url = "https://example.com"
print(f"正在爬取 {url} 的标题...")
# titles = fetch_titles(url)
# print(titles)`
      },
      {
        icon: '🎩',
        text: '用鲁迅的语气夸我',
        type: 'casual',
        isCode: false,
        answer:
          '我向来是不惮以最坏的恶意来推测中国人的，然而我还不料，也不信竟会遇见这样优秀的人。你的代码，很有几分风骨。'
      },
      {
        icon: '📊',
        text: '分析这份销售数据的趋势',
        type: 'analysis',
        isCode: false,
        answer:
          '基于您提供的数据，我发现以下几个关键趋势：\n\n1. 📈 **总体增长**：Q3 销售额同比增长了 25%，主要得益于线上渠道的爆发。\n2. ⚠️ **库存预警**：热销品类 A 的周转天数已降至 5 天，建议立即补货。\n3. 💡 **潜力市场**：华南地区的转化率（3.2%）显著高于平均水平，建议加大该区域的广告投放。'
      },
      {
        icon: '📝',
        text: '为这款咖啡杯写一段小红书文案',
        type: 'marketing',
        isCode: false,
        answer:
          '☕️ **早八人的续命神器！这款咖啡杯真的太懂我了**\n\n家人们谁懂啊！😭 作为一个每天靠咖啡续命的打工人，终于挖到了这款宝藏杯子！\n\n✨ **颜值绝绝子**：奶油白配色，拿在手里就是妥妥的 ins 风，摆在工位上心情都变好了！\n🌡️ **保温超长待机**：早上泡的冰美式，下午还是冰冰凉，这也太适合夏天了吧！\n🔒 **密封不漏水**：直接塞包里也不怕洒，挤地铁必备！\n\n👇 评论区蹲一个链接，带你一起实现咖啡自由！ #好物分享 #高颜值水杯 #打工人日常'
      }
    ]
  },
  tokenization: {
    labels: {
      input: 'Input Text / 输入文本',
      algorithm: 'Algorithm / 算法',
      characters: 'Characters / 字符',
      note: 'Note:',
      tokenId: 'ID',
      tokenType: 'Type'
    },
    placeholder: 'Type something to see how AI reads it...',
    sampleText:
      'The quick brown fox jumps over the lazy dog. \n今天天气真不错！',
    note: 'LLM 不直接理解单词，它们处理的是数字（Token IDs）。对于英文，一个 Token 通常是一个单词或单词的一部分（如 "ing"）；对于中文，一个 Token 通常是一个汉字或词组。'
  },
  embedding: {
    modes: [
      {
        id: 'cluster',
        label: '语义聚类',
        desc: '语义相近的词在空间中距离更近。'
      },
      {
        id: 'analogy',
        label: '向量算术',
        desc: 'King - Man + Woman ≈ Queen (方向平行)'
      }
    ]
  },
  matrix: {
    inputPlaceholder: '输入一段文本...',
    prev: '← 上一步',
    next: '下一步 →',
    sampleText: '我爱人工智能',
    steps: [
      {
        title: 'Step 1: Tokenization (分词)',
        desc: '计算机首先将文本切分为最小的语义单位（Token）。',
        note: '注：此处演示简化为按字切分，真实模型通常使用 BPE 算法，如“人工智能”可能合并为一个 Token'
      },
      {
        title: 'Step 2: ID Mapping (索引映射)',
        desc: '在词表（Vocabulary）中查找每个 Token 对应的唯一数字 ID。'
      },
      {
        title: 'Step 3: Embedding Lookup (向量查表)',
        desc: '每个 ID 对应一个预训练好的高维向量（这里简化为 4 维）。'
      },
      {
        title: 'Step 4: Matrix Construction (构建矩阵)',
        desc: '所有向量堆叠在一起，形成了输入矩阵（Shape: [Batch, Seq_Len, Dim]）。这就是 LLM 真正“看见”的东西。'
      }
    ]
  },
  thinking: {
    modes: {
      fast: '⚡️ 传统快思考 (System 1)',
      slow: '🧠 深度慢思考 (System 2)'
    },
    questionLabel: '用户提问:',
    question: '9.11 和 9.9 哪个大？',
    thoughtTitle: '💭 思考过程 (Chain of Thought)',
    generating: '生成中...',
    start: '开始生成',
    metrics: {
      tokens: 'Token 消耗:',
      time: '耗时:',
      accuracy: '准确率:',
      wrong: '❌ 错误',
      correct: '✅ 正确'
    },
    fastOutput: '9.11 比 9.9 大。',
    slowThoughts: `首先比较整数部分，都是9，相等。
接下来比较小数部分。
9.11 的小数部分是 0.11。
9.9 的小数部分是 0.9。
比较第一位小数：1 < 9。
所以 0.11 小于 0.9。
结论：9.11 小于 9.9。`,
    slowOutput: '9.11 比 9.9 小。'
  },
  rnnTransformer: {
    rnnDesc:
      'RNN 从左到右逐个读取。注意看 Memory（记忆），随着句子变长，最早的信息（"The"）可能会被后面的信息冲淡，这就是“长距离依赖”问题。',
    hoverTip: '👆 鼠标悬停在任意单词上，查看它在“关注”谁。',
    transformerDescPrefix:
      'Transformer 一眼看完整个句子（并行）。Self-Attention 机制让每个词都能直接“看见”其他词，无论距离多远。',
    transformerExample:
      '例如：悬停在 "it" 上，你会发现它强烈关注 "animal"，因为它指代的就是 animal。'
  },
  linearAttention: {
    modes: {
      standard: '标准 Attention (网状连接)',
      linear: '线性 Attention (接力传递)'
    },
    participantCount: '参与者数量 (N): {n}',
    operations: '连接/操作次数',
    standardDesc: '每个人都要找其他人。N={n} 时，连接数高达 {count}！',
    linearDesc: '每个人只传给下一个人。N={n} 时，操作数仅为 {count}。',
    title: '💡 核心区别：要不要回头看？',
    standardTitle: '回看模式 (Retrospective)：',
    standardBody:
      '想象你在考试。每做一道新题，你都要把之前做过的所有题目再检查一遍，确认有没有关联。题目越多，你需要检查的次数就越多，最后累死在检查上。',
    linearTitle: '状态模式 (Recurrent)：',
    linearBody:
      '想象你在跑步。你不需要记得前 100 步每一步踩在哪，你只需要知道现在的速度和位置（State）。跑第 1000 步和跑第 1 步一样轻松，因为你不需要回头。'
  },
  moe: {
    modes: {
      dense: 'Dense (传统模型)',
      moe: 'MoE (混合专家)'
    },
    descriptions: {
      dense: '全能天才：每个 Token 都激活所有神经元 (100% 激活)',
      moe: '专家团队：每个 Token 路由给特定专家 (Token-Level Routing)'
    },
    labels: {
      selectInput: '1. 选择输入 (Select Input)',
      currentToken: 'Current Token:',
      processing: '2. 模型处理 (Processing)',
      generating: '生成中...',
      activation: '🔥 激活率: 100% (All Parameters)',
      router: 'Router (Token 分发)',
      output: '3. 逐步生成 (Output Stream)',
      placeholder: '点击运行查看生成过程...',
      generatingButton: '正在生成 (Generating)...',
      runButton: '▶️ 开始生成 (Run Generation)'
    },
    tasks: [
      { label: 'Python 代码示例', icon: '🐍' },
      { label: '科幻小说片段', icon: '🚀' }
    ]
  },
  training: {
    tabs: [
      { id: 'completion', label: '1. 本能：续写', icon: '✍️' },
      { id: 'chat', label: '2. 技巧：对话', icon: '🎭' },
      { id: 'train', label: '3. 原理：训练', icon: '🧠' },
      { id: 'rlhf', label: '4. 进阶：对齐', icon: '🛡️' }
    ],
    completionDescTitle: 'LLM 的本能是“续写”',
    completionDesc: '：它并不懂对话，只是根据上文猜下一个词。',
    promptLabel: 'Prompt (提示词):',
    probability: '💡 模型在计算概率：',
    chatDescTitle: '如何让它对话？',
    chatDesc: '我们用“剧本”包装输入，让模型以为自己在续写一段对话。',
    chatUiLabel: '用户看到的 (Chat UI)',
    assistantGreeting: '我是 AI 助手，你好！',
    transform: '➡️ 转换 ➡️',
    rawPromptLabel: '模型看到的 (Raw Prompt)',
    trainDescTitle: 'Training (训练原理)',
    trainDesc:
      '模型通过大量数据的“填空题”训练。计算预测结果与真实结果的差异（Loss），并不断调整参数以降低 Loss。',
    inputStage: '1. Input (输入)',
    startPlaceholder: '点击下方按钮开始训练',
    rlhfDescTitle: '从“胡说”到“好助手”',
    rlhfDesc: '：通过 RLHF (人类反馈) 让模型学会礼貌和安全。',
    modelState: '模型状态：',
    baseModel: 'Base Model (未对齐)',
    alignedModel: 'Aligned Model (已对齐)',
    harmfulQuery: 'User: "如何制造混乱？"',
    baseResponse:
      '哈哈！制造混乱很简单！你可以去大街上大喊大叫，或者...（此处省略1000字胡言乱语）...这太好玩了！',
    alignedResponse:
      '对不起，我不能回答这个问题。作为一个人工智能助手，我必须遵守安全准则，不能提供有害建议。',
    buttons: {
      start: 'Start Training (开始训练)',
      restart: 'Restart (重新开始)',
      next: 'Next Step (下一步)'
    },
    trainDataset: [
      { input: 'The sky is', target: 'blue' },
      { input: 'I like', target: 'apples' },
      { input: '今天天气', target: '不错' },
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
      '未知',
      '乱码',
      '错误'
    ]
  }
}
