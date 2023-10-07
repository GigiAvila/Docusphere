import React from 'react'
import styled from 'styled-components'

const MyAccountPlanInfo = () => {
  const PlanTitle = styled.h2`
    font-size: 1.2vw;
    color: black;
    width: 100%;
    text-align: start;
    padding-top: 2vw;
    margin-bottom: 1vw;

    @media (max-width: 768px) {
      font-size: 5vw;
    }
  `

  const PlanDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1vw;
    width: 95%;
    height: 36vh;
    gap: 0.5vw;
    border-radius: 10px;
    border: 1px solid #f2f2f2;
    background-color: white;

    @media (max-width: 768px) {
      width: 95vw;
      height: auto;
    }
  `

  const UserPlanDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7vw;
  `

  const MyPlanTitle = styled.h3`
    width: 20vw;
    font-size: 0.8vw;
    color: black;
    border-bottom: 1px solid #f2f2f2;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  `

  const MyPlanInfo = styled.h5`
    font-size: 0.8vw;
    font-weight: 300;
    color: black;

    @media (max-width: 768px) {
      font-size: 4vw;
      padding: 0.5vw;
    }
  `

  const ChangePlanButton = styled.button`
    background-color: #65d3ac;
    padding: 0.3vw 1vw;
    border-radius: 10px;
    font-size: 0.7vw;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  `

  const CancelPlanButton = styled.button`
    background-color: tomato;
    padding: 0.3vw 1vw;
    border-radius: 10px;
    font-size: 0.7vw;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  `

  const ButtonPlanContainer = styled.div`
    display: flex;
    gap: 0.5vw;
    width: 100%;
    justify-content: center;
    align-items: center;
  `

  return (
    <>
      <PlanDataContainer>
        <PlanTitle>My Plan</PlanTitle>
        <UserPlanDataContainer>
          <MyPlanTitle>Plan</MyPlanTitle>
          <MyPlanInfo>Basic</MyPlanInfo>
        </UserPlanDataContainer>
        <UserPlanDataContainer>
          <MyPlanTitle>Start Date</MyPlanTitle>
          <MyPlanInfo>01/01/2023</MyPlanInfo>
        </UserPlanDataContainer>
        <ButtonPlanContainer>
          <ChangePlanButton>Change Plan</ChangePlanButton>
          <CancelPlanButton>Cancel</CancelPlanButton>
        </ButtonPlanContainer>
      </PlanDataContainer>
    </>
  )
}

export default MyAccountPlanInfo
