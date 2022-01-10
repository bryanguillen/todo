import React from 'react'

import todoListStyles from './TodoList.module.css'

import Item, { ItemBaseProps } from './item/Item'

interface TodoListProps {
  items: ItemBaseProps[]
  handleCheck: (index: number) => void
  title: string
}

const TodoList = (props: TodoListProps) => {
  return (
    <div>
      <h2 className={todoListStyles.header}>{props.title}</h2>
      <div className={todoListStyles['items-container']}>
        {props.items.map((item, index) => (
          <Item
            checked={item.checked}
            name={item.name}
            onCheck={() => props.handleCheck(index)}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList