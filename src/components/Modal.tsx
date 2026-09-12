import React from 'react'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  title: string
  children: React.ReactNode
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
  onClose?: () => void
  variant?: 'default' | 'danger' | 'success'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  primaryButtonText = 'Confirm',
  secondaryButtonText = 'Cancel',
  onPrimaryClick,
  onSecondaryClick,
  onClose,
  variant = 'default',
}) => {
  if (!isOpen) return null

  const primaryVariant = variant === 'danger' ? 'accent' : variant === 'success' ? 'primary' : 'primary'

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        role="presentation"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-space-lg">
        <div className="bg-white rounded-radius-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-space-lg border-b border-neutral-200">
            <h2 className="text-h2 text-neutral-900 font-bold">{title}</h2>
            <button
              onClick={onClose}
              className="p-space-xs text-neutral-400 hover:text-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-radius-md"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-space-lg text-body text-neutral-700">{children}</div>

          {/* Footer */}
          <div className="flex gap-space-sm p-space-lg border-t border-neutral-200">
            <Button
              variant="secondary"
              size="md"
              onClick={onSecondaryClick || onClose}
              className="flex-1"
            >
              {secondaryButtonText}
            </Button>
            <Button
              variant={primaryVariant}
              size="md"
              onClick={onPrimaryClick}
              className="flex-1"
            >
              {primaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
