import { createSlice } from '@reduxjs/toolkit'

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    value: []
  },
  reducers: {
    getInitial: state => {
      state.value = []
    }
  }
})

export const { getInitial } = locationsSlice.actions

export default locationsSlice.reducer
