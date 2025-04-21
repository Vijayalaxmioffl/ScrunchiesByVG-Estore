import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StickyNavbar from "../customer/StickyNavbar";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

function About() {
  return (
    <>
      <StickyNavbar />
      <div className="container py-5">
        <motion.h2
          className="text-center fw-bold mb-4"
          style={{ color: "#4DAA95" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        <motion.h5
          className="fw-bold text-center"
          style={{ color: "#4DAA95" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          👣 Our Story
        </motion.h5>

        <motion.p
          className="lead text-secondary text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          custom={1}
        >
          Hi, I’m Vijayalaxmi (VG) — the hands and heart behind this little
          venture. I’ve always loved creating things that add a little magic to
          the everyday. Thank you for being part of this beautiful journey.
          <br />
          <strong>Scrunchies by VG</strong> is a homegrown brand born out of a
          love for all things soft, pretty, and handmade. We specialize in
          creating unique, high-quality hair accessories that bring joy and
          comfort to everyday styling.
          <br />
          What started as a creative escape during weekends slowly bloomed into
          a full-fledged passion side hustle. Each scrunchie, bow clip, or
          headband is handmade with care, stitched with love, and packed with
          happiness.
        </motion.p>

        <div className="mt-5">
          <motion.h5
            className="fw-bold text-center"
            style={{ color: "#4DAA95" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ✨ What Makes Us Special
          </motion.h5>

          <motion.ul
            className="list-unstyled text-secondary text-center mt-3 fst-italic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "🌸 Handmade with love",
              "🎀 Limited designs",
              "🧵 Customization available",
              "📍 Locally sourced fabrics",
              "♻️ Reusable & gentle on hair",
            ].map((point, index) => (
              <motion.li
                key={index}
                custom={index + 1}
                variants={textVariants}
                className="mb-2"
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-5">
          <motion.h5
            className="fw-bold text-center"
            style={{ color: "#4DAA95" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            📝 Customer Love
          </motion.h5>

          <motion.p
            className="text-secondary text-center mt-3 fst-italic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            custom={6}
          >
            “Every scrunchie I’ve bought from VG has been beautiful and
            long-lasting! Truly handmade with care.”
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default About;
