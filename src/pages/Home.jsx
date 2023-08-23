import React from 'react';
import styled from 'styled-components';
import homeImg from '../assets/background.png';
import Header from '../components/Header';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeImgContainer = styled.main`
  width: 100vw;
  height: 85vh;
  overflow: hidden;
  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 40vh;
  font-family: 'Cornerstone';
`;

const TitleH1 = styled.h1`
  font-size: 3rem;
  border: 8px solid white;
  padding: 10px 20px;
`;

const TitleH3 = styled.h3`
  font-size: 6rem;
  padding: 3vw 0;
`;

const TitleH5 = styled.h5`
  font-size: 2rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImgContainer>
        <TitleContainer>
          <TitleH1>DOCUSPHERE</TitleH1>
          <TitleH3>Gestion documental avanzada</TitleH3>
          <TitleH5>Hacemos que tus documentos cobren vida a traves del chat</TitleH5>
        </TitleContainer>
      </HomeImgContainer>
    </HomeContainer>
  );
}

export default Home;