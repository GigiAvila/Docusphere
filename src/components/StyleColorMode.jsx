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
  
  @media (max-width: 768px) {
    padding: 1.5vw 0;
  }
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
    width: 1vw;
    height: 1vh;
  }
`;

function StyleColorMode() {
  const [isMobile, setIsMobile] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode();
  const iconColor = useColorModeValue('#545454', '#f7f7f7');
  const bgColor = useColorModeValue('#f7f7f7', '#333333');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div data-testid="style-color-mode-component">
      {isMobile ? null : (
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
      )}
    </div>
  );
}

export default StyleColorMode;
