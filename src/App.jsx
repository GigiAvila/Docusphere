
import './Styles.css/App.css'

import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
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
