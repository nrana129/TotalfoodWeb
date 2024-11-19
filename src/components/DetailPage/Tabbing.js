import React, { useState } from "react";


const Tabbing = ({ title, content }) => {
  const [activeClass, setActiveClass] = useState(false);


function onClickHandle() {
    console.log("click");
    setActiveClass((activeClass) => !activeClass);
  }



  return (
    <li  className={activeClass ? "active" : ""}>
      <h3 onClick={onClickHandle} class="accordion-thumb">{title}</h3>
      <div className="accordion-panel">
        <p>{content}</p>
      </div>
    </li>
  );
};

export default Tabbing;
