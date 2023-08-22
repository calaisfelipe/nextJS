import { create } from "zustand";

type RegisterModelStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useRegisterModal = create<RegisterModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal ;
