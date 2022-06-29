import { createSlice } from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: []
  },
  reducers: {
    getInitial: state => {
      state.value = []
    }
  }
})

export const { getInitial } = charactersSlice.actions

export default charactersSlice.reducer
