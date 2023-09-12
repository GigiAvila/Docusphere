import React, { useState, useEffect } from 'react';
import { testimonies } from '../../data/Testimonies';
import styled, { keyframes } from 'styled-components';

const StyledTestimoniesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3vw;
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

const TestimoniesSlider = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.2vw;
  overflow: hidden;
  padding: 1vw;

  @media (max-width: 768px) {
    height: 28vh;
  }
`;

const slideFromLeftAnimation = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-100%);
}
`;

const slideFromRightAnimation = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(100%);
}
`;

const TestimoniesSliderContent = styled.div`
  display: flex;
  animation: ${slideFromLeftAnimation} 20s linear infinite;
  animation-play-state: running;
  animation-iteration-count: infinite;
  animation-delay: -20s;
  will-change: transform;


  &:nth-child(2) {
    animation: ${slideFromRightAnimation} 20s linear infinite;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-delay: -20s;
    will-change: transform;
  }
`;

const TestimoniesItem = styled.div`
  min-width: 20vw;
  height: 28vh;
  margin: 0.5vw;
  padding: 1vw;
  opacity: 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 9px rgba(241, 241, 244, 0.72);

  @media (max-width: 768px) {
    width: 68vw;
    height: 50vh;
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getNextIndex = (index) => {
    return (index + 1) % testimonies.length;
  };


  const getPrevIndex = (index) => {
    return (index - 1 + testimonies.length) % testimonies.length;
  };


  return (
    <StyledTestimoniesWrapper>
      <TestimoniesTextWrapper>
        <TestimonialTitle>Testimonies</TestimonialTitle>
        <TestimonialSubtitle>What Clients Say</TestimonialSubtitle>
      </TestimoniesTextWrapper>
      <TestimoniesSlider>
        <TestimoniesSliderContent style={{ transform: `translateX(-${currentIndex * (100 / testimonies.length)}%)` }}>
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
        </TestimoniesSliderContent>
      </TestimoniesSlider>
    </StyledTestimoniesWrapper>
  );
};

export default Testimonies;
