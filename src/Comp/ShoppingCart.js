import React from 'react';

function ShoppingCart({ cart, total }) {
  function removeFromCart(){
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(chocolate => (
          <li key={chocolate.id}>
            {chocolate.name} - ${chocolate.price}
            <button onClick={() => removeFromCart(chocolate.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${total}</p>
    </div>
  );
}

export default ShoppingCart;
