import React from 'react'

import Form from '../shared/form/Form'
import Label from '../shared/label/Label'
import PrimaryButton from '../shared/primary-button/PrimaryButton'
import Navigation from './navigation/Navigation'
import TextInput from '../shared/text-input/TextInput'
import WelcomeMessage from '../shared/welcome-message/WelcomeMessage'

import homeStyles from './Home.module.css'
import TodoList from './todo-list/TodoList'
import { ItemBaseProps } from './todo-list/item/Item'

interface NavigationButtonConfig {
  onClick: () => void
  text: string
}

interface FormConfig {
  buttonText: string
  label: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  placeholder: string
  value: string
}

interface HomeProps {
  formConfig: FormConfig
  itemsConfig: {
    handleCheck: (index: number) => void
    items: ItemBaseProps[]
    title: string
  }
  navigationButtons: {
    home: NavigationButtonConfig
    logout: NavigationButtonConfig
  }
  userEmail: string
}


/**
 * Home page
 */
const Home = (props: HomeProps) => {
  const { navigationButtons: { home, logout }, userEmail } = props

  return (
    <div className={homeStyles.base}>
      <div className={homeStyles['navigation-container']}>
        <Navigation
          logoutButtonText={logout.text}
          homeButtonText={home.text}
          onClickLogout={logout.onClick}
          onClickHome={home.onClick}
        />
        <div className={homeStyles['navigation-empty']}></div>
      </div>
      <div className={homeStyles['route-content-container']}>
        <WelcomeMessage userEmail={userEmail}/>
        <Form onSubmit={props.formConfig.onSubmit}>
          <Label htmlFor="todo-list-input">{props.formConfig.label}</Label>
          <div className={homeStyles['input-button-container']}>
            <TextInput value={props.formConfig.value} className={homeStyles['home-text-input']} placeholder={props.formConfig.placeholder} onChange={props.formConfig.onChange} name="todo-list-input" id="todo-list-input"/>
            <PrimaryButton className={homeStyles['home-submit-button']} type="submit" text={props.formConfig.buttonText}/>
          </div>
        </Form>
        <TodoList
          handleCheck={props.itemsConfig.handleCheck}
          items={props.itemsConfig.items}
          title={props.itemsConfig.title}
        />
      </div>
    </div>
  )
}

export default Home
