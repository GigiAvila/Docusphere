import React from 'react'
import styled from 'styled-components';
import ContactFooter from '../Footer/ContactFooter';

const ContactAccount = () => {

  const ContactAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  width: 95%;
  height: 36vh;
  gap: 0.5vw;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  background-color: white;
 
  @media (max-width: 768px) {
   display: none;
  }

`;

  return (
    <ContactAccountContainer>
      <ContactFooter />
    </ContactAccountContainer>
  )
}

export default ContactAccount
