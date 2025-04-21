import React from 'react';
import { motion } from 'framer-motion';
import "../App.css";

const TermsOfService = () => {
  return (
    <motion.div
      className="terms-of-service container my-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Terms of Service
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Welcome to our website. By accessing or using our services, you agree to the following terms and conditions.
      </motion.p>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        1. Use of the Website
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        - You must be at least 13 years old to use this site. <br />
        - You agree not to use our site for any illegal or unauthorized purpose. <br />
        - You must not transmit any worms, viruses, or code of a destructive nature.
      </motion.p>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        2. Product Information
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        We do our best to ensure product descriptions, pricing, and availability are accurate.
        However, we reserve the right to correct any errors or inaccuracies at any time.
      </motion.p>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        3. Payments
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        All payments are processed securely. We do not store any of your payment details.
        Prices are listed in <strong>INR</strong> unless otherwise specified.
      </motion.p>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        4. Shipping & Delivery
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        Orders are typically processed within 7–10 business days. Delivery times may vary based on your location and shipping service.
      </motion.p>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        5. Refund & Returns
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
        Please refer to our <a href="/customer/RefundPolicy">Refund Policy</a> for detailed information on returns and refunds.
      </motion.p>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        6. Changes to Terms
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        We reserve the right to update or modify these terms at any time without prior notice.
        Your continued use of the site after changes means you accept the new terms.
      </motion.p>

      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
        7. Contact Us
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
        If you have any questions about these Terms of Service, please contact us at <strong>scrunchiesbyvg@gmail.com</strong>.
      </motion.p>
    </motion.div>
  );
};

export default TermsOfService;
