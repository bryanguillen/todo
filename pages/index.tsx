import React, { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Login from '../components/login/Login'

const LoginWrapper: NextPage<{setAuthenticationData(data: { username: string; loggedIn: boolean }): void}> = (props) => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState({
    exists: false,
    text: 'Oops!  Make sure you include correct credentials.'
  })

  function onChange(e: any) {
    setFormValues(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    
    const USERNAME = 'user@test.com'
    const { username, password } = formValues
    
    if (username.trim() === USERNAME && password.trim() === 'password') {
      setError(previousState => ({ ...previousState, exists: false }))
      props.setAuthenticationData(({ loggedIn: true, username: USERNAME }))
    } else {
      setError(previousState => ({ ...previousState, exists: true }))
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
        errorConfig={error}
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