import React from 'react'
import { shallow } from 'enzyme'
import Overlay from './overlay'

describe('Overlay component', () => {
  it('should render correctly', () => {
    expect(shallow(<Overlay options={[{ id: 1 }]} />)).toMatchSnapshot()
  })

  it('should render without option id correctly', () => {
    expect(shallow(<Overlay options={[{ children: 'text' }]} />)).toMatchSnapshot()
  })
})
