import React from "react";
import "./style.css";

export interface ActivityType {
    _id: string;
    message: string;
    createdAt: string;
    author: string;
}

function Activity({data}: {data:ActivityType}) {
    const {message, createdAt, author} = data;
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
