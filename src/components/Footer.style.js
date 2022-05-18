import Footer from "./Footer";
import styled from "styled-components";

export const StyledFooter = styled(Footer)`
  height:2.5vh;
  bottom: 0;
  width: 100vw;
  z-index: 1000;
  font-size: 10px;
  position: fixed;
  color: aliceblue;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  background-color: #1b3b5f;
  display:flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    height:4.5vh;
  }

`;
