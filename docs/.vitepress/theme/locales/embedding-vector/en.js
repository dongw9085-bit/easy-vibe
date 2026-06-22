export default {
  common: {},
  concept: {
    title: 'Word Embedding Space Visualization',
    desc: 'Semantically similar words stay closer in vector space and form natural clusters',
    axisX: 'Dimension 1',
    axisY: 'Dimension 2',
    vectorLabel: 'Vector',
    info: 'Embedding models map text into high-dimensional vector spaces, often 768 to 1536 dimensions. This demo simplifies that into 2D to show the core idea: ',
    infoStrong: 'semantically similar words have shorter vector distances',
    categories: [
      { key: 'animals-royalty', label: 'Animals vs royalty' },
      { key: 'food-tech', label: 'Food vs tech' },
      { key: 'emotions', label: 'Emotion words' }
    ],
    dataMap: {
      'animals-royalty': {
        clusters: [
          {
            label: 'Animals',
            cx: 150,
            cy: 160,
            rx: 80,
            ry: 65,
            color: '#10b981'
          },
          {
            label: 'Royalty',
            cx: 370,
            cy: 200,
            rx: 75,
            ry: 60,
            color: '#8b5cf6'
          }
        ],
        points: [
          { word: 'Cat', x: 120, y: 140, color: '#10b981', vec: [0.21, 0.68] },
          { word: 'Dog', x: 160, y: 180, color: '#10b981', vec: [0.28, 0.55] },
          {
            word: 'Tiger',
            x: 185,
            y: 130,
            color: '#10b981',
            vec: [0.35, 0.72]
          },
          {
            word: 'Rabbit',
            x: 130,
            y: 195,
            color: '#10b981',
            vec: [0.22, 0.48]
          },
          { word: 'King', x: 350, y: 175, color: '#8b5cf6', vec: [0.82, 0.58] },
          {
            word: 'Queen',
            x: 390,
            y: 195,
            color: '#8b5cf6',
            vec: [0.88, 0.52]
          },
          {
            word: 'Prince',
            x: 360,
            y: 225,
            color: '#8b5cf6',
            vec: [0.84, 0.42]
          },
          {
            word: 'Princess',
            x: 395,
            y: 215,
            color: '#8b5cf6',
            vec: [0.89, 0.45]
          }
        ]
      },
      'food-tech': {
        clusters: [
          { label: 'Food', cx: 140, cy: 240, rx: 85, ry: 70, color: '#f59e0b' },
          { label: 'Tech', cx: 360, cy: 120, rx: 80, ry: 65, color: '#3b82f6' }
        ],
        points: [
          {
            word: 'Apple (fruit)',
            x: 110,
            y: 220,
            color: '#f59e0b',
            vec: [0.15, 0.38]
          },
          {
            word: 'Bread',
            x: 155,
            y: 260,
            color: '#f59e0b',
            vec: [0.25, 0.28]
          },
          { word: 'Milk', x: 130, y: 280, color: '#f59e0b', vec: [0.2, 0.22] },
          { word: 'Cake', x: 175, y: 230, color: '#f59e0b', vec: [0.3, 0.35] },
          {
            word: 'Computer',
            x: 340,
            y: 100,
            color: '#3b82f6',
            vec: [0.78, 0.82]
          },
          {
            word: 'Phone',
            x: 375,
            y: 130,
            color: '#3b82f6',
            vec: [0.85, 0.75]
          },
          { word: 'Chip', x: 355, y: 150, color: '#3b82f6', vec: [0.82, 0.7] },
          {
            word: 'Algorithm',
            x: 390,
            y: 110,
            color: '#3b82f6',
            vec: [0.88, 0.8]
          }
        ]
      },
      emotions: {
        clusters: [
          {
            label: 'Positive',
            cx: 150,
            cy: 130,
            rx: 90,
            ry: 70,
            color: '#10b981'
          },
          {
            label: 'Negative',
            cx: 360,
            cy: 270,
            rx: 85,
            ry: 65,
            color: '#ef4444'
          },
          {
            label: 'Neutral',
            cx: 260,
            cy: 200,
            rx: 60,
            ry: 45,
            color: '#6b7280'
          }
        ],
        points: [
          { word: 'Joy', x: 120, y: 110, color: '#10b981', vec: [0.15, 0.78] },
          {
            word: 'Happy',
            x: 155,
            y: 130,
            color: '#10b981',
            vec: [0.22, 0.72]
          },
          {
            word: 'Excited',
            x: 180,
            y: 100,
            color: '#10b981',
            vec: [0.28, 0.82]
          },
          { word: 'Sad', x: 340, y: 250, color: '#ef4444', vec: [0.78, 0.3] },
          {
            word: 'Angry',
            x: 380,
            y: 270,
            color: '#ef4444',
            vec: [0.85, 0.25]
          },
          { word: 'Fear', x: 360, y: 295, color: '#ef4444', vec: [0.82, 0.18] },
          { word: 'Calm', x: 245, y: 190, color: '#6b7280', vec: [0.5, 0.52] },
          {
            word: 'Detached',
            x: 275,
            y: 210,
            color: '#6b7280',
            vec: [0.55, 0.48]
          }
        ]
      }
    }
  },
  pipeline: {
    title: 'Embedding Generation Pipeline',
    desc: 'Step through the full conversion from text to vector',
    inputLabel: 'Input text',
    placeholder: 'Enter text to observe embedding generation...',
    defaultText: 'The weather is great today, perfect for a walk',
    fallbackText: 'Hello world',
    processing: 'Processing...',
    start: 'Start processing',
    finalTitle: 'Embedding vector generated',
    vectorNote:
      'Real embedding vectors usually have 768 to 1536 dimensions. This demo shows only the first 16 simulated values.',
    modelOutput: '{count} tokens -> {count} x 768 hidden-state matrix',
    poolOutput:
      'Mean Pooling: {count} vectors -> one 768-dimensional sentence vector',
    normalizeOutput: 'L2 normalize: ||v|| = 1.0000',
    steps: [
      {
        key: 'tokenize',
        title: 'Tokenize',
        desc: 'Split text into token sequences the model can process',
        color: '#3b82f6'
      },
      {
        key: 'encode',
        title: 'Encode',
        desc: 'Map tokens to numeric IDs',
        color: '#8b5cf6'
      },
      {
        key: 'model',
        title: 'Model inference',
        desc: 'Generate context-aware vector representations through a Transformer model',
        color: '#10b981'
      },
      {
        key: 'pool',
        title: 'Pooling',
        desc: 'Aggregate token vectors into one sentence vector',
        color: '#f59e0b'
      },
      {
        key: 'normalize',
        title: 'Normalize',
        desc: 'Scale the vector to unit length for cosine similarity',
        color: '#ef4444'
      }
    ]
  },
  database: {
    title: 'Mainstream Vector Database Comparison',
    desc: 'Click a card to see details and compare use cases across vector databases',
    labels: {
      license: 'License',
      index: 'Index',
      maxDim: 'Max dimension',
      useCase: 'Use case',
      perf: 'Performance',
      ease: 'Ease of use',
      scale: 'Scalability'
    },
    scenarioTitle: 'Scenario recommendations',
    databases: [
      {
        name: 'Pinecone',
        type: 'Managed cloud service',
        icon: 'P',
        color: '#3b82f6',
        tags: ['Cloud native', 'Serverless'],
        license: 'Commercial',
        index: 'Proprietary ANN',
        maxDim: '20,000',
        useCase: 'Fast-launch AI apps',
        description:
          'Fully managed vector database with usage-based pricing and no operations burden. Good for startups and prototypes.',
        perf: 85,
        ease: 95,
        scale: 80
      },
      {
        name: 'Milvus',
        type: 'Open-source distributed',
        icon: 'M',
        color: '#10b981',
        tags: ['Open source', 'Distributed', 'High performance'],
        license: 'Apache 2.0',
        index: 'IVF / HNSW / DiskANN',
        maxDim: '32,768',
        useCase: 'Large enterprise search',
        description:
          'Distributed database for billion-scale vectors with rich index types and hybrid query support.',
        perf: 95,
        ease: 65,
        scale: 95
      },
      {
        name: 'Weaviate',
        type: 'Open-source AI native',
        icon: 'W',
        color: '#8b5cf6',
        tags: ['Open source', 'GraphQL', 'Modular'],
        license: 'BSD-3',
        index: 'HNSW',
        maxDim: '65,536',
        useCase: 'Semantic and multimodal search',
        description:
          'Built-in vectorization modules support automatic embedding and retrieval for text, images, and more.',
        perf: 80,
        ease: 85,
        scale: 80
      },
      {
        name: 'Chroma',
        type: 'Lightweight embedded',
        icon: 'C',
        color: '#f59e0b',
        tags: ['Open source', 'Lightweight', 'Python'],
        license: 'Apache 2.0',
        index: 'HNSW',
        maxDim: 'Unlimited',
        useCase: 'Local development and RAG prototypes',
        description:
          'Minimal API design that integrates in a few lines, especially in LangChain and LlamaIndex workflows.',
        perf: 60,
        ease: 98,
        scale: 40
      },
      {
        name: 'pgvector',
        type: 'PostgreSQL extension',
        icon: 'pg',
        color: '#ef4444',
        tags: ['SQL', 'PostgreSQL', 'Extension'],
        license: 'PostgreSQL',
        index: 'IVFFlat / HNSW',
        maxDim: '16,000',
        useCase: 'Teams with existing PG infrastructure',
        description:
          'Adds vector search to existing PostgreSQL without introducing a new database. Supports SQL hybrid queries.',
        perf: 65,
        ease: 80,
        scale: 60
      }
    ],
    scenarios: [
      {
        icon: '&#x1F680;',
        title: 'Fast prototype',
        recommend: 'Chroma / Pinecone'
      },
      {
        icon: '&#x1F3E2;',
        title: 'Enterprise deployment',
        recommend: 'Milvus / Weaviate'
      },
      {
        icon: '&#x1F4BE;',
        title: 'Existing PG database',
        recommend: 'pgvector'
      },
      { icon: '&#x1F916;', title: 'RAG app', recommend: 'Chroma / Weaviate' }
    ]
  },
  index: {
    title: 'Vector Index Strategy Comparison',
    desc: 'Compare brute-force search with approximate nearest neighbor search',
    searching: 'Searching...',
    startSearch: 'Start search',
    queryPoint: 'Query point',
    stats: [
      'Total points',
      'Visited nodes',
      'Search effort',
      'Nearest K found'
    ],
    headers: ['Strategy', 'Time complexity', 'Accuracy', 'Use case'],
    rows: [
      ['Brute force', 'O(n)', '100%', 'Small datasets (<10K)', 'brute'],
      ['ANN (IVF)', 'O(n/k)', '~95%', 'Large datasets (>100K)', 'ann'],
      ['HNSW', 'O(log n)', '~98%', 'High-performance retrieval', '']
    ],
    modes: [
      { key: 'brute', label: 'Brute force' },
      { key: 'ann', label: 'ANN approximate search' }
    ]
  },
  similarity: {
    title: 'Vector Similarity Calculator',
    desc: 'Drag vector endpoints to observe similarity metrics in real time',
    cosine: 'Cosine similarity',
    euclidean: 'Euclidean distance',
    dot: 'Dot product',
    cosineRange: '-1 (opposite) ~ 1 (same)',
    euclideanRange: '0 (identical) ~ ∞ (far away)',
    dotHint: 'dot(A, B) = |A||B|cosθ',
    infoCosine: 'Cosine similarity',
    infoEuclidean: 'Euclidean distance',
    infoText:
      'focuses only on direction and is useful for semantic text comparison; ',
    infoText2:
      'considers both direction and magnitude and fits absolute-distance scenarios.',
    metrics: [
      { key: 'cosine', label: 'Cosine similarity' },
      { key: 'euclidean', label: 'Euclidean distance' }
    ]
  }
}
