-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BUSINESS', 'FINANCE', 'CEO', 'ADMIN');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'FINANCE_REVIEWED', 'CEO_APPROVED', 'LOCKED', 'REJECTED');

-- CreateEnum
CREATE TYPE "BusinessUnit" AS ENUM ('DOMESTIC_MEDICAL', 'ECOMMERCE', 'INTERNATIONAL_MEDICAL', 'PET', 'PRODUCTION_OPS', 'RD_TECH', 'ADMIN_SUPPORT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "buAccess" "BusinessUnit"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForecastVersion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "status" "ApprovalStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lockedAt" TIMESTAMP(3),

    CONSTRAINT "ForecastVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RevenueRecord" (
    "id" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "bu" "BusinessUnit" NOT NULL,
    "productLine" TEXT NOT NULL,
    "sku" TEXT,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "isActual" BOOLEAN NOT NULL DEFAULT false,
    "baselineVolume" DECIMAL(18,4),
    "incrementVolume" DECIMAL(18,4),
    "unitPrice" DECIMAL(18,4),
    "baselineRevenue" DECIMAL(18,4),
    "growthRevenue" DECIMAL(18,4),
    "grossMarginPct" DECIMAL(8,4),
    "dso" DECIMAL(8,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RevenueRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpenseRecord" (
    "id" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "bu" "BusinessUnit" NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "isActual" BOOLEAN NOT NULL DEFAULT false,
    "amount" DECIMAL(18,4) NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpenseRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductionCost" (
    "id" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "isActual" BOOLEAN NOT NULL DEFAULT false,
    "plannedVolume" DECIMAL(18,4),
    "directMaterial" DECIMAL(18,4),
    "externalMaterial" DECIMAL(18,4),
    "directLabor" DECIMAL(18,4),
    "consumables" DECIMAL(18,4),
    "energy" DECIMAL(18,4),
    "qcCost" DECIMAL(18,4),
    "indirectMfg" DECIMAL(18,4),
    "depreciationAmt" DECIMAL(18,4),
    "yieldRate" DECIMAL(8,4),
    "oee" DECIMAL(8,4),
    "inventoryDays" DECIMAL(8,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductionCost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HCPlan" (
    "id" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "bu" "BusinessUnit" NOT NULL,
    "department" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "isActual" BOOLEAN NOT NULL DEFAULT false,
    "headcount" INTEGER NOT NULL,
    "fte" DECIMAL(8,2) NOT NULL,
    "baseSalary" DECIMAL(18,4),
    "bonus" DECIMAL(18,4),
    "socialInsur" DECIMAL(18,4),
    "totalCB" DECIMAL(18,4),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HCPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CapexPlan" (
    "id" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "bu" "BusinessUnit" NOT NULL,
    "projectName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" DECIMAL(18,4) NOT NULL,
    "depreciationLife" INTEGER NOT NULL,
    "monthlyDepr" DECIMAL(18,4),
    "efficiencyGain" DECIMAL(8,4),
    "roi" DECIMAL(8,4),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CapexPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KPIBenchmark" (
    "id" TEXT NOT NULL,
    "bu" "BusinessUnit" NOT NULL,
    "kpiName" TEXT NOT NULL,
    "kpiCode" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "historical" DECIMAL(18,4),
    "budget" DECIMAL(18,4),
    "tenYearPlan" DECIMAL(18,4),
    "warnLow" DECIMAL(18,4),
    "warnHigh" DECIMAL(18,4),
    "year" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KPIBenchmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalRecord" (
    "id" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "approverId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApprovalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "versionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "tableName" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "oldValues" JSONB,
    "newValues" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ForecastVersion" ADD CONSTRAINT "ForecastVersion_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RevenueRecord" ADD CONSTRAINT "RevenueRecord_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "ForecastVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseRecord" ADD CONSTRAINT "ExpenseRecord_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "ForecastVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductionCost" ADD CONSTRAINT "ProductionCost_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "ForecastVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HCPlan" ADD CONSTRAINT "HCPlan_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "ForecastVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CapexPlan" ADD CONSTRAINT "CapexPlan_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "ForecastVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalRecord" ADD CONSTRAINT "ApprovalRecord_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "ForecastVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalRecord" ADD CONSTRAINT "ApprovalRecord_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "ForecastVersion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
