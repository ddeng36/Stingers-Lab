import React, { useRef , useLayoutEffect} from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
const Section = styled.section`
  width: 100vw;
  min-height: 200vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--dark);
  color: var(--white);

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;

    @media screen and (max-width: 48em) {
      margin-right: 1rem;
    }
  }
  & > *:nth-child(odd) {
    margin-left: 4rem;

    @media screen and (max-width: 48em) {
      margin-left: 1rem;
    }
  }

`;
const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  letter-spacing: 2px;
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  color: rgb(179, 163, 105);
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;

const TextBlockRight = styled.div`
z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;
  @media screen and (max-width: 64em) {
    font-size: var(--fontmd);
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  margin-bottom: 0.5rem;
  width: 55%;
  @media screen and (max-width: 64em) {
    width: 70%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontsm);
  }
`;
const TextBlockLeft = styled.div`
z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;


const TextContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transform: rotate(-25deg);
z-index: 1;
margin-bottom: 4rem;
`;

const MovingText = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgb(179, 163, 105);
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`
gsap.registerPlugin(ScrollTrigger);

const DisplaySection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "-40%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "40%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <Section >
      <MainTitle>
        蜂芒实验室 <br /> Stingers Lab
      </MainTitle>
      <TextBlockRight>
        <Title>Space for realizing ideas.</Title>
        <Text>
        The lab is fully equipped with a variety of tools and materials so you can turn your ideas into reality in the lab.
        </Text>
      </TextBlockRight>
      <TextBlockLeft ref={container}>
        <Title>Hub for making things.</Title>
        <Text>
         Currently, there are various projects going on in the lab, covering technical domains, including 3D modelling & printing, mechanical & industrial design, loT and app development.
        </Text>
      </TextBlockLeft>

      <TextContainer>
        <MovingText ref={textOne}>Feel free to stop by.</MovingText>
        <MovingText ref={textTwo}>Share your ideas with us!</MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;
