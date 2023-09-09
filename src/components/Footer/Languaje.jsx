import React from 'react';
import styled from 'styled-components'

const LanguajeSelectContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width: 50vw;
gap: 0.5vw;
`

const LanguajeLabel = styled.label`
font-weight: bold;
`

const LanguajeSelect = styled.select`
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


const LenguajeOption = styled.option`
font-size: 0.8vw;
font-weight:300;

@media (max-width:768px){
  font-size: 2.8vw;
}
`

const Language = () => {
  return (
    <LanguajeSelectContainer>
      <LanguajeLabel htmlFor="languageSelect"></LanguajeLabel>
      <LanguajeSelect id="languageSelect">
        <LenguajeOption value="English">English</LenguajeOption>
        <LenguajeOption value="Spanish">Spanish</LenguajeOption>
      </LanguajeSelect>
    </LanguajeSelectContainer>
  );
};

export default Language;
