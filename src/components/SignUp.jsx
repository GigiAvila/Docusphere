import React, { useState, useEffect } from 'react'
import TitleSignUpText from './TitleSignUpText'
import SignInModal from './SignInModal'
import SignUpOptions from './SignUpOptions'
import { Input, Stack, InputGroup, InputRightElement, Tooltip, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
`;

const SignUpSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vw;
`;

const SignUp = () => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    console.log('handleSubmit')

  };



  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowPasswordChange = () => setShowPassword(!showPassword)


  return (
    <SignUpSection>
      <TitleSignUpText />
      <SignUpForm onSubmit={handleSubmit}>
        <Stack  >
          <label className='nameContainer'> Name
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputName'
                type="text"
                placeholder='Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </InputGroup>
          </label>
          <label className='surnameContainer'> Surname
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputSurname'
                type="text"
                placeholder='Surname'
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)} />
            </InputGroup>
          </label>
          <label className='emailContainer'> Email
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputemail'
                type='email'
                placeholder='Email'
                required
                value={signUpEmail}
                onChange={(e) => { setSignUpEmail(e.target.value) }} />
            </InputGroup>
          </label>
          <label className='passwordContainer'> Password
            <InputGroup>
              <Input
                size='lg'
                variant='filled'
                className='inputpassword'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                required
                minLength={8}
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)} />
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
          <SignUpSubmitButtonContainer>
            <Tooltip hasArrow label='Sign up' bg='yellow.600'>
              <Stack direction='row' spacing={4}>
                <Button className='signUpSubmitButton' variant='solid' bgColor='#f4e603' type='submit'>Create your account</Button>
              </Stack>
            </Tooltip>
          </SignUpSubmitButtonContainer>
        </Stack>
      </SignUpForm>
      <SignUpOptions />
      {showModal && <SignInModal isOpen={showModal} onClose={handleCloseModal} />}

    </SignUpSection >
  )
}

export default SignUp
