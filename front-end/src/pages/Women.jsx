import React from 'react';
import './Women.css';

const Women = () => {
  const products = [
    { id: 1, name: 'Dress', price: 50, img: 'https://via.placeholder.com/300x300' },
    { id: 2, name: 'Blouse', price: 35, img: 'https://via.placeholder.com/300x300' },
    { id: 3, name: 'Skirt', price: 30, img: 'https://via.placeholder.com/300x300' },
    { id: 4, name: 'Pants', price: 40, img: 'https://via.placeholder.com/300x300' },
    { id: 5, name: 'Sweater', price: 45, img: 'https://via.placeholder.com/300x300' },
    { id: 6, name: 'Shoes', price: 60, img: 'https://via.placeholder.com/300x300' },
  ];

  return (
    <div className="womens-clothing-page">
      <h2 className="page-title">Women's Clothing</h2>
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

export default Women;
