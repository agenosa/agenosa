import { fadeLeft, fadeRight } from "../imports";
import { motion } from "framer-motion";
import { sentence, letter } from "../imports";
import aglogo from "../images/AG_LOGO.svg";
import { StyledButton } from "../components/Button.style";
import { StyledColumn } from "../components/Column.style";
import { StyledSection } from "../components/SectionContainer.style";

export default function Home() {
  const line1 = "Hi there! My name is";
  const line2 = "Adrian Genosa.";
  const line3 = "I am a web developer.";
  const line4 = "It's nice to meet you.";

  return (
    <StyledSection home>
      <StyledColumn primary>
        <motion.h1 className="homepage-text"variants={sentence} initial="hidden" animate="visible">
          {line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line3.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line4.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>

        <div className="home-button-container">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.0, delay: 3.6 }}
          >
            <StyledButton about className="link" to="/about">
              About Me
            </StyledButton>
          </motion.div>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.0, delay: 4.4 }}
          >
            <StyledButton className="link" to="/projects">
              View My Projects
            </StyledButton>
          </motion.div>
        </div>
      </StyledColumn>

      <StyledColumn>
        <motion.img
          className="my-image"
          src={aglogo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </StyledColumn>
    </StyledSection>
  );
}
