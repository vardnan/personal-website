import React from "react";
import "../public/styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function MobileWebDevelopment() {
  return (
    <body>
      <div className="App">
        <NavigationBar />
        <div>
          <Cover
            alt="text"
            url={
              "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/HaTU-Mobile_Web-Cover1.5x.jpg"
            }
          />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ delay: 0.6, ...transition }}
          >
            <h2 className="cover-title">Personal Projects</h2>
            <h3 className="cover-description">
              Fullstack Mobile & Web Development
            </h3>
          </motion.div>
        </div>
      </div>
    </body>
  );
}

export default MobileWebDevelopment;
