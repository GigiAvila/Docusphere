import React, { useState } from 'react'
import TitleLoginText from './TitleLoginText'
import '../Styles.css/Login.css'
import { Input, Stack, InputGroup, InputRightElement, Button, Tooltip } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useAuth } from '../hooks/useAuth';
import { useLocalStorage } from '../hooks/useLocalStorage';




const LogIn = () => {

  const [userName, setuserName] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showPassword, setShowPassword] = React.useState(false)


  const { isLoggedIn, login, showLogInForm } = useAuth();
  const { user, setLocalStorageUser } = useLocalStorage('user', null);


  const handleShowPasswordChange = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { userName, loginEmail };
    console.log(userData);
    // setLocalStorageUser(userData); // Check this line
    login(userData);
  };



  return (
    <section className='LogIn'>
      <TitleLoginText isLoggedIn={isLoggedIn} />
      {showLogInForm && isLoggedIn === false &&
        <form className='LoginForm' onSubmit={handleSubmit}>
          <Stack  >
            <label className='userNameContainer'> User Name
              <InputGroup>
                <Input
                  width='100%'
                  size='lg'
                  variant='filled'
                  className='inputuser'
                  type='text'
                  placeholder='Introduce your username'
                  required
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                />
              </InputGroup>
            </label>
            <label className='emailContainer'> Email
              <InputGroup>
                <Input
                  width='100%'
                  size='lg'
                  variant='filled'
                  className='inputemail'
                  type='email'
                  placeholder='Introduce your email'
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </InputGroup>
            </label>
            <label className='passwordContainer'> Password
              <InputGroup>
                <Input
                  width='100%'
                  size='lg'
                  variant='filled'
                  className='inputPassword'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  required
                  minLength={8}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <InputRightElement width='4.2rem' height='3rem'>
                  <Button
                    size='lg'
                    onClick={handleShowPasswordChange}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </label>
            <div className='loginSubmitButtonContainer'>
              <Tooltip hasArrow label='Login' bg='yellow.600'>
                <Stack direction='row' spacing={4}>
                  <Button rightIcon={<ChevronRightIcon />} variant='solid' colorScheme='telegram' type='submit' onClick={handleSubmit}>Login</Button>
                </Stack>
              </Tooltip>
            </div>
          </Stack>
        </form>
      }


    </section>
  )
}

export default LogIn
