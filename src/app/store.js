import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/marvelCharacters/slices/CharacterSlice'
import charactersReducer from '../features/marvelCharacters/slices/CharactersSlice'
import paginationReducer from '../features/marvelCharacters/slices/PaginationSlice'
import searchReducer from '../features/marvelCharacters/slices/SearchSlice'

export default configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
    pagination: paginationReducer,
    search: searchReducer
  }
})
