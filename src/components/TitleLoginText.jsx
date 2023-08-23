import React from 'react';
import styled from 'styled-components';

const TitleLoginOuterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 32%;
`;

const TitleLoginContainer = styled.div`
  > h3 {
    font-size: 3rem;
    font-family: 'Cornerstone';
  }

  > h5 {
    font-size: 1.5rem;
    margin-bottom: 2vw;
    font-family: 'Cornerstone';
  }
`;


const TitleLoginText = ({ isLoggedIn }) => {
  return (
    <>
      {!isLoggedIn ? (
        <TitleLoginOuterContainer>
          <TitleLoginContainer>
            <h3>Login</h3>
            <h5>Please select your account</h5>
          </TitleLoginContainer>
        </TitleLoginOuterContainer>
      ) : null}
    </>
  );
}

export default TitleLoginText;
