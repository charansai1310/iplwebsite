import React from "react";
import NewsCard from "./NewsCard";
import "../styles/News.css";

const News = () => {
  const news = [
    {
      id: 1,
      headline: "TATA IPL 2025 Player Auction List Announced",
      date: "15 Nov, 2024",
      imageUrl:
        "https://www.iplt20.com/assets/images/news/2024/11/15/auction-list-2025.jpg",
    },
    {
      id: 2,
      headline: "1574 players register for TATA IPL 2025 Player Auction",
      date: "05 Nov, 2024",
      imageUrl:
        "https://www.iplt20.com/assets/images/news/2024/11/05/auction-register-2025.jpg",
    },
    {
      id: 3,
      headline: "TATA IPL 2025 Player retentions list announced",
      date: "01 Nov, 2024",
      imageUrl:
        "https://www.iplt20.com/assets/images/news/2024/11/01/retention-list-2025.jpg",
    },
    {
      id: 4,
      headline:
        "IPL Governing Council announces TATA IPL Player Regulations 2025-27",
      date: "28 Sep, 2024",
      imageUrl:
        "https://www.iplt20.com/assets/images/news/2024/09/28/player-regulations-2025-27.jpg",
    },
    {
      id: 5,
      headline: "IPL Owners Meeting - Update",
      date: "31 Jul, 2024",
      imageUrl:
        "https://www.iplt20.com/assets/images/news/2024/07/31/owners-meeting-update.jpg",
    },
  ];

  return (
    <div className="news-container">
      <div className="news-grid">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            headline={item.headline}
            date={item.date}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
