// Info.js
import React from 'react';

function Info({ cartItems }) {
  return (
    <div>
      <h1>Info</h1>
      <ul>
        {cartItems && cartItems.length > 0 && cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.brand}</p>
            <p>{item.name}</p>
            <p>{item.oldPrice}</p>
            <p>{item.newPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
