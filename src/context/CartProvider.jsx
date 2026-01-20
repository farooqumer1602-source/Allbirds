import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";

import React from 'react'

const CartProvider = ({children}) => {

     const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const incrementQuantity = (id) => dispatch({ type: "INCREMENT", payload: id });
  const decrementQuantity = (id) => dispatch({ type: "DECREMENT", payload: id });

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      incrementQuantity,
      decrementQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
