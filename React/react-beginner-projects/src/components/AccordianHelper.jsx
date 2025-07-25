import { useState } from "react";
import "../accordian.css";

const AccordianHelper = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordian-card" key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default AccordianHelper;
