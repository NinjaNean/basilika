import { create } from "zustand";
import { menuData } from "./menuData";

const useCartStore = create((set, get) => ({
  cart: [],
  totalPrice: 0,
  foodDataList: menuData,

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

  removeFoodItem: (id) =>
    set((state) => ({
      foodDataList: state.foodDataList.filter((item) => item.id !== id),
    })),

  updateFoodItem: (id, newData) =>
    set((state) => ({
      foodDataList: state.foodDataList.map((item) => (item.id === id ? { ...item, ...newData } : item)),
    })),

  // klicka på pennan för att redigera maträtt
  toggleItemActive: (id) => {
    set((state) => {
      console.log("menuStore: toggleItemActive", id);
      return {
        foodDataList: state.foodDataList.map((item) => (item.id === id ? { ...item, active: !item.active } : item)),
      };
    });
  },
}));

export default useCartStore;

function setTotalPrice(totalPrice, operator, price) {
  let total = totalPrice;

  if (operator === "-") {
    total -= price;
  } else {
    total += price;
  }
  return total;
}
