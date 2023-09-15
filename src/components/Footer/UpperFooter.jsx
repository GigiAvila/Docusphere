import React from 'react'
import SiteMap from './SiteMap'
import SocialMedia from './SocialMedia'
import styled from 'styled-components'
import ContactFooter from './ContactFooter'
import StyleColorMode from '../StyleColorMode'



const UpperFooterContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-evenly;
width: 100%;
padding: 0.5vw;
border-top: 1px solid #f2f2f2;
box-shadow: 0px -5px 5px -1px rgba(50, 50, 93, 0.25);
padding-top: 2vw;

@media (max-width: 768px) {
  flex-direction: column-reverse;
  gap: 5vw;
  padding-left: 5vw;
}
`

const ColorModeFooterContainer = styled.div`
display: none; 

@media (max-width: 768px) {
  display: block;
}
`

const CustomBorder = styled.div`
  width: 99%;
  height: 1px;
  border-bottom: 1px solid #f2f2f2;
`;

const InfoContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;`

const UpperFooter = () => {




  return (
    <>
      <UpperFooterContainer>
        <InfoContainer>
          <SocialMedia />
          <ColorModeFooterContainer>
            <StyleColorMode />
          </ColorModeFooterContainer>
        </InfoContainer>
        <SiteMap />
        <ContactFooter />
      </UpperFooterContainer>
      <CustomBorder />
    </>
  );
}

export default UpperFooter
