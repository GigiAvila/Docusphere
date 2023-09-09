import React from 'react';
import styled from 'styled-components';


const TimelineContainer = styled.div`
  position: relative;
`;

const TimelineLine = styled.div`
  border-right: 2px solid #65D3AC;
  position: absolute;

  left: 50%;
  height: 80%;
`;

const TimelineItems = styled.div`
  list-style-type: none;
  margin-left: 49.4%;
  padding: 0px;

  @media (max-width: 768px) {
    margin-left: 48.4%;
  }
`;

const TimelineItem = styled.div`
  width: 35vw;
  height: 15vh;
  margin: 1.5vw 0vw;
`;

const TimelineTop = styled.div`
  align-items: center;
  display: flex;
`;

const TimelineCircle = styled.div`
  background-color: #65D3AC;
  border-radius: 9999px;
  height: 1.5rem;
  width: 1.5rem;

  @media (max-width: 768px) {
    height: 1rem;
    width: 1rem;
  }
`;

const TimelineTitle = styled.h5`
  margin-left: 1vw;
  font-size: 1.2vw;

  @media (max-width: 768px) {
    font-size: 2.5vw;

`;

const TimelineDesc = styled.p`
 margin-left: 3vw;
 font-size: 0.8vw;
 font-weight: 200;

 @media (max-width: 768px) {
  margin-left: 5vw;
  font-size: 2vw;
}
`;

const TimelineSectionTitle = styled.h2`
font-size: 3vw;
width: 100%;
text-align: center;
padding: 2vw;
background: linear-gradient(to right, #c2a8e6, #0000ff);
    -webkit-background-clip: text;
    color: transparent;
`



function Timeline() {
  return (
    <>
      <TimelineContainer>
        <TimelineSectionTitle>Prepare yourself</TimelineSectionTitle>
        <TimelineLine></TimelineLine>
        <TimelineItems>
          <TimelineItem>
            <TimelineTop>
              <TimelineCircle></TimelineCircle>
              <TimelineTitle>Gather the information</TimelineTitle>
            </TimelineTop>
            <TimelineDesc>Your Description Here</TimelineDesc>
          </TimelineItem>
          <TimelineItem>
            <TimelineTop>
              <TimelineCircle></TimelineCircle>
              <TimelineTitle>Upload everything</TimelineTitle>
            </TimelineTop>
            <TimelineDesc>Your Description Here</TimelineDesc>
          </TimelineItem>
          <TimelineItem>
            <TimelineTop>
              <TimelineCircle></TimelineCircle>
              <TimelineTitle>Automatic Preview and testing</TimelineTitle>
            </TimelineTop>
            <TimelineDesc>Your Description Here</TimelineDesc>
          </TimelineItem>
        </TimelineItems>
      </TimelineContainer>

      <TimelineContainer>
        <TimelineSectionTitle>Share</TimelineSectionTitle>
        <TimelineLine></TimelineLine>
        <TimelineItems>
          <TimelineItem>
            <TimelineTop>
              <TimelineCircle></TimelineCircle>
              <TimelineTitle>Share with colleagues</TimelineTitle>
            </TimelineTop>
            <TimelineDesc>Your Description Here</TimelineDesc>
          </TimelineItem>
          <TimelineItem>
            <TimelineTop>
              <TimelineCircle></TimelineCircle>
              <TimelineTitle>Make any consultation you want!</TimelineTitle>
            </TimelineTop>
            <TimelineDesc>Your Description Here</TimelineDesc>
          </TimelineItem>
        </TimelineItems>
      </TimelineContainer>

    </>
  );
}

export default Timeline;
