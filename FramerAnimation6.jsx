import React from "react";
import { motion, useScroll } from "framer-motion";

function FramerAnimation() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress.timeDelta);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>React Scroll animation with framer motion</h2>
        <Box />
        <Box />
        <Box />
      </div>
    </>
  );
}

function Box() {
  return (
    <motion.div
      style={{
        margin: "200px 0px",
        width: "100px",
        height: "100px",
        background: "blue",
      }}
      initial={{ opacity: 0, scale: 0, x: 500 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      // viewport={{ once: true }}
    ></motion.div>
  );
}

export default FramerAnimation;
