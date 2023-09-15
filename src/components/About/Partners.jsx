import React from 'react'
import styled from 'styled-components'
import { PARTNERS } from '../../data/Partners'
const Partners = () => {

  const PartnerSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  `

  const PartnersTitle = styled.h3`
  font-size: 3vw;
  width: 100%;
  text-align: center;
  padding: 2vw;
  background: linear-gradient(to right, #c2a8e6, #0000ff);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width:768px) {
    font-size: 6vw;
  }
  `


  const CarrouselContainer = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  background-color: white;

  `



  const PartnerLogoContainer = styled.div`
  width: 10vw;
  height: auto;
  

  @media (max-width: 768px){
    width: 25vw;
  }
`

  const PartnerLogo = styled.img`
  width: 100%;
  height: auto;
  `

  return (
    <PartnerSection>
      <PartnersTitle>Some of our partners</PartnersTitle>
      <CarrouselContainer>
        {PARTNERS.map((partner, index) => (
          <PartnerLogoContainer key={index}>
            <PartnerLogo src={partner.logo} alt="companyLogo" />
          </PartnerLogoContainer>
        ))}

      </CarrouselContainer>

    </PartnerSection>
  )
}

export default Partners
