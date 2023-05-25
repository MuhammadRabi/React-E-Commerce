import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  productsList: [],
  featuredProducts: [],
  isLoading: true,
  wishlist: [],

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
  // testing ...
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
});

const productStore = create(devtools(store));

export default productStore;
