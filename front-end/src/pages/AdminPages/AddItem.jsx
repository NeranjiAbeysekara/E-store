import React, { useState } from "react";
import "./AddItem.css";

const AddItem = () => {
  const [category, setCategory] = useState("men");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New Item Added: ${itemName} (${category})`);
    setItemName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="add-item-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>

        <label>Item Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit" className="add-item-btn">Add Item</button>
      </form>

      {/* Preview Section */}
      {itemName && price && image && (
        <div className="preview">
          <h3>Preview:</h3>
          <img src={image} alt="Preview" />
          <p>{itemName}</p>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default AddItem;
