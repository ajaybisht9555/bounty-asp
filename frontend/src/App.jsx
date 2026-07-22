import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Architecture from './pages/Architecture';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/architecture" element={<Architecture />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Automate your repository today.</h2>
            {/* NOTE: Update this button when your agent is approved on OKX.AI */}
            <button className="btn btn-primary" disabled>Agent Under Review on OKX.AI</button>
            <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <span>BountyFix Protocol</span>
              <span>OKX.AI Genesis Hackathon 2026</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
