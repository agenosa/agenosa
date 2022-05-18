import files from "../../imports"
import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import { StyledSlider } from "./Slider.style"
import {ReactCode1, ReactCode2} from "../codeblock/Code"
import { StyledSlide } from "./Slide.style";
export default class ReactSlider extends Component {
  render() {
    return (
      <StyledSlider>
        <StyledSlide className="video">
          <ReactPlayer url={files.react.video} controls={true} width="100%" height="100%"/>
        </StyledSlide>
        <StyledSlide className="sample-code">
          <ReactCode1 /> 
        </StyledSlide>
        <StyledSlide className="sample-code" >
          <ReactCode2 />
        </StyledSlide>
      </StyledSlider>
    );
  }
}
