import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";


export const StyledSlider = styled(AwesomeSlider)`
  .awssld__content {
    background-color: #1b3b5f;
  }
  .awssld__controls {
    button {
      visibility: hidden;
    }
  }

  text-align: center;
  .video {
    text-align: center;
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    .video {
      text-align: center;
      width: 95%;
    }
  }
`;
