import React from "react";
import styled from "styled-components";
import StyledInfo from "../../components/StyledInfo/StyledInfo";
import images from "../../constant/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Tool from "../../components/Tool/Tool";
import previewInfo from "../../constant/previewInfo";
const ToolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 15vw;
`;
;

const Tools = () => {
  // log each Tool component's mouse position
  React.useEffect(() => {
    const container = document.querySelector(".container");
    const cards = document.querySelectorAll(".card");
    const handleMouseMove = (e) => {
      const { left, top } = container.getBoundingClientRect();
      cards.forEach((card) => {
        const cardX = card.getBoundingClientRect().left - left;
        const cardY = card.getBoundingClientRect().top - top;
        card.style.setProperty("--x", `${e.clientX - cardX}px`);
        card.style.setProperty("--y", `${e.clientY - cardY}px`);
      });
    }
    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    }

  }, []);
  
  return (
    <div>
    <Navbar alwayson={false} active="Tools" />
      <ToolsContainer>
        <StyledInfo
          bg={images.tools}
          title="Tools"
          content="AVAILABLE TOOLS FOR YOU"
        />
        
        <CardContainer className="container">
          {previewInfo.map((info) => (
            <Tool
              key={info.id}
              id={info.id}
              title={info.title}
              image1={info.image1}
              image2={info.image2}
              />
          ))}
        </CardContainer>
        <Footer />
      </ToolsContainer>
    </div>
  );
};

export default Tools;
