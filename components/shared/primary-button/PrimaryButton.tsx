import React, { ButtonHTMLAttributes } from 'react'

import buttonStyles from './PrimaryButton.module.css'

interface PrimaryButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {
  text: string
}

/**
 * Primary button component used as a wrapper to add base primary button styles and
 * use text prop as interface.
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { text, className, ...rest } = props

  return (
    <button {...rest} className={`${className ? className : ''} ${buttonStyles.base}`}>{text}</button>
  )
}

export default PrimaryButton