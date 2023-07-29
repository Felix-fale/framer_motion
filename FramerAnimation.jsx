import React from "react";
import { motion } from "framer-motion";

function FramerAnimation() {
  return (
    <div>
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: [0, 900, 0] }}
        transition={{ duration: 3, delay: 0.2 }}
        whileHover={{ scale: 0.9, opacity: 0.2 }}
      >
        It is H1 for animation using Framer Motion.
      </motion.h1>
      <motion.h2
        initial={{ x: -1000 }}
        animate={{ x: [0, 900, 0] }}
        // transition={{ duration: 3, delay: 0.2 }}
        whileHover={{ scale: 0.9, opacity: 0.2 }}
      >
        It is H2 for animation using Framer Motion.
      </motion.h2>
    </div>
  );
}

export default FramerAnimation;
