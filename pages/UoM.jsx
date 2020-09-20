import React from "react";
import "../public/styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";
import Accordion from "../components/Accordion";
import "../components/Accordion.css";
import OverviewAccordion from "../components/OverviewAccordion";

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
        <div
          style={{
            marginTop: "1100px",
            position: "absolute",
            textAlign: "left"
          }}
        >
          <OverviewAccordion
            title="1.0 Overview"
            content=" <p>
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
        </p>"
          />
          <Accordion
            title="2.0 Project goal"
            content='   
          <table id="project-goal-table">
            <th id="project-goal-th">
              <p>
                <span id="project-goal-span">
                  Developing a mobile application aimig to maximise relationship
                  managers’ efficiency, resulting in more time spent with
                  clients and on high-value generating activities.
                </span>
                <br />
                <br />
                This goal was broken down into two objectives in a project
                briefing outlined by Credit Suisse UK:
                <ol>
                  <li>
                    Design a dashboard which pulls together a “clean and simple”
                    interface, allowing the relationship manager to act upon
                    upcoming client activities, KYC tasks, portfolio and market
                    alerts, and any other administrative tasks they need to
                    address.
                  </li>
                  <br />
                  <li>
                    Provide insights for the relationship managers so they are
                    able to manage the portfolio of their clients. We want to
                    see succint and clear analysis looking at profitable trades
                    and trade types, alongside any trend analysis in connection
                    to profitable sectors or clients.
                  </li>
                </ol>
              </p>
            </th>
            <th>
              <img
                id="project-goal-img"
                src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/fI29-cs-hq-min.jpg"
                alt="s"
              />
            </th>
          </table>
        '
          />
          <Accordion
            title="2.0 Project goal"
            content="<p>
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
          </p>"
          />
          <Accordion
            title="3.0 My role"
            content='<p>
            Our team started with analysing the project briefing and
                worked to break down the context, constraints, and the
                challenges into actionable steps. This was used to form the
                first iteration of our timelines, product requirements, and
                overviews of topics we needed to research to succefully solve
                the specificed problems.
              </p>
                <img
                  id="fish-diagram"
                  src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/wv4b-fishdiagram-min.jpg"
                  alt="pic"
                />'
          />
        </div>
      </div>
    </body>
  );
}

export default UoM;
