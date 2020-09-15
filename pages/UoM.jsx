import React from "react";
import "../public/styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function UoM() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavigationBar />
        <div>
          <Cover
            alt="text"
            url={
              "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/4nts-UoM-Cover@4x.png"
            }
          />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ delay: 0.5, ...transition }}
          >
            <h2 className="cover-title">
              Credit Suisse x University of Manchester
            </h2>
            <h3 className="cover-description">
              Digital Workplace for International Wealth Managers
            </h3>
          </motion.div>
        </div>
        <div className="uom-all-tables">
          <div className="uom-table">
            <table>
              <tr>
                <h2>1.0 Overview</h2>
                <p>
                  As part of my studies, I was part of a team project in
                  collaboration with Credit Suisse UK. The goal was to make us
                  students learn by doing — with no specific instructions,
                  lectures, or assistance in mobile development or product
                  design, we were to embark on a journey to develop a fully
                  functional mobile application assisting relationship managers
                  at Credit Suisse.
                  <br />
                  <br />
                  Our only lessons were in project management and teamwork, and
                  our constraints was to solve the problems outlined by Credit
                  Suisse in a project briefing.
                  <br />
                  <br />
                  My team consisted of 5 people from China, South Korea,
                  Croatia, Norway, and the United Kingdom. Initially starting
                  out as complete strangers, we had to face our cultural
                  barriers, lack of experience, and technical hurdles; head on.
                  Until this day, we had never worked with developing or
                  designing a mobile application before.
                </p>
              </tr>
              <tr>
                <h2>2.0 Project goal</h2>
                <p>
                  Overall project goal: Developing a mobile application aimig to
                  maximise relationship managers’ efficiency, resulting in more
                  time spent with clients and on high-value generating
                  activities.
                  <br />
                  <br />
                  This goal was broken down into two objectives in a project
                  briefing outlined by Credit Suisse UK:
                  <br />
                  <br />
                  1. Design a dashboard which pulls together a “clean and
                  simple” interface, allowing the relationship manager to act
                  upon upcoming client activities, KYC tasks, portfolio and
                  market alerts, and any other administrative tasks they need to
                  address.
                  <br />
                  <br />
                  2. Provide insights for the relationship managers so they are
                  able to manage the portfolio of their clients. We want to see
                  succint and clear analysis looking at profitable trades and
                  trade types, alongside any trend analysis in connection to
                  profitable sectors or clients.
                </p>
              </tr>
              <tr>
                <h2>3.0 My role</h2>
                <p>
                  I took on the role as the head of product development, being
                  the main designer and developer of the mobile application.
                  <br />
                  <br />
                  The development process was fuled by my rapid prototyping
                  approach utilising various levels of fidelity, my product
                  understandig through past work in venture capital and
                  startups, and my planning & documentation abilities through my
                  experiences in R&D.
                  <br />
                  <br />
                  <span style={{ fontWeight: "600" }}>Tools I used:</span>
                  <br />
                  <ul>
                    <li>Swift & Xcode</li>
                    <li>Figma & Invision Studio</li>
                    <li>Github</li>
                    <li>Firebase Realtime Database</li>
                    <li>Cocoapods</li>
                  </ul>
                </p>
              </tr>
              <tr>
                <h2>4.0 Process</h2>
                <h3>4.1 Planning </h3>
                <p>
                  Our team started with analysing the project briefing and
                  worked to break down the context, constraints, and the
                  challenges into actionable steps. This was used to form the
                  first iteration of our timelines, product requirements, and
                  overviews of topics we needed to research to succefully solve
                  the specificed problems.
                </p>
                <tr>
                  <img
                    id="fish-diagram"
                    src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/wv4b-fishdiagram-min.jpg"
                    alt="pic"
                  />
                </tr>
              </tr>
              <tr>
                <p>
                  After further iterations based on several brainstorming
                  sessions, we used our analysis to form questions sets for our
                  qualitative interviews with one relationship manager and the
                  Chief Technology Officer of Creditt Suisse UK. <br />
                  <br />
                  Our main focus prior to the interviews was understanding the
                  different terms, technicalities, and dynamics in the wealth
                  management industry, as we rather wanted to focus the
                  interviews on giving us an understanding of the outlined
                  problems and their leverage points, rather than an
                  understanding of the industry itself.
                </p>
              </tr>
              <tr>
                <h3>4.2 Stakeholder interviews</h3>
                <table
                  id="stakeholder-table"
                  style={{ width: "100%", marginTop: "3%" }}
                >
                  <th id="stakeholder-column">
                    <div style={{ width: "80%" }}>
                      <img
                        style={{ marginBottom: "3%" }}
                        className="stakeholder-image"
                        src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/o0Jn-Group+94-min.jpg"
                        alt="s"
                      />
                      <tr style={{ fontWeight: "normal", marginTop: "3%" }}>
                        Key insights:
                        <br />
                        ”The greatest value-add would be getting suggestions or
                        indications on which actions I should take next, for
                        example regarding the securities in my clients’
                        portfolio. Also, getting an efficient way to handle my
                        tasks on the go and prepare for client meetings would be
                        valuable”
                        <br />
                        <br />
                        Main concern:
                        <br />
                        Having an application that is difficult to use
                        on-the-go, and that has an overwhelming amount of
                        data/information.
                      </tr>
                    </div>
                  </th>
                  <th>
                    <div style={{ marginLeft: "20%", width: "80%" }}>
                      <img
                        style={{ marginBottom: "3%" }}
                        className="stakeholder-image"
                        src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/o0Jn-Group+94-min.jpg"
                        alt="s"
                      />
                      <tr style={{ fontWeight: "normal" }}>
                        Key insight:
                        <br />
                        ”Relationship managers should be spending more time with
                        clients — the more they do that, the more profitabable
                        they are. If they can do more of their administrative
                        tasks on-the-go with your mobile application, the
                        better.”
                        <br />
                        <br />
                        Main concern:
                        <br />
                        Having an application with security issues, where client
                        data or proprietary information can be leaked or
                        accessed by others.
                      </tr>
                    </div>
                  </th>
                </table>
              </tr>
              <tr>
                <h3>4.3 Defining final requirements</h3>
                <p>
                  After synthesising the insights gathered from our qualitative
                  interviews, we set off to work on specifying the products
                  requirements even further. Thus we could begin sketching out
                  the first iterations of the design, and which technical
                  features to implement.
                  <br />
                  <br />
                  However, given our limited abilities in mobile development, we
                  prioritised first developing the low hanging fruits, and
                  thereafter trying to implement more advanced technical
                  features — despite their importance.
                </p>
                <table>
                  <tr>
                    <th>
                      <p>
                        Our most important product requirements,
                        post-interviews:
                        <ul>
                          <li>Intuitive and easily usable user-interface.</li>
                          <li>
                            Two factor authentication, and no in-app
                            registration capabilities.
                          </li>
                          <li>
                            Clear and succint analysis of clients’ portfolios &
                            KYC progress.
                          </li>
                          <li>
                            Enable essential administrative tasks to be
                            performed on-the-go.
                          </li>
                        </ul>
                      </p>
                    </th>
                    <th>
                      <img
                        style={{ width: "514.95px", height: "678px" }}
                        src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/x4c8-IMG_1842+1-min.jpg"
                        alt="s"
                      />
                    </th>
                  </tr>
                </table>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
}

export default UoM;
