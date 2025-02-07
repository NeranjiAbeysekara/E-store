import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Valid email is required";
    if (!contact.trim() || !/^\d{10}$/.test(contact)) newErrors.contact = "Valid 10-digit contact number is required";
    if (!address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      alert("Order Placed Successfully!");
      navigate("/");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && <span className="error">{errors.name}</span>}

      <label>Email Address:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <span className="error">{errors.email}</span>}

      <label>Contact Number:</label>
      <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} />
      {errors.contact && <span className="error">{errors.contact}</span>}

      <label>Address:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      {errors.address && <span className="error">{errors.address}</span>}

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
