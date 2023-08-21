import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Stack, Tooltip, Button } from '@chakra-ui/react'

const LogouButton = ({ handleLogout }) => {
  return (
    <div className='logoutSubmitButtonContainer'>
      <Tooltip hasArrow label='Logout' bg='yellow.600'>
        <Stack direction='row' spacing={4}>
          <Button rightIcon={<ChevronRightIcon />} variant='solid' colorScheme='telegram' type='submit' onClick={handleLogout}>Logout</Button>
        </Stack>
      </Tooltip>
    </div>
  )
}

export default LogouButton