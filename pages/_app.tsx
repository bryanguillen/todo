import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  /**
   * Shared state for pages/routes
   */
  const [authenticationData, setAuthenticationData] = useState({
    loggedIn: false,
    username: ''
  })

  /**
   * Once authentication data is updated and user is logged in,
   * go '/home'
   */
  useEffect(() => {
    if (authenticationData.loggedIn) {
      router.push('/')
    }
  }, [authenticationData])

  return (
    <Component {...pageProps} authenticationData={authenticationData} setAuthenticationData={setAuthenticationData}/>
  )
}

export default MyApp
