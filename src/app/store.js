import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/marvelCharacters/slices/CharacterSlice'
import charactersReducer from '../features/marvelCharacters/slices/CharactersSlice'

export default configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer
  }
})
