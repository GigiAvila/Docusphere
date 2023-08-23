import React from 'react'
import styled from 'styled-components'
import Signin from '../components/Signin'
import BackgroundImg from '../assets/loginphoto.png'
import Header from '../components/Header'

const MainWrapper = styled.section`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
`;

const BackgroundContainer = styled.div`
  width: 35vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.img`
  width: 90%;
  height: auto;
`;
const SignInPage = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <BackgroundContainer><BackgroundImage src={BackgroundImg} alt="backgroundImg" /></BackgroundContainer>
        <Signin />
      </MainWrapper>
    </>
  )
}

export default SignInPage


