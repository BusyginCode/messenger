import React from 'react'
import { mount } from 'enzyme'
import didCatch from './did-catch'

describe('core/utils/did-catch', () => {
  it('should render correctly', () => {
    const Child = () => <span>1</span>
    const Component = didCatch()(Child)
    expect(mount(<Component />)).toMatchSnapshot()
  })

  it('should render correctly with Error', () => {
    const Child = a => <span>{a.a.a}</span>
    const onError = jest.fn()
    const Component = didCatch({ onError })(Child)

    expect(mount(<Component />)).toMatchSnapshot()

    expect(onError).toHaveBeenCalledTimes(1)
  })

  it('should render correctly with Error & Component', () => {
    const Child = a => <span>{a.a.a}</span>
    const ErrorComponent = () => <span>error component</span>
    const Component = didCatch({ ErrorComponent })(Child)

    expect(mount(<Component />)).toMatchSnapshot()
  })
})
