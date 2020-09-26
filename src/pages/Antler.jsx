import React from "react";
import "../styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function Antler() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavigationBar />
        <div>
          <motion.div
            className="cover-title-div"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ delay: 0.6, ...transition }}
          >
            <h2 className="cover-title">Antler</h2>
            <h3 className="cover-description">
              Business Analysis | Fullstack Development & UX
            </h3>
          </motion.div>
          <Cover
            alt="text"
            url={
              "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/sDzU-antler-cover@4x.png"
            }
          />
        </div>
      </div>
    </body>
  );
}

export default Antler;
