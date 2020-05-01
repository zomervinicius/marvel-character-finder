import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '../features/marvelCharacters/slices/allCharactersSlice'
import characterReducer from '../features/marvelCharacters/slices/characterDetailSlice'

export default configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer
  }
})
