import React, { useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsPresent, setCartIsPresent] = useState(false);

  const showCartHandler = () => {
    setCartIsPresent(true);
  };

  const hideCartHandler = () => {
    setCartIsPresent(false);
  };

  return (
    <CartProvider>
      {cartIsPresent && <Cart onClose={hideCartHandler} /> }
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
