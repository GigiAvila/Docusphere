import React from 'react'
import styled from 'styled-components'


const ConditionsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
width: 50%;
padding-left: 2vw;

`

const TermsConditionsAndPolicyContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-bottom: 1vw;
`

const TermsConditionsAndPolicyText = styled.p`
font-weight: bold;
font-size: 0.8vw;

@media (max-width: 768px) {
  font-size: 1.8vw;

}`

const CopyrightText = styled.p`
font-weight: 400;
font-size: 0.8vw;

@media (max-width: 768px) {
  font-size: 1.8vw;

}`


const TermsConditionsAndPolicy = () => {
  return (
    <ConditionsContainer>
      <TermsConditionsAndPolicyContainer>
        <TermsConditionsAndPolicyText><a href="#">Terms & Conditions | </a></TermsConditionsAndPolicyText>
        <TermsConditionsAndPolicyText><a href="#">Privacy Policy | </a></TermsConditionsAndPolicyText>
        <TermsConditionsAndPolicyText><a href="#">Security |</a></TermsConditionsAndPolicyText>
      </TermsConditionsAndPolicyContainer>
      <CopyrightText> Copyright  © 2023 DOCUSPHERE | All Rights Reserved |
      </CopyrightText>
    </ConditionsContainer>

  )
}

export default TermsConditionsAndPolicy
