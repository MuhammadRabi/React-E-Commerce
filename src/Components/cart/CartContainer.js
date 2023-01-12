import { useEffect } from "react"
import { calculateTotalPrice } from "../../Features/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import GoHome from "../UI/GoHome"
import CartItem from "./CartItem"
import CartFooter from "./CartFooter"

const CartContainer = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotalPrice())
  }, [cart, dispatch])

  return (
    <>
      <section className="flex flex-col items-center">
        <article className="rounded-md mx-auto p-4 mb-12 bg-slate-200 w-full max-w-sm md:max-w-lg md:p-8">
          <h2 className="text-center text-xl p-4 capitalize bg-red-800/90 w-1/2 mx-auto text-white rounded-lg md:p-2 md:text-3xl md:w-3/4">
            cart details
          </h2>
          {cart.items.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
          <CartFooter />
        </article>
        <GoHome />
      </section>
    </>
  )
}
export default CartContainer
