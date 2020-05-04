import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { renderWithRedux } from '../utils/test-helpers'
import Header from './Header'

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

test('add query params on click', () => {
  renderWithRedux(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  fireEvent.click(screen.getByRole('button'))
  expect(mockHistoryPush).toHaveBeenLastCalledWith('/?page=1&search=')
  expect(screen.getByAltText('marvel_logo')).toBeInTheDocument()
})
