import { create } from 'zustand'
import menuData from './menuData.js'


const useMenuStore = create((set) => ({
    isOpen: false,
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    closeMenu: () => set({ isOpen: false }),
  }));

  const useEditMenuStore = create((set) => ({
    name: '',
    description: '',
    price: '',
    img: '',
    foodDataList: menuData,
    setName: (newName) => set({ name: newName }),
    setDescription: (newDesc) => set({ description: newDesc }),
    setPrice: (newPrice) => set({ price: newPrice }),
    setImg: (newImg) => set({ img: newImg }),

    toggleItemActive: (id) => {
      set((state) => ({
        foodDataList: state.foodDataList.map((item) =>
          item.id === id ? { ...item, active: !item.active } : item
        )
      }));
    }
    
    
    
  }));
 
  
  
  export {useMenuStore, useEditMenuStore};