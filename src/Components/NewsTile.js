import React from "react";
import "./NewsTile.css";

const NewsTile = ({ title, date }) => {
  return (
    <div className="news-tile">
      <img
        src="https://documents.iplt20.com/bcci/articles/1731677158_Singh96_0201.jpg"
        alt="news"
      />
      <p>{title}</p>
      <hr /> 
      <p>{date}</p>
    </div>
  );
};

export default NewsTile;
