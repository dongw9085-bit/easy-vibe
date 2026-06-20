export default {
  severity: {
    title: '事故严重程度分级 (Severity Levels)',
    subtitle: '点击各级别，了解对应的响应要求和真实案例',
    labels: {
      definition: '定义',
      responseTime: '响应时间',
      channels: '通知方式',
      examples: '真实案例',
      requirements: '响应要求',
      comparison: '各级别对比一览'
    },
    tableHeaders: ['级别', '用户影响', '响应时间', '值班要求'],
    levels: [
      {
        id: 'p0',
        shortName: '致命',
        name: '致命事故 (Critical)',
        color: '#ef4444',
        definition:
          '核心业务完全不可用，大面积用户受影响，造成严重经济损失或数据丢失风险。',
        responseTime: '立即响应，5 分钟内到位',
        userImpact: '全部用户',
        oncallReq: '全员到位',
        channels: ['电话', '短信', '即时通讯', '邮件'],
        examples: [
          '主数据库宕机，所有读写请求失败',
          '支付系统完全不可用，用户无法下单',
          '用户数据大规模泄露'
        ],
        requirements: [
          '事故指挥官必须在 5 分钟内就位',
          '每 15 分钟向管理层通报进展',
          '所有相关团队取消休假立即支援',
          '事后 24 小时内完成复盘报告'
        ]
      },
      {
        id: 'p1',
        shortName: '严重',
        name: '严重事故 (Major)',
        color: '#f59e0b',
        definition: '核心功能部分受损，大量用户体验降级，但系统未完全不可用。',
        responseTime: '15 分钟内响应',
        userImpact: '大量用户',
        oncallReq: '核心团队',
        channels: ['即时通讯', '短信', '邮件'],
        examples: [
          '搜索功能返回结果严重延迟（>5s）',
          '部分地区用户无法登录',
          '订单处理队列严重积压'
        ],
        requirements: [
          '值班工程师 15 分钟内开始排查',
          '每 30 分钟通报一次进展',
          '必要时升级为 P0',
          '事后 48 小时内完成复盘'
        ]
      },
      {
        id: 'p2',
        shortName: '中等',
        name: '中等事故 (Moderate)',
        color: '#eab308',
        definition: '非核心功能异常，部分用户受影响，不影响主要业务流程。',
        responseTime: '1 小时内响应',
        userImpact: '部分用户',
        oncallReq: '值班工程师',
        channels: ['即时通讯', '邮件'],
        examples: [
          '用户头像加载失败',
          '报表导出功能超时',
          '非关键页面 CSS 样式错乱'
        ],
        requirements: [
          '值班工程师在工作时间内处理',
          '当天给出修复方案',
          '不需要全员响应',
          '在周报中记录'
        ]
      },
      {
        id: 'p3',
        shortName: '轻微',
        name: '轻微问题 (Minor)',
        color: '#84cc16',
        definition: '边缘功能小问题，极少数用户受影响，不影响正常使用。',
        responseTime: '当天确认，本周处理',
        userImpact: '极少用户',
        oncallReq: '正常排期',
        channels: ['邮件', '工单系统'],
        examples: [
          '某个按钮在特定浏览器下对齐偏移',
          '日志中出现非关键性警告',
          '文案有错别字'
        ],
        requirements: [
          '记录到缺陷跟踪系统',
          '纳入正常迭代排期',
          '不需要紧急响应',
          '修复后正常发布'
        ]
      },
      {
        id: 'p4',
        shortName: '建议',
        name: '改进建议 (Suggestion)',
        color: '#64748b',
        definition: '非故障类问题，属于优化建议或技术债务，不影响任何用户。',
        responseTime: '按优先级排期',
        userImpact: '无直接影响',
        oncallReq: '无需值班',
        channels: ['工单系统'],
        examples: [
          '代码中存在可优化的性能瓶颈',
          '依赖库版本过旧需要升级',
          '监控覆盖率不足需要补充'
        ],
        requirements: [
          '记录到技术债务清单',
          '季度规划时评估优先级',
          '作为团队改进项跟踪',
          '无时间压力'
        ]
      }
    ]
  },
  timeline: {
    title: '事故响应时间线 (Incident Timeline)',
    subtitle: '点击各阶段，了解每个环节的关键动作',
    actionsTitle: '关键动作：',
    rolesLabel: '参与角色：',
    playing: '播放中...',
    play: '自动演示完整流程',
    reset: '重置',
    phases: [
      {
        id: 'detect',
        name: '发现',
        timeHint: 'T+0',
        icon: '🔍',
        color: '#ef4444',
        duration: '目标 < 5 分钟',
        description:
          '通过监控告警、用户反馈或自动化检测发现系统异常。越早发现，损失越小。',
        actions: [
          '监控系统触发告警（CPU、延迟、错误率等）',
          '值班人员收到通知并确认',
          '初步判断影响范围',
          '在事故频道发出第一条通报'
        ],
        roles: ['值班工程师', '监控系统']
      },
      {
        id: 'triage',
        name: '分级',
        timeHint: 'T+5min',
        icon: '📋',
        color: '#f59e0b',
        duration: '目标 < 10 分钟',
        description:
          '快速评估事故严重程度，确定优先级（P0-P4），决定响应规模和升级路径。',
        actions: [
          '评估用户影响面（多少用户受影响？）',
          '确定业务影响（核心功能是否不可用？）',
          '分配事故等级（P0/P1/P2/P3/P4）',
          '根据等级启动对应的响应流程'
        ],
        roles: ['值班工程师', '事故指挥官']
      },
      {
        id: 'mitigate',
        name: '止血',
        timeHint: 'T+15min',
        icon: '🚑',
        color: '#3b82f6',
        duration: '目标 < 1 小时',
        description:
          '采取紧急措施恢复服务，优先止血而非根治。回滚、降级、限流都是常见手段。',
        actions: [
          '回滚最近的变更（代码、配置、基础设施）',
          '启用降级方案或备用系统',
          '实施限流保护核心链路',
          '持续监控恢复进度并通报状态'
        ],
        roles: ['事故指挥官', '运维工程师', '开发工程师']
      },
      {
        id: 'resolve',
        name: '解决',
        timeHint: 'T+1h',
        icon: '🔧',
        color: '#22c55e',
        duration: '视复杂度而定',
        description:
          '在服务恢复后，定位根本原因并实施永久修复，确保同类问题不再发生。',
        actions: [
          '深入分析日志、监控数据定位根因',
          '编写并审核修复代码',
          '在预发布环境验证修复效果',
          '灰度发布修复，确认问题彻底解决'
        ],
        roles: ['开发工程师', '架构师', 'QA 工程师']
      },
      {
        id: 'postmortem',
        name: '复盘',
        timeHint: 'T+48h',
        icon: '📝',
        color: '#8b5cf6',
        duration: '事故后 48 小时内',
        description:
          '召开无责复盘会议，分析根因，提炼经验教训，制定改进措施防止再次发生。',
        actions: [
          '撰写事故复盘报告（时间线、影响、根因）',
          '召开复盘会议，全员参与讨论',
          '使用"五个为什么"深挖根本原因',
          '制定并跟踪改进行动项（Action Items）'
        ],
        roles: ['事故指挥官', '全体相关人员', '管理层']
      }
    ]
  },
  escalation: {
    title: '告警升级流程 (Alert Escalation)',
    subtitle: '选择一个场景，观察告警如何逐级升级',
    progress: '升级进度：第 {current} / {total} 级',
    prev: '上一级',
    next: '下一级升级',
    rulesTitle: '升级规则说明',
    rules: [
      { color: '#22c55e', text: 'P3/P4 告警：仅通知值班工程师，无需升级' },
      { color: '#eab308', text: 'P2 告警：15 分钟未响应则升级至团队负责人' },
      {
        color: '#f59e0b',
        text: 'P1 告警：5 分钟未响应升级，30 分钟未解决升级至总监'
      },
      {
        color: '#ef4444',
        text: 'P0 告警：立即通知全链路，15 分钟未缓解升级至 VP/CTO'
      }
    ],
    scenarios: [
      { id: 'p0', name: 'P0 数据库宕机' },
      { id: 'p1', name: 'P1 接口超时' },
      { id: 'p2', name: 'P2 性能下降' }
    ],
    scenarioSteps: {
      p0: [
        {
          id: 1,
          icon: '📡',
          color: '#3b82f6',
          title: '监控系统检测',
          time: 'T+0s',
          desc: 'Prometheus 检测到数据库连接池耗尽，所有查询超时',
          action: '自动触发 P0 级别告警'
        },
        {
          id: 2,
          icon: '📱',
          color: '#f59e0b',
          title: '值班工程师',
          time: 'T+30s',
          desc: '电话 + 短信 + 即时通讯同时通知值班 DBA',
          action: '值班工程师确认告警，开始排查'
        },
        {
          id: 3,
          icon: '👥',
          color: '#ef4444',
          title: '团队负责人',
          time: 'T+5min',
          desc: '自动升级至数据库团队负责人和后端团队负责人',
          action: '团队负责人召集紧急会议'
        },
        {
          id: 4,
          icon: '🎖️',
          color: '#8b5cf6',
          title: '技术总监',
          time: 'T+15min',
          desc: '问题未缓解，自动升级至技术总监',
          action: '总监协调跨团队资源，启动应急预案'
        },
        {
          id: 5,
          icon: '🏢',
          color: '#1e293b',
          title: 'VP / CTO',
          time: 'T+30min',
          desc: '重大事故升级至高管层，准备对外沟通',
          action: 'CTO 决策是否启动灾备切换'
        }
      ],
      p1: [
        {
          id: 1,
          icon: '📡',
          color: '#3b82f6',
          title: '监控系统检测',
          time: 'T+0s',
          desc: 'API 网关检测到 P99 延迟超过 3 秒阈值',
          action: '触发 P1 级别告警'
        },
        {
          id: 2,
          icon: '📱',
          color: '#f59e0b',
          title: '值班工程师',
          time: 'T+1min',
          desc: '即时通讯 + 短信通知值班后端工程师',
          action: '工程师开始查看监控面板和日志'
        },
        {
          id: 3,
          icon: '👥',
          color: '#ef4444',
          title: '团队负责人',
          time: 'T+15min',
          desc: '15 分钟未解决，自动升级至团队负责人',
          action: '负责人评估是否需要更多人力支援'
        },
        {
          id: 4,
          icon: '🎖️',
          color: '#8b5cf6',
          title: '技术总监',
          time: 'T+30min',
          desc: '30 分钟未缓解，升级至技术总监',
          action: '总监决定是否升级为 P0'
        }
      ],
      p2: [
        {
          id: 1,
          icon: '📡',
          color: '#3b82f6',
          title: '监控系统检测',
          time: 'T+0s',
          desc: '检测到页面加载时间从 1.2s 上升到 2.8s',
          action: '触发 P2 级别告警'
        },
        {
          id: 2,
          icon: '📱',
          color: '#eab308',
          title: '值班工程师',
          time: 'T+5min',
          desc: '即时通讯通知值班前端工程师',
          action: '工程师确认问题，记录工单'
        },
        {
          id: 3,
          icon: '👥',
          color: '#f59e0b',
          title: '团队负责人',
          time: 'T+30min',
          desc: '30 分钟未响应时升级至团队负责人',
          action: '负责人安排当天修复'
        }
      ]
    }
  },
  command: {
    title: '事故指挥体系 (Incident Command System)',
    subtitle: '点击角色卡片，了解各角色的职责和协作关系',
    labels: {
      responsibilities: '核心职责',
      skills: '关键能力',
      quote: '常见话术'
    },
    scenarioTitle: '模拟场景：支付系统 P0 事故',
    roles: {
      ic: {
        id: 'ic',
        icon: '🎖️',
        name: '事故指挥官',
        eng: 'Incident Commander',
        color: '#8b5cf6',
        responsibilities: [
          '统筹协调整个事故响应过程',
          '做出关键决策（回滚、切流、降级等）',
          '确保各角色高效协作，避免混乱',
          '控制事故响应节奏，定时同步进展'
        ],
        skills: ['全局视野', '决策能力', '沟通协调', '压力管理'],
        quote:
          '当前状态：支付服务不可用。运维组排查数据库，后端组准备回滚方案，通讯组每 10 分钟同步一次。'
      },
      comm: {
        id: 'comm',
        icon: '📢',
        name: '通讯协调员',
        eng: 'Communications Lead',
        color: '#3b82f6',
        responsibilities: [
          '对内：定时向管理层和相关团队通报进展',
          '对外：更新状态页面，通知受影响客户',
          '记录事故时间线，为复盘提供素材',
          '过滤噪音信息，确保指挥官专注决策'
        ],
        skills: ['文字表达', '信息整理', '多方沟通', '时间管理'],
        quote:
          '状态更新：我们已识别到支付服务异常，团队正在紧急处理中，预计 30 分钟内恢复。'
      },
      ops: {
        id: 'ops',
        icon: '🔧',
        name: '运维负责人',
        eng: 'Operations Lead',
        color: '#ef4444',
        responsibilities: [
          '执行具体的技术操作（回滚、重启、扩容等）',
          '监控系统指标变化，判断操作效果',
          '管理基础设施层面的应急响应',
          '向指挥官汇报技术层面的进展'
        ],
        skills: ['系统运维', '故障排查', '脚本自动化', '监控分析'],
        quote: '数据库主节点 CPU 100%，正在执行主从切换，预计 2 分钟完成。'
      },
      dev: {
        id: 'dev',
        icon: '💻',
        name: '开发负责人',
        eng: 'Development Lead',
        color: '#22c55e',
        responsibilities: [
          '分析代码层面的问题根因',
          '准备和执行代码级别的修复或回滚',
          '评估变更风险，提供技术方案',
          '协调开发团队成员参与排查'
        ],
        skills: ['代码分析', '快速调试', '风险评估', '版本管理'],
        quote:
          '定位到问题：昨天上线的批量查询没有加分页，导致全表扫描拖垮数据库。准备回滚到上一版本。'
      }
    },
    scenarioEvents: [
      {
        time: '14:02',
        role: '监控',
        color: '#3b82f6',
        text: '支付成功率从 99.9% 骤降至 12%，触发 P0 告警'
      },
      {
        time: '14:03',
        role: '指挥官',
        color: '#8b5cf6',
        text: '确认 P0 事故，开启事故频道，召集各角色'
      },
      {
        time: '14:05',
        role: '通讯',
        color: '#3b82f6',
        text: '通知管理层，更新状态页为"服务降级"'
      },
      {
        time: '14:08',
        role: '运维',
        color: '#ef4444',
        text: '发现数据库主节点 CPU 100%，连接池耗尽'
      },
      {
        time: '14:10',
        role: '开发',
        color: '#22c55e',
        text: '定位到昨日上线的慢查询是根因'
      },
      {
        time: '14:12',
        role: '指挥官',
        color: '#8b5cf6',
        text: '决策：立即回滚昨日变更 + 数据库主从切换'
      },
      {
        time: '14:15',
        role: '运维',
        color: '#ef4444',
        text: '数据库主从切换完成，连接恢复'
      },
      {
        time: '14:18',
        role: '开发',
        color: '#22c55e',
        text: '代码回滚部署完成'
      },
      {
        time: '14:20',
        role: '通讯',
        color: '#3b82f6',
        text: '支付成功率恢复至 99.8%，通知各方服务恢复'
      }
    ]
  },
  postmortem: {
    title: '事后复盘：五个为什么 (5 Whys Analysis)',
    subtitle: '点击"继续追问"，层层深入挖掘根本原因',
    phenomenon: '现象',
    whyBadge: '第 {index} 个为什么',
    depth: '深度 {index} / {total}',
    whyQuestion: '为什么{answer}？',
    continueArrow: '↓ 继续追问',
    continueButton: '继续追问：为什么？',
    rootFound: '根本原因已找到',
    actionsLabel: '改进措施：',
    templateTitle: '复盘报告模板',
    cases: [
      {
        id: 'payment',
        name: '支付系统宕机',
        whys: [
          { answer: '支付系统在高峰期完全不可用，持续 18 分钟' },
          { answer: '数据库连接池被耗尽，所有新请求排队超时' },
          { answer: '一条慢查询占用连接长达 30 秒不释放' },
          { answer: '新上线的对账功能执行了全表扫描，没有使用索引' },
          { answer: '代码审查时没有检查 SQL 执行计划，也没有慢查询测试环节' }
        ],
        rootCause:
          '研发流程缺陷：代码审查清单中缺少 SQL 性能审查项，CI/CD 流水线中没有慢查询检测环节。',
        actions: [
          '代码审查清单增加"SQL 执行计划检查"必选项',
          'CI 流水线增加慢查询自动检测（阈值 100ms）',
          '数据库连接池增加单查询超时限制（5s 强制断开）',
          '建立大表变更审批流程'
        ]
      },
      {
        id: 'deploy',
        name: '部署导致服务中断',
        whys: [
          { answer: '新版本部署后，用户登录功能完全失效，持续 25 分钟' },
          { answer: '新版本的认证服务无法连接 Redis 缓存集群' },
          { answer: '部署脚本使用了错误的 Redis 集群地址（指向了测试环境）' },
          { answer: '环境配置是硬编码在部署脚本中的，没有使用配置中心' },
          { answer: '团队没有统一的配置管理规范，每个服务自行管理配置' }
        ],
        rootCause:
          '基础设施缺陷：缺乏统一的配置管理平台和规范，环境配置散落在各处，容易出错且难以审计。',
        actions: [
          '引入配置中心（如 Consul/Nacos），统一管理所有环境配置',
          '部署流水线增加配置校验步骤（连通性检查）',
          '禁止在代码和脚本中硬编码环境地址',
          '建立部署前 Checklist，包含配置确认环节'
        ]
      }
    ],
    templateSections: [
      {
        name: '事故概述',
        desc: '简要描述事故发生的时间、持续时长、影响范围和严重程度。例如："2024年3月15日 14:02-14:20，支付服务完全不可用，影响约 12 万笔交易。"'
      },
      {
        name: '时间线',
        desc: '按时间顺序记录从发现到解决的每一个关键事件，精确到分钟。包括：告警触发、人员响应、排查过程、修复操作、服务恢复等。'
      },
      {
        name: '影响评估',
        desc: '量化事故影响：受影响用户数、失败请求数、经济损失估算、SLA 影响等。用数据说话，避免模糊描述。'
      },
      {
        name: '根因分析',
        desc: '使用"五个为什么"等方法深入分析根本原因。区分直接原因（触发因素）和根本原因（系统性缺陷）。'
      },
      {
        name: '改进措施',
        desc: '列出具体的改进行动项，每项必须有负责人和截止日期。分为短期（本周）、中期（本月）、长期（本季度）三个层次。'
      },
      {
        name: '经验教训',
        desc: '总结哪些做得好（值得保持）、哪些做得不好（需要改进）、哪些是意外发现（新的风险点）。'
      }
    ]
  }
}
