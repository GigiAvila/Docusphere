import React, { useState } from 'react';
import styled from 'styled-components'
import LogIn from './Login'
import SignUp from './Signup';
import ToggleButtonSection from './ToggleButtonSection';
import { useAuth } from '../hooks/useAuth';


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
      {toggleButton ? <LogIn /> : <SignUp />}

    </MainContainer>
  );
}

export default Signin;