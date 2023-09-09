import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import coverImg from '../assets/Cover5.png';

import { COMPANY_NAME, COMPANY_SLOGAN, COMPANY_TEXT } from '../data/TitleTexts';
import { colorsPalette } from '../data/ColorsPalette'
import { Link } from 'react-router-dom';




const HomeContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.backgroundcolor};
  transition: background-color 0.5s ease-in-out;


`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Ajusta la altura del balanceo según tu preferencia */
  }
`;

const HomeImgContainer = styled.div`
  width: 30vw;
  height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${coverImg});
  animation: ${bounceAnimation} 2s ease-in-out infinite; /* Aplica la animación aquí */

  @media (max-width: 768px) {
    display: none;
  }
`;


const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 60vw;
  height: 80vh;
  font-family: "Nunito";
  padding-right: 2vw;


  @media (max-width: 768px) {
    width: 100%;
    height: 80vh;
    padding-left: 2vw;
    align-items: center;  
  }
`;


const TitleH1 = styled.h1`
  font-size: 2vw;
  border: 8px solid ;
  padding: 10px 20px;

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

const TitleH3 = styled.h3`
  font-size: 5vw;
  padding: 2vw 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 10vw;
    padding: 4vw 0;
  }

`;

const TitleH5 = styled.h5`
  font-size: 1.5vw;
  padding: 2vw 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

const TrialButton = styled.button`
  background-color: #fff000;
  border-radius: 12px;
  cursor: pointer;
  font-family: "Nunito";
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 10%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;

  @media (max-width: 768px) {
    width:30vw;
    font-size:3vw
  }
}

&hover,
&focus {
  outline: 0;
  background: #f4e603;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}

&disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}`



const Home = () => {
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundColorIndex(prevIndex =>
        (prevIndex + 1) % colorsPalette.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);



  const backgroundcolor = colorsPalette[backgroundColorIndex];

  return (
    <HomeContainer backgroundcolor={backgroundcolor} id="home"  >
      <HomeImgContainer />
      <TitleContainer >
        <TitleH1>{COMPANY_NAME}</TitleH1>
        <TitleH3>{COMPANY_SLOGAN} </TitleH3>
        <TitleH5>{COMPANY_TEXT}</TitleH5>
        <Link to="/pricingOptions"><TrialButton> Free trial</TrialButton></Link>
      </TitleContainer>
    </HomeContainer>
  );
}

export default Home;