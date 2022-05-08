import { useState } from 'react'
import Header from '../src/Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './Components/store/CartProvider'

function App() {
  //useState for Cart State Management
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShow={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  )
}

export default App
