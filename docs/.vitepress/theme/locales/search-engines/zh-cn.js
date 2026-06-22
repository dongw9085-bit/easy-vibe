export default {
  invertedIndex: {
    title: '倒排索引 (Inverted Index)',
    subtitle: '输入搜索词，观察倒排索引如何工作',
    placeholder: '试试搜索：苹果、手机、水果...',
    sourceTitle: '原始文档',
    indexTitle: '倒排索引表',
    hitPrefix: '命中文档：',
    noMatch: '未找到匹配文档',
    joiner: '、',
    docs: [
      { id: 1, text: '苹果是一种常见的水果' },
      { id: 2, text: '苹果公司发布了新款手机' },
      { id: 3, text: '我喜欢吃水果和蔬菜' },
      { id: 4, text: '这款手机的价格很实惠' },
      { id: 5, text: '水果店里有苹果和香蕉' }
    ],
    index: {
      苹果: [1, 2, 5],
      水果: [1, 3, 5],
      手机: [2, 4],
      公司: [2],
      发布: [2],
      喜欢: [3],
      蔬菜: [3],
      价格: [4],
      实惠: [4],
      香蕉: [5],
      常见: [1]
    }
  },
  relevance: {
    title: '搜索相关性评分',
    subtitle: '输入查询词，观察不同文档的相关性得分',
    placeholder: '输入搜索词，如：数据库',
    button: '计算得分',
    infoTitle: 'BM25 评分因子',
    factors: [
      {
        name: '词频 (TF)',
        desc: '关键词在文档中出现的次数越多，得分越高（但有上限）'
      },
      {
        name: '逆文档频率 (IDF)',
        desc: '越稀有的词权重越高，"的"这种常见词权重很低'
      },
      {
        name: '文档长度',
        desc: '较短文档中出现关键词，比长文档中出现更有意义'
      }
    ],
    documents: [
      {
        title: 'MySQL 数据库入门',
        snippet:
          '数据库是存储和管理数据的系统，MySQL 是最流行的关系型数据库之一',
        keywords: { 数据库: 3, 数据: 2, MySQL: 2, 存储: 1 }
      },
      {
        title: 'Redis 缓存设计',
        snippet: 'Redis 是内存数据库，常用作缓存层，提升数据读取性能',
        keywords: { Redis: 2, 缓存: 2, 数据库: 1, 数据: 1, 性能: 1 }
      },
      {
        title: 'Python 数据分析',
        snippet: '使用 Python 进行数据清洗、分析和可视化',
        keywords: { Python: 2, 数据: 3, 分析: 2, 可视化: 1 }
      },
      {
        title: '分布式数据库架构',
        snippet: '分布式数据库通过分片和复制实现高可用和水平扩展',
        keywords: { 分布式: 2, 数据库: 2, 分片: 1, 高可用: 1 }
      },
      {
        title: 'API 接口设计',
        snippet: 'RESTful API 设计规范与最佳实践',
        keywords: { API: 3, 设计: 2, RESTful: 1 }
      }
    ]
  }
}
