import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNextPageAxios, getPreviusPageAxios } from '../services/apis/general'

import { searchLocationByNameAxios } from '../services/apis/locations'

export const searchByName = createAsyncThunk(
  'locations/searchByName',
  async (action) => {
    return await searchLocationByNameAxios(action)
  }
)
export const getNextPage = createAsyncThunk(
  'locations/getNextOage',
  async (action) => {
    return await getNextPageAxios(action)
  }
)
export const getPreviusPage = createAsyncThunk(
  'locations/getPreviusPage',
  async (action) => {
    return await getPreviusPageAxios(action)
  }
)

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    value: [],
    status: 'idle',
    nextPage: null,
    previusPage: null
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
        state.nextPage = action.payload.info.next
        state.previusPage = action.payload.info.prev
      })
      .addCase(searchByName.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(getNextPage.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.value = action.payload.results
        state.nextPage = action.payload.info.next
        state.previusPage = action.payload.info.prev
      })
      .addCase(getNextPage.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(getPreviusPage.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getPreviusPage.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.value = action.payload.results
        state.nextPage = action.payload.info.next
        state.previusPage = action.payload.info.prev
      })
      .addCase(getPreviusPage.rejected, (state, action) => {
        state.status = 'error'
      })
  }
})

export const { getInitial } = locationsSlice.actions

export default locationsSlice.reducer
