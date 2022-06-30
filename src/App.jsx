import { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import NavHeader from './components/views/NavHeader'
import SpinnerPage from './components/common/SpinnerPage'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fontsource/roboto'

const Characters = lazy(() => import('./pages/Characters'))
const Episodes = lazy(() => import('./pages/Episodes'))
const Locations = lazy(() => import('./pages/Locations'))
const Episode = lazy(() => import('./components/views/Episode'))
const Location = lazy(() => import('./components/views/Location'))
const Character = lazy(() => import('./components/views/Character'))

function App () {
  return (
    <MainApp>
      <NavHeader />
      <MainPage>
        <Routes>
          <Route index
            element={
              <>
                <Helmet>
                  <title>Rick and Morty | Characters</title>
                  <meta name="description" content="Information for Rick and Morty,
                    this information was recolect for an public API, getting characters,
                    locations and episodes"
                  />
                </Helmet>
                <Suspense fallback={<SpinnerPage />}>
                  <Characters />
                </Suspense>
              </>
            }
          />
          <Route path='/characters/:characterId'
            element={
              <>
                <Helmet>
                  <title>Rick and Morty | Character</title>
                  <meta name="description" content="Details for a character,
                    with episodes and locations that character has been in"
                  />
                </Helmet>
                <Suspense fallback={<SpinnerPage />}>
                  <Character />
                </Suspense>
              </>
            }
          />
          <Route path="episodes">
            <Route index
              element={
                <>
                  <Helmet>
                    <title>Rick and Morty | Episodes</title>
                    <meta name="description" content="Information for episodes of Rick and Morty,
                      this information was recolect for an public API"
                    />
                  </Helmet>
                  <Suspense fallback={<SpinnerPage />}>
                    <Episodes />
                  </Suspense>
                </>
              }
            />
            <Route path=":episodeId"
              element={
                <>
                  <Helmet>
                    <title>Rick and Morty | Episode</title>
                    <meta name="description" content="Detail for episode of Rick and Morty,
                      with characters that episode has been in"
                    />
                  </Helmet>
                  <Suspense fallback={<SpinnerPage />}>
                    <Episode />
                  </Suspense>
                </>
              }
            />
          </Route>
          <Route path="locations">
            <Route index
              element={
                <>
                  <Helmet>
                    <title>Rick and Morty | Locations</title>
                    <meta name="description" content="Information for locations of Rick and Morty,
                      this information was recolect for an public API"
                    />
                  </Helmet>
                  <Suspense fallback={<SpinnerPage />}>
                    <Locations />
                  </Suspense>
                </>
              }
            />
            <Route path=":locationId"
              element={
                <>
                  <Helmet>
                    <title>Rick and Morty | Location</title>
                    <meta name="description" content="Detail for location of Rick and Morty,
                      with characters that episode has been in"
                    />
                  </Helmet>
                  <Suspense fallback={<SpinnerPage />}>
                    <Location />
                  </Suspense>
                </>
              }
            />
          </Route>
        </Routes>
      </MainPage>
    </MainApp>
  )
}

const MainApp = styled.div`
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
`
const MainPage = styled.main`
  margin: auto;
  margin-top: 2rem;
  max-width: 80vw;
`

export default App
