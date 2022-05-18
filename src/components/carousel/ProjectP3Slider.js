import files from "../../imports";
import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import { StyledSlider } from "./Slider.style";
import { StyledSlide } from "./Slide.style";


export default class ProjectP3Slider extends Component {
  render() {
    return (
      <StyledSlider>
        <StyledSlide className="video">
          <ReactPlayer
            url={files.projectp3.video}
            controls={true}
            width="100%"
            height="100%"
          />
        </StyledSlide>
      </StyledSlider>
    );
  }
}
