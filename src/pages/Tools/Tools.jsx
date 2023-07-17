import React from "react";
import styled from "styled-components";
import StyledInfo from "../../components/StyledInfo/StyledInfo";
import images from "../../constant/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 300vh;
`
const Tools = () => {
  return (
    <div>
      <ToolsContainer>
      <Navbar alwayson={false} active="Tools"/>
      <StyledInfo bg={images.tools} title="Tools" content="AVAILABLE TOOLS FOR YOU" />
      <Footer/>
      </ToolsContainer>
    </div>
  );
};

export default Tools;
