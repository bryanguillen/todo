import React from 'react'
import { IconContext } from 'react-icons'
import { MdHome, MdLogout } from 'react-icons/md'

import styles from './Navigation.module.css'

export interface NavigationProps {
  logoutButtonText: string
  homeButtonText: string
  onClickHome: React.MouseEventHandler<HTMLDivElement>
  onClickLogout: React.MouseEventHandler<HTMLDivElement>
}

interface NavigationButtonProps {
  icon: React.ReactNode
  id: string // used for testing
  onClick: React.MouseEventHandler<HTMLDivElement>
  text: string
}

/**
 * Wrapper for keeping code dry
 */
const NavigationButton = ({
  icon,
  id,
  onClick,
  text
}: NavigationButtonProps) => {
  return (
    <div className={styles.button} id={id} role="button" onClick={onClick}>
      {icon}
      <span className={`${styles.text} dark-mode-font-color`}>{text}</span>
    </div>
  )
}

const Navigation = ({
  logoutButtonText,
  homeButtonText,
  onClickHome,
  onClickLogout
}: NavigationProps) => {
  return (
    <IconContext.Provider value={{ size: '2rem' }}>
      <div className={styles.navigation}>
        <NavigationButton
          icon={<MdHome/>}
          id="navigation-button-home"
          onClick={onClickHome}
          text={homeButtonText}
        />
        <NavigationButton
          icon={<MdLogout/>}
          id="navigation-button-history"
          onClick={onClickLogout}
          text={logoutButtonText}
        />
      </div>
    </IconContext.Provider>
  )
}

export default Navigation