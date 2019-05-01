import React from 'react'
import { storiesOf } from '@storybook/react'
import ArrowLeftIcon from '@messenger/icons/lib/icon/svgr/m/arrow-left'
import ArrowRightIcon from '@messenger/icons/lib/icon/svgr/m/arrow-right'
import List from './list'
import ListItem from '../list-item'
import Text from '../text'

storiesOf('RFC/UIKit/List', module).add('default', () => (
  <div>
    <List>
      <div>Without list item 1</div>
      <div>Without list item 2</div>
      <div>Without list item 3</div>
    </List>
    <br />
    <br />
    <br />
    <List>
      <ListItem>
        <Text>List item children 1</Text>
      </ListItem>
      <ListItem>
        <Text>List item children 2</Text>
      </ListItem>
      <ListItem>
        <Text>List item children 3</Text>
      </ListItem>
    </List>
    <br />
    <br />
    <br />
    <List items={[{ value: 'In config 1' }, { value: 'In config 1', className: 'red' }]} />
    <br />
    <br />
    <br />
    <List icon={<ArrowLeftIcon />} items={[{ value: 'Custom Icon 1' }, { value: 'Custom Icon 1' }]} />
    <br />
    <br />
    <br />
    <List
      items={[
        { value: <Text>Custom config Icon 1</Text>, icon: <ArrowLeftIcon /> },
        { value: <Text>Custom config Icon 2</Text>, icon: <ArrowRightIcon /> }
      ]}
    />
  </div>
))
