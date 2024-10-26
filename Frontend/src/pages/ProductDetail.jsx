import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./productDetail.css";
import EditForm from "./EditForm";

function ProductDetail(props) {
  const { name } = useParams();
  const navigate = useNavigate();

  // Mock product data
  const product = {
    name: name,
    description:
      "This is the full description of the product, showing all details without truncation.",
    price: 100,
    quantity: 50,
  };

  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleEditToggle = () => {
    if (!props.isAuthorized) {
      alert("only authorized person can perform this action");
      return;
    }
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = (newData) => {
    // Update the product with new data
    setUpdatedProduct(newData);
    setIsEditing(false); // Hide edit form after saving
  };

  const handleDelete = () => {
    if (!props.isAuthorized) {
      alert("only authorized person can perform this action");
      
      return;
    }
    alert("Delete functionality can be implemented here.");
    navigate("/"); // Navigate back after deletion (optional)
  };

  return (
    <div className="product-detail">
      <h2>{updatedProduct.name}</h2>
      <p>{updatedProduct.description}</p>
      <p style={{ color: "green" }}>Price: ${updatedProduct.price}</p>
      <p>Available Quantity: {updatedProduct.quantity}</p>

      <button className="edit-button" onClick={handleEditToggle}>
        {isEditing ? "Cancel" : "Edit"}
      </button>

      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>

      {/* Render the edit form if isEditing is true */}
      {isEditing && (
        <EditForm product={updatedProduct} onSave={handleSaveChanges} />
      )}
    </div>
  );
}

export default ProductDetail;
