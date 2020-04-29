import { createSlice } from '@reduxjs/toolkit'

const initialState = { page: 1 }

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
    resetPagination: (state) => {
      state.page = initialState.page
    }
  }
})

export const { changePage, resetPagination } = paginationSlice.actions

export const selectPagination = (state) => state.pagination

export default paginationSlice.reducer
