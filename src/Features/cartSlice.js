import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = []
    },
    addProduct: (state, action) => {
      state.amount += action.payload.amount
      state.total += action.payload.amount * action.payload.price

      const selectedItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (selectedItem) {
        selectedItem.amount += 1
      } else {
        state.items.push(action.payload)
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
      /*       state.amount += 1
       */
    },

    decrease: (state, action) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload
      )
      selectedItem.amount -= 1
      /*       state.amount -= 1
       */
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
  addProduct,
  removeItem,
  increase,
  decrease,
  calculateTotalPrice,
} = cartSlice.actions
export default cartSlice.reducer
