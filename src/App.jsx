import styled from 'styled-components'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fontsource/roboto'

function App () {
  return (
    <MainApp>
      <h1>App</h1>
    </MainApp>
  )
}

const MainApp = styled.div`
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
`

export default App
