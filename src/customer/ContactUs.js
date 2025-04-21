import React from "react";
import StickyNavbar from "../customer/StickyNavbar";
import { FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <StickyNavbar />
      <div className="container py-5">
        <motion.h2
          className="text-center text-green mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch With Us
        </motion.h2>

        <div className="row justify-content-center">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card shadow p-4 border-0">
              <h5 className="mb-3 fw-bold">We'd love to hear from you!</h5>
              <p className="text-muted">
                Whether it's a question, feedback, or just a hello — reach out!
              </p>

              <motion.div
                className="mb-3 d-flex align-items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope className="me-2 text-green" />
                <span className="fw-medium">scrunchiesbyvg@gmail.com</span>
              </motion.div>

              <motion.div
                className="mb-3 d-flex align-items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaPhoneAlt className="me-2 text-green" />
                <span className="fw-medium">+91 84444 84444</span>
              </motion.div>

              <motion.div
                className="mb-3 d-flex align-items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaInstagram className="me-2 text-green" />
                <a
                  href="https://www.instagram.com/scrunchies__by__vg"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-medium"
                >
                  @scrunchies__by__vg
                </a>
              </motion.div>

              <hr />

              <h6 className="fw-bold">Business Hours</h6>
              <p className="mb-1">Mon – Fri: 10:00 AM – 6:00 PM</p>
              <p className="mb-0">Saturdays: 11:00 AM – 3:00 PM</p>
              <p className="mb-0 text-muted">Closed on Sundays</p>
            </div>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          className="row justify-content-center mt-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="col-md-10">
            <motion.h1
              className="text-center mb-3 text-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Our Location: Madurai
            </motion.h1>
            <div className="ratio ratio-16x9">
              <iframe
                title="Madurai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.413569800709!2d78.11547327589522!3d9.92520057420243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5841be5f91d%3A0x893b2a3903bb82b8!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713099490795!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
