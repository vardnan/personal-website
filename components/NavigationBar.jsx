import React from "react";
import "../public/styles.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div id="navigation">
      <h3 className="logo">Vardnan Sivarajah</h3>
      <div className="navigation-bar">
        <Link to="/">
          <h3 id="work" className="menu-items">
            Work
          </h3>
        </Link>
        <Link to="/about">
          <h3 id="about" className="menu-items">
            About
          </h3>
        </Link>
        <Link to="/">
          <h3 id="resume" className="menu-items">
            Resume
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
