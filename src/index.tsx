import React from "react";

import "./index.css";

export function AppleBox(props) {
  return (
    <div className="container">
      <div className="nav">
        <span className="btn-red"></span>
        <span className="btn-yellow"></span>
        <span className="btn-gray"></span>
      </div>
      <div className="body">
        <div>{props.name}</div>
        <div>{props.content}</div>
      </div>
    </div>
  );
}
