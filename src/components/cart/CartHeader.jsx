import { useCartStore } from "../../Features/cartStore"
import { GrClose } from "react-icons/gr"
import { useModalStore } from "../../Features/modalStore"

const CartHeader = () => {
  const items = useCartStore((state) => state.items)
  const closeCart = useCartStore((state) => state.closeCart)
  const closeModal = useModalStore((state) => state.closeModal)
  return (
    <header className="flex items-center justify-between px-4 pb-4 border-b-2 border-b-teal-600">
      <h2 className="px-6 py-2 text-sm text-center text-white capitalize rounded-md md:text-base bg-main w-fit">
        shopping cart ({items.length})
      </h2>
      <p
        className="p-2 text-right duration-300 rounded-md cursor-pointer hover:bg-slate-200 hover:scale-125"
        onClick={() => {
          closeCart()
          closeModal()
        }}
      >
        <GrClose className="text-2xl" />
      </p>
    </header>
  )
}
export default CartHeader
