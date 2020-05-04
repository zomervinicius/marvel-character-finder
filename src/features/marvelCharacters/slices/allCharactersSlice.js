import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { GET_CHARACTERS_API_URL } from '../services/index'

export const fetchCharactersByParams = createAsyncThunk(
  'charactersByParams/fetchByIdStatus',
  async (params, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().allCharacters
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }
    const { search, page } = params

    const decodedSearch = search ? decodeURI(search) : ''
    const defaultPageValue = page || 1

    const offset = 20 * defaultPageValue - 20
    const response = await axios.get(
      `${GET_CHARACTERS_API_URL}&limit=20&offset=${offset}${
        decodedSearch ? `&nameStartsWith=${decodedSearch}` : ''
      }`
    )
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

export const allCharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharactersByParams.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [fetchCharactersByParams.fulfilled]: (state, action) => {
      const { requestId } = action.meta

      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.entities = action.payload.data
        state.currentRequestId = undefined
      }
    },
    [fetchCharactersByParams.rejected]: (state, action) => {
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

export const selectAllCharacters = (state) => state.allCharacters

export default allCharactersSlice.reducer
