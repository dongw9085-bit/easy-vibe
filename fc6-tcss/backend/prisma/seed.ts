import { PrismaClient, Role, BusinessUnit } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed users
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'admin@tcss.com' },
      update: {},
      create: { email: 'admin@tcss.com', name: '系统管理员', role: 'ADMIN' as Role, buAccess: Object.values(BusinessUnit) }
    }),
    prisma.user.upsert({
      where: { email: 'finance@tcss.com' },
      update: {},
      create: { email: 'finance@tcss.com', name: '李财务', role: 'FINANCE' as Role, buAccess: Object.values(BusinessUnit) }
    }),
    prisma.user.upsert({
      where: { email: 'business@tcss.com' },
      update: {},
      create: { email: 'business@tcss.com', name: '王业务', role: 'BUSINESS' as Role, buAccess: ['DOMESTIC_MEDICAL', 'ECOMMERCE'] as BusinessUnit[] }
    }),
    prisma.user.upsert({
      where: { email: 'ceo@tcss.com' },
      update: {},
      create: { email: 'ceo@tcss.com', name: 'CEO 张总', role: 'CEO' as Role, buAccess: Object.values(BusinessUnit) }
    })
  ])

  const finance = users[1]

  // Seed forecast version
  const version = await prisma.forecastVersion.upsert({
    where: { id: 'demo-version-2026h2' },
    update: {},
    create: {
      id: 'demo-version-2026h2',
      name: '2026年下半年FC6+6',
      period: '2026H2',
      status: 'DRAFT',
      createdById: finance.id
    }
  })

  const BUs: BusinessUnit[] = ['DOMESTIC_MEDICAL', 'ECOMMERCE', 'INTERNATIONAL_MEDICAL', 'PET']

  // Seed revenue records
  for (const bu of BUs) {
    for (let month = 1; month <= 12; month++) {
      const isActual = month <= 6
      const base = bu === 'DOMESTIC_MEDICAL' ? 5000000 : bu === 'ECOMMERCE' ? 3000000 : bu === 'INTERNATIONAL_MEDICAL' ? 2000000 : 1500000
      const variance = 0.8 + Math.random() * 0.4

      await prisma.revenueRecord.create({
        data: {
          versionId: version.id,
          bu,
          productLine: bu === 'DOMESTIC_MEDICAL' ? '血液检测产品线' : bu === 'ECOMMERCE' ? '电商直销产品线' : bu === 'INTERNATIONAL_MEDICAL' ? '出口诊断试剂' : '宠物检测产品线',
          month,
          year: 2026,
          isActual,
          baselineRevenue: base * variance,
          growthRevenue: isActual ? 0 : base * 0.15 * variance,
          grossMarginPct: bu === 'DOMESTIC_MEDICAL' ? 62 : bu === 'ECOMMERCE' ? 55 : bu === 'INTERNATIONAL_MEDICAL' ? 58 : 48,
          dso: bu === 'DOMESTIC_MEDICAL' ? 45 : bu === 'ECOMMERCE' ? 15 : 60
        }
      })
    }
  }

  // Seed expenses
  const expenseCategories = ['维持性费用', '电商费用', 'HC C&B', '市场推广']
  for (const bu of BUs) {
    for (let month = 7; month <= 12; month++) {
      await prisma.expenseRecord.create({
        data: {
          versionId: version.id,
          bu,
          category: expenseCategories[Math.floor(Math.random() * expenseCategories.length)],
          month,
          year: 2026,
          isActual: false,
          amount: 500000 + Math.random() * 300000
        }
      })
    }
  }

  // Seed HC plans
  for (const bu of BUs) {
    for (let month = 7; month <= 12; month++) {
      const hc = bu === 'DOMESTIC_MEDICAL' ? 45 : bu === 'ECOMMERCE' ? 25 : bu === 'INTERNATIONAL_MEDICAL' ? 30 : 20
      await prisma.hCPlan.create({
        data: {
          versionId: version.id,
          bu,
          department: '营销部',
          month,
          year: 2026,
          isActual: false,
          headcount: hc,
          fte: hc * 0.95,
          baseSalary: hc * 15000,
          bonus: hc * 3000,
          socialInsur: hc * 4500,
          totalCB: hc * (15000 + 3000 + 4500)
        }
      })
    }
  }

  // Seed capex
  await prisma.capexPlan.createMany({
    data: [
      { versionId: version.id, bu: 'DOMESTIC_MEDICAL', projectName: '仪器投放计划Q3', category: '仪器投放', month: 7, year: 2026, amount: 2000000, depreciationLife: 60, monthlyDepr: 33333, roi: 25 },
      { versionId: version.id, bu: 'PRODUCTION_OPS', projectName: '厦门自动化项目', category: '自动化项目', month: 8, year: 2026, amount: 5000000, depreciationLife: 84, monthlyDepr: 59524, efficiencyGain: 30, roi: 35 },
    ]
  })

  // Seed KPI benchmarks
  await prisma.kPIBenchmark.createMany({
    data: [
      { bu: 'DOMESTIC_MEDICAL', kpiName: '毛利率', kpiCode: 'GM_PCT', unit: '%', historical: 60, budget: 63, tenYearPlan: 70, warnLow: 55, warnHigh: 80, year: 2026 },
      { bu: 'ECOMMERCE', kpiName: '毛利率', kpiCode: 'GM_PCT', unit: '%', historical: 50, budget: 55, tenYearPlan: 65, warnLow: 45, warnHigh: 75, year: 2026 },
      { bu: 'DOMESTIC_MEDICAL', kpiName: 'DSO', kpiCode: 'DSO_DAYS', unit: '天', historical: 50, budget: 45, tenYearPlan: 35, warnLow: 20, warnHigh: 60, year: 2026 },
    ]
  })

  console.log('✅ Seed completed. Demo version:', version.id)
}

main().catch(console.error).finally(() => prisma.$disconnect())
