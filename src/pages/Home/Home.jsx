import React, { useState, useEffect } from "react";
import HeroSection from "../../components/Sections/HeroSection";
import MottoSection from "../../components/Sections/MottoSection";
import DisplaySection from "../../components/Sections/DisplaySection";
import CameraSection from "../../components/Sections/CameraSection";
import BuzzModel from "../../components/Model/BuzzModel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const Container = styled.div`
`;
const SliderContainer = styled.div`
  position: absolute;
  bottom: 20px;
  @media screen and (max-width: 500px) {
  bottom: 0px;
  }
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  opacity: ${(props) => (props.visible === "true" ? "1" : "0")};
  transition: opacity 0.3s ease;
`;
const Slider = styled.div`
  width: 20px;
  height: 50px;
  border: 2px solid rgb(179, 163, 105);
  border-radius: 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgb(179, 163, 105);
    animation: animate 1s infinite ease-in-out alternate;
    @keyframes animate {
      to {
        transform: translateY(30px);
      }
    }
  }
`;
const Tip = styled.p`
  text-align: center;
  color: rgb(179, 163, 105);
  font-size: var(--fontmd);
  @media screen and (max-width: 500px) {
    font-size: var(--fontxs);
    }
`;
const Home = () => {
  const [sliderVisible, setSliderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setSliderVisible(false);
      } else {
        setSliderVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container>
          <Navbar alwayson={true} active="Home" />
          <SliderContainer visible={sliderVisible.toString()}>
            <Slider />
            <Tip>Scroll to see more</Tip>
          </SliderContainer>
          <HeroSection />
          <MottoSection />
          <DisplaySection />
          <CameraSection />
          <BuzzModel />
          <Footer />
      </Container>
    </div>
  );
};

export default Home;
