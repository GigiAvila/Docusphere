import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import UserAvatar from './UserAvatar';
import StyleColorMode from './StyleColorMode';

const HeaderContainer = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid #f2f2f2;
  backdrop-filter: blur(10px);
  z-index: 2;
`;

const Header = ({ isSignInPage }) => {
  return (
    <HeaderContainer>
      <Navbar isSignInPage={isSignInPage} />
      <UserAvatar />
      <StyleColorMode />
    </HeaderContainer>
  );
}

export default Header;
