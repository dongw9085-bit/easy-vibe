/**
 * 审批流时间线组件
 */
import { useEffect, useState } from 'react'
import { svc } from '../utils/service'
import { ApprovalStatus } from '../types'

interface ApprovalRecord {
  approver: { name: string; role: string }
  action: string
  comment?: string
  createdAt: string
}

interface Props {
  versionId: string
  currentStatus: ApprovalStatus
}

const STATUS_STEPS: { key: ApprovalStatus; label: string; icon: string }[] = [
  { key: 'DRAFT',             label: '草稿',     icon: '📝' },
  { key: 'SUBMITTED',         label: '已提交',   icon: '📤' },
  { key: 'FINANCE_REVIEWED',  label: '财务复核', icon: '💼' },
  { key: 'CEO_APPROVED',      label: 'CEO审批',  icon: '👔' },
  { key: 'LOCKED',            label: '已锁定',   icon: '🔒' },
]
const STATUS_ORDER = STATUS_STEPS.map(s => s.key)

const ACTION_LABELS: Record<string, string> = {
  SUBMIT:         '提交审批',
  FINANCE_REVIEW: '财务复核通过',
  CEO_APPROVE:    'CEO 审批通过',
  LOCK:           '版本锁定',
  REJECT:         '驳回退回草稿',
}

export function ApprovalTimeline({ versionId, currentStatus }: Props) {
  const [history, setHistory] = useState<ApprovalRecord[]>([])

  useEffect(() => {
    svc.getApprovalHistory(versionId).then(setHistory as any)
  }, [versionId])

  const currentIdx = STATUS_ORDER.indexOf(currentStatus)

  return (
    <div className="space-y-6">
      {/* 状态步骤条 */}
      <div className="flex items-center overflow-x-auto pb-2">
        {STATUS_STEPS.map((step, i) => {
          const isDone   = i < currentIdx
          const isActive = i === currentIdx
          return (
            <div key={step.key} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5 min-w-[80px]">
                <div className={`
                  w-9 h-9 rounded-full flex items-center justify-center text-base border-2 transition-all
                  ${isDone   ? 'bg-green-900/40 border-green-500 text-green-400' : ''}
                  ${isActive ? 'bg-blue-900/40 border-blue-500 text-blue-400 shadow-[0_0_0_4px_#1f6feb33]' : ''}
                  ${!isDone && !isActive ? 'bg-gray-800 border-gray-600 text-gray-500' : ''}
                `}>
                  {isDone ? '✓' : step.icon}
                </div>
                <span className={`text-[10px] text-center leading-tight
                  ${isDone ? 'text-green-400' : isActive ? 'text-blue-400 font-bold' : 'text-gray-500'}
                `}>
                  {step.label}
                </span>
              </div>
              {i < STATUS_STEPS.length - 1 && (
                <div className={`h-px w-12 mx-1 mb-5 flex-shrink-0 ${i < currentIdx ? 'bg-green-600' : 'bg-gray-700'}`} />
              )}
            </div>
          )
        })}
      </div>

      {/* 历史记录 */}
      {history.length > 0 && (
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">审批历史</h4>
          <div className="space-y-3">
            {history.map((rec, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-xs font-bold text-gray-300">
                    {rec.approver.name[0]}
                  </div>
                  {i < history.length - 1 && <div className="w-px flex-1 bg-gray-700 mt-1" />}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-semibold text-gray-200">{rec.approver.name}</span>
                    <span className="text-xs text-gray-500">{rec.approver.role}</span>
                    <span className="text-xs px-1.5 py-0.5 bg-blue-900/40 text-blue-400 rounded">
                      {ACTION_LABELS[rec.action] || rec.action}
                    </span>
                  </div>
                  {rec.comment && (
                    <p className="text-sm text-gray-400 bg-gray-800/50 rounded-md px-3 py-2 mt-1">
                      {rec.comment}
                    </p>
                  )}
                  <p className="text-xs text-gray-600 mt-1">
                    {new Date(rec.createdAt).toLocaleString('zh-CN', { hour12: false })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
