import { create } from "zustand";

interface AboutLoginPageStore {
  isLogined: boolean;
  setIsLogined: (T: boolean) => void;
}

const useLoginPageStore = create<AboutLoginPageStore>((set) => ({
  isLogined: false,
  setIsLogined: (T: boolean) => set({ isLogined: T }),
}));

export default useLoginPageStore;
