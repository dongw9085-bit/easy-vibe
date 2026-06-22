export default {
  chartSelector: {
    title: '图表类型选择器',
    subtitle: '选择你的数据目的，查看推荐的图表类型',
    panelTitle: '{purpose}：推荐图表',
    exampleLabel: '示例：',
    purposes: [
      {
        key: 'comparison',
        name: '比较',
        icon: '📊',
        charts: [
          {
            name: '柱状图',
            visual: '▐▐▐',
            desc: '比较不同类别的数值大小',
            example: '各部门销售额对比'
          },
          {
            name: '分组柱状图',
            visual: '▐▐ ▐▐',
            desc: '多维度分组比较',
            example: '各季度各产品线收入'
          },
          {
            name: '雷达图',
            visual: '◇',
            desc: '多维度综合对比',
            example: '候选人能力评估'
          }
        ]
      },
      {
        key: 'trend',
        name: '趋势',
        icon: '📈',
        charts: [
          {
            name: '折线图',
            visual: '╱╲╱',
            desc: '展示数据随时间的变化趋势',
            example: '月度用户增长曲线'
          },
          {
            name: '面积图',
            visual: '▓▓▓',
            desc: '强调趋势下的累积量',
            example: '各渠道流量占比变化'
          },
          {
            name: '阶梯图',
            visual: '┐└┐',
            desc: '展示离散时间点的变化',
            example: '价格调整历史'
          }
        ]
      },
      {
        key: 'proportion',
        name: '占比',
        icon: '🍩',
        charts: [
          {
            name: '饼图',
            visual: '◔',
            desc: '展示各部分占整体的比例',
            example: '市场份额分布'
          },
          {
            name: '环形图',
            visual: '◎',
            desc: '饼图的变体，中间可放数字',
            example: '预算使用率'
          },
          {
            name: '堆叠柱状图',
            visual: '▐▐▐',
            desc: '展示各部分的组成和总量',
            example: '各地区各品类销售构成'
          }
        ]
      },
      {
        key: 'distribution',
        name: '分布',
        icon: '🔔',
        charts: [
          {
            name: '直方图',
            visual: '▁▃▇▃▁',
            desc: '展示数据的频率分布',
            example: '用户年龄分布'
          },
          {
            name: '散点图',
            visual: '· ·· ·',
            desc: '展示两个变量的关系',
            example: '广告投入 vs 销售额'
          },
          {
            name: '箱线图',
            visual: '├─┤',
            desc: '展示数据的中位数、四分位数和异常值',
            example: '各城市房价分布'
          }
        ]
      },
      {
        key: 'relation',
        name: '关系',
        icon: '🕸️',
        charts: [
          {
            name: '桑基图',
            visual: '≋≋≋',
            desc: '展示流量或能量的流向',
            example: '用户转化漏斗'
          },
          {
            name: '网络图',
            visual: '⊙─⊙',
            desc: '展示节点之间的关联关系',
            example: '社交关系网络'
          },
          {
            name: '热力图',
            visual: '▓▒░',
            desc: '用颜色深浅表示数值大小',
            example: '各时段各页面访问量'
          }
        ]
      }
    ]
  },
  dashboardLayout: {
    title: '仪表盘布局模式',
    subtitle: '点击查看不同类型的仪表盘布局',
    useCaseLabel: '适用场景：',
    layouts: [
      {
        key: 'overview',
        name: '全局概览型',
        desc: '顶部核心指标卡片 + 中间趋势图 + 底部明细表',
        useCase: '管理层日报、运营大盘',
        widgets: [
          { type: 'kpi', label: 'DAU 12.5万' },
          { type: 'kpi', label: '收入 ¥85万' },
          { type: 'kpi', label: '转化率 3.2%' },
          { type: 'kpi', label: '客单价 ¥268' },
          { type: 'chart-wide', label: '趋势折线图' },
          { type: 'table', label: '明细数据表' }
        ]
      },
      {
        key: 'comparison',
        name: '对比分析型',
        desc: '左右对比布局，适合 A/B 测试或同环比分析',
        useCase: 'A/B 测试报告、竞品分析',
        widgets: [
          { type: 'half', label: '实验组指标' },
          { type: 'half', label: '对照组指标' },
          { type: 'chart-wide', label: '差异对比图' },
          { type: 'table', label: '统计显著性检验' }
        ]
      },
      {
        key: 'drill',
        name: '下钻分析型',
        desc: '从汇总到明细逐层下钻，支持交互式探索',
        useCase: '销售分析、用户行为分析',
        widgets: [
          { type: 'chart-wide', label: '全国销售地图（点击省份下钻）' },
          { type: 'half', label: '省份排名柱状图' },
          { type: 'half', label: '城市明细饼图' },
          { type: 'table', label: '门店级明细表' }
        ]
      },
      {
        key: 'realtime',
        name: '实时监控型',
        desc: '大屏展示，数据自动刷新，适合投屏',
        useCase: '双十一大屏、服务器监控',
        widgets: [
          { type: 'big-number', label: '实时 GMV ¥1.2亿' },
          { type: 'half', label: '订单量实时曲线' },
          { type: 'half', label: '地域热力图' },
          { type: 'kpi', label: '支付成功率' },
          { type: 'kpi', label: '平均响应时间' },
          { type: 'kpi', label: '在线用户数' }
        ]
      }
    ]
  }
}
