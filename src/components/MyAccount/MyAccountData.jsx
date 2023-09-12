import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Stack, InputGroup, InputRightElement, Button, Tooltip } from '@chakra-ui/react';
import AvatarImg from '../../assets/Avatar.png'
import { useAuth } from '../../hooks/useAuth';

const AccountSection = styled.section`
  width: 30vw;
  height: 75vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 95vw;
    height: auto;
  }
`;

const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1vw;

`;

const AvatarImage = styled.img`
  width: 6vw; 
  height: auto;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 10vw;
  }
`;

const ChangePhotoButton = styled.label`
  background-color: transparent;
  border: none;
  color: #0074d9; 
  cursor: pointer;
  margin-top: 0.5rem;
  font-size: 0.8vw;

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const MyAccountTitle = styled.h2`
font-size: 0.9vw;
width:100%;
text-align: start;
padding: 1vw;

@media (max-width: 768px) {
  font-size: 5vw;
}
`

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
  gap: 0.5vw;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  margin: 0.5vw;
  padding: 1vw;
 
  @media (max-width: 768px) {
    border: 0px solid #f2f2f2;
  }
`;

const UserInfoCampus = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1vw 0;
`
const UserInfoDataContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.7vw;

@media (max-width: 768px) {
  gap: 1.5vw;
}
`

const UserCampusTitle = styled.h3`
width: 20vw;
font-size:0.8vw;
border-bottom: 1px solid #f2f2f2;

@media (max-width: 768px) {
  font-size: 4vw;
}
`

const UserCampusInfo = styled.h5`
font-size:0.8vw;
font-weight:300;


@media (max-width: 768px) {
  font-size: 4vw;
  font-weight:300;
}
`

const EditButton = styled.button`
background-color:  #65D3AC;
padding: 0.3vw 1vw;
border-radius: 10px;
font-size: 0.7vw;
font-weight: 300;

@media (max-width: 768px) {
  font-size: 4vw;
  padding: 2vw 2.5vw;
}

`

const ShowPassButton = styled.button`
background-color:  teal;
padding: 0.3vw 1vw;
border-radius: 10px;
font-size: 0.7vw;
font-weight: 300;

@media (max-width: 768px) {
  font-size: 4vw;
  padding: 1.3vw 2vw;
}

`

const PassButtonContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5vw;
`

const MyAccountData = () => {

  const [showPassword, setShowPassword] = useState(false)


  const { user } = useAuth();


  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];

  };

  const handleShowPassword = (event) => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <AccountSection>
        <AvatarContainer>
          <AvatarImage src={AvatarImg} alt="UserPhoto" />
          <ChangePhotoButton>
            New Photo
            <FileInput type="file" accept="image/*" onChange={handlePhotoUpload} />
          </ChangePhotoButton>
        </AvatarContainer>
        <MyAccountTitle>My Account</MyAccountTitle>
        <UserDataContainer>
          <UserInfoCampus>
            <UserInfoDataContainer>
              <UserCampusTitle>User Name</UserCampusTitle>
              <UserCampusInfo>{user.userName}</UserCampusInfo>
            </UserInfoDataContainer>
            <EditButton>Edit</EditButton>
          </UserInfoCampus>
          <UserInfoCampus>
            <UserInfoDataContainer>
              <UserCampusTitle>Email</UserCampusTitle>
              <UserCampusInfo>{user.loginEmail}</UserCampusInfo>
            </UserInfoDataContainer>
            <EditButton>Edit</EditButton>
          </UserInfoCampus>
          <UserInfoCampus>
            <UserInfoDataContainer>
              <UserCampusTitle>Password</UserCampusTitle>
              <UserCampusInfo> {showPassword ? user.loginPassword : '************'}  </UserCampusInfo>
            </UserInfoDataContainer>
            <PassButtonContainer>
              <ShowPassButton onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}</ShowPassButton>
              <EditButton >Edit</EditButton>
            </PassButtonContainer>
          </UserInfoCampus>
          <UserInfoCampus>
            <UserInfoDataContainer>
              <UserCampusTitle>Phone Number</UserCampusTitle>
              <UserCampusInfo>Fake Phone </UserCampusInfo>
            </UserInfoDataContainer>
            <EditButton>Edit</EditButton>
          </UserInfoCampus>
        </UserDataContainer>
      </AccountSection>
    </>
  );
};

export default MyAccountData;
