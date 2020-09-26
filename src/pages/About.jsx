import React from "react";
import "../styles.css";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

function About() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavigationBar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, ...transition }}
        >
          <table
            style={{
              verticalAlign: "middle",
              marginLeft: "6%",
              marginTop: "8%",
              marginBottom: "2%"
            }}
          >
            <th>
              <img
                className="about-image"
                src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/YPfb-Vardnan.jpg"
                alt="Vardnan"
              />
            </th>
            <th
              style={{ paddingTop: "5%", paddingLeft: "7%", textAlign: "left" }}
            >
              <p className="about-text">
                <span style={{ fontWeight: 400 }}>
                  I am driven by an innate curiosity for why the world is the
                  way it is, and how it could be improved.
                </span>{" "}
                Be it the feedback loops in macroeconomic systems, how the
                world’s information is organised, or why we still have so many
                badly designed doors. With time, this curiosity has led me to
                explore and examine some of the greatest challenges our world is
                facing.
                <br />
                <br /> It has been a process leading me to grasp the true
                importance of interdisciplinarity in crafting the best possible
                solutions. My goal has thus become to apply the fields of
                business, computer science, and design to be able to contribute
                to improving the status quo.
                <br />
                <br /> That’s why my passion lies in product development. I
                believe products empowered by exponential technology and good
                design, has the potential to significantly improve our lives.{" "}
              </p>
            </th>
          </table>
        </motion.div>
      </div>
    </body>
  );
}

export default About;
