import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Stack, Tooltip, Button } from '@chakra-ui/react'

const LoginButton = ({ handleLogin }) => {
  return (
    <div className='loginSubmitButtonContainer'>
      <Tooltip hasArrow label='Login' bg='yellow.600'>
        <Stack direction='row' spacing={4}>
          <Button rightIcon={<ChevronRightIcon />} variant='solid' colorScheme='telegram' type='submit' onClick={handleLogin}>Login</Button>
        </Stack>
      </Tooltip>
    </div>
  )
}

export default LoginButton