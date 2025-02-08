import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Home.css";

const images = {
  hero: "https://www.iplt20.com/assets/images/ipl-og-image-2024.jpg",
  stadium: "https://img.cricketnmore.com/uploads/2021/04/ipl-2021-venues-l.jpg",
  stats:
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/295200/295242.jpg",
  pointsTable:
    "https://www.mykhel.com/img/2024/03/ipl-2024-points-table-1711305207.jpg",
  teams:
    "https://www.mykhel.com/img/2024/02/ipl-2024-all-teams-squad-list-1708499871.jpg",
  trophy:
    "https://images.hindustantimes.com/img/2023/05/29/1600x900/PTI05-29-2023-000097B-0_1685386006651_1685386033091.jpg",
};

const heroImages = [
  {
    url: "https://www.iplt20.com/assets/images/ipl-og-image-2024.jpg",
    title: "TATA IPL 2024",
    subtitle: "Experience the Excitement of Cricket's Biggest Festival",
  },
  {
    url: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/6.png",
    title: "Top Players",
    subtitle: "Watch the Best Cricketers Battle it Out",
  },
  {
    url: "https://images.hindustantimes.com/img/2023/05/29/1600x900/PTI05-29-2023-000097B-0_1685386006651_1685386033091.jpg",
    title: "The Ultimate Prize",
    subtitle: "Who Will Lift the Trophy This Year?",
  },
];

// Sample latest news data
const latestNews = [
  {
    id: 1,
    imageUrl: "https://www.iplt20.com/assets/images/news/dhoni.jpg",
    headline: "MS Dhoni steps down as CSK captain, Ruturaj Gaikwad to lead",
    summary:
      "In a historic move, MS Dhoni has handed over the CSK captaincy to Ruturaj Gaikwad ahead of IPL 2024",
    date: "March 21, 2024",
    source: "IPL Official",
  },
  {
    id: 2,
    imageUrl: "https://www.iplt20.com/assets/images/news/hardik.jpg",
    headline: "Hardik Pandya to lead Mumbai Indians in IPL 2024",
    summary:
      "Mumbai Indians announce Hardik Pandya as their new captain, taking over from Rohit Sharma",
    date: "March 20, 2024",
    source: "Mumbai Indians",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <div className="home-wrapper">
      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <div className="carousel-container">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.url})`,
              }}
            >
              <div className="hero-content">
                <h1>{image.title}</h1>
                <p className="hero-subtitle">{image.subtitle}</p>
                <div className="hero-buttons">
                  <Link to="/matches" className="hero-button">
                    Live Matches
                  </Link>
                  <Link to="/points-table" className="hero-button">
                    Points Table
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <button className="carousel-button prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            <FaChevronRight />
          </button>

          <div className="carousel-dots">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome to IPL 2024</h2>
          <p>
            The Indian Premier League returns with more excitement, drama, and
            cricketing excellence. 10 teams, 74 matches, and countless moments
            of brilliance await.
          </p>
          <img src={images.trophy} alt="IPL Trophy" className="trophy-image" />
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="quick-links">
        <h2>Quick Access</h2>
        <div className="sections-grid">
          {/* Live Matches Section */}
          <section className="home-section">
            <div className="section-header">
              <img
                src={images.stadium}
                alt="Cricket Stadium"
                className="section-image"
              />
            </div>
            <Link to="/matches" className="section-link">
              <div className="section-content">
                <span>View All Matches</span>
              </div>
            </Link>
          </section>

          {/* Stats Section */}
          <section className="home-section">
            <div className="section-header">
              <img
                src={images.stats}
                alt="Statistics"
                className="section-image"
              />
            </div>
            <Link to="/stats" className="section-link">
              <div className="section-content">
                <span>View All Stats</span>
              </div>
            </Link>
          </section>

          {/* Points Table Section */}
          <section className="home-section">
            <div className="section-header">
              <img
                src={images.pointsTable}
                alt="Points Table"
                className="section-image"
              />
            </div>
            <Link to="/points-table" className="section-link">
              <div className="section-content">
                <span>View Full Table</span>
              </div>
            </Link>
          </section>

          {/* Teams Section */}
          <section className="home-section">
            <div className="section-header">
              <img
                src={images.teams}
                alt="IPL Teams"
                className="section-image"
              />
            </div>
            <Link to="/teams" className="section-link">
              <div className="section-content">
                <span>View All Teams</span>
              </div>
            </Link>
          </section>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="latest-updates">
        <div className="updates-container">
          <h2 className="section-heading">Latest Updates</h2>
          <div className="news-cards">
            {latestNews.map((news) => (
              <div key={news.id} className="news-card-home">
                <div className="news-image-container">
                  <img src={news.imageUrl} alt={news.headline} />
                </div>
                <div className="news-details">
                  <div className="news-meta">
                    <span className="news-date">{news.date}</span>
                    <span className="news-source">{news.source}</span>
                  </div>
                  <h3 className="news-headline">{news.headline}</h3>
                  <p className="news-summary">{news.summary}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view-more-container">
            <Link to="/news" className="view-more-btn">
              View All News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
