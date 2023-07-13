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
  height: ${props => (props.visible === 'true'? "80px" : "200px")};
  padding: 0 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: black;
  transition: transform 0.3s ease;
  transform: translateY(${props => (props.visible === 'true'? "0" : "-100%")});
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
  textDecoration: 'none',
  color: 'white'
};

const Navbar = (props) => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    if(props.alwayson){
      setNavbarVisible(true);
      return;
    }
    else{
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const scrollThreshold = screenHeight * 1; // 设置滚动阈值

      setNavbarVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };}
  }, []);

  return (
    <div>
      <NavbarContainer visible={navbarVisible.toString()} >
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <TitleContainer>
            <Title>THE MAKERSPACE</Title>
            <Title>@ GEORGIA TECH-SHENZHEN</Title>
          </TitleContainer>
        </Link>
        <ListContainer>
          <Link to="/" style={linkStyle}><Item>Home</Item></Link>
          <Link to="/about" style={linkStyle}><Item>About</Item></Link>
          <Link to="/getting-start" style={linkStyle}><Item>Getting Start</Item></Link>
          <Link to="/tools" style={linkStyle}><Item>Tools & Resources</Item></Link>
          <Link to="/projects" style={linkStyle}><Item>Projects Portfolio</Item></Link>
        </ListContainer>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
