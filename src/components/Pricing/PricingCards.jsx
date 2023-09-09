import React from 'react'
import styled from 'styled-components'
import { FEATURES } from '../../data/PricingFeatures';
import { Link } from 'react-router-dom'


const PaymentOptionsWrapper = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column;
    width: 90vw;
  }
`;

const Tag = styled.h6`
  width: 4vw;
  height: 3vh;
  background-color: #65D3AC;
  border-radius: 15px;
  font-size: 0.8vw;
  position: absolute;
  left: 1.8vw;
  text-align: center;
  margin: 1vw 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 12vw;
    height: 3vh;
    font-size: 2vw;
  }
`;

const PaymentOption = styled.div`
  border-radius: 15px;
  border: 1.5px solid grey;
  height: 65vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1vw;
  align-items: center;
  position: relative;
  -webkit-animation: jello-vertical 0.9s both;
  animation: jello-vertical 0.9s both;

  @-webkit-keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  &:hover {
    background-color: #65D3AC;
    height: 68vh;
  }

  &:hover ${Tag} {
    background-color: #ffff00;

    &::after {
      content: "";
      background-color: inherit;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
  
  }
`;

const PaymentOptionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  position: relative;


  @media (max-width: 768px) {

    &:nth-child(2){
    padding: 7vw 2vw 2vw 3vw;
    }
  }
`;

const CustomBorder = styled.div`
  width: 80%;
  height: 1px;
  border-bottom: 1px solid grey;
`;

const PlanTitle = styled.h4`
  font-size: 1.7vw;
  padding: 1vw 0;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

const PlanPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5vw;
`;

const PlanPrice = styled.h2`
  font-size: 1.3vw;
  padding: 0.5vw 0;

  @media (max-width: 768px) {
    font-size: 3.8vw;
  }
`;

const PriceFrequency = styled.h5`
  font-size: 0.7vw;

  @media (max-width: 768px) {
    font-size: 3.5vw;
    padding-left: 1.5vw;
  }
`;

const PlanSubtitle = styled.h4`
  font-size: 0.6vw;
  padding: 0.5vw 0;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;



const Feature = styled.li`
  font-size: 0.8vw;
  padding: 0.1vw;
  text-decoration: ${props => (props.lineThrough ? 'line-through' : 'none')}; 
  color: ${props => (props.textColor ? '#f2f2f2' : 'black')};

  &::before {
    content: '${props => (props.icon ? '✕' : '✓')}'; 
    margin-right: 0.2vw; 
  }

  @media (max-width: 768px) {
    font-size: 2vw;
    display: ${props => (props.lineThrough ? 'none' : 'block')};
  }
`;

const FeaturesList = styled.ul`
  width: 100%;
  list-style: none;
  line-height: 2;
  text-align: center;
  margin: 0.5vw 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 10vw;
    text-align: start;
    padding-left: 2vw;

  }
`;

const BuyButton = styled.button`
  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 0.8vw;
  font-weight: 600;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 12vw;
  z-index: 1;
  position: absolute;
  bottom: 1.8vw;

  @media (max-width: 768px) {
    font-size: 1.9vw;
    width: 30vw;
    height: 3.5vh;
    margin-bottom: 3vw
  }
`;

const StyledText = styled.p`
  font-size: 0.7vw;
  position: absolute;
  bottom: 0;
  padding: 0.5vw;

  @media (max-width: 768px) {
    font-size: 2vw
  }
`;

const PricingSale = styled(Link)`
  color: #0000FF;
  font-size: 0.8vw;
  position: absolute;
  left: 1.8vw;
  text-align: center;
  margin: 1vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2vw;
  
  }
}`

const PricingCards = () => {
  return (
    <>
      <PaymentOptionsWrapper>
        <PaymentOption>
          <PricingSale to="/">Limited time only</PricingSale>
          <PaymentOptionTitle>
            <PlanTitle>Free</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice>0.00 €</PlanPrice>
              <PriceFrequency>/monthly</PriceFrequency>
            </PlanPriceContainer>
          </PaymentOptionTitle>
          <CustomBorder />
          <PlanSubtitle>All the basics for new businesses</PlanSubtitle>
          <FeaturesList>
            {FEATURES.map((feature, index) => (
              <Feature key={index} lineThrough={!feature.free} textColor={!feature.free} icon={!feature.free}>
                {feature.name}
              </Feature>
            ))}
          </FeaturesList>
          <BuyButton>Start free 14-day trial</BuyButton>
          <StyledText>No credit card required</StyledText>
        </PaymentOption>
        <PaymentOption>
          <Tag>Popular</Tag>
          <PaymentOptionTitle>
            <PlanTitle>Basic</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice>4.99 €</PlanPrice>
              <PriceFrequency>/monthly</PriceFrequency>
            </PlanPriceContainer>
          </PaymentOptionTitle>
          <CustomBorder />
          <PlanSubtitle>Perfect for growing businesses</PlanSubtitle>
          <FeaturesList>
            {FEATURES.map((feature, index) => (
              <Feature key={index} lineThrough={!feature.basic} textColor={!feature.basic} icon={!feature.basic}>
                {feature.name}
              </Feature>
            ))}
          </FeaturesList>
          <BuyButton>Start free 14-day trial</BuyButton>
          <StyledText>No credit card required</StyledText>
        </PaymentOption>
        <PaymentOption>
          <PaymentOptionTitle>
            <PlanTitle>Unlimited</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice>9.99 €</PlanPrice>
              <PriceFrequency>/monthly</PriceFrequency>
            </PlanPriceContainer>
          </PaymentOptionTitle>
          <CustomBorder />
          <PlanSubtitle>Advanced features for those who want even more</PlanSubtitle>
          <FeaturesList>
            {FEATURES.map((feature, index) => (
              <Feature key={index} lineThrough={!feature.premium} textColor={!feature.premium} icon={!feature.premium}>
                {feature.name}
              </Feature>
            ))}
          </FeaturesList>
          <BuyButton>Start free 14-day trial</BuyButton>
          <StyledText>No credit card required</StyledText>
        </PaymentOption>
      </PaymentOptionsWrapper>

    </>
  )
}

export default PricingCards
