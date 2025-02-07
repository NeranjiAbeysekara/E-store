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

  // Handle Quantity Increase
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle Quantity Decrease
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle Item Removal
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <button className="delete-btn" onClick={() => removeItem(item.id)}>✖</button>
            </div>
          ))}
          <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
          <button className="checkout-btn" onClick={handleCheckout} disabled={cart.length === 0}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
