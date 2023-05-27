import { useCartStore } from "../../Features/cartStore";
import { useModalStore } from "../../Features/modalStore";
import { formatPrice } from "../../utils/helpers";

const CartFooter = () => {
  const items = useCartStore((state) => state.items);
  const cartGrandTotal = useCartStore((state) => state.cartGrandTotal);
  const closeCart = useCartStore((state) => state.closeCart);
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  const openConfirmation = useModalStore((state) => state.openConfirmation);
  const closeConfirmation = useModalStore((state) => state.closeConfirmation);
  return (
    <>
      <div className="px-4 pt-3">
        {items.length !== 0 && (
          <>
            <div className="flex items-center justify-between pt-6 text-xl border-t-2 border-teal-600">
              <span>Total</span>
              <span>{formatPrice(cartGrandTotal)}</span>
            </div>
            <button
              className="block px-4 py-1 mx-auto mt-5 font-bold text-teal-600 capitalize duration-200 border-2 border-teal-600 rounded-md text-md hover:text-white hover:bg-gradient-to-r from-cyan-700 to-teal-600 hover:scale-110"
              onClick={() => {
                openModal();
                openConfirmation();
              }}
            >
              clear cart
            </button>
          </>
        )}
        <div className="flex self-end justify-around my-8 text-sm">
          <button
            className="p-2 capitalize duration-300 border rounded-md border-slate-400 hover:bg-black hover:text-white hover:border-black hover:scale-110"
            onClick={() => {
              closeCart();
              closeModal();
              closeConfirmation();
            }}
          >
            continue shopping
          </button>
          <button className="p-2 capitalize duration-300 border rounded-md border-slate-400 hover:bg-black hover:text-white hover:border-black hover:scale-110">
            proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default CartFooter;
