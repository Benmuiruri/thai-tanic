// @ts-nocheck
import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE_ITEM':
      const existingCartItemIndexToDelete = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItemToDelete =
        state.items[existingCartItemIndexToDelete];
      const newTotalAmount = state.totalAmount - existingCartItemToDelete.price;
      let newUpdatedItems;
      if (existingCartItemToDelete.amount === 1) {
        newUpdatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const newUpdatedItem = {
          ...existingCartItemToDelete,
          amount: existingCartItemToDelete.amount - 1,
        };
        newUpdatedItems = [...state.items];
        newUpdatedItems[existingCartItemIndexToDelete] = newUpdatedItem;
      }
      return {
        items: newUpdatedItems,
        totalAmount: newTotalAmount,
      };
    case 'CLEAR':
      return defaultCartState;
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

  const clearCartHandler = () => {
    dispatchCartAction({
      type: 'CLEAR',
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
