import { create } from "zustand";

const useMenuStore = create((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

const useEditMenuStore = create((set) => ({
  name: "",
  description: "",
  price: "",
  img: "",
  setName: (newName) => set({ name: newName }),
  setDescription: (newDesc) => set({ description: newDesc }),
  setPrice: (newPrice) => set({ price: newPrice }),
  setImg: (newImg) => set({ img: newImg }),
}));

export { useMenuStore, useEditMenuStore };
