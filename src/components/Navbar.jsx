import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;

  @media (max-width:768px){
    width: 100%;
  
  }
`;

const NavbarTitle = styled.h1`
font-family: "Nunito";
  font-size: 1.3rem;
  border: 4px solid ;
  padding: 5px 5px;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 1.2vw;
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

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
    font-size: 3.8vw;

    &:hover {
      font-size: 4vw;
    }
  }
`;



const Navbar = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const isAppPage = location.pathname === '/';


  const scrollToElement = (ref) => {
    console.log('scrollToElement ejecutandose')
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <NavbarContainer data-testid="navbar-component">
      <NavbarTitle>
        <Link to="/#home">DOCUSPHERE</Link>
      </NavbarTitle>
      <NavbarList>
        <NavbarListItem>
          {!isAppPage ? (
            <Link to="/#home" >Home</Link>
          ) : (
            <a href="#home" >Home</a>
          )}
        </NavbarListItem>
        <NavbarListItem>
          {!isAppPage ? (
            <Link to="/#about" onClick={() => scrollToElement(aboutRef)}>About</Link>
          ) : (
            <a href="#about" >About</a>
          )}
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/pricingOptions">Pricing</Link>
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