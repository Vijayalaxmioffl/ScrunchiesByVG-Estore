import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClipboardList } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import StickyNavbar from "../customer/StickyNavbar";
import { motion } from "framer-motion";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const [productForm, setProductForm] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    category: "Scrunchies",
    images: [""],
    sold: false,
    shipping: `Orders ship within 7–10 business days via India Post.
A tracking ID will be shared once your order is dispatched.
Please allow 12 hours for tracking updates to reflect.
Delivery may take 2–3 working days after dispatch.

In case of delays:
If your parcel hasn’t arrived after 3 working days, kindly use your tracking ID to check the latest status.

Damage Claims:
An unboxing video is mandatory for any product damage claims. Requests without a video will not be considered.`,
    material: "",
    size: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUrlChange = (index, value) => {
    const updatedImages = [...productForm.images];
    updatedImages[index] = value;
    setProductForm((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const addImageUrlField = () => {
    if (productForm.images.length < 6) {
      setProductForm((prev) => ({
        ...prev,
        images: [...prev.images, ""],
      }));
    } else {
      toast.info("Maximum of 6 images allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nonEmptyImages = productForm.images.filter((img) => img.trim() !== "");

    if (nonEmptyImages.length === 0) {
      toast.error("Please add at least one valid image URL.");
      return;
    }

    const storedItems = JSON.parse(localStorage.getItem("productItems")) || [];

    if (productForm.id !== null) {
      const updatedItems = storedItems.map((item) =>
        item.id === productForm.id ? productForm : item
      );
      localStorage.setItem("productItems", JSON.stringify(updatedItems));
      toast.success("Product updated successfully! 🎉");
    } else {
      const newProduct = {
        ...productForm,
        id: Date.now(),
        price: Number(productForm.price),
        oldPrice: Number(productForm.price) + 40,
        category: productForm.category.trim(), // 🔁 Normalize category
        images: nonEmptyImages.slice(0, 6),
      };
      const updatedItems = [...storedItems, newProduct];
      localStorage.setItem("productItems", JSON.stringify(updatedItems));
      toast.success("Product added successfully! 🎉");
    }

    setProductForm({
      id: null,
      name: "",
      description: "",
      price: "",
      category: "Scrunchies",
      images: [""],
      sold: false,
      shipping: `Orders ship within 7–10 business days via India Post.
A tracking ID will be shared once your order is dispatched.
Please allow 12 hours for tracking updates to reflect.
Delivery may take 2–3 working days after dispatch.

In case of delays:
If your parcel hasn’t arrived after 3 working days, kindly use your tracking ID to check the latest status.

Damage Claims:
An unboxing video is mandatory for any product damage claims. Requests without a video will not be considered.`,
      material: "",
      size: "",
    });
  };

  const goToEditDashboard = () => {
    navigate("/admin/EditDashboard");
  };

  return (
    <>
      <StickyNavbar />
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaClipboardList className="me-2" size={28} />
          <h2 className="text-green m-0">Admin Dashboard - Add/Edit Products</h2>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="card p-4 shadow-sm mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >          {/* Product Fields */}
          <div className="mb-3">
            <label className="form-label fw-bold">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={productForm.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={productForm.description}
              onChange={handleInputChange}
              required
              style={{ whiteSpace: "pre-line" }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Price (in ₹)</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={productForm.price}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Category</label>
            <select
              className="form-select"
              name="category"
              value={productForm.category}
              onChange={handleInputChange}
              required
            >
              <option value="Scrunchies">Scrunchies</option>
              <option value="chains">Chains</option>
              <option value="SatinPillowcase">Satin Pillowcase</option>
              <option value="bowclips">Bow Clips</option>
              <option value="HandmadeHeadbands">HandmadeHeadbands</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Material</label>
            <select
              className="form-select"
              name="material"
              value={productForm.material}
              onChange={handleInputChange}
              required
            >
              <option value="">-- Select Material --</option>
              <option value="Satin">Satin</option>
              <option value="Organza">Organza</option>
              <option value="Crepe">Crepe</option>
              <option value="Cotton">Cotton</option>
              <option value="Silk">Silk</option>
              <option value="Velvet">Velvet</option>
              <option value="Linen">Linen</option>
              <option value="Chains">Chains</option>
              <option value="Bowclips">Bowclips</option>
              <option value="HandmadeHeadbands">HandmadeHeadbands</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Size</label>
            <select
              className="form-select"
              name="size"
              value={productForm.size}
              onChange={handleInputChange}
              required
            >
              <option value="">-- Select Size --</option>
              <option value="Regular">Regular</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="For Kids">For Kids</option>
            </select>
          </div>

          {/* Image URLs and Previews */}
          <div className="mb-3">
            <label className="form-label fw-bold">Image URLs (max 6)</label>
            {productForm.images.map((url, index) => (
                <div key={index} className="mb-2 d-flex align-items-center gap-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Image URL ${index + 1}`}
                    value={url}
                    onChange={(e) => handleImageUrlChange(index, e.target.value)}
                  />
                  {url && (
                    <img
                      src={url}
                      alt={`preview-${index}`}
                      className="img-thumbnail"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/60?text=Error";
                      }}
                    />
                  )}
                </div>
              ))}

            {productForm.images.length < 6 && (
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary mt-2"
                onClick={addImageUrlField}
              >
                Add Another Image URL
              </button>
            )}
          </div>

          {/* Previews */}
          {productForm.images.filter(Boolean).length > 0 ? (
            <div className="d-flex mt-3" style={{ gap: "1rem", flexWrap: "wrap" }}>
              {productForm.images.map((url, index) =>
                url ? (
                 <motion.img
                    key={index}
                    src={url}
                    alt={`preview-${index}`}
                    className="img-thumbnail"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: index === mainImageIndex ? "2px solid #198754" : "",
                    }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setMainImageIndex(index)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/100?text=Error";
                      toast.error(`Image ${index + 1} failed to load.`);
                    }}
                  />

                ) : null
              )}
            </div>
          ) : (
            <p className="text-muted mt-2">No image URLs added yet.</p>
          )}

          <div className="mb-3 mt-4">
            <label className="form-label fw-bold">Shipping Instructions</label>
            <textarea
              className="form-control"
              rows="4"
              name="shipping"
              value={productForm.shipping}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="sold"
              checked={productForm.sold}
              onChange={handleInputChange}
            />
            <label className="form-check-label fw-bold">Mark as Sold</label>
          </div>

          <motion.button
            type="submit"
            className="btn bg-green text-light w-100 mb-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {productForm.id !== null ? "Update Product" : "Add Product"}
          </motion.button>


          <motion.button
            type="button"
            onClick={goToEditDashboard}
            className="btn bg-green text-light w-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View / Edit Product List
          </motion.button>
        </motion.form>

        <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
      </div>
    </>
  );
};

export default AdminDashboard;
