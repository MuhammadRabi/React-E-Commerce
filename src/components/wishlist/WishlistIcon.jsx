import { useWishlistStore } from "../../Features/wishlistStore";
import { AiOutlineHeart } from "react-icons/ai";

const WishlistIcon = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  return (
    <div className="relative" onClick={() => toggleWishlist()}>
      <AiOutlineHeart className="duration-300 hover:scale-125" />
      <span className="absolute z-10 flex items-center justify-center w-4 h-4 p-3 text-xs text-white bg-red-700 rounded-full -right-4 -top-2">
        {wishlist.length}
      </span>
    </div>
  );
};

export default WishlistIcon;
