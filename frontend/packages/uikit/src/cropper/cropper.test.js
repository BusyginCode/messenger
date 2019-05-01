import React from 'react'
import { shallow, mount } from 'enzyme'
import Cropper from './cropper'

describe('uikit/Cropper', () => {
  it('should render correctly', () => {
    expect(mount(<Cropper src="http://image.jpg" />)).toMatchSnapshot()
  })
  it('should render empty correctly', () => {
    expect(shallow(<Cropper />)).toMatchSnapshot()
  })
})
