import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import StyledInfo from "../../components/StyledInfo/StyledInfo";
import images from "../../constant/images";
import { Amap, Marker } from "@amap/amap-react";
import Footer from "../../components/Footer/Footer";
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
const ContactContainer = styled.div`
  width: 80%;
  height: auto;
  text-align: center;
  margin-bottom: 50px;
`;
const ContactTitle = styled.h1`
  font-size: var(--fontlg);
  letter-spacing: 5px;
  margin-bottom: 10px;
`;
const ContactContent = styled.p`
  font-size: var(--fontmd);
  color: var(--grey);
`;

const MapContainer = styled.div`
  width: 500px;
  height: 500px;
  @media screen and (max-width: 500px) {
  height: 300px;
  }
    margin-bottom: 50px;
`;
const TeamContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  height: auto;
  text-align: center;
  margin-bottom: 50px;
`;
const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StudentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
`;
const PersonTitle = styled.h1`
  font-size: var(--fontlg);
  color: rgb(179, 163, 105);
`;
const PersonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const PersonImg = styled.img`
  width: 400px;
  height: 600px;
  object-fit: cover;
`;
const PersonName = styled.h1``;
const PersonEmail = styled.p`
  color: var(--grey);
  font-size: var(--fontmd);
`;

const About = () => {
  return (
    <div>
      <Navbar alwayson={false} active="About"/>
      <AboutContainer>
        <ContactWrapper>
          <StyledInfo
            bg={images.about}
            title="Contact Us"
            content="FIND US HERE"
          />
          <ContactContainer>
            <ContactTitle>EMAIL:</ContactTitle>
            <ContactContent>fandi@gatech.edu</ContactContent>
          </ContactContainer>
          <ContactContainer>
            <ContactTitle>ADDRESS:</ContactTitle>
            <ContactContent>
              Room 519, 5F, Building 6B, International Innovation Valley, Dashi
              1st Rd, Shenzhen, Guangdong 518055 CHINA
            </ContactContent>
          </ContactContainer>
          <MapContainer>
            <Amap
              mapStyle="amap://styles/light"
              zoom={15}
              center={[113.945113, 22.572995]}
              lang="en"
            >
              <Marker
                position={[113.945113, 22.572995]}
                label={{
                  content: "Hello, StingersLab!",
                  direction: "bottom",
                }}
              />
            </Amap>
          </MapContainer>
        </ContactWrapper>
        <TeamContainer>
          <StyledInfo
            bg={images.team}
            title="Our Team"
            content="THE BEST AND BRIGHTEST"
          />
          <PersonContainer>
            <PersonTitle>Makerspace Manager</PersonTitle>
            <PersonContent>
              <PersonImg src={images.fandi} />
              <PersonName>Fandi Peng</PersonName>
              <PersonEmail>fandi@gatech.edu</PersonEmail>
            </PersonContent>
          </PersonContainer>
          <StudentContainer>
            <PersonContainer>
            <PersonTitle>Student Assistant</PersonTitle>
            <PersonContent>
              <PersonImg src={images.kk} />
              <PersonName>Zhikang Wang</PersonName>
              <PersonEmail>zwang3396@gatech.edu</PersonEmail>
            </PersonContent>
            </PersonContainer>
            <PersonContainer>
            <PersonTitle>Student Assistant</PersonTitle>
            <PersonContent>
              <PersonImg src={images.lx} />
              <PersonName>Xiao Lin</PersonName>
              <PersonEmail>xlin350@gatech.edu</PersonEmail>
            </PersonContent>
            </PersonContainer>
            <PersonContainer>
            <PersonTitle>Student Assistant</PersonTitle>
            <PersonContent>
              <PersonImg src={images.dd} />
              <PersonName>Dingchao Deng</PersonName>
              <PersonEmail>dingchaodeng@gatech.edu</PersonEmail>
            </PersonContent>
            </PersonContainer>
          </StudentContainer>
        </TeamContainer>
      </AboutContainer>
      <Footer />
    </div>
  );
};

export default About;
