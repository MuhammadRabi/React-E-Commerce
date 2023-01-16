import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const url = "https://dummyjson.com/products/?limit=100&"

const initialState = {
  products: [],
  isLoading: true,
}

export const getProducts = createAsyncThunk(
  "cart/getProducts",
  async (name, thunkApi) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      return data
    } catch (error) {
      return thunkApi.rejectWithValue("there is some error!")
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products
        state.isLoading = false
        console.log(action.payload.products)
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default productSlice.reducer
