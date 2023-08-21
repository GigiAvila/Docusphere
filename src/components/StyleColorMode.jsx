import React from 'react';
import { useColorModeValue, useColorMode, Box, Switch, FormControl, FormLabel } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import '../Styles.css/Header.css'


function StyleColorMode() {
  const { toggleColorMode, colorMode } = useColorMode();

  const bg = useColorModeValue('red.500', 'red.200');
  const color = useColorModeValue('white', 'gray.800');

  return (
    <div data-testid="style-color-mode-component" className='colorModeSwitch'>
      <FormControl display='flex' alignItems='center' justifyContent='center' gap='0.5rem' padding='1.5rem'>
        <SunIcon boxSize={6} color={colorMode === 'dark' ? 'white' : 'gray.500'} />
        <Switch
          id='color-mode'
          size='lg'
          colorScheme='telegram'
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        >
        </Switch>
        <MoonIcon boxSize={6} color={colorMode === 'dark' ? 'white' : 'gray.500'} />
      </FormControl>
    </div>
  );
}

export default StyleColorMode;
