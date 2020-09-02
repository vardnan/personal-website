import React from "react";
import "../public/styles.css";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

function Cover(props) {
  return (
    <body>
      <motion.div>
        <motion.img
          transition={{ delay: 0.2, ...transition }}
          initial={{ scale: 0.4, x: "0%", y: "-50%" }}
          animate={{ scale: 1, x: "0%", y: "0%" }}
          className="cover"
          src={props.url}
          alt={props.alt}
        />
      </motion.div>
    </body>
  );
}

export default Cover;
