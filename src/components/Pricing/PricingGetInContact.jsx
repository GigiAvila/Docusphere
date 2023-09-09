import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GetInTouchSection = styled.section`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 25vw;
padding: 1vw;


@media (max-width:768px){
  width: 100%;
  height: auto;
  text-align: center;
  display: none;
}
`

const GetInTouchTitle = styled.h3`
font-size: 2vw;
width: 100%;

@media (max-width:768px){
  font-size: 4vw;
}
`

const GetInTouchSubtitle = styled.h5`
font-size: 0.9vw;
width: 100%;

@media (max-width:768px){
  font-size: 3vw;
}
`

const GetInTouchButton = styled.button`
border: 3px solid #222;
border-radius: 10px;
padding: 0.3vw 1vw;
font-size: 1vw;
margin: 1vw 0;
align-self: flex-start;
cursor: pointer;

&:hover {
  background-color: #65D3AC;

}

@media (max-width:768px){
  font-size: 3vw;
  margin: 1vw auto;

}
}
`




const PricingGetInContact = () => {

  return (
    <GetInTouchSection>
      <GetInTouchTitle>Need something different?</GetInTouchTitle>
      <GetInTouchSubtitle>Get in touch</GetInTouchSubtitle>
      <GetInTouchButton><Link to="/contactUs">Let us know</Link></GetInTouchButton>

    </GetInTouchSection>
  )
}

export default PricingGetInContact
