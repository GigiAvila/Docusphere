import React from 'react'
import styled from 'styled-components'

const SiteMapContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
gap: 5vw;
width: 60vw;
padding-right: 2vw;

@media (max-width: 768px) {
  width: 100%;
  align-items: flex-start;

}

`

const SiteSection = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: flex-start;
  line-height: 2.5;
  font-weight: bold;
  font-size: 0.8vw;

  @media (max-width: 768px) {
    font-size: 2vw;
  
  }
`

const SitePage = styled.li`
list-style-type: none;
font-weight: 200;
font-size: 0.8vw;


@media (max-width: 768px) {
  font-size: 2vw;

}
`


const SiteMap = () => {
  return (
    <SiteMapContainer>
      <SiteSection>PRODUCT
        <SitePage>Create an account</SitePage>
        <SitePage>Login</SitePage>
        <SitePage>My Account</SitePage>
        <SitePage>Pricing</SitePage>
      </SiteSection>
      <SiteSection>COMPANY
        <SitePage>About Us</SitePage>
        <SitePage>Partners</SitePage>
        <SitePage>Testimonies</SitePage>
      </SiteSection>
      <SiteSection>COMMUNITY
        <SitePage>Blog</SitePage>
      </SiteSection>
      <SiteSection>SUPPORT
        <SitePage>FAQs</SitePage>
        <SitePage>Contact Us</SitePage>

      </SiteSection>

    </SiteMapContainer>
  )
}

export default SiteMap
