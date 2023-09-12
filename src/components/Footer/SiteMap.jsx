import React, { useState } from 'react';
import styled from 'styled-components';
import { SITEMAP } from '../../data/FooterSiteMap';

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
    flex-direction: column;
    gap: 2vw;
  }
`;

const SiteSection = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 2.5;
  font-weight: bold;
  font-size: 0.8vw;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 4vw;
    text-transform: none;
    border-bottom: 1px solid #f2f2f2;
    width: 100%;
    padding: 1vw;
    font-weight: 300;
    cursor: pointer;
  }
`;

const SitePage = styled.li`
  list-style-type: none;
  font-weight: 200;
  font-size: 0.8vw;

  @media (max-width: 768px) {
    font-size: 3vw;
    color: grey;
    padding-left: 2vw;
    display: ${(props) => (props.isOpen ? 'block' : 'none')}; 
  }
`;

const SiteMap = () => {
  const [openSection, setOpenSection] = useState(-1);
  const toggleSection = (index) => {

    if (openSection === index) {
      setOpenSection(-1);
    } else {
      setOpenSection(index);
    }
  };

  return (
    <SiteMapContainer>
      {SITEMAP.map((section, index) => (
        <SiteSection key={index} onClick={() => toggleSection(index)}>
          {section.route}
          {SITEMAP.map((subroute, subIndex) => (
            <SitePage key={subIndex} isOpen={openSection === index}>
              {subroute.subroute}
            </SitePage>
          ))}
        </SiteSection>
      ))}
    </SiteMapContainer>
  );
};

export default SiteMap;
