import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetails.css';

const items = [
  { id: 1, category: 'Men', name: 'T-Shirt', price: 20, img: 'https://via.placeholder.com/150', sizes: ['S', 'M', 'L'] },
  { id: 2, category: 'Women', name: 'Dress', price: 50, img: 'https://via.placeholder.com/150', sizes: ['S', 'M', 'L'] },
  { id: 3, category: 'Kids', name: 'Jacket', price: 60, img: 'https://via.placeholder.com/150', sizes: ['M', 'L', 'XL'] },
];

const ItemDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find((item) => item.id === parseInt(id));

  const [size, setSize] = useState(item.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!item) return <p>Item not found</p>;

  const handleAddToCart = () => {
    addToCart({ ...item, size, quantity });
    navigate('/cart'); // Redirect to cart
  };

  return (
    <div className="item-details">
      <img src={item.img} alt={item.name} className="item-img" />
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <label>Size:</label>
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        {item.sizes.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <label>Quantity:</label>
      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemDetails;
