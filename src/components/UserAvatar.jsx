import React from 'react'
import userAvatar from '../assets/user.png'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components'

const UserButton = styled(MenuButton)`
  width: 3vw;
  height: auto;
  margin: 2vw;
`;

const AvatarImgWrapper = styled.div`
  border-radius: 50%;
  
  &:hover {
    width: 3.3vw;
  }
`;


const UserAvatar = () => {
  const { logout, isLoggedIn } = useAuth();

  return (
    <Menu>
      {isLoggedIn === true && (
        <UserButton>
          <AvatarImgWrapper>
            <img src={userAvatar} alt="userphoto" />
          </AvatarImgWrapper>
        </UserButton>
      )}
      <MenuList>
        <MenuItem>
          <Link to="/my-account">My account</Link>
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserAvatar;
