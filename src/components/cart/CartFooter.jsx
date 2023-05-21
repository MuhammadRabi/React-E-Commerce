import { Link } from "react-router-dom";
import { cartStore } from "../../Features/cartStore";
import { modalStore } from "../../Features/modalStore";
import { formatPrice } from "../../utils/helpers";

const CartFooter = () => {
  const items = cartStore((state) => state.items);
  const cartGrandTotal = cartStore((state) => state.cartGrandTotal);
  const closeCart = cartStore((state) => state.closeCart);
  const openModal = modalStore((state) => state.openModal);
  return (
    <>
      <div className="px-4 pt-3 mt-5">
        {items.length !== 0 && (
          <>
            <div className="flex items-center justify-between pt-6 text-xl border-t-2 border-red-800">
              <span>Total</span>
              <span>{formatPrice(cartGrandTotal)}</span>
            </div>
            <button
              className="block mt-5 mx-auto px-6 py-0.5 text-md capitalize font-bold text-red-800 hover:text-white hover:bg-red-800 border-2 border-red-800 rounded-sm duration-200"
              onClick={openModal}
            >
              clear cart
            </button>
          </>
        )}
        <div className="flex self-end justify-around my-8 text-sm">
          <button
            className="p-2 capitalize duration-300 border rounded-md border-slate-400 hover:bg-black hover:text-white hover:border-black"
            onClick={() => closeCart()}
          >
            continue shopping
          </button>
          <button className="p-2 capitalize duration-300 border rounded-md border-slate-400 hover:bg-black hover:text-white hover:border-black">
            proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default CartFooter;
