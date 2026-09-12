import React, { useState } from 'react'
import { Button } from './Button'

interface ListItem {
  id: string
  name: string
  completed: boolean
}

interface ShoppingListProps {
  title: string
  items: ListItem[]
  onAddItem?: (itemName: string) => void
  onToggleItem?: (itemId: string) => void
  onRemoveItem?: (itemId: string) => void
  onRenameList?: (newTitle: string) => void
  onDeleteList?: () => void
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  title,
  items,
  onAddItem,
  onToggleItem,
  onRemoveItem,
  onRenameList,
  onDeleteList,
}) => {
  const [newItemName, setNewItemName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(title)

  const completedCount = items.filter((item) => item.completed).length
  const totalCount = items.length
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  const handleAddItem = () => {
    if (newItemName.trim()) {
      onAddItem?.(newItemName.trim())
      setNewItemName('')
    }
  }

  const handleSaveTitle = () => {
    onRenameList?.(editTitle)
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-radius-lg shadow-sm border border-neutral-200 p-space-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-space-lg">
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-space-sm py-space-xs border-2 border-primary rounded-radius-md text-h2 font-bold focus:outline-none"
              autoFocus
            />
          ) : (
            <h2 className="text-h2 text-neutral-900 font-bold">{title}</h2>
          )}
          <p className="text-small text-neutral-600 mt-space-xs">
            {completedCount} of {totalCount} items checked
          </p>
        </div>
        {isEditing ? (
          <Button variant="primary" size="sm" onClick={handleSaveTitle}>
            Save
          </Button>
        ) : (
          <Button variant="secondary" size="sm" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </div>

      {/* Progress Bar */}
      {totalCount > 0 && (
        <div className="mb-space-lg">
          <div className="w-full h-2 bg-neutral-200 rounded-radius-full overflow-hidden">
            <div
              className="h-full bg-success transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Items List */}
      <div className="space-y-space-sm mb-space-lg">
        {items.length === 0 ? (
          <p className="text-body text-neutral-600 py-space-lg text-center">No items in this list yet</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center gap-space-md p-space-sm hover:bg-neutral-50 rounded-radius-md">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onToggleItem?.(item.id)}
                className="w-5 h-5 accent-primary rounded-radius-sm cursor-pointer flex-shrink-0"
                aria-label={`Toggle ${item.name}`}
              />
              <span
                className={`flex-1 text-body ${
                  item.completed ? 'line-through text-neutral-400' : 'text-neutral-900'
                }`}
              >
                {item.name}
              </span>
              <button
                onClick={() => onRemoveItem?.(item.id)}
                className="p-space-xs text-neutral-400 hover:text-error transition-colors"
                aria-label="Remove item"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Add Item */}
      <div className="flex gap-space-sm mb-space-lg">
        <input
          type="text"
          placeholder="Add new item..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
          className="flex-1 px-space-md py-space-sm rounded-radius-md bg-neutral-100 border-2 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary"
        />
        <Button variant="primary" size="md" onClick={handleAddItem}>
          Add
        </Button>
      </div>

      {/* Actions */}
      <div className="flex gap-space-sm">
        <Button variant="secondary" size="sm" className="flex-1">
          Share List
        </Button>
        <Button variant="outline" size="sm" onClick={onDeleteList} className="flex-1 text-error border-error">
          Delete List
        </Button>
      </div>
    </div>
  )
}
