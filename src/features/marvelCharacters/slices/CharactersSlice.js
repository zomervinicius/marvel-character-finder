import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET_CHARACTERS_API_URL } from '../services/index'

export const fetchCharactersByOffset = createAsyncThunk(
  'users/fetchByIdStatus',
  async (offset, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().characters
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await fetch(
      `${GET_CHARACTERS_API_URL}&offset=${offset}&limit=20`
    )
    const json = await response.json()
    return json
  }
)

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    entities: {},
    loading: 'idle',
    currentRequestId: undefined,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchCharactersByOffset.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [fetchCharactersByOffset.fulfilled]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload.data
        state.currentRequestId = undefined
      }
    },
    [fetchCharactersByOffset.rejected]: (state, action) => {
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

export const selectCharacters = (state) => state.characters

export default charactersSlice.reducer
