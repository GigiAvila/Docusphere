import React, { useState } from 'react'
import styled from 'styled-components'
import {
  SIGNUP_TOGGLE_TEXT,
  LOGIN_TOGGLE_TEXT
} from '../../data/ChangeSectionText'

const ToggleSignInButton = styled.h5`
  font-size: 1vw;
  font-family: 'Nunito';
  padding: 1rem;
  border-radius: 5px;
  color: black;

  @media (max-width: 768px) {
    font-size: 3vw;
  }

  &:hover {
    padding: 1rem;
    border-radius: 5px;
  }
`

const ToggleButtonSection = ({ onToggleChange, toggleButton }) => {
  const changeToggleButton = () => {
    onToggleChange(!toggleButton)
  }

  return (
    <ToggleSignInButton role='button' onClick={changeToggleButton}>
      {toggleButton ? LOGIN_TOGGLE_TEXT : SIGNUP_TOGGLE_TEXT}
    </ToggleSignInButton>
  )
}

export default ToggleButtonSection
