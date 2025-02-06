import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Address:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label>Payment Method:</label>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="cash-on-delivery">Cash on Delivery</option>
      </select>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
