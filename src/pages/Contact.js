import { motion } from "framer-motion";
import { StyledSection } from "../components/SectionContainer.style";

import Card from "../components/Card";

export default function Contact() {
  return (
    <div>
      <StyledSection contact>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 contact className="large-font">
            Need something done? Here's my info.
          </h1>
          <Card />
        </motion.div>
      </StyledSection>
    </div>
  );
}
