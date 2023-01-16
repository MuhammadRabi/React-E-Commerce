import { createSlice } from "@reduxjs/toolkit"
import { getFromLocalStorage } from "../localStorage"

const initialState = {
  items: getFromLocalStorage(),
  amount: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = []
      state.amount = 0
    },

    addProduct: (state, action) => {
      state.amount += 1
      state.totalPrice += action.payload.price

      const selectedItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (selectedItem) {
        selectedItem.amount += 1
      } else {
        state.items.push({ ...action.payload, amount: 1 })
      }
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

    // calculate total price function
    calculateTotalPrice: (state) => {
      let { totalPrice, amount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount

          cartTotal.totalPrice += itemTotal
          cartTotal.amount += amount

          return cartTotal
        },
        {
          amount: 0,
          totalPrice: 0,
        }
      )
      totalPrice = parseFloat(totalPrice.toFixed(2))
      state.amount = amount
      state.totalPrice = totalPrice
    },
  },
})

export const {
  clearCart,
  addProduct,
  removeItem,
  increase,
  decrease,
  calculateTotalPrice,
} = cartSlice.actions

export default cartSlice.reducer
