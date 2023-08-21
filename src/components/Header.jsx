import React from 'react'
import StyleColorMode from './StyleColorMode'
import Navbar from './Navbar'

import '../Styles.css/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <StyleColorMode />
    </header>
  )
}

export default Header
