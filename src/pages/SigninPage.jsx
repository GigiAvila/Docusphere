import React from 'react'
import Signin from '../components/Signin'
import BackgroundImg from '../assets/loginphoto.png'
import Header from '../components/Header'

const SignInPage = () => {
  return (
    <>
      <Header />
      <section className='mainWrapper'>
        <div className='BackgroundContainer'><img src={BackgroundImg} alt="backgroundImg" /></div>
        <Signin />
      </section>
    </>
  )
}

export default SignInPage


