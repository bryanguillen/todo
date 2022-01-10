import React from 'react'

import formStyles from './Form.module.css'

/**
 * Form component used as a wrapper to add base styles.
 */
const Form:React.FC<React.HTMLProps<HTMLFormElement>> = (props) => {
  const { children, ...rest } = props

  return (
    <form {...rest} className={`${rest.className ? rest.className : ''} ${formStyles.base}`}>{children}</form>
  )
}

export default Form