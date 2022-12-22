import CartFooter from "./CartFooter"
import CartItem from "./CartItem"

const CartContainer = () => {
  return (
    <section className="rounded-md mx-auto p-4 md:p-8 bg-slate-200 w-full md:w-1/2">
      <h2 className="text-center text-3xl capitalize bg-red-800/90 w-3/4 mx-auto text-white rounded-lg p-4">
        cart details
      </h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartFooter />
    </section>
  )
}
export default CartContainer
