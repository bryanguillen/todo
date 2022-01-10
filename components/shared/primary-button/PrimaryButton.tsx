import React from 'react'

import buttonStyles from './PrimaryButton.module.css'

interface PrimaryButtonProps extends React.HTMLAttributes<HTMLElement> {
  text: string
}

/**
 * Primary button component used as a wrapper to add base primary button styles and
 * use text prop as interface.
 */
const PrimaryButton = (props: PrimaryButtonProps) => {
  const { text, className, ...rest } = props

  return (
    <button {...rest} className={`${className} ${buttonStyles.base}`}>{text}</button>
  )
}

export default PrimaryButton