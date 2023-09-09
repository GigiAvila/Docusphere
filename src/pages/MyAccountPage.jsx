import React from 'react'
import MyAccountData from '../components/MyAccount/MyAccountData'
import OtherInfo from '../components/MyAccount/OtherInfo'
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyAccountContainer = styled.section`
  background-color: rgba(194, 168, 230, 0.2);
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1vw;
  padding-top: 10vw;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 23vw 3vw 3vw 3vw;
    gap: 1vw;
    height: 75vh;
  }
  
`;


const MyAccountPage = () => {
  return (
    <>
      <Header />
      <MyAccountContainer>
        <MyAccountData />
        <OtherInfo />
      </MyAccountContainer>
      <Footer />
    </>

  )
}

export default MyAccountPage
