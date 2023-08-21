import React, { useState } from 'react'
import UserAvatar from '../assets/user.png'
import '../Styles.css/Welcome.css'

const Welcome = ({ isLoggedIn }) => {


  return (
    <section className='LogIn'>
      {isLoggedIn &&
        <div className='welcomeMessageContainer'>
          < img src={UserAvatar} alt='userPhotoAvatar' />
          <h3 className='welcomeMessageText'>Welcome back, user!</h3>
        </div>
      }
    </section>
  )
}

export default Welcome
