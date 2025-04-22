import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(count);
    };

    updateCartCount(); // Run once on mount
    window.addEventListener("storage", updateCartCount); // Listen for changes from other tabs
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const goToAdminLogin = () => {
    navigate("/admin/AdminLogin");
  };

  const goToAdminDashboard = () => {
    navigate("/admin/AdminDashboard");
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className="text-center text-light fw-semibold py-2 sticky-top"
        style={{ backgroundColor: "rgb(253, 129, 158)" }}
      >
        FREE SHIPPING ABOVE ₹488/-
      </div>

      {/* Header Section */}
      <header
        className="bg-green text-white py-3 shadow-sm sticky-top"
        style={{ top: "40px", zIndex: 1000, backgroundColor: "#4DAA95" }}
      >
        <div
          className="container-fluid d-flex justify-content-between align-items-center position-relative"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {/* Logo */}
          <Link
            to="/"
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <img
              src="/logo.png"
              alt="Scrunchies By VG"
              width="70"
              className="me-2 ms-5 position-absolute rounded-circle border border-2 border-white"
              style={{ borderColor: "#fff", backgroundColor: "#fff", padding: "1px" }}
            />
          </Link>

          {/* Title */}
          <Link to="/"  className="d-flex align-items-center text-white text-decoration-none"> 
          <h1 className="m-0 position-absolute start-50 translate-middle-x fw-bold">
            Scrunchies By VG
          </h1>
          </Link>
          {/* Icon Section */}
          <div className="ms-auto d-flex align-items-center gap-0 me-4">

            {/* Login/User */}
            <div className="text-center" style={{ width: "40px" }}>
              <FaUser
                title="Login / Profile"
                role="button"
                onClick={goToAdminLogin}
                className="mx-auto d-block"
                size={22}
              />
            </div>

            {/* Admin Dashboard */}
            <div className="text-center" style={{ width: "40px" }}>
              <FaClipboardList
                title="Admin Dashboard"
                role="button"
                onClick={goToAdminDashboard}
                className="mx-auto d-block"
                size={22}
              />
            </div>
            {/* Wishlist */}
            <div className="text-center" style={{ width: "40px" }}>
              <Link to="/customer/AddToWishlist" className="text-white">
                <FaHeart title="Favourites" role="button" className="mx-auto d-block" size={22}/>
              </Link>
            </div>

            {/* Cart */}
            <div
              className="text-center position-relative"
              style={{ width: "30px" }}
              onClick={() => navigate("/customer/CartPage")}
              role="button"
              title="Cart"
            >
              <FaShoppingCart className="mx-auto d-block" size={22} />
              {cartCount > 0 && (
                <span
                  style={{
                    backgroundColor: "white",
                    color: "#FD819E",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    minWidth: "18px",
                    textAlign: "center",
                    position: "absolute",
                    top: 0,
                    left: "60%",
                    transform: "translate(-30%, -40%)",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </div>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
