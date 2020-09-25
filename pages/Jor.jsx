import React from "react";
import "../public/styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function Jor() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavigationBar />
        <motion.div
          className="cover-title-div"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: -1, opacity: 1 }}
          transition={{ delay: 0.6, ...transition }}
        >
          <h2 className="cover-title">JOR Farms/GreenTech</h2>
          <h3 className="cover-description">
            Research & Development | Business Analysis
          </h3>
        </motion.div>
        <div>
          <Cover
            alt="text"
            url={
              "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/5jla-JOR-Cover@1.5x-min.jpg"
            }
          />
        </div>
        <div className="jor-all-tables">
          <div className="jor-first-table-div">
            <table className="jor-table">
              <tr>
                <td>
                  <h2>1.0 Overview</h2>
                  <p>
                    <i>
                      JOR produces premium fruits/vegetables using leading
                      vertical farming technology.
                    </i>
                    <br />
                    <br />
                    During my internship I developed a 19-page report, based on
                    extensive quantitative and qualitative research, on how one
                    of the largest Norwegian salad-farms could streamline their
                    value chain to increase their revenue by €95,290+.{" "}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>2.0 Process</h2>
                  <p>
                    Our process could be broken down into{" "}
                    <span style={{ fontWeight: 600 }}>5 phases:</span>
                    <br />
                    <br />
                    <span className="jor-process-text">
                      1. Planning phase
                    </span>{" "}
                    — developed stakeholder maps, mapped out the socioeconomical
                    dynamics in a salad farm, formed testable hypotheses, and
                    increased our familiarity with the farming industry through
                    reserach.
                    <br />
                    <br />
                    <span className="jor-process-text">
                      2. Immersion phase
                    </span>{" "}
                    — we spent 2 days at the farm with a free rein to conduct
                    stakeholder interviews and detailed observations. In trying
                    to keep our reserach as human-centred as possible, we
                    interviewed key persons in every level of the farm’s
                    organisational hierarchy.
                    <br />
                    <br />
                    <span className="jor-process-text">
                      3. Definition phase
                    </span>{" "}
                    — after each day at the farm, and the days therafter, our
                    main focus was defining the specific leverage points to
                    increase the farms’ operational efficiency. We came to the
                    conclusion that a 1% increase in their efficiency would
                    result to a €95,290 increase in their revenue, which became
                    our target.
                    <br />
                    <br />
                    <span className="jor-process-text">
                      4. Ideation & testing phase
                    </span>{" "}
                    — back at the office, we were immersing ourselves in the
                    most up-to-date research on potential solutions to our
                    discovered leverage points. Some of the topics we explored
                    were RFID technology, retrofitting modern information
                    systems, and cellular production processes. Potential
                    solutions were regularly discussed with key stakeholders at
                    the farm to gain insights into feasibility and budget
                    constraints.
                    <br />
                    <br />
                    <span className="jor-process-text">
                      5. Synthesis phase
                    </span>{" "}
                    — our findings and solutions were synthesised into a 19-page
                    report and a presentation deck, delivered to the farm and
                    the executives of JOR for implementation.{" "}
                  </p>
                </td>
              </tr>
              <tr>
                <th>
                  <img
                    className="jor-process-image"
                    src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/WCVr-IMG_2109+1-min.jpg"
                    alt=""
                    style={{ top: "105%", left: "2%" }}
                  />
                </th>
                <th>
                  <img
                    className="jor-process-image"
                    src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/fRWz-IMG_2109+2-min.jpg"
                    alt=""
                    style={{ top: "117%", left: "51%" }}
                  />
                </th>
              </tr>
            </table>
          </div>
          <div className="jor-second-table-div">
            <table className="jor-second-table">
              <tr>
                <td>
                  <h2>3.0 Findings</h2>
                  <p>
                    We found that the salad farm already had a forward-leaning
                    approach to implement modern solutions in their production
                    process, however we observed several points of improvements
                    at systemic level, where processes such as planning,
                    control, data collection, logging, and communication still
                    were impaired by manual work.
                    <br />
                    <br />
                    The latter points formed a significant bottleneck in their
                    internal and external information-flow. The same applied to
                    their supply chain, but here the main negative influences
                    were their lack of access to liquid capital and
                    repurcussions from previous economical decisions. Moreover,
                    we found that the greatest leverage point for increasing
                    their operational efficiency lied in their packing factory.
                    <br />
                    <br />
                    In addition, it must be pinpointed that several of the
                    farm’s challenges were greatly affected by complicated
                    internal and external stakeholder relationships. For example
                    significant language barriers among farmers, dependencies on
                    the farm’s CEO, and having a customer base of wholesalers
                    with significant market shares and considerable influence on
                    the farms’ operations.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    id="jor-supply-chain"
                    src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/NwPR-IMG_2109+3-min.jpg"
                    alt=""
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className="jor-third-table-div">
            <table className="jor-third-table">
              <tr>
                <td>
                  <h2>4.0 Proposed Solutions</h2>
                  <p>
                    Taking the previously presented context into consideration,
                    we defined 8 concrete leverage points we could target.
                    Solutions to these were separated into 2 phases. The first
                    phase considered solutions implementable in the short-term,
                    resulting in the a 1% increase in operational efficiency,
                    whereas the second phase considered long-term investments
                    for further drastic improvements.
                    <br />
                    <br />
                    <span style={{ fontWeight: "600" }}>
                      Our 8 leverage points were:
                    </span>{" "}
                    <br />
                    <br />
                    1. Streamlining their order and invoice system
                    <br />
                    2. Implementing digital solutions for logging in their
                    product processes
                    <br />
                    3. Streamlining communication in the package factory
                    <br />
                    4. Implementing digital tracking solutions for food safety
                    <br />
                    <br />
                    5. Establishing and structuring a new package factory
                    <br />
                    6. Accessing new and supplementary professional competence
                    <br />
                    7. Implementing solutions to resolve current language
                    barriers
                    <br />
                    8. Implementing a new farm-planning system
                    <br />
                    <br />
                    <span style={{ color: "#7FD559", fontWeight: 500 }}>
                      As the details of this project is concealed under a NDA, I
                      cannot dive into further specificities.
                      <br />
                      If you are interested in particular aspects of the project
                      or have any questions, please get in touch.
                    </span>
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Jor;
