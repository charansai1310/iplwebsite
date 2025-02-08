import React from "react";
import "../styles/NewsCard.css";

const NewsCard = ({ headline, date, imageUrl }) => {
  return (
    <div className="news-card">
      <div className="news-image">
        <img src={imageUrl} alt={headline} />
      </div>
      <div className="news-content">
        <div className="news-date">{date}</div>
        <h3 className="news-headline">{headline}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
