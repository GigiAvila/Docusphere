import React from 'react'
import styled from 'styled-components'


const PricingTitleContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 2vw;
padding-left: 2vw;

@media (max-width: 768px) {
  margin-top: 0vw;
}
`
const PricingTitle = styled.h1`
  font-size: 2.3vw;


  @media (max-width: 768px) {
    font-size: 6vw;
    text-align: center;

  }
`;

const PricingSubtitle = styled.h2`
  font-size: 1.2vw;
  width: 100%;
  height: 4vh;


  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: center;


  }
`;

const PrincingTitles = () => {
  return (
    <PricingTitleContainer>
      <PricingTitle>Our Services Have Friendly Packages</PricingTitle>
      <PricingSubtitle>Choose plans that might be better for your company</PricingSubtitle>

    </PricingTitleContainer>
  )
}

export default PrincingTitles
