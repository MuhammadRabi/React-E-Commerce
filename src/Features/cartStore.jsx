import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { persist } from "zustand/middleware"

const store = (set) => ({
  items: [],
  cartGrandTotal: 0,
  // working
  addToCart: (item) => {
    set((state) => ({
      items: [...state.items, item],
    }))
  },
  // working
  clearCart: () =>
    set((state) => ({
      items: [],
      totalPrice: 0,
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => {
        return item.id !== id
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
})

export const cartStore = create(persist(devtools(store), { name: "cartStore" }))
