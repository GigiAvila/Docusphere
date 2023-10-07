import React, { useState, useEffect } from 'react'
import TitleSignUpText from './TitleSignUpText'
import SignInModal from './SignInModal'

import {
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Tooltip,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import styled from 'styled-components'

const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
`

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;

  @media (max-width: 768px) {
    width: 50vw;
    margin-top: 2vw;
  }
`

const SignupLabel = styled.label`
  color: black;
`

const InputWithCustomPlaceholderColor = styled(Input)`
  &::placeholder {
    color: grey;
  }
`

const SignUpSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.3vw;
  font-size: 1vw;
`

const SignUp = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
    console.log('handleSubmit')
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleShowPasswordChange = () => setShowPassword(!showPassword)

  return (
    <>
      <SignUpSection>
        <TitleSignUpText />
        <SignUpForm onSubmit={handleSubmit}>
          <Stack>
            <SignupLabel className='nameContainer'>
              {' '}
              Name
              <InputGroup>
                <InputWithCustomPlaceholderColor
                  size='sm'
                  variant='filled'
                  bg='gray.100'
                  className='inputName'
                  type='text'
                  placeholder='Name'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </SignupLabel>
            <SignupLabel className='surnameContainer'>
              {' '}
              Surname
              <InputGroup>
                <InputWithCustomPlaceholderColor
                  size='sm'
                  bg='gray.100'
                  variant='filled'
                  className='inputSurname'
                  type='text'
                  placeholder='Surname'
                  required
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </InputGroup>
            </SignupLabel>
            <SignupLabel className='emailContainer'>
              {' '}
              Email
              <InputGroup>
                <InputWithCustomPlaceholderColor
                  size='sm'
                  bg='gray.100'
                  variant='filled'
                  className='inputemail'
                  type='email'
                  placeholder='Email'
                  required
                  value={signUpEmail}
                  onChange={(e) => {
                    setSignUpEmail(e.target.value)
                  }}
                />
              </InputGroup>
            </SignupLabel>
            <SignupLabel className='passwordContainer'>
              {' '}
              Password
              <InputGroup>
                <InputWithCustomPlaceholderColor
                  size='sm'
                  bg='gray.100'
                  variant='filled'
                  className='inputpassword'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  required
                  minLength={8}
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
                <InputRightElement width='4.2rem' height='2rem'>
                  <Button
                    size='sm'
                    bg='gray.100'
                    color='grey.700'
                    fontSize='xs'
                    onClick={handleShowPasswordChange}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </SignupLabel>
            <SignUpSubmitButtonContainer>
              <Tooltip hasArrow label='Sign up' bg='yellow.600'>
                <Stack direction='row' spacing={4}>
                  <Button
                    variant='solid'
                    fontSize='xs'
                    bgColor='#f4e603'
                    color='black'
                    type='submit'
                  >
                    Create your account
                  </Button>
                </Stack>
              </Tooltip>
            </SignUpSubmitButtonContainer>
          </Stack>
        </SignUpForm>

        {showModal && (
          <SignInModal isOpen={showModal} onClose={handleCloseModal} />
        )}
      </SignUpSection>
    </>
  )
}

export default SignUp
