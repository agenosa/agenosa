import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  font-family: 'Major Mono Display', monospace;
  color: aliceblue;

  margin: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  text-align: center;
  .logo {
    transition: all 0.3s ease-in;
    border: 1.75px solid #fff;

    &:hover {
      box-shadow: inset 64px 0 0 0 #008cbe;
    }
    padding:0.5rem;
  }

`;

export default StyledLogo