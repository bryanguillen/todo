import React from 'react'

import textInputStyles from './TextInput.module.css'

/**
 * Text input component used as a wrapper to add base styles.
 */
const TextInput: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  return (
    <input {...props} className={`${props.className ? props.className : ''} ${textInputStyles.base}`}/>
  )
}

export default TextInput