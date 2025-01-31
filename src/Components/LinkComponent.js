import React from "react";
import "./LinkComponent.css";
const LinkComponent = ({ linkName }) => {
  return (
    <div>
      <button className="linkButton">{linkName}</button>
    </div>
  );
};

export default LinkComponent;
