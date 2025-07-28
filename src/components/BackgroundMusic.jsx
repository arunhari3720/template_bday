import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current?.play().catch((err) => {
        // Autoplay will fail silently unless user interacts
        console.log("Autoplay prevented. Tap to play music.");
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/music/happy-birthday.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
