import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import NavHeader from './components/views/NavHeader'

import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import Locations from './pages/Locations'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fontsource/roboto'

function App () {
  return (
    <MainApp>
      <NavHeader />
      <MainPage>
        <Routes>
          <Route index
            element={
              <Characters />
            }
          />
          <Route path="episodes"
            element={
              <Episodes />
            }
          />
          <Route path="locations"
            element={
              <Locations />
            }
          />
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
  max-width: 80vw;
`

export default App
