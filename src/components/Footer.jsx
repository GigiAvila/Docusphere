import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  height: auto;
  position: absolute;
  bottom: 0;
`;

const FooterText = styled.p`
font-family: "Nunito";
  font-size: 1vw;
  position: absolute;
  right: 0;
  bottom: 0;

  
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Created with love by Gigi Avila 🤖</FooterText>
    </FooterContainer>
  );
}

export default Footer;

