import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Link } from "react-router-dom";


const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;
const V1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;
const V2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 50%;
  height: 50vh;

  z-index: 1;

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`;
const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  & > *:nth-child(2) {
    margin-left: 0rem;
  }
  & > *:nth-child(3) {
    margin-left: 19.5rem;
    @media screen and (max-width: 40em) {
      margin-left: 10rem;
    }
  }

  @media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 0;
    right: 40%;
  }
`;
const Title = styled.h1`
  font-size: var(--fontBig);
  z-index: 5;
  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxxl);
  }
`;
const Explore = styled.button`
  position: absolute;
  top: 80%;
  left: calc(50% - 100px);
  width: 200px;
  height: 50px;
  color: #fff;
  font-size: var(--fontmd);
  font-weight: 600;
  border-radius: 10px;
  border: 0px;
  position: relative;
  background-color: transparent;

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
      45deg,
      red,
      orange,
      yellow,
      green,
      blue,
      purple,
      red
    );
    filter: blur(5px);
    background-size: 1000%;
    animation: amSize 30s ease-in-out infinite;
    @keyframes amSize {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 1000% 0;
      }
    }
  }
`;

const CameraSection = () => {
  const sectionRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);
  // if it is not Andriod, render the video
  const isAndriod = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;

  // make it play automatically in wechat browser for ios
  document.addEventListener(
    "WeixinJSBridgeReady",
    function () {
      document.getElementById("v1").play();
    },
    false
  );
  document.addEventListener(
    "WeixinJSBridgeReady",
    function () {
      document.getElementById("v2").play();
    },
    false
  );


  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;

    // gsap.to(Elem, {
    //   scrollTrigger: {
    //     trigger: Elem,
    //     start: "top top",
    //     end: `bottom bottom`,
    //     scrub: 1,
    //     pin: true,
    //     pinSpacing: true,
    //     markers: true,

    //   },
    // });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top-=200 top",
          end: `bottom bottom`,
          scrub: 1,
        },
      })
      .to(video1Elem, { scale: 0.35 }, "key1")
      .to(video2Elem, { scale: 0.6 }, "key1");
    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="camera">
      {!isAndriod && (
        <>
          <V1
            ref={videoRef1}
            id="v1"
            src="/v1.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            playsInline={true}
            webkit-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
          />
          <V2
            ref={videoRef2}
            id="v2"
            src="/v2.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            playsInline={true}
            webkit-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
          />
        </>
      )}
      <TitleContainer ref={titleRef}>
        <Title>Join</Title>
        <Title>us</Title>
        <Title>NOW!</Title>
      </TitleContainer>
      <Explore>
        <span></span>
        <Link
          to={"/getting-start"}
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          EXPLORE
        </Link>
      </Explore>
    </Section>
  );
};

export default CameraSection;
