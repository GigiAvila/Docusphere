import React, { useRef } from 'react';
import AboutText from '../components/About/AboutText';
import Testimonies from '../components/About/Testimonies';
import styled from 'styled-components';
import Partners from '../components/About/Partners';
import Timeline from '../components/About/TimeLine';

const AboutPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    margin-bottom: 0vh;
    gap: 1vh;

  
  }
`;

const AboutScrollButton = styled.button`
  position: fixed;
  margin-left: 50vw;
  margin-top: 82vh;
`;

const AboutScrollSpan = styled.span`
 position: absolute;
  top: 0;
  left: 50%;
  width: 2vw;
  height: auto;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}


@media (max-width: 768px) {
  display: none;
}

@keyframes sdb05 {
  0% {
    transform:  translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform:  translateY(-20px, 20px);
    opacity: 0;
  }
}
`;



const About = () => {
  const testimoniesRef = useRef(null);


  const handleScrollButtonClick = () => {
    if (testimoniesRef.current) {
      testimoniesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <AboutPage id="about">
      <AboutScrollButton onClick={handleScrollButtonClick}>

      </AboutScrollButton>
      <AboutText />
      <Partners />
      <div ref={testimoniesRef}>
        <Timeline />
        <Testimonies />
      </div>
    </AboutPage>
  );
};

export default About;
