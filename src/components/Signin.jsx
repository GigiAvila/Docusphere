import React, { useState } from 'react';
import LogIn from './Login'
import SignUp from './Signup';
import ToggleButtonSection from './ToggleButtonSection';
import { useAuth } from '../hooks/useAuth';

import '../Styles.css/SigninPage.css'

const Signin = () => {
  const [toggleButton, setToggleButton] = useState(true);


  const handleToggleChange = () => {
    setToggleButton(!toggleButton);
  };


  return (
    <div className='mainContainer'>
      <ToggleButtonSection onToggleChange={handleToggleChange} toggleButton={toggleButton} />
      {toggleButton ? <LogIn /> : <SignUp />}

    </div>
  );
}

export default Signin;