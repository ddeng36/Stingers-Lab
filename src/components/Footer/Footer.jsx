import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
  margin-top: 100px;
  background-color: black;
  font-size: var(--fontsm);
  a {
    color: white;
    text-decoration: none;
  }
`;
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer">
          © 2023 StingersLab 粤ICP备2023086959号
        </a>
      </FooterContainer>
    </div>
  );
};

export default Footer;
