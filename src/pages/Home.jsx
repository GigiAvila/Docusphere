import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import coverImg from '../assets/Cover.png';
import { COMPANY_NAME, COMPANY_TEXT } from '../data/TitleTexts';




const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HomeImgContainer = styled.main`
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.isMobile
      ? 'background-color: yellow;'
      : `background-image: url(${coverImg});`}
`;



const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 95vw;
  height: 40vh;
  font-family: "Nunito";
  
  @media (max-width: 768px) {
    width: 95vw;
    height: 80vh;
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
  font-size: 4.5vw;
  padding: 3vw 0;

  @media (max-width: 768px) {
    font-size: 12vw;
  }

`;

const TitleH5 = styled.h5`
  font-size: 1vw;
  padding: 1vw 0;

  @media (max-width: 768px) {
    font-size: 6vw;
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

  @media (max-width: 768px) {
    width:40vw;
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

  console.log('isMobile', isMobile);
  return (
    <HomeContainer>
      <HomeImgContainer>
        <TitleContainer >
          <TitleH1>{COMPANY_NAME}</TitleH1>
          <TitleH3>CONNECT <br />& CONSULT </TitleH3>
          <TitleH5>{COMPANY_TEXT}</TitleH5>
          <TrialButton> Free trial</TrialButton>
        </TitleContainer>
      </HomeImgContainer>
    </HomeContainer>
  );
}

export default Home;