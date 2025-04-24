import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StickyNavbar from "../customer/StickyNavbar";
import "../App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import SideCart from "../customer/SideCart";


const ViewProduct = () => {
  const [product, setProduct] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const [showShipping, setShowShipping] = useState(false);
  const [viewersCount, setViewersCount] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("productItems")) || [];
    const foundProduct = items.find((item) => String(item.id) === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate(-1);
    }
  }, [id, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(Math.floor(Math.random() * 100) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    toast.success("Product added to cart!", {
      position: "top-center",
      autoClose: 1000,
    });
  
    //  Show side cart
    setIsCartOpen(true);
  
    //  Hide after 3 seconds (optional)
    setTimeout(() => {
      setIsCartOpen(false);
    }, 3000);
  };
  

  const handleAddToWishlist = () => {
    if (!product) return;

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Added to wishlist!", {
        position: "top-center",
        autoClose: 1500,
      });
      window.dispatchEvent(new Event("wishlistUpdate"));
    } else {
      toast.error("Already in wishlist", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };

  if (!product) {
    return (
      <div className="text-center py-5">
        <p>Loading product details...</p>
      </div>
    );
  }
  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/customer/ViewProduct/${product.id}`;
  
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: "Check out this product!",
          url: shareUrl,
        });
      } catch (error) {
        toast.error("Sharing failed!");
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied to clipboard!", {
          position: "top-center",
          autoClose: 1500,
        });
      } catch (error) {
        toast.error("Failed to copy link.");
      }
    }
  };
  
  const images = product.images || [];

  return (
    <>
      <StickyNavbar />
      <motion.div
        className="container py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="row">
          <div className="col-md-6">
            {/* Main Image Display */}
            <div
              style={{
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              {images.length > 0 && (
                // main image
                <motion.img
                  key={mainImageIndex}
                  src={images[mainImageIndex]}
                  alt={`Main view of ${product.name}`}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "100%", objectFit: "contain" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                />

              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="d-flex mt-3 justify-content-center" style={{ gap: "1rem" }}>
                {images.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`img-thumbnail ${index === mainImageIndex ? "border border-primary" : ""}`}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setMainImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="mb-0">{product.name}</h2>
            <motion.button
              className="btn px-3 py-2 fs-5 text-green"
              onClick={() => handleShare()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-share-fill"></i>
            </motion.button>
          </div>

            <p className="text-muted">{product.category}</p>
            <p style={{ whiteSpace: "pre-line" }}>{product.description}</p>

            <div className="mb-2">
              <span className="text-muted text-decoration-line-through me-2">
                ₹{product.oldPrice && product.oldPrice > product.price
                  ? product.oldPrice
                  : Number(product.price) + 40}
              </span>
              <span className="fw-bold text-success">₹{product.price}</span>
            </div>

            {product.sold ? (
              <span className="badge bg-danger">Sold</span>
            ) : (
              <span className="badge bg-success">Available</span>
            )}

            <div className="mt-3 d-flex align-items-center text-muted">
              <i className="bi bi-person-circle me-2" style={{ color: "#FD819E" }}></i>
              {viewersCount} people are viewing this right now
            </div>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center mt-4 ">
              <span className="me-3"><strong>Quantity:</strong></span>   
              <button className="btn  btn-outline-secondary " onClick={decreaseQuantity}>-</button>
              <span className="mx-3 fs-5">{quantity}</span>
              <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
            </div>

            {/* Buttons */}
            <div className="mt-4">
            <motion.button
              className="btn btn-pink text-light me-3"
              onClick={handleAddToCart}
              disabled={product.sold}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
            <SideCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />


              <motion.button
                className="btn text-light me-3"
                style={{ backgroundColor: "#F4D109" }}
                onClick={handleAddToWishlist}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Wishlist
              </motion.button>

              <motion.button
               className="btn btn-outline-dark"
               onClick={() => navigate(-1)}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3, duration: 0.4 }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}>
                Go Back
              </motion.button>
              

              {/* Expandng Shipping Info */}
              <div className="mt-4">
                <button
                  onClick={() => setShowShipping(!showShipping)}
                  className="btn btn-outline-secondary custom-hover d-flex align-items-center"
                >
                  <span className="me-2">{showShipping ? "–" : "+"}</span>
                  Shipping Information
                </button>

                {showShipping && (
                  <div className="mt-3 border rounded p-3 bg-light" style={{ whiteSpace: "pre-line" }}>
                    {product.shipping}
                  </div>
                )}
              </div>

              {/* Icons Section */}
              <div className="d-flex justify-content-around text-center my-4 flex-wrap">
                <div className="px-3 py-2">
                <i className="bi bi-people-fill fs-4  custom-icon-color"></i>
                <p className="mb-0 fw-bold">1000+ Customers</p>
                </div>
                <div className="px-3 py-2">
                  <i className="bi bi-chat-dots-fill fs-4 text-success"></i>
                  <p className="mb-0 fw-bold">10k+ Community</p>
                </div>
                <div className="px-3 py-2">
                  <i className="bi bi-arrow-repeat fs-4 text-warning"></i>
                  <p className="mb-0 fw-bold">Easy Returns</p>
                </div>
              </div>

              <ToastContainer />
            </div>
          </div>
        </div>
       
        {/* Find Similar Products Section */}
        <div className="mt-5">
          <h4 className="mb-3 text-center text-green">✨ You may also like</h4>
          <div className="d-flex overflow-auto pb-3" style={{ gap: "1rem" }}>
            {
              JSON.parse(localStorage.getItem("productItems") || "[]")
                .filter(p => p.id !== product.id && ["bowclip", "chain", "accessory"].some(type => p.category?.toLowerCase()?.includes(type)))
                .slice(0, 10)
                .map((item) => (
                    <motion.div
                      key={item.id}
                      className="card border-0 shadow-sm"
                      style={{ minWidth: "170px", cursor: "pointer", borderRadius: "1rem" }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        toast.success("Scroll Up to see the clicked product", {
                          position: "top-center",
                          autoClose: 1000,
                          onClose: () => navigate(`/customer/ViewProduct/${item.id}`),
                        });
                      }}>
                    <img
                      src={item.images?.[0]}
                      className="card-img-top rounded-top"
                      alt={item.name}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center p-2">
                      <p className="mb-1 fw-semibold" style={{ fontSize: "0.95rem" }}>{item.name}</p>
                      <p className="text-success fw-bold mb-0">₹{item.price}</p>
                    </div>
                  </motion.div>
                ))
            }
          </div>
        </div>


      </motion.div>
    </>
  );
};

export default ViewProduct;
