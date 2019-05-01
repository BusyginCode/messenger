import React from 'react'
import { render } from 'enzyme'
import Text from './text'

describe('uikit/Text', () => {
  it('should renders correctly', () => {
    const wrapper = render(<Text>Text</Text>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should renders correctly with inject', () => {
    const wrapper = render(
      <Text inject>
        <a />
      </Text>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
