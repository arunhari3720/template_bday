import React from "react";
import "./modal.css";

const CelebrationModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>🎉 Happy Birthday! 🎉</h2>
        <p>Wishing you joy, success and lots of cake!</p>
        <button className="modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CelebrationModal;
