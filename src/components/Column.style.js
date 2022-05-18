import styled from "styled-components";
import { toggle } from "../imports.js";

export const StyledColumn = styled.div`

  h2{
    padding-left: 0;
  }

  .tech-stack-row1 {
    max-width: 45vw;
  }
  .tech-stack-row2 {
    max-width: 45vw;
  }

  .my-image {
    max-width: 464px;

    width: 100%;
  }
  display: flex;
  justify-content: center;
  /* display: ${(props) => toggle(props.primary, "flex", "flex")}; */
  flex-direction: ${(props) => toggle(props.primary, "column", "none")};
  position: ${(props) => toggle(props.primary, "none", "relative")};
  padding: ${(props) =>
    toggle(props.primary, "2rem 2rem", "2rem 2rem 2rem 2rem;")};
  h1 {
    font-size: ${(props) => toggle(props.primary, "3rem", "1rem")};
  }
  p {
    font-size: ${(props) => toggle(props.primary, "1rem", "none")};
    max-width: 700px;
  }

  a {
    /* margin-left:16px; */
    padding: 7px;
    font-size: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: ${(props) => toggle(props.primary, "0 0 0 0", "0")};
    /* margin-bottom: ${(props) => toggle(props.primary, "4rem", "0")}; */

    h2 {
      padding-left: 16px;
      margin-bottom: 0;
      margin-top: 0;
    }

    .tech-stack-row1{
      padding-top:1rem;
      max-width: 100vw;
      text-align: center;
    }
    .tech-stack-row2{
      max-width: 100vw;
      text-align: center;
    }
    

    .about-page-text {
      margin-bottom: 64px;
    }

    .my-image {
      width: 80vw;
      padding: ${(props) => toggle(props.about, "32px 38px 32px 38px", "0")};
    }

    h1 {
      margin-top: 32px;
      padding-bottom: 0;
      font-size: 1.5rem;

    }

    p {
      padding: ${(props) => toggle(props.primary, "1rem")};
    }

    img {
      max-width: 100%;
    }

    button {
      margin-top: 32px;
    }
  }
`;
