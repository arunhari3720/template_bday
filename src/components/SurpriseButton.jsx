import React, { useState } from "react";
import BirthdayCake from "./BirthdayCake";
import Wishes from "./Wishes";
import VideoMessage from "./VideoMessage";
import '../styles/surprisebutton.css';

const SurpriseButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="surprise-wrapper">
      <button onClick={() => setShow(true)} className="surprise-button">
        🎁 Tap for Surprise
      </button>

      {show && (
        <>
          <BirthdayCake />
          <Wishes />
          <VideoMessage />
        </>
      )}
    </div>
  );
};

export default SurpriseButton;
