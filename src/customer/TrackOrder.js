import React, { useState } from "react";
import StickyNavbar from "../customer/StickyNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (!trackingId.trim()) {
      toast.error("Please enter a valid tracking ID.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
      });
      return;
    }
    const url = `https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx`;
    window.open(url, "_blank");
  };

  return (
    <>
      <StickyNavbar />
      <div className="container py-5">
        <motion.h2
          className="text-center mb-4 text-green"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hey Scrunchie Queen!! 💌
          </motion.span>{" "}
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Track Your Order Here
          </motion.span>
        </motion.h2>

        <div className="row justify-content-center">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="card shadow p-4"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <label className="form-label fw-bold">Enter Your Tracking ID:</label>
              <motion.input
                type="text"
                className="form-control mb-3"
                placeholder="Example: EE123456789IN"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTrack}
                className="btn bg-green text-white w-100"
              >
                Track Order 🚚
              </motion.button>

              <motion.p
                className="text-muted mt-3"
                style={{ fontSize: "14px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Orders are shipped via India Post. Tracking ID will be shared
                once your order is dispatched. Tracking updates may take up to
                12 hours to reflect.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default TrackOrder;
