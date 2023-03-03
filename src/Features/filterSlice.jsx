import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filteredProducts: [],
  allProducts: [],
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
})

export default filterSlice.reducer
