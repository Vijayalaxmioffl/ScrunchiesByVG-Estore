import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const SideCart = ({ isOpen, onClose }) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (acc, item) => ({
      quantity: acc.quantity + item.quantity,
      price: acc.price + item.quantity * Number(item.price),
    }),
    { quantity: 0, price: 0 }
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "#000", zIndex: 1040 }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Side Cart Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="position-fixed top-0 end-0 bg-white shadow-lg p-4"
            style={{
              width: "320px",
              height: "100vh",
              zIndex: 1050,
              overflowY: "auto",
              borderLeft: "1px solid #eee",
              borderRadius: "8px 0 0 8px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
            <i className="bi bi-cart me-2"></i> <h5 className="mb-0 text-pink">  Cart Summary</h5>
              <motion.button
                className="btn-close"
                onClick={onClose}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>

            {cart.length === 0 ? (
              <p className="text-muted">Your cart is empty.</p>
            ) : (
              <>
                <ul className="list-group mb-3">
                  {cart.map((item) => (
                    <motion.li
                      className="list-group-item d-flex justify-content-between align-items-start"
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#f9f9f9",
                        transition: "all 0.3s",
                      }}
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <br />
                        <small className="text-muted">Qty: {item.quantity}</small>
                      </div>
                      <span className="fw-bold">₹{item.quantity * item.price}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="fw-bold border-top pt-2">
                  Total Items: {total.quantity}
                  <br />
                  Total Price: ₹{total.price}
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideCart;
