import React from 'react'

import textInputStyles from './TextInput.module.css'

/**
 * Text input component used as a wrapper to add base styles.
 */
const TextInput = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <input {...props} className={`${props.className ? props.className : ''} ${textInputStyles.base}`}/>
  )
}

export default TextInput