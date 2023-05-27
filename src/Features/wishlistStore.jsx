import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const wishlist = (set) => ({
  isWishlistOpen: false,
  wishlist: [],

  addTowishlist: (item) =>
    set((state) => {
      const existingItem = state.wishlist.some(
        (product) => product.id === item.id
      );

      if (!existingItem) {
        return {
          wishlist: [...state.wishlist, item],
        };
      }

      return state;
    }),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),
  openWishlist: () =>
    set((set) => ({
      isWishlistOpen: true,
    })),
  closeWishlist: () =>
    set((set) => ({
      isWishlistOpen: false,
    })),
});

export const useWishlistStore = create(
  persist(devtools(wishlist), { name: "wishlistStore" })
);
