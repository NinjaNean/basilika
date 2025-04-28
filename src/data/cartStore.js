import { create } from "zustand";
import { getMenuFromAPI, saveFoodDataToAPI } from "./jsonStorage";

const useCartStore = create((set, get) => ({
  cart: [],
  totalPrice: 0,
  foodDataList: [],

  switchAddFoodVisible: (option) => {
    set({ addFoodVisible: !!option });
  },

  setFoodData: (data) => set({ foodDataList: data }),

  addToCart: (menuOption) => {
    const { cart, totalPrice } = get();
    let product = cart.find((item) => item.id === menuOption.id);

    if (product != undefined) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, price: item.price + menuOption.price, quantity: item.quantity + 1 } : item
      );

      set(() => ({
        cart: updatedCart,
      }));
    } else {
      set((state) => ({
        cart: [...state.cart, { id: menuOption.id, price: menuOption.price, quantity: 1 }],
      }));
    }

    set(() => ({
      totalPrice: setTotalPrice(totalPrice, "+", menuOption.price),
    }));
  },

  removeFromCart: (menuOption) => {
    const { cart, totalPrice } = get();
    let product = cart.find((item) => item.id === menuOption.id);

    if (!product) return;

    if (product != undefined && product.quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, price: item.price - menuOption.price, quantity: item.quantity - 1 } : item
      );

      set(() => ({
        cart: updatedCart,
      }));
    } else {
      const filterdCart = cart.filter((item) => item.id !== menuOption.id);

      set(() => ({
        cart: filterdCart,
      }));
    }

    set(() => ({
      totalPrice: setTotalPrice(totalPrice, "-", menuOption.price),
    }));
  },

  removeFoodItem: async (id) => {
    const { foodDataList } = get();

    // Uppdatera staten genom att ta bort den specifika matvaran
    set((state) => ({
      foodDataList: state.foodDataList.filter((item) => item.id !== id),
    }));

    // Skicka den uppdaterade listan till API efter att staten har uppdaterats
    await saveFoodDataToAPI(foodDataList.filter((item) => item.id !== id));
  },

  updateFoodItem: async (id, newData) => {
    const { foodDataList } = get();

    set((state) => ({
      foodDataList: state.foodDataList.map((item) => (item.id === id ? { ...item, ...newData } : item)),
    }));

    await saveFoodDataToAPI(
      foodDataList.map((item) => (item.id === id ? { ...item, ...newData, active: !item.active } : item))
    );
  },

  addFoodItem: async (item) => {
    const { foodDataList } = get();

    set((state) => ({
      foodDataList: [...state.foodDataList, { ...item, active: false }],
    })),
      await saveFoodDataToAPI([...foodDataList, item]);
  },

  // klicka på pennan för att redigera maträtt
  toggleItemActive: async (id) =>
    set((state) => {
      return {
        foodDataList: state.foodDataList.map((item) => (item.id === id ? { ...item, active: !item.active } : item)),
      };
    }),
}));

export default useCartStore;

function setTotalPrice(totalPrice, operator, price) {
  let total = totalPrice;

  if (operator === "-") {
    total -= Number(price);
  } else {
    total += Number(price);
  }
  return total;
}
