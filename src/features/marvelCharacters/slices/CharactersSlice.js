import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET_CHARACTERS_API_URL } from '../services/index'

export const fetchCharactersByName = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().characters
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const response = await fetch(GET_CHARACTERS_API_URL)
    const json = await response.json()
    return json
  }
)

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    entities: [],
    loading: 'idle',
    currentRequestId: undefined,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchCharactersByName.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [fetchCharactersByName.fulfilled]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities.push(action.payload.data)
        state.currentRequestId = undefined
      }
    },
    [fetchCharactersByName.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    }
  }
})

export const selectCharacters = (state) => state.characters

export default charactersSlice.reducer
