import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: calc(100vw - 100px);
  height: 80px;
  padding: 0 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: ${(props) =>
    window.scrollY >= 10 || props.alwayson === "true" || props.listvisible == "true"
      ? "rgba(0, 0, 0, 0.8)"
      : "transparent"};
  transition: all 0.5s ease-in-out;
  transform: translateY(
    ${(props) => (props.visible === "true" ? "0" : "-100%")}
  );
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
  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;
const MenuContainer = styled.div`
  color: white;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1300px) {
    display: block;
  }
  
`;
const ListContainer = styled.ul`
  @media screen and (max-width: 1300px) {
    position: fixed;
    top: 80px;
    right: 0px;
    transform: ${(props) =>
      props.visible === "true" ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.5s ease-in-out;
     
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    padding-top: 20px;
  }
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style: none;
  font-weight: 800;
`;

const Item = styled.li`
  color: ${(props) =>
    props.className === "active" ? "rgb(179, 163, 105)" : "white"};
  &:hover {
    color: rgb(179, 163, 105);
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
  text-align: center;
`;

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const Navbar = (props) => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [listVisible, setListVisible] = useState(false);

  useEffect(() => {
    if (props.alwayson) {
      setNavbarVisible(true);
      return;
    } else {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;
        const scrollThreshold = screenHeight * 1;
        setNavbarVisible(
          scrollPosition > scrollThreshold || scrollPosition === 0
        );
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div>
      <NavbarContainer
        visible={navbarVisible.toString()}
        alwayson={props.alwayson.toString()}
        listvisible={listVisible.toString()}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <TitleContainer>
            <Title>StingersLab</Title>
            <Title>@ GEORGIA TECH - SHENZHEN</Title>
          </TitleContainer>
        </Link>
        <ListContainer visible={listVisible.toString()} >
          <Link to="/" style={linkStyle}>
            <Item className={props.active === "Home" ? "active" : ""}>
              Home
            </Item>
          </Link>
          <Link to="/about" style={linkStyle} >
            <Item className={props.active === "About" ? "active" : ""}>
              About
            </Item>
          </Link>
          <Link to="/getting-start" style={linkStyle}>
            <Item className={props.active === "Start" ? "active" : ""}>
              Getting Started
            </Item>
          </Link>
          <Link to="/tools" style={linkStyle}>
            <Item className={props.active === "Tools" ? "active" : ""}>
              Tools & Resources
            </Item>
          </Link>
          <Link to="/projects" style={linkStyle}>
            <Item className={props.active === "Projects" ? "active" : ""}>
              Projects Portfolio
            </Item>
          </Link>
        </ListContainer>
        <MenuContainer >
          <MenuIcon onClick={() => setListVisible(true)} style={{display: listVisible ? "none" : "block"}}/>
          <CloseIcon onClick={() => setListVisible(false)} style={{display: listVisible ? "block" : "none"}}/>
        </MenuContainer>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
