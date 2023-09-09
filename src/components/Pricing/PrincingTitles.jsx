import React from 'react'
import styled from 'styled-components'

const PricingTitle = styled.h1`
  font-size: 2.3vw;
  width: 100%;
  height: 3vh;
  padding: 2vw 8vw;

  

  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: center;
    margin: 2vw 0;
  }
`;

const PricingSubtitle = styled.h2`
  font-size: 1.2vw;
  width: 100%;
  height: 4vh;
  padding: 2vw 8vw;

  @media (max-width: 768px) {
    font-size: 3vw;
    text-align: center;
    margin: 2vw 0;

  }
`;

const PrincingTitles = () => {
  return (
    <>
      <PricingTitle>Our Services Have Friendly Packages</PricingTitle>
      <PricingSubtitle>Choose plans that might be better for your company</PricingSubtitle>

    </>
  )
}

export default PrincingTitles
