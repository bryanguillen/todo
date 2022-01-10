import React from 'react'

import labelStyles from './Label.module.css'

/**
 * Label component used as a wrapper to add base styles.
 */
const Label: React.FC<React.HTMLProps<HTMLLabelElement>> = (props) => {
  const { children, ...rest } = props

  return (
    <label {...rest} className={`${rest.className ? rest.className : ''} ${labelStyles.base}`}>{children}</label>
  )
}

export default Label