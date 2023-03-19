import { create } from "zustand"

export const modalStore = create((set) => ({
  isModalOpen: false,
  openModal: () =>
    set((set) => ({
      isModalOpen: true,
    })),
  closeModal: () =>
    set((set) => ({
      isModalOpen: false,
    })),
}))
