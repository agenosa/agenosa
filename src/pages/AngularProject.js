import React from "react";
import files from "../imports";
import { motion } from "framer-motion";
import { StyledImage } from "../components/Image.style";
import AngularSlider from "../components/carousel/AngularSlider";
import ProjectContainer from "../components/ProjectContainer.style";
import { StyledSection } from "../components/SectionContainer.style";
import Tooltip from "@mui/material/Tooltip";

export default function VueProject() {
  return (
    <StyledSection project>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <ProjectContainer className="first-project">
          <AngularSlider />
          <div className="project-header">
            <div className="project-header-text">
              <h1>Movie Database</h1>
            </div>
            <Tooltip title="Angular">
              <StyledImage about src={files.angular.logo} />
            </Tooltip>
          </div>
          <p>
            For this web application, we used Angular as our JavaScript
            Framework. The goal for this project was to dynamically display data
            via categories through an API called TheMovieDB. I thought that this
            was an interesting project because we got to learn about TypeScript
            as well.
          </p>
        </ProjectContainer>
      </motion.div>
    </StyledSection>
  );
}
