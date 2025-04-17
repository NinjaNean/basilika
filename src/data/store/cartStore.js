import { create } from "zustand";
import { menuData } from "../menuData";

const useCartStore = create((set, get) => ({
  kundvagn: [],
  totalPrice: 0,
  foodDataList: menuData,

  addToCart: (menuOption) => {
    const { kundvagn } = get();
    let search = kundvagn.find((item) => item.id === menuOption.id);

    if (search != undefined) {
      const updatedKundvagn = kundvagn.map((item) =>
        item.id === search.id ? { ...item, price: item.price + menuOption.price, quantity: item.quantity + 1 } : item
      );

      set(() => ({
        kundvagn: updatedKundvagn,
      }));
    } else {
      set((state) => ({
        kundvagn: [...state.kundvagn, { id: menuOption.id, price: menuOption.price, quantity: 1 }],
      }));
    }
  },

  removeFromCart: (menuOption) => {
    const { kundvagn } = get();
    let search = kundvagn.find((item) => item.id === menuOption.id);

    if (search != undefined && search.price != 0) {
      const updatedKundvagn = kundvagn.map((item) =>
        item.id === search.id ? { ...item, price: item.price - menuOption.price, quantity: item.quantity - 1 } : item
      );

      set(() => ({
        kundvagn: updatedKundvagn,
      }));
    } else if (!kundvagn) {
      let deleteObject = kundvagn.find((item) => item.price > 0);

      set(() => ({
        kundvagn: deleteObject,
      }));
    }
  },
}));

export default useCartStore;

//Function som räknar ihop totala priset på allt som ligger i kundvagn.
function sum(a, b) {
  return a + b;
}
