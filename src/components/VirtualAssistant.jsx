import React, { useState } from 'react';
import styled from 'styled-components';
import AssistantImg from '../assets/Assistant.png'

const AssistantContainer = styled.div`
  position: fixed;
  bottom: 7vw;
  right: 2vw;
  background-color: white;
  border: 1px solid #f2f2f2;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const AssistantTitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;`

const AssistantImageContainer = styled.div`
  width: 5vw;
  padding: 1vw;

  @media (max-width: 768px) {
    width: 10vw;
  }
`;

const AssistantImage = styled.img`
  width: 10vw; 
  height: auto;
  border-radius: 50%;

`;
const VirtualAssistantTitle = styled.h3`
line-height: 2.5;
font-weight: bold;
font-size: 1vw;
border-bottom: 1px solid #f2f2f2;

@media (max-width: 768px) {
font-size: 4vw;
}
`


const VirtualAssistantText = styled.textarea`
font-weight: 200;
padding: 1vw 0;
line-height: 2;
font-size: 0.9vw;

@media (max-width: 768px) {
  font-size: 3vw;
  } 
  `

const VirtualAssistantButton = styled.button`
  font-size: 0.8vw;
  padding: 0.5vw 0.5vw;
  width: 4vw;
  height: auto;
  text-align: center;

  &:hover {
    background-color: #65D3AC;
    border-radius: 10px;
    color: white;
  }
  
  @media (max-width: 768px) {
    font-size: 3vw;
    width: 10vw;
  }`



const VirtualAssistant = ({ isVisible }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    const phoneNumber = '+34608050049';
    const myMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${myMessage}`;
    window.location.href = whatsappLink;
  };

  return (
    <AssistantContainer isVisible={isVisible}>
      <AssistantTitleSection>
        <AssistantImageContainer><AssistantImage src={AssistantImg} alt="AsistantAvatar" /></AssistantImageContainer>
        <VirtualAssistantTitle>Virtual Assistant</VirtualAssistantTitle>
      </AssistantTitleSection>
      <VirtualAssistantText
        rows="6"
        cols="40"
        placeholder="Write whatever you need"
        value={message}
        onChange={handleInputChange}
      ></VirtualAssistantText>
      <VirtualAssistantButton onClick={handleSendClick}>Send</VirtualAssistantButton>
    </AssistantContainer>
  );
};

export default VirtualAssistant;
