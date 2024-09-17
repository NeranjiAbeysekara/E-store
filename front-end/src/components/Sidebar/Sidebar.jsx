import React, { useState } from "react";
import "./Sidebar.css"; // Add custom CSS for styling

const Sidebar = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
