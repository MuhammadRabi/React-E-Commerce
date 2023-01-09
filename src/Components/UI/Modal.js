import { useDispatch } from "react-redux"
import { clearCart } from "../../Features/cartSlice"
import { closeModal } from "../../Features/modalSlice"

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <section className="w-full h-full bg-black/80 flex justify-center items-center top-0 right-0 absolute">
      <article className="p-8 flex flex-col justify-between rounded-sm bg-white max-w-xs md:max-w-md">
        <p className="text-xl">
          do you want to clear all the items in your cart?
        </p>
        <div className="btn-container flex justify-around mt-8">
          <button
            className="px-4 text-xl font-semibold capitalize border-2 rounded-md duration-700 border-red-700 hover:bg-red-700 hover:text-white"
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            confirm
          </button>
          <button className="modal-btn" onClick={() => dispatch(closeModal())}>
            cancel
          </button>
        </div>
      </article>
    </section>
  )
}
export default Modal
