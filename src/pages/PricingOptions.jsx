import React from 'react';
import styled from 'styled-components';
import PrincingTitles from '../components/Pricing/PrincingTitles';
import PricingCards from '../components/Pricing/PricingCards';
import PricingGetInContact from '../components/Pricing/PricingGetInContact';
import Header from '../components/Header';
import Footer from '../components/Footer';



const PricingSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color:rgb(194, 168, 230, 0.2);
  padding: 8vw 0 ;

  @media (max-width: 768px) {
    padding: 20vw 0 ;
  

  }
`;


const PricingCardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
   
  }
`;


const PricingOptions = () => {
  return (
    <>
      <Header />
      <PricingSection>
        <PricingCardSection>
          <PrincingTitles />
          <PricingCards />
        </PricingCardSection>
        <PricingGetInContact />
      </PricingSection>
      <Footer />
    </>



  );
};

export default PricingOptions;
