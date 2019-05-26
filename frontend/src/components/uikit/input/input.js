import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import Box from 'components/uikit/box'
import Text from 'components/uikit/text'

const CustomInput = ({ errorMessage, ...props }) =>
  !errorMessage ? (
    <Input {...props} />
  ) : (
    <Box flexGrow={1} direction="column">
      <Input {...props} />
      <Box top="xs">
        <Text size="s" color="danger">
          {errorMessage}
        </Text>
      </Box>
    </Box>
  )

CustomInput.propTypes = {
  errorMessage: PropTypes.string
}

export default CustomInput
