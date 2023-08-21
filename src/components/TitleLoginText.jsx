import React from 'react';
import '../Styles.css/TitleLoginText.css';

const TitleLoginText = ({ isLoggedIn }) => {
  return (
    <>
      {!isLoggedIn ? (
        <div className='titleLoginOuterContainer'>
          <div className='titleLoginContainer'>
            <h3>Login</h3>
            <h5>Please select your account</h5>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TitleLoginText;
