import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useToWishlist } from "../../hooks/useToWishlist";

const WishIcon = ({ product }) => {
  const { addItemToWishlist, isWishlistActive } = useToWishlist(product);
  return (
    <button
      aria-label="add-to-wishlist-btn"
      onClick={() => addItemToWishlist(product)}
      className="absolute z-20 p-2 text-white duration-300 rounded-full outline-none cursor-pointer right-2 top-1 bg-black/10 hover:bg-black/30 w-fit"
    >
      {isWishlistActive ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
    </button>
  );
};

export default WishIcon;
