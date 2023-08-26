import React from 'react';
import styled from 'styled-components';
import { LOGIN_TEXT, LOGIN_TITLE } from '../data/TitleTexts';

const TitleLoginOuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30%;
`;

const TitleLoginContainer = styled.div`
  > h3 {
    font-size: 4rem;
    font-family: "Nunito";
  }

  > h5 {
    font-size: 1.5rem;
    margin-bottom: 2vw;
    font-family: "Nunito";
  }
`;


const TitleLoginText = ({ isLoggedIn }) => {
  return (
    <>
      {!isLoggedIn ? (
        <TitleLoginOuterContainer>
          <TitleLoginContainer>
            <h3>{LOGIN_TITLE}</h3>
            <h5>{LOGIN_TEXT}</h5>
          </TitleLoginContainer>
        </TitleLoginOuterContainer>
      ) : null}
    </>
  );
}

export default TitleLoginText;
