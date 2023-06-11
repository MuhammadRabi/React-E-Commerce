import { useEffect } from "react"
import CartContainer from "./CartContainer"
import { useCartStore } from "../../Features/cartStore"
import { useLocation } from "react-router-dom"

const Cart = () => {
  const itemsInCart = useCartStore((state) => state.items)
  const setCartGrandTotal = useCartStore((state) => state.setCartGrandTotal)
  const closeCart = useCartStore((state) => state.closeCart)

  const { pathname } = useLocation()
  useEffect(() => {
    closeCart()
  }, [pathname])

  const calculateGrandTotal = () => {
    const grandTotal = itemsInCart
      .map((item) => {
        return item.price
      })
      .reduce((prev, curr) => {
        return prev + curr
      })
    console.log(grandTotal)
    setCartGrandTotal(grandTotal)
  }

  useEffect(() => {
    itemsInCart.length !== 0 && calculateGrandTotal()
  }, [itemsInCart]) // eslint-disable-line react-hooks/exhaustive-deps

  return <CartContainer />
}
export default Cart
