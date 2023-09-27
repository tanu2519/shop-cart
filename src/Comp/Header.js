import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Header({ cartCount, isCartOpen, toggleCart }) {
  return (
    <div className="header">
      <h1>Chocolate Hub</h1>
      <div className="cart-icon-container">
        <button className="cart-icon-button" onClick={toggleCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cartCount}</span>
        </button>
        {isCartOpen && (
          <button className="close-cart" onClick={toggleCart}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
