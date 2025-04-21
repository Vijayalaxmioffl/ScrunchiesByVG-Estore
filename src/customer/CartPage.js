import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Shipping from './Shipping';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItems(newCart);
    window.dispatchEvent(new Event("storage"));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = (item.quantity || 1) + delta;
        return { ...item, quantity: newQty > 1 ? newQty : 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const getTotal = () =>
    cartItems
      .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
      .toFixed(2);

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <h3 className="text-center" style={{ color: "#FD819E" }}>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    {/* Product Image */}
                    <img
                      src={item.image || (item.images && item.images[0])}
                      alt={item.name}
                      style={{
                        height: "60px",
                        width: "60px",
                        objectFit: "cover",
                        marginRight: "10px",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                      }}
                    />
                    <div>
                      <strong>{item.name}</strong>
                    </div>
                  </div>

                  {/* Right: Price, Quantity Controls, Remove */}
                  <div className="text-end d-flex flex-column align-items-end">
                    <div className="mb-2">
                      ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                    </div>

                    <div className="d-flex align-items-center mb-2">
                      {/* Quantity Controls */}
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>

                      {/* Delete Button aligned to right of quantity buttons */}
                      <button
                        className="btn btn-sm btn-danger ms-3"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h5>Total: ₹{getTotal()}</h5>
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn btn-pink"
                onClick={() =>
                 
                  navigate("/customer/Shipping")
                }
              >
                Checkout
              </button>
              <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                Go Back
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => navigate("/customer/Scrunchies")}  
              >
               Add More Items
              </button>
            </div>
          </>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default CartPage;
