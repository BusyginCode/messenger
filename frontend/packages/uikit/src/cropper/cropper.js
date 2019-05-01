import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RCropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

class Cropper extends PureComponent {
  static propTypes = {
    src: PropTypes.string
  }

  cropperEl = React.createRef()

  crop = params => this.cropperEl.current.getCroppedCanvas(params)

  render() {
    const { src } = this.props

    if (!src) return null

    return (
      <RCropper
        ref={this.cropperEl}
        src={src}
        style={{ maxHeight: 300, maxWidth: 500 }}
        // crop={this.crop}
        aspectRatio={1}
        dragMode="move"
        viewMode={1}
        movable={false}
        zoomable={false}
        autoCropArea={0.1}
        minCropBoxWidth={150}
        minCropBoxHeight={150}
        modal={true}
        background={true}
        minContainerWidth={150}
        minContainerHeight={150}
        minCanvasWidth={150}
        minCanvasHeight={150}
      />
    )
  }
}

export default Cropper
