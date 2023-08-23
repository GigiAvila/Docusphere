import React from 'react'
import styled from 'styled-components'

const TitleSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 32%;
  padding-top: 8vw;

  > h3 {
    font-size: 3rem;
    font-family: 'Cornerstone';
  }

  > h5 {
    font-size: 1.5rem;
    margin-bottom: 2vw;
    font-family: 'Cornerstone';
  }
`;

const TitleSignUpText = () => {
  return (
    <TitleSignUpContainer>
      <h3>Create your account</h3>
      <h5>Please fill your information below</h5>
    </TitleSignUpContainer>
  )
}

export default TitleSignUpText
