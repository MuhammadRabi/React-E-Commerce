import { cartStore } from "../../Features/cartStore"
import { modalStore } from "../../Features/modalStore"
import { formatPrice } from "../../utils/helpers"

const CartFooter = () => {
  // need to add calculate price
  const items = cartStore((state) => state.items)
  const totalPrice = cartStore((state) => state.totalPrice)
  const openModal = modalStore((state) => state.openModal)
  return (
    <>
      <section className="mt-5 pt-3 px-4 border-t-2 border-red-800 text-xl">
        <div className="flex items-center justify-between">
          <span>Total</span>
          {/*           <span>{formatPrice(totalPrice)}</span>
           */}{" "}
          <span>{formatPrice(totalPrice)}</span>
        </div>
        {items.length >= 1 && (
          <button
            className="block mt-5 mx-auto px-6 py-0.5 text-md capitalize font-bold text-red-800 hover:text-white hover:bg-red-800 border-2 border-red-800 rounded-sm duration-200"
            onClick={openModal}
          >
            clear cart
          </button>
        )}
      </section>
    </>
  )
}
export default CartFooter
