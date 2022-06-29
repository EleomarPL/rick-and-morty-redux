import { configureStore } from '@reduxjs/toolkit'

import charactersReducer from './features/charactersSlice'
import episodesReducer from './features/episodesSlice'
import locationsReducer from './features/locationsSlice'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
  }
})
