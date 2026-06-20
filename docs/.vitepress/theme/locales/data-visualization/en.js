export default {
  chartSelector: {
    title: 'Chart Type Selector',
    subtitle: 'Choose your data goal to see recommended chart types',
    panelTitle: '{purpose}: Recommended charts',
    exampleLabel: 'Example: ',
    purposes: [
      {
        key: 'comparison',
        name: 'Compare',
        icon: '📊',
        charts: [
          {
            name: 'Bar chart',
            visual: '▐▐▐',
            desc: 'Compare values across categories',
            example: 'Sales by department'
          },
          {
            name: 'Grouped bar chart',
            visual: '▐▐ ▐▐',
            desc: 'Compare grouped dimensions',
            example: 'Quarterly revenue by product line'
          },
          {
            name: 'Radar chart',
            visual: '◇',
            desc: 'Compare multiple dimensions together',
            example: 'Candidate skill assessment'
          }
        ]
      },
      {
        key: 'trend',
        name: 'Trend',
        icon: '📈',
        charts: [
          {
            name: 'Line chart',
            visual: '╱╲╱',
            desc: 'Show how data changes over time',
            example: 'Monthly user growth'
          },
          {
            name: 'Area chart',
            visual: '▓▓▓',
            desc: 'Emphasize accumulated values under a trend',
            example: 'Traffic share by channel over time'
          },
          {
            name: 'Step chart',
            visual: '┐└┐',
            desc: 'Show changes at discrete time points',
            example: 'Price adjustment history'
          }
        ]
      },
      {
        key: 'proportion',
        name: 'Proportion',
        icon: '🍩',
        charts: [
          {
            name: 'Pie chart',
            visual: '◔',
            desc: 'Show each part as a share of the whole',
            example: 'Market share distribution'
          },
          {
            name: 'Donut chart',
            visual: '◎',
            desc: 'A pie chart variant with room for a central number',
            example: 'Budget usage rate'
          },
          {
            name: 'Stacked bar chart',
            visual: '▐▐▐',
            desc: 'Show composition and totals together',
            example: 'Sales composition by region and category'
          }
        ]
      },
      {
        key: 'distribution',
        name: 'Distribution',
        icon: '🔔',
        charts: [
          {
            name: 'Histogram',
            visual: '▁▃▇▃▁',
            desc: 'Show the frequency distribution of values',
            example: 'User age distribution'
          },
          {
            name: 'Scatter plot',
            visual: '· ·· ·',
            desc: 'Show the relationship between two variables',
            example: 'Ad spend vs sales'
          },
          {
            name: 'Box plot',
            visual: '├─┤',
            desc: 'Show median, quartiles, and outliers',
            example: 'Housing price distribution by city'
          }
        ]
      },
      {
        key: 'relation',
        name: 'Relationship',
        icon: '🕸️',
        charts: [
          {
            name: 'Sankey diagram',
            visual: '≋≋≋',
            desc: 'Show the direction and volume of flows',
            example: 'User conversion funnel'
          },
          {
            name: 'Network graph',
            visual: '⊙─⊙',
            desc: 'Show relationships between nodes',
            example: 'Social relationship network'
          },
          {
            name: 'Heatmap',
            visual: '▓▒░',
            desc: 'Represent values with color intensity',
            example: 'Page visits by hour and page'
          }
        ]
      }
    ]
  },
  dashboardLayout: {
    title: 'Dashboard Layout Patterns',
    subtitle: 'Click to inspect different dashboard layout types',
    useCaseLabel: 'Use cases: ',
    layouts: [
      {
        key: 'overview',
        name: 'Global overview',
        desc: 'Top KPI cards, middle trend chart, and bottom detail table',
        useCase: 'Executive daily reports, operations dashboards',
        widgets: [
          { type: 'kpi', label: 'DAU 125k' },
          { type: 'kpi', label: 'Revenue $850k' },
          { type: 'kpi', label: 'Conversion 3.2%' },
          { type: 'kpi', label: 'AOV $268' },
          { type: 'chart-wide', label: 'Trend line chart' },
          { type: 'table', label: 'Detail data table' }
        ]
      },
      {
        key: 'comparison',
        name: 'Comparison analysis',
        desc: 'A left-right comparison layout for A/B tests or period-over-period analysis',
        useCase: 'A/B test reports, competitor analysis',
        widgets: [
          { type: 'half', label: 'Experiment metrics' },
          { type: 'half', label: 'Control metrics' },
          { type: 'chart-wide', label: 'Difference comparison chart' },
          { type: 'table', label: 'Statistical significance test' }
        ]
      },
      {
        key: 'drill',
        name: 'Drill-down analysis',
        desc: 'Explore from summary to detail level by level',
        useCase: 'Sales analysis, user behavior analysis',
        widgets: [
          {
            type: 'chart-wide',
            label: 'National sales map (click a province)'
          },
          { type: 'half', label: 'Province ranking bar chart' },
          { type: 'half', label: 'City detail pie chart' },
          { type: 'table', label: 'Store-level detail table' }
        ]
      },
      {
        key: 'realtime',
        name: 'Real-time monitoring',
        desc: 'Large-screen display with auto-refreshing data',
        useCase: 'Shopping festival screen, server monitoring',
        widgets: [
          { type: 'big-number', label: 'Real-time GMV $120M' },
          { type: 'half', label: 'Live order curve' },
          { type: 'half', label: 'Regional heatmap' },
          { type: 'kpi', label: 'Payment success rate' },
          { type: 'kpi', label: 'Average response time' },
          { type: 'kpi', label: 'Online users' }
        ]
      }
    ]
  }
}
