import React from "react";
import "../public/styles.css";
import Card from "../components/Card";
import images from "../src/imagesURLs";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

function createCard(image) {
  return (
    <Link to={image.link}>
      <Card
        key={image.id}
        url={image.url}
        unique={image.unique}
        company={image.company}
        description={image.description}
      />
    </Link>
  );
}

function Home() {
  return (
    <body>
      {window.scrollTo(0,0)}
      <div className="App">
        <NavigationBar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, ...transition }}
        >
          <div className="card-container">{images.map(createCard)}</div>
          <div className="info-container">
            <h1 id="main-heading">Hi! I am Vardnan</h1>
            <h2 id="sub-heading">
              I am passionate about{" "}
              <span className="typed-text">product development/management</span>
              <span id="cursor">&nbsp;</span>
            </h2>
            <h2 id="current-role">
              Currently working as a venture developer @{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antler.co/"
              >
                <span className="typed-text">Antler</span>
              </a>
            </h2>
          </div>
        </motion.div>
      </div>
    </body>
  );
}

export default Home;
