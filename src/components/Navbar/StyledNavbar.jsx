import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../assets/images/hero.jpg"
const StyledNavbarContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 400px;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(179, 163, 105, 0.15);
  }
`;
const InfoContainer = styled.div`

`

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 100px);
  height: 80px;
  padding: 0 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: transparent;
  transition: transform 0.3s ease;
`;

const TitleContainer = styled.div`
  &:hover {
    color: rgb(179, 163, 105);
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style: none;
  font-weight: 800;
`;

const Item = styled.li`
  &:hover {
    color: rgb(179, 163, 105);
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
`;

const linkStyle = {
  textDecoration: "none",
  color: "white",
};
const StyledNavbar = () => {
  return (
    <div>
      <StyledNavbarContainer>
        <NavbarContainer>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <TitleContainer>
              <Title>THE MAKERSPACE</Title>
              <Title>@ GEORGIA TECH-SHENZHEN</Title>
            </TitleContainer>
          </Link>
          <ListContainer>
            <Link to="/" style={linkStyle}>
              <Item>Home</Item>
            </Link>
            <Link to="/about" style={linkStyle}>
              <Item>About</Item>
            </Link>
            <Link to="/getting-start" style={linkStyle}>
              <Item>Getting Start</Item>
            </Link>
            <Link to="/tools" style={linkStyle}>
              <Item>Tools & Resources</Item>
            </Link>
            <Link to="/projects" style={linkStyle}>
              <Item>Projects Portfolio</Item>
            </Link>
          </ListContainer>
        </NavbarContainer>
      </StyledNavbarContainer>
    </div>
  );
};

export default StyledNavbar;
