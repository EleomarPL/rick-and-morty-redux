import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { searchLocationByNameAxios } from '../services/apis/locations'

export const searchByName = createAsyncThunk(
  'locations/searchByName',
  async (action) => {
    return await searchLocationByNameAxios(action)
  }
)

export const locationsSlice = createSlice({
  name: 'locations',
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

export const { getInitial } = locationsSlice.actions

export default locationsSlice.reducer
