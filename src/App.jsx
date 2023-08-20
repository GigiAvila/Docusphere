
import './Styles.css/App.css'

import Main from './components.jsx/Main'
import Footer from './components.jsx/Footer'
import Header from './components.jsx/Header'
import BackgroundImg from './assets/loginphoto.png'

function App() {


  return (
    <div className='appContainer'>
      <Header />
      <main className='mainWrapper'>
        <div className='BackgroundContainer'><img src={BackgroundImg} alt="backgroundImg" /></div>
        <Main />
      </main>
      <Footer />


    </div>
  )
}

export default App
