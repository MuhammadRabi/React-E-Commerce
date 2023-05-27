import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartStore } from "../../Features/cartStore";
import { AiOutlineHeart } from "react-icons/ai";
import { useModalStore } from "../../Features/modalStore";
import { useWishlistStore } from "../../Features/wishlistStore";

const CartIcon = () => {
  const itemsInCart = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const openModal = useModalStore((state) => state.openModal);
  return (
    <div className="hidden px-4 py-1 rounded-full cursor-pointer lg:block md:px-8">
      <div className="flex space-x-6 text-3xl duration-75">
        <div className="relative">
          <AiOutlineHeart className="duration-300 hover:scale-125" />
          <span className="absolute z-10 flex items-center justify-center w-4 h-4 p-3 text-xs text-white bg-red-700 rounded-full -right-4 -top-2">
            {wishlist.length}
          </span>
        </div>
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
      </div>
    </div>
  );
};
export default CartIcon;
