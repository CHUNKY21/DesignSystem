import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { Textarea } from './Textarea'
import { Checkbox, CheckboxGroup } from './Checkbox'
import { Radio, RadioGroup } from './Radio'

// SELECT STORIES
const selectMeta = {
  title: 'Composite/Select',
  component: Select,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default selectMeta
type SelectStory = StoryObj<typeof selectMeta>

export const SelectBasic: SelectStory = {
  args: {
    label: 'Choose an option',
    options: [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
      { value: 'opt3', label: 'Option 3' },
    ],
  },
}

export const SelectWithHelper: SelectStory = {
  args: {
    label: 'Category',
    helperText: 'Select a product category',
    options: [
      { value: '', label: 'Select a category' },
      { value: 'cleaning', label: 'Cleaning' },
      { value: 'personal', label: 'Personal Care' },
      { value: 'food', label: 'Food' },
    ],
  },
}

export const SelectError: SelectStory = {
  args: {
    label: 'Required field',
    error: true,
    errorMessage: 'Please select an option',
    options: [
      { value: '', label: 'Select...' },
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
    ],
  },
}

export const SelectDisabled: SelectStory = {
  args: {
    label: 'Disabled select',
    disabled: true,
    options: [
      { value: 'opt1', label: 'Option 1', disabled: true },
      { value: 'opt2', label: 'Option 2' },
    ],
  },
}

// TEXTAREA STORIES
const textareaMeta = {
  title: 'Composite/Textarea',
  component: Textarea,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export const TextareaBasic: StoryObj<typeof textareaMeta> = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
}

export const TextareaWithLabel: StoryObj<typeof textareaMeta> = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
    rows: 5,
    helperText: 'Be descriptive and helpful',
  },
}

export const TextareaWithCharCount: StoryObj<typeof textareaMeta> = {
  args: {
    label: 'Review',
    placeholder: 'Write your review...',
    maxLength: 500,
    showCharacterCount: true,
    rows: 6,
  },
}

export const TextareaError: StoryObj<typeof textareaMeta> = {
  args: {
    label: 'Feedback',
    error: true,
    errorMessage: 'Feedback is required',
    placeholder: 'Required field',
    rows: 4,
  },
}

// CHECKBOX STORIES
const checkboxMeta = {
  title: 'Composite/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export const CheckboxBasic: StoryObj<typeof checkboxMeta> = {
  args: {
    label: 'I agree to terms',
  },
}

export const CheckboxWithHelper: StoryObj<typeof checkboxMeta> = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'Receive weekly updates and promotions',
  },
}

export const GroupBasic: StoryObj<typeof checkboxMeta> = {
  render: () => {
    const GroupComponent = CheckboxGroup
    return (
      <GroupComponent
        legend="Select your interests"
        options={[
          { value: 'cleaning', label: 'Cleaning products' },
          { value: 'personal', label: 'Personal care' },
          { value: 'food', label: 'Food & pantry' },
        ]}
      />
    )
  },
}

export const GroupWithHelper: StoryObj<typeof checkboxMeta> = {
  render: () => {
    const GroupComponent = CheckboxGroup
    return (
      <GroupComponent
        legend="Allergies"
        options={[
          { value: 'nuts', label: 'Nuts', helperText: 'Tree nuts and peanuts' },
          { value: 'dairy', label: 'Dairy', helperText: 'Milk and lactose' },
          { value: 'gluten', label: 'Gluten' },
        ]}
      />
    )
  },
}

// RADIO STORIES
const radioMeta = {
  title: 'Composite/Radio',
  component: Radio,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export const RadioBasic: StoryObj<typeof radioMeta> = {
  args: {
    label: 'Option A',
  },
}

export const RadioWithHelper: StoryObj<typeof radioMeta> = {
  args: {
    label: 'Express shipping',
    helperText: 'Arrives in 1-2 business days',
  },
}

export const GroupRadio: StoryObj<typeof radioMeta> = {
  render: () => {
    const GroupComponent = RadioGroup
    return (
      <GroupComponent
        legend="Shipping method"
        name="shipping"
        options={[
          { value: 'standard', label: 'Standard (5-7 days)' },
          { value: 'express', label: 'Express (2-3 days)' },
          { value: 'overnight', label: 'Overnight' },
        ]}
      />
    )
  },
}

export const GroupRadioWithHelper: StoryObj<typeof radioMeta> = {
  render: () => {
    const GroupComponent = RadioGroup
    return (
      <GroupComponent
        legend="Product safety rating"
        name="rating"
        options={[
          { value: 'safe', label: 'Safe', helperText: 'All ingredients are safe' },
          { value: 'caution', label: 'Review needed', helperText: 'Some ingredients need review' },
          { value: 'avoid', label: 'Avoid', helperText: 'Contains harmful ingredients' },
        ]}
      />
    )
  },
}

// FORM EXAMPLE
export const CompleteForm: StoryObj<typeof selectMeta> = {
  render: () => (
    <form className="max-w-md space-y-space-md">
      <Select
        label="Category"
        options={[
          { value: '', label: 'Select category' },
          { value: 'cleaning', label: 'Cleaning' },
          { value: 'personal', label: 'Personal Care' },
        ]}
      />
      <Textarea
        label="Product review"
        placeholder="Share your thoughts..."
        rows={4}
        maxLength={500}
        showCharacterCount
      />
      <CheckboxGroup
        legend="Features"
        options={[
          { value: 'eco', label: 'Eco-friendly' },
          { value: 'safe', label: 'Safe for all ages' },
        ]}
      />
      <RadioGroup
        legend="Would you recommend?"
        name="recommend"
        options={[
          { value: 'yes', label: 'Yes' },
          { value: 'maybe', label: 'Maybe' },
          { value: 'no', label: 'No' },
        ]}
      />
      <button
        type="submit"
        className="w-full px-space-md py-space-sm bg-primary text-white rounded-radius-md hover:bg-primary-light"
      >
        Submit Review
      </button>
    </form>
  ),
}
