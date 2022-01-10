import React, { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

import { ItemBaseProps } from '../components/home/todo-list/item/Item'
import Home from '../components/home/Home'

const HomeWrapper: NextPage<{setLoggedIn(val: boolean): void}> = (props) => {
  const router = useRouter()

  const [todoListInput, setTodoListInput] = useState('')
  const [items, setItems] = useState<ItemBaseProps[]>([])

  function handleCheck(index: number) {
    const updatedItems: ItemBaseProps[] = items.map((item, currentIndex) => {
      if (index === currentIndex) {
        item.checked = !item.checked
      }
      return item
    })
    setItems(updatedItems)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    
    if (todoListInput.trim() !== '') {
      setItems(previousState => [{ checked: false, title: todoListInput, name: getNameForItem() }, ...previousState])
      setTodoListInput('')
    }
  }

  function getNameForItem() {
    return `item-${items.length}`
  }

  return (
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
          onChange: (event: any) => setTodoListInput(event.currentTarget.value),
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
            props.setLoggedIn(false)
            router.push('/')
          }}
        }}
        userEmail="user@test.com"
      />
    </section>
  )
}

export default HomeWrapper
