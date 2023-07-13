import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import DisplaySection from "../../components/Sections/DisplaySection";
import CameraSection from "../../components/Sections/CameraSection";
import StyledNavbar from "../../components/Navbar/StyledNavbar";
const AboutContainer = styled.div`
  width: 100vw;
  height: 300vh;
  background: black;
`;
const About = () => {
  return (
    <div>
      <Navbar />
      <StyledNavbar/>
      <AboutContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
