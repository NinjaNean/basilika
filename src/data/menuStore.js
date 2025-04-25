import { create } from 'zustand'
import menuData from './menuData.js'
import Joi from 'joi'



const menuInputSchema = Joi.object({
  storeName: Joi.string()
  .min(2)
  .max(100)
  .required(),

  storeDescription: Joi.string()
  .min(5)
  .max(300)
  .required(),

  storePrice: Joi.number()
  .positive()
  .precision(2)
  .required(),

  storeImg: Joi.string()
  .uri().
  required(), 
});



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
    setName: (newName) => set({ name: newName }),
    setDescription: (newDesc) => set({ description: newDesc }),
    setPrice: (newPrice) => set({ price: newPrice }),
    setImg: (newImg) => set({ img: newImg }),
  
  }));
 
  
  
  export {useMenuStore, useEditMenuStore, menuInputSchema};