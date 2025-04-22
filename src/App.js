import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./customer/Header";
import Footer from "./customer/Footer"; 
import Home from "./customer/Home"; 
import About from "./customer/About"; 
import Scrunchies from "./customer/Scrunchies"; 
import Chains from "./customer/Chains"; 
import SatinPillowcase from "./customer/SatinPillowcase";
import Bowclips from "./customer/Bowclips"; 
import HandmadeHeadbands from "./customer/HandmadeHeadbands"; 
import ContactUs from "./customer/ContactUs"; 
import TrackOrder from "./customer/TrackOrder"; 
import ViewProduct from "./customer/ViewProduct";
import RefundPolicy from "./customer/RefundPolicy";
import TermsOfService from "./customer/TermsOfService";
import CartPage from "./customer/CartPage";
import AddToWishlist from "./customer/AddToWishlist";
import Shipping from "./customer/Shipping";
import OutForDelivery from "./customer/OutForDelivery";




import AdminLogin from "./admin/AdminLogin"; 
import AdminDashboard from "./admin/AdminDashboard";
import EditDashboard from "./admin/EditDashboard";  
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from "react-toastify";

const AppContent = () => {
  const location = useLocation();

  // Add any paths here where you want to HIDE the Header & Footer
  const hideHeaderFooter = location.pathname === "/admin/AdminLogin";

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          {/* customer viewing pgs */}
          <Route path="/" element={<Home />} />
          <Route path="/customer/about" element={<About />} />
          <Route path="/customer/Scrunchies" element={<Scrunchies />} />
          <Route path="/customer/Chains" element={<Chains />} />
          <Route path="/customer/SatinPillowcase" element={<SatinPillowcase />} />
          <Route path="/customer/Bowclips" element={<Bowclips />} />
          <Route path="/customer/HandmadeHeadbands" element={<HandmadeHeadbands />} />
          <Route path="/customer/ContactUs" element={<ContactUs />} />
          <Route path="/customer/TrackOrder" element={<TrackOrder />} />
          <Route path="/customer/ViewProduct/:id" element={<ViewProduct />} />
          <Route path="/customer/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/customer/TermsOfService" element={<TermsOfService />} />
          <Route path="/customer/CartPage" element={<CartPage />} />
          <Route path="/customer/AddToWishlist" element={<AddToWishlist />} />
          <Route path="/customer/Shipping" element={<Shipping />} />
          <Route path="/customer/OutForDelivery" element={<OutForDelivery />} />

          {/* admin only pgs */}
          <Route path="/admin/AdminLogin" element={<AdminLogin />} />
          <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/EditDashboard" element={<EditDashboard />} />
        </Routes>
      </main>
      {/* {!hideHeaderFooter && <Footer />} */}
      <Footer />
      <ToastContainer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
