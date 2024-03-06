import { create } from "zustand";

interface AboutSignUpPageStore {
  isIndividual: boolean;
  setIsIndividual: (value: boolean) => void;
}

const useSignUpPageStore = create<AboutSignUpPageStore>((set) => ({
  isIndividual: true,
  setIsIndividual: (value) => set({ isIndividual: value }),
}));

export default useSignUpPageStore;
