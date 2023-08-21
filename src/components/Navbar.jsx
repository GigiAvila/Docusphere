import React from 'react'
import '../Styles.css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {



  return (
    <nav data-testid="navbar-component" className='navbarContainer'>
      <ul className='navbar'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav >
  )
}

export default Navbar






