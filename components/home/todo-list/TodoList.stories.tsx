import React, { useState } from 'react'
import { ItemBaseProps } from './item/Item'
import TodoList from './TodoList'

export default {
  title: 'Components/TodoList',
  component: TodoList
} 

export const TodoListStory = () => {
  const [items, setItems] = useState<ItemBaseProps[]>([
    { checked: false, name: 'item-1', title: 'Item 1' },
    { checked: false, name: 'item-2', title: 'Item 2' },
    { checked: false, name: 'item-3', title: 'Item 3' }
  ])

  function handleCheck(index: number) {
    const updatedItems: ItemBaseProps[] = items.map((item, currentIndex) => {
      if (index === currentIndex) {
        item.checked = !item.checked
      }
      return item
    })
    setItems(updatedItems)
  }
  
  return (
    <TodoList
      handleCheck={handleCheck}
      items={items}
      title="Your Tasks"
    />
  )
}
