  import React, { useState, useEffect } from "react";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import StickyNavbar from "../customer/StickyNavbar";

  const EditDashboard = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem("productItems")) || [];
      setProducts(storedItems);
    }, []);

    const handleDelete = (id) => {
      const updatedItems = products.filter((product) => product.id !== id);
      localStorage.setItem("productItems", JSON.stringify(updatedItems));
      setProducts(updatedItems);
      toast.success("Product deleted successfully! 🎉");
    };

    const handleEdit = (product) => {
      setEditingProduct({ ...product });
    };

    const handleUpdate = (e) => {
      e.preventDefault();
      const updatedItems = products.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      );
      localStorage.setItem("productItems", JSON.stringify(updatedItems));
      setProducts(updatedItems);
      toast.success("Product updated successfully! 🎉");
      setEditingProduct(null);
    };

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setEditingProduct((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    };

    const handleImageUrlChange = (index, value) => {
      const updatedImages = [...editingProduct.images];
      updatedImages[index] = value;
      setEditingProduct((prev) => ({
        ...prev,
        images: updatedImages,
      }));
    };

    const addImageUrlField = () => {
      if (editingProduct.images.length < 6) {
        setEditingProduct((prev) => ({
          ...prev,
          images: [...prev.images, ""],
        }));
      } else {
        toast.info("Maximum of 6 images allowed.");
      }
    };

    const groupProductsByCategory = (products) => {
      return products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});
    };

    const groupedProducts = groupProductsByCategory(products);

    return (
      <>
        <StickyNavbar />
        <div className="container py-5">
          <h2 className="text-center mb-4 text-green">Edit and Delete Products</h2>

          {editingProduct && (
            <form onSubmit={handleUpdate} className="card p-4 shadow-sm mb-5">
              <h3>Edit Product</h3>

              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={editingProduct.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  style={{ whiteSpace: "pre-line" }}
                  className="form-control"
                  name="description"
                  value={editingProduct.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Price (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={editingProduct.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  name="category"
                  value={editingProduct.category}
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
                <label className="form-label">Material</label>
                <select
                  className="form-select"
                  name="material"
                  value={editingProduct.material}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Satin">Satin</option>
                  <option value="Organza">Organza</option>
                  <option value="Crepe">Crepe</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Silk">Silk</option>
                  <option value="Velvet">Velvet</option>
                  <option value="Linen">Linen</option>
                  <option value="Chains">Chains</option>
                  <option value="HandmadeHeadbands">HandmadeHeadbands</option>

                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Size</label>
                <select
                  className="form-select"
                  name="size"
                  value={editingProduct.size}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Regular">Regular</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="For Kids">For Kids</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Color</label>
                <select
                  className="form-select"
                  name="color"
                  value={editingProduct.color}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">-- Select Color --</option>
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


              <div className="mb-3">
                <label className="form-label">Image URLs (max 6)</label>
                {editingProduct.images?.map((url, index) => (
                  <div key={index} className="mb-2 d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control me-2"
                      value={url}
                      onChange={(e) => handleImageUrlChange(index, e.target.value)}
                    />
                  </div>
                ))}
                {editingProduct.images?.length < 6 && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary mt-2"
                    onClick={addImageUrlField}
                  >
                    + Add Image URL
                  </button>
                )}
                <div className="d-flex flex-wrap mt-3">
                  {editingProduct.images?.map((url, i) => (
                    url && (
                      <img
                        key={i}
                        src={url}
                        alt={`preview-${i}`}
                        className="img-thumbnail me-2 mb-2"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    )
                  ))}
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="sold"
                  checked={editingProduct.sold}
                  onChange={(e) =>
                    setEditingProduct((prev) => ({ ...prev, sold: e.target.checked }))
                  }
                />
                <label className="form-check-label">Mark as Sold</label>
              </div>

              <button type="submit" className="btn btn-success w-100">
                Update Product
              </button>
            </form>
          )}

          {/* Product List */}
          {Object.keys(groupedProducts).map((category) => (
            <div key={category}>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}:</h3>
              <div className="row">
                {groupedProducts[category].map((product) => (
                  <div className="col-md-3 mb-4" key={product.id}>
                    <div className="card h-100 shadow-sm text-center">
                      {product.images?.[0] && (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="card-img-top"
                          style={{
                            height: "150px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      <div className="card-body">
                        <h6 className="card-title">{product.name}</h6>
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <button
                          onClick={() => handleEdit(product)}
                          className="btn btn-warning btn-sm w-50 me-1"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-danger btn-sm w-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
        </div>
      </>
    );
  };

  export default EditDashboard;
