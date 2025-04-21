import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import StickyNavbar from "../customer/StickyNavbar";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="py-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation Links */}
      <StickyNavbar />

      {/* Scrolling Bar */}
      <motion.div
        className="bg-light py-2 mb-4 overflow-hidden position-relative"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="scrolling-text text-dark fw-bold">
          COD Available — Free Shipping Above ₹688 — Easy Returns — COD Available — Free Shipping Above ₹688 — Easy Returns — COD Available — Free Shipping Above ₹688 — COD Available
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="display-5 fw-bold mb-4"
        style={{ color: "#4DAA95" }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Welcome to Scrunchies By VG 🎀
      </motion.h1>

      {/* Paragraph Section */}
      <motion.p
        className="lead mb-3 text-secondary"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Handcrafted with love, our scrunchies and accessories are designed to add charm and elegance to your everyday style. 🌸
      </motion.p>

      <motion.p
        className="lead mb-3 text-secondary"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        Explore our collection and find the perfect match for your mood — whether it's bold, playful, or effortlessly minimal. 💖
      </motion.p>

      <motion.p
        className="lead mb-3 text-secondary"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        Thank you for supporting small businesses like ours. We hope you find something you’ll love! ✨
      </motion.p>
    </motion.div>
  );
}

export default Home;
