import React, { useState } from 'react';
import styled from 'styled-components'
import Login from './Login'
import SignUp from './Signup';
import ToggleButtonSection from './ToggleButtonSection';


const MainContainer = styled.div`
width: 70vw;
height: 70vh;
`



const Signin = () => {
  const [toggleButton, setToggleButton] = useState(true);


  const handleToggleChange = () => {
    setToggleButton(!toggleButton);
  };


  return (
    <MainContainer>
      <ToggleButtonSection onToggleChange={handleToggleChange} toggleButton={toggleButton} />
      {toggleButton ? <Login data-testid='login-component' /> : <SignUp data-testid='signup-component' />}

    </MainContainer>
  );
}

export default Signin;