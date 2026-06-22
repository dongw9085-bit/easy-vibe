export default {
  concept: {
    title: '词嵌入空间可视化',
    desc: '语义相近的词语在向量空间中距离更近，形成自然聚类',
    axisX: '维度 1',
    axisY: '维度 2',
    vectorLabel: '向量',
    info: '嵌入模型将文本映射到高维向量空间（通常 768~1536 维）。这里我们将其简化为二维来展示核心思想：',
    infoStrong: '语义相近的词语，向量距离也更近',
    categories: [
      { key: 'animals-royalty', label: '动物 vs 皇室' },
      { key: 'food-tech', label: '食物 vs 科技' },
      { key: 'emotions', label: '情感词汇' }
    ],
    dataMap: {
      'animals-royalty': {
        clusters: [
          { label: '动物', cx: 150, cy: 160, rx: 80, ry: 65, color: '#10b981' },
          { label: '皇室', cx: 370, cy: 200, rx: 75, ry: 60, color: '#8b5cf6' }
        ],
        points: [
          { word: '猫', x: 120, y: 140, color: '#10b981', vec: [0.21, 0.68] },
          { word: '狗', x: 160, y: 180, color: '#10b981', vec: [0.28, 0.55] },
          { word: '老虎', x: 185, y: 130, color: '#10b981', vec: [0.35, 0.72] },
          { word: '兔子', x: 130, y: 195, color: '#10b981', vec: [0.22, 0.48] },
          { word: '国王', x: 350, y: 175, color: '#8b5cf6', vec: [0.82, 0.58] },
          { word: '王后', x: 390, y: 195, color: '#8b5cf6', vec: [0.88, 0.52] },
          { word: '王子', x: 360, y: 225, color: '#8b5cf6', vec: [0.84, 0.42] },
          { word: '公主', x: 395, y: 215, color: '#8b5cf6', vec: [0.89, 0.45] }
        ]
      },
      'food-tech': {
        clusters: [
          { label: '食物', cx: 140, cy: 240, rx: 85, ry: 70, color: '#f59e0b' },
          { label: '科技', cx: 360, cy: 120, rx: 80, ry: 65, color: '#3b82f6' }
        ],
        points: [
          {
            word: '苹果(水果)',
            x: 110,
            y: 220,
            color: '#f59e0b',
            vec: [0.15, 0.38]
          },
          { word: '面包', x: 155, y: 260, color: '#f59e0b', vec: [0.25, 0.28] },
          { word: '牛奶', x: 130, y: 280, color: '#f59e0b', vec: [0.2, 0.22] },
          { word: '蛋糕', x: 175, y: 230, color: '#f59e0b', vec: [0.3, 0.35] },
          { word: '电脑', x: 340, y: 100, color: '#3b82f6', vec: [0.78, 0.82] },
          { word: '手机', x: 375, y: 130, color: '#3b82f6', vec: [0.85, 0.75] },
          { word: '芯片', x: 355, y: 150, color: '#3b82f6', vec: [0.82, 0.7] },
          { word: '算法', x: 390, y: 110, color: '#3b82f6', vec: [0.88, 0.8] }
        ]
      },
      emotions: {
        clusters: [
          {
            label: '积极情感',
            cx: 150,
            cy: 130,
            rx: 90,
            ry: 70,
            color: '#10b981'
          },
          {
            label: '消极情感',
            cx: 360,
            cy: 270,
            rx: 85,
            ry: 65,
            color: '#ef4444'
          },
          {
            label: '中性情感',
            cx: 260,
            cy: 200,
            rx: 60,
            ry: 45,
            color: '#6b7280'
          }
        ],
        points: [
          { word: '快乐', x: 120, y: 110, color: '#10b981', vec: [0.15, 0.78] },
          { word: '幸福', x: 155, y: 130, color: '#10b981', vec: [0.22, 0.72] },
          { word: '兴奋', x: 180, y: 100, color: '#10b981', vec: [0.28, 0.82] },
          { word: '悲伤', x: 340, y: 250, color: '#ef4444', vec: [0.78, 0.3] },
          { word: '愤怒', x: 380, y: 270, color: '#ef4444', vec: [0.85, 0.25] },
          { word: '恐惧', x: 360, y: 295, color: '#ef4444', vec: [0.82, 0.18] },
          { word: '平静', x: 245, y: 190, color: '#6b7280', vec: [0.5, 0.52] },
          { word: '淡然', x: 275, y: 210, color: '#6b7280', vec: [0.55, 0.48] }
        ]
      }
    }
  },
  pipeline: {
    title: '嵌入生成流水线',
    desc: '逐步体验从文本到向量的完整转换过程',
    inputLabel: '输入文本',
    placeholder: '输入一段文本，观察嵌入生成过程...',
    defaultText: '今天天气真不错，适合出去散步',
    fallbackText: '你好世界',
    processing: '处理中...',
    start: '开始处理',
    finalTitle: '嵌入向量已生成',
    vectorNote:
      '实际嵌入向量通常有 768~1536 个维度，这里仅展示前 16 维的模拟值',
    modelOutput: '{count} 个 Token -> {count} x 768 维隐藏状态矩阵',
    poolOutput: 'Mean Pooling: {count} 个向量 -> 1 个 768 维句子向量',
    normalizeOutput: 'L2 归一化: ||v|| = 1.0000',
    steps: [
      {
        key: 'tokenize',
        title: '分词 (Tokenize)',
        desc: '将文本拆分为模型可处理的 Token 序列',
        color: '#3b82f6'
      },
      {
        key: 'encode',
        title: '编码 (Encode)',
        desc: '将 Token 映射为数字 ID',
        color: '#8b5cf6'
      },
      {
        key: 'model',
        title: '模型推理 (Model)',
        desc: '通过 Transformer 模型生成上下文感知的向量表示',
        color: '#10b981'
      },
      {
        key: 'pool',
        title: '池化 (Pooling)',
        desc: '将多个 Token 向量聚合为单一句子向量',
        color: '#f59e0b'
      },
      {
        key: 'normalize',
        title: '归一化 (Normalize)',
        desc: '将向量缩放到单位长度，便于余弦相似度计算',
        color: '#ef4444'
      }
    ]
  },
  database: {
    title: '主流向量数据库对比',
    desc: '点击卡片查看详细信息，了解不同向量数据库的特点与适用场景',
    labels: {
      license: '开源协议',
      index: '索引算法',
      maxDim: '最大维度',
      useCase: '适用场景',
      perf: '性能',
      ease: '易用性',
      scale: '扩展性'
    },
    scenarioTitle: '场景推荐',
    databases: [
      {
        name: 'Pinecone',
        type: '全托管云服务',
        icon: 'P',
        color: '#3b82f6',
        tags: ['云原生', 'Serverless'],
        license: '商业',
        index: 'Proprietary ANN',
        maxDim: '20,000',
        useCase: '快速上线的 AI 应用',
        description:
          '全托管向量数据库，无需运维，按用量付费。适合初创团队和快速原型开发。',
        perf: 85,
        ease: 95,
        scale: 80
      },
      {
        name: 'Milvus',
        type: '开源分布式',
        icon: 'M',
        color: '#10b981',
        tags: ['开源', '分布式', '高性能'],
        license: 'Apache 2.0',
        index: 'IVF / HNSW / DiskANN',
        maxDim: '32,768',
        useCase: '大规模企业级检索',
        description:
          '支持十亿级向量的分布式数据库，提供丰富的索引类型和混合查询能力。',
        perf: 95,
        ease: 65,
        scale: 95
      },
      {
        name: 'Weaviate',
        type: '开源 AI 原生',
        icon: 'W',
        color: '#8b5cf6',
        tags: ['开源', 'GraphQL', '模块化'],
        license: 'BSD-3',
        index: 'HNSW',
        maxDim: '65,536',
        useCase: '语义搜索与多模态',
        description:
          '内置向量化模块，支持文本、图像等多模态数据的自动嵌入和检索。',
        perf: 80,
        ease: 85,
        scale: 80
      },
      {
        name: 'Chroma',
        type: '轻量级嵌入式',
        icon: 'C',
        color: '#f59e0b',
        tags: ['开源', '轻量', 'Python'],
        license: 'Apache 2.0',
        index: 'HNSW',
        maxDim: '无限制',
        useCase: '本地开发与 RAG 原型',
        description:
          '极简 API 设计，几行代码即可集成。非常适合 LangChain / LlamaIndex 生态。',
        perf: 60,
        ease: 98,
        scale: 40
      },
      {
        name: 'pgvector',
        type: 'PostgreSQL 扩展',
        icon: 'pg',
        color: '#ef4444',
        tags: ['SQL', 'PostgreSQL', '扩展'],
        license: 'PostgreSQL',
        index: 'IVFFlat / HNSW',
        maxDim: '16,000',
        useCase: '已有 PG 基础设施的团队',
        description:
          '在现有 PostgreSQL 中添加向量能力，无需引入新的数据库。支持 SQL 混合查询。',
        perf: 65,
        ease: 80,
        scale: 60
      }
    ],
    scenarios: [
      { icon: '&#x1F680;', title: '快速原型', recommend: 'Chroma / Pinecone' },
      {
        icon: '&#x1F3E2;',
        title: '企业级部署',
        recommend: 'Milvus / Weaviate'
      },
      { icon: '&#x1F4BE;', title: '已有 PG 数据库', recommend: 'pgvector' },
      { icon: '&#x1F916;', title: 'RAG 应用', recommend: 'Chroma / Weaviate' }
    ]
  },
  index: {
    title: '向量索引策略对比',
    desc: '对比暴力搜索与近似最近邻搜索的效率差异',
    searching: '搜索中...',
    startSearch: '开始搜索',
    queryPoint: '查询点',
    stats: ['数据点总数', '访问节点数', '搜索效率', '找到最近 K 个'],
    headers: ['策略', '时间复杂度', '精确度', '适用场景'],
    rows: [
      ['暴力搜索', 'O(n)', '100%', '小数据集 (<10K)', 'brute'],
      ['ANN (IVF)', 'O(n/k)', '~95%', '大数据集 (>100K)', 'ann'],
      ['HNSW', 'O(log n)', '~98%', '高性能检索', '']
    ],
    modes: [
      { key: 'brute', label: '暴力搜索' },
      { key: 'ann', label: 'ANN 近似搜索' }
    ]
  },
  similarity: {
    title: '向量相似度计算器',
    desc: '拖动向量端点，观察不同相似度指标的实时变化',
    cosine: '余弦相似度',
    euclidean: '欧氏距离',
    dot: '点积',
    cosineRange: '-1 (相反) ~ 1 (相同)',
    euclideanRange: '0 (完全重合) ~ ∞ (无穷远)',
    dotHint: 'dot(A, B) = |A||B|cosθ',
    infoCosine: '余弦相似度',
    infoEuclidean: '欧氏距离',
    infoText: '只关注方向，不关注长度，适合文本语义比较；',
    infoText2: '同时考虑方向和大小，适合需要绝对距离的场景。',
    metrics: [
      { key: 'cosine', label: '余弦相似度' },
      { key: 'euclidean', label: '欧氏距离' }
    ]
  }
}
