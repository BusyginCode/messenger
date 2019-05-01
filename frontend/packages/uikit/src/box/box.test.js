import React from 'react'
import { shallow } from 'enzyme'
import Box from './box'

describe('uikit/Box', () => {
  it('should render correctly', () => {
    expect(
      shallow(
        <Box justify="center" margin="s" padding="m">
          Box
        </Box>
      )
    ).toMatchSnapshot()
  })

  it('should render correctly without inject shorthand', () => {
    expect(
      shallow(
        <Box inject flexGrow="1" flexShrink="1" flexBasis="50%" justify="center" padding="m m l 0" margin="m m l 0">
          <span>Box incorrect</span>
        </Box>
      )
    ).toMatchSnapshot()
  })
})
