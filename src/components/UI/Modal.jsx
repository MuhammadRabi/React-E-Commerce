import { cartStore } from "../../Features/cartStore";
import { modalStore } from "../../Features/modalStore";

const Modal = () => {
  const clearCart = cartStore((state) => state.clearCart);
  const closeModal = modalStore((state) => state.closeModal);
  const closeCart = cartStore((state) => state.closeCart);
  return (
    <section className="w-full h-screen bg-black/80 flex justify-center items-center top-0 right-0 absolute z-50">
      <article className="p-8 flex flex-col justify-between rounded-sm bg-white max-w-xs md:max-w-md">
        <p className="">Do you want to clear all the items in your cart?</p>
        <div className="btn-container flex justify-around mt-8">
          <button
            className="px-4 text-xl font-semibold capitalize border-2 rounded-md duration-700 border-red-700 hover:bg-red-700 hover:text-white"
            onClick={() => {
              clearCart();
              closeModal();
              closeCart();
            }}
          >
            confirm
          </button>
          <button className="modal-btn" onClick={closeModal}>
            cancel
          </button>
        </div>
      </article>
    </section>
  );
};
export default Modal;
