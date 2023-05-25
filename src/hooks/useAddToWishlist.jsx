import { useState } from "react";
import productStore from "../Features/productStore";
import { toast } from "react-toastify";

const useAddToWishList = (product) => {
  const addtowishlist = productStore((state) => state.addTowishlist);
  const wishlist = productStore((state) => state.wishlist);
  const removeFromWishlist = productStore((state) => state.removeFromWishlist);

  const isOnWishlist = (productId) =>
    wishlist.find((item) => item.id === productId);

  const [isWishlistActive, setIsWishlistActive] = useState(
    isOnWishlist(product.id)
  );

  const addItemToWishlist = (product) => {
    if (!isOnWishlist(product.id)) {
      addtowishlist(product);
      toast.success("Product added to wishlist!");
      setIsWishlistActive(true);
      console.log(product.id);
    } else {
      removeFromWishlist(product.id);
      toast.error("Product is removed from wishlist!");
      setIsWishlistActive(false);
      console.log(product.id);
    }
  };

  return { addItemToWishlist, isWishlistActive };
};

export default useAddToWishList;
