// frontend/src/App.tsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Home from './routes/Home';
import Login from './routes/Login';
import Race from './routes/Race';
import RaceDetail from './routes/RaceDetail';
function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('token');
    if (saved) setToken(saved);
  }, []);

  const handleAuthed = (t: string) => {
    localStorage.setItem('token', t);
    setToken(t);
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  // ฟังก์ชัน scroll ไป section ในหน้า Home
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="topbar">
        <div className="logo" onClick={() => navigate('/')}>1nr Racing Team</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/" onClick={() => scrollToSection('news')}>News</Link>
          <Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
          {token ? (
            <button className="cta" onClick={logout}>Logout</button>
          ) : (
            <button className="cta" onClick={() => navigate('/login')}>Login / Sign Up</button>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/race" element={<Race />} />  {/* เพิ่มบรรทัดนี้ */}
        <Route path="/login" element={<Login onAuthed={handleAuthed} />} />
        <Route path="/race/:raceId" element={<RaceDetail />} />
      </Routes>

      <footer className="footer">© 2025 1nr Racing Team</footer>
    </>
  );
}

export default App;
