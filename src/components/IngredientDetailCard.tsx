import React, { useState } from 'react'
import { ProductBadge } from './ProductBadge'

interface IngredientDetailCardProps {
  name: string
  status: 'safe' | 'caution' | 'harmful'
  hazardScore: number
  maxScore?: number
  description: string
  hazards?: string[]
  alternatives?: string[]
  sourceUrl?: string
  sourceName?: string
}

export const IngredientDetailCard: React.FC<IngredientDetailCardProps> = ({
  name,
  status,
  hazardScore,
  maxScore = 10,
  description,
  hazards = [],
  alternatives = [],
  sourceUrl,
  sourceName = 'EWG Skin Deep',
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const percentage = (hazardScore / maxScore) * 100

  const statusLabels = {
    safe: 'Safe',
    caution: 'Use with Caution',
    harmful: 'Avoid',
  }

  return (
    <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 overflow-hidden">
      {/* Header */}
      <div
        className="p-space-lg cursor-pointer hover:bg-neutral-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between mb-space-md">
          <div className="flex-1">
            <h3 className="text-h3 text-neutral-900 mb-space-sm">{name}</h3>
            <ProductBadge label={statusLabels[status]} status={status} />
          </div>
          <svg
            className={`w-6 h-6 text-neutral-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Hazard Score Bar */}
        <div className="mb-space-md">
          <div className="flex items-center justify-between mb-space-xs">
            <span className="text-small text-neutral-600">Hazard Score</span>
            <span className="text-small font-body-bold text-neutral-900">{hazardScore}/{maxScore}</span>
          </div>
          <div className="w-full h-2 bg-neutral-200 rounded-radius-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                percentage < 33 ? 'bg-success' : percentage < 66 ? 'bg-warning' : 'bg-error'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Description Preview */}
        <p className="text-body text-neutral-600 line-clamp-2">{description}</p>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-neutral-200 p-space-lg space-y-space-lg bg-neutral-50">
          {/* Full Description */}
          <div>
            <p className="text-body text-neutral-700">{description}</p>
          </div>

          {/* Hazards */}
          {hazards.length > 0 && (
            <div>
              <h4 className="text-h4 text-neutral-900 mb-space-sm">Potential Hazards</h4>
              <ul className="space-y-space-sm">
                {hazards.map((hazard, idx) => (
                  <li key={idx} className="flex gap-space-sm text-body text-neutral-700">
                    <svg className="w-5 h-5 text-error flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{hazard}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Alternatives */}
          {alternatives.length > 0 && (
            <div>
              <h4 className="text-h4 text-neutral-900 mb-space-sm">Safer Alternatives</h4>
              <div className="flex flex-wrap gap-space-sm">
                {alternatives.map((alt, idx) => (
                  <div key={idx} className="bg-success/10 px-space-sm py-space-xs rounded-radius-sm border border-success/20">
                    <span className="text-small text-success font-body-bold">{alt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source */}
          {sourceUrl && (
            <div className="pt-space-md border-t border-neutral-200">
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-primary hover:text-primary-light transition-colors font-body-bold flex items-center gap-space-xs"
              >
                Learn more on {sourceName}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
