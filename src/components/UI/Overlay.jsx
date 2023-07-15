import { useCartStore } from "../../Features/cartStore"
import { useModalStore } from "../../Features/modalStore"

const Overlay = ({ children }) => {
  const closeModal = useModalStore((state) => state.closeModal)
  const closeCart = useCartStore((state) => state.closeCart)
  const closeConfirmation = useModalStore((state) => state.closeConfirmation)

  return (
    <div
      className="absolute top-0 left-0 z-40 flex flex-col items-center justify-start w-full h-full bg-black/70"
      onClick={() => {
        closeModal()
        closeCart()
        closeConfirmation()
      }}
    >
      {children}
    </div>
  )
}
export default Overlay
