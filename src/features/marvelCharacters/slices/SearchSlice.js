import { createSlice } from '@reduxjs/toolkit'

const initialState = { search: '' }

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload
    },
    resetSearch: (state) => {
      state.search = initialState.search
    }
  }
})

export const { setSearchValue, resetSearch } = searchSlice.actions

export const selectSearch = (state) => state.search

export default searchSlice.reducer
