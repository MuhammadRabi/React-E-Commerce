import { createSlice } from "@reduxjs/toolkit"
import cartItemsData from "../cartItemsData"

const initialState = {
  items: cartItemsData,
  amount: 4,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      const newItemList = state.items.filter((item) => item.id !== itemId)
      state.items = newItemList
    },
    increase: (state, action) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload
      )
      selectedItem.amount += 1
    },
    decrease: (state, action) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload
      )
      selectedItem.amount -= 1
    },
    calculateTotalPrice: (state) => {
      let amount = 0
      let total = 0
      state.items.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotalPrice,
} = cartSlice.actions
export default cartSlice.reducer
