import React from "react";
import { Link } from "react-router-dom";

const News: React.FC = () => {
  // ข้อมูลข่าวสาร
  const newsItems = [
    { id: 'news1', title: 'Race Result', desc: 'All the action from the weekend.', img: '/assets/race1.jpg', link: '/race' },
    { id: 'news2', title: 'Team Update', desc: 'Season 2021 Result.', img: '/assets/team1.jpg', link: '#' },
    { id: 'news3', title: 'Tech Talk', desc: 'Bike upgrades explained.', img: '/assets/tech.jpg', link: '#' },
  ];
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Latest News</h1>

      <section className="news-cards">
                {newsItems.map(news => (
                  <article key={news.id} className="card">
                    <Link to={news.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <img src={news.img} alt={news.title} className="card-img" />
                      <h3>{news.title}</h3>
                      <p>{news.desc}</p>
                    </Link>
                  </article>
                ))}
              </section>
            </main>
          );
        };
        
        export default News;