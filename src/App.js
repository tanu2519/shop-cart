import React, { useState } from 'react';
import ChocolateList from './Comp/ChocolateList';
import { chocolates } from './Comp/data';
import CartDrawer from './Comp/CartDrawer';
import Header from './Comp/Header';


function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState('');

  const addToCart = (chocolate) => {
    const existingChocolate = cart.find(item => item.id === chocolate.id);

    if (existingChocolate) {
      setNotification('Product already in cart');
    } else {
      setCart([...cart, chocolate]);
      setNotification('');
    }
    if (cart.length >= 8) {
      setNotification('Cannot add more than 8 products to the cart');
      return; // Do not add the product to the cart
    }};

  const removeFromCart = (chocolateId) => {
    const updatedCart = cart.filter(chocolate => chocolate.id !== chocolateId);
    setCart(updatedCart);
  }

  const calculateTotalPrice = () => {
    return cart.reduce((total, chocolate) => total + chocolate.price, 0);
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="App">
      <Header
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      />
      <ChocolateList
        chocolates={chocolates}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      {notification && <p className="notification">{notification}</p>}
      {isCartOpen && (
        <CartDrawer
          cart={cart}
          total={calculateTotalPrice()}
          removeFromCart={removeFromCart}
        />
      )}
      
    </div>
  );
}

export default App;
