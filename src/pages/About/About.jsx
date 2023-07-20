import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import StyledInfo from "../../components/StyledInfo/StyledInfo";
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

const Img = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 50px;
  object-fit: cover;
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
  width: 80%;
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
const PersonSkills = styled.p`
  font-size: var(--fontmd);
`;
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
            bg={"https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/about.png"}
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
          <ContactContainer>
            <ContactTitle>WECHAT:</ContactTitle>
            <Img src='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/wechat.jpg' />
          </ContactContainer>
        </ContactWrapper>
        <TeamContainer>
          <StyledInfo
            bg='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/team.jpg'
            title="Our Team"
            content="LAB OPERATION & TECHNICAL SUPPORT"
          />

          <StudentContainer>
          <PersonContainer>
            <PersonTitle>Fandi Peng</PersonTitle>
            <PersonContent>
              <PersonImg src='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/fandi.jpg' />
              
              <PersonEmail>fandi@gatech.edu</PersonEmail>
              <PersonSkills>IoT</PersonSkills>
            </PersonContent>
          </PersonContainer>
            <PersonContainer>

            <PersonTitle>Zhikang Wang</PersonTitle>
            <PersonContent>
              <PersonImg src='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/kk.png' />
              <PersonEmail>zwang3396@gatech.edu</PersonEmail>
              <PersonSkills>Mechanical Design</PersonSkills>
            </PersonContent>
            </PersonContainer>
            <PersonContainer>
            <PersonTitle>Xiao Lin</PersonTitle>
            <PersonContent>
              <PersonImg src='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/lx.png' />
              <PersonEmail>xlin350@gatech.edu</PersonEmail>

              <PersonSkills>Hardware & Embedded</PersonSkills>
            </PersonContent>
            </PersonContainer>

            <PersonContainer>
            <PersonTitle>Runqing Chen</PersonTitle>
            <PersonContent>
              <PersonImg src='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/mt.jpg' />
              <PersonEmail>rcheng77@gatech.edu</PersonEmail>
              <PersonSkills>Industrial Design & 3D Modeling</PersonSkills>
            </PersonContent>
            </PersonContainer>

            <PersonContainer>
            <PersonTitle>Mingxuan Xie</PersonTitle>
            <PersonContent>
              <PersonImg src='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/xmx.jpg' />
              <PersonEmail>mxie76@gatech.edu</PersonEmail>
              <PersonSkills>Hardware & Power Electronics</PersonSkills>
            </PersonContent>
            </PersonContainer>
            <PersonContainer>
            
            <PersonTitle>Dingchao Deng</PersonTitle>
            <PersonContent>
              <PersonImg src='https://stingerslab.s3.cn-north-1.amazonaws.com.cn/images/dd.jpg' />
              <PersonEmail>ddeng36@gatech.edu</PersonEmail>
              <PersonSkills>Software</PersonSkills>
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
