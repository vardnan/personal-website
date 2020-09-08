import React from "react";
import "../public/styles.css";

function MobileWebSection(props) {
  return (
    <div className="mobile-web-box">
      <table
        style={{
          width: "100%",
          verticalAlign: "middle",
          marginLeft: "10%",
          marginBottom: "8%"
        }}
      >
        <th>
          <div className="mobile-web-text">
            <p id="mb-type">{props.type}</p>
            <h3 id="mb-title">{props.title}</h3>
            <p id="mb-info">{props.information}</p>
            <p id="mb-tools">
              <span style={{ fontWeight: "600" }}>Tools: </span>
              {props.tools}
            </p>
          </div>
        </th>
        <th style={{ width: "100%" }}>
          <video className="mobile-web-simulation" loop="true" autoplay="autoplay" muted>
            <source src={props.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </th>
      </table>
    </div>
  );
}

export default MobileWebSection;
