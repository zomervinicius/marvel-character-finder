import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { GET_CHARACTER_BY_ID_API_URL } from '../services'

export const fetchCharacterById = createAsyncThunk(
  'characterById/fetchByIdStatus',
  async (charId, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().characterDetail
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }

    const response = await axios.get(GET_CHARACTER_BY_ID_API_URL(charId))
    const { data } = response
    return data
  }
)

export const initialState = {
  entities: {},
  loading: 'idle',
  currentRequestId: undefined,
  error: null
}

export const characterDetailSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacterById.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [fetchCharacterById.fulfilled]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload.data
        state.currentRequestId = undefined
      }
    },
    [fetchCharacterById.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    }
  }
})

export const selectCharacterDetail = (state) => state.characterDetail

export default characterDetailSlice.reducer
