import React from "react";
import { useNavigate } from "react-router-dom";

const AddToWishlist = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{color:"#FD819E"}}>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div key={product.id} className="col-md-2 mb-4">
              <div className="card h-100">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-success fw-bold">₹{product.price}</p>
                  <button className="btn btn-pink text-light" onClick={() => navigate(`/customer/ViewProduct/${product.id}`)}>
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToWishlist;
