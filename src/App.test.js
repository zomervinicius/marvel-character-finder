import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'

test('renders footer correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText(/Vinícius Zomer/i)).toBeInTheDocument()
})
