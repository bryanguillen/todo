import React from 'react'

import welcomeMessageStyles from './WelcomeMessage.module.css'

interface WelcomeMessageProps {
  userEmail: string
}

const WelcomeMessage = ({
  userEmail
}: WelcomeMessageProps) => {
  return (
    <h1 className={`${welcomeMessageStyles.base}`}>Welcome ${userEmail}!</h1>
  )
}

export default WelcomeMessage