import styled from "styled-components";
import { Link } from "react-router-dom";

import {toggle} from "../imports.js"

export const StyledButton = styled(Link)`
  width: 200px;
  height: 50px;
  color:white;
  background-color:transparent;
      cursor: pointer;
      border: 1.75px solid #fff;
      font-size: 1.2rem;
      text-align:center;
      align-items:center;
      text-decoration: none;
      border-radius: 1px;
      transition: all 0.3s ease-in;
      &:hover {
      box-shadow: ${(props) => toggle(props.about, "inset 111px 0 0 0 #008cbe;", "inset 218px 0 0 0 #008cbe;")}; 
    }
`;
