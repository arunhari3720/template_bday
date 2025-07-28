import React, { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import '../styles/birthdaycake.css';
import bday_music from '../assets/bday_song.mp3';

const BirthdayCake = () => {
  const [isLit, setIsLit] = useState(false);
  const audioRef = useRef(null);

  const handleLightCandle = () => {
    setIsLit(true);
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    }
  };

 



  return (
    <>
      {/* 🎵 Hidden Audio */}
      <audio ref={audioRef} src={bday_music} preload="auto" />

      {/* 🔘 Button */}
      <button id="lightButton" onClick={handleLightCandle} disabled={isLit}>
        {isLit ? '🎉 Lit!' : 'Light the Candle 🎉'}
      </button>

      {/* 🎂 Cake */}
      <div className="cake">
        <div className="layer layer-bottom"></div>
        <div className="layer layer-middle"></div>
        <div className="layer layer-top"></div>
        <div className="icing"></div>
        <span className="drip drip1"></span>
        <span className="drip drip2"></span>
        <span className="drip drip3"></span>
        <div className="candle">
          <div className="flame" style={{ display: isLit ? 'block' : 'none' }}></div>
        </div>
      </div>

      {/* 🎁 Modal */}
      
    </>
  );
};

export default BirthdayCake;
