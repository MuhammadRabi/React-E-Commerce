import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const url = "https://dummyjson.com/products/?limit=100&"

const initialState = {
  products: [],
  isloading: false,
}

export const getProducts = createAsyncThunk(
  "cart/getProducts",
  async (name, thunkApi) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue("there is some error!")
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products
        console.log(action.payload.products)
      })
      .addCase(getProducts.pending, (state) => {
        console.log("pending")
        state.isloading = true
      })
      .addCase(getProducts.rejected, (state) => {
        console.log("is rejected")
        state.isloading = true
      })
  },
})

export default productSlice.reducer
