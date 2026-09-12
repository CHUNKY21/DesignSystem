import React from 'react'

interface ProductBadgeProps {
  label: string
  status: 'safe' | 'caution' | 'harmful'
  icon?: React.ReactNode
}

export const ProductBadge: React.FC<ProductBadgeProps> = ({ label, status, icon }) => {
  const statusStyles = {
    safe: 'bg-success text-white',
    caution: 'bg-warning text-neutral-900',
    harmful: 'bg-error text-white',
  }

  return (
    <span className={`inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-radius-full text-micro font-body-bold ${statusStyles[status]}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label}
    </span>
  )
}
