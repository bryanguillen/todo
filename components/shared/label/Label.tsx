import React from 'react'

import labelStyles from './Label.module.css'

/**
 * Label component used as a wrapper to add base styles.
 */
const PrimaryButton: React.FC = (props: React.HTMLAttributes<HTMLElement>) => {
  const { children, ...rest } = props

  return (
    <label {...rest} className={`${rest.className ? rest.className : ''} ${labelStyles.base}`}>{children}</label>
  )
}

export default PrimaryButton