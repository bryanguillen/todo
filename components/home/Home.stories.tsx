import React, { useState } from 'react'
import Home from './Home'

export default {
  title: 'Pages/Home',
  component: Home,
  layout: 'fullscreen'
}

export const HomeStory = () => {
  const [itemField, setItemField] = useState('')

  return (
    <Home
      formConfig={{
        onChange: event => setItemField(event.currentTarget.value),
        onSubmit: event => event.preventDefault(),
        buttonText: 'Submit',
        label: 'Create New Item',
        placeholder: 'Example: Some Mock Item',
        value: 'Some Value'
      }}
      itemsConfig={{
        handleCheck: (index: number) => console.log(index),
        items: [
          { title: 'Hello World', checked: false, name: 'item-1' }
        ],
        title: 'Todo List'
      }}
      navigationButtons={{
        home: { text: 'Home', onClick: () => console.log('home clicked!') },
        logout: { text: 'Logout', onClick: () => console.log('logout clicked!') },
      }}
      userEmail="test@gmail.com"
    />
  )
}
