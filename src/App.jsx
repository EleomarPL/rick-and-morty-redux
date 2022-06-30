import { lazy, Suspense } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

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
              <Suspense fallback={<SpinnerPage />}>
                <Characters />
              </Suspense>
            }
          />
          <Route path='/characters/:characterId'
            element={
              <Suspense fallback={<SpinnerPage />}>
                <Character />
              </Suspense>
            }
          />
          <Route path="episodes">
            <Route index
              element={
                <Suspense fallback={<SpinnerPage />}>
                  <Episodes />
                </Suspense>
              }
            />
            <Route path=":episodeId"
              element={
                <Suspense fallback={<SpinnerPage />}>
                  <Episode />
                </Suspense>
              }
            />
          </Route>
          <Route path="locations">
            <Route index
              element={
                <Suspense fallback={<SpinnerPage />}>
                  <Locations />
                </Suspense>
              }
            />
            <Route path=":locationId"
              element={
                <Suspense fallback={<SpinnerPage />}>
                  <Location />
                </Suspense>
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
