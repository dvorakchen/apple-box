import React from "react";

import "./index.css";

export function AppleBox(props: { content: string }) {
  return (
    <div className="container" data-cy="container">
      <div className="nav">
        <span className="btn-red"></span>
        <span className="btn-yellow"></span>
        <span className="btn-gray"></span>
      </div>
      <div className="body">
        <div data-cy="content">{props.content}</div>
      </div>
    </div>
  );
}
