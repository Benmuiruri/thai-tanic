// @ts-nocheck
import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const amount = amountInputRef.current.value;
    const amountNumber = +amount;

    if (amount.trim().length === 0 || amountNumber > 5 || amountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add to Cart</button>
      {!amountIsValid && <p>Amount must be between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
