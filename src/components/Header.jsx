import React from 'react'
import StyleColorMode from './StyleColorMode'
import Navbar from './Navbar'

import '../Styles.css/Header.css'
import UserAvatar from './UserAvatar'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <UserAvatar />
      <StyleColorMode />

    </header>
  )
}

export default Header
