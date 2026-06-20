export default {
  overview: {
    title: 'Frontend Performance Optimization Map',
    subtitle:
      'Select a dimension to explore bottlenecks and matching optimization techniques.',
    bottlenecksTitle: 'Common Bottlenecks',
    solutionsTitle: 'Solutions',
    arrowText: 'How to fix it?',
    goalPrefix: 'Core goal:',
    dimensions: [
      {
        id: 'network',
        name: 'Network Layer',
        icon: '📡',
        goal: 'Deliver resources to the browser faster by reducing size, request count, and distance.',
        bottlenecks: [
          {
            title: 'Large assets',
            desc: 'Images and JS bundles are not compressed, so downloads take longer.'
          },
          {
            title: 'Too many requests',
            desc: 'HTTP/1.1 head-of-line blocking makes resources wait in line.'
          },
          {
            title: 'Network latency',
            desc: 'The server is physically far away, increasing RTT.'
          }
        ],
        solutions: [
          {
            title: 'Asset compression',
            desc: 'Use Gzip/Brotli and image formats such as WebP.',
            tags: ['Smaller size']
          },
          {
            title: 'Lazy loading',
            desc: 'Load only resources visible in the current viewport.',
            tags: ['Smaller size', 'Fewer requests']
          },
          {
            title: 'CDN acceleration',
            desc: 'Distribute assets to nodes close to users.',
            tags: ['Shorter distance']
          },
          {
            title: 'HTTP caching',
            desc: 'Use browser cache to avoid repeated requests.',
            tags: ['Fewer requests']
          }
        ]
      },
      {
        id: 'rendering',
        name: 'Rendering Layer',
        icon: '🎨',
        goal: 'Paint the page faster by reducing reflow/repaint and using the GPU.',
        bottlenecks: [
          {
            title: 'Critical path blocking',
            desc: 'CSS and JS block DOM tree construction.'
          },
          {
            title: 'Frequent reflow',
            desc: 'Changing layout properties forces full layout recalculation.'
          },
          {
            title: 'Animation jank',
            desc: 'CPU-painted animations drop below 60fps.'
          }
        ],
        solutions: [
          {
            title: 'Inline critical CSS',
            desc: 'Place above-the-fold styles directly in HTML.',
            tags: ['Critical path']
          },
          {
            title: 'GPU acceleration',
            desc: 'Use transform/opacity to promote composited layers.',
            tags: ['Animation']
          },
          {
            title: 'Virtual lists',
            desc: 'Render only visible DOM when handling large datasets.',
            tags: ['DOM optimization']
          },
          {
            title: 'Debounce and throttle',
            desc: 'Reduce rendering frequency from high-rate events.',
            tags: ['Logic optimization']
          }
        ]
      },
      {
        id: 'execution',
        name: 'Scripting Layer',
        icon: '⚙️',
        goal: 'Keep the main thread responsive by reducing long tasks and parallelizing work.',
        bottlenecks: [
          {
            title: 'Main thread blocking',
            desc: 'Long tasks prevent the page from responding to interactions.'
          },
          {
            title: 'Wasted computation',
            desc: 'Unnecessary React/Vue component rerenders consume time.'
          },
          {
            title: 'Memory leaks',
            desc: 'Unremoved listeners make the page slower over time.'
          }
        ],
        solutions: [
          {
            title: 'Web Workers',
            desc: 'Move heavy computation to a background thread.',
            tags: ['Parallel']
          },
          {
            title: 'Code splitting',
            desc: 'Load JS on demand and reduce main-thread parsing pressure.',
            tags: ['Less work']
          },
          {
            title: 'Time slicing',
            desc: 'Split large tasks into smaller chunks.',
            tags: ['Responsiveness']
          },
          {
            title: 'Algorithm optimization',
            desc: 'Reduce time complexity, for example O(n²) to O(n).',
            tags: ['Efficiency']
          }
        ]
      }
    ]
  },
  metrics: {
    subtitle: 'Adjust load time and observe how performance metrics change.',
    loadTimeLabel: 'Simulated load time:',
    secondsUnit: 's',
    desc: {
      fcp: 'First contentful paint',
      lcp: 'Largest contentful paint',
      fid: 'First input delay',
      cls: 'Cumulative layout shift'
    },
    statuses: {
      good: 'Good',
      needsImprovement: 'Needs improvement',
      poor: 'Poor'
    },
    infoPrefix: 'Core metrics:',
    infoText:
      'FCP ≤ 1.8s, LCP ≤ 2.5s, FID ≤ 100ms, and CLS ≤ 0.1. The goal is to keep every metric in the "Good" range.'
  },
  imageOptimization: {
    title: 'Image Format Comparison: Size and Quality Tradeoffs',
    subtitle: 'Compare size and quality across image formats.',
    labels: {
      fileSize: 'File size',
      compression: 'Compression',
      quality: 'Quality',
      support: 'Browser support',
      useCase: 'Use case',
      detailComparison: 'Detailed Comparison',
      format: 'Format',
      size: 'Size',
      transparency: 'Transparency',
      animation: 'Animation',
      rating: 'Recommendation'
    },
    formats: [
      {
        name: 'JPEG',
        badge: 'Classic',
        badgeClass: 'classic',
        size: '500 KB',
        fileSize: '500 KB',
        compression: '70%',
        quality: 85,
        support: '100%',
        useCase: 'Photos and complex images',
        sizeLevel: 'Medium',
        qualityLevel: 'Good',
        transparency: false,
        animation: false,
        rating: 4,
        gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)'
      },
      {
        name: 'PNG',
        badge: 'Lossless',
        badgeClass: 'lossless',
        size: '1.2 MB',
        fileSize: '1.2 MB',
        compression: '40%',
        quality: 100,
        support: '100%',
        useCase: 'Transparent images and icons',
        sizeLevel: 'Large',
        qualityLevel: 'Perfect',
        transparency: true,
        animation: false,
        rating: 4.5,
        gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)'
      },
      {
        name: 'WebP',
        badge: 'Recommended',
        badgeClass: 'recommended',
        size: '250 KB',
        fileSize: '250 KB',
        compression: '85%',
        quality: 90,
        support: '95%',
        useCase: 'Most scenarios',
        sizeLevel: 'Small',
        qualityLevel: 'Excellent',
        transparency: true,
        animation: true,
        rating: 5,
        gradient: 'linear-gradient(135deg, #34d399, #10b981)'
      },
      {
        name: 'AVIF',
        badge: 'Newest',
        badgeClass: 'latest',
        size: '180 KB',
        fileSize: '180 KB',
        compression: '90%',
        quality: 95,
        support: '75%',
        useCase: 'Maximum performance',
        sizeLevel: 'Smallest',
        qualityLevel: 'Outstanding',
        transparency: true,
        animation: false,
        rating: 4.5,
        gradient: 'linear-gradient(135deg, #f472b6, #ec4899)'
      }
    ],
    tips: [
      {
        icon: '💡',
        title: 'Optimization Tips',
        items: [
          'Prefer WebP to reduce size by 30-50%.',
          'Provide JPEG/PNG fallbacks for older browsers.',
          'Use the <picture> element for automatic fallback.',
          'Use JPEG for photos and PNG or SVG for icons.'
        ]
      },
      {
        icon: '🔧',
        title: 'Recommended Tools',
        items: [
          'Squoosh: open-source image compression from Google.',
          'ImageOptim: image optimization tool for macOS.',
          'TinyPNG: online smart compression with WebP support.',
          'Sharp: Node.js image processing library for automation.'
        ]
      }
    ]
  },
  virtualScrolling: {
    title: 'Virtual Scrolling',
    subtitle: 'Render only the list items visible in the viewport.',
    itemContent: 'virtual scrolling list item content',
    totalLabel: 'Total items',
    renderedLabel: 'Actually rendered',
    memorySavedLabel: 'Memory saved',
    infoPrefix: 'How it works:',
    infoTextBefore: 'Instead of rendering all',
    infoTextAfter:
      'items, it renders only the visible viewport items plus a small buffer. On scroll, it calculates which items should appear and uses absolute positioning to create the illusion of a full list. Performance improves from O(n) to O(1).'
  }
}
