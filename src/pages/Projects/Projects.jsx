import React from "react";
import styled from "styled-components";
import StyledInfo from "../../components/StyledInfo/StyledInfo";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProjectAlex from "../../components/Project/ProjectAlex";
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
`
const Projects = () => {
  return (
    <div>

<Navbar alwayson={false} active="Projects" />
      <ProjectsContainer>
        <StyledInfo
          bg='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/projects.jpg'
          title="Projects"
          content="PROJECTS BY MAKERSPACE USERS"
        />
        <ProjectAlex/>
        <Footer />
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
