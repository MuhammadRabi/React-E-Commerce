import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useAddtoWishlist } from "../../hooks/useAddToWishList";

const WishIcon = ({ product }) => {
  const { addItemToWishlist, isWishlistActive } = useAddtoWishlist(product);
  return (
    <button
      onClick={() => addItemToWishlist(product)}
      className="absolute z-20 p-2 text-white duration-300 rounded-full cursor-pointer right-2 top-1 bg-black/10 hover:bg-black/30 w-fit"
    >
      {isWishlistActive ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default WishIcon;
