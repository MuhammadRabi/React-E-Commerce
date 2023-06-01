import { create } from "zustand";

export const useModalStore = create((set) => ({
  isModalOpen: false,
  isSidebarOpen: false,
  isConfirmationOpen: false,
  openModal: () =>
    set((state) => ({
      isModalOpen: true,
    })),
  closeModal: () =>
    set((state) => ({
      isModalOpen: false,
    })),
  openSidebar: () => {
    set((state) => ({
      isSidebarOpen: true,
    })),
      (document.body.style.overflow = "hidden");
  },
  closeSidebar: () => {
    set((state) => ({
      isSidebarOpen: false,
    })),
      (document.body.style.overflow = "");
  },
  closeConfirmation: () => {
    set((state) => ({
      isConfirmationOpen: false,
    }));
  },
  openConfirmation: () => {
    set((state) => ({
      isConfirmationOpen: true,
    }));
  },
}));
