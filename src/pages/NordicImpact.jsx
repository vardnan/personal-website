import React from "react";
import "../styles.css";
import Cover from "../components/Cover";
import NavigationBar from "../components/NavigationBar";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Accordion from "../components/Accordion";
import "../components/Accordion.css";
import OverviewAccordion from "../components/OverviewAccordion";

const transition = { duration: 0.7, ease: [0.6, 0.01, -0.05, 0.9] };

function NordicImpact() {
  return (
    <body>
      {window.scrollTo(0, 0)}
      <div className="App">
        <NavBar />
        <div>
          <motion.div
            className="cover-title-div"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ delay: 0.6, ...transition }}
          >
            <h2 className="cover-title">Nordic Impact | Katapult Learning</h2>
            <h3 className="cover-description">
              Research & Development | Business Analysis
            </h3>
          </motion.div>
          <Cover
            alt="text"
            url={
              "https://uploads.codesandbox.io/uploads/user/fd760ebc-a259-4eec-b792-8e672dacc7d4/EltJ-katapult-cover@4x.png"
            }
          />
        </div>
      </div>
      <div>
        <OverviewAccordion
          title="1.0 Overview"
          content='<div id="jor-content">
          <p>
            <i>
            I worked for Katapult Learning, the education unit of the impact investment group, Nordic Impact/Katapult Group.
            </i>
            <br />
            <br />
            During my internship, I developed a 24-page report synthesising ideas,
            reflections, and theoretical concepts on creating an infrastructure to
            improve the global education paradigm. I reached out to and pitched the
            project to thought leaders on education and system dynamics from MIT,
            Princeton University, Harvard University, and more, whom I ended up
            interviewing.
            <br />
            <br />
            The report further presented how Katapult Learning could
            restructure and improve their organisation, projects, and
            prioritisations to better address their vision.
          </p>
        </div>'
        />
      </div>
      <div>
        <Accordion
          title="2.0 Process"
          content='<div id="jor-content">
                  <p>      
                    My process consisted of
                    <span id="jor-process-span-one">6 phases:</span>
                    <br />
                    <br />
                    <span id="katapult-process-text">
                      1. Planning phase
                    </span>
                    — Formed testable hypotheses, developed stakeholder maps of the education industry, 
                    developed visual breakdowns of current education systems, mapped out primary/secondary 
                    sources for further insights.
                    <br />
                    <br />
                    <span id="katapult-process-text">
                      2. Research phase
                    </span>
                    — Read 100+ scientific papers looking into topics such as collective intelligence, 
                    the triple/quadruple helix model of innovation, living labs, open innovation, 
                    systems-oriented design, system dynamics, the future job market, and pedagogy. 
                    I aimed to get a holistic overview of the root causes of the problems of education, 
                    and the different ways to address these. 
                    <br />
                    <br />
                    <span id="katapult-process-text">
                      3. Definition phase
                    </span>
                    — Through my research, the initial root problems of current education seemed to be the exclusion of 
                    highly relevant topics in modern times, the applied pedagogy for particular subjects, and the current reward system for assessing learning 
                    in students. These were problems further reinforced by the interconnectedness between educational institutions and a range of stakeholders with 
                    different incentives. Moreover, an outdated mental-model/paradigm of what an ideal education is and how this should be implemented by schools 
                    also seemed to further uphold this situation. Therefore, the final iteration of my problem statement focused on exploring 
                    the possibilities of developing a collective approach, both intersectoral and interdisciplinary, to 
                    holistically improve our current paradigm of education:
                    <br />
                    <br />
                    How could one create a collective intelligence with enough capability to systematically improve our global education paradigm?. 
                    <br />
                    <br />
                    <span id="katapult-process-text">
                      4. Synthesis phase I
                    </span>
                    — After having established a final problem statement, 
                    I decided to pick out particular issues to explore in more detail to
                     understand what a possible solution could look like. 
                     <br />
                     <br />
                    The chosen issues were the following:
                    <br />
                    <ul><li>What would such a collective intelligence consist of and how could it be structured?</li>
                    <li>What makes up and upholds our current education paradigm?</li>
                    <li>How could we alter an existing paradigm?</li></ul>
                    These issues set the foundation for my further research, and the expert-interviews 
                    I conducted to both cut my learning curve and better understand the nuances of this problem. 
                    <br />
                    <br />
                    <span id="katapult-process-text">
                      5. Interviews
                    </span>
                    — After having done a deeper analysis of the above-mentioned issues, 
                    I began to realise that the academic fields covering my problem scope still are somewhat new 
                    and only contain a dozen or so experts that could give me the relevant perspectives. 
                    This for example applied to fields such as collective intelligence, education 
                    systems modelling, the quadruple helix model, and systems-oriented design. 
                    <br />
                    <br />
                    Thus, as a high-school student at the moment, I had to increase my credibility to 
                    improve my likelihood of getting face-time with these few world-leading experts. 
                    Therefore I decided to publish an <a id="katapult-process-text"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://su.org/blog/the-importance-of-educating-students-to-love-space-exploration/">article on education</a> with a unique twist, which 
                    I could use to showcase my abilities to analyse and reflect, and emphasise that I was 
                    not just another high school student. 
                    <br />
                    <br />
                    All this led me to have the opportunity to speak to world-leading experts in fields such as collective
                    intelligence, education, and systems-oriented design. For example, Charles Fadel, Birger Sevaldson,
                    Mark Klein, and Alex Beard. 
                    <br />
                    <br />
                    <span id="katapult-process-text">
                    6. Synthesis phase II
                  </span>
                  — My final findings were then synthesised into a 24-page report, which I presented 
                  to the executives of Nordic Impact. A year later, I also decided to publish some of 
                  my research into a two-part essay series on Medium to make my findings as 
                  accessible as possible.
                  </p></div>   
                </table>'
        />
      </div>
      <div>
        <Accordion
          title="3.0 Findings"
          content='<div id="jor-content"><p>         
            My research showed that some of the most essential challenges of current school-systems are centred around improving the incentives of teachers, schools, and politicians to act on the goal of improving the learning outcome of students today. 
            </br>
            </br>
            To change their incentives, there are several potential solutions:
            </br>
            <ul><li>Improving/creating new policies relieving some of the current pain points of education.</li>
            <li>Improving the ways of ranking universities or gaining academic prestige by reforming our current metrics for prestige.</li>
            <li>Improving/developing new school-models by having learning and teaching at the core, and detaching academic research to be run as a fully separate entity.</li>
            <li>Updating the existing curriculum in education based on essential competencies needed in the 21st century.</li>
            <li>Improving the current assessment of learning at schools by changing the incentives and reward systems for teachers and students, to be focused on optimal learning.</li></ul>
            To successfully utilise these leverage points to intervene in the current education system, my report proposed an interdisciplinary and intersectoral approach based on the 
            quadruple helix model of innovation — a manner of collaboration including all societal actors, to effectively deal with 
            the complexity the current challenges of education pose.
            </br>
            </br>
            To read more about my findings, please refer to the
            <a id="katapult-process-text"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@vardnansivarajah/reforming-our-global-education-paradigm-how-could-we-improve-collaboration-part-1-57b68a521f26">
            two-part essay series</a> 
            I published on Medium. 
            </p></div>'
        />
      </div>
    </body>
  );
}

export default NordicImpact;
