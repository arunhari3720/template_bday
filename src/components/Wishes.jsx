import React from "react";
import { motion } from "framer-motion";
import "../styles/wishes.css";

const Wishes = () => (
  <motion.div
    className="wishes"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    🎈 Happy Birthday, Bestie! 🎈 <br />
    💖 You make every day brighter! 💖 <br />
    🥳 Here's to your best year yet!
  </motion.div>
);

export default Wishes;
