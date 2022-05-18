import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: aliceblue;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  letter-spacing: 3px;

  &:hover {
    box-shadow: inset 145px 0 0 0 #008cbe;

  }
`;

export default StyledLink