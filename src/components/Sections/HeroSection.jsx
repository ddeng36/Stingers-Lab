import React from "react";
import styled from "styled-components";
import heroVideo from "../../assets/videos/heroVideo.mp4";
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  background-color: var(--dark);
  overflow: hidden;
`;


const TextContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
  letter-spacing: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;

    @media screen and (max-width: 64em) {
      font-size: var(--fontxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxl);
    }
  }

  @media screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: space-around;
    filter: brightness(1.1);

    margin-top: 100px;
    height: 80vh;
    padding: 0 1rem;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <VideoContainer>
        <video src={heroVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <TextContainer>
        <span>Maker</span>
        <span>Space</span>
      </TextContainer>
    </Section>
  );
};
export default HeroSection;
