import { create } from "zustand";

export const modalStore = create((set) => ({
  isModalOpen: false,
  isSidebarOpen: false,
  isConfirmationOpen: false,
  openModal: () =>
    set((set) => ({
      isModalOpen: true,
    })),
  closeModal: () =>
    set((set) => ({
      isModalOpen: false,
    })),
  openSidebar: () => {
    set((set) => ({
      isSidebarOpen: true,
    })),
      (document.body.style.overflow = "hidden");
  },
  closeSidebar: () => {
    set((set) => ({
      isSidebarOpen: false,
    })),
      (document.body.style.overflow = "");
  },
  closeConfirmation: () => {
    set((set) => ({
      isConfirmationOpen: false,
    }));
  },
  openConfirmation: () => {
    set((set) => ({
      isConfirmationOpen: true,
    }));
  },
}));
