import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import charactersReducer from '../features/marvelCharacters/slices/CharactersSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    characters: charactersReducer
  }
})
