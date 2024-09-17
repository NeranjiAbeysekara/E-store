import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are a leading clothing store providing the latest trends and styles at affordable prices.</p>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="#">Help & FAQs</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Track Your Order</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Men's Clothing</a></li>
            <li><a href="#">Women's Clothing</a></li>
            <li><a href="#">Kids' Clothing</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Clothing Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

