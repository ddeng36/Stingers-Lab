import React, { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";


const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: var(--dark);
  color: var(--white);
`;
const moveUp = keyframes`
    100%{
        transform: translateY(0);
    }
`;
const Text = styled.p`
  position: relative;
  overflow: hidden;
  width: 50%;
  height: var(--fontlg);
  font-size: var(--fontlg);
  overflow: hidden;
  span {
    position: absolute;
    transform: translateY(4rem);
    animation: ${moveUp} 1s ease-in-out ${(props) => props.delay}s forwards;
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
  }
  @media screen and (max-width: 1290px){
    
    width: 60%;
  }
    @media screen and (max-width: 900px) {
    width: 60%;
    font-size: var(--fontmd);}
    @media screen and (max-width: 768px) {
    width: 90%;
    font-size: var(--fontsm);
    }
`;
const Quote = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

   let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
    return () => {
      if (trigger) {
        trigger.kill();
      }
    }

  }, []);
  
  return (
    <Section ref={sectionRef}>
      <TextContainer>
        <Text delay='0'>
          <span>&#8220;We celebrate collaboration, champion innovation.</span>
        </Text>
        <Text delay='0.4'>
          <span>
            &nbsp;&nbsp;We strive for excellence, thrive on diversity.
          </span>
        </Text>
        <Text delay='0.8'>
          <span>&nbsp;&nbsp;We are committed to ethical behavior.</span>
        </Text>
        <Text delay='1.2'>
          <span>&nbsp;&nbsp;We are responsible stewardship.&#8221;</span>
        </Text>
        <Text delay='1.6'>
          <span className="author">&#x23AF; &#193;ngel Cabrera</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quote;
