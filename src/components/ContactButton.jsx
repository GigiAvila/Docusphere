import React, { useState } from 'react';
import styled from 'styled-components';
import WhatsappImg from '../assets/whatsApp.png';
import VirtualAssistant from './VirtualAssistant';

const ContactButton = () => {
  const [toggleAssistant, setToggleAssistant] = useState(false);

  const FloatingButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
  `;

  const handleWhatsAppClick = () => {
    setToggleAssistant(!toggleAssistant);
  };

  return (
    <>
      <FloatingButtonContainer onClick={handleWhatsAppClick}>
        <img src={WhatsappImg} alt="WhatsAppLogo" />
      </FloatingButtonContainer>
      <VirtualAssistant isVisible={toggleAssistant} />
    </>
  );
};

export default ContactButton;
