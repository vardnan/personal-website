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
                  <p
                    style={{
                      fontWeight: "400",
                      color: "#2965FF",
                      fontSize: 20,
                      marginTop: "10px"
                    }}
                  >
                    View in Github
                  </p>
                </a>
              </th>
              <th>
                <img
                  style={{
                    marginLeft: "7px",
                    width: "28px",
                    height: "28px",
                    marginTop: "-3.8px"
                  }}
                  src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/5pIS-mark-github.jpg"
                  alt="github"
                />
              </th>
            </table>
          </div>
        </th>
        <th style={{ width: "100%" }}>
          <video
            className="mobile-web-simulation"
            loop="true"
            autoplay="autoplay"
            muted
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
