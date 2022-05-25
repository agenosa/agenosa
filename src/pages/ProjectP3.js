import React from "react";
import files from "../imports";
import { motion } from "framer-motion";
import { StyledImage } from "../components/Image.style";
import ProjectP3Slider from "../components/carousel/ProjectP3Slider";
import ProjectContainer from "../components/ProjectContainer.style";
import { StyledSection } from "../components/SectionContainer.style";
import Tooltip from "@mui/material/Tooltip";

export default function CSharpProject() {
  return (
    <StyledSection project>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <ProjectContainer>
          <ProjectP3Slider />
          <div className="project-header">
          <div className="project-header-text">
            <h1>What's On Presale?</h1>
            </div>
            <div className="logo-container">

            <Tooltip title="C#">
            <StyledImage about src={files.csharp.logo} />
          </Tooltip>
          <Tooltip title="React">
            <StyledImage about src={files.react.logo} />
          </Tooltip>
          <Tooltip title="Tailwind CSS">
            <StyledImage about src={files.tailwind.logo} />
          </Tooltip>
            <Tooltip title="Microsoft SQL Server">
            <StyledImage about src={files.msserver.logo} />
          </Tooltip>
            </div>
          </div>
          <p>
            Full-stack web application where users can register as a property
            buyer, realtor, and/or a developer. This was a group project and
            some of the tasks that I was assigned with was implementing the ability
            to update user profile as well as creating filter options for listings, realtors, and
            developers, and passing data to and from the backend using endpoints.<br></br>
            <br></br>
            View the live demo here:<br></br>
            <a href="https://whatsonpresalestorage.z13.web.core.windows.net/home" target="_blank">
              What's On Presale?
            </a>
          </p>
        </ProjectContainer>
      </motion.div>
    </StyledSection>
  );
}
