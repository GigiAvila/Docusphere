import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Signin from '../components/SignIn/Signin';
import loginImg from '../assets/loginphoto3.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SingInPageContainer = styled.section`
  position: relative; 
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#d2a6c7, #fcc484);
`;

const LoginWrapper = styled.div`
  width: 70vw; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 70vw; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LoginImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 0 0 15px;
  background: linear-gradient(#fcc484, #d2a6c7);
  width: 20vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const flyAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
`;

const LoginImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  animation: ${flyAnimation} 2s ease-in-out infinite; 
`;

const LoginImage = styled.img`
  transform: scale(1.8);
  transform-origin: left;
  z-index: 1;
`;

const SignInFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 70vh;
`;

const SignInPage = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin';


  return (
    <>
      <Header isSignInPage={isSignInPage} />
      <SingInPageContainer>
        <LoginWrapper>
          <LoginImgContainer>
            <LoginImageContainer>
              <LoginImage src={loginImg} alt="loginImg" />
            </LoginImageContainer>
          </LoginImgContainer>
          <SignInFormContainer>
            <Signin />
          </SignInFormContainer>
        </LoginWrapper>
      </SingInPageContainer>
      <Footer />
    </>

  );
}

export default SignInPage;
