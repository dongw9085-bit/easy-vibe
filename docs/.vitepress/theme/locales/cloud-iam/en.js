export default {
  common: {
    coreIdea: 'Core idea:'
  },
  accessKey: {
    title: 'Access Key Management',
    subtitle: 'AK/SK lifecycle',
    createdAge: 'Created {days} days ago',
    apiCalls: 'API calls',
    lastUsedLabel: 'Last used',
    rotate: '🔄 Rotate',
    deactivate: '⏸️ Disable',
    delete: '🗑️ Delete',
    lastUsed: {
      initial: '2 hours ago',
      now: 'Just now'
    },
    statuses: {
      active: 'Active',
      inactive: 'Disabled'
    },
    rotation: {
      generate: 'Generating new key...',
      create: 'Creating new key...',
      update: 'Updating configuration...',
      verify: 'Verification complete'
    },
    confirmDeactivate: 'Disable this access key?',
    confirmDelete: 'Warning: deletion cannot be undone.',
    deleted: 'Key deleted (demo)',
    info: 'Access key leaks are a common cause of cloud security incidents. Prefer IAM roles, and rotate keys regularly when keys are unavoidable.'
  },
  bestPractices: {
    title: 'Permission Management Best Practices',
    subtitle: 'Apply security controls by priority',
    info: 'Start from P0 and improve step by step. Each improvement significantly raises account security.',
    items: [
      {
        icon: '👑',
        title: 'Protect the root account',
        priority: 'p0',
        priorityText: 'P0',
        description:
          'The root account owns the cloud service and needs the strongest protection.',
        checklist: [
          'Enable MFA',
          'Create an IAM admin user',
          'Delete root access keys'
        ]
      },
      {
        icon: '👤',
        title: 'Minimize user permissions',
        priority: 'p0',
        priorityText: 'P0',
        description:
          'Follow least privilege and grant only the minimum access needed for work.',
        checklist: [
          'Avoid full-access policies',
          'Manage through groups',
          'Review users regularly'
        ]
      },
      {
        icon: '🎭',
        title: 'Prefer IAM roles',
        priority: 'p1',
        priorityText: 'P1',
        description:
          'IAM roles use temporary credentials instead of long-lived secrets, reducing leak risk.',
        checklist: [
          'Use instance roles for EC2',
          'Use execution roles for Lambda',
          'Use AssumeRole across accounts'
        ]
      },
      {
        icon: '🔑',
        title: 'Manage access keys safely',
        priority: 'p1',
        priorityText: 'P1',
        description: 'When AK/SK is required, apply strict security controls.',
        checklist: [
          'Do not hard-code credentials',
          'Use a secret manager',
          'Rotate keys regularly'
        ]
      },
      {
        icon: '📊',
        title: 'Monitoring and auditing',
        priority: 'p2',
        priorityText: 'P2',
        description:
          'Build monitoring and auditing so security events can be detected early.',
        checklist: [
          'Enable CloudTrail',
          'Alert on critical actions',
          'Review permissions regularly'
        ]
      }
    ]
  },
  crossAccount: {
    title: 'Cross-Account Access',
    subtitle: 'AssumeRole mechanism',
    sourceAccount: 'Account A (source)',
    stsService: 'STS service',
    verifyIdentity: 'Verify identity',
    temporaryCredentials: 'Issue temporary credentials',
    targetAccount: 'Account B (target)',
    accessResource: 'Access S3/EC2',
    codeTitle: 'Python example',
    codeComment:
      '# Use temporary credentials to access target account resources',
    info: 'Cross-account access works through role assumption. Temporary credentials expire automatically, making access safer and easier to manage.'
  },
  structure: {
    title: 'Five Core IAM Concepts',
    subtitle: 'Building blocks of cloud permission management',
    exampleLabel: 'Examples:',
    info: 'IAM is like a company access-control system: the root account is the owner, users are employees, roles are temporary visitor badges, and policies define who can enter which doors.',
    layers: [
      {
        icon: '👑',
        name: 'Root account',
        shortDesc: 'Highest privilege',
        description:
          'The cloud account owner with full control over all resources. Use only for initial setup.',
        examples: [
          'Create/delete IAM users',
          'Manage billing and payment methods'
        ]
      },
      {
        icon: '👤',
        name: 'IAM user',
        shortDesc: 'Personal identity',
        description:
          'Long-lived credentials created for specific people to sign in and operate cloud services.',
        examples: ['Developer account', 'Operations account']
      },
      {
        icon: '👥',
        name: 'User group',
        shortDesc: 'Batch management',
        description:
          'Groups multiple users and assigns permissions together to simplify management.',
        examples: ['Developer group', 'Operations group']
      },
      {
        icon: '🎭',
        name: 'Role',
        shortDesc: 'Temporary authorization',
        description:
          'A temporary identity that can be assumed by accounts or services. Expiring credentials are safer.',
        examples: ['Cross-account access role', 'Service role']
      },
      {
        icon: '📋',
        name: 'Policy',
        shortDesc: 'Permission rules',
        description:
          'A JSON rule document that defines who can perform which action on which resource.',
        examples: ['Allow S3 access', 'Deny EC2 deletion']
      }
    ]
  },
  comparison: {
    title: 'IAM vs RAM Comparison',
    subtitle: 'Permission services across cloud providers',
    ramLabel: 'Alibaba Cloud RAM',
    info: 'IAM and RAM share the same core concepts. Most differences are terminology and implementation details.',
    features: [
      { icon: '👤', name: 'User management' },
      { icon: '👥', name: 'User groups' },
      { icon: '🎭', name: 'Role assumption' },
      { icon: '📋', name: 'Permission policies' },
      { icon: '🔗', name: 'Identity federation' },
      { icon: '🔑', name: 'Access keys' }
    ],
    featureDetails: [
      {
        name: 'User management',
        awsDetail: 'IAM User supports programmatic and console access',
        ramDetail:
          'RAM user has similar capabilities and supports sub-account sign-in'
      },
      {
        name: 'User group management',
        awsDetail: 'IAM Group manages user permissions in batches',
        ramDetail: 'RAM user groups manage users by team or department'
      },
      {
        name: 'Roles and assumption',
        awsDetail: 'IAM Role + STS AssumeRole',
        ramDetail: 'RAM Role + STS AssumeRole'
      },
      {
        name: 'Permission policies',
        awsDetail: 'JSON policy format',
        ramDetail: 'Permission policies with similar syntax'
      },
      {
        name: 'Identity federation',
        awsDetail: 'SAML 2.0 / OIDC with AD/Okta support',
        ramDetail: 'SAML 2.0 with DingTalk and other integrations'
      },
      {
        name: 'Access keys',
        awsDetail: 'AK/SK with rotation and analysis',
        ramDetail: 'AccessKey with security recommendations'
      }
    ]
  },
  identityProvider: {
    title: 'Identity Provider Integration',
    subtitle: 'Enterprise SSO login flow',
    info: 'Enterprise IdP centralizes identity management and avoids creating separate accounts on every cloud platform.',
    steps: [
      { title: 'Open app' },
      { title: 'Redirect to IdP' },
      { title: 'User login' },
      { title: 'Issue token' },
      { title: 'Return to app' },
      { title: 'Exchange credentials' },
      { title: 'Access resources' }
    ],
    stepDetails: [
      {
        title: 'User opens enterprise app',
        detail:
          'The user opens a business system in the browser, and the app detects that no valid session exists.',
        flow: [
          {
            from: { name: 'User' },
            action: 'Open →',
            to: { name: 'Enterprise app' }
          }
        ]
      },
      {
        title: 'App redirects to IdP',
        detail:
          'The app creates a SAML Request and redirects the user to the enterprise identity provider.',
        flow: [
          { from: { name: 'App' }, action: 'Redirect →', to: { name: 'IdP' } }
        ]
      },
      {
        title: 'User logs in at IdP',
        detail:
          'The user enters enterprise credentials on the IdP login page and may need MFA.',
        flow: [
          { from: { name: 'User' }, action: 'Login →', to: { name: 'IdP' } }
        ]
      },
      {
        title: 'IdP issues SAML token',
        detail:
          'After successful authentication, the IdP generates a SAML Assertion containing the user identity.',
        flow: [
          { from: { name: 'IdP' }, action: 'Issue →', to: { name: 'Token' } }
        ]
      },
      {
        title: 'Return to enterprise app',
        detail:
          'The IdP posts the SAML Response back to the enterprise app through the browser.',
        flow: [
          { from: { name: 'Browser' }, action: 'POST →', to: { name: 'App' } }
        ]
      },
      {
        title: 'Exchange cloud temporary credentials',
        detail:
          'The app uses SAML to request temporary security credentials from the cloud STS service.',
        flow: [
          {
            from: { name: 'App' },
            action: 'AssumeRole →',
            to: { name: 'Cloud STS' }
          }
        ]
      },
      {
        title: 'Access cloud resources',
        detail: 'The app calls cloud service APIs with temporary credentials.',
        flow: [
          {
            from: { name: 'App' },
            action: 'Access →',
            to: { name: 'Cloud service' }
          }
        ]
      }
    ]
  },
  mfa: {
    title: 'Multi-Factor Authentication',
    subtitle: 'MFA two-factor authentication flow',
    password: 'Password',
    success: 'Success',
    passwordTitle: 'Enter password',
    passwordPlaceholder: 'Enter any password',
    verifyPassword: 'Verify password',
    codeTitle: 'MFA code',
    codeHint: 'Simulated code',
    codePlaceholder: 'Enter the code above',
    verify: 'Verify',
    successTitle: 'Login successful!',
    successDesc: 'MFA two-factor authentication passed',
    reset: 'Replay demo',
    info: 'Enabling MFA can reduce account takeover risk by 99.9%. Even if the password leaks, an attacker cannot sign in without your MFA device.'
  },
  permissionHierarchy: {
    title: 'Permission Hierarchy',
    subtitle: 'Scope differences across permission levels',
    scopeLabel: 'Scope:',
    scenarioLabel: 'Scenario:',
    info: 'Least privilege means always granting only the minimum permissions required to complete the work.',
    levels: [
      {
        icon: '👑',
        name: 'Root account',
        scope: 'Highest account-wide privilege',
        scenario: 'Account owner with all permissions',
        permissions: [
          { name: 'Full management' },
          { name: 'Billing management' },
          { name: 'Close account' }
        ]
      },
      {
        icon: '👤',
        name: 'IAM admin',
        scope: 'Full IAM access',
        scenario: 'Manages all IAM users, roles, and policies',
        permissions: [
          { name: 'Create/delete users' },
          { name: 'Manage policies' },
          { name: 'View credentials' }
        ]
      },
      {
        icon: '👥',
        name: 'Regular user',
        scope: 'Limited permissions',
        scenario: 'Daily development with access to specific resources only',
        permissions: [
          { name: 'Read-only EC2' },
          { name: 'Read/write S3' },
          { name: 'View logs' }
        ]
      },
      {
        icon: '🎭',
        name: 'Temporary role',
        scope: 'Defined by policy',
        scenario: 'Cross-account access and temporary authorization',
        permissions: [
          { name: 'Temporary credentials' },
          { name: 'Cross-account' },
          { name: 'No long-lived credentials' }
        ]
      },
      {
        icon: '🔑',
        name: 'Service account',
        scope: 'API access',
        scenario: 'Applications and CI/CD pipelines',
        permissions: [
          { name: 'AK/SK' },
          { name: 'Specific API' },
          { name: 'Regular rotation' }
        ]
      }
    ]
  },
  policyEditor: {
    title: 'Policy Editor',
    subtitle: 'Understand IAM policy JSON structure',
    editorTitle: 'Policy editor',
    generatedTitle: 'Generated policy',
    effectTitle: 'Permission effect preview',
    info: 'Policies are made of Effect, Action, Resource, and Condition. Understanding these four elements is the basis for writing IAM policies.',
    actions: [
      {
        id: 'describe',
        name: 'View instances',
        desc: 'DescribeInstances',
        resource: 'ecs:Describe*'
      },
      {
        id: 'start',
        name: 'Start instance',
        desc: 'StartInstance',
        resource: 'ecs:StartInstance'
      },
      {
        id: 'stop',
        name: 'Stop instance',
        desc: 'StopInstance',
        resource: 'ecs:StopInstance'
      },
      {
        id: 'reboot',
        name: 'Reboot instance',
        desc: 'RebootInstance',
        resource: 'ecs:RebootInstance'
      },
      {
        id: 'create',
        name: 'Create instance',
        desc: 'CreateInstance',
        resource: 'ecs:CreateInstance'
      },
      {
        id: 'delete',
        name: 'Delete instance',
        desc: 'DeleteInstance',
        resource: 'ecs:DeleteInstance'
      }
    ]
  },
  rolePolicy: {
    title: 'Roles and Policies',
    subtitle: 'How policies combine',
    roleType: 'Cross-account access role',
    trustTitle: '🔐 Trust policy',
    info: 'Policy composition means a role can attach multiple policies, and final permissions are the combined result. Deny has higher priority than Allow.',
    trustPolicy: [
      { principal: 'Account A (123456789012)', action: 'sts:AssumeRole' },
      { principal: 'Specific IAM user', action: 'sts:AssumeRole' }
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
