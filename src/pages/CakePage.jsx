// src/pages/CakePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BirthdayCake from "../components/BirthdayCake";
import "../styles/CakePage.css";

const CakePage = () => {
  const navigate = useNavigate();
   const closeModal = () => {
    document.getElementById("wishModal").style.display = "none";
  };

  return (
    <div className="cake-container">
      <h2 className="cake-title">🎂 Make a Wish!</h2>
      <BirthdayCake />
      <button className="cake-button" onClick={() => navigate("/video")}>
        🎉 Another Surprise 🎉
      </button>
      <div id="wishModal" className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>🎂 Happy Birthday! 🎈</h2>
          <p>Wishing you joy, love, and lots of cake! 🍰</p>
        </div>
      </div>
    </div>
    
  );
};

export default CakePage;
