import { render, screen } from '@testing-library/react'
import HomePage from '../../pages/index'

it('test', () => {
  render(<HomePage />)
  // asserts
  const input = screen.getByDisplayValue('umi')
  expect(input).toBeTruthy()
})