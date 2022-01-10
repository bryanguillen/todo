import React, { FormEvent, useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

import { ItemBaseProps } from '../components/home/todo-list/item/Item'
import Home from '../components/home/Home'

/**
 * Stateful page component that invokes Home and passes props to it
 */
const HomeWrapper: NextPage<{authenticationData: { username: string; loggedIn: boolean }; setAuthenticationData(data: { username: string; loggedIn: boolean }): void}> = (props) => {
  const router = useRouter()

  const [todoListInput, setTodoListInput] = useState('')
  const [items, setItems] = useState<ItemBaseProps[]>([
    { checked: false, title: 'Cookies', name: 'item-0' },
    { checked: true, title: 'Apples', name: 'item-1' }
  ])

  const { loggedIn, username } = props.authenticationData

  /**
   * HACK: Re-route user to login page if they are not yet
   * logged in.
   */
  useEffect(() => {
    if (!loggedIn) {
      router.push('/')
    }
  }, [])

  /**
   * @description Function used to check off items
   * @TODO Move this into a hook, since it is reused in TodoList stories
   */
  function handleCheck(index: number) {
    const updatedItems: ItemBaseProps[] = items.map((item, currentIndex) => {
      const updatedItem = {...item}

      if (index === currentIndex) {
        updatedItem.checked = !item.checked
      }

      return updatedItem
    })
    setItems(updatedItems)
  }

  /**
   * @description Event handler for adding a todo list item.
   */
  function onSubmit(event: FormEvent) {
    event.preventDefault()
    
    if (todoListInput.trim() !== '') {
      setItems(previousState => [{ checked: false, title: todoListInput, name: `item-${items.length}` }, ...previousState])
      setTodoListInput('')
    }
  }

  return (
    loggedIn ?
      <section>
        <Head>
          <title>Todo App - Home</title>
          <meta name="description" content="Home page for todo app." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Home
          formConfig={{
            buttonText: 'Submit',
            label: 'Add New Item:',
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => setTodoListInput(event.target.value),
            onSubmit,
            placeholder: 'Example: Carrots',
            value: todoListInput
          }}
          itemsConfig={{
            handleCheck,
            items,
            title: 'Your Items:'
          }}
          navigationButtons={{
            home: { text: 'Home', onClick: () => router.push('/home') },
            logout: { text: 'Logout', onClick: () =>  {
              props.setAuthenticationData({ username: '', loggedIn: false })
              router.push('/')
            }}
          }}
          userEmail={username}
        />
      </section> :
      <div>redirecting....</div>
  )
}

export default HomeWrapper
