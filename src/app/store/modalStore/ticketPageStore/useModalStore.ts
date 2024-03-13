import { create } from "zustand";

interface AboutModalStore {
  isModalOpen: boolean;
  togglePayModal: () => void;
}

const useModalstore = create<AboutModalStore>((set) => ({
  isModalOpen: false,
  togglePayModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export default useModalstore;
