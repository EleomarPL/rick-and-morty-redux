import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { searchEpisodeByNameAxios } from '../services/apis/episodes'

export const searchByName = createAsyncThunk(
  'episodes/searchByName',
  async (action) => {
    return await searchEpisodeByNameAxios(action)
  }
)

export const episodesSlice = createSlice({
  name: 'episodes',
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

export const { getInitial } = episodesSlice.actions

export default episodesSlice.reducer
