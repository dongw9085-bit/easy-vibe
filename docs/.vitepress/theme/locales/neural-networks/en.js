export default {
  neuron: {
    title: 'How a Neuron Works',
    subtitle: 'Adjust inputs and weights to see how the neuron output changes',
    inputWeightLabel: 'Input × Weight',
    weightedSumLabel: 'Weighted sum + bias ({bias})',
    activationLabel: 'Activation: {name}',
    biasLabel: 'Bias b',
    activationSelectLabel: 'Activation',
    activations: {
      sigmoid: 'Sigmoid',
      relu: 'ReLU',
      tanh: 'Tanh'
    }
  },
  layers: {
    title: 'Common Neural Network Layer Types',
    subtitle: 'Click a layer to inspect its role and parameters',
    labels: {
      params: 'Core parameters:',
      usage: 'Typical use:'
    },
    items: [
      {
        key: 'dense',
        name: 'Dense layer',
        desc: 'Each neuron connects to every neuron in the previous layer. This is the most basic layer type and learns combinations of input features.',
        params: ['units (number of neurons)', 'activation'],
        usage:
          'Output layers for classification or regression, and simple feature extraction',
        code: 'Dense(128, activation="relu")'
      },
      {
        key: 'conv',
        name: 'Convolution layer',
        desc: 'Scans the input with sliding windows, or kernels, to extract local features. Parameter sharing greatly reduces parameter count and makes it central to image processing.',
        params: ['filters', 'kernel_size', 'stride'],
        usage: 'Image classification, object detection, image segmentation',
        code: 'Conv2D(64, kernel_size=3, stride=1, padding=1)'
      },
      {
        key: 'rnn',
        name: 'Recurrent layer',
        desc: 'Has a memory-like state and can process sequence data. Each time step feeds its output into the next step, forming a recurrent loop.',
        params: ['hidden_size', 'num_layers'],
        usage: 'Text generation, speech recognition, time-series prediction',
        code: 'LSTM(hidden_size=256, num_layers=2)'
      },
      {
        key: 'attention',
        name: 'Attention layer',
        desc: 'Lets the model learn which parts of the input matter most. It is the core of Transformer models and changed modern NLP.',
        params: ['embed_dim', 'num_heads'],
        usage:
          'Large language models such as GPT and BERT, machine translation',
        code: 'MultiHeadAttention(embed_dim=512, num_heads=8)'
      },
      {
        key: 'norm',
        name: 'Normalization layer',
        desc: 'Normalizes data into a stable range, speeds up training convergence, and reduces vanishing or exploding gradient problems.',
        params: ['num_features'],
        usage:
          'Used in most deep networks, often after convolution or dense layers',
        code: 'BatchNorm2d(64) / LayerNorm(512)'
      },
      {
        key: 'dropout',
        name: 'Dropout layer',
        desc: 'Randomly disables some neurons during training, preventing the network from relying too heavily on specific features. It is a common regularization method.',
        params: ['p (drop probability, usually 0.1-0.5)'],
        usage: 'Preventing overfitting and improving generalization',
        code: 'Dropout(p=0.3)'
      }
    ]
  },
  architecture: {
    title: 'Common Neural Network Architectures',
    subtitle:
      'Click to inspect each architecture, its characteristics, and applications',
    labels: {
      structure: 'Network structure',
      applications: 'Typical applications',
      keyIdea: 'Key idea:'
    },
    items: [
      {
        key: 'ffn',
        name: 'Feedforward neural network',
        abbr: 'FNN',
        year: '1958',
        desc: 'The most basic neural network structure. Data flows one way from the input layer through hidden layers to the output layer, with no recurrence. Neurons in each layer connect to all neurons in the next layer.',
        layers: ['Input layer', 'Hidden layers ×N', 'Output layer'],
        applications: [
          'Classification',
          'Regression',
          'Function approximation'
        ],
        keyIdea:
          'Map inputs to outputs through multiple nonlinear transformations. More layers can represent more complex functions.'
      },
      {
        key: 'cnn',
        name: 'Convolutional neural network',
        abbr: 'CNN',
        year: '1998',
        desc: 'Designed for grid-like data such as images. Convolution kernels slide over inputs to extract local features, pooling reduces dimensions, and dense layers perform final classification. Parameter sharing greatly reduces parameter count.',
        layers: [
          'Input',
          'Convolution',
          'Pooling',
          '...',
          'Dense layer',
          'Output'
        ],
        applications: [
          'Image classification',
          'Object detection',
          'Face recognition',
          'Medical imaging'
        ],
        keyIdea:
          'Local receptive fields plus parameter sharing. A kernel focuses on a local region and shares the same parameters across the whole image.'
      },
      {
        key: 'rnn',
        name: 'Recurrent neural network',
        abbr: 'RNN/LSTM',
        year: '1997',
        desc: 'Designed for sequence data. Hidden state passes to the next time step, giving the network memory. LSTM gates help address vanishing gradients in long sequences.',
        layers: [
          'Input sequence',
          'Recurrent layer with memory',
          '...',
          'Output sequence'
        ],
        applications: [
          'Machine translation',
          'Speech recognition',
          'Time-series prediction',
          'Text generation'
        ],
        keyIdea:
          'Introduce recurrent connections over time so the network can handle variable-length sequences while preserving context.'
      },
      {
        key: 'transformer',
        name: 'Transformer',
        abbr: 'Transformer',
        year: '2017',
        desc: 'Replaces recurrence with self-attention and processes whole sequences in parallel. Every position can directly attend to any other position, solving long-distance dependency problems in RNNs. It is the foundation of GPT, BERT, and many large models.',
        layers: [
          'Input embeddings',
          'Positional encoding',
          'Multi-head attention',
          'Feedforward network',
          '...×N',
          'Output'
        ],
        applications: [
          'ChatGPT',
          'BERT',
          'Machine translation',
          'Code generation',
          'Image generation'
        ],
        keyIdea:
          'Self-attention lets every element in a sequence see all other elements and compute relevance weights.'
      },
      {
        key: 'gan',
        name: 'Generative adversarial network',
        abbr: 'GAN',
        year: '2014',
        desc: 'Trains a generator and discriminator in competition. The generator tries to create realistic data, while the discriminator tries to distinguish real from fake. Their game makes the generator stronger over time.',
        layers: [
          'Random noise',
          'Generator',
          'Generated data',
          'Discriminator',
          'Real/Fake'
        ],
        applications: [
          'Image generation',
          'Style transfer',
          'Super-resolution',
          'Data augmentation'
        ],
        keyIdea:
          'Adversarial training: the generator and discriminator compete and improve together until the generator can produce realistic data.'
      }
    ]
  }
}
