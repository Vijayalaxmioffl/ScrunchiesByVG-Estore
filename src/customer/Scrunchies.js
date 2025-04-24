import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StickyNavbar from "../customer/StickyNavbar";
import { motion } from "framer-motion";

const Scrunchies = () => {
  const [scrunchies, setScrunchies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
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
  const [selectedColor, setSelectedColor] = useState("");
  const [products] = useState([]);
  const filteredProducts = products.filter(product =>
    selectedColor ? product.color === selectedColor : true
  );
  
  const handleSort = (items) => {
    switch (sortOption) {
      case "a-z":
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case "price-low-high":
        return [...items].sort((a, b) => a.price - b.price);
      case "price-high-low":
        return [...items].sort((a, b) => b.price - a.price);
      default:
        return items;
    }
  };

  // Search and sort combined
  const filteredScrunchies = handleSort(
    scrunchies.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <StickyNavbar />
      <div className="container py-5">
        <h2 className="text-center mb-4 text-green">Our Scrunchies</h2>

        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3 mb-4">
            <div className="card p-3 shadow-sm">
              <h5 className="mb-3">Filters</h5>
              <div className="mb-2">
                <label className="form-label">Search</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="d-flex gap-3 mb-3 flex-wrap">
  {/* Sort Dropdown */}
  <div className="mb-2">
    <label className="form-label">Sort By</label>
    <select
      className="form-select"
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="">Default</option>
      <option value="a-z">Alphabetical A-Z</option>
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
    </select>
  </div>

  {/* Color Filter Dropdown */}
  <div className="mb-2">
    <label className="form-label">Filter by Color</label>
    <select
      className="form-select"
      value={selectedColor}
      onChange={(e) => setSelectedColor(e.target.value)}
    >
      <option value="">All Colors</option>
      <option value="Black">Black</option>
      <option value="Rosegold">Rosegold</option>
      <option value="Golden">Golden</option>
      <option value="Silver">Silver</option>
      <option value="Blackmetal">Blackmetal</option>
      <option value="White">White</option>
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      <option value="Yellow">Yellow</option>
      <option value="Purple">Purple</option>
      <option value="Pink">Pink</option>
      <option value="Orange">Orange</option>
      <option value="Brown">Brown</option>
    </select>
  </div>
</div>

            </div>
          </div>

          {/* Product Cards */}
          <div className="col-md-9">
            <div className="row">
              {filteredScrunchies.length === 0 ? (
                <p className="text-center">No scrunchies found.</p>
              ) : (
                filteredScrunchies.map((item, index) => (
                  <motion.div
                    key={item.id || index}
                    className="col-md-4 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    <div className="card shadow-sm h-100 w-100">
                      {item.images?.[0] && (
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
        </div>
      </div>
    </>
  );
};

export default Scrunchies;
