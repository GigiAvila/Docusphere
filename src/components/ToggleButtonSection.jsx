import React, { useState } from 'react';
import { SIGNUP_TOGGLE_TEXT, LOGIN_TOGGLE_TEXT } from '../data/ChangeSectionText';

import '../Styles.css/ToggleButtonSection.css'

const ToggleButtonSection = ({ onToggleChange, toggleButton }) => {

  const changeToggleButton = () => {
    onToggleChange(!toggleButton);
  };

  return (
    <section className='toggleSection'>
      <h5 role='button'
        className='toogleSignInButton'
        onClick={changeToggleButton}
      >
        {toggleButton ? LOGIN_TOGGLE_TEXT : SIGNUP_TOGGLE_TEXT}
      </h5>

    </section>
  );
}

export default ToggleButtonSection;
