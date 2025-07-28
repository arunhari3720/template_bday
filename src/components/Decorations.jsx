import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Decorations = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} numberOfPieces={60} />;
};

export default Decorations;
