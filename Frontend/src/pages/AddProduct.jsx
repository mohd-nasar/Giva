import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addProduct.css'; // Optional: import CSS for styling

function AddProduct() {
  const navigate = useNavigate();

  // State for product details
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Logic to save product (e.g., send to API or update state in parent)
    console.log('Product saved:', product);
    // Navigate back to Home or wherever appropriate
    navigate('/');
  };

  const handleCancel = () => {
    // Navigate back to Home without saving
    navigate('/');
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default AddProduct;
