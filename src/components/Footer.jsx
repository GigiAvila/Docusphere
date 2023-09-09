import React from 'react';
import styled from 'styled-components';
import UpperFooter from './Footer/UpperFooter';
import LowerFooter from './Footer/LowerFooter';

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <UpperFooter />
      <LowerFooter />
    </FooterContainer>
  );
}

export default Footer;

