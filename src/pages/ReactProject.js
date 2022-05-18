


import React from "react";
import files from "../imports";
import { motion } from "framer-motion";
import { StyledImage } from "../components/Image.style";
import ReactSlider from "../components/carousel/ReactSlider";
import ProjectContainer from "../components/ProjectContainer.style";
import { StyledSection } from "../components/SectionContainer.style";
import Tooltip from "@mui/material/Tooltip";

export default function ReactProject() {
  return (
    <StyledSection project>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <ProjectContainer>
          <ReactSlider />
          <div className="project-header">
            <div className="project-header-text">

            <h1>Portfolio</h1>
            </div>
            <Tooltip title="React/React Native">
            <StyledImage about src={files.react.logo} />
          </Tooltip>
          </div>
          <p>
          For my portfolio website, I used React as it's framework. I had a
            lot of fun with this one because I was able to discover and utilize
            new libraries and npm packages such as Material UI, Styled
            Components, Framer Motion and Awesome Slider. I must say that I
            learned a lot about front-end development while completing this
            portfolio project.
          </p>
        </ProjectContainer>
      </motion.div>
    </StyledSection>
  );
}

