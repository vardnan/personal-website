import React from "react";
import "../styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Accordion from "../components/Accordion";
import "../components/Accordion.css";
import OverviewAccordion from "../components/OverviewAccordion";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function Antler() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavBar />
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
      <OverviewAccordion
        title="1.0 Overview"
        content='<div id="jor-content">
          <p>
            <i>
            Antler is the world’s largest tech startup generator, 
            and an early-stage venture capital firm.</br>Led by the ex-founder of Zalora and ex-Chairman of McKinsey. 
            </i>
            <br />
            <br />
            <strong>THIS INTERNSHIP IS IN PROGRESS</strong>
          </p>
        </div>'
      />
    </body>
  );
}

export default Antler;
