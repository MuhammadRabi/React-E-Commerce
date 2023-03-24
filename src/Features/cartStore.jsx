import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { persist } from "zustand/middleware"

const store = (set) => ({
  items: [],
  amount: 0,
  totalPrice: 0,
  // working
  addToCart: (item) => {
    set((state) => ({
      items: [...state.items, item],
      amount: state.amount + 1,
      totalPrice: state.totalPrice + item.price,
    }))
  },
  // working
  clearCart: () =>
    set((state) => ({
      items: [],
      amount: 0,
      totalPrice: 0,
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => {
        return item.id !== id
      }),
      amount: state.amount - 1,
    })),
  increase: (id) =>
    set((state) => ({
      /*      const selectedItem = state.items.find(
        (item) => item.id === id
      )
      selectedItem.amount+1 */
    })),
  /*  decrease: (id) =>
    set((state) => {
      const selectedItem = state.items.find((item) => item.id === id)
      selectedItem.amount -= 1
      return { items: [...state.items] }
    }), */
  //  calculateTotalPrice: () => set((state) => ({})),
})

export const cartStore = create(persist(devtools(store), { name: "cartStore" }))
