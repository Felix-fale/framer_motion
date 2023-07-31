import React from "react";
import { motion } from "framer-motion";

function FramerAnimation() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Draggable Object with framer motion
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "200px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "120px",
        }}
      >
        <div>
          <p>No constraint</p>
          <motion.div
            style={{ width: "100px", height: "100px", background: "blue" }}
            drag
          ></motion.div>
        </div>
        <div>
          <p>Drag Y only</p>
          <motion.div
            style={{ width: "100px", height: "100px", background: "blue" }}
            drag="y"
          ></motion.div>
        </div>
        <div>
          <p>No drag</p>
          <motion.div
            style={{ width: "100px", height: "100px", background: "blue" }}
            drag
            dragConstraints={{ left: 0, right: 100, top: -100 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default FramerAnimation;
