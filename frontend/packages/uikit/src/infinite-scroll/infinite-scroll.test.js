import React from 'react'
import { shallow } from 'enzyme'
import InfiniteScroll from './infinite-scroll'

describe('uikit/InfiniteScroll', () => {
  it('should renders correctly', () => {
    const onLoad = jest.fn()
    const wrapper = shallow(
      <InfiniteScroll style={{ maxHeight: 100 }} onLoad={onLoad} hasNext>
        <div style={{ height: 200 }} />
      </InfiniteScroll>
    )

    expect(wrapper).toMatchSnapshot()

    wrapper.instance().loadMore(0)

    expect(onLoad).toHaveBeenCalled()
  })
})
