import React from "react";
import ReactPlayer from "react-player";
import "../styles/VideoMessage.css";

const VideoMessage = () => (
  <div className="video-wrapper">
    <ReactPlayer url="https://youtu.be/5u4xTa3LR2U?si=JXB4wVI_aDGSOrMD" width="100%" controls />
  </div>
);

export default VideoMessage;
