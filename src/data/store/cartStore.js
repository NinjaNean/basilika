import { create } from "zustand";
import { menuData } from "../menuData";

const useCartStore = create((set) => ({
  kundvagn: [],
  totalPrice: 0,
  foodDataList: menuData,

  addToCart: (menuOption) => {
    //Om menuOption.id finns
    //Addera priset på produkten med samma id

    //Om inte
    //Lägg till id och pris i listan

    set((state) => ({
      kundvagn: [...state.kundvagn, { id: menuOption.id, price: menuOption.price }],
    }));
  },

  removeFromCart: (menuOption) => {},
}));

export default useCartStore;

//Function som räknar ihop totala priset på allt som ligger i kundvagn.
function sum(a, b) {
  return a + b;
}
