
import './Styles.css/App.css'
import styled from 'styled-components'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import ContactButton from './components/ContactButton'

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}`

function App() {



  return (
    <AppContainer >
      <Header />
      <Main />
      <ContactButton />
      <Footer />

    </AppContainer>
  )
}

export default App
