import React from "react";
import "../styles.css";

function MobileWebSection(props) {
  return (
    <div className="mobile-web-box">
      <table id="mobile-web-table">
        <th id="mobile-web-table-th">
          <div className="mobile-web-text">
            <p id="mb-type">{props.type}</p>
            <h3 id="mb-title">{props.title}</h3>
            <p id="mb-info">{props.information}</p>
            <p id="mb-tools">
              <span style={{ fontWeight: "500" }}>Tools: </span>
              {props.tools}
            </p>
            <table style={{ verticalAlign: "middle" }}>
              <th>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.github}
                >
                  <p id="github-p">View in Github</p>
                </a>
              </th>
              <th>
                <img
                  id="github-img"
                  src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/5pIS-mark-github.jpg"
                  alt="github"
                />
              </th>
            </table>
          </div>
        </th>
        <th id="mobile-web-table-th-simulation">
          <video
            className="mobile-web-simulation"
            muted
            playsInline
            loop="true"
            autoplay="autoplay"
            controls={false}
            preload="auto"
          >
            <source src={props.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </th>
      </table>
    </div>
  );
}

export default MobileWebSection;
