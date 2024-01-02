import React from "react";

function Filterbutton() {
  return (
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </button>
  );
}

export default Filterbutton;