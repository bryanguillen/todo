import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [authenticationData, setAuthenticationData] = useState({
    loggedIn: false,
    username: ''
  })

  useEffect(() => {
    if (authenticationData.loggedIn) {
      router.push('/home')
    }
  }, [authenticationData])

  return (
    <Component {...pageProps} authenticationData={authenticationData} setAuthenticationData={setAuthenticationData}/>
  )
}

export default MyApp
