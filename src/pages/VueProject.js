import React from "react";
import files from "../imports";
import { motion } from "framer-motion";
import { StyledImage } from "../components/Image.style";
import VueSlider from "../components/carousel/VueSlider";
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
        <ProjectContainer>
          <VueSlider />
          <div className="project-header">
            <div className="project-header-text">
              <h1>Artists Directory</h1>
            </div>
            <Tooltip title="Vue">
              <StyledImage about src={files.vue.logo} />
            </Tooltip>
          </div>
          <p>
            For this project, we learned how to use the Javascript framework
            Vue. This web application allows the user to add a new musician, as
            well as deleting one. The user also has the option to enter an image
            url, description, as well as the ability to filter musicians by
            typing in a search term.
          </p>
        </ProjectContainer>
      </motion.div>
    </StyledSection>
  );
}
