import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isModalOpen: false,
}
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true
      console.log("modal is open!")
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
