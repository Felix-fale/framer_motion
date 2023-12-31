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
    </div>
  );
}

export default FramerAnimation;

// https://www.youtube.com/watch?v=54AJAH3Y4xE&list=PLnZgHKyxHOEAy7MisX6CSMe4JTzkeodmC&index=6
