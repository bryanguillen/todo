import React from 'react'

import Form from './Form'

export default {
  title: 'Components/Form',
  component: Form
}

export const FormStory = () => (
  <Form onSubmit={(event) => event.preventDefault()}>
    <h1>Some Header</h1>
  </Form>
)