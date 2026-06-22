export default {
  neuron: {
    title: '神经元工作原理',
    subtitle: '调整输入和权重，观察神经元的输出变化',
    inputWeightLabel: '输入 × 权重',
    weightedSumLabel: '加权求和 + 偏置({bias})',
    activationLabel: '激活函数: {name}',
    biasLabel: '偏置 b',
    activationSelectLabel: '激活函数',
    activations: {
      sigmoid: 'Sigmoid',
      relu: 'ReLU',
      tanh: 'Tanh'
    }
  },
  layers: {
    title: '神经网络常见层类型',
    subtitle: '点击查看各层的作用和参数',
    labels: {
      params: '核心参数：',
      usage: '典型用途：'
    },
    items: [
      {
        key: 'dense',
        name: '全连接层',
        desc: '每个神经元与上一层所有神经元相连。最基础的层类型，用于学习输入特征的组合。',
        params: ['units（神经元数）', 'activation（激活函数）'],
        usage: '分类、回归任务的输出层，以及简单特征提取',
        code: 'Dense(128, activation="relu")'
      },
      {
        key: 'conv',
        name: '卷积层',
        desc: '用滑动窗口（卷积核）扫描输入，提取局部特征。参数共享大幅减少参数量，是图像处理的核心。',
        params: [
          'filters（卷积核数）',
          'kernel_size（核大小）',
          'stride（步长）'
        ],
        usage: '图像分类、目标检测、图像分割',
        code: 'Conv2D(64, kernel_size=3, stride=1, padding=1)'
      },
      {
        key: 'rnn',
        name: '循环层',
        desc: '具有"记忆"能力，能处理序列数据。每个时间步的输出会作为下一步的输入，形成循环。',
        params: ['hidden_size（隐藏维度）', 'num_layers（层数）'],
        usage: '文本生成、语音识别、时间序列预测',
        code: 'LSTM(hidden_size=256, num_layers=2)'
      },
      {
        key: 'attention',
        name: '注意力层',
        desc: '让模型学会"关注"输入中最重要的部分。Transformer 的核心，彻底改变了 NLP 领域。',
        params: ['embed_dim（嵌入维度）', 'num_heads（注意力头数）'],
        usage: 'GPT、BERT 等大语言模型，机器翻译',
        code: 'MultiHeadAttention(embed_dim=512, num_heads=8)'
      },
      {
        key: 'norm',
        name: '归一化层',
        desc: '将数据标准化到合理范围，加速训练收敛，缓解梯度消失/爆炸问题。',
        params: ['num_features（特征数）'],
        usage: '几乎所有深度网络中都会使用，通常跟在卷积或全连接层后面',
        code: 'BatchNorm2d(64) / LayerNorm(512)'
      },
      {
        key: 'dropout',
        name: 'Dropout 层',
        desc: '训练时随机"关闭"一部分神经元，防止网络过度依赖某些特征，是最常用的正则化手段。',
        params: ['p（丢弃概率，通常 0.1~0.5）'],
        usage: '防止过拟合，提升模型泛化能力',
        code: 'Dropout(p=0.3)'
      }
    ]
  },
  architecture: {
    title: '常见神经网络架构',
    subtitle: '点击查看不同网络架构的特点和应用',
    labels: {
      structure: '网络结构',
      applications: '典型应用',
      keyIdea: '核心思想：'
    },
    items: [
      {
        key: 'ffn',
        name: '前馈神经网络',
        abbr: 'FNN',
        year: '1958',
        desc: '最基础的神经网络结构，数据从输入层经过隐藏层到输出层，单向流动，没有循环。每一层的每个神经元与下一层的所有神经元相连（全连接）。',
        layers: ['输入层', '隐藏层 ×N', '输出层'],
        applications: ['分类', '回归', '函数逼近'],
        keyIdea:
          '通过多层非线性变换，将输入映射到输出。层数越多，能表达的函数越复杂。'
      },
      {
        key: 'cnn',
        name: '卷积神经网络',
        abbr: 'CNN',
        year: '1998',
        desc: '专为处理网格状数据（如图像）设计。通过卷积核在输入上滑动提取局部特征，池化层降低维度，最后全连接层做分类。参数共享大幅减少了参数量。',
        layers: ['输入', '卷积层', '池化层', '...', '全连接层', '输出'],
        applications: ['图像分类', '目标检测', '人脸识别', '医学影像'],
        keyIdea:
          '局部感受野 + 参数共享。卷积核只关注局部区域，同一个卷积核在整张图上共享参数。'
      },
      {
        key: 'rnn',
        name: '循环神经网络',
        abbr: 'RNN/LSTM',
        year: '1997',
        desc: '专为处理序列数据设计。隐藏状态会传递到下一个时间步，让网络具有"记忆"能力。LSTM 通过门控机制解决了长序列中的梯度消失问题。',
        layers: ['输入序列', '循环层(含记忆)', '...', '输出序列'],
        applications: ['机器翻译', '语音识别', '时间序列预测', '文本生成'],
        keyIdea:
          '引入时间维度的循环连接，让网络能处理变长序列并保持上下文记忆。'
      },
      {
        key: 'transformer',
        name: 'Transformer',
        abbr: 'Transformer',
        year: '2017',
        desc: '用自注意力机制替代循环结构，可以并行处理整个序列。每个位置都能直接关注序列中的任意其他位置，解决了 RNN 的长距离依赖问题。是 GPT、BERT 等大模型的基础。',
        layers: [
          '输入嵌入',
          '位置编码',
          '多头注意力',
          '前馈网络',
          '...×N',
          '输出'
        ],
        applications: ['ChatGPT', 'BERT', '机器翻译', '代码生成', '图像生成'],
        keyIdea:
          '自注意力（Self-Attention）：让序列中的每个元素都能"看到"其他所有元素，计算相关性权重。'
      },
      {
        key: 'gan',
        name: '生成对抗网络',
        abbr: 'GAN',
        year: '2014',
        desc: '由生成器和判别器两个网络对抗训练。生成器试图生成以假乱真的数据，判别器试图区分真假。两者博弈的结果是生成器越来越强。',
        layers: ['随机噪声', '生成器', '生成数据', '判别器', '真/假'],
        applications: ['图像生成', '风格迁移', '超分辨率', '数据增强'],
        keyIdea:
          '对抗训练：生成器和判别器互相博弈，共同进步，最终生成器能产生逼真的数据。'
      }
    ]
  }
}
