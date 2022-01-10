import React, { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Login from '../components/login/Login'

const LoginWrapper: NextPage<{setLoggedIn(val: boolean): void}> = (props) => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })

  function onChange(e: any) {
    setFormValues(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    
    const { username, password } = formValues
    
    if (username.trim() === 'user@test.com' && password.trim() === 'password') {
      props.setLoggedIn(true)
    }
  }

  return (
    <section>
      <Head>
        <title>Todo App - Login</title>
        <meta name="description" content="Login page for todo app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login
        buttonText="Login"
        onChange={onChange}
        onSubmit={onSubmit}
        labels={{
          password: "Password",
          username: "Email",
        }}
        values={{
          password: formValues.password,
          username: formValues.username
        }}
      />
    </section>
  )
}

export default LoginWrapper