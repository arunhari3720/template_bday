import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VideoPage.css"; // Ensure this file contains the responsive styles

const VideoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="video-container">
      <h2 className="video-title">🎬 A Special Message for You!</h2>

      <div className="video-wrapper">
        <p>hi </p>
      </div>

      <div className="video-buttons">
        <button className="video-button" onClick={() => navigate("/note")}>
          💌 One More Thing...
        </button>

      </div>
    </div>
  );
};

export default VideoPage;
