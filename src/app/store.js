import { combineReducers, configureStore } from '@reduxjs/toolkit'
import allCharactersReducer from '../features/marvelCharacters/slices/allCharactersSlice'
import characterDetailReducer from '../features/marvelCharacters/slices/characterDetailSlice'

export const rootReducer = combineReducers({
  allCharacters: allCharactersReducer,
  characterDetail: characterDetailReducer
})

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer
})
