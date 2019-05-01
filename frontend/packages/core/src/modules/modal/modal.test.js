import { openModal, closeModal } from './modal.actions'
import { getModal } from './modal.selectors'
import reducer from './modal.reducer'

describe('modal actions', () => {
  it('should open correctly', () => {
    expect(openModal({ name: 'MODAL', props: {}, modalProps: {} })).toMatchSnapshot()
  })

  it('should close correctly', () => {
    expect(closeModal('MODAL')).toMatchSnapshot()
  })
})

describe('auth selectors', () => {
  it('should getNotifications correctly', () => {
    const modal = {}
    expect(getModal({ modal })).toBe(modal)
  })
})

describe('auth reducer', () => {
  it('should reduce initialState correctly', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should reduce open correctly', () => {
    expect(reducer({}, openModal({ name: 'MODAL', props: {} }))).toMatchSnapshot()
  })

  it('should reduce close correctly', () => {
    expect(reducer({ MODAL: {} }, closeModal('MODAL'))).toMatchSnapshot()
  })
})
