import { create } from "zustand"
import { devtools } from "zustand/middleware"
// import { appData } from "../utils/data";

const products = (set) => ({
  // productsList: appData, at development
  productsList: [],
  featuredProducts: [],
  isLoading: true,

  //fetching data
  getProducts: async () => {
    const url = "https://www.course-api.com/react-store-products"
    //www.course-api.com/react-store-products
    https: try {
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
})

export const useProductStore = create(devtools(products))
