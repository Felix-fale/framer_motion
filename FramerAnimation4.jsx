import React, { useState } from "react";
import { motion } from "framer-motion";

function FramerAnimation() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "grey",
      }}
    >
      <motion.div
        style={{
          background: "#fff",
          padding: "3rem 2rem ",
          borderRaduis: "8px",
          boxShadow: "0 0px 10px rgba(0,0,0,0.2)",
        }}
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}
      >
        <motion.h3>Hover or click</motion.h3>
        {showCard && (
          <motion.p
            style={{
              width: "600px",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur asperiores, incidunt, et, corporis eos eius sapiente ex
            magnam ipsa non cupiditate! Pariatur ratione nam eos veritatis quis
            accusantium omnis eveniet?
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default FramerAnimation;
