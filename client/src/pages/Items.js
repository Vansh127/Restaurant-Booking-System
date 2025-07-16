import React, { useState, useEffect } from 'react';
import './Items.css';
import { useCart } from '../context/CartContext';

const Items = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className="items-container">
      {items.length === 0 ? (
        <p>Loading items...</p>
      ) : (
        items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Items;
