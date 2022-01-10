import React from 'react'

import itemStyles from './Item.module.css'

interface ItemProps {
  checked: boolean
  name: string
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
  title: string
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