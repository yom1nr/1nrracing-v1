import React from 'react';
import { useParams } from 'react-router-dom';

const RaceDetail: React.FC = () => {
  const { raceId } = useParams<{ raceId: string }>();

  const raceData: Record<string, any> = {
    'race12': {
      title: 'Race 12 ValenciaGP',
      date: '28 November 2021',
      circuit: 'Circuit de Valencia',
      attendance: '',
      motogp: {
        winner: 'Non1nr ',
        description: 'Start from a front row Finish on Podium',
        image: '/assets/motogp12nr.jpg',
      },
      moto2: {
        winner: 'Yom1nr',
        description: '4th victory in Moto2 of the 2021 season',
        image: '/assets/race12.jpg',
      },
      moto3: {
        winner: 'Del1nr and Kim1nr',
        description: 'Finish 1-2 on the podiums',
        image: '/assets/moto312dr.jpg',
      },
      highlightVideo: 'https://youtu.be/L72SDn7XZcI?si=zGCGuHsK6luniIsd',
    },
    // เพิ่มข้อมูล raceอื่นๆ ตามต้องการ
    'race11': {
      title: 'Race 11 MalaysianGP',
      date: '24 October 2021',
      circuit: 'Sepang International Circuit',
      attendance: '',
      motogp: {
        winner: 'Non1nr ',
        description: 'Start from a front row Finish on Podium',
        image: '/assets/motogp12nr.jpg',
      },
      moto2: {
        winner: 'Yom1nr',
        description: 'Yom1nr DNF the race due to technical issue',
        image: '/assets/race12.jpg',
      },
      moto3: {
        winner: 'Del1nr and Kim1nr',
        description: 'Finish 1-2 on the podiums',
        image: '/assets/moto312dr.jpg',
      },
      highlightVideo: 'https://www.youtube.com/live/XPjYoUHulhg?si=4y68PBiyjGeB91_Q',
    },
  };

  const race = raceData[raceId!] || {
    title: 'ไม่พบข้อมูล',
    date: '',
    circuit: '',
    attendance: '',
    motogp: {},
    moto2: {},
    moto3: {},
    highlightVideo: '',
  };

  const embedUrl = race.highlightVideo
    ? race.highlightVideo.replace(
        /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+).*/,
        'https://www.youtube.com/embed/$1'
      )
    : '';

  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{race.title}</h1>
      <p>{race.date} | {race.circuit} {race.attendance}</p>

      {['motogp','moto2','moto3'].map((category) => (
        <section key={category} className="race-category" style={{ margin: '40px 0' }}>
          <h2>{category.toUpperCase()}</h2>
          {race[category]?.image && (
            <img src={race[category].image} alt={`${category} Winner`} style={{ width: '100%', maxWidth: '600px', borderRadius: '12px' }} />
          )}
          <h3>{race[category]?.winner}</h3>
          <p>{race[category]?.description}</p>
        </section>
      ))}

      {embedUrl && (
        <section className="highlight-video" style={{ margin: '40px 0' }}>
          <h2>Full Race</h2>
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ maxWidth: '100%', borderRadius: '12px' }}
          ></iframe>
        </section>
      )}
    </main>
  );
};

export default RaceDetail;
