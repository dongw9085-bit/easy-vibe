export default {
  quality: {
    title: '数据质量检测器',
    subtitle: '点击不同维度，查看数据质量问题示例',
    badLabel: '问题数据',
    goodLabel: '治理后',
    scoreLabel: '质量评分',
    dimensions: [
      {
        key: 'completeness',
        name: '完整性',
        icon: '📋',
        desc: '数据是否存在缺失值',
        score: 72,
        badData: {
          cols: ['用户ID', '姓名', '邮箱', '手机号'],
          rows: [
            [
              { value: '001' },
              { value: '张三' },
              { value: 'zhang@mail.com' },
              { value: '138xxxx1234' }
            ],
            [
              { value: '002' },
              { value: '李四' },
              { value: '', error: true },
              { value: '', error: true }
            ],
            [
              { value: '003' },
              { value: '', error: true },
              { value: 'wang@mail.com' },
              { value: '139xxxx5678' }
            ]
          ]
        },
        goodData: {
          cols: ['用户ID', '姓名', '邮箱', '手机号'],
          rows: [
            [
              { value: '001' },
              { value: '张三' },
              { value: 'zhang@mail.com' },
              { value: '138xxxx1234' }
            ],
            [
              { value: '002' },
              { value: '李四' },
              { value: 'li@mail.com' },
              { value: '137xxxx9012' }
            ],
            [
              { value: '003' },
              { value: '王五' },
              { value: 'wang@mail.com' },
              { value: '139xxxx5678' }
            ]
          ]
        }
      },
      {
        key: 'accuracy',
        name: '准确性',
        icon: '🎯',
        desc: '数据值是否正确反映真实情况',
        score: 65,
        badData: {
          cols: ['订单ID', '金额', '日期', '状态'],
          rows: [
            [
              { value: 'ORD-101' },
              { value: '-50.00', error: true },
              { value: '2025-01-15' },
              { value: '已完成' }
            ],
            [
              { value: 'ORD-102' },
              { value: '299.00' },
              { value: '2025-13-01', error: true },
              { value: '已发货' }
            ],
            [
              { value: 'ORD-103' },
              { value: '1500.00' },
              { value: '2025-02-28' },
              { value: '已退款', error: true }
            ]
          ]
        },
        goodData: {
          cols: ['订单ID', '金额', '日期', '状态'],
          rows: [
            [
              { value: 'ORD-101' },
              { value: '50.00' },
              { value: '2025-01-15' },
              { value: '已完成' }
            ],
            [
              { value: 'ORD-102' },
              { value: '299.00' },
              { value: '2025-01-13' },
              { value: '已发货' }
            ],
            [
              { value: 'ORD-103' },
              { value: '1500.00' },
              { value: '2025-02-28' },
              { value: '已完成' }
            ]
          ]
        }
      },
      {
        key: 'consistency',
        name: '一致性',
        icon: '🔗',
        desc: '同一数据在不同系统中是否一致',
        score: 58,
        badData: {
          cols: ['来源', '用户名', '手机号', '地址'],
          rows: [
            [
              { value: 'CRM' },
              { value: '张三' },
              { value: '13812341234' },
              { value: '北京市朝阳区' }
            ],
            [
              { value: '订单系统' },
              { value: '张三丰', error: true },
              { value: '13812341234' },
              { value: '北京朝阳', error: true }
            ],
            [
              { value: '客服系统' },
              { value: '张三' },
              { value: '13899999999', error: true },
              { value: '北京市朝阳区' }
            ]
          ]
        },
        goodData: {
          cols: ['来源', '用户名', '手机号', '地址'],
          rows: [
            [
              { value: 'CRM' },
              { value: '张三' },
              { value: '13812341234' },
              { value: '北京市朝阳区' }
            ],
            [
              { value: '订单系统' },
              { value: '张三' },
              { value: '13812341234' },
              { value: '北京市朝阳区' }
            ],
            [
              { value: '客服系统' },
              { value: '张三' },
              { value: '13812341234' },
              { value: '北京市朝阳区' }
            ]
          ]
        }
      },
      {
        key: 'timeliness',
        name: '时效性',
        icon: '⏰',
        desc: '数据是否及时更新',
        score: 80,
        badData: {
          cols: ['商品ID', '价格', '库存', '更新时间'],
          rows: [
            [
              { value: 'SKU-001' },
              { value: '¥299' },
              { value: '50' },
              { value: '2024-06-01', error: true }
            ],
            [
              { value: 'SKU-002' },
              { value: '¥599' },
              { value: '0', error: true },
              { value: '2024-03-15', error: true }
            ],
            [
              { value: 'SKU-003' },
              { value: '¥199' },
              { value: '200' },
              { value: '2025-02-20' }
            ]
          ]
        },
        goodData: {
          cols: ['商品ID', '价格', '库存', '更新时间'],
          rows: [
            [
              { value: 'SKU-001' },
              { value: '¥259' },
              { value: '35' },
              { value: '2025-02-25' }
            ],
            [
              { value: 'SKU-002' },
              { value: '¥549' },
              { value: '12' },
              { value: '2025-02-25' }
            ],
            [
              { value: 'SKU-003' },
              { value: '¥199' },
              { value: '180' },
              { value: '2025-02-25' }
            ]
          ]
        }
      },
      {
        key: 'uniqueness',
        name: '唯一性',
        icon: '🔑',
        desc: '数据是否存在重复记录',
        score: 70,
        badData: {
          cols: ['用户ID', '姓名', '邮箱', '注册时间'],
          rows: [
            [
              { value: '001' },
              { value: '张三' },
              { value: 'zhang@mail.com' },
              { value: '2025-01-01' }
            ],
            [
              { value: '005' },
              { value: '张三', error: true },
              { value: 'zhang@mail.com', error: true },
              { value: '2025-01-15', error: true }
            ],
            [
              { value: '002' },
              { value: '李四' },
              { value: 'li@mail.com' },
              { value: '2025-01-10' }
            ]
          ]
        },
        goodData: {
          cols: ['用户ID', '姓名', '邮箱', '注册时间'],
          rows: [
            [
              { value: '001' },
              { value: '张三' },
              { value: 'zhang@mail.com' },
              { value: '2025-01-01' }
            ],
            [
              { value: '002' },
              { value: '李四' },
              { value: 'li@mail.com' },
              { value: '2025-01-10' }
            ]
          ]
        }
      },
      {
        key: 'validity',
        name: '有效性',
        icon: '✅',
        desc: '数据是否符合预定义的格式和规则',
        score: 75,
        badData: {
          cols: ['字段', '值', '规则'],
          rows: [
            [
              { value: '邮箱' },
              { value: 'not-an-email', error: true },
              { value: '需包含@' }
            ],
            [
              { value: '年龄' },
              { value: '-5', error: true },
              { value: '0~150' }
            ],
            [
              { value: '手机号' },
              { value: '1234', error: true },
              { value: '11位数字' }
            ]
          ]
        },
        goodData: {
          cols: ['字段', '值', '规则'],
          rows: [
            [
              { value: '邮箱' },
              { value: 'user@mail.com' },
              { value: '需包含@' }
            ],
            [{ value: '年龄' }, { value: '28' }, { value: '0~150' }],
            [
              { value: '手机号' },
              { value: '13812345678' },
              { value: '11位数字' }
            ]
          ]
        }
      }
    ]
  },
  framework: {
    title: '数据治理框架',
    subtitle: '点击各阶段查看详情',
    stages: [
      {
        key: 'define',
        name: '定义标准',
        desc: '制定数据标准、命名规范、数据字典',
        activities: [
          {
            icon: '📖',
            name: '数据字典',
            desc: '定义每个字段的含义、类型、取值范围'
          },
          {
            icon: '📏',
            name: '命名规范',
            desc: '统一字段命名：snake_case、驼峰、前缀约定'
          },
          {
            icon: '🏷️',
            name: '分类分级',
            desc: '按敏感度分级：公开、内部、机密、绝密'
          }
        ]
      },
      {
        key: 'collect',
        name: '采集接入',
        desc: '规范数据采集流程，确保源头质量',
        activities: [
          {
            icon: '🔌',
            name: '接入规范',
            desc: '定义数据接入的格式、协议、频率要求'
          },
          {
            icon: '✅',
            name: '入库校验',
            desc: '数据写入前进行格式、完整性、合规性校验'
          },
          {
            icon: '📝',
            name: '血缘记录',
            desc: '记录数据来源、加工链路、依赖关系'
          }
        ]
      },
      {
        key: 'store',
        name: '存储管理',
        desc: '合理存储数据，控制成本和访问权限',
        activities: [
          {
            icon: '🗄️',
            name: '分层存储',
            desc: 'ODS → DWD → DWS → ADS 数仓分层'
          },
          {
            icon: '🔒',
            name: '权限控制',
            desc: '按角色和数据分级控制读写权限'
          },
          {
            icon: '♻️',
            name: '生命周期',
            desc: '热数据 → 温数据 → 冷数据 → 归档/删除'
          }
        ]
      },
      {
        key: 'use',
        name: '使用消费',
        desc: '让数据安全、高效地被业务使用',
        activities: [
          {
            icon: '🔍',
            name: '数据目录',
            desc: '提供可搜索的数据资产目录，降低找数成本'
          },
          {
            icon: '🎭',
            name: '脱敏处理',
            desc: '对敏感字段进行掩码、加密、泛化处理'
          },
          {
            icon: '📊',
            name: '质量监控',
            desc: '持续监控数据质量指标，异常时告警'
          }
        ]
      },
      {
        key: 'retire',
        name: '归档销毁',
        desc: '按合规要求归档或安全销毁数据',
        activities: [
          {
            icon: '📦',
            name: '归档策略',
            desc: '超过保留期的数据迁移到低成本存储'
          },
          {
            icon: '🗑️',
            name: '安全删除',
            desc: '按 GDPR/个保法要求彻底删除用户数据'
          },
          {
            icon: '📋',
            name: '审计日志',
            desc: '记录数据删除操作，满足合规审计要求'
          }
        ]
      }
    ]
  },
  lineage: {
    title: '数据血缘追踪',
    subtitle: '点击任意节点，查看上下游依赖关系',
    labels: {
      upstream: '上游依赖：',
      downstream: '下游消费：',
      owner: '负责人：',
      noUpstream: '无（数据源头）',
      noDownstream: '无（最终消费）',
      joiner: '、'
    },
    nodes: {
      mysql_user: {
        name: 'MySQL 用户表',
        icon: '🗄️',
        upstream: [],
        downstream: ['ods_user'],
        owner: '业务开发组'
      },
      mysql_order: {
        name: 'MySQL 订单表',
        icon: '🗄️',
        upstream: [],
        downstream: ['ods_order'],
        owner: '业务开发组'
      },
      log_click: {
        name: '点击日志',
        icon: '📝',
        upstream: [],
        downstream: ['ods_click'],
        owner: '前端团队'
      },
      ods_user: {
        name: 'ODS 用户',
        icon: '📥',
        upstream: ['mysql_user'],
        downstream: ['dwd_user'],
        owner: '数据工程师'
      },
      ods_order: {
        name: 'ODS 订单',
        icon: '📥',
        upstream: ['mysql_order'],
        downstream: ['dwd_order'],
        owner: '数据工程师'
      },
      ods_click: {
        name: 'ODS 点击',
        icon: '📥',
        upstream: ['log_click'],
        downstream: ['dwd_click'],
        owner: '数据工程师'
      },
      dwd_user: {
        name: 'DWD 用户明细',
        icon: '🔧',
        upstream: ['ods_user'],
        downstream: ['dws_user_profile'],
        owner: '数据开发'
      },
      dwd_order: {
        name: 'DWD 订单明细',
        icon: '🔧',
        upstream: ['ods_order'],
        downstream: ['dws_gmv'],
        owner: '数据开发'
      },
      dwd_click: {
        name: 'DWD 点击明细',
        icon: '🔧',
        upstream: ['ods_click'],
        downstream: ['dws_user_profile'],
        owner: '数据开发'
      },
      dws_user_profile: {
        name: 'DWS 用户画像',
        icon: '📊',
        upstream: ['dwd_user', 'dwd_click'],
        downstream: ['ads_report'],
        owner: '数据分析师'
      },
      dws_gmv: {
        name: 'DWS GMV 汇总',
        icon: '📊',
        upstream: ['dwd_order'],
        downstream: ['ads_report'],
        owner: '数据分析师'
      },
      ads_report: {
        name: 'ADS 经营报表',
        icon: '📈',
        upstream: ['dws_user_profile', 'dws_gmv'],
        downstream: [],
        owner: '数据产品'
      }
    },
    layers: [
      { label: '数据源', nodeIds: ['mysql_user', 'mysql_order', 'log_click'] },
      { label: 'ODS 层', nodeIds: ['ods_user', 'ods_order', 'ods_click'] },
      { label: 'DWD 层', nodeIds: ['dwd_user', 'dwd_order', 'dwd_click'] },
      { label: 'DWS 层', nodeIds: ['dws_user_profile', 'dws_gmv'] },
      { label: 'ADS 层', nodeIds: ['ads_report'] }
    ]
  }
}
