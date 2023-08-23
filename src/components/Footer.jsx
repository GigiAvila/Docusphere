import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
`;

const FooterText = styled.p`
  font-family: 'Cornerstone', sans-serif;
  font-size: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Created with love by Gigi Avila 🤖</FooterText>
    </FooterContainer>
  );
}

export default Footer;

