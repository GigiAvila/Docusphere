import React from 'react'
import styled from 'styled-components'
import { SIGNUP_TEXT, SIGNUP_TITLE } from '../data/TitleTexts';


const TitleSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 32%;
  padding-top: 1vw;

  > h3 {
    font-size: 3rem;
    font-family: "Nunito";
  }

  > h5 {
    font-size: 1.5rem;
    margin-bottom: 2vw;
    font-family: "Nunito";
  }
`;

const TitleSignUpText = () => {
  return (
    <TitleSignUpContainer>
      <h3>{SIGNUP_TITLE}</h3>
      <h5>{SIGNUP_TEXT}</h5>
    </TitleSignUpContainer>
  )
}

export default TitleSignUpText
