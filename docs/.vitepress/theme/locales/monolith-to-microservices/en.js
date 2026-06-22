export default {
  archEvolution: {
    title: 'Architecture Evolution Path',
    subtitle: 'Click each stage to inspect its architecture characteristics',
    scaleLabel: 'Suitable scale:',
    challengeLabel: 'Core challenge:',
    stages: [
      {
        key: 'monolith',
        name: 'Monolithic architecture',
        desc: 'All features are packaged in one application and share one database. It is simple and suitable for early rapid iteration.',
        scale: 'Team < 10 people, DAU < 100k',
        challenge:
          'Code is tightly coupled; a bug in one module may bring down the whole system',
        boxes: [
          { label: 'User module', type: 'module' },
          { label: 'Order module', type: 'module' },
          { label: 'Payment module', type: 'module' },
          { label: 'Product module', type: 'module' },
          { label: 'Monolith app (one process)', type: 'container' },
          { label: 'MySQL', type: 'db' }
        ]
      },
      {
        key: 'modular',
        name: 'Modular monolith',
        desc: 'The monolith is split internally by business domains, and modules communicate through interfaces. This is a stepping stone toward microservices.',
        scale: 'Team 10-30 people',
        challenge: 'Module boundaries are easy to break and require discipline',
        boxes: [
          { label: 'User domain', type: 'domain' },
          { label: 'Order domain', type: 'domain' },
          { label: 'Payment domain', type: 'domain' },
          { label: 'Internal API boundary', type: 'boundary' },
          { label: 'MySQL', type: 'db' }
        ]
      },
      {
        key: 'soa',
        name: 'Service-oriented architecture',
        desc: 'Business capabilities are split into independent services that communicate through an ESB or API gateway. Each service can be deployed independently.',
        scale: 'Team 30-100 people',
        challenge:
          'Service call chains grow longer and require service governance',
        boxes: [
          { label: 'User service', type: 'service' },
          { label: 'Order service', type: 'service' },
          { label: 'Payment service', type: 'service' },
          { label: 'API gateway', type: 'gateway' },
          { label: 'Separate databases', type: 'db' }
        ]
      },
      {
        key: 'microservices',
        name: 'Microservices architecture',
        desc: 'Services are split more finely; each can be developed, deployed, and scaled independently, often with containers and Kubernetes.',
        scale: 'Team 100+ people, DAU in the millions',
        challenge:
          'Distributed complexity, data consistency, and operations cost',
        boxes: [
          { label: 'User service', type: 'service' },
          { label: 'Auth service', type: 'service' },
          { label: 'Order service', type: 'service' },
          { label: 'Inventory service', type: 'service' },
          { label: 'Payment service', type: 'service' },
          { label: 'Notification service', type: 'service' },
          { label: 'API Gateway + Service Mesh', type: 'gateway' },
          { label: 'Independent DB x N', type: 'db' }
        ]
      }
    ]
  }
}
