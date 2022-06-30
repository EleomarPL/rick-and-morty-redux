import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNextPageAxios, getPreviusPageAxios } from '../services/apis/general'

import { getLocationByIdAxios, searchLocationByNameAxios } from '../services/apis/locations'

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
export const getLocationById = createAsyncThunk(
  'locations/getLocationById',
  async (action) => {
    return await getLocationByIdAxios(action)
  }
)

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    value: [],
    location: {},
    status: 'idle',
    statusNext: 'idle',
    statusPrev: 'idle',
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
      .addCase(getLocationById.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getLocationById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.location = action.payload
      })
      .addCase(getLocationById.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(searchByName.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(searchByName.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.value = action.payload.results
        state.nextPage = action.payload.info.next
        state.previusPage = action.payload.info.prev
        state.location = {}
      })
      .addCase(searchByName.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(getNextPage.pending, (state, action) => {
        state.statusNext = 'loading'
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        state.statusNext = 'succeeded'
        state.value = action.payload.results
        state.nextPage = action.payload.info.next
        state.previusPage = action.payload.info.prev
        state.location = {}
      })
      .addCase(getNextPage.rejected, (state, action) => {
        state.statusNext = 'error'
      })
      .addCase(getPreviusPage.pending, (state, action) => {
        state.statusPrev = 'loading'
      })
      .addCase(getPreviusPage.fulfilled, (state, action) => {
        state.statusPrev = 'succeeded'
        state.value = action.payload.results
        state.nextPage = action.payload.info.next
        state.previusPage = action.payload.info.prev
        state.location = {}
      })
      .addCase(getPreviusPage.rejected, (state, action) => {
        state.statusPrev = 'error'
      })
  }
})

export const { getInitial } = locationsSlice.actions

export default locationsSlice.reducer
