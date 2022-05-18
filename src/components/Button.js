import React from "react";
import { motion } from "framer-motion";

function Button({ className, variants }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.0 }}
      className={className}
    >
    </motion.div>
  );
}
export default Button;
