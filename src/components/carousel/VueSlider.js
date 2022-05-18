import files from "../../imports"
import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import { StyledSlider } from "./Slider.style"
import {VueCode1, VueCode2} from "../codeblock/Code"
import { StyledSlide } from "./Slide.style";
export default class VueSlider extends Component {
  render() {
    return (
      <StyledSlider individual>
        <StyledSlide className="video">
          <ReactPlayer url={files.vue.video} controls={true} width="100%" height="100%"/>
        </StyledSlide>
        <StyledSlide className="sample-code">
          <VueCode1 /> 
        </StyledSlide>
        <StyledSlide className="sample-code" >
          <VueCode2 />
        </StyledSlide>
      </StyledSlider>
    );
  }
}
