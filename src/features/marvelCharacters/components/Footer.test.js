import { render, screen } from '@testing-library/react'
import React from 'react'
import Footer from './Footer'

test('check footer rendered', () => {
  render(<Footer />)
  expect(screen.getByText('Vinícius Zomer')).toBeInTheDocument()
})
