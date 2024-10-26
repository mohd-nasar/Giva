import React, { useState } from 'react';
import './editForm.css'

function EditForm({ product, onSave }) {
  // Maintain a local copy of product for editing
  const [localProduct, setLocalProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Save changes and pass back to parent component
    onSave(localProduct);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={localProduct.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={localProduct.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={localProduct.price}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={localProduct.quantity}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default EditForm;
