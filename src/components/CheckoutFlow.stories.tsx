import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Button } from './Button'

const meta = {
  title: 'Flows/Checkout',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Checkout: Story = {
  render: () => {
    const [step, setStep] = useState(1)

    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-space-md py-space-lg">
            <h1 className="text-h2">Checkout</h1>
            <div className="flex gap-space-md mt-space-md text-small">
              <span className={step === 1 ? 'font-body-bold text-primary' : 'text-neutral-600'}>1. Shipping</span>
              <span className="text-neutral-400">→</span>
              <span className={step === 2 ? 'font-body-bold text-primary' : 'text-neutral-600'}>2. Payment</span>
              <span className="text-neutral-400">→</span>
              <span className={step === 3 ? 'font-body-bold text-primary' : 'text-neutral-600'}>3. Confirm</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-space-md py-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="md:col-span-2 bg-white rounded-radius-lg p-space-lg shadow-sm">
              {step === 1 && (
                <div className="space-y-space-lg">
                  <h2 className="text-h3">Shipping Address</h2>
                  <div className="space-y-space-md">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="City, State ZIP"
                      className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                    />
                  </div>
                  <Button variant="primary" onClick={() => setStep(2)} className="w-full">
                    Continue to Payment
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-space-lg">
                  <h2 className="text-h3">Payment Information</h2>
                  <div className="space-y-space-md">
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-space-md">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full px-space-md py-space-sm border-2 border-neutral-200 rounded-radius-md focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-space-md">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                      Back
                    </Button>
                    <Button variant="primary" onClick={() => setStep(3)} className="flex-1">
                      Review Order
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center space-y-space-lg">
                  <h2 className="text-h2 text-success">✓ Order Confirmed!</h2>
                  <div className="bg-neutral-50 rounded-radius-md p-space-lg">
                    <p className="text-small text-neutral-600 mb-space-sm">Order Number</p>
                    <p className="text-h4 font-body-bold">ORD-2024092401</p>
                  </div>
                  <p className="text-body text-neutral-600">A confirmation email has been sent.</p>
                  <Button variant="primary" className="w-full">
                    Continue Shopping
                  </Button>
                </div>
              )}
            </div>

            <div className="bg-white rounded-radius-lg p-space-lg shadow-sm h-fit sticky top-24">
              <h3 className="text-h4 mb-space-md">Order Summary</h3>
              <div className="space-y-space-sm mb-space-lg border-b-2 border-neutral-200 pb-space-lg">
                <div className="flex justify-between">
                  <span>Natural Dish Soap</span>
                  <span className="font-body-bold">$12.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Eco Laundry Detergent</span>
                  <span className="font-body-bold">$14.99</span>
                </div>
              </div>
              <div className="space-y-space-sm text-small mb-space-lg">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>$27.98</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span>$5.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tax</span>
                  <span>$2.24</span>
                </div>
              </div>
              <div className="border-t-2 border-neutral-200 pt-space-lg">
                <div className="flex justify-between">
                  <span className="text-body-bold">Total</span>
                  <span className="text-h3 text-primary font-body-bold">$36.21</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
}
