import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const url = "https://course-api.com/react-store-products"

const initialState = {
  productsList: [],
  featuredProducts: [],
  filteredProducts: [],
  isLoading: true,
  sort: "name-a",
  filters: {
    text: "",
    company: "all",
    category: "all",
  },
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

      let tempProducts = state.productsList

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
    updateFilter: (state, action) => {
      const { name, value } = action.payload
      state.filters[name] = value
      // search filter
      const { text, company, category } = state.filters
      if (text === value) {
      }
      state.productsList = state.productsList.filter((item) =>
        item.name.toLowerCase().includes(value)
      )
      /*   if (company !== "all") {
      }
      state.productsList = state.productsList.filter(
        (item) => item.company === company
      )
      if (category !== "all") {
      }
      state.productsList = state.productsList.filter(
        (item) => item.category === category
      ) */
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsList = action.payload
        state.featuredProducts = action.payload.filter(
          (item) => item.featured === true
        )
        state.isLoading = false
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { updateSort, updateFilter } = productSlice.actions

export default productSlice.reducer
