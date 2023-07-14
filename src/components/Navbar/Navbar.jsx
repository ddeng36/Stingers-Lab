import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background: ${props => (window.scrollY >= 10 || props.alwayson === 'true'? "rgba(0, 0, 0, 0.8)" : "transparent")};
  transition: transform 0.3s ease;
  transform: translateY(${props => (props.visible === 'true' ? "0" : "-100%")});
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
  color: ${props => (props.className === "active" ? "rgb(179, 163, 105)" : "white")};
  &:hover {
    color: rgb(179, 163, 105);
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
`;

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
};

const Navbar = (props) => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    if(props.alwayson){
      setNavbarVisible(true);
      return;
    }
    else{
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const scrollThreshold = screenHeight * 1; 
      setNavbarVisible( scrollPosition > scrollThreshold || scrollPosition == 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };}
  }, []);

  return (
    <div>
      <NavbarContainer visible={navbarVisible.toString()} alwayson={props.alwayson.toString()}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <TitleContainer>
            <Title>StingersLab</Title>
            <Title>@ GEORGIA TECH-SHENZHEN</Title>
          </TitleContainer>
        </Link>
        <ListContainer>
          <Link to="/" style={linkStyle}><Item className={props.active === "Home"?  "active" :""}>Home</Item></Link>
          <Link to="/about" style={linkStyle}><Item className={props.active === "About"?  "active" :""}>About</Item></Link>
          <Link to="/getting-start" style={linkStyle}><Item className={props.active === "Start"?  "active" :""}>Getting Start</Item></Link>
          <Link to="/tools" style={linkStyle}><Item className={props.active === "Tools"?  "active" :""}>Tools & Resources</Item></Link>
          <Link to="/projects" style={linkStyle}><Item className={props.active === "Projects"?  "active" :""}>Projects Portfolio</Item></Link>
        </ListContainer>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
