import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Foundation/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Text input field with optional label, helper text, and error states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below input',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Basic Stories
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter a password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
}

// State Stories
export const Error: Story = {
  args: {
    label: 'Username',
    placeholder: 'username',
    error: true,
    errorMessage: 'Username is already taken',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'Disabled value',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search products...',
    icon: '🔍',
  },
}

// Different Input Types
export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'user@example.com',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const Number: Story = {
  args: {
    label: 'Quantity',
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
  },
}

export const Search: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search...',
    icon: '🔍',
  },
}

// All States Grid
export const AllStates: Story = {
  render: () => (
    <div className="space-y-space-md max-w-md">
      <Input label="Default" placeholder="Enter text..." />
      <Input label="With Helper" placeholder="Enter text..." helperText="This is helper text" />
      <Input label="Error" placeholder="Enter text..." error errorMessage="This is an error" />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
}

// Accessibility Story
export const Accessibility: Story = {
  render: () => (
    <div className="space-y-space-lg max-w-md">
      <div>
        <h3 className="text-h4 mb-space-sm">Proper Label Association</h3>
        <Input label="Full Name" placeholder="John Doe" />
        <p className="text-small text-neutral-600 mt-space-sm">Label is properly associated with input</p>
      </div>
      <div>
        <h3 className="text-h4 mb-space-sm">Error with ARIA</h3>
        <Input label="Email" error errorMessage="Invalid email format" />
        <p className="text-small text-neutral-600 mt-space-sm">Error message has role="alert"</p>
      </div>
      <div>
        <h3 className="text-h4 mb-space-sm">Keyboard Navigation</h3>
        <Input label="Keyboard Test" placeholder="Press Tab to focus" autoFocus />
        <p className="text-small text-neutral-600 mt-space-sm">Use Tab key to navigate</p>
      </div>
    </div>
  ),
}

// Form Example
export const InAForm: Story = {
  render: () => (
    <form className="space-y-space-md max-w-md" onSubmit={(e) => e.preventDefault()}>
      <Input label="Full Name" placeholder="John Doe" required />
      <Input label="Email" type="email" placeholder="john@example.com" required />
      <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
      <Input label="Message" placeholder="Enter your message..." />
      <button
        type="submit"
        className="w-full px-space-md py-space-sm bg-primary text-white rounded-radius-md hover:bg-primary-light transition-colors"
      >
        Submit
      </button>
    </form>
  ),
}

// Playground
export const Playground: Story = {
  args: {
    label: 'Input Field',
    placeholder: 'Type something...',
    helperText: 'This is a helper text',
    error: false,
  },
}
