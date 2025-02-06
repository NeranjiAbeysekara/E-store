import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const initialCart = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: 49.99,
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    price: 39.99,
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
      <button className="checkout-btn" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartPage;

