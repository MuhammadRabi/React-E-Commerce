import React, { useState } from "react";
import { useWishlistStore } from "../Features/wishlistStore";
import { toast } from "react-toastify";

export const useToWishlist = (product) => {
  const addtowishlist = useWishlistStore((state) => state.addTowishlist);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

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
