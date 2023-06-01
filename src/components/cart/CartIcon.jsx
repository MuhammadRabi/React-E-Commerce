import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from "../../Features/cartStore";
import { useModalStore } from "../../Features/modalStore";

const CartIcon = () => {
  const itemsInCart = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className="relative">
      <AiOutlineShoppingCart
        className="duration-300 hover:scale-125"
        onClick={() => {
          openCart();
          openModal();
        }}
      />
      <span className="absolute z-10 flex items-center justify-center w-4 h-4 p-3 text-xs text-white bg-red-700 rounded-full -right-4 -top-2">
        {itemsInCart.length}
      </span>
    </div>
  );
};
export default CartIcon;
