import React from 'react'
import { shallow } from 'enzyme'
import List from './list'
import Text from '../text'

describe('uikit/List', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <List items={[{ value: <Text>Custom config Icon 1</Text> }, { value: <Text>Custom config Icon 2</Text> }]} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
