import { create } from "zustand"
import { devtools } from "zustand/middleware"

const store = (set) => ({
  productsList: [],
  featuredProducts: [],
  isLoading: true,
  searchQuery: "",

  // fetching data
  getProducts: async () => {
    const url = "https://course-api.com/react-store-products"
    try {
      const response = await fetch(url)
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

  setSearchQuery: (searchQuery) =>
    set((state) => {
      let filteredProducts = [...state.productsList]

      if (searchQuery === "") {
        filteredProducts = state.productsList
      } else {
        filteredProducts = state.productsList.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      return { searchQuery, productsList: filteredProducts }
    }),
})

const productStore = create(devtools(store))

export default productStore
