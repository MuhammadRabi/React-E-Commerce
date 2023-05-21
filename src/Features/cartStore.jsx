import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

const store = (set) => ({
  items: [],
  cartGrandTotal: 0,
  isCartOpen: false,

  // working
  addToCart: (item) => {
    set((state) => ({
      items: [...state.items, item],
    }));
  },
  // working
  clearCart: () =>
    set((state) => ({
      items: [],
      cartGrandTotal: 0,
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => {
        return item.id !== id;
      }),
    })),
  // calculate total price of the cart
  setCartGrandTotal: (price) =>
    set((state) => ({
      cartGrandTotal: price,
    })),
  increaseCartGrandTotal: (price) =>
    set((state) => ({
      cartGrandTotal: state.cartGrandTotal + price,
    })),
  decreaseCartGrandTotal: (price) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal - price })),
  openCart: () => {
    set((set) => ({
      isCartOpen: true,
    })),
      (document.body.style.overflow = "hidden"); // Disable scrolling on body
  },

  closeCart: () => {
    set((set) => ({
      isCartOpen: false,
    })),
      (document.body.style.overflow = ""); // Disable scrolling on body
  },
});

export const cartStore = create(
  persist(devtools(store), { name: "cartStore" })
);
