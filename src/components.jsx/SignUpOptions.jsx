import React, { useEffect } from 'react';
import { Box, Divider, AbsoluteCenter, useColorMode } from '@chakra-ui/react';
import { CLIENT_ID } from '../data/GoogleKey'

import '../Styles.css/SignUpOptions.css';

const SignUpOptions = () => {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'dark' ? 'gray.800' : 'white';
  const textColor = colorMode === 'dark' ? 'white' : 'gray.800';


  function handleCallbackResponse(response) {

  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, [])

  return (
    <section className='signUpOptions'>
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg={bgColor} px='4' color={textColor}>
          <p>or</p>
        </AbsoluteCenter>
      </Box>
      <div id='signInDiv'></div>
    </section>
  );
};

export default SignUpOptions;
