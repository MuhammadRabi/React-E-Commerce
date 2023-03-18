import { create } from "zustand"

//const url = "https://course-api.com/react-store-products"

const useProductsStore = create((set) => ({
  productsList: [],
  featuredProducts: [],
  filteredProducts: [],
  isLoading: true,
  sort: "name-a",
  filters: {
    text: "",
    company: "all",
    category: "all",
  },
  // fetching data
  getProducts: async () => {
    try {
      const response = await fetch(
        "https://course-api.com/react-store-products"
      )
      const data = await response.json()
      set({ productsList: data })
      set({
        featuredProducts: data.filter((item) => item.featured === true),
        isLoading: false,
      })
    } catch (error) {
      console.log(error)
    }
  },
  // sorting products
  updateSort: (value) => {
    set((state) => {
      let tempProducts = [...state.productsList]
      if (value === "price-lowest") {
        tempProducts = state.productsList.sort((a, b) => {
          return a.price - b.price
        })
      } else if (value === "price-highest") {
        tempProducts = state.productsList.sort((a, b) => {
          return b.price - a.price
        })
      } else if (value === "name-a") {
        tempProducts = state.productsList.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      } else if (value === "name-z") {
        tempProducts = state.productsList.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return { productsList: tempProducts, sort: value }
    })
  },
}))

export default useProductsStore
