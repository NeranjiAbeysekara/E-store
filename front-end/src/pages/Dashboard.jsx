import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    orders: [
      { id: 1, product: 'T-Shirt', price: '$20', status: 'Delivered' },
      { id: 2, product: 'Jeans', price: '$40', status: 'Shipped' },
    ],
  };

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Welcome, {user.name}!</h2>
      <div className="dashboard-content">
        <div className="profile-info">
          <h3>Your Profile</h3>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        
        <div className="orders">
          <h3>Your Orders</h3>
          <ul>
            {user.orders.map((order) => (
              <li key={order.id} className="order-item">
                <span>{order.product} - {order.price}</span>
                <span>Status: {order.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cart">
          <h3>Your Cart</h3>
          <p>No items in your cart.</p>
        </div>

        <button className="shop-btn">Continue Shopping</button>
      </div>
    </div>
  );
};

export default Dashboard;
