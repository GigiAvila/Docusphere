import React, { useState } from 'react';
import LogIn from './Login'
import SignUp from './SignUp';
import ToggleButtonSection from './ToggleButtonSection';

import '../Styles.css/Main.css'

const Main = () => {
  const [toggleButton, setToggleButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showLogInForm, setShowLogInForm] = useState(true)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)

  const handleToggleChange = () => {
    setToggleButton(!toggleButton);
  };

  const handleLogin = () => {
    setShowLogInForm(false);
    setShowWelcomeMessage(true);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    console.log(isLoggedIn)
  }

  const handleLogout = () => {
    setShowLogInForm(true);
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    console.log(isLoggedIn)

  };
  return (
    <div className='mainContainer'>
      <ToggleButtonSection onToggleChange={handleToggleChange} toggleButton={toggleButton} />
      {toggleButton ? <LogIn isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} showLogInForm={showLogInForm} showWelcomeMessage={showWelcomeMessage} /> : <SignUp />}

    </div>
  );
}

export default Main;