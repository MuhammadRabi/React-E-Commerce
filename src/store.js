import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./Features/cartSlice"
import modalReducer from "./Features/modalSlice"
import productsReducer from "./Features/productSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    products: productsReducer,
    /*     filter: filterReducer,
     */
  },
})
