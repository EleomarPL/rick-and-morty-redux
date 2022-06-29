import { createSlice } from '@reduxjs/toolkit'

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    value: []
  },
  reducers: {
    getInitial: state => {
      state.value = []
    }
  }
})

export const { getInitial } = episodesSlice.actions

export default episodesSlice.reducer
