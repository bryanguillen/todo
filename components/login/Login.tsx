import React from 'react'

import Form from '../shared/form/Form'
import Label from '../shared/label/Label'
import PrimaryButton from '../shared/primary-button/PrimaryButton'
import TextInput from '../shared/text-input/TextInput'

import loginStyles from './Login.module.css'

interface LoginProps {
  buttonText: string
  errorConfig: {
    exists: boolean
    text: string
  }
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  labels: {
    password: string
    username: string
  }
  values: {
    password: string
    username: string
  }
}

const Login = (props: LoginProps) => {
  return (
    <div className={loginStyles.base}>
      <Form className={loginStyles.form} onSubmit={props.onSubmit}>
        {props.errorConfig.exists ?
          <div className={loginStyles['control-container']}>
            <p className={loginStyles.error}>{props.errorConfig.text}</p>
          </div> :
          null
        }
        <div className={loginStyles['control-container']}>
          <Label htmlFor="username">{props.labels.username}</Label>
          <TextInput className={loginStyles.input} type="text" onChange={props.onChange} value={props.values.username} name="username" id="username"/>
        </div>
        <div className={loginStyles['control-container']}>
          <Label htmlFor="password">{props.labels.password}</Label>
          <TextInput className={loginStyles.input} type="password" onChange={props.onChange} value={props.values.password} name="password" id="password"/>
        </div>
        <PrimaryButton type="submit" text={props.buttonText}/>
      </Form>
    </div>
  )
}

export default Login