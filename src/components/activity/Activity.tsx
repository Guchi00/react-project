import React from "react";
import "./style.css";

interface ActivityType {
    message: string;
    createdAt: string;
    author: string;
}

function Activity({message, createdAt, author}: ActivityType) {
  return (
    <div className="expand">
      <h3 className="h3">
        {message}
      </h3>
      <button className="h3" type="button">
        Expand
      </button>
    </div>
  );
}

export default Activity;
