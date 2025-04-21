import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-dark pt-4 pb-3 mt-5 border-top">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-3 mb-4 text-center">
          <img src="/logo.png" alt="Scrunchies By VG" width="100" className=" mb-2 rounded-circle" />
            <h5 className="fst-italic fw-bold" style={{ color: "#4DAA95" }}>
              Scrunchies By VG 🎀
            </h5>
            <p className="fst-italic text-muted">
              Handmade hair accessories crafted with love and style. Thank you for supporting small businesses like ours!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Top Treasures</h6>
            <ul className="list-unstyled">
              <li><Link to="/customer/Bowclips" className="text-decoration-none fst-italic text-dark">BowClips</Link></li>
              <li><Link to="/customer/Scrunchies" className="text-decoration-none fst-italic text-dark">Scrunchies</Link></li>
              <li><Link to="/customer/HandmadeHeadbands" className="text-decoration-none fst-italic text-dark">Handmade Headbands</Link></li>
              <li><Link to="/customer/TrackOrder" className="text-decoration-none fst-italic text-dark">Track Order</Link></li>
            </ul>
          </div>
          {/* Store Policy */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Store Policy</h6>
            <ul className="list-unstyled">
              <li><Link to="/customer/RefundPolicy" className="text-decoration-none fst-italic text-dark">Refund Policy</Link></li>
              <li><Link to="/customer/TermsOfService" className="text-decoration-none fst-italic text-dark">Terms of Service</Link></li>
              {/* <li><Link to="/shipping-policy" className="text-decoration-none text-dark">Shipping Policy</Link></li>
              <li><Link to="/privacy-policy" className="text-decoration-none text-dark">Privacy Policy</Link></li>
              <li><Link to="/return-exchange" className="text-decoration-none text-dark">Raise Return/Exchange</Link></li>
            */}
            </ul>
          </div>
          {/* Contact / Social */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Follow Us</h6>
            <p className="mb-2">
              <FaEnvelope className="me-2" />
              <a href="mailto:scrunchiesbyvg@gmail.com" className="text-decoration-none fst-italic text-dark">
                scrunchiesbyvg@gmail.com
              </a>
            </p>
            <p>
              <FaInstagram className="me-2 " style={{ color: "#FE0E95" }} />
              <a
                href="https://www.instagram.com/scrunchies__by__vg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fst-italic text-dark"
              >
                @scrunchies__by__vg
              </a>
            </p>
            <p>
              <FaPinterest className="me-2 mb-2" style={{ color: "#E60023" }} />
              <a
                href="https://in.pinterest.com/scrunchies__by__VG/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fst-italic text-dark"
              >
                @scrunchies__by__vg
              </a>
            </p>
          </div>
        </div>

        <hr />
        <div className="text-center small text-muted">
          &copy; {new Date().getFullYear()} Scrunchies By VG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
