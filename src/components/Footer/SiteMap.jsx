import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SITEMAP } from '../../data/FooterSiteMap';

const SiteMapSection = styled.div`
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

const SiteMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2vw;
  gap: 1vw;

  @media (max-width: 768px) {
    border-bottom: 1px solid #f2f2f2;
    gap: 0;
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
    width: 85vw;
    padding: 1vw;
    font-weight: 300;
    cursor: pointer;
  }
`;

const SitePage = styled.li`
  list-style-type: none;
  font-weight: 200;
  font-size: 0.8vw;
  display: block;

  @media (max-width: 768px) {
    font-size: 4vw;
    color: grey;
    padding: 2vw;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;

const SiteMap = () => {
  const [openSections, setOpenSections] = useState(window.innerWidth > 768 ? Array(SITEMAP.length).fill(true) : Array(SITEMAP.length).fill(false));

  const toggleSection = (index) => {
    if (window.innerWidth <= 768) {
      const updatedSections = [...openSections];
      updatedSections[index] = !updatedSections[index];
      setOpenSections(updatedSections);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpenSections(Array(SITEMAP.length).fill(false));
      } else {
        setOpenSections(Array(SITEMAP.length).fill(true));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SiteMapSection>
      {SITEMAP.map((section, index) => (
        <SiteMapContainer key={index}>
          <SiteSection onClick={() => toggleSection(index)}>{section.title}</SiteSection>
          {openSections[index] && (
            <>
              {section.subroutes.map((subroute, subIndex) => (
                <SitePage key={subIndex} isOpen={openSections[index]}>
                  {subroute}
                </SitePage>
              ))}
            </>
          )}
        </SiteMapContainer>
      ))}
    </SiteMapSection>
  );
};

export default SiteMap;
