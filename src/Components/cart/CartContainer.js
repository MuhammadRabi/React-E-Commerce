import { useSelector } from "react-redux"
import GoHome from "../UI/GoHome"
import CartItem from "./CartItem"
import CartFooter from "./CartFooter"

const CartContainer = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <>
      <section className="flex flex-col items-center space-y-6 mt-12">
        <article className="rounded-md mx-auto p-4 mb-12 bg-slate-200 w-full max-w-5xl md:p-8">
          <h2 className="text-center text-xl capitalize bg-red-800/90 w-fit mx-auto text-white rounded-lg px-12 py-2">
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
