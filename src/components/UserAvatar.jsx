import React from 'react'
import userAvatar from '../assets/user.png'
import '../Styles.css/userAvatar.css'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth';

const UserAvatar = () => {

  const { logout, isLoggedIn } = useAuth();



  return (

    <Menu>
      {isLoggedIn === true &&
        <MenuButton className='userButton' >
          <div className='avatarImgWrapper'>
            <img src={userAvatar} alt="userphoto" />
          </div>
        </MenuButton>}
      <MenuList>
        <MenuItem ><Link to="/my-account">My account</Link></MenuItem>
        <MenuItem onClick={logout}><Link to="/">Logout</Link></MenuItem>
      </MenuList>

    </Menu>


  )
}

export default UserAvatar