import React from "react";
import "../styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";
import Accordion from "../components/Accordion";
import "../components/Accordion.css";
import OverviewAccordion from "../components/OverviewAccordion";
import MobileWebSection from "../components/MobileWebSection";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function UoM() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavigationBar />
        <div>
          <motion.div
            className="cover-title-div"
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
          <Cover
            alt="text"
            url={
              "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/4nts-UoM-Cover@4x.png"
            }
          />
        </div>
        <div
          style={{
            textAlign: "left"
          }}
        >
          <div>
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
          our constraints were to solve the problems outlined by Credit
          Suisse in a project briefing.
          <br />
          <br />
          My team consisted of 5 people from China, South Korea,
          Croatia, Norway, and the United Kingdom. Initially starting
          out as strangers, we had to face our cultural
          barriers, lack of experience, and technical hurdles; head-on.
          Until this day, we had never worked with developing or
          designing a mobile application before.
        </p>"
            />
          </div>
          <div>
            <OverviewAccordion title="2.0 Final result" />
            <div
              style={{
                textAlign: "center",
                marginBottom: "-7%",
                marginTop: "-2%"
              }}
            >
              <div style={{ width: "87.2%", marginLeft: "3%" }}>
                <MobileWebSection
                  key={5}
                  title={"Suisseboard"}
                  url={
                    "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/8E5d-smartmockups_kff80hf6.mp4"
                  }
                  tools={"Swift, XCode, Firebase Realtime Database."}
                  information={
                    "My very first mobile application: A functional wealth management application for iOS. The back-end is based on Firebase. Some values are hard-coded."
                  }
                  type={"iOS Development"}
                  github={"https://github.com/vardnan/ITP"}
                />
              </div>
            </div>
          </div>
          <div>
            <Accordion
              title="3.0 Project goal"
              content='   
          <table id="project-goal-table">
            <th id="project-goal-th">
              <p>
                <span id="project-goal-span">
                  Developing a mobile application aiming to maximise relationship
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
                    Provide insights for the relationship managers so they can manage the portfolio of their clients. We want to
                    see succinct and clear analysis looking at profitable trades
                    and trade types, alongside any trend analysis in connection
                    to profitable sectors or clients.
                  </li>
                </ol>
              </p>
            </th>
            <th id="project-goal-img-th">
              <img
                id="project-goal-img"
                src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/fI29-cs-hq-min.jpg"
                alt="s"
              />
            </th>
          </table>
        '
            />
          </div>
          <div>
            <Accordion
              title="4.0 My role"
              content='<div id="my-role-div"> <p>
          I took on the role as the head of product development, being the main
          designer and developer of the mobile application.
          <br />
          <br />
          The development process was fueled by my rapid prototyping approach
          utilising various levels of fidelity, my product understanding through
          past work in venture capital and startups, and my planning &
          documentation abilities through my experiences in R&D.
          <br />
          <br />
          <span id="my-role-span">Tools I used:</span>
          <ul>
            <li> Swift & Xcode</li>
            <li>Figma & Invision Studio</li>
            <li>Github</li>
            <li>Firebase Realtime Database</li>
            <li>Cocoapods</li>
          </ul>
        </p>
        </div>
        '
            />
          </div>
          <div>
            <Accordion
              title="5.0 Process"
              content='<div id="process-accordion"><table id="process-table-one">
          <th id="process-th-one">
            <p>
              <span id="process-span-one">5.1 Planning</span>
              <br />
              <br />
              Our team started with analysing the project briefing and worked to
              break down the context, constraints, and the challenges into
              actionable steps. This was used to form the first iteration of our
              timelines, product requirements, and overviews of topics we needed
              to research to successfully solve the specified problems.
              <br />
              <br />
              After further iterations based on several brainstorming sessions,
              we used our analysis to form questions sets for our qualitative
              interviews with one relationship manager and the Head of IT
              at Credit Suisse UK.
              <br />
              <br />
              Our main focus prior to the interviews was understanding the
              different terms, technicalities, and dynamics in the wealth
              management industry, as we rather wanted to focus the interviews
              on giving us an understanding of the outlined problems and their
              leverage points, rather than an understanding of the industry
              itself.
            </p>
          </th>
          <th id="process-img-th">
            <img
              id="process-img-one"
              src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/dmrS-IMG_1842+1-min.jpg"
              alt="s"
            />
          </th>
        </table>
        <div>
        <h3>5.2 Stakeholder interviews</h3>
        <table id="stakeholder-table">
          <div id="stakeholder-column-div">
            <tr>
              <h4>
                Abdul S.
                <br />
                Relationship Manager @ Credit Suisse
              </h4>
              <p>
                Key insight:
                <br />
                ”The greatest value-add would be getting suggestions or
                indications on which actions I should take next, for example
                regarding the securities in my clients’ portfolio. Also, getting
                an efficient way to handle my tasks on-the-go and prepare for
                client meetings would be valuable”
                <br />
                <br />
                Main concern:
                <br />
                Having an application that is difficult to use on-the-go, and
                that has an overwhelming amount of data/information.
              </p>
            </tr>
          </div>
          <div id="stakeholder-column-div-two">
            <tr>
              <h4>
                Zahid A.
                <br />
                Head of IT @ Credit Suisse
              </h4>
              <p>
                Key insight:
                <br />
                ”Relationship managers should be spending more time with clients
                — the more they do that, the more profitable they are. If they
                can do more of their administrative tasks on-the-go with your
                mobile application, the better.”
                <br />
                <br />
                Main concern:
                <br />
                Having an application with security issues, where client data or
                proprietary information can be leaked or accessed by others.
              </p>
            </tr>
          </div>
        </table>
        </div>
        <div>
        <p>
          <span id="process-requirements-span">5.3 Defining final requirements</span><br/><br/>
          After synthesising the insights gathered from our qualitative
          interviews, we set off to work on specifying the
          requirements of the product even further. Thus we could begin sketching out the
          first iterations of the design, and which technical features to
          implement.
          <br />
          <br />
          However, given our limited abilities in mobile development, we
          prioritised first developing the low hanging fruits, and thereafter
          trying to implement more advanced technical features — despite their
          importance.
          <br />
          <br />
          <span id="process-requirements-span-two">
            Our most important product requirements, post interviews:
          </span>
          <ul>
            <li>Intuitive and easily usable user-interface.</li>
            <li>
              Two-factor authentication, and no in-app registration
              capabilities.
            </li>
            <li>
              Clear and succinct analysis of clients’ portfolios & KYC
              progress.
            </li>
            <li>
              Enable essential administrative tasks to be performed on-the-go.
            </li>
          </ul>
        </p>
        <div id="process-requirements-img-div">
        <img
          id="process-requirements-img"
          src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/6UV7-requirements-min.jpg"
          alt="s"
        />
        </div>
      </div>
        </div>
        <div id="process-ideation-section">
        <p>
          <span id="process-ideation-span">5.4 Ideation & testing</span>
          <br />
          <br />
          The next question was figuring out the best possible and technically
          feasible solutions for these requirements. Being responsible for our
          product development process, I took the lead in this phase. I
          emphasised having an iterative approach with sketches in various
          fidelities, and rapid feedback from team members, before writing in
          the code.
          <br />
          <br />
          The core guidelines in my design/development process were the design
          principles of Dieter Rams — emphasising usability while disregarding
          anything detracting from it, removing non-essential features, and
          making the aesthetics as pleasurable and unobtrusive as possible.
          <br />
          <br />
          As a result, I ended up being greatly inspired by digital analytics
          dashboards, as their goal is presenting complex information
          efficiently through visualisations, modularity and structures defined
          after relevance.
          <br />
          <br />
        </p>
        <img
          id="process-ideation-img"
          src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/lAO3-IMG_1842+3-min.jpg"
          alt="s"
        />
      </div>
      <div id="process-iterations-section">
      <p>
        <span id="process-iterations-span">5.4.1 Layout iterations</span>
        <br />
        <br />
        Having digital dashboards at the back of my mind, I aimed to design
        modular layout mapping out the core features of the application,
        making them easily accessible on-the-go, while also presenting the
        most relevant information on the very first screen.
        <br />
        <br />
        From our insights gathering and defined product requirements, we
        concluded that the most important features to include were:
        <br />
        <ul>
          <li>Reminders</li>
          <li>Market alerts/events</li>
          <li>Calendar view</li>
          <li>Task manager</li>
          <li>Client portfolio manager</li>
          <li>Suggestion or notification centre</li>
        </ul>
        <br />
        All in all, features which give relationship managers an overview
        and the opportunity to address the most essential day-to-day
        administrative tasks with ease.
      </p>
      <img
        id="process-iterations-img"
        src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/XdOF-Group+91-min.png"
        alt="s"
      />
    </div>
    <div id="process-techchallenges-section">
          <p>
            <span id="process-techchallenges-span">
              5.4.2 Technical challenges
            </span>
            <br />
            <br />
            As anticipated, we ended up facing a few technical hurdles when
            trying to implement our features, this was especially the case for
            more intricate elements of our design.
            <br />
            <br />
            <span id="process-techchallenges-span-two">
              Some of the challenges we faced:
            </span>
            <br />
            <ol>
              <li>
                Creating suggestions centre — a tool for giving recommendations
                into which securities to trade, based on the developments in a
                client’s portfolio —, was infeasible given our timeline. This
                required us to develop a recommender engine based on supervised
                machine learning, which we did not have the time to implement.
                This feature was changed to rather be an analysis tool
                showcasing real-time portfolio developments, with an extension
                to experiment with how changes in asset types affect the
                value of client portfolios.
              </li><br />
              <li>
                Creating detail-labels presenting essential information in each modular section, was too advanced to implement given my current
                knowledge in Swift (the programming language). Thus we decided
                to not include the labels in further design iterations.
              </li><br />
              <li>
                The layout of our market alerts/events feature needed to be
                changed into a simple page only showcasing essential webpages
                for market insights. The previous layout was too advanced to
                implement given its gesture patterns and modularity.
              </li>
            </ol>
          </p>
        </div>
        <div id="process-snapshots-section">
        <p id="process-snapshots-span">
          5.4.3 Snapshots of some changed designs
        </p>
        <img
          id="process-snapshots-img"
          src="https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/lsMW-Group+93-min.png"
          alt="s"
        />
      </div>
        '
            />
          </div>
        </div>
      </div>
    </body>
  );
}

export default UoM;
