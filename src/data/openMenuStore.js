import { create } from "zustand";

const useOpenMenuStore = create((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

export { useOpenMenuStore };
