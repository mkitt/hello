import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../index'

describe('/', () => {
  it('shows the correct snapshot tree for the / page', () => {
    const component = (
      <Index />
    )
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
