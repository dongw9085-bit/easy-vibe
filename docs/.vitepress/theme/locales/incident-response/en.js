export default {
  severity: {
    title: 'Incident Severity Levels',
    subtitle:
      'Select a level to understand response requirements and real examples.',
    labels: {
      definition: 'Definition',
      responseTime: 'Response time',
      channels: 'Notification channels',
      examples: 'Examples',
      requirements: 'Response requirements',
      comparison: 'Level Comparison'
    },
    tableHeaders: [
      'Level',
      'User impact',
      'Response time',
      'On-call requirement'
    ],
    levels: [
      {
        id: 'p0',
        shortName: 'Critical',
        name: 'Critical Incident',
        color: '#ef4444',
        definition:
          'Core business is completely unavailable, many users are affected, and there is serious financial loss or data loss risk.',
        responseTime: 'Immediate response, staffed within 5 minutes',
        userImpact: 'All users',
        oncallReq: 'All hands',
        channels: ['Phone', 'SMS', 'Chat', 'Email'],
        examples: [
          'Primary database is down and all reads/writes fail',
          'Payment system is unavailable and users cannot order',
          'Large-scale user data leakage'
        ],
        requirements: [
          'Incident commander joins within 5 minutes',
          'Update management every 15 minutes',
          'All relevant teams cancel leave and assist immediately',
          'Complete postmortem within 24 hours'
        ]
      },
      {
        id: 'p1',
        shortName: 'Major',
        name: 'Major Incident',
        color: '#f59e0b',
        definition:
          'Core functionality is partially degraded and many users have a poor experience, but the system is not completely unavailable.',
        responseTime: 'Respond within 15 minutes',
        userImpact: 'Many users',
        oncallReq: 'Core team',
        channels: ['Chat', 'SMS', 'Email'],
        examples: [
          'Search results are severely delayed (>5s)',
          'Users in some regions cannot log in',
          'Order processing queue is badly backed up'
        ],
        requirements: [
          'On-call engineer starts investigation within 15 minutes',
          'Update progress every 30 minutes',
          'Escalate to P0 if needed',
          'Complete postmortem within 48 hours'
        ]
      },
      {
        id: 'p2',
        shortName: 'Moderate',
        name: 'Moderate Incident',
        color: '#eab308',
        definition:
          'Non-core functionality is abnormal, some users are affected, and the main business flow still works.',
        responseTime: 'Respond within 1 hour',
        userImpact: 'Some users',
        oncallReq: 'On-call engineer',
        channels: ['Chat', 'Email'],
        examples: [
          'User avatars fail to load',
          'Report export times out',
          'Non-critical page CSS is broken'
        ],
        requirements: [
          'Handle during working hours',
          'Provide a fix plan the same day',
          'No all-hands response needed',
          'Record in weekly report'
        ]
      },
      {
        id: 'p3',
        shortName: 'Minor',
        name: 'Minor Issue',
        color: '#84cc16',
        definition:
          'Edge feature issue affecting very few users and not blocking normal usage.',
        responseTime: 'Acknowledge today, handle this week',
        userImpact: 'Very few users',
        oncallReq: 'Normal planning',
        channels: ['Email', 'Ticket system'],
        examples: [
          'Button alignment shifts in one browser',
          'Non-critical warnings appear in logs',
          'Copy has a typo'
        ],
        requirements: [
          'Record in bug tracker',
          'Schedule into normal iteration',
          'No urgent response required',
          'Release normally after fix'
        ]
      },
      {
        id: 'p4',
        shortName: 'Suggestion',
        name: 'Improvement Suggestion',
        color: '#64748b',
        definition:
          'Non-incident improvement or technical debt that does not affect users.',
        responseTime: 'Schedule by priority',
        userImpact: 'No direct impact',
        oncallReq: 'No on-call needed',
        channels: ['Ticket system'],
        examples: [
          'Code has optimizable performance bottleneck',
          'Dependency version is outdated',
          'Monitoring coverage needs improvement'
        ],
        requirements: [
          'Record in technical debt list',
          'Assess priority during quarterly planning',
          'Track as a team improvement',
          'No time pressure'
        ]
      }
    ]
  },
  timeline: {
    title: 'Incident Response Timeline',
    subtitle: 'Select each phase to understand key actions.',
    actionsTitle: 'Key actions:',
    rolesLabel: 'Roles:',
    playing: 'Playing...',
    play: 'Auto-play full flow',
    reset: 'Reset',
    phases: [
      {
        id: 'detect',
        name: 'Detect',
        timeHint: 'T+0',
        icon: '🔍',
        color: '#ef4444',
        duration: 'Goal < 5 min',
        description:
          'Detect system anomalies through monitoring alerts, user reports, or automated checks. Earlier detection reduces loss.',
        actions: [
          'Monitoring triggers alerts for CPU, latency, or error rate',
          'On-call confirms the notification',
          'Estimate impact scope',
          'Post the first update in the incident channel'
        ],
        roles: ['On-call engineer', 'Monitoring system']
      },
      {
        id: 'triage',
        name: 'Triage',
        timeHint: 'T+5min',
        icon: '📋',
        color: '#f59e0b',
        duration: 'Goal < 10 min',
        description:
          'Assess severity quickly, assign priority, and decide response size and escalation path.',
        actions: [
          'Assess affected user scope',
          'Determine business impact',
          'Assign incident level P0-P4',
          'Start the matching response process'
        ],
        roles: ['On-call engineer', 'Incident commander']
      },
      {
        id: 'mitigate',
        name: 'Mitigate',
        timeHint: 'T+15min',
        icon: '🚑',
        color: '#3b82f6',
        duration: 'Goal < 1 hour',
        description:
          'Take emergency actions to restore service first. Rollback, degradation, and rate limiting are common tactics.',
        actions: [
          'Rollback recent code, config, or infrastructure changes',
          'Enable fallback systems or degradation plans',
          'Apply rate limiting to protect core paths',
          'Monitor recovery and communicate status'
        ],
        roles: ['Incident commander', 'Operations engineer', 'Developer']
      },
      {
        id: 'resolve',
        name: 'Resolve',
        timeHint: 'T+1h',
        icon: '🔧',
        color: '#22c55e',
        duration: 'Depends on complexity',
        description:
          'After service recovery, locate root cause and implement a permanent fix.',
        actions: [
          'Analyze logs and metrics deeply',
          'Write and review fix code',
          'Verify fix in staging',
          'Roll out fix gradually and confirm resolution'
        ],
        roles: ['Developer', 'Architect', 'QA engineer']
      },
      {
        id: 'postmortem',
        name: 'Postmortem',
        timeHint: 'T+48h',
        icon: '📝',
        color: '#8b5cf6',
        duration: 'Within 48 hours',
        description:
          'Run a blameless postmortem, analyze root causes, and define improvements to prevent recurrence.',
        actions: [
          'Write postmortem report',
          'Hold postmortem meeting',
          'Use five whys to find root cause',
          'Define and track action items'
        ],
        roles: ['Incident commander', 'Related participants', 'Management']
      }
    ]
  },
  escalation: {
    title: 'Alert Escalation',
    subtitle: 'Choose a scenario and observe how alerts escalate.',
    progress: 'Escalation progress: level {current} / {total}',
    prev: 'Previous',
    next: 'Escalate next',
    rulesTitle: 'Escalation Rules',
    rules: [
      {
        color: '#22c55e',
        text: 'P3/P4 alerts: notify only the on-call engineer; no escalation needed.'
      },
      {
        color: '#eab308',
        text: 'P2 alerts: escalate to team lead if not acknowledged within 15 minutes.'
      },
      {
        color: '#f59e0b',
        text: 'P1 alerts: escalate after 5 minutes unacknowledged, then to director after 30 minutes unresolved.'
      },
      {
        color: '#ef4444',
        text: 'P0 alerts: notify the whole chain immediately; escalate to VP/CTO if not mitigated within 15 minutes.'
      }
    ],
    scenarios: [
      { id: 'p0', name: 'P0 database outage' },
      { id: 'p1', name: 'P1 API timeout' },
      { id: 'p2', name: 'P2 performance degradation' }
    ],
    scenarioSteps: {
      p0: [
        {
          id: 1,
          icon: '📡',
          color: '#3b82f6',
          title: 'Monitoring detects issue',
          time: 'T+0s',
          desc: 'Prometheus detects exhausted DB connection pool and query timeouts.',
          action: 'Automatically triggers P0 alert.'
        },
        {
          id: 2,
          icon: '📱',
          color: '#f59e0b',
          title: 'On-call engineer',
          time: 'T+30s',
          desc: 'Phone, SMS, and chat notify the on-call DBA at the same time.',
          action: 'On-call engineer acknowledges and starts investigation.'
        },
        {
          id: 3,
          icon: '👥',
          color: '#ef4444',
          title: 'Team leads',
          time: 'T+5min',
          desc: 'Automatically escalates to database and backend team leads.',
          action: 'Team leads gather an emergency call.'
        },
        {
          id: 4,
          icon: '🎖️',
          color: '#8b5cf6',
          title: 'Engineering director',
          time: 'T+15min',
          desc: 'Issue is not mitigated, so it escalates to director.',
          action:
            'Director coordinates cross-team resources and starts contingency plan.'
        },
        {
          id: 5,
          icon: '🏢',
          color: '#1e293b',
          title: 'VP / CTO',
          time: 'T+30min',
          desc: 'Major incident escalates to executives for external communication.',
          action: 'CTO decides whether to switch to disaster recovery.'
        }
      ],
      p1: [
        {
          id: 1,
          icon: '📡',
          color: '#3b82f6',
          title: 'Monitoring detects issue',
          time: 'T+0s',
          desc: 'API gateway detects P99 latency over 3 seconds.',
          action: 'Triggers P1 alert.'
        },
        {
          id: 2,
          icon: '📱',
          color: '#f59e0b',
          title: 'On-call engineer',
          time: 'T+1min',
          desc: 'Chat and SMS notify the backend on-call engineer.',
          action: 'Engineer checks dashboards and logs.'
        },
        {
          id: 3,
          icon: '👥',
          color: '#ef4444',
          title: 'Team lead',
          time: 'T+15min',
          desc: 'Unresolved after 15 minutes, escalates to team lead.',
          action: 'Lead decides whether more people are needed.'
        },
        {
          id: 4,
          icon: '🎖️',
          color: '#8b5cf6',
          title: 'Engineering director',
          time: 'T+30min',
          desc: 'Unmitigated after 30 minutes, escalates to director.',
          action: 'Director decides whether to raise to P0.'
        }
      ],
      p2: [
        {
          id: 1,
          icon: '📡',
          color: '#3b82f6',
          title: 'Monitoring detects issue',
          time: 'T+0s',
          desc: 'Page load time rises from 1.2s to 2.8s.',
          action: 'Triggers P2 alert.'
        },
        {
          id: 2,
          icon: '📱',
          color: '#eab308',
          title: 'On-call engineer',
          time: 'T+5min',
          desc: 'Chat notifies frontend on-call engineer.',
          action: 'Engineer confirms issue and records a ticket.'
        },
        {
          id: 3,
          icon: '👥',
          color: '#f59e0b',
          title: 'Team lead',
          time: 'T+30min',
          desc: 'Escalates to team lead if not acknowledged within 30 minutes.',
          action: 'Lead schedules same-day fix.'
        }
      ]
    }
  },
  command: {
    title: 'Incident Command System',
    subtitle:
      'Click a role card to understand responsibilities and collaboration.',
    labels: {
      responsibilities: 'Core responsibilities',
      skills: 'Key skills',
      quote: 'Typical phrase'
    },
    scenarioTitle: 'Scenario: P0 Payment System Incident',
    roles: {
      ic: {
        id: 'ic',
        icon: '🎖️',
        name: 'Incident Commander',
        eng: 'Incident Commander',
        color: '#8b5cf6',
        responsibilities: [
          'Coordinate the entire incident response',
          'Make key decisions such as rollback, traffic shifting, and degradation',
          'Keep roles collaborating without confusion',
          'Control response rhythm and synchronize progress regularly'
        ],
        skills: [
          'Big-picture view',
          'Decision making',
          'Coordination',
          'Stress management'
        ],
        quote:
          'Current status: payment service is unavailable. Ops checks the database, backend prepares rollback, comms updates every 10 minutes.'
      },
      comm: {
        id: 'comm',
        icon: '📢',
        name: 'Communications Lead',
        eng: 'Communications Lead',
        color: '#3b82f6',
        responsibilities: [
          'Update management and related teams internally',
          'Update status page and notify affected customers externally',
          'Record timeline for postmortem',
          'Filter noise so the commander can focus on decisions'
        ],
        skills: [
          'Writing',
          'Information organization',
          'Multi-party communication',
          'Time management'
        ],
        quote:
          'Status update: payment service is degraded. The team is actively mitigating and expects recovery within 30 minutes.'
      },
      ops: {
        id: 'ops',
        icon: '🔧',
        name: 'Operations Lead',
        eng: 'Operations Lead',
        color: '#ef4444',
        responsibilities: [
          'Execute technical operations such as rollback, restart, and scaling',
          'Monitor system metrics to judge effect',
          'Manage infrastructure emergency response',
          'Report technical progress to commander'
        ],
        skills: [
          'Operations',
          'Troubleshooting',
          'Automation scripts',
          'Monitoring analysis'
        ],
        quote:
          'The primary database CPU is at 100%. We are performing failover and expect completion in 2 minutes.'
      },
      dev: {
        id: 'dev',
        icon: '💻',
        name: 'Development Lead',
        eng: 'Development Lead',
        color: '#22c55e',
        responsibilities: [
          'Analyze code-level root cause',
          'Prepare and execute code fixes or rollback',
          'Assess change risk and provide technical plan',
          'Coordinate developers for investigation'
        ],
        skills: [
          'Code analysis',
          'Fast debugging',
          'Risk assessment',
          'Version management'
        ],
        quote:
          'Root cause found: yesterday batch query missed pagination and caused full table scans. Preparing rollback.'
      }
    },
    scenarioEvents: [
      {
        time: '14:02',
        role: 'Monitoring',
        color: '#3b82f6',
        text: 'Payment success rate drops from 99.9% to 12%, triggering P0 alert.'
      },
      {
        time: '14:03',
        role: 'Commander',
        color: '#8b5cf6',
        text: 'Confirms P0 incident, opens incident channel, gathers roles.'
      },
      {
        time: '14:05',
        role: 'Comms',
        color: '#3b82f6',
        text: 'Notifies management and updates status page to degraded service.'
      },
      {
        time: '14:08',
        role: 'Ops',
        color: '#ef4444',
        text: 'Finds primary DB CPU at 100% and connection pool exhausted.'
      },
      {
        time: '14:10',
        role: 'Dev',
        color: '#22c55e',
        text: 'Identifies yesterday slow query release as root cause.'
      },
      {
        time: '14:12',
        role: 'Commander',
        color: '#8b5cf6',
        text: 'Decision: rollback yesterday change and perform DB failover immediately.'
      },
      {
        time: '14:15',
        role: 'Ops',
        color: '#ef4444',
        text: 'Database failover complete and connections recover.'
      },
      {
        time: '14:18',
        role: 'Dev',
        color: '#22c55e',
        text: 'Code rollback deployment complete.'
      },
      {
        time: '14:20',
        role: 'Comms',
        color: '#3b82f6',
        text: 'Payment success rate recovers to 99.8%; service recovery announced.'
      }
    ]
  },
  postmortem: {
    title: 'Postmortem: 5 Whys Analysis',
    subtitle: 'Click "Ask again" to dig layer by layer into root cause.',
    phenomenon: 'Symptom',
    whyBadge: 'Why #{index}',
    depth: 'Depth {index} / {total}',
    whyQuestion: 'Why did this happen: {answer}?',
    continueArrow: '↓ ask again',
    continueButton: 'Ask again: why?',
    rootFound: 'Root cause found',
    actionsLabel: 'Improvements:',
    templateTitle: 'Postmortem Template',
    cases: [
      {
        id: 'payment',
        name: 'Payment outage',
        whys: [
          {
            answer:
              'Payment system was completely unavailable for 18 minutes during peak traffic.'
          },
          {
            answer:
              'The database connection pool was exhausted and all new requests timed out.'
          },
          {
            answer:
              'A slow query held connections for 30 seconds before releasing them.'
          },
          {
            answer:
              'The newly released reconciliation feature performed a full table scan without using an index.'
          },
          {
            answer:
              'Code review did not check SQL execution plans and there was no slow-query test stage.'
          }
        ],
        rootCause:
          'Process gap: the code review checklist lacked SQL performance review and the CI/CD pipeline had no slow-query detection.',
        actions: [
          'Add SQL execution plan check to code review checklist',
          'Add automatic slow-query detection to CI with 100ms threshold',
          'Add per-query timeout to DB connection pool with 5s cutoff',
          'Establish approval process for large-table changes'
        ]
      },
      {
        id: 'deploy',
        name: 'Deployment outage',
        whys: [
          {
            answer:
              'After new version deployment, user login failed completely for 25 minutes.'
          },
          {
            answer:
              'The new authentication service could not connect to Redis cache cluster.'
          },
          {
            answer:
              'The deployment script used the wrong Redis cluster address pointing to test environment.'
          },
          {
            answer:
              'Environment config was hard-coded in deployment script instead of using a config center.'
          },
          {
            answer:
              'The team lacked a unified configuration management standard; every service managed config itself.'
          }
        ],
        rootCause:
          'Infrastructure gap: no unified config management platform or standard, so environment config was scattered and hard to audit.',
        actions: [
          'Introduce a config center such as Consul or Nacos',
          'Add config validation to deployment pipeline',
          'Forbid hard-coded environment addresses in code and scripts',
          'Create pre-deploy checklist with config confirmation'
        ]
      }
    ],
    templateSections: [
      {
        name: 'Incident summary',
        desc: 'Briefly describe incident time, duration, scope, and severity.'
      },
      {
        name: 'Timeline',
        desc: 'Record every key event from detection to resolution in minute-level order.'
      },
      {
        name: 'Impact assessment',
        desc: 'Quantify affected users, failed requests, financial loss, and SLA impact.'
      },
      {
        name: 'Root cause analysis',
        desc: 'Use methods such as five whys to distinguish trigger and systemic root cause.'
      },
      {
        name: 'Improvements',
        desc: 'List concrete action items with owners and due dates across short, medium, and long term.'
      },
      {
        name: 'Lessons learned',
        desc: 'Summarize what went well, what needs improvement, and newly discovered risks.'
      }
    ]
  }
}
