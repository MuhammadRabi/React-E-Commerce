import CartItem from "./CartItem"
import CartFooter from "./CartFooter"
import { Link } from "react-router-dom"
import { cartStore } from "../../Features/cartStore"

const CartContainer = () => {
  const items = cartStore((state) => state.items)

  return (
    <>
      <section className="space-y-6 mt-12">
        <div className="mx-4 lg:justify-around btns-container flex justify-between mb-2">
          <button className="p-2 rounded-md border border-slate-400 hover:bg-black hover:text-white duration-300 hover:border-black">
            <Link to="/">continue shopping</Link>
          </button>
          <button className="p-2 rounded-md border border-slate-400 hover:bg-black hover:text-white duration-300 hover:border-black">
            proceed to checkout
          </button>
        </div>
        <article className="rounded-md mx-auto p-4 mb-12 bg-slate-200 w-full max-w-5xl md:p-8">
          <h2 className="text-center text-xl capitalize bg-red-800/90 w-fit mx-auto text-white rounded-lg px-12 py-2">
            cart details
          </h2>
          {items.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
          <CartFooter />
        </article>
      </section>
    </>
  )
}
export default CartContainer
