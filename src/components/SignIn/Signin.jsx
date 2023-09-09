import React, { useState } from 'react';
import styled from 'styled-components'
import Login from './Login'
import SignUp from './SignUp';
import ToggleButtonSection from './ToggleButtonSection';


const SigninContainer = styled.div`
height: 70vh;
display: flex;
flex-direction: column;


`

const StyledToggleButtonContainer = styled.div`
align-self: center;
`




const Signin = () => {
  const [toggleButton, setToggleButton] = useState(true);


  const handleToggleChange = () => {
    setToggleButton(!toggleButton);
  };


  return (
    <SigninContainer>
      <StyledToggleButtonContainer>
        <ToggleButtonSection onToggleChange={handleToggleChange} toggleButton={toggleButton} />
      </StyledToggleButtonContainer>
      {toggleButton ? <Login data-testid='login-component' /> : <SignUp data-testid='signup-component' />}
    </SigninContainer>
  );
}

export default Signin;