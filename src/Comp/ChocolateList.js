import React from 'react';
import '../App.css';

function ChocolateList({ chocolates, addToCart, removeFromCart }) {
  return (
    <div className='myProd'>
      <h2>Available Chocolates</h2>
      <ul>
        {chocolates.map(chocolate => (
          <li className="listProd" key={chocolate.id}>
            <img className="product--image" src={chocolate.imageurl}  style={{ width: '100px', height: '100px' }}  alt="product" />
            <div>{chocolate.name}</div>
            <div>Rs. {chocolate.price}</div>
            <button onClick={() => addToCart(chocolate)} className='cartBtn'>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChocolateList;
