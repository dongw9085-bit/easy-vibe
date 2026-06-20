export default {
  audioWaveform: {
    wave: '🌊 Sound wave',
    analog: 'Continuous analog signal',
    sampling: '📊 Sampling',
    sampleRate: '44,100 points/second',
    digital: '🔢 Digitized',
    pcm: 'PCM data',
    explanation:
      'Computers cannot directly process continuous sound waves, so sound must be converted into numbers. This process is called <strong>analog-to-digital conversion (ADC)</strong>: measure sound intensity at short intervals and record it as numbers.'
  },
  spectrogramViz: {
    waveformTitle: '🌊 Waveform',
    timeAxis: 'Time →',
    amplitudeAxis: 'Amplitude ↑',
    fft: 'FFT transform',
    spectrogramTitle: '🎨 Spectrogram',
    frequencyAxis: 'Frequency ↑',
    alertTitle: 'Read sound like a score',
    lowEnergy: 'Low energy (quiet)',
    highEnergy: 'High energy (loud)',
    info: 'A spectrogram turns a one-dimensional sound signal into a two-dimensional image, so image models such as <strong>CNNs</strong> can process sound.'
  },
  autoregressiveAudio: {
    start: 'Start comparison',
    arTitle: 'Autoregressive',
    flowTitle: 'Flow Matching',
    generationMode: 'Generation mode',
    serial: 'Serial',
    parallel: 'Parallel',
    speed: 'Speed',
    slow: 'Slow',
    fast: 'Very fast',
    evolutionTitle: 'Technology evolution',
    arStrong: 'Autoregressive',
    arInfo:
      'Like human speech, it must finish the previous token before generating the next one, so it is slow.',
    flowStrong: 'Flow matching',
    flowInfo:
      'Like painting, it can update many areas at the same time, improving efficiency by 10-20x.'
  },
  melSpectrogram: {
    title: '📊 Mel Spectrogram: How AI “Sees” Sound',
    subtitle:
      'Sound is a wave, but AI sees a spectrogram. See how waveforms become images that AI can understand.',
    fftWindow: 'FFT window',
    melFilters: 'Mel filters',
    waveformTitle: '🔊 Waveform (time domain)',
    waveformDesc: 'Raw audio amplitude over time',
    stft: 'STFT transform',
    linearTitle: '📈 Linear spectrum',
    linearTag: 'Low high-frequency resolution',
    melTitle: '🎯 Mel spectrogram',
    melTag: 'Matches human hearing',
    whyTitle: '🎧 Why use the Mel scale?',
    humanStrong: 'Human hearing',
    humanText: '100Hz→200Hz and 10000Hz→10100Hz can feel similarly different',
    linearStrong: 'Linear scale',
    linearText: 'Equal frequency intervals do not match human perception',
    infoStrong: 'Mel spectrogram principle:',
    info: 'The Mel scale models the nonlinear way humans perceive frequency. We are more sensitive to low-frequency changes and less sensitive to high-frequency changes. Mel spectrograms map frequency to this scale so AI focuses on perceptually important regions.',
    audioTypes: [
      { id: 'speech', name: 'Speech', icon: '🗣️' },
      { id: 'music', name: 'Music', icon: '🎵' },
      { id: 'noise', name: 'Noise', icon: '📢' }
    ]
  },
  audioTokenization: {
    title: '🎵 Audio Tokenization: Neural Codecs',
    encoder: '🔽 Encoder',
    rawWaveform: 'Raw waveform',
    cnnDownsample: 'CNN downsampling',
    dimensionReduction: '320x dimension reduction',
    vq: 'VQ quantization',
    discreteToken: 'Discrete token',
    compressed: 'Compressed: ~1.5 kbps',
    decoder: '🔼 Decoder',
    codebookIndex: 'Codebook index',
    transposedConv: 'Transposed convolution',
    upsample: 'Upsampling',
    reconstructedWaveform: 'Reconstructed waveform',
    bitrateTitle: '📊 Bitrate comparison',
    sampleRate: 'Sample rate:',
    frameRate: 'Frame rate:',
    codebookSize: 'Codebook size:',
    tokenTitle: '🔢 Token sequence visualization',
    lowFreq: 'Low-frequency components',
    midFreq: 'Mid-frequency components',
    highFreq: 'High-frequency components',
    appsTitle: '🎯 Why audio tokenization?',
    applications: [
      {
        icon: '🚀',
        title: 'Efficient transfer',
        desc: 'Compress audio to ~1.5 kbps, about 256x smaller than raw audio, making it suitable for network transfer.'
      },
      {
        icon: '🧠',
        title: 'Language-model friendly',
        desc: 'Discrete tokens can be processed directly by LLMs, enabling unified text-to-audio modeling.'
      },
      {
        icon: '🎵',
        title: 'Music generation',
        desc: 'Models such as MusicGen and AudioLDM use audio tokens to generate music and sound effects.'
      },
      {
        icon: '🗣️',
        title: 'Speech synthesis',
        desc: 'TTS models such as VALL-E and SoundStorm can generate audio tokens directly.'
      }
    ],
    infoStrong: 'Neural audio codecs:',
    info: 'Models such as EnCodec (Meta), SoundStream (Google), and SNAC use VQ-VAE style architectures to compress audio into discrete tokens. These tokens can be handled by language models for high-quality audio generation and compression.'
  },
  ttsPipeline: {
    title: '🔄 TTS Architecture Evolution: From Slow to Fast',
    subtitle:
      'Explore how text becomes speech and compare different architectures.',
    input: 'Input:',
    output: 'Output:',
    tech: 'Tech:',
    comparisonTitle: '📊 Architecture comparison',
    feature: 'Feature',
    modelsTitle: '🏆 Representative models',
    infoStrong: 'TTS evolution trend:',
    info: 'TTS has moved from early autoregressive models such as Tacotron, to non-autoregressive models such as FastSpeech, and now to flow matching models such as F5-TTS. The direction is faster, more stable, and higher-quality synthesis.',
    chartSerial: 'Generate one time step at a time',
    architectures: [
      {
        id: 'ar',
        name: 'Autoregressive',
        icon: '📝',
        tag: 'AR',
        tagClass: 'primary'
      },
      {
        id: 'nar',
        name: 'Non-autoregressive',
        icon: '⚡',
        tag: 'NAR',
        tagClass: 'success'
      },
      {
        id: 'flow',
        name: 'Flow matching',
        icon: '🌊',
        tag: 'Flow',
        tagClass: 'warning'
      }
    ],
    pipelineStages: {
      ar: [
        {
          id: 'text',
          name: 'Text processing',
          icon: '📝',
          shortDesc: 'Tokenize & phonemes',
          description: 'Convert input text into a phoneme sequence',
          input: 'Raw text',
          output: 'Phoneme sequence',
          tech: 'G2P'
        },
        {
          id: 'encoder',
          name: 'Text encoding',
          icon: '🔢',
          shortDesc: 'Extract features',
          description: 'Encode text with an Encoder',
          input: 'Phoneme sequence',
          output: 'Text features',
          tech: 'Transformer'
        },
        {
          id: 'decoder',
          name: 'AR decoding',
          icon: '🎯',
          shortDesc: 'Frame by frame',
          description: 'Generate mel spectrogram frames step by step',
          input: 'Text features',
          output: 'Mel spectrogram',
          tech: 'AR Decoder'
        },
        {
          id: 'vocoder',
          name: 'Vocoder',
          icon: '🔊',
          shortDesc: 'Spectrum to waveform',
          description: 'Convert the spectrogram into an audio waveform',
          input: 'Mel spectrogram',
          output: 'Audio waveform',
          tech: 'HiFi-GAN'
        }
      ],
      nar: [
        {
          id: 'text',
          name: 'Text processing',
          icon: '📝',
          shortDesc: 'Tokenize & phonemes',
          description: 'Convert input text into a phoneme sequence',
          input: 'Raw text',
          output: 'Phoneme sequence',
          tech: 'G2P'
        },
        {
          id: 'duration',
          name: 'Duration prediction',
          icon: '⏱️',
          shortDesc: 'Predict duration',
          description: 'Predict frame counts for each phoneme',
          input: 'Phoneme sequence',
          output: 'Duration info',
          tech: 'Duration Predictor'
        },
        {
          id: 'decoder',
          name: 'Parallel decoding',
          icon: '⚡',
          shortDesc: 'Generate at once',
          description: 'Generate the full mel spectrogram in parallel',
          input: 'Text features',
          output: 'Mel spectrogram',
          tech: 'Non-AR Transformer'
        },
        {
          id: 'vocoder',
          name: 'Vocoder',
          icon: '🔊',
          shortDesc: 'Spectrum to waveform',
          description: 'Convert the spectrogram into an audio waveform',
          input: 'Mel spectrogram',
          output: 'Audio waveform',
          tech: 'HiFi-GAN'
        }
      ],
      flow: [
        {
          id: 'text',
          name: 'Text processing',
          icon: '📝',
          shortDesc: 'Tokenize & phonemes',
          description: 'Convert input text into a phoneme sequence',
          input: 'Raw text',
          output: 'Phoneme sequence',
          tech: 'G2P'
        },
        {
          id: 'embedding',
          name: 'Text embedding',
          icon: '🔢',
          shortDesc: 'Feature extraction',
          description: 'Convert phonemes into vectors',
          input: 'Phoneme sequence',
          output: 'Text embedding',
          tech: 'DiT'
        },
        {
          id: 'flow',
          name: 'Flow matching',
          icon: '🌊',
          shortDesc: 'Optimal transport',
          description: 'Use flow matching to generate a spectrogram',
          input: 'Text embedding',
          output: 'Mel spectrogram',
          tech: 'Flow Matching'
        },
        {
          id: 'vocoder',
          name: 'Vocoder',
          icon: '🔊',
          shortDesc: 'Spectrum to waveform',
          description: 'Convert the spectrogram into an audio waveform',
          input: 'Mel spectrogram',
          output: 'Audio waveform',
          tech: 'Vocoder'
        }
      ]
    },
    comparisonRows: [
      {
        feature: 'Generation speed',
        ar: 'Slow',
        nar: 'Fast',
        flow: 'Very fast'
      },
      {
        feature: 'Audio quality',
        ar: 'High',
        nar: 'Medium-high',
        flow: 'High'
      },
      { feature: 'Stability', ar: 'Medium', nar: 'High', flow: 'High' },
      { feature: 'Controllability', ar: 'Medium', nar: 'High', flow: 'High' }
    ],
    models: [
      {
        name: 'Tacotron 2',
        arch: 'ar',
        type: 'AR',
        tagClass: 'primary',
        desc: 'Classic AR model with excellent audio quality'
      },
      {
        name: 'FastSpeech 2',
        arch: 'nar',
        type: 'NAR',
        tagClass: 'success',
        desc: 'Parallel generation with high speed'
      },
      {
        name: 'F5-TTS',
        arch: 'flow',
        type: 'Flow',
        tagClass: 'warning',
        desc: 'Recent SOTA, generated in 10 steps'
      },
      {
        name: 'CosyVoice',
        arch: 'flow',
        type: 'Flow',
        tagClass: 'warning',
        desc: 'Alibaba open-source model with multilingual support'
      }
    ]
  },
  voiceCloning: {
    title: '🎭 Voice Cloning: Let AI Imitate Anyone',
    subtitle:
      'With only a few seconds of reference audio, AI can learn a speaker voice.',
    referenceTitle: 'Provide reference audio',
    or: 'or',
    upload: '📤 Upload your own audio',
    processTitle: 'AI learns voice features',
    featureLabel: 'Extracted voice feature vector',
    generateTitle: 'Enter text to generate speech',
    placeholder: 'Enter text to synthesize...',
    generate: '🎙 Generate speech',
    result: 'Generated result',
    similarity: 'Similarity: {value}%',
    pause: '⏸ Pause',
    play: '▶ Play',
    download: '⬇ Download',
    tipsTitle: '💡 Voice cloning tips',
    infoStrong: 'Technical principle:',
    info: 'Voice cloning extracts timbre, intonation, and speaking style from reference audio to build a speaker embedding. During generation, the TTS model combines text content with this speaker embedding to synthesize speech similar to the reference voice.',
    uploadAlert: 'Simulated: open file picker',
    downloadAlert: 'Simulated: download audio file',
    modes: [
      { id: 'zeroshot', name: 'Zero-shot cloning', icon: '🎯' },
      { id: 'fewshot', name: 'Few-shot cloning', icon: '📚' },
      { id: 'crosslingual', name: 'Cross-lingual cloning', icon: '🌍' }
    ],
    references: [
      {
        id: 'male1',
        name: 'Male voice A',
        avatar: '👨',
        desc: 'Low and magnetic'
      },
      {
        id: 'female1',
        name: 'Female voice B',
        avatar: '👩',
        desc: 'Gentle and sweet'
      },
      {
        id: 'child',
        name: 'Child voice',
        avatar: '🧒',
        desc: 'Lively and cute'
      },
      {
        id: 'elder',
        name: 'Elder voice',
        avatar: '👴',
        desc: 'Weathered and steady'
      }
    ],
    processSteps: [
      { id: 'load', name: 'Load audio', icon: '📂' },
      { id: 'encode', name: 'Encode features', icon: '🔢' },
      { id: 'extract', name: 'Extract timbre', icon: '🎨' },
      { id: 'embed', name: 'Build embedding', icon: '💎' }
    ],
    tips: [
      {
        icon: '⏱️',
        title: 'Reference duration',
        text: '3-10 seconds is enough; quality matters more than length.'
      },
      {
        icon: '🔇',
        title: 'Environment',
        text: 'Use a quiet environment and avoid background noise.'
      },
      {
        icon: '🗣️',
        title: 'Content choice',
        text: 'Audio with varied pitch and speaking speed works better.'
      }
    ]
  },
  asrTts: {
    title: '🔄 ASR ↔ TTS: Two-Way Speech Conversion',
    subtitle:
      'Explore the inverse processes of speech recognition and speech synthesis.',
    asrName: 'ASR Speech Recognition',
    asrDesc: 'Audio → Text',
    startRecording: 'Start recording',
    stopRecording: 'Stop recording',
    or: 'or',
    uploadAudio: '📁 Upload audio',
    recognize: '🔍 Recognize speech',
    resultLabel: 'Recognition result',
    confidence: 'Confidence: {value}%',
    elapsed: 'Time: {value}ms',
    ttsName: 'TTS Speech Synthesis',
    ttsDesc: 'Text → Audio',
    placeholder: 'Enter text to synthesize...',
    voiceLabel: 'Choose voice:',
    synthesize: '🗣 Synthesize speech',
    synthesizedResult: 'Synthesis result',
    comparisonTitle: '📊 ASR vs TTS',
    input: 'Input:',
    output: 'Output:',
    difficulty: 'Challenge:',
    architectureTitle: '🔀 Architecture comparison',
    audio: 'Audio',
    feature: 'Features',
    text: 'Text',
    vocoder: 'Vocoder',
    infoStrong: 'Inverse relationship:',
    info: 'ASR and TTS are two core directions in speech technology and inverse processes of each other. ASR converts continuous audio signals into discrete text, while TTS converts discrete text into continuous audio signals. Both rely on acoustic models and language models.',
    asrSampleResult:
      'This is a sample speech recognition result showing how ASR works.',
    voices: [
      { id: 'default', name: 'Default', icon: '🎙️' },
      { id: 'male', name: 'Male', icon: '👨' },
      { id: 'female', name: 'Female', icon: '👩' },
      { id: 'child', name: 'Child', icon: '🧒' }
    ],
    comparisonCards: [
      {
        id: 'asr',
        icon: '🎙️',
        name: 'ASR',
        items: [
          { label: 'Input:', value: 'Audio waveform' },
          { label: 'Output:', value: 'Text sequence' },
          { label: 'Challenge:', value: 'Noise, accents, homophones' }
        ]
      },
      {
        id: 'tts',
        icon: '🔊',
        name: 'TTS',
        items: [
          { label: 'Input:', value: 'Text sequence' },
          { label: 'Output:', value: 'Audio waveform' },
          { label: 'Challenge:', value: 'Prosody, emotion, naturalness' }
        ]
      }
    ]
  },
  emotionControl: {
    title: '🎭 Emotion and Style Control',
    selectorTitle: 'Choose emotion style',
    embeddingTitle: 'Emotion Embedding Space',
    controlTitle: '🎚️ Fine-grained controls',
    speed: 'Speed',
    pitch: 'Pitch',
    energy: 'Energy dynamics',
    pause: 'Pause control',
    slow: 'Slow',
    normal: 'Normal',
    fast: 'Fast',
    low: 'Low',
    high: 'High',
    soft: 'Soft',
    moderate: 'Moderate',
    intense: 'Intense',
    compact: 'Compact',
    natural: 'Natural',
    relaxed: 'Relaxed',
    previewTitle: '🎙️ Preview synthesis',
    placeholder: 'Enter text to synthesize...',
    synthesize: 'Synthesize preview',
    reset: 'Reset parameters',
    explanationTitle: '🔬 How emotion control works',
    gstTitle: 'Global Style Token',
    gstText:
      'GST (Global Style Token) extracts style features from reference audio. The model learns to encode emotion, speed, pitch, and other style information into tokens, then controls synthesis by selecting or interpolating those tokens at inference time.',
    referenceTitle: 'Reference audio encoding',
    referenceText:
      'The user provides reference audio with the target emotion, and the encoder extracts its style feature vector. This vector is used as a condition for the TTS model to generate speech in a similar style.',
    fineTitle: 'Fine-grained control',
    fineText:
      'Modern TTS models such as CosyVoice and F5-TTS support fine-grained style controls, including:',
    infoStrong: 'Emotion control:',
    info: 'Modern TTS systems can synthesize natural speech and precisely control emotion, speed, pitch, and other style features. This lets AI voiceover adapt to different scenarios, from calm customer-service dialogs to energetic speeches.',
    defaultPreview: 'This is a speech synthesis demo with emotion control.',
    valenceAxis: 'Valence (negative → positive)',
    arousalAxis: 'Arousal (calm → excited)',
    emotions: [
      {
        id: 'neutral',
        name: 'Neutral',
        emoji: '😐',
        description: 'Steady and natural',
        color: '#909399'
      },
      {
        id: 'happy',
        name: 'Happy',
        emoji: '😊',
        description: 'Light and cheerful',
        color: '#67c23a'
      },
      {
        id: 'sad',
        name: 'Sad',
        emoji: '😢',
        description: 'Low and slow',
        color: '#409eff'
      },
      {
        id: 'angry',
        name: 'Angry',
        emoji: '😠',
        description: 'Forceful and intense',
        color: '#f56c6c'
      },
      {
        id: 'excited',
        name: 'Excited',
        emoji: '🤩',
        description: 'Warm and energetic',
        color: '#e6a23c'
      },
      {
        id: 'calm',
        name: 'Calm',
        emoji: '😌',
        description: 'Relaxed and soothing',
        color: '#13c2c2'
      }
    ],
    fineItems: [
      {
        strong: 'Speed control:',
        text: 'Adjust playback speed without changing pitch'
      },
      {
        strong: 'Pitch control:',
        text: 'Modify the fundamental frequency (F0) curve'
      },
      { strong: 'Energy control:', text: 'Adjust the volume envelope' },
      {
        strong: 'Pause control:',
        text: 'Adjust pause lengths between sentences and phrases'
      }
    ]
  },
  quickStart: {
    title: '🎙️ First AI Audio Experience: Let Machines Speak',
    subtitle:
      'From speech synthesis to voice cloning, explore how AI gives machines a voice.',
    empty: 'Choose a scenario to experience AI audio',
    ttsPlaceholder: 'Enter text to synthesize...',
    voiceLabel: 'Voice:',
    processing: 'Synthesizing...',
    synthesize: '🎙️ Synthesize speech',
    startRecording: 'Start recording',
    stopRecording: 'Stop recording',
    resultLabel: 'Recognition result:',
    stepReference: 'Record reference audio',
    done: '✓ Done',
    recordFiveSeconds: '🎙️ Record 5 seconds',
    extractVoiceprint: 'Extract voiceprint features',
    analyzing: 'Analyzing...',
    synthesizeCloned: 'Synthesize cloned voice',
    clonePlaceholder: 'Enter text to synthesize',
    synthesizeShort: 'Synthesize',
    cloneSuccess: '✓ Clone successful!',
    embeddingTitle: 'Voiceprint feature vector (256D)',
    defaultTtsText: 'Hello, I am an AI voice assistant.',
    defaultCloneText: 'This speech is synthesized with my cloned voice.',
    transcription: 'The weather is nice today, perfect for a walk.',
    scenes: [
      { id: 'tts', name: 'Speech synthesis', icon: '🗣️' },
      { id: 'asr', name: 'Speech recognition', icon: '🎤' },
      { id: 'clone', name: 'Voice cloning', icon: '🎭' }
    ],
    voices: [
      { id: 'female1', name: 'Female A', icon: '👩' },
      { id: 'male1', name: 'Male B', icon: '👨' },
      { id: 'female2', name: 'Female C', icon: '👧' }
    ],
    tips: [
      {
        icon: '💡',
        text: 'TTS: text to speech, letting AI read any text aloud'
      },
      {
        icon: '🎯',
        text: 'ASR: speech recognition, converting speech into text'
      },
      {
        icon: '🎭',
        text: 'Voice cloning: copy a voice from only a few seconds of audio'
      }
    ]
  }
}
