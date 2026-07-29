import React from 'react'
import { TIER_COLORS, TIER_LABELS } from '../api.js'

export default function TierPicker({ tier, onTier }) {
  return (
    <span className="tier-picker">
      {['red', 'yellow', 'green'].map((t) => (
        <button
          key={t}
          className={tier === t ? 'active' : ''}
          style={{ '--tier-color': TIER_COLORS[t] }}
          onClick={() => onTier(t)}
        >
          {TIER_LABELS[t]}
        </button>
      ))}
    </span>
  )
}
