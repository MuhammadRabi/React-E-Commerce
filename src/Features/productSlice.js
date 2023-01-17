import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const url = "https://dummyjson.com/products/?limit=100&"

const initialState = {
  products: [],
  isLoading: true,
  filteredProducts: [],
  sort: "name-a",
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
  reducers: {
    updateSort: (state, action) => {
      state.sort = action.payload

      let tempProducts = [...state.products]

      if (state.sort === "price-lowest") {
        tempProducts = state.products.sort((a, b) => {
          return a.price - b.price
        })
      } else if (state.sort === "price-highest") {
        tempProducts = state.products.sort((a, b) => {
          return b.price - a.price
        })
      } else if (state.sort === "name-a") {
        tempProducts = state.products.sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
      } else if (state.sort === "name-z") {
        tempProducts = state.products.sort((a, b) => {
          return b.title.localeCompare(a.title)
        })
      }
    },
  },
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

export const { updateSort } = productSlice.actions

export default productSlice.reducer
