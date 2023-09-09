import React from 'react';
import styled from 'styled-components';
import { LOGIN_TEXT, LOGIN_TITLE } from '../../data/TitleTexts';

const TitleLoginOuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30%;

  @media (max-width: 768px) {
    padding-left: 10%;
  }
`;

const TitleLoginContainer = styled.div`
  > h3 {
    font-size: 2.8rem;
    font-family: "Nunito";

    @media (max-width: 768px) {
      font-size: 7vw;
    }
  }

  > h5 {
    font-size: 1.3rem;
    margin-bottom: 2vw;
    font-family: "Nunito";

    @media (max-width: 768px) {
      font-size: 5vw;
    }
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
