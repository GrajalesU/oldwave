import React, { useRef, useState } from "react";

import styles from "./Accordion.module.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className={styles.accordionSection}>
      <div
        className={`${styles.accordion} ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className={styles.accordionTitle}>{props.title}</p>
        {active ? (
          <span
            style={{ marginLeft: "20px" }}
            className="material-symbols-outlined"
          >
            expand_less
          </span>
        ) : (
          <span
            style={{ marginLeft: "20px" }}
            className="material-symbols-outlined"
          >
            expand_more
          </span>
        )}
        {/* <span style={{ marginLeft: "20px" }}>{active ? `∧` : "V"}</span> */}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={styles.accordionContent}
      >
        <div
          className={styles.accordionText}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
