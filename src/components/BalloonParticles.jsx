import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../styles/balloonparticles.css';

const BalloonParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="balloon-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 15 },
            shape: { type: "circle" },
            size: { value: 20 },
            color: { value: ["#FF69B4", "#FFD700", "#87CEEB"] },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              outModes: { default: "out" },
            },
          },
        }}
      />
    </div>
  );
};

export default BalloonParticles;
