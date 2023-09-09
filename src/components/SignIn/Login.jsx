import React, { useState } from 'react'
import styled from 'styled-components';
import GlobalStyles from '../../components/GlobalStyles';
import TitleLoginText from './TitleLoginText'
import { Input, Stack, InputGroup, InputRightElement, Button, Tooltip } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useAuth } from '../../hooks/useAuth';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import AlertLogin from './AlertLogin';

const LogInSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60vw;
 
  
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  
  @media (max-width: 768px) {
    width: 50vw;
    margin-top: 2vw;
  }
`;

const LoginSubmitButtonContainer = styled.div`
  display: flex;
  width: 26vw;
  margin-top: 2vw;

  @media (max-width: 768px) {
    width: 50vw;
    margin-top: 2vw;
  }
`;

const AlertContainer = styled.div`
width: 100%
height:80vh;
background-color:red;`


const LogIn = () => {

  const [userName, setUserName] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [invalidCredentials, setInvalidCredentials] = useState(false);


  const { isLoggedIn, login, showLogInForm } = useAuth();

  const navigate = useNavigate();

  const handleShowPasswordChange = () => setShowPassword(!showPassword);

  const testUser = {
    userName: 'TestUserName',
    loginEmail: 'test@example.com',
    loginPassword: 'TestPassword',
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userName === testUser.userName &&
      loginEmail === testUser.loginEmail &&
      loginPassword === testUser.loginPassword
    ) {
      login(testUser);
      navigate('/my-account');
    } else {
      setInvalidCredentials(true);
    }
  };

  return (
    <>
      <GlobalStyles />
      <LogInSection >
        <TitleLoginText isLoggedIn={isLoggedIn} />
        {showLogInForm && isLoggedIn === false &&
          <LoginForm onSubmit={handleSubmit}>
            <Stack  >
              <label> User Name
                <InputGroup>
                  <Input
                    width='100%'
                    variant='filled'
                    className='inputuser'
                    type='text'
                    placeholder='Introduce your username'
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </InputGroup>
              </label>
              <label> Email
                <InputGroup>
                  <Input
                    width='100%'
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
              <label> Password
                <InputGroup>
                  <Input
                    width='100%'

                    variant='filled'
                    className='inputPassword'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                    required
                    minLength={8}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <InputRightElement width='4.2rem' >
                    <Button
                      size='sm'
                      fontSize='xs'
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
                    <Button rightIcon={<ChevronRightIcon />} fontSize='xs' variant='solid' bgColor='#f4e603' type='submit' >Login</Button>
                  </Stack>
                </Tooltip>
              </LoginSubmitButtonContainer>
            </Stack>
          </LoginForm>
        }
        {invalidCredentials && (
          <AlertContainer>
            <AlertLogin />
          </AlertContainer>
        )}


      </LogInSection>
    </>
  )
}

export default LogIn
