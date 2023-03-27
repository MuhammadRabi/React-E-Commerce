import { useEffect } from "react"
import CartContainer from "../components/cart/CartContainer"
import EmptyCart from "../components/cart/emptyCart"
import { cartStore } from "../Features/cartStore"

const CartPage = () => {
  // replace it with itemsInCart
  const itemsInCart = cartStore((state) => state.items)
  const setCartGrandTotal = cartStore((state) => state.setCartGrandTotal)

  const calculateGrandTotal = () => {
    const grandTotal = itemsInCart
      .map((item) => {
        return item.price
      })
      .reduce((prev, curr) => {
        return prev + curr
      })
    setCartGrandTotal(grandTotal)
  }

  useEffect(() => {
    itemsInCart.length !== 0 && calculateGrandTotal()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <>{itemsInCart.length === 0 ? <EmptyCart /> : <CartContainer />}</>
}
export default CartPage
