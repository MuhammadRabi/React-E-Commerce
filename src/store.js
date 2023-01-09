import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./Features/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
