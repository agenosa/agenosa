import styled from "styled-components";
import { toggle } from "../imports.js";

export const StyledSection = styled.div`
  padding: 32px;

  .home-button-container {
    margin-top: 32px;
    display: flex;
  }

  display: ${(props) => toggle(props.project, "grid", "flex")};
  padding: ${(props) => toggle(props.project, "0", "27px 0")};
  align-items: center;
  flex-direction: ${(props) => toggle(props.contact, "column", "none")};
  justify-content: ${(props) =>
    toggle(props.contact, "space-evenly", "center")};
  flex-wrap: ${(props) => toggle(props.projects, "wrap", "nowrap")};
  justify-content: ${(props) =>
    toggle(props.projects, "space-around", "center")};
  height: ${(props) => toggle(props.projects, "100%", "82.2vh")};

  .contact_icons {
    transform: scale(2.5);
  }

  .vancouver-map {
    border-radius: 20px;
    max-width: 920px;
    width: 100%;
  }

  @media screen and (max-width: 1080px) {
    height: ${(props) => toggle(props.projects, "79vh", "unset")};
    h1 {
      font-size: 5vw;
    }
    padding: 32px;
  }

  @media screen and (max-width: 768px) {
    height: ${(props) => toggle(props.home, "79vh", "unset")};
    padding: ${(props) => toggle(props.about, "0 1rem 2rem 1 rem", "0")};

    display: flex;
    position: relative;
    margin: ${(props) => toggle(props.projects, "8px", "32px")};
    flex-direction: ${(props) =>
      toggle(props.home, "column-reverse", "column")};

    h1 {
      margin-bottom: ${(props) => toggle(props.home, "2rem", "0")};
      margin-bottom: ${(props) => toggle(props.contact, "3rem", "0")};
      font-size: 32px;
      font-size: 5vw;
    }
    .contact_icons {
      transform: scale(1.5);
    }

    .contact-link {
      margin-left: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    overflow: ${(props) => toggle(props.home, "hidden", null)};
    height: ${(props) => toggle(props.home, "null", "auto")};
    padding: ${(props) => toggle(props.home, "0", null)};
    margin: ${(props) => toggle(props.contact, null, "0")};

    h1 {
      font-size: 5vw;
    }

    .vancouver-map {
      display: none;
    }
  }
`;
