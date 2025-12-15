import { Link } from 'react-router-dom';

const Tech: React.FC = () => {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Tech Talk</h1>

      <section className="news-cards">
        <article className="card">
          <img src="/assets/tech1.jpg" alt="Tech Upgrade 1" className="card-img" />
          <h3>Engine Upgrades</h3>
          <p>Exploring the latest engine technologies used in our racing bikes.</p>
        </article>
        <article className="card">
          <img src="/assets/tech2.jpg" alt="Tech Upgrade 2" className="card-img" />
          <h3>Aerodynamics</h3>
          <p>How aerodynamics play a crucial role in racing performance.</p>
        </article>
        <article className="card">
          <img src="/assets/tech3.jpg" alt="Tech Upgrade 3" className="card-img" />
          <h3>Suspension Systems</h3>
          <p>Understanding the suspension setups for different track conditions.</p>
        </article>
      </section>
    </main>
  );
};

export default Tech;