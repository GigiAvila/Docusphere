import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';



const AlertLogin = () => {
  return (
    <Alert status="error" position='absolute' width='auto' top='75%' left='50%' transform='translate(-50%)' >
      <AlertIcon />
      <AlertTitle fontSize="1.2vw">Invalid user.</AlertTitle>
      <AlertDescription fontSize="1vw">
        Please try again or create a new account
      </AlertDescription>
    </Alert>
  );
};

export default AlertLogin;
