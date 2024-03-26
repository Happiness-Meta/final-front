import { create } from "zustand";

interface AboutModalStore {
  isModalOpen: boolean;
  togglePayModal: () => void;
  isCancelModalOpen: boolean;
  toggleCancelModal: () => void;
}

const useModalstore = create<AboutModalStore>((set) => ({
  isModalOpen: false,
  togglePayModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  isCancelModalOpen: false,
  toggleCancelModal: () => set((state) => ({ isCancelModalOpen: !state.isCancelModalOpen })),
}));

export default useModalstore;
