import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      const existingUser = JSON.parse(localStorage.getItem("admin"));
      if (existingUser && existingUser.email === email) {
        toast.error("Admin already exists! Please login.", {
          position: "top-center",
          autoClose: 1500,
        });
      } else {
        localStorage.setItem("admin", JSON.stringify({ email, password }));
        toast.success("Signup successful! Please log in.", {
          position: "top-center",
          autoClose: 1500,
        });
        setIsSignup(false);
      }
    } else {
      const storedAdmin = JSON.parse(localStorage.getItem("admin"));
      if (
        storedAdmin &&
        storedAdmin.email === email &&
        storedAdmin.password === password
      ) {
        localStorage.setItem("isAdminAuthenticated", "true");
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 1500,
        });
        setTimeout(() => {
          navigate("/admin/AdminDashboard");
        }, 1500);
      } else {
        toast.error("Invalid credentials. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      
      {/* LEFT: Enlarged Image */}
      <motion.div
        className="w-60 d-flex align-items-center justify-content-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ flex: "1.2" }}
      >
        <img
          src="/3dwomen1.png"
          alt="admin visual"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>
  
      {/* RIGHT: Logo, Heading, and Card */}
      <motion.div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ flex: "1", padding: "3vw" }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Logo and Page Name */}
        <div className="text-center mb-4">
          <img
            src="/logo.png" // Replace with your logo path
            alt="logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px"
            }}
          />
          <h1 className="fw-bold" style={{ color: "#4DAA95", fontSize: "2rem" }}>
            Scrunchies by VG
          </h1>
        </div>
  
        {/* Login/Signup Card */}
        <motion.div
          className="card shadow p-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "1rem",
            width: "100%",
            maxWidth: "450px"
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-center mb-4 fw-bold text-pink" >
            {isSignup ? "Admin Sign Up" : "Admin Login"}
          </h2>
  
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn bg-green w-100">
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>
  
          <p className="text-center mt-3 ">
            {isSignup ? "Already an admin?" : "New admin?"}{" "}
            <button
              className="btn btn-link"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </motion.div>
  
      <ToastContainer />
    </div>
  );
  
  
};

export default AdminLogin;
