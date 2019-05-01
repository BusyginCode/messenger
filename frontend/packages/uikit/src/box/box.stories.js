import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from './box'

storiesOf('RFC/UIKit/Box', module)
  .add('top', () => (
    <div style={{ width: 500, backgroundColor: 'gray' }}>
      <div>block</div>
      <Box top="s">Box top margin s</Box>
      <Box top="m">Box top margin m</Box>
      <Box top="l">Box top margin l</Box>
      <Box top="xl">Box top margin xl</Box>
    </div>
  ))
  .add('bottom', () => (
    <div style={{ width: 500, backgroundColor: 'gray' }}>
      <Box bottom="s">Box bottom margin s</Box>
      <Box bottom="m">Box bottom margin m</Box>
      <Box bottom="l">Box bottom margin l</Box>
      <Box bottom="xl">Box bottom margin xl</Box>
      <div>block</div>
    </div>
  ))
  .add('justify', () => (
    <div style={{ width: 500, backgroundColor: 'gray' }}>
      <Box justify="left">Box right</Box>
      <Box justify="right">Box left</Box>
      <Box justify="center">Box center</Box>
      <Box justify="around">
        <div>1</div>
        <div>2</div>
      </Box>
    </div>
  ))
  .add('align', () => (
    <div style={{ width: 500, backgroundColor: 'gray' }}>
      <Box align="start">Box right</Box>
      <Box align="end">Box left</Box>
      <Box align="center">Box center</Box>
    </div>
  ))
  .add('component', () => (
    <div style={{ width: 500, backgroundColor: 'gray' }}>
      <Box component="section">Box component section</Box>
      <Box component="header">Box component header</Box>
    </div>
  ))
