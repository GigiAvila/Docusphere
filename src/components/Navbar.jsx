import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;
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
  font-size: 1vw;
  position: relative;
  font-family: "Nunito";
  transition: font-size 0.2s;

  a {
    text-decoration: none;

  }

  &:hover {
    font-size: 1.2vw;
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
  const { isLoggedIn } = useAuth();


  return (
    <NavbarContainer data-testid="navbar-component">
      <NavbarTitle>
        <Link to="/home">DOCUSPHERE</Link>
      </NavbarTitle>
      <NavbarList>
        <NavbarListItem>
          <Link to="/home">Home</Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/about">About</Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/blog">Blog</Link>
        </NavbarListItem>
        <NavbarListItem>
          <Link to="/contact">Contact</Link>
        </NavbarListItem>
        {!isLoggedIn && (
          <NavbarListItem>
            <Link to="/signin">Sign In</Link>
          </NavbarListItem>
        )}
      </NavbarList>
    </NavbarContainer>
  );
}

export default Navbar;

