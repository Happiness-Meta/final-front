import { create } from "zustand";

interface AboutSignUpPageStore {
  isIndividual: boolean;
  setIsIndividual: (value: boolean) => void;
  techStackContainer: string[];
  addTechStack: (T: string) => void;
  removeTechStack: (T: string) => void;
  errorMessageAniStatus: boolean;
  activateErrorMessageAni: () => void;
}

const useSignUpPageStore = create<AboutSignUpPageStore>((set) => ({
  isIndividual: true,
  setIsIndividual: (value) => set({ isIndividual: value }),
  techStackContainer: [],
  addTechStack: (stack) =>
    set((state) => {
      if (
        !state.techStackContainer.includes(stack) &&
        state.techStackContainer.length <= 14
      ) {
        return {
          techStackContainer: [...state.techStackContainer, stack],
        };
      }
      return state;
    }),
  removeTechStack: (stack) =>
    set((state) => ({
      techStackContainer: state.techStackContainer.filter(
        (name) => name !== stack
      ),
    })),
  errorMessageAniStatus: false,
  activateErrorMessageAni: () =>
    set((state) => ({ errorMessageAniStatus: !state.errorMessageAniStatus })),
}));

export default useSignUpPageStore;
