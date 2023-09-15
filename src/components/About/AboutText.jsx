import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import { ABOUT_SLOGAN, ABOUT_TITLE } from '../../data/TitleTexts'
import chatbotImg from '../../assets/chatbot.png'
import integrateImg from '../../assets/integration.png'
import reduceImg from '../../assets/reduce.png'
import shieldImg from '../../assets/shield.png'

const StyledAboutSection = styled.section`
height: auto;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;


@media (max-width: 768px) {
  flex-direction: column;
  margin-bottom: 0vw;

}
                    
`

const StyledAboutContainer = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;


@media (max-width: 768px) {
  height:70vh;

}
    
`



const StyledAboutTitleTextContainer = styled.div`
width: 100%;
height: 30vh;
padding: 1vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
 margin-top: 3vw;
 height: auto;
 width: 70vw;
}

> h3 {
  display: inline-block;
  padding: 3px; 
  font-size: 3vw;
  border-radius: 10px; 
  text-align: start;
  padding: 0.5vw 2vw ;
  margin: 0.5vw 0vw;
  background: linear-gradient(to right, #c2a8e6, #0000ff);
    -webkit-background-clip: text;
    color: transparent;

  @media (max-width: 768px) {
    font-size: 8vw;

  }
}


> h4 {
  font-size: 2.3vw;
  padding: 0.5vw 2vw ;
  text-align: center;
  background: linear-gradient(to right, #c2a8e6, #0000ff);
    -webkit-background-clip: text;
    color: transparent;
  

  @media (max-width: 768px) {
    font-size: 6vw;
    padding: 3vw 0vw;
  }
}

`


const StyledAboutImgContainer = styled.div`
width: 100vw;
height: auto;
overflow: hidden;

@media (max-width: 768px) {
  display:none;

}
`
const StyledAboutImg = styled.img`
  width: 100%;
  height: auto;

}

  @media (max-width: 768px) {
    display:none;
  
  }
`;



const List = styled.ul`
  width: auto;
  height: 70vh;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ListItem = styled.li`
  text-align: center;
  padding: 10px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  
  @media (max-width: 768px) {
    width: 50vw;
    height: auto;
    align-items: center;
  }

`;

const Image = styled.img`
  width: 2vw;
  height: auto;

  @media (max-width: 768px) {
    width: 5vw;
    height: auto;
  }
`;

const Title = styled.h5`
  font-size: 1.4vw;
  margin: 8px 0;

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    font-size: 5vw;
  }
`;

const Description = styled.p`
  font-size: 0.8vw;
  font-weight: 300;
  
  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
    font-size: 4vw;
   
  }
`;

const AboutText = () => {


  return (
    <div>
      <StyledAboutSection>
        <StyledAboutTitleTextContainer>
          <h3>{ABOUT_TITLE}</h3>
          <h4>{ABOUT_SLOGAN}</h4>
        </StyledAboutTitleTextContainer>
        <StyledAboutContainer>
          <StyledAboutImgContainer><StyledAboutImg src={chatbotImg} alt="botrender" /> </StyledAboutImgContainer>
          <List>
            <ListItem>
              <Image src={reduceImg} alt="" />
              <Title>Reduce Administrative Time</Title>
              <Description>Streamline your processes with ease.</Description>
            </ListItem>
            <ListItem>
              <Image src={integrateImg} alt="" />
              <Title>Seamless Company Integration</Title>
              <Description>Effortlessly integrate your documentation into our platform.</Description>
            </ListItem>
            <ListItem>
              <Image src={shieldImg} alt="" />
              <Title>Data Protection</Title>
              <Description>Secure your information from unauthorized access.</Description>
            </ListItem>
          </List>
        </StyledAboutContainer>

      </StyledAboutSection>
    </div>
  );
};

export default AboutText