import { motion } from "framer-motion";
import aghomepage from "../images/aghomepage.svg";
import { StyledColumn } from "../components/Column.style";
import { StyledSection } from "../components/SectionContainer.style";
import { StyledButton } from "../components/Button.style";
import { fadeRight, fadeLeft } from "../imports";
import { TechStack } from "../components/Card";
import Tooltip from "@mui/material/Tooltip";
import files from "../imports";
import { StyledImage } from "../components/Image.style";
const About = () => {
  return (
    <StyledSection>
      <StyledColumn about>
        <motion.img
          className="my-image"
          src={aghomepage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </StyledColumn>

      {/* <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="large-font"
        >
          About Me
        </motion.h1> */}
      <StyledColumn primary>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Hey thanks for dropping in! Here's a quick story about myself.
        </motion.h2>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.0 }}
        >
          I've been in the hospitality industry for many years now since 2014.
          I've started from the bottom; all the way up to management. I've
          realized that I love this industry but would like to be involved with
          it in a different way possible. I found my passion when working with
          various types of inventory and POS systems throughout my career as a
          Bar Manager. I then thought to myself that it would be awesome if I
          could shift my career into working with or developing one of these
          platforms in the future. That's when I decided to start my journey by
          enrolling at BCIT and I am having such an awesome time learning how to
          code and develop applications!
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Technologies acquired:{" "}
        </motion.h2>

        <motion.div
          className="tech-stack-row1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <Tooltip title="HTML">
            <StyledImage about src={files.html.logo} />
          </Tooltip>

          <Tooltip title="CSS">
            <StyledImage about src={files.css.logo} />
          </Tooltip>

          <Tooltip title="Javascript">
            <StyledImage about src={files.javascript.logo} />
          </Tooltip>

          <Tooltip title="React/React Native">
            <StyledImage about src={files.react.logo} />
          </Tooltip>
          <Tooltip title="Angular">
            <StyledImage about src={files.angular.logo} />
          </Tooltip>
          <Tooltip title="Vue">
            <StyledImage about src={files.vue.logo} />
          </Tooltip>
          <Tooltip title="C#">
            <StyledImage about src={files.csharp.logo} />
          </Tooltip>
          <Tooltip title="PHP">
            <StyledImage about src={files.php.logo} />
          </Tooltip>
        </motion.div>

        <motion.div
          className="tech-stack-row2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <Tooltip title="NodeJS">
            <StyledImage about src={files.node.logo} />
          </Tooltip>
          <Tooltip title="Python">
            <StyledImage about src={files.python.logo} />
          </Tooltip>
          <Tooltip title="Kotlin">
            <StyledImage about src={files.android.logo} />
          </Tooltip>
          <Tooltip title="iOS Swift">
            <StyledImage about src={files.swift.logo} />
          </Tooltip>
          <Tooltip title="Tailwind CSS">
            <StyledImage about src={files.tailwind.logo} />
          </Tooltip>
          <Tooltip title="MySQL">
            <StyledImage about src={files.mysql.logo} />
          </Tooltip>
          <Tooltip title="Microsoft SQL Server">
            <StyledImage about src={files.msserver.logo} />
          </Tooltip>
          <Tooltip title="Amazon Web Services">
            <StyledImage about src={files.aws.logo} />
          </Tooltip>
        </motion.div>

        <motion.div
          className="about-page-text"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 2 }}
        >
          <br></br>
          <StyledButton contact className="contact-link" to="/contact">
            Contact Me
          </StyledButton>
        </motion.div>
      </StyledColumn>
    </StyledSection>
  );
};

export default About;
