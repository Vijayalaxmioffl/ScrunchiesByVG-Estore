import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StickyNavbar from "../customer/StickyNavbar";
import { motion } from "framer-motion";

const Scrunchies = () => {
  const [scrunchies, setScrunchies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  // Filter scrunchies based on search term
  const filteredScrunchies = scrunchies.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <StickyNavbar />

      <div className="container py-5">
        <h2 className="text-center mb-4 text-green">Our Scrunchies</h2>

        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search scrunchie by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {filteredScrunchies.length === 0 ? (
            <p className="text-center">No scrunchies found.</p>
          ) : (
            filteredScrunchies.map((item, index) => (
              <motion.div
                key={item.id || index}
                className="col-md-3 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
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
                        src={item.images[0]}
                        alt={item.name}
                        className="card-img-top"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                  <div className="card-body p-3">
                    <h6 className="card-title fs-5">{item.name}</h6>
                    <p className="card-text mb-2">₹{item.price}</p>
                    <motion.button
                      className="btn btn-pink w-100 mt-3 text-light"
                      onClick={() => handleViewDetails(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
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
