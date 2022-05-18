import {
  VueCard,
  ReactCard,
  AngularCard,
  CSharpCard,
  ProjectP3Card,
} from "../components/ProjectCard";
import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* margin:32px; */

  justify-content: space-around;

  .card {
    width: 40%;
    margin: 32px 32px 64px 32px;
    border: 1px solid;
  }

  .first-project {
    width: 40%;
    margin: 32px 32px 64px 32px;
    border: 1px solid;
  }

  .last-project {
    width: 40%;
    margin: 32px 32px 64px 32px;
    border: 1px solid;
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 100%;
      margin: 16px 16px 32px 16px;
    }

    .first-project {
      width: 100%;
      margin: 64px 16px 32px 16px;
    }

    .last-project {
      width: 100%;
      margin: 16px 16px 96px 16px;
    }
  }
`;

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <StyledProjects>
        <div className="first-project">
          <VueCard />
        </div>

        <div className="card">
          <CSharpCard />
        </div>


        <div className="card">
          <ProjectP3Card />
        </div>
        <div className="card">
          <AngularCard />
        </div>

        <div className="last-project">
          <ReactCard />
        </div>
      </StyledProjects>
    </motion.div>
  );
}
