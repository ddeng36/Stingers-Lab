import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
  margin-top: 100px;
  background-color: black;
  color: white;
  font-size: var(--fontsm);
`;
const Footer = () => {
  return (
    <div>
      <FooterContainer>©Georgia Tech-Shenzhen StingersLab, 2023  </FooterContainer>
    </div>
  );
};

export default Footer;
