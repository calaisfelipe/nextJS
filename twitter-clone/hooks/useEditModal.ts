import { create } from "zustand";

type EditModelStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useEditModal = create<EditModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditModal;
