import React from 'react'
import MyAccount from '../components/MyAccount'
import Header from '../components/Header'

const MyAccountPage = () => {
  return (
    <>
      <Header />
      <section>
        <h3>My Account Title</h3>
        <MyAccount />
      </section>
    </>

  )
}

export default MyAccountPage
