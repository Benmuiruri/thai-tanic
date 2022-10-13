import React from 'react';
import classes from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const isValidText = (value) => value.trim() !== '';

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isValidEmail = (value) => value.trim().match(validRegex);

const Checkout = (props) => {
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    valuehasError: nameValueHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetnameInput,
  } = useInput(isValidText);

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    valuehasError: emailValueHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isValidEmail);

  const {
    enteredValue: enteredStreetName,
    valueIsValid: streetNameIsValid,
    valuehasError: streetNameValueHasError,
    valueChangeHandler: streetNameChangeHandler,
    valueBlurHandler: streetNameBlurHandler,
    reset: resetstreetNameInput,
  } = useInput(isValidText);

  const {
    enteredValue: enteredPostalCode,
    valueIsValid: postalCodeIsValid,
    valuehasError: postalCodeValueHasError,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: resetpostalCodeInput,
  } = useInput(isValidText);

  const {
    enteredValue: enteredCityName,
    valueIsValid: cityNameIsValid,
    valuehasError: cityNameValueHasError,
    valueChangeHandler: cityNameChangeHandler,
    valueBlurHandler: cityNameBlurHandler,
    reset: resetcityNameInput,
  } = useInput(isValidText);

  let formIsValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    streetNameIsValid &&
    postalCodeIsValid &&
    cityNameIsValid
  ) {
    formIsValid = true;
  }

  const orderConfirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      street: enteredStreetName,
      postalCode: enteredPostalCode,
      city: enteredCityName,
    });

    resetnameInput();
    resetEmailInput();
    resetstreetNameInput();
    resetpostalCodeInput();
    resetcityNameInput();
  };

  const nameInputClasses = nameValueHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const emailInputClasses = emailValueHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const streetNameInputClasses = streetNameValueHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const postalCodeInputClasses = postalCodeValueHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  const cityNameInputClasses = cityNameValueHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return (
    <form className={classes.form} onSubmit={orderConfirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameValueHasError && (
          <p className={classes.error_text}>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailValueHasError && (
          <p className={classes.error_text}>Email must not be empty.</p>
        )}
      </div>
      <div className={streetNameInputClasses}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          onChange={streetNameChangeHandler}
          onBlur={streetNameBlurHandler}
          value={enteredStreetName}
        />
        {streetNameValueHasError && (
          <p className={classes.error_text}>Street must not be empty.</p>
        )}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {postalCodeValueHasError && (
          <p className={classes.error_text}>Postal Code must not be empty.</p>
        )}
      </div>
      <div className={cityNameInputClasses}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onChange={cityNameChangeHandler}
          onBlur={cityNameBlurHandler}
          value={enteredCityName}
        />
        {cityNameValueHasError && (
          <p className={classes.error_text}>City must not be empty.</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
