import React from "react";
import styled from "styled-components";
import documentation from "../../constant/documentation";
import images from "../../constant/images";
import prj1 from "../../assets/videos/prj1.mp4";
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60vw;
  font-size: var(--fontmd);
  @media screen and (max-width: 768px) {
    width: 90vw;
    font-size: var(--fontsm);
  }
  text-align: center;
  color: var(--grey);
  b {
    color: black;
    font-weight: bolder;
  }
`;
const Title = styled.h1`
  font-size: var(--fontlg);
  @media screen and (max-width: 768px) {
    width: 95vw;
    font-size: var(--fontmd);
  }
  color: rgb(179, 163, 105);
  text-align: center;
  margin-bottom: 20px;
`;
const Maker = styled.div``;
const Documentation = styled.div`
  a {
    color: var(--grey);
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5em;
`;
const DescriptionTitle = styled.div``;
const Description = styled.div``;

const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Photos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Photo = styled.img``;
const Video = styled.video`
  width: 100%;
  height: auto;
`;
const ProjectAlex = () => {
  return (
    <ProjectContainer>
      <Title>
        Dynamic Flash Card Device for Learning to Write Chinese Characters
      </Title>
      <Maker>
        <b>Maker: &nbsp;</b>Alexander Buddenbaum
      </Maker>
      <Documentation>
        <b>Documentation: &nbsp;</b>
        <a href={documentation.alex} download>
          Click here to download
        </a>
      </Documentation>
      <DescriptionContainer>
        <DescriptionTitle>
          <b>Description: &nbsp;</b>
        </DescriptionTitle>
        <Description>
          A low-cost and low-power, handheld device is an effective supplement
          to existing learning materials and online tools for learning to write
          Chinese. The flash card device shows promise for beginner and
          intermediate learners without access to high-end mobile devices or
          reliable internet connectivity, as well as students seeking to
          eliminate the distractions presented by content-rich mobile
          technologies. Further development is required before making this tool
          accessible to the broader Chinese language learning market.
        </Description>
      </DescriptionContainer>
      <PhotosContainer>
        <b>Photos & Vedios:</b>
        <Video src={prj1} type="video/mp4" controls loop />
        <Photos>
          <Photo src={images.prj1_1} />
          <Photo src={images.prj1_2} />
          <Photo src={images.prj1_3} />
        </Photos>
      </PhotosContainer>
    </ProjectContainer>
  );
};

export default ProjectAlex;
