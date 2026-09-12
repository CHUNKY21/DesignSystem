import React, { ErrorInfo, ReactNode } from 'react'
import { Button } from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-space-lg">
          <div className="bg-white rounded-radius-lg shadow-lg p-space-2xl max-w-md w-full text-center">
            <svg
              className="w-20 h-20 text-error mx-auto mb-space-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4v2m0 4v2M4.5 9h15m-15 4h15m-15 4h15"
              />
            </svg>

            <h1 className="text-h1 text-neutral-900 mb-space-md">Oops!</h1>
            <p className="text-body text-neutral-600 mb-space-lg">
              Something went wrong. Please try again.
            </p>

            {this.state.error && (
              <div className="bg-error/5 border-2 border-error/20 rounded-radius-md p-space-md mb-space-lg">
                <p className="text-small text-error font-mono break-words">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex gap-space-sm">
              <Button
                variant="primary"
                size="lg"
                onClick={this.handleReset}
                className="flex-1"
              >
                Try Again
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => (window.location.href = '/')}
                className="flex-1"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
