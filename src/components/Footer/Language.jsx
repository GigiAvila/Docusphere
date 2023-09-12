import React from 'react';
import styled from 'styled-components'

const LanguageSelectContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width: 50vw;
gap: 0.5vw;
`

const LanguageLabel = styled.label`
font-weight: bold;
`

const LanguageSelect = styled.select`
background-color: #f2f2f2; 
border-radius:10px;
padding: 8px;
font-size: 0.8vw;
font-weight:300;
width: 8vw;

@media (max-width:768px){
  width:20vw;
  font-size: 2.8vw;
}`


const LanguageOption = styled.option`
font-size: 0.8vw;
font-weight:300;

@media (max-width:768px){
  font-size: 2.8vw;
}
`

const Language = () => {
  return (
    <LanguageSelectContainer>
      <LanguageLabel htmlFor="languageSelect">Language</LanguageLabel>
      <LanguageSelect id="languageSelect">
        <LanguageOption value="English">English</LanguageOption>
        <LanguageOption value="Spanish">Spanish</LanguageOption>
      </LanguageSelect>
    </LanguageSelectContainer>
  );
};

export default Language;
