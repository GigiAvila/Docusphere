
import './Styles.css/App.css'
import styled from 'styled-components'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}`

function App() {


  return (
    <AppContainer >
      <Main />
    </AppContainer>
  )
}

export default App
