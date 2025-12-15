// frontend/src/routes/Race.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Race: React.FC = () => {
  // ข้อมูล race
  const races = [
    { id: 'race12', title: 'Race 12 ValenciaGP', desc: 'Grand Prix of the Valencian Community', img: '/assets/race12.jpg' },
    { id: 'race11', title: 'Race 11 MalaysianGP', desc: 'Grand Prix of Malaysia', img: '/assets/race11.jpg' },
    { id: 'race10', title: 'Race 10 ArgentinaGP', desc: 'Grand Prix of Argentina', img: '/assets/race10.jpg' },
    { id: 'race9', title: 'Race 9 AragonGP', desc: 'GRAN PREMIO DE ARAGÓN', img: '/assets/race9.jpg' },
    { id: 'race8', title: 'Race 8 ThailandGP', desc: 'OR THAILAND GRAND PRIX', img: '/assets/race8.jpg' },
    { id: 'race7', title: 'Race 7 San MarinoGP', desc: 'Gran Premio Octo di San Marino e della Riviera di Rimini', img: '/assets/race7.jpg' },
    { id: 'race6', title: 'Race 6 Red bull Ring', desc: 'Grand Prix of Spielberg', img: '/assets/race6.jpg' },
    { id: 'race5', title: 'Race 5 Algarve', desc: 'Grand Prix of Portugal', img: '/assets/race5.jpg' },
    { id: 'race4', title: 'Race 4 Lusail', desc: 'Grand Prix of Qatar', img: '/assets/race4.jpg' },
    { id: 'race3', title: 'Race 3 Sachsenring', desc: 'Granprix Deutschland Sachsenring', img: '/assets/race3.jpg' },
    { id: 'race2', title: 'Race 2 Mugello', desc: 'Gran Premio d\'Italia', img: '/assets/race2.jpg' },
  ];

  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Race Result</h1>

      <section className="race-cards">
        {races.map(race => (
          <article key={race.id} className="card">
            <Link to={`/race/${race.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={race.img} alt={race.title} className="card-img" />
              <h3>{race.title}</h3>
              <p>{race.desc}</p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Race;
