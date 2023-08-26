import React from 'react'
import styled from 'styled-components'
import Signin from '../components/Signin'
import loginImg from '../assets/loginphoto.png'

const LoginWrapper = styled.section`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
`;

const LoginImgContainer = styled.div`
  width: 35vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginImage = styled.img`
  width: 90%;
  height: auto;
`;
const SignInPage = () => {
  return (
    <>
      <LoginWrapper>
        <LoginImgContainer><LoginImage src={loginImg} alt="loginImg" /></LoginImgContainer>
        <Signin />
      </LoginWrapper>
    </>
  )
}

export default SignInPage


