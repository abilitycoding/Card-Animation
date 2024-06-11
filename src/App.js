import React, { useState, useEffect } from "react";
import "./App.css";

const Card = () => {
  const [tilted, setTilted] = useState(false);

  const toggleTilt = () => {
    setTilted(!tilted);
  };

  useEffect(() => {
    document.body.addEventListener("click", toggleTilt);
    document.body.addEventListener("touchstart", toggleTilt);
    if (window.location.pathname.match(/fullcpgrid/i)) {
      setTimeout(toggleTilt, 1000);
    }

    return () => {
      document.body.removeEventListener("click", toggleTilt);
      document.body.removeEventListener("touchstart", toggleTilt);
    };
  }, [tilted]);

  return (
    <div className={`background-card ${tilted ? "card-details" : ""}`}>
      <div className="card-anime">
        <div className="card-photo"></div>
        <h2>STEPS</h2>
        <p>THIS WEEK</p>
        <div className="chart-card">
          <div className="bar bar1"><span>20,000</span></div>
          <div className="bar bar2"><span>10,000</span></div>
          <div className="bar bar3"><span>15,000</span></div>
          <div className="bar bar4"><span>24,000</span></div>
          <div className="bar bar5"><span>7,000</span></div>
          <div className="bar bar6"><span>7,000</span></div>
          <div className="bar bar7"><span>10,000</span></div>
        </div>
        <h3>93,000</h3>
      </div>
    </div>
  );
};

export default Card;