import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

describe('/', () => {
  it('shows the correct snapshot tree for the / page', () => {
    const component = (
      <App />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
