export default {
  audioWaveform: {
    wave: '🌊 声波',
    analog: '连续模拟信号',
    sampling: '📊 采样',
    sampleRate: '44100 点/秒',
    digital: '🔢 数字化',
    pcm: 'PCM 数据',
    explanation:
      '计算机无法直接处理连续的声波，需要把它转换成数字。这个过程叫<strong>模数转换 (ADC)</strong>：每隔一小段时间测量一次声音的强度，记录成数字。'
  },
  spectrogramViz: {
    waveformTitle: '🌊 波形 (Waveform)',
    timeAxis: '时间 (Time) →',
    amplitudeAxis: '振幅 (Amplitude) ↑',
    fft: 'FFT 变换',
    spectrogramTitle: '🎨 频谱图 (Spectrogram)',
    frequencyAxis: '频率 (Freq) ↑',
    alertTitle: '像看乐谱一样看声音',
    lowEnergy: '低能量 (安静)',
    highEnergy: '高能量 (响亮)',
    info: '频谱图将一维的声音信号变成了二维图像，这样我们就可以用 <strong>CNN (卷积神经网络)</strong> 等图像模型来处理声音了！'
  },
  autoregressiveAudio: {
    start: '开始对比演示',
    arTitle: '自回归 (Autoregressive)',
    flowTitle: '流匹配 (Flow Matching)',
    generationMode: '生成方式',
    serial: '串行 (Serial)',
    parallel: '并行 (Parallel)',
    speed: '速度',
    slow: '慢 (Slow)',
    fast: '极快 (Fast)',
    evolutionTitle: '技术演进',
    arStrong: '自回归',
    arInfo: '像人说话一样，必须说完上一个字才能说下一个字，所以很慢。',
    flowStrong: '流匹配',
    flowInfo:
      '像画画一样，可以同时在画布的所有角落开始上色，效率提升了 10-20 倍。'
  },
  melSpectrogram: {
    title: '📊 梅尔频谱：AI 如何“看懂”声音',
    subtitle:
      '声音是波，但 AI 看到的是频谱图。探索波形如何变成 AI 能理解的“图像”',
    fftWindow: 'FFT 窗口',
    melFilters: '梅尔滤波器',
    waveformTitle: '🔊 波形 (时域)',
    waveformDesc: '原始音频振幅随时间变化',
    stft: 'STFT 变换',
    linearTitle: '📈 线性频谱',
    linearTag: '高频分辨率低',
    melTitle: '🎯 梅尔频谱',
    melTag: '符合人耳感知',
    whyTitle: '🎧 为什么用梅尔刻度？',
    humanStrong: '人耳感知',
    humanText: '100Hz→200Hz 与 10000Hz→10100Hz 感知差异相同',
    linearStrong: '线性刻度',
    linearText: '等距频率间隔，不符合人耳感知',
    infoStrong: '梅尔频谱原理：',
    info: '梅尔刻度模拟了人耳对频率的非线性感知。人耳对低频变化更敏感，对高频变化较迟钝。梅尔频谱将频率映射到梅尔刻度，使 AI 更关注人耳敏感的部分。',
    audioTypes: [
      { id: 'speech', name: '语音', icon: '🗣️' },
      { id: 'music', name: '音乐', icon: '🎵' },
      { id: 'noise', name: '噪声', icon: '📢' }
    ]
  },
  audioTokenization: {
    title: '🎵 音频 Tokenization：神经编解码器',
    encoder: '🔽 编码器 (Encoder)',
    rawWaveform: '原始波形',
    cnnDownsample: 'CNN 下采样',
    dimensionReduction: '降维 320x',
    vq: 'VQ 量化',
    discreteToken: '离散 Token',
    compressed: '压缩后: ~1.5 kbps',
    decoder: '🔼 解码器 (Decoder)',
    codebookIndex: 'Codebook 索引',
    transposedConv: '转置卷积',
    upsample: '上采样',
    reconstructedWaveform: '重建波形',
    bitrateTitle: '📊 不同码率对比',
    sampleRate: '采样率:',
    frameRate: '帧率:',
    codebookSize: '码本大小:',
    tokenTitle: '🔢 Token 序列可视化',
    lowFreq: '低频成分',
    midFreq: '中频成分',
    highFreq: '高频成分',
    appsTitle: '🎯 为什么需要音频 Tokenization？',
    applications: [
      {
        icon: '🚀',
        title: '高效传输',
        desc: '将音频压缩到 ~1.5 kbps，比原始音频小 256 倍，适合网络传输'
      },
      {
        icon: '🧠',
        title: '语言模型友好',
        desc: '离散 Token 可以被 LLM 直接处理，实现文本到音频的统一建模'
      },
      {
        icon: '🎵',
        title: '音乐生成',
        desc: 'MusicGen、AudioLDM 等模型使用音频 Token 生成音乐和音效'
      },
      {
        icon: '🗣️',
        title: '语音合成',
        desc: 'VALL-E、SoundStorm 等 TTS 模型直接生成音频 Token'
      }
    ],
    infoStrong: '神经音频编解码器：',
    info: 'EnCodec (Meta)、SoundStream (Google)、SNAC 等模型使用 VQ-VAE 架构将音频压缩成离散 Token。这些 Token 可以被语言模型处理，实现高质量的音频生成和压缩。'
  },
  ttsPipeline: {
    title: '🔄 TTS 架构演进：从慢到快',
    subtitle: '探索文本如何变成语音，以及不同架构的优劣对比',
    input: '输入:',
    output: '输出:',
    tech: '技术:',
    comparisonTitle: '📊 架构对比',
    feature: '特性',
    modelsTitle: '🏆 代表模型',
    infoStrong: 'TTS 演进趋势：',
    info: '从早期的自回归模型（如 Tacotron）到非自回归（如 FastSpeech），再到最新的流匹配模型（如 F5-TTS），TTS 技术正在向更快、更稳定、更高质量的方向发展。',
    chartSerial: '逐个时间步生成',
    architectures: [
      { id: 'ar', name: '自回归', icon: '📝', tag: 'AR', tagClass: 'primary' },
      {
        id: 'nar',
        name: '非自回归',
        icon: '⚡',
        tag: 'NAR',
        tagClass: 'success'
      },
      {
        id: 'flow',
        name: '流匹配',
        icon: '🌊',
        tag: 'Flow',
        tagClass: 'warning'
      }
    ],
    pipelineStages: {
      ar: [
        {
          id: 'text',
          name: '文本处理',
          icon: '📝',
          shortDesc: '分词 & 音素',
          description: '将输入文本转换为音素序列',
          input: '原始文本',
          output: '音素序列',
          tech: 'G2P'
        },
        {
          id: 'encoder',
          name: '文本编码',
          icon: '🔢',
          shortDesc: '提取特征',
          description: '使用 Encoder 编码文本',
          input: '音素序列',
          output: '文本特征',
          tech: 'Transformer'
        },
        {
          id: 'decoder',
          name: '自回归解码',
          icon: '🎯',
          shortDesc: '逐帧生成',
          description: '逐个时间步生成梅尔频谱',
          input: '文本特征',
          output: '梅尔频谱',
          tech: 'AR Decoder'
        },
        {
          id: 'vocoder',
          name: '声码器',
          icon: '🔊',
          shortDesc: '频谱转波形',
          description: '将频谱转换为音频波形',
          input: '梅尔频谱',
          output: '音频波形',
          tech: 'HiFi-GAN'
        }
      ],
      nar: [
        {
          id: 'text',
          name: '文本处理',
          icon: '📝',
          shortDesc: '分词 & 音素',
          description: '将输入文本转换为音素序列',
          input: '原始文本',
          output: '音素序列',
          tech: 'G2P'
        },
        {
          id: 'duration',
          name: '时长预测',
          icon: '⏱️',
          shortDesc: '预测时长',
          description: '预测每个音素的帧数',
          input: '音素序列',
          output: '时长信息',
          tech: 'Duration Predictor'
        },
        {
          id: 'decoder',
          name: '并行解码',
          icon: '⚡',
          shortDesc: '一次性生成',
          description: '并行生成完整梅尔频谱',
          input: '文本特征',
          output: '梅尔频谱',
          tech: 'Non-AR Transformer'
        },
        {
          id: 'vocoder',
          name: '声码器',
          icon: '🔊',
          shortDesc: '频谱转波形',
          description: '将频谱转换为音频波形',
          input: '梅尔频谱',
          output: '音频波形',
          tech: 'HiFi-GAN'
        }
      ],
      flow: [
        {
          id: 'text',
          name: '文本处理',
          icon: '📝',
          shortDesc: '分词 & 音素',
          description: '将输入文本转换为音素序列',
          input: '原始文本',
          output: '音素序列',
          tech: 'G2P'
        },
        {
          id: 'embedding',
          name: '文本嵌入',
          icon: '🔢',
          shortDesc: '特征提取',
          description: '将音素转换为向量',
          input: '音素序列',
          output: '文本嵌入',
          tech: 'DiT'
        },
        {
          id: 'flow',
          name: '流匹配',
          icon: '🌊',
          shortDesc: '最优传输',
          description: '使用流匹配生成频谱',
          input: '文本嵌入',
          output: '梅尔频谱',
          tech: 'Flow Matching'
        },
        {
          id: 'vocoder',
          name: '声码器',
          icon: '🔊',
          shortDesc: '频谱转波形',
          description: '将频谱转换为音频波形',
          input: '梅尔频谱',
          output: '音频波形',
          tech: 'Vocoder'
        }
      ]
    },
    comparisonRows: [
      { feature: '生成速度', ar: '慢', nar: '快', flow: '很快' },
      { feature: '音质', ar: '高', nar: '中高', flow: '高' },
      { feature: '稳定性', ar: '中', nar: '高', flow: '高' },
      { feature: '可控性', ar: '中', nar: '高', flow: '高' }
    ],
    models: [
      {
        name: 'Tacotron 2',
        arch: 'ar',
        type: 'AR',
        tagClass: 'primary',
        desc: '经典 AR 模型，音质优秀'
      },
      {
        name: 'FastSpeech 2',
        arch: 'nar',
        type: 'NAR',
        tagClass: 'success',
        desc: '并行生成，速度快'
      },
      {
        name: 'F5-TTS',
        arch: 'flow',
        type: 'Flow',
        tagClass: 'warning',
        desc: '最新 SOTA，10 步生成'
      },
      {
        name: 'CosyVoice',
        arch: 'flow',
        type: 'Flow',
        tagClass: 'warning',
        desc: '阿里开源，支持多语言'
      }
    ]
  },
  voiceCloning: {
    title: '🎭 声音克隆：让 AI 模仿任何人',
    subtitle: '只需几秒钟的参考音频，AI 就能学会任何人的声音',
    referenceTitle: '提供参考音频',
    or: '或',
    upload: '📤 上传自己的音频',
    processTitle: 'AI 学习声音特征',
    featureLabel: '提取的声音特征向量',
    generateTitle: '输入文本生成语音',
    placeholder: '输入要合成的文本...',
    generate: '🎙 生成语音',
    result: '生成结果',
    similarity: '相似度: {value}%',
    pause: '⏸ 暂停',
    play: '▶ 播放',
    download: '⬇ 下载',
    tipsTitle: '💡 声音克隆小贴士',
    infoStrong: '技术原理：',
    info: '声音克隆通过提取参考音频的音色、语调和说话风格特征，构建说话人嵌入向量。生成时，TTS 模型结合文本内容和说话人嵌入，合成与参考声音相似的语音。',
    uploadAlert: '模拟：打开文件选择器',
    downloadAlert: '模拟：下载音频文件',
    modes: [
      { id: 'zeroshot', name: '零样本克隆', icon: '🎯' },
      { id: 'fewshot', name: '少样本克隆', icon: '📚' },
      { id: 'crosslingual', name: '跨语言克隆', icon: '🌍' }
    ],
    references: [
      { id: 'male1', name: '男声 A', avatar: '👨', desc: '低沉磁性' },
      { id: 'female1', name: '女声 B', avatar: '👩', desc: '温柔甜美' },
      { id: 'child', name: '童声', avatar: '🧒', desc: '活泼可爱' },
      { id: 'elder', name: '老人', avatar: '👴', desc: '沧桑稳重' }
    ],
    processSteps: [
      { id: 'load', name: '加载音频', icon: '📂' },
      { id: 'encode', name: '编码特征', icon: '🔢' },
      { id: 'extract', name: '提取音色', icon: '🎨' },
      { id: 'embed', name: '构建嵌入', icon: '💎' }
    ],
    tips: [
      {
        icon: '⏱️',
        title: '参考音频时长',
        text: '3-10 秒即可，质量比时长更重要'
      },
      { icon: '🔇', title: '环境要求', text: '安静环境，避免背景噪音' },
      { icon: '🗣️', title: '内容选择', text: '包含多种音调和语速效果更好' }
    ]
  },
  asrTts: {
    title: '🔄 ASR ↔ TTS：语音的双向转换',
    subtitle: '探索语音识别和语音合成的互逆过程',
    asrName: 'ASR 语音识别',
    asrDesc: '音频 → 文本',
    startRecording: '开始录音',
    stopRecording: '停止录音',
    or: '或',
    uploadAudio: '📁 上传音频',
    recognize: '🔍 识别语音',
    resultLabel: '识别结果',
    confidence: '置信度: {value}%',
    elapsed: '耗时: {value}ms',
    ttsName: 'TTS 语音合成',
    ttsDesc: '文本 → 音频',
    placeholder: '输入要合成的文本...',
    voiceLabel: '选择声音:',
    synthesize: '🗣 合成语音',
    synthesizedResult: '合成结果',
    comparisonTitle: '📊 ASR vs TTS 对比',
    input: '输入:',
    output: '输出:',
    difficulty: '难点:',
    architectureTitle: '🔀 架构对比',
    audio: '音频',
    feature: '特征',
    text: '文本',
    vocoder: '声码器',
    infoStrong: '互逆关系：',
    info: 'ASR 和 TTS 是语音技术的两个核心方向，互为逆过程。ASR 将连续的音频信号转换为离散的文本，TTS 则将离散的文本转换为连续的音频信号。两者都依赖于声学模型和语言模型。',
    asrSampleResult: '这是一段示例语音识别结果，展示了 ASR 的工作效果。',
    voices: [
      { id: 'default', name: '默认', icon: '🎙️' },
      { id: 'male', name: '男声', icon: '👨' },
      { id: 'female', name: '女声', icon: '👩' },
      { id: 'child', name: '童声', icon: '🧒' }
    ],
    comparisonCards: [
      {
        id: 'asr',
        icon: '🎙️',
        name: 'ASR',
        items: [
          { label: '输入:', value: '音频波形' },
          { label: '输出:', value: '文本序列' },
          { label: '难点:', value: '噪声、口音、同音词' }
        ]
      },
      {
        id: 'tts',
        icon: '🔊',
        name: 'TTS',
        items: [
          { label: '输入:', value: '文本序列' },
          { label: '输出:', value: '音频波形' },
          { label: '难点:', value: '韵律、情感、自然度' }
        ]
      }
    ]
  },
  emotionControl: {
    title: '🎭 情感与风格控制',
    selectorTitle: '选择情感风格',
    embeddingTitle: '情感向量空间 (Emotion Embedding)',
    controlTitle: '🎚️ 细粒度控制',
    speed: '语速',
    pitch: '音调',
    energy: '音量动态',
    pause: '停顿控制',
    slow: '慢',
    normal: '正常',
    fast: '快',
    low: '低',
    high: '高',
    soft: '柔和',
    moderate: '适中',
    intense: '激昂',
    compact: '紧凑',
    natural: '自然',
    relaxed: '舒缓',
    previewTitle: '🎙️ 预览合成',
    placeholder: '输入要合成的文本...',
    synthesize: '合成预览',
    reset: '重置参数',
    explanationTitle: '🔬 情感控制原理',
    gstTitle: '全局风格 Token (Global Style Token)',
    gstText:
      'GST (Global Style Token) 是一种从参考音频中提取风格特征的方法。模型学习将情感、语速、语调等风格信息编码成一组 Token，在推理时可以通过选择或插值这些 Token 来控制合成风格。',
    referenceTitle: '参考音频编码',
    referenceText:
      '用户提供一段带有目标情感的参考音频，编码器提取其风格特征向量。这个向量作为条件输入到 TTS 模型，指导生成相似风格的语音。',
    fineTitle: '细粒度控制',
    fineText:
      '现代 TTS 模型（如 CosyVoice、F5-TTS）支持细粒度的风格控制，包括：',
    infoStrong: '情感控制：',
    info: '现代 TTS 系统不仅能合成自然的语音，还能精确控制情感、语速、语调等风格特征。这使得 AI 配音可以适应不同的应用场景，从平静的客服对话到激昂的演讲。',
    defaultPreview: '这是一段带有情感控制的语音合成演示。',
    valenceAxis: 'Valence (消极 → 积极)',
    arousalAxis: 'Arousal (平静 → 兴奋)',
    emotions: [
      {
        id: 'neutral',
        name: '中性',
        emoji: '😐',
        description: '平稳自然',
        color: '#909399'
      },
      {
        id: 'happy',
        name: '开心',
        emoji: '😊',
        description: '轻快愉悦',
        color: '#67c23a'
      },
      {
        id: 'sad',
        name: '悲伤',
        emoji: '😢',
        description: '低沉缓慢',
        color: '#409eff'
      },
      {
        id: 'angry',
        name: '愤怒',
        emoji: '😠',
        description: '激昂有力',
        color: '#f56c6c'
      },
      {
        id: 'excited',
        name: '兴奋',
        emoji: '🤩',
        description: '热情高涨',
        color: '#e6a23c'
      },
      {
        id: 'calm',
        name: '平静',
        emoji: '😌',
        description: '舒缓放松',
        color: '#13c2c2'
      }
    ],
    fineItems: [
      { strong: '速度控制：', text: '调整音频播放速度而不改变音调' },
      { strong: '音调控制：', text: '改变基频 (F0) 曲线' },
      { strong: '能量控制：', text: '调整音量包络' },
      { strong: '停顿控制：', text: '调整句间和短语间的停顿长度' }
    ]
  },
  quickStart: {
    title: '🎙️ AI 音频初体验：让机器开口说话',
    subtitle: '从语音合成到声音克隆，探索 AI 如何让机器拥有“声音”',
    empty: '选择一个场景开始体验 AI 音频',
    ttsPlaceholder: '输入要合成的文本...',
    voiceLabel: '声音:',
    processing: '合成中...',
    synthesize: '🎙️ 合成语音',
    startRecording: '开始录音',
    stopRecording: '停止录音',
    resultLabel: '识别结果:',
    stepReference: '录制参考音频',
    done: '✓ 已完成',
    recordFiveSeconds: '🎙️ 录制 5 秒',
    extractVoiceprint: '提取声纹特征',
    analyzing: '分析中...',
    synthesizeCloned: '合成克隆语音',
    clonePlaceholder: '输入要合成的文本',
    synthesizeShort: '合成',
    cloneSuccess: '✓ 克隆成功!',
    embeddingTitle: '声纹特征向量 (256维)',
    defaultTtsText: '你好，我是 AI 语音助手。',
    defaultCloneText: '这是用我的声音克隆合成的语音。',
    transcription: '今天天气真不错，适合出去散步。',
    scenes: [
      { id: 'tts', name: '语音合成', icon: '🗣️' },
      { id: 'asr', name: '语音识别', icon: '🎤' },
      { id: 'clone', name: '声音克隆', icon: '🎭' }
    ],
    voices: [
      { id: 'female1', name: '女声A', icon: '👩' },
      { id: 'male1', name: '男声B', icon: '👨' },
      { id: 'female2', name: '女声C', icon: '👧' }
    ],
    tips: [
      { icon: '💡', text: 'TTS: 文本转语音，让 AI 朗读任意文字' },
      { icon: '🎯', text: 'ASR: 语音识别，将语音转为文字' },
      { icon: '🎭', text: '声音克隆: 只需几秒音频，复制任何人的声音' }
    ]
  }
}
