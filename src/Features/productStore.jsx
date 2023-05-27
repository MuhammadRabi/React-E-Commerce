import { create } from "zustand";
import { devtools } from "zustand/middleware";

const products = (set) => ({
  productsList: [],
  featuredProducts: [],
  isLoading: true,

  // fetching data
  getProducts: async () => {
    const url = "https://course-api.com/react-store-products";
    try {
      const response = await fetch(url);
      const data = await response.json();
      set({ productsList: data });
      set({
        featuredProducts: data.filter((item) => item.featured === true),
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  },
});

export const useProductStore = create(devtools(products));
