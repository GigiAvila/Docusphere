import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import UserAvatar from './UserAvatar';
import StyleColorMode from './StyleColorMode';

const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <UserAvatar />
      <StyleColorMode />
    </HeaderContainer>
  );
}

export default Header;
