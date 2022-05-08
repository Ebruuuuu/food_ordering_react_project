import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      /*bind basically allows us to pre-configure the argument 
      that function will receive when it's being exucuted.*/
      /*We need here to ensure that both these funcitons do receive the ID or the item respectively. */
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    ></CartItem>
  ))

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
