import React from 'react'

import itemStyles from './Item.module.css'

/**
 * Used for array passed into parent component;
 * this is due to the implementation for handler.
 */
export interface ItemBaseProps {
  checked: boolean
  name: string
  title: string
}

/**
 * Used to define actual props for component
 */
interface ItemProps extends ItemBaseProps {
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Todo list item
 */
const Item = ({
  checked,
  name,
  onCheck,
  title
}: ItemProps) => {
  return (
    <div className={`${itemStyles.base}`}>
      <input onChange={onCheck} checked={checked} className={`${itemStyles.checkbox}`} type="checkbox" name={name} id={name}/>
      <label className={`${itemStyles.label} ${checked ? itemStyles['label-checked'] : ''}`} htmlFor={name}>{title}</label>
    </div>
  )
}

export default Item