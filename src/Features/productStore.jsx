import { create } from "zustand"
import { devtools } from "zustand/middleware"

const store = (set) => ({
  productsList: [],
  featuredProducts: [],
  isLoading: true,
  sort: "name-a",
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
