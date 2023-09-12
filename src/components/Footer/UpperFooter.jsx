import React from 'react'
import SiteMap from './SiteMap'
import SocialMedia from './SocialMedia'
import styled from 'styled-components'
import ContactFooter from './ContactFooter'


const UpperFooterContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-evenly;
margin-top: 2vw;
width: 100%;
padding: 0.5vw;

@media (max-width: 768px) {
  flex-direction: column;
  gap: 5vw;
  padding-left: 5vw;
}
`


const CustomBorder = styled.div`
  width: 95%;
  height: 1px;
  border-bottom: 1px solid #f2f2f2;
`;


const UpperFooter = () => {



  return (
    <>
      <UpperFooterContainer>
        <SocialMedia />
        <SiteMap />
        <ContactFooter />
      </UpperFooterContainer>
      <CustomBorder />
    </>
  )
}

export default UpperFooter
