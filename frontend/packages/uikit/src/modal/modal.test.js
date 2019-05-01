import React from 'react'
import { shallow } from 'enzyme'
import Modal from './modal'

describe('uikit/Modal', () => {
  it('should render correctly', () => {
    expect(
      shallow(
        <Modal name="test" isOpened leftHeaderControl="div" rightHeaderControl="div">
          Modal
        </Modal>
      )
    ).toMatchSnapshot()
  })

  it('should render correctly closed', () => {
    expect(shallow(<Modal>Modal</Modal>)).toMatchSnapshot()
  })

  it('should render correctly isCustom', () => {
    expect(
      shallow(
        <Modal name="test" isOpened isCustom>
          Modal
        </Modal>
      )
    ).toMatchSnapshot()
  })
})
