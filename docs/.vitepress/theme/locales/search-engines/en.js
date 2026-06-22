export default {
  invertedIndex: {
    title: 'Inverted Index',
    subtitle: 'Type a search term to see how an inverted index works',
    placeholder: 'Try searching: apple, phone, fruit...',
    sourceTitle: 'Source documents',
    indexTitle: 'Inverted index table',
    hitPrefix: 'Matched documents: ',
    noMatch: 'No matching documents found',
    joiner: ', ',
    docs: [
      { id: 1, text: 'Apple is a common fruit' },
      { id: 2, text: 'Apple released a new phone' },
      { id: 3, text: 'I like eating fruit and vegetables' },
      { id: 4, text: 'This phone has a practical price' },
      { id: 5, text: 'The fruit shop has apples and bananas' }
    ],
    index: {
      apple: [1, 2, 5],
      fruit: [1, 3, 5],
      phone: [2, 4],
      company: [2],
      release: [2],
      like: [3],
      vegetables: [3],
      price: [4],
      practical: [4],
      banana: [5],
      common: [1]
    }
  },
  relevance: {
    title: 'Search Relevance Scoring',
    subtitle: 'Enter a query and compare relevance scores across documents',
    placeholder: 'Enter a search term, such as database',
    button: 'Calculate score',
    infoTitle: 'BM25 scoring factors',
    factors: [
      {
        name: 'Term frequency (TF)',
        desc: 'The more often a keyword appears in a document, the higher its score, up to a limit.'
      },
      {
        name: 'Inverse document frequency (IDF)',
        desc: 'Rarer terms receive more weight, while common words receive little weight.'
      },
      {
        name: 'Document length',
        desc: 'A keyword appearing in a shorter document is usually more meaningful than the same keyword in a long document.'
      }
    ],
    documents: [
      {
        title: 'MySQL Database Basics',
        snippet:
          'A database stores and manages data, and MySQL is one of the most popular relational databases.',
        keywords: { database: 3, data: 2, MySQL: 2, storage: 1 }
      },
      {
        title: 'Redis Cache Design',
        snippet:
          'Redis is an in-memory database often used as a cache layer to improve data read performance.',
        keywords: { Redis: 2, cache: 2, database: 1, data: 1, performance: 1 }
      },
      {
        title: 'Python Data Analysis',
        snippet: 'Use Python for data cleaning, analysis, and visualization.',
        keywords: { Python: 2, data: 3, analysis: 2, visualization: 1 }
      },
      {
        title: 'Distributed Database Architecture',
        snippet:
          'Distributed databases use sharding and replication for high availability and horizontal scaling.',
        keywords: { distributed: 2, database: 2, sharding: 1, availability: 1 }
      },
      {
        title: 'API Interface Design',
        snippet: 'RESTful API design guidelines and best practices.',
        keywords: { API: 3, design: 2, RESTful: 1 }
      }
    ]
  }
}
