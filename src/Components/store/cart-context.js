import React from 'react'

// It is an object that will contain a component
/* We don't need this object here instead
we will need in the other components. */
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})
export default CartContext
