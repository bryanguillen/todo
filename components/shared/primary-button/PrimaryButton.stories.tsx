import React from 'react'

import PrimaryButton from './PrimaryButton'

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton
}

export const PrimaryButtonStory = () => <PrimaryButton onClick={(event) => console.log('clicked')} text="Submit"/>