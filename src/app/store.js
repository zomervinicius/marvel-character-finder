import { configureStore } from '@reduxjs/toolkit'
import allCharactersReducer from '../features/marvelCharacters/slices/allCharactersSlice'
import characterDetailReducer from '../features/marvelCharacters/slices/characterDetailSlice'

export default configureStore({
  reducer: {
    allCharacters: allCharactersReducer,
    characterDetail: characterDetailReducer
  }
})
