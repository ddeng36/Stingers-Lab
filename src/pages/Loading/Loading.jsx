import React from "react";
import "./Loading.css";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100vh;
  width: 100vw;
  background: #000;
  color: #fff;
  letter-spacing: 10px;
  text-transform: uppercase;
  font-size: var(--fontxl);
  @media screen and (max-width: 500px) {
    font-size: var(--fontxs);
  }

`;
const TextContainer = styled.div`
  
  position: relative;
  display: flex;
  text-align: center;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  position: absolute;
  transition: opacity 1.5s ease;
`;

const Loading = (props) => {
  return (
    <Container loading={props.loading}>
      <div className="hexagon" aria-label="Animated hexagonal ripples">
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
        <div className="hexagon__group">
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
          <div className="hexagon__sector"></div>
        </div>
      </div>
      <TextContainer>
        <Text1 loading={props.loading} num={props.num}>
          Loading{" " + props.num + "%"}
        </Text1>
      </TextContainer>
    </Container>
  );
};

export default Loading;
