import React from 'react'

interface RatingDisplayProps {
  score: number
  maxScore?: number
  label?: string
  count?: number
  certifications?: string[]
  size?: 'sm' | 'md' | 'lg'
}

export const RatingDisplay: React.FC<RatingDisplayProps> = ({
  score,
  maxScore = 5,
  label = 'Rating',
  count,
  certifications = [],
  size = 'md',
}) => {
  const percentage = (score / maxScore) * 100
  const sizeStyles = {
    sm: 'text-small',
    md: 'text-body',
    lg: 'text-h3',
  }

  const starSizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className="space-y-space-md">
      <div>
        <p className="text-small text-neutral-600 mb-space-sm">{label}</p>
        <div className="flex items-baseline gap-space-md">
          <div className="flex items-center gap-space-xs">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`${starSizeStyles[size]} ${
                  i < Math.floor(score) ? 'fill-accent text-accent' : 'fill-neutral-200 text-neutral-200'
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className={`${sizeStyles[size]} text-neutral-900 font-body-bold`}>
            {score.toFixed(1)}/{maxScore}
          </span>
          {count && <span className="text-small text-neutral-600">({count} reviews)</span>}
        </div>
      </div>

      {certifications.length > 0 && (
        <div>
          <p className="text-small text-neutral-600 mb-space-sm">Certifications</p>
          <div className="flex flex-wrap gap-space-sm">
            {certifications.map((cert) => (
              <div key={cert} className="inline-flex items-center gap-space-xs bg-success/10 px-space-sm py-space-xs rounded-radius-sm border border-success/20">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-small text-success font-body-bold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
