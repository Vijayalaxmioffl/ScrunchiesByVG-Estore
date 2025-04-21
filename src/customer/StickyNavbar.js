// src/components/StickyNavbar.js
import React from "react";
import { Link } from "react-router-dom";

const StickyNavbar = () => {
  return (
   
    <div className="d-flex justify-content-center flex-wrap gap-4 mb-5 mt-5">
            <Link to="/customer/About" className="text-decoration-none  fw-semibold nav-link-custom">
              About
            </Link>  
            <Link to="/customer/Scrunchies" className="text-decoration-none  fw-semibold nav-link-custom">
              Scrunchies
            </Link>
            <Link to="/customer/Chains" className="text-decoration-none  fw-semibold nav-link-custom">
              Chains
            </Link>
            {/* <Link to="/customer/earrings" className="text-decoration-none  fw-semibold nav-link-custom">
              Earrings
            </Link> */}
            <Link to="/customer/SatinPillowcase" className="text-decoration-none  fw-semibold nav-link-custom">
              SatinPillowcase
            </Link>
            <Link to="/customer/Bowclips" className="text-decoration-none  fw-semibold nav-link-custom">
              BowClips
            </Link>
            <Link to="/customer/HandmadeHeadbands" className="text-decoration-none  fw-semibold nav-link-custom">
            Handmade Headbands
            </Link>
            <Link to="/customer/ContactUS" className="text-decoration-none  fw-semibold nav-link-custom">
              Contact Us
            </Link>
            <Link to="/customer/TrackOrder" className="text-decoration-none  fw-semibold nav-link-custom">
              Track Order
            </Link>
          </div>
  );
};

export default StickyNavbar;
