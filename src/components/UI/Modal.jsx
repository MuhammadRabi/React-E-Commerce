import { useCartStore } from "../../Features/cartStore";
import { useModalStore } from "../../Features/modalStore";
import Overlay from "./Overlay";

const Modal = () => {
  const closeCart = useCartStore((state) => state.closeCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const closeModal = useModalStore((state) => state.closeModal);
  const isConfirmationOpen = useModalStore((state) => state.isConfirmationOpen);
  const closeConfirmation = useModalStore((state) => state.closeConfirmation);

  return (
    <Overlay>
      {isConfirmationOpen && (
        <article className="flex flex-col justify-between max-w-xs p-8 mt-64 mr-64 bg-white rounded-sm md:max-w-md">
          <p className="">Do you want to clear all the items in your cart?</p>
          <div className="flex justify-around mt-8 btn-container">
            <button
              className="px-2 py-1 font-semibold text-teal-600 capitalize duration-700 border-2 border-teal-600 rounded-md p hover:bg-gradient-to-r from-cyan-700 to-teal-600 hover:text-white"
              onClick={() => {
                clearCart();
                closeModal();
                closeCart();
                closeConfirmation();
              }}
            >
              confirm
            </button>
            <button
              className="px-2 py-1 font-semibold text-teal-600 capitalize duration-700 border-2 border-teal-600 rounded-md p hover:bg-gradient-to-r from-cyan-700 to-teal-600 hover:text-white"
              onClick={() => {
                closeConfirmation();
              }}
            >
              cancel
            </button>
          </div>
        </article>
      )}
    </Overlay>
  );
};
export default Modal;
