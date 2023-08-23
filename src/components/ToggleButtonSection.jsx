import React, { useState } from 'react';
import styled from 'styled-components'
import { SIGNUP_TOGGLE_TEXT, LOGIN_TOGGLE_TEXT } from '../data/ChangeSectionText';

const ToggleSection = styled.section`
  height: 10vh;
  width: 100%;
  position: relative;
`;

const ToggleSignInButton = styled.h5`
  font-size: 1rem;
  position: absolute;
  right: 20px;
  margin: 40px;
  font-family: 'Cornerstone';

  &:hover {
    font-size: 1.3rem;
  }
`;


const ToggleButtonSection = ({ onToggleChange, toggleButton }) => {

  const changeToggleButton = () => {
    onToggleChange(!toggleButton);
  };

  return (
    <ToggleSection>
      <ToggleSignInButton role='button'
        onClick={changeToggleButton}
      >
        {toggleButton ? LOGIN_TOGGLE_TEXT : SIGNUP_TOGGLE_TEXT}
      </ToggleSignInButton>

    </ToggleSection>
  );
}

export default ToggleButtonSection;
