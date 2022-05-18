import files from "../../imports";
import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import { StyledSlider } from "./Slider.style";
import { StyledSlide } from "./Slide.style";

import {AngularCode1, AngularCode2} from "../codeblock/Code"

export default class AngularSlider extends Component {
  render() {
    return (
      <StyledSlider>
        <StyledSlide className="video">
          <ReactPlayer
            url={files.angular.video}
            controls={true}
            width="100%"
            height="100%"
          />
        </StyledSlide>
        <StyledSlide className="sample-code" >
          <AngularCode1/>
        </StyledSlide>
        <StyledSlide className="sample-code" >
        <AngularCode2/>
        </StyledSlide>
      </StyledSlider>
    );
  }
}
