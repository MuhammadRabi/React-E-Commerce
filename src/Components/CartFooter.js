import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../Features/cartSlice"
const CartFooter = () => {
  const { total, items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <section className="mt-5 pt-3 px-4 border-t-2 border-red-800 text-xl">
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        {items.length >= 1 && (
          <button
            className="block mt-5 mx-auto px-6 py-0.5 text-md capitalize font-bold text-red-800 hover:text-white hover:bg-red-800 border-2 border-red-800 rounded-sm duration-200"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        )}
      </section>
    </>
  )
}
export default CartFooter
