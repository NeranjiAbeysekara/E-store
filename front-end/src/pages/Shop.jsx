import React from "react";
import "./ShopPage.css";

const categories = ["Men", "Women", "Kids", "Accessories", "Footwear"];
const newArrivals = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: "$49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    price: "$39.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Elegant Handbag",
    price: "$59.99",
    image: "https://via.placeholder.com/150",
  },
];

const ShopPage = () => {
  return (
    <div className="shop-container">
      {/* Categories Section */}
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories-list">
          {categories.map((category, index) => (
            <button key={index} className="category-btn">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals-section">
        <h2>New Arrivals</h2>
        <div className="product-list">
          {newArrivals.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
