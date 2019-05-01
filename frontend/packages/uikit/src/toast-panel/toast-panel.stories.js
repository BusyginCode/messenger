import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import TwitterIcon from '@messenger/icons/lib/icon/svgr/ms/tw'
import ToastPanel from './toast-panel'

/** @todo It can be reused in other components. */
const loremIpsum = (
  <div>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
    to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
    versions of Lorem Ipsum.
  </div>
)

class ToastPanelPreview extends Component {
  id = 0
  state = { toasts: [] }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          height: 500,
          width: 500,
          backgroundColor: '#fff',
          padding: 8
        }}
      >
        <button onClick={this.onAddToastClick}>Add Toast</button>

        {loremIpsum}

        <ToastPanel toasts={this.state.toasts} onToastClose={this.onToastClose} />
      </div>
    )
  }

  onAddToastClick = () => {
    this.setState(this.addToast)
  }

  addToast = prevState => {
    this.id++

    const toast = {
      id: this.id.toString(),
      icon: <TwitterIcon />,
      content: `Test message ${this.id}`,
      intent: 'success'
    }

    return {
      toasts: [...prevState.toasts, toast]
    }
  }

  onToastClose = id => {
    this.setState(prevState => this.removeToast(prevState, id))
  }

  removeToast = (prevState, id) => {
    const toasts = prevState.toasts.filter(t => t.id !== id)
    return { toasts }
  }
}

storiesOf('RFC/UIKit/ToastPanel', module).add('with dynamic list of toasts', () => <ToastPanelPreview />)

export default ToastPanelPreview
