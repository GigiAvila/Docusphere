import React from 'react'
import StyleColorMode from './StyleColorMode'
import '../Styles.css/Header.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <StyleColorMode />
    </header>
  )
}

export default Header
