import React, { useState } from 'react'
import { Button } from './Button'
import { PreferenceChip } from './PreferenceChip'
import { Input } from './Input'

interface PreferencesFormProps {
  onSave?: (preferences: UserPreferences) => void
}

interface UserPreferences {
  ingredientsToAvoid: string[]
  trustedBrands: string[]
  certifications: string[]
  preferredCategories: string[]
  notificationEnabled: boolean
  emailNotifications: boolean
  darkMode: boolean
}

export const PreferencesForm: React.FC<PreferencesFormProps> = ({ onSave }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    ingredientsToAvoid: ['Sodium Lauryl Sulfate', 'Parabens'],
    trustedBrands: ['Grove Collaborative', 'Seventh Generation'],
    certifications: ['EWG Verified', 'USDA Organic'],
    preferredCategories: ['Cleaning', 'Personal Care'],
    notificationEnabled: true,
    emailNotifications: false,
    darkMode: false,
  })

  const [newIngredient, setNewIngredient] = useState('')
  const [newBrand, setNewBrand] = useState('')
  const [newCertification, setNewCertification] = useState('')

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setPreferences((p) => ({
        ...p,
        ingredientsToAvoid: [...p.ingredientsToAvoid, newIngredient.trim()],
      }))
      setNewIngredient('')
    }
  }

  const addBrand = () => {
    if (newBrand.trim()) {
      setPreferences((p) => ({
        ...p,
        trustedBrands: [...p.trustedBrands, newBrand.trim()],
      }))
      setNewBrand('')
    }
  }

  const addCertification = () => {
    if (newCertification.trim()) {
      setPreferences((p) => ({
        ...p,
        certifications: [...p.certifications, newCertification.trim()],
      }))
      setNewCertification('')
    }
  }

  const removeIngredient = (ingredient: string) => {
    setPreferences((p) => ({
      ...p,
      ingredientsToAvoid: p.ingredientsToAvoid.filter((i) => i !== ingredient),
    }))
  }

  const removeBrand = (brand: string) => {
    setPreferences((p) => ({
      ...p,
      trustedBrands: p.trustedBrands.filter((b) => b !== brand),
    }))
  }

  const removeCertification = (cert: string) => {
    setPreferences((p) => ({
      ...p,
      certifications: p.certifications.filter((c) => c !== cert),
    }))
  }

  return (
    <div className="max-w-2xl space-y-space-2xl">
      {/* Ingredients to Avoid */}
      <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 p-space-lg">
        <h2 className="text-h3 text-neutral-900 font-bold mb-space-sm">Ingredients to Avoid</h2>
        <p className="text-body text-neutral-600 mb-space-lg">
          Add ingredients you want to avoid in products
        </p>

        <div className="flex gap-space-sm mb-space-lg">
          <Input
            placeholder="e.g., Sodium Lauryl Sulfate"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.currentTarget.value)}
            onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
          />
          <Button variant="primary" onClick={addIngredient} className="flex-shrink-0">
            Add
          </Button>
        </div>

        <div className="flex flex-wrap gap-space-sm">
          {preferences.ingredientsToAvoid.length === 0 ? (
            <p className="text-small text-neutral-500">No ingredients to avoid yet</p>
          ) : (
            preferences.ingredientsToAvoid.map((ingredient) => (
              <PreferenceChip
                key={ingredient}
                label={ingredient}
                type="ingredient-to-avoid"
                onRemove={() => removeIngredient(ingredient)}
              />
            ))
          )}
        </div>
      </div>

      {/* Trusted Brands */}
      <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 p-space-lg">
        <h2 className="text-h3 text-neutral-900 font-bold mb-space-sm">Trusted Brands</h2>
        <p className="text-body text-neutral-600 mb-space-lg">
          Add brands you trust and prefer
        </p>

        <div className="flex gap-space-sm mb-space-lg">
          <Input
            placeholder="e.g., Grove Collaborative"
            value={newBrand}
            onChange={(e) => setNewBrand(e.currentTarget.value)}
            onKeyPress={(e) => e.key === 'Enter' && addBrand()}
          />
          <Button variant="primary" onClick={addBrand} className="flex-shrink-0">
            Add
          </Button>
        </div>

        <div className="flex flex-wrap gap-space-sm">
          {preferences.trustedBrands.length === 0 ? (
            <p className="text-small text-neutral-500">No trusted brands yet</p>
          ) : (
            preferences.trustedBrands.map((brand) => (
              <PreferenceChip
                key={brand}
                label={brand}
                type="trusted-brand"
                onRemove={() => removeBrand(brand)}
              />
            ))
          )}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 p-space-lg">
        <h2 className="text-h3 text-neutral-900 font-bold mb-space-sm">Certifications</h2>
        <p className="text-body text-neutral-600 mb-space-lg">
          Which certifications matter to you?
        </p>

        <div className="flex gap-space-sm mb-space-lg">
          <Input
            placeholder="e.g., EWG Verified"
            value={newCertification}
            onChange={(e) => setNewCertification(e.currentTarget.value)}
            onKeyPress={(e) => e.key === 'Enter' && addCertification()}
          />
          <Button variant="primary" onClick={addCertification} className="flex-shrink-0">
            Add
          </Button>
        </div>

        <div className="flex flex-wrap gap-space-sm">
          {preferences.certifications.length === 0 ? (
            <p className="text-small text-neutral-500">No certifications selected</p>
          ) : (
            preferences.certifications.map((cert) => (
              <PreferenceChip
                key={cert}
                label={cert}
                type="certification"
                onRemove={() => removeCertification(cert)}
              />
            ))
          )}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 p-space-lg">
        <h2 className="text-h3 text-neutral-900 font-bold mb-space-lg">Notifications</h2>

        <div className="space-y-space-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-body font-body-bold text-neutral-900">Push Notifications</p>
              <p className="text-small text-neutral-600">Get notified about new product recommendations</p>
            </div>
            <button
              onClick={() =>
                setPreferences((p) => ({
                  ...p,
                  notificationEnabled: !p.notificationEnabled,
                }))
              }
              className={`ml-space-md px-space-md py-space-xs rounded-radius-full text-small font-body-bold transition-all ${
                preferences.notificationEnabled
                  ? 'bg-success text-white'
                  : 'bg-neutral-200 text-neutral-600'
              } cursor-pointer hover:shadow-md`}
            >
              {preferences.notificationEnabled ? 'On' : 'Off'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-body font-body-bold text-neutral-900">Email Notifications</p>
              <p className="text-small text-neutral-600">Receive weekly digest emails</p>
            </div>
            <button
              onClick={() =>
                setPreferences((p) => ({
                  ...p,
                  emailNotifications: !p.emailNotifications,
                }))
              }
              className={`ml-space-md px-space-md py-space-xs rounded-radius-full text-small font-body-bold transition-all ${
                preferences.emailNotifications
                  ? 'bg-success text-white'
                  : 'bg-neutral-200 text-neutral-600'
              } cursor-pointer hover:shadow-md`}
            >
              {preferences.emailNotifications ? 'On' : 'Off'}
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex gap-space-sm">
        <Button
          variant="primary"
          size="lg"
          onClick={() => onSave?.(preferences)}
          className="flex-1"
        >
          Save Preferences
        </Button>
        <Button variant="secondary" size="lg" className="flex-1">
          Reset to Defaults
        </Button>
      </div>
    </div>
  )
}
