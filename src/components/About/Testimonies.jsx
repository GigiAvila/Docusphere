import React, { useState, useEffect, useRef } from 'react';
import { testimonies } from '../../data/Testimonies';
import styled, { keyframes } from 'styled-components';


const StyledTestimoniesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  overflow: hidden;

`;

const TestimoniesTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
  margin-top: 1vw;

  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const TestimonialTitle = styled.h3`
  font-size: 3vw;
  width: 100%;
  text-align: center;
  padding: 0.5vw 2vw;
  background: linear-gradient(to right, #c2a8e6, #0000ff);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const TestimonialSubtitle = styled.h5`
  font-size: 2.3vw;
  width: 100%;
  text-align: center;
  padding: 0.5vw 2vw;
  background: linear-gradient(to right, #c2a8e6, #0000ff);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;

const slideFromLeftAnimation = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-180%);
}
`;

const TestimoniesSlider = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1vw;
  padding: 1vw 0vw;
 


  @media (max-width: 768px) {
   gap: 2vw;
  
  }
`;




const TestimoniesItem = styled.div`
  min-width: 30vw;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 1vw;
  box-shadow: 0 4px 9px rgba(241, 241, 244, 0.72);
  animation: ${slideFromLeftAnimation} 60s linear infinite;
 


  

  @media (max-width: 768px) {
    min-width: 90vw;
    height: auto;
  
  
  }
`;

const TestimoniesContent = styled.div`
  font-family: "Nunito";

`;

const TestimonieTitle = styled.h4`
  color: #4a4545;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: -0.18px;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const TestimonieText = styled.p`
  color: #696d74;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 24px;
  margin: 10px 0 0 0;

  @media (max-width: 768px) {
    font-size: 2.3vw;
    line-height: 16px;
  }
`;

const TestimonieCompany = styled.p`
  font-size: 1rem;
  margin: 10px 0 0 0;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #696d74;

  @media (max-width: 768px) {
    font-size: 2vw;
    margin: 5px;
  }
`;

const TestimonieStarsContainer = styled.div``;

const TestimonieStar = styled.span`
  @media (max-width: 768px) {
    width: 1vw;
    height: auto;
  }
`;

const Testimonies = () => {

  return (
    <StyledTestimoniesWrapper>
      <TestimoniesTextWrapper>
        <TestimonialTitle>Testimonies</TestimonialTitle>
        <TestimonialSubtitle>What Clients Say</TestimonialSubtitle>
      </TestimoniesTextWrapper>
      <TestimoniesSlider

      >
        {testimonies.map((testimonial, index) => (
          <TestimoniesItem key={index}>
            <TestimoniesContent>
              <TestimonieTitle>{testimonial.name}</TestimonieTitle>
              <TestimonieText>{testimonial.text}</TestimonieText>
              <TestimonieStarsContainer>
                <TestimonieStar>⭐</TestimonieStar>
                <TestimonieStar>⭐</TestimonieStar>
                <TestimonieStar>⭐</TestimonieStar>
                <TestimonieStar>⭐</TestimonieStar>
                <TestimonieStar>⭐</TestimonieStar>
              </TestimonieStarsContainer>
              <TestimonieCompany>{testimonial.company}</TestimonieCompany>
            </TestimoniesContent>
          </TestimoniesItem>
        ))}
      </TestimoniesSlider>
    </StyledTestimoniesWrapper>
  );
};

export default Testimonies;