import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CakePage from './pages/CakePage';   // Optional: only if you’ve created it
import VideoPage from './pages/VideoPage'; // Optional
import NotePage from './pages/NotePage';   // Optional

import BackgroundMusic from './components/BackgroundMusic';
import Decorations from './components/Decorations';
import Fireworks from './components/Fireworks';
import BalloonParticles from './components/BalloonParticles';

import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Background effects */}
      <BackgroundMusic />
      <BalloonParticles />
      <Fireworks />
      <Decorations />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake" element={<CakePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/note" element={<NotePage />} />
      </Routes>
    </div>
  );
};

export default App;
