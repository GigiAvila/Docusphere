import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import menuIcon from '../assets/menu.png'
import closeIcon from '../assets/close.png'

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;

  @media (max-width:768px) {
    align-items: flex-start;
  }
`;

const NavbarTitle = styled.h1`
  font-family: "Nunito";
  font-size: 1.3rem;
  border: 4px solid;
  padding: 0.5vw 1vw;

  @media (max-width: 768px) {
    font-size: 4vw;
  }


  a {
    text-decoration: none;
  }


`;

const MenuIcon = styled.img`
display: none;

@media (max-width: 768px) {
width: 6vw;
height: auto;
display: inline-flex;
}
`

const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media (max-width:768px) {
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')}; 
    flex-direction: column; 
    position: absolute;
    top: 100%; 
    left: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 100%;
    background-color:white;
    height: 100vh;


  }
`;

const NavbarListItem = styled.li`
  list-style: none;
  font-weight: 300;
  position: relative;
  font-family: "Nunito";
  transition: font-size 0.2s;
  border: 0.2vw solid transparent;

  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 1;
  }

  &:hover {
    font-size: 1vw;
    a {
      background: linear-gradient(#fcc484, #e35a34);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #f4e603;
    opacity: 0;
    transition: opacity 0.2s;
    border-radius: 2.5px;
  }

  @media (max-width: 768px) {
    font-size: 3.6vw;
    border-bottom: 1px solid #f2f2f2;
    width: 90vw;
    padding: 0.5vw;



    &:hover {
      font-size: 4vw;
    }
  }
`;

const Navbar = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const isAppPage = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToElement = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer data-testid="navbar-component">
      <NavbarTitle>
        <Link to="/#home">DOCUSPHERE</Link>
      </NavbarTitle>
      {menuOpen ? (
        <MenuIcon
          src={closeIcon}
          alt="CloseIcon"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <MenuIcon
          src={menuIcon}
          alt="MenuIcon"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        />
      )}
      <NavbarList menuOpen={menuOpen}>
        <NavbarListItem>
          {!isAppPage ? (
            <Link to="/#home">Home</Link>
          ) : (
            <a href="#home">Home</a>
          )}
        </NavbarListItem>
        <NavbarListItem>
          {!isAppPage ? (
            <Link to="/#about" onClick={() => scrollToElement(aboutRef)}>
              About
            </Link>
          ) : (
            <a href="#about">About</a>
          )}
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/pricingOptions">Pricing</Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/contactUs">Contact</Link>
        </NavbarListItem>
        {!isLoggedIn ? (
          <NavbarListItem>
            <Link to="/signin">Sign In</Link>
          </NavbarListItem>
        ) : null}
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
