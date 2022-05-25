import React, { useState } from "react";
import "./style.css";

interface ActivityType {
    message: string;
    createdAt: string;
    author: string;
}

function Activity({message, createdAt, author}: ActivityType) {
  const [bottomClass, setBottomClass] = useState("bottom hide");
  const [buttonText, setButtonText] = useState("Expand");

  const toggleBottom = () => {
    if (bottomClass === "bottom") {
      setBottomClass("bottom hide");
      setButtonText("Expand")
    } else {
      setBottomClass("bottom");
      setButtonText("Collapse");
    }
  };
  
  return (
    <div className="expand">
      <div className="top">
        <h3 className="h3">
          {message}
        </h3>
        <button className="h3" type="button" onClick={toggleBottom}>
          {buttonText}
        </button>
      </div>
      <div className={bottomClass}>
        <span className="time">{createdAt}</span>
        <span className="author">{author}</span>
      </div>
    </div>
  );
}

export default Activity;
