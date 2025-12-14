import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <h1>Welcome to 1nr Racing Team©</h1>
        <p>1nr Racing Team© Official Website</p>
        <button
          className="cta"
          style={{ marginTop: '16px' }}
          onClick={() => navigate('/login')}
        >
          Join Now
        </button>
      </section>

      {/* News */}
      <section id="news" className="news">
        <Link to="/race" style={{ textDecoration: 'none', color: 'inherit' }}>
          <article className="card">
            <img src="/assets/race1.jpg" alt="Race Highlights" className="card-img" />
            <h3>Race Result</h3>
            <p>All the action from the weekend.</p>
          </article>
        </Link>
        <article className="card">
          <img src="/assets/team1.jpg" alt="Race Team Update" className="card-img" />
          <h3>Team Update</h3>
          <p>Season 2021 Result.</p>
        </article>
        <article className="card">
          <img src="/assets/tech.jpg" alt="Tech Talk" className="card-img" />
          <h3>Tech Talk</h3>
          <p>Bike upgrades explained.</p>
        </article>
      </section>

      {/* Contact */}
      <section id="contact" className="contact" style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Contact :</h2>
        <IconContext.Provider value={{ style: { marginRight: '8px', color: '#e7e7e7' } }}>
          <p>
            <a href="https://www.facebook.com/1nrracing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#e7e7e7' }}>
              <FaFacebookF />
              Facebook: 1nr Racing Team
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/1nrracingteam" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#e7e7e7' }}>
              <FaInstagram />
              Instagram: 1nrracingteam
            </a>
          </p>
          <p>
            <FaEnvelope />
            Email: team1nrracing@gmail.com
          </p>
        </IconContext.Provider>
      </section>
    </main>
  );
}

export default Home;
