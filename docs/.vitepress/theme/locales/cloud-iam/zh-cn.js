export default {
  common: {
    coreIdea: '核心思想：'
  },
  accessKey: {
    title: '访问密钥管理',
    subtitle: 'AK/SK 生命周期',
    createdAge: '已创建 {days} 天',
    apiCalls: 'API调用',
    lastUsedLabel: '最后使用',
    rotate: '🔄 轮换',
    deactivate: '⏸️ 禁用',
    delete: '🗑️ 删除',
    lastUsed: {
      initial: '2小时前',
      now: '刚刚'
    },
    statuses: {
      active: '活跃',
      inactive: '已禁用'
    },
    rotation: {
      generate: '生成新密钥...',
      create: '创建新 Key...',
      update: '更新配置...',
      verify: '验证完成'
    },
    confirmDeactivate: '确定要禁用这个访问密钥吗？',
    confirmDelete: '警告：删除是不可逆的操作！',
    deleted: '密钥已删除（演示）',
    info: '访问密钥泄露是云安全事件主因之一。建议优先使用 IAM 角色，必须使用时请定期轮换。'
  },
  bestPractices: {
    title: '权限管理最佳实践',
    subtitle: '按优先级实施安全措施',
    info: '按照优先级从 P0 开始逐步实施。每个改进都能显著提升账号安全性。',
    items: [
      {
        icon: '👑',
        title: '根账号保护',
        priority: 'p0',
        priorityText: 'P0',
        description: '根账号是云服务的所有者，必须实施最高级别的保护。',
        checklist: ['启用 MFA', '创建 IAM 管理员用户', '删除根账号访问密钥']
      },
      {
        icon: '👤',
        title: '用户权限最小化',
        priority: 'p0',
        priorityText: 'P0',
        description: '遵循最小权限原则，只授予用户完成工作所需的最低权限。',
        checklist: ['避免全权限策略', '使用用户组管理', '定期审查用户']
      },
      {
        icon: '🎭',
        title: '优先使用 IAM 角色',
        priority: 'p1',
        priorityText: 'P1',
        description: 'IAM 角色没有长期凭证，通过临时凭证访问，降低泄露风险。',
        checklist: [
          'EC2 使用实例角色',
          'Lambda 使用执行角色',
          '跨账号用 AssumeRole'
        ]
      },
      {
        icon: '🔑',
        title: '访问密钥安全管理',
        priority: 'p1',
        priorityText: 'P1',
        description: '如果必须使用 AK/SK，需要实施严格的安全管理措施。',
        checklist: ['不硬编码凭证', '使用密钥管理服务', '定期轮换密钥']
      },
      {
        icon: '📊',
        title: '监控与审计',
        priority: 'p2',
        priorityText: 'P2',
        description: '建立全面的监控和审计机制，及时发现安全事件。',
        checklist: ['启用 CloudTrail', '配置关键操作告警', '定期审查权限']
      }
    ]
  },
  crossAccount: {
    title: '跨账号访问',
    subtitle: 'AssumeRole 机制',
    sourceAccount: '账号 A（源）',
    stsService: 'STS 服务',
    verifyIdentity: '验证身份',
    temporaryCredentials: '生成临时凭证',
    targetAccount: '账号 B（目标）',
    accessResource: '访问 S3/EC2',
    codeTitle: 'Python 示例',
    codeComment: '# 使用临时凭证访问目标账号资源',
    info: '通过角色扮演实现跨账号访问，临时凭证自动过期，更安全更易管理。'
  },
  structure: {
    title: 'IAM 五大核心概念',
    subtitle: '云上权限管理的基础构件',
    exampleLabel: '示例：',
    info: 'IAM 就像公司的门禁系统——根账号是老板，用户是员工，角色是临时访客证，策略是"谁能进哪些门"的规则。',
    layers: [
      {
        icon: '👑',
        name: '根账号',
        shortDesc: '最高权限',
        description:
          '云账号的所有者，拥有全部资源的完全控制权限。建议仅用于初始设置。',
        examples: ['创建/删除 IAM 用户', '管理账单和支付方式']
      },
      {
        icon: '👤',
        name: 'IAM 用户',
        shortDesc: '个人身份',
        description: '为具体人员创建的长期凭证，用于日常登录和操作云服务。',
        examples: ['开发人员账号', '运维人员账号']
      },
      {
        icon: '👥',
        name: '用户组',
        shortDesc: '批量管理',
        description: '将多个用户归为一组，统一分配权限，简化管理。',
        examples: ['开发组', '运维组']
      },
      {
        icon: '🎭',
        name: '角色',
        shortDesc: '临时授权',
        description:
          '一种临时身份，可以被切换或赋予其他账号/服务，具有时效性更安全。',
        examples: ['跨账号访问角色', '服务角色']
      },
      {
        icon: '📋',
        name: '策略',
        shortDesc: '权限规则',
        description:
          '定义"谁可以对什么资源执行什么操作"的规则文档，以 JSON 格式编写。',
        examples: ['允许访问 S3', '禁止删除 EC2']
      }
    ]
  },
  comparison: {
    title: 'IAM vs RAM 对比',
    subtitle: '不同云厂商权限管理服务',
    ramLabel: '阿里云 RAM',
    info: 'IAM 和 RAM 核心概念基本一致，只是术语和实现细节略有不同。',
    features: [
      { icon: '👤', name: '用户管理' },
      { icon: '👥', name: '用户组' },
      { icon: '🎭', name: '角色扮演' },
      { icon: '📋', name: '权限策略' },
      { icon: '🔗', name: '身份联合' },
      { icon: '🔑', name: '访问密钥' }
    ],
    featureDetails: [
      {
        name: '用户管理',
        awsDetail: 'IAM User，支持编程访问和控制台访问',
        ramDetail: 'RAM 用户，功能类似，支持子账号登录'
      },
      {
        name: '用户组管理',
        awsDetail: 'IAM Group 批量管理用户权限',
        ramDetail: 'RAM 用户组，按部门分组管理'
      },
      {
        name: '角色与扮演',
        awsDetail: 'IAM Role + STS AssumeRole',
        ramDetail: 'RAM 角色 + STS AssumeRole'
      },
      {
        name: '权限策略',
        awsDetail: 'JSON 格式 Policy',
        ramDetail: '语法类似的权限策略'
      },
      {
        name: '身份联合',
        awsDetail: 'SAML 2.0 / OIDC，支持 AD/Okta',
        ramDetail: 'SAML 2.0，支持钉钉等'
      },
      {
        name: '访问密钥',
        awsDetail: 'AK/SK，支持轮换和分析',
        ramDetail: 'AccessKey，提供安全建议'
      }
    ]
  },
  identityProvider: {
    title: '身份提供商集成',
    subtitle: '企业 SSO 单点登录流程',
    info: '通过企业 IdP 统一管理用户身份，避免在每个云平台单独创建账号。',
    steps: [
      { title: '访问应用' },
      { title: '重定向 IdP' },
      { title: '用户登录' },
      { title: '颁发令牌' },
      { title: '返回应用' },
      { title: '换取凭证' },
      { title: '访问资源' }
    ],
    stepDetails: [
      {
        title: '用户访问企业应用',
        detail: '用户打开浏览器访问企业业务系统，应用检测到用户没有有效会话。',
        flow: [
          { from: { name: '用户' }, action: '访问 →', to: { name: '企业应用' } }
        ]
      },
      {
        title: '应用重定向到 IdP',
        detail: '应用生成 SAML Request，将用户重定向到企业身份提供商。',
        flow: [
          { from: { name: '应用' }, action: '重定向 →', to: { name: 'IdP' } }
        ]
      },
      {
        title: '用户在 IdP 登录',
        detail: '用户在 IdP 登录页面输入企业账号密码，可能需要 MFA 认证。',
        flow: [
          { from: { name: '用户' }, action: '登录 →', to: { name: 'IdP' } }
        ]
      },
      {
        title: 'IdP 颁发 SAML 令牌',
        detail: '用户认证成功后，IdP 生成包含用户身份的 SAML Assertion。',
        flow: [
          { from: { name: 'IdP' }, action: '颁发 →', to: { name: '令牌' } }
        ]
      },
      {
        title: '返回企业应用',
        detail: 'IdP 通过浏览器将 SAML Response POST 到企业应用。',
        flow: [
          { from: { name: '浏览器' }, action: 'POST →', to: { name: '应用' } }
        ]
      },
      {
        title: '换取云临时凭证',
        detail: '应用使用 SAML 向云 STS 服务请求临时安全凭证。',
        flow: [
          {
            from: { name: '应用' },
            action: 'AssumeRole →',
            to: { name: '云 STS' }
          }
        ]
      },
      {
        title: '访问云资源',
        detail: '应用使用临时凭证调用云服务 API 访问资源。',
        flow: [
          { from: { name: '应用' }, action: '访问 →', to: { name: '云服务' } }
        ]
      }
    ]
  },
  mfa: {
    title: '多因素认证',
    subtitle: 'MFA 双因素认证流程',
    password: '密码',
    success: '成功',
    passwordTitle: '请输入密码',
    passwordPlaceholder: '输入任意密码',
    verifyPassword: '验证密码',
    codeTitle: 'MFA 验证码',
    codeHint: '模拟验证码',
    codePlaceholder: '输入上方验证码',
    verify: '验证',
    successTitle: '登录成功！',
    successDesc: '已通过 MFA 双因素认证',
    reset: '重新演示',
    info: '启用 MFA 可降低 99.9% 的账号被盗风险。即使密码泄露，攻击者没有你的 MFA 设备也无法登录。'
  },
  permissionHierarchy: {
    title: '权限层级结构',
    subtitle: '不同权限级别的范围差异',
    scopeLabel: '范围：',
    scenarioLabel: '场景：',
    info: '最小权限原则——始终授予用户完成工作所需的最小权限。',
    levels: [
      {
        icon: '👑',
        name: '根账号',
        scope: '全账号最高权限',
        scenario: '账号所有者，拥有所有权限',
        permissions: [
          { name: '完全管理' },
          { name: '账单管理' },
          { name: '关闭账号' }
        ]
      },
      {
        icon: '👤',
        name: 'IAM 管理员',
        scope: 'IAM 全权限',
        scenario: '管理所有 IAM 用户、角色、策略',
        permissions: [
          { name: '创建/删除用户' },
          { name: '管理策略' },
          { name: '查看凭证' }
        ]
      },
      {
        icon: '👥',
        name: '普通用户',
        scope: '受限权限',
        scenario: '日常开发，只能访问特定资源',
        permissions: [
          { name: '只读 EC2' },
          { name: '读写 S3' },
          { name: '查看日志' }
        ]
      },
      {
        icon: '🎭',
        name: '临时角色',
        scope: '按策略定义',
        scenario: '跨账号访问、临时授权',
        permissions: [
          { name: '临时凭证' },
          { name: '跨账号' },
          { name: '无长期凭证' }
        ]
      },
      {
        icon: '🔑',
        name: '服务账号',
        scope: 'API 访问',
        scenario: '应用程序、CI/CD 流水线',
        permissions: [
          { name: 'AK/SK' },
          { name: '特定 API' },
          { name: '定期轮换' }
        ]
      }
    ]
  },
  policyEditor: {
    title: '策略编辑器',
    subtitle: '理解 IAM 策略的 JSON 结构',
    editorTitle: '策略编辑器',
    generatedTitle: '生成的策略',
    effectTitle: '权限效果预览',
    info: '策略由 Effect、Action、Resource、Condition 四个核心元素组成，理解这四个元素的作用是编写 IAM 策略的基础。',
    actions: [
      {
        id: 'describe',
        name: '查看实例',
        desc: 'DescribeInstances',
        resource: 'ecs:Describe*'
      },
      {
        id: 'start',
        name: '启动实例',
        desc: 'StartInstance',
        resource: 'ecs:StartInstance'
      },
      {
        id: 'stop',
        name: '停止实例',
        desc: 'StopInstance',
        resource: 'ecs:StopInstance'
      },
      {
        id: 'reboot',
        name: '重启实例',
        desc: 'RebootInstance',
        resource: 'ecs:RebootInstance'
      },
      {
        id: 'create',
        name: '创建实例',
        desc: 'CreateInstance',
        resource: 'ecs:CreateInstance'
      },
      {
        id: 'delete',
        name: '删除实例',
        desc: 'DeleteInstance',
        resource: 'ecs:DeleteInstance'
      }
    ]
  },
  rolePolicy: {
    title: '角色与策略',
    subtitle: '策略叠加原理',
    roleType: '跨账号访问角色',
    trustTitle: '🔐 信任策略',
    info: '策略叠加——一个角色可附加多个策略，最终权限是所有策略的叠加结果。Deny 优先级高于 Allow。',
    trustPolicy: [
      { principal: '账号 A (123456789012)', action: 'sts:AssumeRole' },
      { principal: '特定 IAM 用户', action: 'sts:AssumeRole' }
    ],
    attachedPolicies: [
      {
        name: 'S3ReadWritePolicy',
        icon: '📦',
        permissions: [
          { effect: 'Allow', action: 's3:GetObject' },
          { effect: 'Allow', action: 's3:PutObject' }
        ]
      },
      {
        name: 'CloudWatchLogsPolicy',
        icon: '📊',
        permissions: [
          { effect: 'Allow', action: 'logs:CreateLogGroup' },
          { effect: 'Allow', action: 'logs:PutLogEvents' }
        ]
      },
      {
        name: 'DenySensitiveData',
        icon: '🚫',
        permissions: [
          { effect: 'Deny', action: 's3:GetObject (sensitive/*)' },
          { effect: 'Deny', action: 's3:DeleteObject' }
        ]
      }
    ]
  }
}
