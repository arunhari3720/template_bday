// src/pages/VideoPlayer.jsx
import React from "react";
import surpriseVideo from "../assets/bday_video.mp4"; // adjust path as needed
import "../styles/VideoPlayer.css"; // optional, if you want to isolate video styles

const VideoPlayer = () => {
  return (
    <video
      className="main-video"
      src={surpriseVideo}
      autoPlay
      muted
      playsInline
      controls // remove if you want it hidden
      loop
    />
  );
};

export default VideoPlayer;
