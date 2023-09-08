import { create } from "zustand";

type Item = {
  id: number;
  name: string;
  price: number;
};

type useCartStoreType = {
  availableItems: Item[];
  cart: Item[];
  addCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};

const useCartStore = create<useCartStoreType>((set) => {
  return {
    availableItems: [
      {
        id: 1,
        name: "maça",
        price: 1,
      },
      {
        id: 2,
        name: "uva",
        price: 2,
      },
      {
        id: 3,
        name: "mamao",
        price: 3,
      },
    ],

    cart: [],
    addCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),
  };
});

export default useCartStore;
