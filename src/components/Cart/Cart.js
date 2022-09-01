import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        { id: 'meal1', name: 'Prawns in Tamarid sauce', price: 9.99, amount: 2 },
        { id: 'meal2', name: 'Pork skewers', price: 9.99, amount: 1 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>20.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
