
import files from "../../imports"
import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import { StyledSlider } from "./Slider.style";
import { StyledSlide } from "./Slide.style";
import {CsharpCode1, CsharpCode2} from "../codeblock/Code"

export default class CsharpSlider extends Component {
  render() {
    return (
      <StyledSlider>
        <StyledSlide className="video">
          <ReactPlayer url={files.csharp.video} controls={true} width="100%" height="100%"/>
        </StyledSlide>
        <StyledSlide className="sample-code" >
        <CsharpCode1/>
        </StyledSlide>
        <StyledSlide className="sample-code" >
        <CsharpCode2 />
        </StyledSlide>
      </StyledSlider>
    );
  }
}
