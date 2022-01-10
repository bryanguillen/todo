import React from 'react'

import TextInput from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput
}

export const TextInputStory = () => <TextInput onChange={(event) => console.log('typing detected')} placeholder="Some Text"/>