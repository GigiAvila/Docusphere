import React from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContactFooter = () => {
  const ContactFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 20vw;
    padding-right: 2vw;
    border-radius: 10px;
    background-color: #f2f2f2;
    border-top: 1vw;

    @media (max-width: 768px) {
      display: none;
    }
  `

  const ContactFooterTextWrapper = styled.div`
    padding: 1vw;
  `

  const ContactFooterTitle = styled.h3`
    line-height: 2.5;
    font-weight: bold;
    font-size: 1vw;
    color: black;

    @media (max-width: 768px) {
      font-size: 2vw;
    }
  `
  const ContactFooterText = styled.h5`
    font-weight: 200;
    padding: 1vw 0;
    line-height: 2;
    font-size: 0.9vw;
    color: black;

    @media (max-width: 768px) {
      font-size: 2vw;
    }
  `

  return (
    <ContactFooterContainer>
      <ContactFooterTextWrapper>
        <ContactFooterTitle>Send us a message!</ContactFooterTitle>
        <ContactFooterText>
          Need support or want to know more about us? We are always just one
          email away.
        </ContactFooterText>
        <Stack direction='row' spacing={4}>
          <Link to='contactUs'>
            <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
              Contact us
            </Button>
          </Link>
        </Stack>
      </ContactFooterTextWrapper>
    </ContactFooterContainer>
  )
}

export default ContactFooter
