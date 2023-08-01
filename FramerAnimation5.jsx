import React from "react";
import { motion, useScroll } from "framer-motion";

function FramerAnimation() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: "0",
          left: "0",
          height: "10px",
          background: "blue",
          transformOrigin: "0%",
        }}
      ></motion.div>
      <h2>Scroll Demo</h2>
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p> <br />
      <p>Scroll animation Scroll-Linked</p>
    </>
  );
}

export default FramerAnimation;
