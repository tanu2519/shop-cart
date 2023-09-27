import React from 'react';
import "../App.css";

function CartDrawer({ cart, total, removeFromCart }) {
  return (
    <div className="cart-drawer">
      <h2>Shopping Cart</h2>
      <ul className='drawerCart'>
        {cart.map(chocolate => (
          <li key={chocolate.id}>
            <div>{chocolate.name}</div>
            <div>Rs. {chocolate.price}</div>
            <button onClick={() => removeFromCart(chocolate.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${total}</p>
    </div>
  );
}

export default CartDrawer;
