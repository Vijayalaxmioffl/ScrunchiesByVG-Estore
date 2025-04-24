import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddToWishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: "#FD819E" }}>
        My Wishlist
      </h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="row">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              className="col-md-2 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card h-100">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-success fw-bold">₹{product.price}</p>
                  <button
                    className="btn btn-pink text-light"
                    onClick={() => navigate(`/customer/ViewProduct/${product.id}`)}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToWishlist;
