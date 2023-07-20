import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import detailedInfo from "../../constant/detailedInfo";
import StyledInfo from "../StyledInfo/StyledInfo";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Container = styled.div`
  width: 100vw;
`;

const VedioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 100px;
  width: 80vw;
`;

const VedioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Vedio = styled.video`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: var(--fontlg);
`;

const DetailedTool = () => {
  const id = parseInt(useParams().tool) - 1;
  const [loadVideos, setLoadVideos] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadVideos(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById("vedioContainer");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <div>
      <Navbar alwayson={false} active="Tools" />
      <Container>
        <StyledInfo
          bg={detailedInfo[id].image}
          title={detailedInfo[id].title}
          content="TUTORIALS"
        />
        <VedioContainer id="vedioContainer">
          {loadVideos &&
            detailedInfo[id].videos.map((video) => (
              <VedioWrapper key={video.id}>
                <Title>{video.title}</Title>
                <Vedio src={video.src} controls />
              </VedioWrapper>
            ))}
        </VedioContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default DetailedTool;
