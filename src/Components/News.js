import React from "react";
import NewsTile from "./NewsTile";
import { useNavigate } from "react-router-dom";
import "./News.css";

const News = () => {
  const navigate = useNavigate();
  const news_data = [
    {
      news_title: "TATA IPL 2025 Player Auction List Announced",
      news_date: "15 Nov, 2024",
    },
    {
      news_title: "1574 players register for TATA IPL 2025 Player Auction",
      news_date: "05 Nov, 2024",
    },
    {
      news_title: "TATA IPL 2025 Player retentions list announced",
      news_date: "01 Nov, 2024",
    },
    {
      news_title:
        "IPL Governing Council announces TATA IPL Player Regulations 2025-27",
      news_date: "28 Sep, 2024",
    },
    {
      news_title: "IPL Owners Meeting - Update",
      news_date: "31 Jul, 2024",
    },
  ];

  return (
    <div className="news">
      {news_data.map((newsItem, index) => (
        <NewsTile
          key={index}
          title={newsItem.news_title}
          date={newsItem.news_date}
          onClick={() =>
            navigate(`/news/${encodeURIComponent(newsItem.news_title)}`)
          }
        />
      ))}
    </div>
  );
};

export default News;
