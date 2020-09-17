import React, { useState, useRef } from "react";
import "./Accordion.css";
import Chevron from "./Chevron";

function Accordion(props) {
  /*const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  function toggleAccordion() {
    setActiveState(setActive === "active");
    setHeightState(setActive === `${content.current.scrollHeight}px`);
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }*/

  const content = useRef(null);

  return (
    <div>
      <div className="accordion__section">
        <button className={`accordion ${"active"}`}>
          <p className="accordion__title">{props.title}</p>
          <Chevron
            className={`${"accordion__icon rotate"}`}
            width={10}
            fill={"#FCFCFC"}
          />
        </button>
        <div
          ref={content}
          style={{ maxHeight: "100%" }}
          className="accordion__content"
        >
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
