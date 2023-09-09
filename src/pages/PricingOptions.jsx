import React from 'react';
import styled from 'styled-components';
import PrincingTitles from '../components/Pricing/PrincingTitles';
import PricingCards from '../components/Pricing/PricingCards';
import PricingGetInContact from '../components/Pricing/PricingGetInContact';
import Header from '../components/Header';
import Footer from '../components/Footer';


const PricingSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color:rgb(194, 168, 230, 0.2);

  @media (max-width: 768px) {
    padding-top: 2vw;
    overflow: hidden;
    overflow-y: auto;

  }
`;


const PricingCardSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 2vw;
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
