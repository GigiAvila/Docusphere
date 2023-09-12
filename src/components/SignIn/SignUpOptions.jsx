import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { CLIENT_ID } from '../../data/GoogleKey';
import styled from 'styled-components';

const GoogleLoginContainer = styled.div`
padding: 2vw;
  @media (max-width: 768px) {
    width: 65vw;
    height: 10vh;
  }
`;

const SignUpOptions = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLoginContainer>
      <GoogleLogin
        clientId='863935766587-96ls4m5v5rsgg4mue3djnpf5e0ghnr40.apps.googleusercontent.com'
        buttonText="Iniciar sesión con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </GoogleLoginContainer>
  );
};


export default SignUpOptions;
