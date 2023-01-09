import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./Features/cartSlice"
import modalReducer from "./Features/modalSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})
