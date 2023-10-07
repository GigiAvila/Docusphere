import React from 'react'
import styled from 'styled-components'
import { SIGNUP_TEXT, SIGNUP_TITLE } from '../../data/TitleTexts'

const TitleSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 33%;
  padding-top: 1vw;

  @media (max-width: 768px) {
    padding-left: 10%;
  }

  > h3 {
    font-size: 2.8rem;
    font-family: 'Nunito';
    color: black;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }

  > h5 {
    font-size: 1.3rem;
    margin-bottom: 1.8vw;
    font-family: 'Nunito';
    color: black;

    @media (max-width: 768px) {
      padding-top: 1vw;
      font-size: 4vw;
    }
  }
`

const TitleSignUpText = () => {
  return (
    <TitleSignUpContainer>
      <h3>{SIGNUP_TITLE}</h3>
      <h5>{SIGNUP_TEXT}</h5>
    </TitleSignUpContainer>
  )
}

export default TitleSignUpText
