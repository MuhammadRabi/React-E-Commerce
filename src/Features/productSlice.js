import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const url = "https://course-api.com/react-store-products"

const initialState = {
  productsList: [],
  isLoading: true,
  sort: "name-a",
}

export const getProducts = createAsyncThunk(
  "cart/getProducts",
  async (name, thunkApi) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(thunkApi.getState())
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

      let tempProducts = [...state.productsList]

      if (state.sort === "price-lowest") {
        tempProducts = state.productsList.sort((a, b) => {
          return a.price - b.price
        })
      } else if (state.sort === "price-highest") {
        tempProducts = state.productsList.sort((a, b) => {
          return b.price - a.price
        })
      } else if (state.sort === "name-a") {
        tempProducts = state.productsList.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      } else if (state.sort === "name-z") {
        tempProducts = state.productsList.sort((a, b) => {
          return b.name.localeCompare(a.name)
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
        state.productsList = action.payload
        state.isLoading = false
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { updateSort } = productSlice.actions

export default productSlice.reducer
