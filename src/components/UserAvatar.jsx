import React from 'react'
import userAvatar from '../assets/user.gif'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


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

@media (max-width:768px){
  width: 7vw;

}
`;


const UserAvatar = () => {
  const { logout, isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div data-testid="user-avatar-component">
      <Menu data-testid="user-avatar-menu">
        {isLoggedIn === true && (
          <UserButton data-testid="user-avatar-button">
            <AvatarImgWrapper >
              <img src={userAvatar} alt="userphoto" />
            </AvatarImgWrapper>
          </UserButton>
        )}
        <MenuList>
          <MenuItem>
            <Link to="/my-account">My account</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div >
  );
}

export default UserAvatar;
