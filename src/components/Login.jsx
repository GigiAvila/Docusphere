import React, { useState } from 'react'
import styled from 'styled-components';
import TitleLoginText from './TitleLoginText'
import { Input, Stack, InputGroup, InputRightElement, Button, Tooltip } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useAuth } from '../hooks/useAuth';
import { useLocalStorage } from '../hooks/useLocalStorage';

const LogInSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

const LoginSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 26vw;
  margin-top: 2vw;
  margin-right: 3vw;
`;


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
    <LogInSection >
      <TitleLoginText isLoggedIn={isLoggedIn} />
      {showLogInForm && isLoggedIn === false &&
        <LoginForm onSubmit={handleSubmit}>
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
            <LoginSubmitButtonContainer>
              <Tooltip hasArrow label='Login' bg='yellow.600'>
                <Stack direction='row' spacing={4}>
                  <Button rightIcon={<ChevronRightIcon />} variant='solid' colorScheme='telegram' type='submit' >Login</Button>
                </Stack>
              </Tooltip>
            </LoginSubmitButtonContainer>
          </Stack>
        </LoginForm>
      }


    </LogInSection>
  )
}

export default LogIn
