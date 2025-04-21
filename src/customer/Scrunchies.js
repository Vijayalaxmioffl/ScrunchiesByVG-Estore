import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StickyNavbar from "../customer/StickyNavbar";
import { motion } from "framer-motion";

const Scrunchies = () => {
  const [scrunchies, setScrunchies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("productItems")) || [];
    const scrunchieItems = items.filter(
      (item) => item.category?.toLowerCase() === "scrunchies"
    );
    setScrunchies(scrunchieItems);
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/customer/ViewProduct/${id}`);
  };

  return (
    <>
      {/* Navigation Links */}
      <StickyNavbar />

      <div className="container py-5">
        <h2 className="text-center mb-4 text-green">Our Scrunchies</h2>
        <div className="row">
          {scrunchies.length === 0 ? (
            <p>No scrunchies available.</p>
          ) : (
            scrunchies.map((item, index) => (
              <motion.div
                key={item.id || index}
                className="col-md-3 mb-4"
                initial={{ opacity: 0, y: 30 }} // Start invisible, slightly lower
                animate={{ opacity: 1, y: 0 }} // Fade in and slide up
                transition={{ duration: 0.5, delay: 0.2 * index }} // Staggered delay for each card
              >
                <div className="card shadow-sm h-100 w-100">
                  {item.images && item.images.length > 0 && (
                    <div
                      style={{
                        height: "200px",
                        width: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        margin: "0 auto",
                      }}
                    >
                      <motion.img
                        src={item.images[0]} // First image from the array
                        alt={item.name}
                        className="card-img-top"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                        whileHover={{ scale: 1.05 }} // Slight zoom-in effect on hover
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                  <div className="card-body p-3">
                    <h6 className="card-title fs-5">{item.name}</h6>
                    <p className="card-text  mb-2">₹{item.price}</p>
                    {/* View Details Button */}
                    <motion.button
                      className="btn btn-pink w-100 mt-3 text-light"
                      onClick={() => handleViewDetails(item.id)}
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.90 }} 
                      transition={{ duration: 0.2 }}
                    >
                      View Product
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Scrunchies;
