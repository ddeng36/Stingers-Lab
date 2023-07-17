import React from "react";
import styled from "styled-components";
const StyledInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
  margin-bottom: 100px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media screen and (max-width: 700px) {

  background-attachment: scroll;
  }
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(179, 163, 105, 0.25); */
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const InfoContainer = styled.div`
  width: 100%;
  text-align: center;
  z-index: 1;
`;
const InfoTitle = styled.h1`
  color: white;
  font-size: var(--fontxxxl);
  @media screen and (max-width: 700px) {
    font-size: var(--fontxxl);
  }
  letter-spacing: 5px;
  margin-bottom: 20px;
`;
const InfoContent = styled.p`
  color: rgb(179, 163, 105);
  font-size: var(--fontlg);
  @media screen and (max-width: 700px) {
    font-size: var(--fontmd);
  }
  letter-spacing: 2px;
`;

const StyledInfo = (props) => {
  return (
    <div>
      <StyledInfoContainer img={props.bg}>
        <InfoContainer>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoContent>{props.content}</InfoContent>
        </InfoContainer>
      </StyledInfoContainer>
    </div>
  );
};

export default StyledInfo;
