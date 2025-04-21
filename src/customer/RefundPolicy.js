import React from 'react';
import { motion } from 'framer-motion';
import "../App.css";

const RefundPolicy = () => {
  return (
    <motion.div
      className="refund-policy container my-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Refund Policy
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we are here to help. 
        Please read our refund policy below to understand the terms and conditions.
      </motion.p>

      <motion.h2
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Eligibility for Refund
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        - You can request a refund within <strong>30 days</strong> of receiving your order. <br />
        - Refunds will only be issued if the product is <strong>unused</strong>, in its original condition, and in the original packaging.
      </motion.p>

      <motion.h2
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        How to Request a Refund
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        To initiate a refund, please contact our customer service team at <strong>scrunchiesbyvg@gmail.com</strong> with the following details:
        <ul>
          <li>Your order number</li>
          <li>Reason for the refund request</li>
          <li>Photos, videos (must) of any defects or issues with the product</li>
        </ul>
      </motion.p>

      <motion.h2
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Refund Process
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Once your refund request is received, we will review the details and get back to you within <strong>5 business days</strong>. 
        If your refund is approved, the funds will be returned to your original payment method within <strong>7–10 business days</strong>.
      </motion.p>

      <motion.h2
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Non-refundable Items
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Some items may not be eligible for a refund. These include:
        <ul>
          <li>Items marked as "Final Sale"</li>
          <li>Used or damaged products</li>
          <li>Gift cards</li>
        </ul>
      </motion.p>

      <motion.h2
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Exchanges
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        If you received a defective item or the wrong product, we will be happy to exchange it. Please contact us with the necessary details for a smooth exchange process.
      </motion.p>

      <motion.h2
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        Contact Information
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        If you have any questions or need further assistance, please feel free to reach out to our customer support team at <strong>scrunchiesbyvg@gmail.com</strong>.
      </motion.p>
    </motion.div>
  );
};

export default RefundPolicy;
