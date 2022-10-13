// @ts-nocheck
import { useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { value: action.value };
    case 'BLUR':
      return { ...state, isTouched: true };
    case 'RESET':
      return { value: '', isTouched: false };
    default:
      return initialState;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const valuehasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'CHANGE', value: event.target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    enteredValue: inputState.value,
    valueIsValid,
    valuehasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
