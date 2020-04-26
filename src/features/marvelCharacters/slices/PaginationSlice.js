import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    page: 1
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    }
  }
})

export const { changePage } = paginationSlice.actions

export const selectPagination = (state) => state.pagination

export default paginationSlice.reducer
