import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getCharacterByIdAxios, searchCharacterByNameAxios } from '../services/apis/character'
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
export const getCharacterById = createAsyncThunk(
  'characters/getCharacterById',
  async (action) => {
    return await getCharacterByIdAxios(action)
  }
)

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: [],
    character: {},
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
      .addCase(getCharacterById.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getCharacterById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.character = action.payload
      })
      .addCase(getCharacterById.rejected, (state, action) => {
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
        state.character = {}
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
        state.character = {}
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
        state.character = {}
      })
      .addCase(getPreviusPage.rejected, (state, action) => {
        state.statusPrev = 'error'
      })
  }
})

export const { getInitial } = charactersSlice.actions

export default charactersSlice.reducer
