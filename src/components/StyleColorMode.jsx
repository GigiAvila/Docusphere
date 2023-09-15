import React, { useState, useEffect } from 'react';
import { useColorModeValue, useColorMode, Switch, FormControl } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styled from 'styled-components';



const StyledFormControl = styled(FormControl)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  padding: 1.5vw;

 
`;

const StyledSunIcon = styled(SunIcon)`
  @media (max-width: 768px) {
    width: 1vw;
    height: 1vh;
  }
`;

const StyledMoonIcon = styled(MoonIcon)`
  @media (max-width: 768px) {
    width: 1vw;
    height: 1vh;
  }
`;

const StyledSwitch = styled(Switch)`
  @media (max-width: 768px) {
    width: auto;
    height: auto;

    
  }
`;

function StyleColorMode() {

  const { toggleColorMode, colorMode } = useColorMode();
  const iconColor = useColorModeValue('#545454', '#f7f7f7');
  const bgColor = useColorModeValue('#f7f7f7', '#333333');

  return (
    <div data-testid="style-color-mode-component">
      <StyledFormControl>
        <StyledSunIcon color={iconColor} />
        <StyledSwitch
          id='color-mode'
          colorScheme='telegram'
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
        <StyledMoonIcon color={iconColor} />
      </StyledFormControl>
    </div>
  );
}

export default StyleColorMode;
