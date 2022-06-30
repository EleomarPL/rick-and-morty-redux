import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { searchCharacterByNameAxios } from '../services/apis/character'

export const searchByName = createAsyncThunk(
  'characters/searchByName',
  async (action) => {
    return await searchCharacterByNameAxios(action)
  }
)

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: [],
    status: 'idle'
  },
  reducers: {
    getInitial: state => {
      state.value = []
    }
  },
  extraReducers (builder) {
    builder
      .addCase(searchByName.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.value = action.payload.results
      })
      .addCase(searchByName.rejected, (state, action) => {
        state.status = 'error'
      })
  }
})

export const { getInitial } = charactersSlice.actions

export default charactersSlice.reducer
