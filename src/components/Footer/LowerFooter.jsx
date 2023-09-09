import React from 'react'
import TermsConditionsAndPolicy from './TermsConditionsAndPolicy'
import Languaje from './Languaje'
import styled from 'styled-components'

const LowerFooterContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly
margin-top: 2vw;
width: 100%;
padding: 0.5vw;
height: auto;
`



const LowerFooter = () => {
  return (
    <LowerFooterContainer>
      <TermsConditionsAndPolicy />
      <Languaje />
    </LowerFooterContainer>
  )
}

export default LowerFooter
