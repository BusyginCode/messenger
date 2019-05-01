import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './select'

const options = {
  short: [
    { value: '1', children: '1', disabled: false },
    { value: '2', children: '2', disabled: false },
    { value: '3', children: '3', disabled: false },
    { value: '4', children: '4', disabled: false }
  ],
  long: [
    { value: '1', children: 'long long short long', disabled: false },
    { value: '2', children: 'short short', disabled: false },
    { value: '3', children: 'extremelylongstringtext', disabled: false },
    { value: '4', children: 'twostringthatshouldbe extremelylong', disabled: false }
  ],
  disabled: [
    { value: '1', children: '1', disabled: true },
    { value: '2', children: '2', disabled: false },
    { value: '3', children: '3', disabled: true },
    { value: '4', children: '4', disabled: false }
  ]
}

const defaultProps = {
  style: { margin: '8px 0', width: 300 }
}

const baseClass = 'm-select'
const multiClass = 'm-select_multi'
const searchClass = 'm-select_search'

const Single = () => (
  <div>
    <p> L Size [{baseClass}/L] </p>
    <Select {...defaultProps} placeholder={'Select Single With Disabled Options'} options={options.disabled} />
    <Select {...defaultProps} placeholder={'Select With Disabled Options'} value="Select" options={options.disabled} />
    <Select {...defaultProps} placeholder={'Select Single Options'} value="Select" options={options.short} disabled />

    <Select {...defaultProps} placeholder={'Premium Select'} options={options.disabled} premium />
    <Select {...defaultProps} placeholder={'Premium Select'} value="Select" options={options.disabled} premium />
    <Select
      {...defaultProps}
      placeholder={'Premium Select'}
      value="Select"
      options={options.disabled}
      premium
      disabled
    />

    <br />
    <p> M Size [{baseClass}/M] </p>
    <Select {...defaultProps} placeholder={'Select Single With Disabled Options'} options={options.disabled} size="m" />
    <Select
      {...defaultProps}
      placeholder={'Select With Disabled Options'}
      value="Select"
      options={options.disabled}
      size="m"
    />
    <Select
      {...defaultProps}
      placeholder={'Select Single Options'}
      value="Select"
      options={options.short}
      disabled
      size="m"
    />

    <Select {...defaultProps} placeholder={'Premium Select'} options={options.disabled} premium size="m" />
    <Select
      {...defaultProps}
      placeholder={'Premium Select'}
      value="Select"
      options={options.disabled}
      premium
      size="m"
    />
    <Select
      {...defaultProps}
      placeholder={'Premium Select'}
      value="Select"
      options={options.disabled}
      premium
      disabled
      size="m"
    />
  </div>
)

const Multiple = () => (
  <div>
    <p> L Size [{multiClass}/L] </p>
    <Select {...defaultProps} placeholder={'Select With Disabled Options'} options={options.disabled} multiple />
    <Select {...defaultProps} placeholder={'Premium Select'} options={options.disabled} premium multiple />
    <Select
      {...defaultProps}
      placeholder={'Premium Select'}
      defaultValue={['Preselected', 'Values']}
      options={options.disabled}
      premium
      multiple
    />
    <Select
      {...defaultProps}
      defaultValue={['Preselected', 'Values', 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch']}
      options={options.disabled}
      multiple
    />
    <Select
      {...defaultProps}
      defaultValue={['Preselected', 'Values', 'Preselected2', 'Values2']}
      options={options.disabled}
      multiple
    />

    <br />
    <p> M Size [{multiClass}/M] </p>
    <Select
      {...defaultProps}
      placeholder={'Select With Disabled Options'}
      options={options.disabled}
      size="m"
      multiple
    />
    <Select {...defaultProps} placeholder={'Premium Select'} options={options.disabled} premium size="m" multiple />
    <Select
      {...defaultProps}
      defaultValue={['Preselected', 'Values']}
      options={options.disabled}
      premium
      size="m"
      multiple
    />
    <Select
      {...defaultProps}
      defaultValue={['Preselected', 'Values', 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch']}
      options={options.disabled}
      size="m"
      multiple
    />
    <Select
      {...defaultProps}
      defaultValue={['Preselected', 'Values', 'Preselected2', 'Values2']}
      options={options.disabled}
      size="m"
      multiple
    />
  </div>
)

const Search = () => (
  <div>
    <p> L Size [{searchClass}/L] </p>
    <Select {...defaultProps} placeholder={'Select Single Options'} options={options.short} showSearch />
    <Select
      {...defaultProps}
      value="Preselected"
      placeholder={'Select Single Options'}
      options={options.short}
      showSearch
    />
    <Select {...defaultProps} placeholder={'Select With Disabled Options'} options={options.disabled} showSearch />
    <Select {...defaultProps} placeholder={'Premium Select'} options={options.disabled} premium showSearch />
    <Select
      {...defaultProps}
      placeholder={'Premium Select'}
      defaultValue={'Preselected value'}
      options={options.disabled}
      showSearch
      premium
      multiple
    />
    <Select {...defaultProps} defaultValue={['Preselected', 'Values']} options={options.disabled} showSearch multiple />

    <br />
    <p> M Size [{searchClass}/M] </p>
    <Select {...defaultProps} placeholder={'Select Single Options'} options={options.short} showSearch size="m" />
    <Select
      {...defaultProps}
      value="Preselected"
      placeholder={'Select Single Options'}
      options={options.short}
      showSearch
      size="m"
    />
    <Select
      {...defaultProps}
      placeholder={'Select With Disabled Options'}
      options={options.disabled}
      showSearch
      size="m"
    />
    <Select {...defaultProps} placeholder={'Premium Select'} options={options.disabled} premium showSearch size="m" />
    <Select
      {...defaultProps}
      placeholder={'Premium Select'}
      defaultValue={'Preselected value'}
      options={options.disabled}
      showSearch
      premium
      multiple
      size="m"
    />
    <Select
      {...defaultProps}
      defaultValue={['Preselected', 'Values']}
      options={options.disabled}
      showSearch
      multiple
      size="m"
    />
  </div>
)

storiesOf(`UIKit/${baseClass}`, module)
  .addDecorator(story => <div style={{ width: 300 }}>{story()}</div>)
  .addWithJSX('default', () => (
    <div>
      <br />
      <h3>Single</h3>
      <br />
      <Single />

      <br />
      <h3>Multiple</h3>
      <br />
      <Multiple />

      <br />
      <h3>Search</h3>
      <br />
      <Search />
    </div>
  ))
  .addWithJSX(`single [m-select]`, Single)
  .addWithJSX(`multiple [${multiClass}]`, Multiple)
  .addWithJSX(`search ${searchClass}`, Search)
