import React, { useState } from 'react'
import TitleLoginText from './TitleLoginText'
import '../Styles.css/Login.css'
import { Input, Stack, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

import Welcome from './Welcome';
import LoginButton from './LoginButton';
import LogouButton from './LogoutButton';

const LogIn = ({ isLoggedIn, handleLogin, handleLogout, showLogInForm, showWelcomeMessage }) => {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showPassword, setShowPassword] = React.useState(false)


  const handleShowPasswordChange = () => setShowPassword(!showPassword)

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };


  return (
    <section className='LogIn'>
      <TitleLoginText isLoggedIn={isLoggedIn} />
      {showLogInForm && isLoggedIn === false &&
        <form className='LoginForm' onSubmit={handleSubmit}>
          <Stack  >
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
          </Stack>
        </form>
      }
      {showWelcomeMessage && !showLogInForm && <Welcome isLoggedIn={isLoggedIn} />}
      {
        isLoggedIn === false ? (
          <LoginButton handleLogin={handleLogin} />
        ) : (
          <LogouButton handleLogout={handleLogout} />
        )
      }


    </section>
  )
}

export default LogIn
