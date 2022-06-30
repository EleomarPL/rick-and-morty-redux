import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getEpisodeByIdAxios, searchEpisodeByNameAxios } from '../services/apis/episodes'
import { getNextPageAxios, getPreviusPageAxios } from '../services/apis/general'

export const searchByName = createAsyncThunk(
  'episodes/searchByName',
  async (action) => {
    return await searchEpisodeByNameAxios(action)
  }
)
export const getNextPage = createAsyncThunk(
  'episodes/getNextOage',
  async (action) => {
    return await getNextPageAxios(action)
  }
)
export const getPreviusPage = createAsyncThunk(
  'episodes/getPreviusPage',
  async (action) => {
    return await getPreviusPageAxios(action)
  }
)
export const getEpisodeById = createAsyncThunk(
  'episodes/getEpisodeById',
  async (action) => {
    return await getEpisodeByIdAxios(action)
  }
)

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    value: [],
    episode: {},
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
      .addCase(getEpisodeById.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getEpisodeById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.episode = action.payload
      })
      .addCase(getEpisodeById.rejected, (state, action) => {
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
        state.episode = {}
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
        state.episode = {}
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
        state.episode = {}
      })
      .addCase(getPreviusPage.rejected, (state, action) => {
        state.statusPrev = 'error'
      })
  }
})

export const { getInitial } = episodesSlice.actions

export default episodesSlice.reducer
