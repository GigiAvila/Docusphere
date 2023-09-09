import React from 'react'
import MyAccountPlanInfo from './MyAccountPlanInfo';
import MyRate from './ContactAccount';
import styled from 'styled-components';
import ContactAccount from './ContactAccount';

const OtherInfoContainer = styled.section`
width: 25vw;
height:75vh;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 15px;
gap: 1vw;

@media (max-width: 768px) {
  width: 55vw;
  height: auto;
`


const OtherInfo = () => {
  return (
    <OtherInfoContainer>
      <MyAccountPlanInfo />
      <ContactAccount />
    </OtherInfoContainer>
  )
}

export default OtherInfo
