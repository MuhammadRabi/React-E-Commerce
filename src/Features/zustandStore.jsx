import { create } from "zustand"

//useCartStore = create(function)
const useCartStore = create((set) => ({
  items: 0,
  amount: 0,
  totalPrice: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

const useProductsStore = create((set) => ({
  productsList: [],
  featuredProducts: [],
  filteredProducts: [],
  isLoading: true,
  sort: "name-a",

  getProducts: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
