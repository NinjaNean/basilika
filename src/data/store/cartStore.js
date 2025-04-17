import { create } from "zustand";
import { menuData } from "../menuData";

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

    if (product != undefined && product.price > 0) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, price: item.price - menuOption.price, quantity: item.quantity - 1 } : item
      );

      set(() => ({
        cart: updatedCart,
      }));
    } else if (!cart) {
      let deleteObject = cart.find((item) => item.price > 0);

      set(() => ({
        cart: deleteObject,
      }));
    }

    set(() => ({
      totalPrice: setTotalPrice(totalPrice, "-", menuOption.price),
    }));
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
