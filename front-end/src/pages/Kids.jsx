import React from 'react';
import './Kids.css';

const Kids = () => {
  const products = [
    { id: 1, name: 'T-Shirt', price: 15, img: 'https://via.placeholder.com/300x300' },
    { id: 2, name: 'Shorts', price: 12, img: 'https://via.placeholder.com/300x300' },
    { id: 3, name: 'Sweater', price: 18, img: 'https://via.placeholder.com/300x300' },
    { id: 4, name: 'Jacket', price: 25, img: 'https://via.placeholder.com/300x300' },
    { id: 5, name: 'Sneakers', price: 22, img: 'https://via.placeholder.com/300x300' },
    { id: 6, name: 'Hat', price: 10, img: 'https://via.placeholder.com/300x300' },
  ];

  return (
    <div className="kids-clothing-page">
      <h2 className="page-title">Kids' Clothing</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;
