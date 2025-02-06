import React from 'react';
import './AdminDash.css';

const AdminDash = () => {
  const products = [
    { id: 1, name: 'T-Shirt', price: '$20', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jeans', price: '$40', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Jacket', price: '$60', img: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Shoes', price: '$50', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="admin-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-product-btn">Add New Product</button>
    </div>
  );
};

export default AdminDash;

