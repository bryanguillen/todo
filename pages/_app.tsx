import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (loggedIn) {
      router.push('/home')
    }
  }, [loggedIn])

  return (
    <Component {...pageProps} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
  )
}

export default MyApp
