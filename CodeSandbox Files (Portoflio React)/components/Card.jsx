import React from "react";
import "../public/styles.css";
import images from "../src/imagesURLs";

function Card(props) {
  return (
    <div className="card-box">
      <img className="card" id={props.unique} src={props.url} alt={props.alt} />
      <div className="card-overlay">
        <div className="card-overlay-title">{props.company}</div>
        <p className="card-overlay-desc">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
