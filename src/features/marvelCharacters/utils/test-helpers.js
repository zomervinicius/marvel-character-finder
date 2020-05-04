import { render } from '@testing-library/react'
import { initialState as allCharactersInitialState } from 'features/marvelCharacters/slices/allCharactersSlice'
import { initialState as characterDetailInitialState } from 'features/marvelCharacters/slices/characterDetailSlice'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

export const rootInitialState = {
  allCharacters: allCharactersInitialState,
  characterDetail: characterDetailInitialState
}

export const renderWithRedux = (ui, initialState = rootInitialState) => {
  const store = mockStore(initialState)
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    mockStore: store
  }
}
