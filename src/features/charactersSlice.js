import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { searchCharacterByNameAxios } from '../services/apis/character'
import { getNextPageAxios, getPreviusPageAxios } from '../services/apis/general'

export const searchByName = createAsyncThunk(
  'characters/searchByName',
  async (action) => {
    return await searchCharacterByNameAxios(action)
  }
)
export const getNextPage = createAsyncThunk(
  'characters/getNextOage',
  async (action) => {
    return await getNextPageAxios(action)
  }
)
export const getPreviusPage = createAsyncThunk(
  'characters/getPreviusPage',
  async (action) => {
    return await getPreviusPageAxios(action)
  }
)

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: [],
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
        state.statusNext = 'loading'
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        state.statusNext = 'succeeded'
        state.value = action.payload.results
        state.nextPage = action.payload.info.next
        state.previusPage = action.payload.info.prev
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
      })
      .addCase(getPreviusPage.rejected, (state, action) => {
        state.statusPrev = 'error'
      })
  }
})

export const { getInitial } = charactersSlice.actions

export default charactersSlice.reducer
