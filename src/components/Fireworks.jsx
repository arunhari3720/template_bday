import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Fireworks = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Fireworks;
