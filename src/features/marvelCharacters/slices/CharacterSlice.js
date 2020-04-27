import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET_CHARACTER_BY_ID_API_URL } from '../services'

export const fetchCharacterById = createAsyncThunk(
  'characterById/fetchByIdStatus',
  async (charId, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().character
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }

    const response = await fetch(GET_CHARACTER_BY_ID_API_URL(charId))
    const json = await response.json()
    return json
  }
)

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    entities: {},
    loading: 'idle',
    currentRequestId: undefined,
    error: null
  },
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

export const selectCharacter = (state) => state.character

export default characterSlice.reducer
