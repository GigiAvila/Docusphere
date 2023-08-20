import React from 'react'
import '../Styles.css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <ul className='navbar'>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Blog</a></li>
        <li><a>Pages</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar