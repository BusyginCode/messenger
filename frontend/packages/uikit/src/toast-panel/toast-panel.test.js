import React from 'react'
import { shallow } from 'enzyme'
import ToastPanel from './toast-panel'

describe('ToastPanel', () => {
  it('renders without toasts', () => {
    const toasts = []

    const panel = shallow(<ToastPanel toasts={toasts} />)

    expect(panel).toMatchSnapshot()
  })

  it('renders list of toasts', () => {
    const svg = <svg />
    const toasts = [
      {
        id: '1',
        icon: svg,
        content: 'Test message 1',
        intent: 'success'
      },
      {
        id: '2',
        icon: svg,
        content: 'Test message 2',
        intent: 'warning'
      }
    ]

    const panel = shallow(<ToastPanel toasts={toasts} />)

    expect(panel).toMatchSnapshot()
  })
})
