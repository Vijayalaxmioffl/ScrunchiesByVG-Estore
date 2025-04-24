import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
//import L from "leaflet"; // Import Leaflet

const OutForDelivery = () => {
  const [eta, setEta] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // ETA between 0 and 10
    const randomETA = Math.floor(Math.random() * 11)+ 1;
    setEta(randomETA);

    // Load cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const route = [
    [9.925, 78.119], // (Start point)
    [11.082, 79.270], // Midpoint 
    [13.0827, 80.2707], // Chennai 
  ];

  return (
    <div className="container text-center py-4 w-75">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-3 rounded shadow bg-light"
      >
        <div className="row">
          {/* Map Column */}
          <div className="col-md-6 mb-3">
            <h5 className="mb-3 text-center">Delivery Route</h5>
            <MapContainer
              center={[9.925, 78.119]} // Default center
              zoom={13}
              style={{ height: "300px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Marker at start of route */}
              <Marker position={route[0]}>
                <Popup>Order started here!</Popup>
              </Marker>
              {/* Marker at the end of the route */}
              <Marker position={route[route.length - 1]}>
                <Popup>Order destination reached!</Popup>
              </Marker>
              {/* Polyline showing the route */}
              <Polyline positions={route} color="#f81efb" />
            </MapContainer>
          </div>

          {/* Content Column */}
          <div className="col-md-6">
            <i className="bi bi-truck text-warning" style={{ fontSize: "3rem" }}></i>
            <h4 className="mt-2">Out for Delivery!</h4>
            <p className="text-muted small mb-1">Your order is on its way 🚚</p>
            <p className="fw-semibold text-pink mb-3">
              Arriving in approx. {eta} days
            </p>

            {/* Freebie Gift Section */}
            <div className="bg-success bg-opacity-10 border border-success rounded p-2 mb-3">
              <p className="mb-0 text-green fw-semibold">
                🎁 Surprise! A cute freebie gift is on its way with your order 💖
              </p>
            </div>

            <p className="text-muted small">Sit back and relax 💝</p>

            {/* Cart Items Table */}
            <div className="mt-4 ">
              <h6 className="mb-2">Items in Your Order</h6>
              {cartItems.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-sm table-bordered align-middle mb-0">
                    <thead className="table-warning small">
                      <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>₹</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index} style={{ lineHeight: "1.2" }}>
                          <td>
                            <img
                              src={item.images?.[0] || "https://via.placeholder.com/100"}
                              alt={item.name}
                              style={{ width: "50px", height: "50px", objectFit: "cover" }}
                              className="rounded"
                            />
                          </td>
                          <td className="small">{item.name}</td>
                          <td className="small">{item.quantity || 1}</td>
                          <td className="small text-success fw-semibold">₹{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted small">No items in cart.</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OutForDelivery;
