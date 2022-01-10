import React from 'react'
import Item from './Item'

export default {
  title: 'Components/Item',
  component: Item
}

export const ItemStory = () => (
  <Item
    checked={false}
    name="some-item"
    onCheck={event => console.log(event.target)}
    title="Some TodoList Item"
  />
)

export const ItemStoryChecked = () => (
  <Item
    checked={true}
    name="some-item-2"
    onCheck={event => console.log(event.target)}
    title="Some TodoList Item 2"
  />
)