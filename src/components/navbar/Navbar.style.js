import StyledLink from "./Link.style";
import StyledLogo from "./Logo.style";
import StyledMenu from "./Menu.style";
import styled from "styled-components";
import React, { useState } from "react";
import StyledHamburger from "./Hamburger.style";

const StyledNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <StyledLogo to="/adriangenosa">
        <div logo className="logo">
          AG
        </div>
      </StyledLogo>
      <>
        <StyledHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </StyledHamburger>
      </>
      <StyledMenu isOpen={isOpen}>
        <StyledLink to="/adriangenosa" onClick={() => setIsOpen(!isOpen)}>
          Home
        </StyledLink>
        <StyledLink
          className="link"
          to="/projects"
          onClick={() => setIsOpen(!isOpen)}
        >
          Projects
        </StyledLink>
        <StyledLink
          className="link"
          to="/about"
          onClick={() => setIsOpen(!isOpen)}
        >
          About
        </StyledLink>
        <StyledLink
          className="link"
          to="/contact"
          onClick={() => setIsOpen(!isOpen)}
        >
          Contact
        </StyledLink>
      </StyledMenu>
    </Nav>
  );
};

const Nav = styled.nav`
/* height:10vh; */
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  align-items: center;
  background: #1b3b5f;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding-top: 16px;
    
  }
  
`;

export default StyledNavbar;
