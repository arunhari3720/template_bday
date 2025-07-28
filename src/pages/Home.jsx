import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cake");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🎉 Happy Birthday Priya 🎉</h1>
      <p className="home-subtitle">Click below for a surprise!</p>
      <button className="home-button" onClick={handleClick}>
        🎁 Surprise 🎁
      </button>
    </div>
  );
};

export default Home;
