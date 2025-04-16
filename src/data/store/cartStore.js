import { create } from "zustand";

const useCartStore = create((set) => ({
  kundvagn: [],

  addToCart: (menuItem) =>
    set((state) => {
      const alreadyInCart = state.kundvagn.find((item) => item.id === menuItem.id);

      if (alreadyInCart) {
        // Om menuItem finns ska den adderas
        // return { kundvagn: state.kundvagn.map((item) =>
        // item.id === menuItem.id ? { ...item, qty: item.qty + 1} : item ), };
        //)
      } else {
        //om inte menuItem finns ska den minskas eller tas bort
        return console.log("finns inte");
      }
    }),

  // removeFromCart:

  // totalPrice:
}));

export default { useCartStore };
