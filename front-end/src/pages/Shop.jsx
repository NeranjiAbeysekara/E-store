import React from 'react';
import { Link } from 'react-router-dom';
import './ShopPage.css';

const Shop = () => {
  const categories = [
    { id: 1, name: 'Men', img: 'https://via.placeholder.com/400x300', path: '/shop/men' },
    { id: 2, name: 'Women', img: 'https://via.placeholder.com/400x300', path: '/shop/women' },
    { id: 3, name: 'Kids', img: 'https://via.placeholder.com/400x300', path: '/shop/kids' },
  ];

  return (
    <div className="shop-page">
      <h2 className="page-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <Link key={category.id} to={category.path} className="category-card">
            <img src={category.img} alt={category.name} className="category-img" />
            <div className="category-name">{category.name}</div>
          </Link>
        ))}
      </div>

      <h3 className="section-title">New Arrivals</h3>
      <div className="new-arrivals">
        {/* Example product - Replace with dynamic data */}
        <div className="product-card">
          <img src="https://via.placeholder.com/300x300" alt="New Arrival" className="product-img" />
          <div className="product-info">
            <h3 className="product-name">New Arrival Product</h3>
            <p className="product-price">$50</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        {/* Add more products dynamically */}
      </div>
    </div>
  );
};

export default Shop;
