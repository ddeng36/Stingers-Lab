import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import images from "../../constant/images";
const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    color: rgb(179, 163, 105);
  }

  cursor: pointer;
`;
const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 300px;
  aspect-ratio: 3/4;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 20px;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    left: var(--x, -100px);
    top: var(--y, -100px);
    background: radial-gradient(
      closest-side circle,
      grey 10%,
      transparent
    );
    transform: translate(-50%, -50%);
  }
`;
const Inner = styled.div`
  position: absolute;
  z-index: 3;
  background-color: rgb(240, 248, 255);
  inset: 3px;
  border-radius: inherit;
`;
const ImageContainer = styled.div`
  border-radius: inherit;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  .mainImg {
    transition: opacity 0.5s ease;
    &.fade {
      opacity: 0;
    }
  }
  .secondImg {
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
    &.active {
      opacity: 1;
    }
  }
`;
const Image1 = styled.img``;
const Image2 = styled.img``;
const Title = styled.h1``;
const Tool = (props) => {
    console.log(props)
  const [hover, setHover] = useState(false);
  return (
    <Link
      className="card"
      to={`/tools/${props.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transform: hover ? "scale(1.1)" : "scale(1)",
        transition: "all 0.5s ease-in-out",
        color: "grey",
        textDecoration: "none",
      }}
    >
      <ToolContainer>
        <Container>
          <Inner>
            <ImageContainer>
              <Image1
                src={props.image1}
                alt="tools"
                className={`mainImg ${hover ? "fade" : ""}`}
              />
              <Image2
                src={props.image2}
                alt="tools"
                className={`secondImg ${hover ? "active" : ""}`}
              />
            </ImageContainer>
          </Inner>
        </Container>
        <Title>{props.title}</Title>
      </ToolContainer>
    </Link>
  );
};

export default Tool;
