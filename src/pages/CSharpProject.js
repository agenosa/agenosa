import React from "react";
import files from "../imports";
import { motion } from "framer-motion";
import { StyledImage } from "../components/Image.style";
import CsharpSlider from "../components/carousel/CsharpSlider";
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
          <CsharpSlider />
          <div className="project-header">
            <div className="project-header-text">
              <h1>Console App</h1>
            </div>
            <div>
              <Tooltip title="C#">
                <StyledImage about src={files.csharp.logo} />
              </Tooltip>
              <Tooltip title="Microsoft SQL Server">
                <StyledImage about src={files.msserver.logo} />
              </Tooltip>
            </div>
          </div>
          <p>
            One of my earliest projects we have done at school. This console
            application has been developed with C# and allows the user to view
            various types of data, as well as add new employees for a selected
            company. The user also has the ability to select various types
            certificates and assign them to new employees. After confirmation,
            the data will then be stored into a database (MS SQL Server) and is
            now available in detail view.
          </p>
        </ProjectContainer>
      </motion.div>
    </StyledSection>
  );
}
