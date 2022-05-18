import styled from "styled-components";
import { toggle } from "../imports.js";
export const StyledImage = styled.img`
 
  width:50px;

  padding: ${(props) => toggle(props.about, "0.5rem", "unset")};


  @media screen and (max-width: 768px) {
    width:8vw;
  }
`;

