import { create } from "zustand";

type UsePizzaProps = {
  base: string;
  toppings: string[];
  setBase: (base: string) => void;
  setToppins: (toppings: string[]) => void;
};

const usePizza = create<UsePizzaProps>((set) => ({
  base: "",
  toppings: [],
  setBase: (base) => set(() => ({ base: base })),
  setToppins: (toppings) =>
    set(() => ({ toppings: [...toppings] })),
  
}));

export default usePizza;
