import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import charactersReducer from '../features/marvelCharacters/slices/CharactersSlice'
import paginationReducer from '../features/marvelCharacters/slices/PaginationSlice'
import searchReducer from '../features/marvelCharacters/slices/SearchSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    characters: charactersReducer,
    pagination: paginationReducer,
    search: searchReducer
  }
})
